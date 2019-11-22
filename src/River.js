let {calculateColor, calculateDirection, calculateRelativeFlow} = require("./flowInfoCalculations.js")

const {skillTranslations} = require("./skillTranslations.js")
const {riverbuttonClicked} = require("./riverExpansion.js")

function AddSpan(text, elem, className) {
	let span = document.createElement("span")
    span.innerHTML = text
    span.className = "riverspan"
	if (className) {span.classList.add(className)}
	elem.appendChild(span)
    return span
}


			function addClassSpan(river, button) {
				let riverclass = river.class || ""
				//Put a zero width space between a parantheses and the preceeding character so that the browser knows it can split the line.
				//This helps make the browser correctly wrap class instead of overflowing.
				riverclass = riverclass.split("(").join("\u200b(")
				AddSpan(riverclass, button).classList.add("classspan")
			}

			function addSkillSpan(river, button) {
				//Check if the user has disabled tooltips.
				//Creating the tooltips is expensive. Try creating them only when the user hovers.
				if (localStorage.getItem("skillTooltips") === "false") {
					AddSpan(river.skill, button).classList.add("skillspan")
				}
				else {
					let skillSpan = document.createElement("span")
					skillSpan.className = "riverspan skillspan tooltip"

					let tooltip = document.createElement("div")
					tooltip.innerHTML = river.skill
					tooltip.className = "tooltip"

					let tooltiptext = document.createElement("span")
					tooltiptext.innerHTML = skillTranslations[river.skill]
					tooltiptext.className = "tooltiptext"

					skillSpan.style.borderBottom = "none"

					tooltip.appendChild(tooltiptext)
					skillSpan.appendChild(tooltip)
					button.appendChild(skillSpan)
				}
			}


function addRatingSpan(river, button) {
            //Star images for rating
            if (river.rating === "Error") {
				//Make sure that the span is the correct width, but inivisble.
                let span = AddSpan("☆☆☆☆☆", button)
				span.style.opacity = "0.2"
				span.classList.add("emptyStars")
            }
            else {
				let span = document.createElement("span")
                span.className = "riverspan"

				//We will use one empty span to set the width of the containing span.
				//We will use another empty span to overlay the full stars
                let spacer = document.createElement("span")
				spacer.className = "emptyStars"
				spacer.innerHTML = "☆☆☆☆☆"
				spacer.style.opacity = "0"
                span.appendChild(spacer)

                let empty = document.createElement("span")
				empty.className = "emptyStars"
				empty.innerHTML = "☆☆☆☆☆"
				empty.style.position = "absolute"
				empty.style.zIndex = "1" //Overlay the full stars
                span.appendChild(empty)

				let full = document.createElement("span")
				full.className = "fullStars"
				full.innerHTML = "★★★★★"
				full.style.width = river.rating*20 + "%"
                span.appendChild(full)

                button.appendChild(span)
            }
}


function addFlowData(river) {
	Object.defineProperty(river, "feet", {
		get: function getLatestFeet() {
			let data = usgsarray[river.usgs]
			if (data) {
				let feet = data.feet
				try {
					if (feet) {
						let latestFeetReading = feet[feet.length - 1]
						if (latestFeetReading) {
							//Though issues are alot rarer than with CFS, equipment malfunctions can cause this to be null.
							return latestFeetReading.value
						}
					}
				}
				catch(e) {console.error(e);console.log(river.usgs)}
			}
		}
	})

	Object.defineProperty(river, "cfs", {
		get: function getLatestCFS() {
			let data = usgsarray[river.usgs]
			if (data) {
				let cfs = data.cfs
				try {
					if (cfs) {
						let latestCFSReading = cfs[cfs.length - 1]
						if (latestCFSReading) {
							//Though issues are alot rarer than with CFS, equipment malfunctions can cause this to be null.
							return latestCFSReading.value
						}
					}
				}
				catch(e) {console.error(e);console.log(river.usgs)}
			}
		}
	})

	Object.defineProperty(river, "flow", {
		get: function getRiverFlow() {
			let latestCFS = river.cfs
			let latestFeet = river.feet

			if (latestCFS && latestFeet) {
	            return latestCFS + "cfs " + latestFeet + "ft"
	        }
            else if (latestCFS) {
                return latestCFS + " cfs"
            }
            else if (latestFeet) {
                return latestFeet + " ft"
            }
		}
	})
}


function updateSettings() {
	window.colorBlindMode = (localStorage.getItem("colorBlindMode") === "true")
	window.classOrSkill = localStorage.getItem("classOrSkill")
}

window.addEventListener("storage", updateSettings)
updateSettings()

function addFlowSpan(river, button) {
			//If there is already a flowspan, get rid of it.
			let current = button.querySelector(".flowspan")
			if (current) {current.remove()}

            if (river.flow) {
				let value = river.flow + (calculateDirection(river.usgs) || "")
				//If the user has color blind mode enabled, add river.running to one digit onto the flow data.
				//TODO: Add a faster way to check values, other than localStorage.
				if (window.colorBlindMode && river.running !== undefined) {
					value += "(" + Math.round(river.running*10)/10 + ")"
				}
				//TODO: Show the text "Dam" if there is plenty of space to do so. Consider using a smaller icon instead.
				//value += this.dam ? "Dam" : ""
                AddSpan(value, button, "flowspan")
            }
			else if (river.dam) {AddSpan("Dam", button, "flowspan")}
}


function addFlowStyling(river, button) {
	if (river.dam) {
		button.classList.add("riverbuttonDam")
	}
	if (calculateColor(river)) {
		button.style.backgroundColor = calculateColor(river)
	}
}


function River(locate, event) {

	let river = this //Allow for incapsulation if this changes.

    //Copies name, section, skill, rating, writeup, tags, usgs, plat,plon, tlat,tlon, aw, dam
    Object.assign(this, event)
    //tags and writeup need to be a string. They can't be undefined
    this.tags = this.tags || ""
    this.writeup = this.writeup || ""
    //Convert the numeric value to the filename

	this.rating = parseFloat(this.rating)
	//Consider allowing ratings less than 1.
    if (this.rating < 1 || this.rating > 5 || isNaN(this.rating) || this.rating === undefined) {
        this.rating = "Error"
    }

    this.skill = this.skill || "?"

	if (!this.id) {
		this.id = "usgs:" + this.usgs
		this.isGauge = true
	}

    this.base = "b" + locate
    this.expanded = 0
    this.index = locate

	if (this.relatedusgs) {
		try {
			this.relatedusgs = JSON.parse(this.relatedusgs)
		}
		catch(e) {console.warn(e);}
	}

    this.create = function (forceregenerate) {
        //Only create the button once - It's about 3 times faster.
        if (!this.finished || forceregenerate) {

            var button = document.createElement("button")
            button.id = this.base + 1

			if (this.isGauge) {
				button.classList.add("riverbuttonGauge")
			}

            AddSpan(this.name, button)
            AddSpan(this.section, button)


			if (window.classOrSkill === "class") {
				//Put class first so that it will show up if screen small.
				addClassSpan(this, button)
				addSkillSpan(this, button)
			}
			else {
				//Put skill first so that it will show up if screen small.
				addSkillSpan(this, button)
				addClassSpan(this, button)
			}

            //Star images for rating
            addRatingSpan(this, button)

			addFlowSpan(this, button)


            button.classList.add("riverbutton")

			button.addEventListener("click", function() {
				riverbuttonClicked(button, river)
			})

			window.addEventListener("colorSchemeChanged", function() {
				river.updateExpansion()
				river.finished.style.backgroundColor = calculateColor(river)
			})

            //Store button for reuse later
            this.finished = button

        }

		this.updateExpansion = function() {
			//Do not use "this". If called from event listener on window it will fail.
			//Make sure it is expanded. Otherwise, there is no need to update the expansion - and
			//updating the expansion can take a lot of time, expecially if it causes reflow.
			if (river.expanded) {
				river.finished.click()
				river.finished.click()
			}
		}

		addFlowStyling(this, this.finished)

        //Return finished button
        return this.finished

    }

	addFlowData(this) //Defines river.cfs, river.feet, and river.flow
	calculateRelativeFlow(this)

	this.updateFlowData = function() {
		if (this.finished) {
			addFlowSpan(this, this.finished) //Update the flowspan if it exists.
			addFlowStyling(this, this.finished) //And make sure colors, etc, are updated.
		}
		if (this.updateExpansion) {
			this.updateExpansion()
		}
	}

	this.updateFlowData()

    this.delete = function () {
        let river = ItemHolder[locate]
        function Remove(Code) {
            let ToDelete = document.getElementById(river.base + Code)
            if (ToDelete) {
                ToDelete.parentNode.removeChild(ToDelete)
            }
        }

        //Reset background color
        let reset = document.getElementById(river.base + 1)
        if (reset) {
            reset.style.backgroundColor = ""
        }

        Remove(2)
        Remove(1)

    }
}

module.exports = {
	River
}
