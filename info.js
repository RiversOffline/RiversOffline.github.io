function GetId(Id) {
    return document.getElementById(Id)
}
function ReloadAllCache() {
    "use strict";

    localStorage.setItem("TimeStamp", Date.now())
    
    caches.delete('rivers.run').then(function(event) {
    window.location.reload(true)
    })
    .catch(function(event) {
    window.location.reload(true)
    })
}
function UpdateTime () {
try {
if (localStorage.getItem("TimeStamp") !== null && Date.now()-localStorage.getItem("TimeStamp") > 600000) {
var Minutes = Math.floor(Math.floor((Date.now() - localStorage.getItem("TimeStamp"))/1000)/60)
var Hours = Math.floor(Minutes/60)
Minutes = Minutes%60 
var Days = Math.floor(Hours/24)
Hours = Hours%24
var TimeStr = ""
if (Days !== 0) {
    if (Days === 1) {
        TimeStr = TimeStr + Days + " day "
    }
    else {
        TimeStr = TimeStr + Days + " days "
    }
}
if (Hours !== 0) {
    if (Hours === 1) {
        TimeStr = TimeStr + Hours + " hour "
    }
    else {
        TimeStr = TimeStr + Hours + " hours "
    }
}
if (Minutes !== 0) {
    if (Minutes === 1) {
        TimeStr = TimeStr + Minutes + " minute "
    }
    else {
        TimeStr = TimeStr + Minutes + " minutes "
    }
}
GetId("ReloadAllText").innerHTML = "You're viewing a cached version of this site from " + TimeStr + " ago."    
}
}
catch (e) {
    console.log(e)
}
}
try {
if (localStorage.getItem("TimeStamp") !== null && Date.now()-localStorage.getItem("TimeStamp") > 600000) {
    UpdateTime()
    setInterval(UpdateTime, 60000)
    GetId("ReloadAll").hidden= ""
    if (navigator.onLine) {
    GetId("ReloadAllButton").style = "display: inline"
    }
    window.addEventListener("offline", function() {GetId("ReloadAllButton").style = "display: none"})
    window.addEventListener("offline", function() {GetId("ReloadAllButton").style = "display: inline"})
    GetId("ReloadAllButton").addEventListener("click", ReloadAllCache)
    GetId("ReloadAllButton").value = "Update Now"
    UpdateTime()
}
else {
    if (localStorage.getItem("TimeStamp") === null) {
    localStorage.setItem("TimeStamp", Date.now())
    }
}
}
catch (e) {
    console.log(e)
}


window.addEventListener("resize", function() {setTimeout(RotateHandler, 100)})
window.addEventListener("resize", function() {setTimeout(SortListGen, 100)})
                        
function RotateHandler() {
//Embedded Frames
//Divided by 1.2 prevents the frame from taking up the whole screen and blocking the user from scrolling off of it.
document.documentElement.style.setProperty('--screenheight', (Math.floor(window.innerHeight/1.15)) + "px");
}


try {
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://rivers.run/serviceworker.js')
  .then(function(registration) {
  })
  .catch(function(error) {
  });
}
}
catch (e) {
    console.log(e)
    //This should only occour if the page is embedded and sandboxed.
}

function AddElement(Name, Section, Difficulty, Quality, Length, Writeup) {
    var Rivers = GetId("Rivers")
    var Button = document.createElement("button")
    Button.className = "accordion"
    var Div = document.createElement("Div")
    Div.className = "panel"
    
    function AddSpan(Content) {
        var Span = document.createElement("Span")
        if (Content !== undefined) {
        Span.innerHTML = Content
        }
        else {
        Span.innerHTML = "Not Found"
        }
        Span.className = "riverspan"
        Button.appendChild(Span)
    }
    AddSpan(Name)
    AddSpan(Section)
    AddSpan(Difficulty)
    
if (Quality === "Quality" || Quality === "Below" || Quality === "Not Found") {
    AddSpan(Quality)
}
else {
var Text, span;
span = document.createElement("Span")
switch (parseInt(Quality)) {
    case 1:
        Text = "1Star";
        break;
    case 2:
        Text = "2Stars";
        break;
    case 3:
        Text = "3Stars";
        break;
    case 4:
        Text = "4Stars";
        break;
    case 5:
        Text = "5Stars";
        break;
    default:
        Text = "Error"
}
if (Text === "Error") {
   AddSpan("Invalid Value") 
}
else {
var px = Math.floor(window.innerWidth/25)
if (px<14) {
    Text = "12" + Text
}
else if (px<16){
    Text = "14" + Text
}
else if (px<18) {
    Text = "16" + Text
}
else {
    Text = "18" + Text
}
var div = document.createElement(div)
div.className = "img-" + Text
span.appendChild(div)
span.className = "riverspan"
Button.appendChild(span)
}    
}   
    
    
    AddSpan(Length)

    if (Writeup !== undefined) {
    Div.innerHTML = Writeup
    }
    else {
    Div.innerHTML = "This River has no Writeup."
    }
    
    Button.addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding = "0px"
    } else {
      panel.style.maxHeight = "100%"/*(panel.scrollHeight + 20) + "px"*/;
      panel.style.padding = "10px"
    } 
    });
    
    if (Section === "Relevant") {
        Button.id = "lessrelevant"
    }
    Rivers.appendChild(Button)
    Rivers.appendChild(Div)
}
 
function ClearList() {
var myNode = GetId("Rivers");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
AddElement("River Name", "Section", "Difficulty", "Quality", "Length (Miles)", "The River's Write-up will appear here.")
}

function CreateList(PassedList) {
ClearList()
var i = 0;
function AddMore() {
    var c = i+40//Amount that is added each time
    for (i;i<Math.min(c, PassedList.length);i++) {
    var Elem = PassedList[i]
    AddElement(Elem.Name, Elem.Section, Elem.Difficulty, Elem.Quality, Elem.Length, Elem.Writeup)
    }
    if (i < PassedList.length) {
        setTimeout(function() {requestAnimationFrame(AddMore)}, 50/*Try and give time for response to user input*/)
    }
}
if (PassedList.length > 0) {
AddMore()
}
}

//RiverArray is defined because of the other JavaScript file that was loaded.
CreateList(RiverArray)
//That will be the initial list with everything in it.

GetId("SearchBox").addEventListener("keydown", function() {setTimeout(SortListGen, 20)})
function SortListGen() {
    var Text = (GetId("SearchBox").value).toLowerCase().trim()
    var array = []
    var array1 = []
    var array2 = []
    var array3 = []
    var array4 = []
    for (var i = 0;i<RiverArray.length;i++) {
        var Obj = RiverArray[i]
        if (Obj.Name.toLowerCase().indexOf(Text) !== -1) {
            array.push(Obj)
        }
        else if (Obj.Tags.toLowerCase().indexOf(Text) !== -1) {
            array1.push(Obj)
        }
        else if (Obj.Section.toLowerCase().indexOf(Text) !== -1) {
            array2.push(Obj)
        }
        else if (Obj.Difficulty.toLowerCase().indexOf(Text) !== -1) {
           //Exact match is highly relevant
            if (Obj.Difficulty.toLowerCase().indexOf(Text) === 0) {
            array3.push(Obj)
            }
            else if (Obj.Writeup.toLowerCase().indexOf(Text) === -1) {
                    array4.push(Obj)
            //Not that relevant. Add to less relevant list if it won't be added later.    
            }
        }   
        else if (Obj.Writeup.toLowerCase().indexOf(Text) !== -1) {
            array4.push(Obj)
        }   
    }
    for (var i = 0; i<array1.length;i++) {
        array.push(array1[i])
    }
    for (var i = 0; i<array2.length;i++) {
        array.push(array2[i])
    }
    for (var i = 0; i<array3.length;i++) {
        array.push(array3[i])
    }
    if (array4.length > 0) {
    array.push({Name:"Less", Section: "Relevant", Difficulty: "Results", Quality: "Below", Length: "", Writeup: "Results below contained the search query, but not in a way that was clearly related to the search query. The results shown below may not be what you are looking for."})
    }
    for (var i = 0; i<array4.length;i++) {
        array.push(array4[i])
    }
    CreateList(array)
    
    if (array.length === 0) {
AddElement("Not Found", "Not Found", "Not Found", "Not Found", "Not Found", "No Rivers were found for your search query.")
    }

}


//Query Handler
var ThisURL = window.location.href
ThisURL = decodeURIComponent(ThisURL)
var Query = ThisURL.slice(ThisURL.indexOf("?") + 1)
if (Query.indexOf("q=cache:") === 0) {
    Query = ""
    setTimeout(function(){alert("It appears that you have been redirected from Google's Webcache to this page. You are now at the actual site.")}, 1000)
    //In case they try to visit the cached version.
}
if (ThisURL !== Query) {
  document.getElementById("SearchBox").value = Query
  SortListGen()
}


console.log("If there are 3 warnings below this for pre-loading non-used images, please note that they total to around 1KB and are intentionally pre-loaded in case of major screen resizes.")