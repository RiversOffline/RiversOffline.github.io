function GetId(Id) {
    return document.getElementById(Id)
}
function ReloadAllCache() {
    "use strict";

    localStorage.setItem("TimeStamp", Date.now())
    
    caches.delete('RiversOffline').then(function(event) {
    window.location.reload(true)
    })
    .catch(function(event) {
    window.location.reload(true)
    })
}
function UpdateTime () {
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


if (window.innerWidth<700) {
    GetId("Rivers").style.setProperty('--textsize', '16px')
    if (window.innerWidth<560) {
    GetId("Rivers").style.setProperty('--textsize', '14px')
    }
}
if (window.innerWidth<560 && window.innerHeight>window.innerWidth) {
    if (window.innerWidth<300) {
    GetId("RotateMobile").innerHTML = "<span style=\"background-color: orange\"><strong>Rotating your display to Landscape mode is recommended.</strong></span>"
    GetId("RotateMobile").hidden = ""
    }
    GetId("Rivers").style.setProperty('--textsize', '12px')

}
window.addEventListener("resize", function() {setTimeout(RotateHandler, 100)})
window.addEventListener("resize", function() {setTimeout(SortListGen, 100)})

                        
function RotateHandler() {
if (window.innerWidth<560 && window.innerHeight>window.innerWidth) {
    if (window.innerWidth < 300) {
    GetId("RotateMobile").innerHTML = "<span style=\"background-color: orange\"><strong>Rotating your display to Landscape mode is recommended.</strong></span>"
    GetId("RotateMobile").hidden = ""
    }

    GetId("Rivers").style.setProperty('--textsize', '12px')
    if (window.innerWidth > 300) {
    GetId("RotateMobile").hidden = true
    }
}
else {
    if (window.innerWidth > window.innerHeight) {
    GetId("RotateMobile").hidden = true
    }
    if (window.innerWidth > 300) {
    GetId("RotateMobile").hidden = true
    }
    GetId("Rivers").style.setProperty('--textsize', '18px')
    if (window.innerWidth<700) {
    GetId("Rivers").style.setProperty('--textsize', '16px')
    if (window.innerWidth<560) {
    GetId("Rivers").style.setProperty('--textsize', '14px')
    }
    if (window.innerWidth<400) {
    GetId("Rivers").style.setProperty('--textsize', '12px')
    }
}
}
};



if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://riversoffline.github.io/serviceworker.js')
  .then(function(registration) {
  })
  .catch(function(error) {
  });
}


//Popup Text
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function DisplayPopup(text) {
    GetId("PopupText").innerHTML = text
    modal.style.display = "block";
}

//TOS Handler
GetId("TOSButton").addEventListener("click", function() {DisplayPopup("Rivers Offline Terms Of Service:<br><br>IN NO EVENT SHALL THE AUTHORS, COPYRIGHT HOLDERS, OR CONTRIBUTORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE WRITEUPS AND/OR SOFTWARE OR THE USE OR OTHER DEALINGS IN THE WRITEUPS AND/OR SOFTWARE.")})
GetId("TOSButton").innerHTML = "<strong><em>Terms Of Service</em></strong>"



function AddElement(b,c,d,e,f,w) {
    var li = document.createElement("li")
    var t,span;
    
    function A(g) {
    if (g === undefined) {
        g = "Missing Data"
    }
    t = document.createTextNode(g);
    span = document.createElement("Span")
    span.appendChild(t)
    li.appendChild(span)
    }
    
    A(b)
    A(c)
    A(d)
    if (e === "Quality") {
        A(e)
    }
    else {
     span = document.createElement("Span")
var Text;
switch (e) {
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
   A("Invalid Value") 
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
li.appendChild(span)
}
    }
    
    A(f)
    if (w !== undefined) {
        li.addEventListener("click", function() {DisplayPopup(w)})
    }
    
    
    GetId("Rivers").appendChild(li)
}


function ClearList() {
var myNode = GetId("Rivers");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
AddElement("River Name", "Section", "Difficulty", "Quality", "Length (Miles)")
}


function CreateList(array) {
ClearList()
for (var i=0;i<array.length;i++) {
    var Obj = array[i]
    AddElement(Obj.Name, Obj.Section, Obj.Difficulty, parseInt(Obj.Quality), Obj.Length, Obj.Writeup)
}
}

//RiverArray is defined because of the other JavaScript file that was loaded.
CreateList(RiverArray)
//That will be the initial list with everything in it.

GetId("SearchBox").addEventListener("keydown", function() {setTimeout(SortListGen, 20)})
function SortListGen() {
    var Text = (GetId("SearchBox").value).toLowerCase()
    var array = []
    var array2 = []
    var array3 = []
    var array4 = []
    for (var i = 0;i<RiverArray.length;i++) {
        var Obj = RiverArray[i]
        
        if (Obj.Name.toLowerCase().indexOf(Text) !== -1) {
            array.push(Obj)
        }
        else {
            
        if (Obj.Section.toLowerCase().indexOf(Text) !== -1) {
            array2.push(Obj)
        }
        else {
        if (Obj.Difficulty.toLowerCase().indexOf(Text) !== -1) {
            array3.push(Obj)
        }   
        else {
        if (Obj.Writeup.toLowerCase().indexOf(Text) !== -1) {
            array4.push(Obj)
        }   
        }
        }
            
        } 
    }
    for (var i = 0; i<array2.length;i++) {
        array.push(array2[i])
    }
    for (var i = 0; i<array3.length;i++) {
        array.push(array3[i])
    }
    for (var i = 0; i<array4.length;i++) {
        array.push(array4[i])
    }
    CreateList(array)
    
    if (array.length === 0) {
AddElement("Not Found", "Not Found", "Not Found", "Not Found", "Not Found")
    }

}
console.log("If there are 3 warnings below this for pre-loading non-used images, please note that they total to around 1KB and are intentionally pre-loaded in case of major screen resizes.")