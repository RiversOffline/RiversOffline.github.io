'use strict';


try {
	window.loadNewUSGS = "Trying to Load Data"
	if ('serviceWorker' in navigator) {
		window.serviceWorkerMessages = []
		navigator.serviceWorker.ready.then(function(registration) {
			navigator.serviceWorker.onmessage = function(event) {
				window.serviceWorkerMessages.push(event.data)
				let data = event.data

				if (!data.includes("flowdata3.json")) {return;}

				window.oldLoadUSGS = window.loadNewUSGS

				if (data.includes("Updated cache for")) {
					console.log("Updating")
					require("./loadUSGS.js").loadUSGS(true) //Update the information. true says to use cache.
				}
				else if (data.includes("errored. Using cache")) {
					window.loadNewUSGS = "Unable to load latest data"
				}
				else if (data.includes(" took too long to load from network")) {
					window.loadNewUSGS = "Updating data in backgroud"
				}
				else if (data.includes("has been loaded from the network")) {
					window.loadNewUSGS = "This is likely a glitch. You should be viewing the latest data."
				}
				window.updateOldDataWarning()
			}
		})
	}
}
catch(e) {console.error(e)}

try {
	window.addLine = require("./graph.js").addLine
}
catch(e) {console.error(e)}

//Defines window.TopBar and window.triangle
Object.assign(window, require("./TopBar.js"))

window.River = require("./River.js").River

window.sort = require("./sort.js").sort

//Defines window.normalSearch, window.advanedSearch, and window.toDecimalDegrees
Object.assign(window, require("./search.js"))

window.usgsarray = {}

//Defines recursiveAssign, deleteMatchingPortions, and objectsEqual
Object.assign(window, require("./objectUtils.js"))
require("./advancedSearchParameters.js") //Defines window.setMenuFromSearch and window.getAdvancedSearchParameters

require("./searchUI.js") //Adds listeners to the searchbox and advanced search menu.

require("./NewList.js") //Defines window.NewList

document.getElementById("Rivers").appendChild(new TopBar().create())

//Handle search links.
	if (window.location.hash.length > 0) {
		let search = decodeURI(window.location.hash.slice(1))

	if (search.startsWith("{")) {
		//Advanced search
			let query = JSON.parse(search)
			setMenuFromSearch(query)
	}
		else {
			//Normal search
			let query = window.getAdvancedSearchParameters()
			query.normalSearch = search
			setMenuFromSearch(query)
		}
	}


;(async function() {

	//ItemHolder is a list of all the river objects. New objects should be pushed into the list.
	window.ItemHolder = []

	//Load flow information. This is async, and will finish whenever.
	require("./loadUSGS.js").loadUSGS(false)

	//Load river data so that the page can be rendered.
	let fileName = "riverdata.json"
	if (window.fetch) {
		let response = await fetch(fileName)
		window.riverarray = await response.json()
	}
	else {
		//For browsers that don't support fetch
		let request = new XMLHttpRequest()
		let response = await new Promise((resolve, reject) => {
			request.onload = function(event) {resolve(event.target.response)};
			request.open("GET", fileName);
			request.send()
		})
		window.riverarray = JSON.parse(response)
	}

	console.time("Create River Objects")
	riverarray.forEach(function(event, index) {
		ItemHolder[index] = new River(index, event)
	})
	console.timeEnd("Create River Objects")

	//If there is a custom search link, use it. Otherwise, just call NewList.

	let query = window.getAdvancedSearchParameters()
	if (
		window.usgsDataAge === undefined &&
		(!objectsEqual(defaultAdvancedSearchParameters.flow, query.flow) || query.sort.query === "running")
	) {
			//We have no usgs data yet. Wait to flow search/sort.
				let oldQuery = recursiveAssign({}, query)
				delete query.flow
				if (query.sort && query.sort.query === "running") {
					delete query.sort
				}
				function dataNowLoaded() {
					//If the user has made any changes that caused the list to reload, ask.
					if (timesNewListCalled <= 2 || confirm("Flow data has now loaded. Would you like to apply your original search link?")) {
						setMenuFromSearch(oldQuery)
						NewList()
					}
					window.removeEventListener("usgsDataUpdated", dataNowLoaded)
				}
				if (!objectsEqual(query, oldQuery)) {
					window.addEventListener("usgsDataUpdated", dataNowLoaded)
					let searchNotFinished = document.createElement("p")
					searchNotFinished.id = "topOldDataWarning" //Reuse styling
					searchNotFinished.innerHTML = "Portions of your search link use flow data, which is still loading. "
					//loadUSGS.js will delete searchNotFinished when it is not needed due to the id overlap.
					let legend = document.getElementById("legend")
					legend.parentNode.insertBefore(searchNotFinished, legend)
			}
			NewList(query)
		}
	else {
		NewList()
	}
}())
