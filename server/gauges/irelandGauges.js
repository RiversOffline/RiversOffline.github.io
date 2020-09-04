const path = require("path")
const fs = require("fs")

const fetch = require("node-fetch")
const csvParser = require("csv-parser")

const utils = require(path.join(__dirname, "../", "utils.js"))

//Site names and coordinates in file at http://waterlevel.ie/geojson/
let gaugeMetadataPath = path.join(utils.getDataDirectory(), "ireland-geojson.json")


async function downloadMetadata() {
	return (await fetch("https://waterlevel.ie/geojson/")).body.pipe(fs.createWriteStream(gaugeMetadataPath))
}

async function getMetadata() {
	//Make sure we have the sites file.
	if (!fs.existsSync(gaugeMetadataPath)) {
		console.log("Ireland gauge metadata is not available. Running download script...")
		await downloadMetadata()
	}

	//If the sites file is over 7 days old, download it again.
	let age = Date.now() - (await fs.promises.stat(gaugeMetadataPath)).mtime

	if (age > 1000*60*60*24*7) {
		console.log("Ireland gauge metadata is over " + Math.floor(age/1000/60/60) + " hours old. Running download script...")
		try {
			await downloadMetadata()
		}
		catch(e) {
			console.error(e)
		}
	}

	let metadata = JSON.parse(await fs.promises.readFile(gaugeMetadataPath, {encoding: "utf-8"}))

	//Reformat metadata for easy usage.
	let obj = {}
	metadata.features.forEach((value) => {
		try {
			let gauge = {}
			gauge.name = value.properties.name
			gauge.lat = value.geometry.coordinates[0]
			gauge.lon = value.geometry.coordinates[1]
			let gaugeID = value.properties.ref.slice(5)
			if (Number(gaugeID) < 41000 && Number(gaugeID) > 1) {
				obj[gaugeID] = gauge //Other gauge IDs are stated to be unsuitable for re-publication.
			}
		}
		catch (e) {
			console.error(e)
		}
	})
	return obj
}


async function loadIrelandOPWGauge(gaugeID, sensorCode = 1) {
	//Load gauges from the Ireland Office of Public Works.
	//API info at https://waterlevel.ie/page/api/

	let metadata = await getMetadata()

	//sensorCode must be a four digit string. Code 0001 is for flow levels, temperature is 0002.
	sensorCode = String(sensorCode)
	sensorCode = ("0".repeat(4 - sensorCode.length)) + sensorCode

	if (sensorCode !== "0001") {throw "Sensor codes other than code 1 are not supported. "}


	//gaugeID must be a five character string. Usually all digits.

	//Only gaugeIDs between 00001 and 41000 are reccomended for re-publication, and it appears to be exclusive. (https://waterlevel.ie/faq/)
	if (isNaN(gaugeID)) {
		throw "Gauge ID should be a 5 character code, and only values between 1 and 41000, exclusive, will be allowed."
	}
	gaugeID = String(gaugeID)
	gaugeID = ("0".repeat(5 - gaugeID.length)) + gaugeID

	if (Number(gaugeID) >= 41000 || Number(gaugeID) <= 1) {throw "Only gaugeIDs between 1 and 41000, exclusive, are allowed. "}

	let url = "https://waterlevel.ie/data/day/" + gaugeID + "_" + sensorCode + ".csv"

	let response = await fetch(url)

	let results = [];
    await new Promise((resolve, reject) => {
        response.body.pipe(csvParser({
            mapHeaders: function({header, index}) {
                if (header === "datetime") {return "dateTime"}
				return header
            }
        }))
        .on('data', (data) => results.push(data))
        .on('end', resolve);
    })

	results = results.map((reading) => {
		reading.dateTime = new Date(reading.dateTime).getTime()

		let meterInFeet = 3.2808399
		if (!isNaN(reading.value)) {
			reading.feet = Number(reading.value) * meterInFeet
			//Round to 2 digits
			reading.feet = Math.round(reading.feet * 100) / 100
		}
		delete reading.value

		return reading
	})

	//Sort so that newest values are last.
	//Note that this isn't really neccessary - the data is already sorted this way. We'll still run the sort just to make sure.
	results.sort((a,b) => {return a.dateTime - b.dateTime})

	let output = {
		readings: results,
		units: "m",
		//TODO: Add site name.
		source: {
			text: "View this data from Ireland's Office of Public Works",
			link: "https://waterlevel.ie/00000" + gaugeID+ "/"
		}
	}

	if (metadata[gaugeID]) {
		output.name = metadata[gaugeID].name
	}

	return output
}



async function loadIrelandOPWGauges(gaugeIDs, maxParalell = 10) {
	gaugeIDs = [...new Set(gaugeIDs)]; //Remove duplicate IDs


	let output = {}
	let running = 0
	let counter = 0

	//TODO: Handle case where a gauge errors while loading.
	return await new Promise((resolve, reject) => {
		async function loadGauge(id) {
			running++
			for (let i=0;i<5;i++) {
				try {
					output[id] = await loadIrelandOPWGauge(id)
					break;
				}
				catch(e) {
					console.error(e)
				}
			}
			running--
			if (counter < gaugeIDs.length - 1) {
				loadGauge(gaugeIDs[++counter])
			}
			else if (running === 0){resolve(output)}
		}

		for (;counter<Math.min(maxParalell, gaugeIDs.length);counter++) {
			loadGauge(gaugeIDs[counter])
		}
	})
}

module.exports = {
	loadIrelandOPWGauge,
	loadIrelandOPWGauges,
	getMetadata
}
