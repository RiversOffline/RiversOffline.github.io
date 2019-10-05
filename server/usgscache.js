#!/usr/bin/node

//Use crontab @reboot to make this file run on reboots.

//Loads the latest USGS data and writes it to usgscache.json every 15 minutes.
//TODO: Calculate virtual gauges here. Reccomend Pitboss npm module for sandboxing.
//Also runs dataparse.js periodically to update the data on rivers.run.

const fs = require("fs")
const path = require("path")
const child_process = require("child_process")

const jsonShrinker = require("json-shrinker")

async function updateRiverData() {
	process.stdout.write("Generating riverdata.json - this may take a while (should be no more than 200 milliseconds per river)\n")
	let args = [path.join(__dirname, "dataparse.js")]
	if (process.argv.includes("--nogauges")) {args.push("--nogauges")}

	let dataparse = child_process.spawn("node", args)

	dataparse.stdout.on("data", function(data) {console.log(data.toString())})
	dataparse.stderr.on("data", function(data) {console.log(data.toString())})
	await new Promise((resolve, reject) => {
		dataparse.on("close", resolve)
		dataparse.on("error", reject)
	})
	process.stdout.write("riverdata.json generated.\n")
}

//On reboot, and every 24 hours, run dataparse.js to keep the data on rivers.run current.
let riverDataPromise;
if (!process.argv.includes("--noriverdata")) {
	riverDataPromise = updateRiverData()
	setInterval(updateRiverData, 1000*60*60*24)
}

//Some actions should be performed at installation, but there is no need to start the server.
//Although I used to always start the server, an error in server.listen because of the port already being uesd
//lead to the entire program being terminated.
let notificationServer = require(path.join(__dirname, "notificationserver.js")) //On reboot, run notificationserver.js
if (!process.argv.includes("--install")) {notificationServer()}

const sendNotifications = require(path.join(__dirname, "sendnotifications.js"));

const compressor = require(path.join(__dirname, "precompress.js"))

const utils = require(path.join(__dirname, "utils.js"))

const gaugeUtils = require(path.join(__dirname, "gauges.js"))

fs.chmodSync(__filename, 0o775) //Make sure this file is executable. This will help prevent crontab setup issues.

let riverDataPath = path.join(utils.getSiteRoot(), "riverdata.json")

async function updateCachedData() {
	console.log("Preparing flow data.\n")

	if (riverDataPromise) {await riverDataPromise; riverDataPromise = null}

	if (!fs.existsSync(riverDataPath)) {
		//Even if the user told us not to load data, we are currently forced to.
		console.warn("No river data available. Running updateRiverData once to permit usgscache.js to continue.")
		updateRiverData()
	}

	let riverarray = JSON.parse(await fs.promises.readFile(riverDataPath, {encoding:"utf8"}))

    var sites = []
    for (let i=0;i<riverarray.length;i++) {
		let values = [riverarray[i].usgs]
		riverarray[i].relatedusgs && values.concat(riverarray[i].relatedusgs)
		for (let i=0;i<values.length;i++) {
			let usgsID = values[i]
			if (!usgsID) {continue}
			sites.push(usgsID)
		}
    }

	let gauges = await gaugeUtils.loadData(sites)
	let flowDataPath = path.join(utils.getSiteRoot(), "flowdata2.json")

	await fs.promises.writeFile(flowDataPath, jsonShrinker.stringify(gauges))

	console.log("Flow data prepared.\n")


	if (process.argv[2] !== "--install") {
		console.time("Initial compression run on flowdata2.json")
		await compressor.compressFile(flowDataPath, 9, {ignoreSizeLimit: true, alwaysCompress: true})
		console.timeEnd("Initial compression run on flowdata2.json")
		//Level 11 could take a while... Get level 9 done first.
		console.time("Max compression on flowdata2.json")
		await compressor.compressFile(flowDataPath, 11, {ignoreSizeLimit: true, alwaysCompress: true})
		console.timeEnd("Max compression on flowdata2.json")
	}


	//Run whenever the minutes on the hour is a multiple of 15.
	let currentTime = new Date()
	if (currentTime.getMinutes() === 0) {currentTime.setMinutes(15)}
	else {currentTime.setMinutes(Math.ceil(currentTime.getMinutes()/15)*15)}

	await fs.promises.appendFile(path.join(utils.getLogDirectory(), 'executiontimer.log'), (currentTime.getTime() - Date.now() + 60*1000) + '\n');


	//End install script
	if (process.argv[2] === "--install") {
		console.log("To update river and flow data in the future, run node usgscache.js --install (if you are running the server, data automatically updates).")
		process.exit()
	}

	sendNotifications()

	console.log("Precompressing files...")
	compressor.compressFiles(utils.getSiteRoot())

	let timer = setTimeout(updateCachedData, currentTime.getTime() - Date.now() + 60*1000) //Add a 1 minute delay to try and make sure that usgs has time to update. Do not think this is needed.
	console.log(timer)
}

updateCachedData()
