var rating = document.getElementById("rating")
for (let i=4;i<21;i++) {
	let stars = i/4
	let option = document.createElement("option")
	option.value = stars
	option.innerHTML = stars + " Stars"
	rating.appendChild(option)
}

const River = require("../src/River.js").River



let url = "https://script.google.com/macros/s/AKfycbxhxpImVHh-UBAlVOGppV4wYRVtO4ldLHn_q128vckXshCl6B8/exec"


function copyStringToClipboard() {
var str = document.getElementById("Output").value
// Create new element
var el = document.createElement('textarea');
// Set value (string to be copied)
el.value = str;
// Set non-editable to avoid focus and move outside of view
el.setAttribute('readonly', '');
el.style = {position: 'absolute', left: '-9999px'};
document.body.appendChild(el);
// Select text inside element
el.select();
// Copy text to clipboard
document.execCommand('copy');
// Remove temporary element
document.body.removeChild(el);
}




//Create writeup editor
var toolbarOptions = [
['bold', 'italic', 'underline', 'strike'],
['blockquote'],

[{ 'list': 'ordered'}, { 'list': 'bullet' }],
[{ 'script': 'sub'}, { 'script': 'super' }],

[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

[ 'link', 'image', 'video'], //Image and video handlers are overwritten.
//[{ 'color': [] }, { 'background': [] }], //CSP breaks inline style.

['clean']
];

var quill = new Quill('#editor-container', {
modules: {
toolbar: toolbarOptions
},
placeholder: 'Create your writeup...',
theme: 'snow',
});

quill.on('text-change', function() {
UpdateWriteup()
});

let API_KEY = "AIzaSyD-MaLfNzz1BiUvdKKfowXbmW_v8E-9xSc"


async function saveToServer(file) {
let type = "media"
console.log(file)
let name = file.name
let editors = "" //We won't ask the user for image editors. Probably don't want future editing of images anyways.

let nonce = Math.round(Math.random() * (2**30))

let requestURL = url + "?type=" + type + "&name=" + name + "&nonce=" + nonce + (editors?("&editors=" + editors):"")

let fileData = await new Promise((resolve, reject) => {
   var reader = new FileReader();
   reader.onload = function(e){
	   resolve(e.target.result)
   };
   reader.readAsArrayBuffer(file);
})

console.log(fileData)

//Google Apps Script will treat our data as a String. Convert to base 64 to avoid problems
function arrayBufferToBase64( buffer ) {
   var binary = '';
   var bytes = new Uint8Array( buffer );
   var len = bytes.byteLength;
   for (var i = 0; i < len; i++) {
	   binary += String.fromCharCode( bytes[ i ] );
   }
   return window.btoa( binary );
}

let request = fetch(requestURL, {
   method: "POST",
	body: arrayBufferToBase64(fileData),
	mode: "no-cors"
})

alert("We are attempting to upload your file. You should receive an alert in about 10 seconds if it succeeds. ")

let response = await request
let result = await response.text()
console.log(result)
let checkReq = await fetch("https://www.googleapis.com/drive/v3/files/16sAPFOmyzg5Ds-oHdt9Ra5LKmhjXNC6Q0_2WMBXaCtU/export?mimeType=text/plain&key=" + API_KEY, {cache: "no-store"})
let text = await checkReq.text()
let checkResp = text.split("\n")[0]
console.log(checkResp)
console.log(name + nonce)
if (checkResp.trim() === (name + nonce).trim()) {
   alert("File upload successful. ")
}
else {
   alert("File upload appears to have failed. ")
}
return text.split("\n")[1] //File ID
}


function imageHandler() {
const input = document.createElement('input');
input.setAttribute('type', 'file');
input.setAttribute('accept', 'image/*')
input.click();

input.onchange = () => {
 const file = input.files[0];

 // file type is only image.
 if (/^image\//.test(file.type)) {
   saveToServer(file).then((File_ID) => {
	   quill.insertEmbed(quill.getSelection(true), 'image', 'https://www.googleapis.com/drive/v3/files/' + File_ID + '?alt=media&key=' + API_KEY);
   });
 }
 else {
   console.warn('A non-image was selected.');
 }
};
}
quill.getModule("toolbar").addHandler("image", imageHandler)
/*quill.getModule("toolbar").handlers.image = function imageHandler(value) {
   let File_ID = prompt("Please type in the File ID of the image in Google Drive. (To get the file id, click on the file, click the three dot menu in the top right hand corner, click open in new window. Copy out the section between /d/ and /view).")
   quill.insertEmbed(quill.getSelection(true), 'image', 'https://www.googleapis.com/drive/v3/files/' + File_ID + '?alt=media&key=' + API_KEY);
}

quill.getModule("toolbar").handlers.video = function videoHandler(value) {
   let File_ID = prompt("Please type in the File ID of the video in Google Drive. (To get the file id, click on the file, click the three dot menu in the top right hand corner, click open in new window. Copy out the section between /d/ and /view).")
   quill.insertEmbed(quill.getSelection(true), 'video', 'https://www.googleapis.com/drive/v3/files/' + File_ID + '?alt=media&key=' + API_KEY);
}*/




let datalist = document.getElementById("stateOptions")

let states = {"DE":"Delaware","DC":"District of Columbia","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AS":"American Samoa","GU":"Guam","MP":"Northern Mariana Islands","PR":"Puerto Rico","UM":"U.S. Minor Outlying Islands","VI":"U.S. Virgin Islands","AL":"Alabama","AK":"Alaska","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut"}

for (let stateCode in states) {
let option = document.createElement("option")
option.value = stateCode
option.innerHTML = states[stateCode]
datalist.appendChild(option)
}


var List = ["name","section","skill","rating","writeup","tags","state","gauge","aw","plat","plon","tlat","tlon","hidlat","hidlon","maxrun","minrun","lowflow","midflow","highflow","dam","relatedgauges","class","averagegradient","maxgradient","length", "comments"]


let urlParams = new URLSearchParams(window.location.hash.slice(1))
let userApprovedOverwrites = null;

List.forEach(function(value){
console.log(value)
console.log(document.getElementById(value))
if (value !== "writeup") {
 let elem = document.getElementById(value)
 let initialValue = localStorage.getItem(value)

 //Allow prefilling fields with url parameters.
 if (urlParams.has(value)) {
	 if (userApprovedOverwrites === null && initialValue) {
		 userApprovedOverwrites = confirm(`The link you followed would like to prefill some fields, however that would overwrite data saved from a previous river you were working on. Would you like to prefill anyways?`)
	 }
	 if (userApprovedOverwrites === true || !initialValue) {
		 initialValue = urlParams.get(value)
	 }
 }

 if (elem.type === "checkbox") {
	 console.log(initialValue)
   elem.checked = (initialValue === "true")
 }
 else if (initialValue == null){
   elem.value = ""
 }
 else {elem.value = initialValue}
 elem.addEventListener("keyup", UpdateWriteup)
 elem.addEventListener("change", UpdateWriteup)
}
else {
 //Start quill off with stored value.
 quill.root.innerHTML = localStorage.getItem(value)
}
})

function clearAllFields() {
if (confirm("Are you sure you want to clear all fields?")) {
   List.forEach((value) => {
	   localStorage.removeItem(value)
   })
   window.location.hash = ""
   window.location.reload()
}
}


function getOutputText() {
var Text = ""
List.forEach(function(value, index){
 if (value === "writeup") {
	 Text += "\n" + value + ": " + quill.root.innerHTML
 }
 else if (value === "relatedgauges") {
	 Text += "\n" + value + ": "
	 //Convert comma seperated list into javascript list
	 if (document.getElementById(value).value.trim().split(" ").join("").split(",").length > 0) {
		 Text += JSON.stringify(document.getElementById(value).value.trim().split(" ").join("").split(","))
	 }
 }
 else if (value === "dam") {
	 Text += "\n" + value + ": "
	 if (document.getElementById(value).checked) {
		 Text += "true"
	 }
 }
 else {
	 Text += "\n" + value + ": " + document.getElementById(value).value.trim()
 }
})
return Text.trim()
}

function UpdateWriteup() {

List.forEach(function(value){
   if (value !== "writeup") {
	   let elem = document.getElementById(value)
	   let text;

	   if (elem.type === "checkbox") {
		   text = elem.checked
	   }
	   else {
		   text = elem.value.trim()
	   }

	   localStorage.setItem(value, text)
   }
   else {
	   //Save quill to localStorage
	   localStorage.setItem(value, quill.root.innerHTML)
   }
})


document.getElementById("Output").value = getOutputText()
renderPreview()
}
UpdateWriteup()
//Initial update



function submitAsNewRiver() {
let type = "river"
let name = prompt("What would you like the file name for this section to be? ")
let editors = prompt("Optional: Enter email addresses that you would like to give edit access to this file. (comma seperated list)")

console.log(name)
console.log(editors)

let nonce = Math.round(Math.random() * (2**30))

let requestURL = url + "?type=" + type + "&name=" + name + "&nonce=" + nonce + (editors?("&editors=" + editors):"")
console.log(requestURL)

let request = fetch(requestURL, {
   method: "POST",
	body: getOutputText(),
	mode: "no-cors"
})

alert("We are attempting to submit your river. You should receive an alert in about 10 seconds if it succeeds. ")

;(async function() {
   let response = await request
   let result = await response.text()
   console.log(result)
   let checkReq = await fetch("https://www.googleapis.com/drive/v3/files/16sAPFOmyzg5Ds-oHdt9Ra5LKmhjXNC6Q0_2WMBXaCtU/export?mimeType=text/plain&key=" + API_KEY, {cache: "no-store"})
   let checkResp = (await checkReq.text()).split("\n")[0]
   console.log(checkResp)
   console.log(name + nonce)
   if (checkResp.trim() === (name + nonce).trim()) {
	   alert("Your river has been successfully submitted. ")
   }
   else {
	   alert("Submission appears to have failed. Please try again. (you can confirm that it failed or succeeded by clicking on 'Open Review Queue')")
   }
}())
}





function generate() {
	let obj = {}
	List.forEach(function(value, index){
	 if (value === "writeup") {
		 obj[value] = quill.root.innerHTML
	 }
	 else if (value === "relatedgauges") {
		 obj[value] = document.getElementById(value).value.trim().split(" ").join("").split(",")
	 }
	 else if (value === "dam") {
		 if (document.getElementById(value).checked) {
			obj[value] = "true"
		 }
	 }
	 else {
		 obj[value] = document.getElementById(value).value.trim()
	 }
	})
	obj.id = "bogusId"
	return obj
}

function renderPreview() {
	let container = document.getElementById("previewContainer")
	let info = generate()
	window.ItemHolder = []
	window.usgsarray =  {}
	window.usgsarray[info.gauge] = {
		full: false,
		readings: [],
		name: "Real graph should load..."
	}
	while (container.firstChild) {container.firstChild.remove()}
	window.ItemHolder[0] = new River(0, info)
	container.appendChild(window.ItemHolder[0].create())
	window.ItemHolder[0].finished.click()
}
window.renderPreview = renderPreview
