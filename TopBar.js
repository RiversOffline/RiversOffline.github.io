function NewSpan(Text) {
    let span = document.createElement("span")
    span.className = "riverspan"
    span.innerHTML = Text
    return span
}

function addSorting(span, type, reverse = false) {
    span.addEventListener("click", function() {
        let query = window.getAdvancedSearchParameters()
        if (query.sort.query === type) {
            query.sort.reverse = !query.sort.reverse
            reverse = query.sort.reverse
        }
        else {
            query.sort.query = type
            query.sort.reverse = reverse
            reverse = !reverse
        }
        window.setMenuFromSearch(query)
        NewList()
    })
}


function TopBar() {
    this.create = function() {
        let button = document.createElement("button")
        button.id = "topbar"
        button.className = "riverbutton"

        if (!!window.MSInputMethodContext && !!document.documentMode) {
            //IE 11 will not dispatch click events to the Name, Skill, Rating, etc, spans, but rather to their parent.
            //Time to do an evil workaround...
            button.onclick = function(e) {
                var x = e.clientX, y = e.clientY,
                    elementMouseIsOver = document.elementFromPoint(x, y);

                elementMouseIsOver.click()
            }
        }

        let span = NewSpan("River⇅")
        addSorting(span, "alphabetical", true) //Starts sorted alphabetically, a-z. Pass 1 so the first sort reverses that.
        button.appendChild(span)

        button.appendChild(NewSpan("Section"))


        if (localStorage.getItem("classOrSkill") === "class") {
            span = NewSpan("Class")
            //TODO: How should Class be sorted?
        }
        else {
            span = NewSpan("Skill⇅")
            addSorting(span, "skill", false)
        }
        button.appendChild(span)


		//The rating span needs to be the same size as the stars.
		span = NewSpan("")
		//Create an invisible star span. This will make the spans width the same as the ratings.
        let empty = document.createElement("span")
		empty.className = "emptyStars"
		empty.innerHTML = "☆☆☆☆☆"
		empty.style.opacity = "0" //Invisible

		//Create the text span.
		let realContent = document.createElement("span")
		realContent.innerHTML = "Rating⇅"
		//Make sure that the span is positioned correctly.
		realContent.style.position = "absolute"
		realContent.style.left = 0
		realContent.style.bottom = 0

		span.appendChild(empty)
		span.appendChild(realContent)

        addSorting(span, "rating", false) //We want greatest first, not least first, on the first sort. Pass 0 to not reverse
        button.appendChild(span)

        span = NewSpan("Flow/Trend⇅")
        addSorting(span, "running", false) //Show highest flow first, instead of lowest. Pass 0 to not reverse.
        button.appendChild(span)

        return button
    }

    this.delete = function() {
        let Node = document.getElementById("topbar")
        if (Node) {
            Node.parentNode.removeChild(Node)
        }
    }
}


export {
    TopBar
}
