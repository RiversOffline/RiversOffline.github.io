const webpush = require("web-push")
const path = require("path")
const fs = require("fs")

const utils = require(path.join(__dirname, "utils.js"))
const subscriptionManager = require(path.join(__dirname, "subscriptionManager.js"))

const vapidKeys = require(path.join(__dirname, "vapidKeys.js"))

webpush.setVapidDetails(
  'mailto:admin@rivers.run',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

function sendNotifications(ignoreNoneUntil = false) {
	if (!fs.existsSync(storagePath)) {
		//There are no subscriptions
		console.warn("No subscriptions. ")
		return
	}
	let subscriptions = JSON.parse(fs.readFileSync(storagePath, {encoding:"utf8"}))
	let flowData = JSON.parse(fs.readFileSync(path.join(utils.getSiteRoot(), "flowdata2.json"), {encoding:"utf8"}))

	for (let url in subscriptions) {
		let user = subscriptions[url]

        //Don't send the user a notification yet.
        if (!ignoreNoneUntil && user.noneUntil > Date.now()) {continue;}

		let parameters = user.parameters

        let data = {};
		for (let gauge in parameters) {
			let rivers = parameters[gauge]
			let flow = flowData[gauge]
			for (let prop in rivers) {
				let river = rivers[prop]

				let values;

				if (river.units === "cfs") {values = flowData[gauge].cfs}
				if (river.units === "ft") {values = flowData[gauge].feet}

				let latest = values[values.length - 1].value

				if (!(river.minimum < latest && latest < river.maximum)) {
					delete rivers[prop]
				}
				else {
					river.current = latest
				}
                data[prop] = rivers[prop]
			}
		}
		
		//Consider if we should overrule user.noneUntil on changes.
		let previousData = user.previousMessage
		
		//Don't send empty unless it is a change.
		//TODO: Consider sending the user a demo message if this is their first time (so if previousData is not defined
		
		if (!previousData || JSON.stringify(previousData) === "{}") {
			if (JSON.stringify(data) === "{}") {
				continue; //We are sending an empty message, and we either already sent one or never sent a message in the first place.
			}
		} 
		
		user.previousMessage = data
		subscriptionManager.saveUserSubscription(user)
		
		
		
        //We have now deleted every river that is not runnable. Send a push notification with the object of rivers.
        webpush.sendNotification(user.subscription, JSON.stringify(data), {
            //Not sure if vapidDetails is needed, because webpush.setVapidDetails was used above.
            vapidDetails: {
                subject: 'mailto:admin@rivers.run',
                publicKey: vapidKeys.publicKey,
                privateKey: vapidKeys.privateKey
            },
            TTL: 60*60*36 //Store notification for up to 36 hours.
        }).catch((e) => {
            console.error(e)
            //The users subscription is either now invalid, or never was valid.
            if (e.statusCode === 410 || e.statusCode === 404) {
                subscriptionManager.deleteUserSubscription(user.subscription.endpoint)
            }
        }).then(console.log)
	}
}

module.exports = sendNotifications