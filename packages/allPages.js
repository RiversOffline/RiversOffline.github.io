!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=24)}([,,,,function(e,n){function t(n,o){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,o)}e.exports=t},function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},,function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},function(e,n,t){var o=t(25),r=t(5);e.exports=function(e,n){return!n||"object"!==o(n)&&"function"!=typeof n?r(e):n}},function(e,n,t){var o=t(4);e.exports=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&o(e,n)}},function(e,n,t){var o=t(6),r=t(4),i=t(26),l=t(27);function c(n){var t="function"==typeof Map?new Map:void 0;return e.exports=c=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return l(e,arguments,o(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r(n,e)},c(n)}e.exports=c},,,,,,,,,,,,,function(e,n,t){"use strict";t.r(n);var o=t(8),r=t.n(o),i=t(9),l=t.n(i),c=t(6),s=t.n(c),a=t(5),u=t.n(a),d=t(10),f=t.n(d),p=t(11),m=t.n(p);try{t(28)}catch(e){console.error(e)}"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js")});try{!function(){for(var e=document.head.querySelectorAll("link"),n=0;n<e.length;n++)if("shortcut icon"===e[n].rel)return;[16,24,32,64,96,160,196].forEach(function(e){var n=document.createElement("link");n.rel="shortcut icon",n.type="image/png",n.href="resources/icons/".concat(e,"x").concat(e,"-Water-Drop.png"),document.head.appendChild(n)})}()}catch(e){console.error(e)}try{!function(){for(var e=document.head.querySelectorAll("meta"),n=0;n<e.length;n++)if(e[n].name="viewport")return;var t=document.createElement("meta");t.name="viewport",t.content="width=device-width, initial-scale=1",document.head.appendChild(t)}()}catch(e){console.error(e)}var h=document.styleSheets[0];if(!h){console.warn("No stylesheet available. There must be an existing stylesheet in order for allPages.js to function properly without inline style allowed or without document.documentElement (which may always exist).");var v=document.createElement("style");document.documentElement.appendChild(v),h=document.styleSheets[0]}try{var g=function(){var e=window.darkMode,n=localStorage.getItem("prefersDarkMode");null===n&&(n=w.matches),window.darkMode=!0===n||"true"===n,window.darkMode!==e&&window.dispatchEvent(new Event("colorSchemeChanged"))},y=h.cssRules[h.insertRule("@media all {}",h.cssRules.length)],w=window.matchMedia("(prefers-color-scheme: dark)");w.onchange=g,window.addEventListener("storage",g);var b=h.cssRules[h.cssRules.length-2];b=y.cssRules[y.insertRule(b.cssText,y.cssRules.length)],h.deleteRule(h.cssRules.length-2),b.insertRule("a:link {color: rgb(100,150,255);}",b.cssRules.length),b.insertRule("a:visited {color: rgb(200,0,255);}",b.cssRules.length),b.insertRule("a:hover {color: green;}",b.cssRules.length),b.insertRule("a:active {color: red;}",b.cssRules.length),window.addEventListener("colorSchemeChanged",function(){var e=b.cssText;!0===window.darkMode?(e=e.replace(/@media [^{]+{/,"@media all {"),y.deleteRule(y.cssRules.length-1),y.insertRule(e,y.cssRules.length)):!1===window.darkMode&&(e=e.replace(/@media [^{]+{/,"@media not all {"),y.deleteRule(y.cssRules.length-1),y.insertRule(e,y.cssRules.length)),b=y.cssRules[y.cssRules.length-1]}),window.addDarkModeCSS=function(e){b.insertRule(e,b.cssRules.length)},g()}catch(e){console.error(e)}h.insertRule("html body {font-family: Arial, Helvetica, sans-serif}",h.cssRules.length);var R=window.location.href;(R=R.slice(0,R.lastIndexOf("/")+1)).endsWith("resources/")&&(R=R.slice(0,R.length-"resources/".length));var x=document.createElement("div");x.className="topnav";var S=[],k=document.createElement("a");k.href=R,k.innerHTML="River Info",S.push(k);var E=document.createElement("a");E.href=R+"about.html",E.innerHTML="About",S.push(E);var M=document.createElement("a");M.href=R+"FAQ.html",M.innerHTML="FAQ",S.push(M);var O=document.createElement("a");O.href=R+"settings.html",O.innerHTML="Settings",S.push(O);var T=document.createElement("a");T.href=R+"clubs.html",T.innerHTML="Clubs",S.push(T);var L=window.location.href.slice(R.length);-1!==L.indexOf("#")&&(L=L.slice(0,L.indexOf("#")));for(var j=0;j<S.length;j++){var C=S[j];C.href.slice(R.length)===L&&(C.className="topnavcurrent"),x.appendChild(C)}document.body.insertBefore(x,document.body.firstChild),h.insertRule("\n.topnav {\noverflow: hidden;\nbackground-color: #24b9cc;\nmargin:0px;\n}\n",h.cssRules.length),h.insertRule("\n.topnav a {\nfloat: left;\ndisplay: block;\ncolor:black;\ntext-align:center;\npadding: 12px 13px;\ntext-decoration: none; /*Avoid the links being underlined*/\nfont-size: 17px;\n}\n",h.cssRules.length),h.insertRule("\n@media screen and (max-width: 386px) {\n.topnav a {\npadding: 10px 11px;\nfont-size: 4.3vw;\n}\n}\n",h.cssRules.length),h.insertRule(".topnav a:hover {background-color: #359daa}",h.cssRules.length),h.insertRule(".topnavcurrent {background-color: #25d1a7}",h.cssRules.length),h.insertRule("\n.modal {\ndisplay: none;\nposition:fixed;\nz-index:1;\npadding-top: 5%;\nleft:0;\ntop:0;\nwidth:100%;\nheight: 100%;\noverflow:auto;\nbackground-color: rgba(0,0,0,0.4);\n}",h.cssRules.length),h.insertRule("\n.modal-content {\ncolor:black;\nbackground-color: #fefefe;\nmargin: auto;\npadding: 20px;\nborder: 1px solid #888;\nwidth: 90%;\nmargin-bottom:100px;\n}",h.cssRules.length),h.insertRule("\n.modal-close {\ncolor: #aaaaaa;\nfloat: right;\nfont-size: 28px;\nfont-weight: bold;\n}",h.cssRules.length),h.insertRule("\n.modal-close:hover, .modal-close:focus {\ncolor: #000;\ntext-decoration: none;\ncursor: pointer;\n}",h.cssRules.length),window.addDarkModeCSS("\n.modal-content {\nbackground-color:black !important;\ncolor:#cfcfcf !important;\n");var _=document.createElement("div");_.className="modal";var P=document.createElement("div");P.className="modal-content";var A=document.createElement("span");A.className="modal-close",A.innerHTML="×";var D=document.createElement("p");_.appendChild(P),P.appendChild(A),P.appendChild(D),document.body.appendChild(_),A.onclick=function(){_.style.display="none"},window.addEventListener("click",function(e){e.target===_&&(_.style.display="none")});var H=function(e){function n(){var e;r()(this,n),e=l()(this,s()(n).call(this));var t=u()(e);function o(){window.darkMode?t.style.color="rgb(100, 150, 255)":t.style.color="rgb(51, 51, 255)"}return e.style.cursor="pointer",o(),window.addEventListener("colorSchemeChanged",o),e.style.textDecoration="underline",e.addEventListener("click",function(){var e="This overview ("+this.innerHTML+") is not available. This is likely due to a programming or data entry error";window.overviews&&window.overviews[this.innerText.trim()]&&(e=window.overviews[this.innerText.trim()]),D.innerHTML=e,_.style.display="block"}),e}return f()(n,e),n}(m()(HTMLElement));try{customElements.define("river-overview",H)}catch(e){console.error(e),navigator.userAgent.includes("Firefox")&&setTimeout(function(){alert("In order to view area overviews, you will need a browser that supports DOM customElements. You may be able to enable customElements in about:config")},4e3)}},function(e,n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(n){return"function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?e.exports=o=function(e){return t(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},o(n)}e.exports=o},function(e,n){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},function(e,n,t){var o=t(4);function r(n,t,i){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=r=function(e,n,t){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(e,r));return t&&o(i,t.prototype),i}:e.exports=r=Reflect.construct,r.apply(null,arguments)}e.exports=r},function(e,n){var t=Number(localStorage.getItem("previousVisits"))||0;localStorage.setItem("previousVisits",t+1);var o={selectedColorScheme:localStorage.getItem("prefersDarkMode"),usingDarkMode:window.darkMode,supportsDarkMode:"not all"!==window.matchMedia("(prefers-color-scheme: dark)").media,online:navigator.onLine,hasServiceWorkers:"serviceWorker"in navigator,timeStamp:Date.now(),referrer:document.referrer,previousVisits:t,url:window.location.href,userAgent:navigator.userAgent},r="https://docs.google.com/forms/d/e/1FAIpQLSfyTHeq0fp6-iofQacxfXcsSGjYymLJbLOPmlBBKBtttWvtcA/formResponse?ifq&entry.1198287313="+JSON.stringify(o)+"&submit=Submit";r=encodeURI(r);var i=JSON.parse(localStorage.getItem("urlsToLoad")||"[]");i.push(r),localStorage.setItem("urlsToLoad",JSON.stringify(i));for(var l=function(e){var n=i[e];new Promise(function(e,n){if(window.fetch){var t=fetch(r,{mode:"no-cors"});t.then(function(n){"opaque"===n.type?e(!0):e(!1)}),t.catch(function(n){console.error(n),e(!1)})}else{var o=new XMLHttpRequest;o.onload=function(n){e(!0)},o.onerror=function(n){e(!0)},o.open("GET",r),o.send()}}).then(function(e){!0===e&&(i.splice(i.indexOf(n),1),localStorage.setItem("urlsToLoad",JSON.stringify(i)))})},c=0;c<i.length;c++)l(c)}]);
//# sourceMappingURL=allPages.js.map