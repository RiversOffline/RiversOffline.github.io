!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){e.exports=n(16)},function(e,t,n){var r=n(18),o=n(19),a=n(20);e.exports=function(e){return r(e)||o(e)||a()}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){var r=n(10),o=n(11);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t,n){var r=n(0);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(1),o=n(0),a=n(12),i=n(13);function l(t){var n="function"==typeof Map?new Map:void 0;return e.exports=l=function(e){if(null===e||!a(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return i(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},l(t)}e.exports=l},function(e,t){function n(e,t,n,r,o,a,i){try{var l=e[a](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(o,a){var i=e.apply(t,r);function l(e){n(i,o,a,l,s,"next",e)}function s(e){n(i,o,a,l,s,"throw",e)}l(void 0)})}}},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),a=n(5),i=n.n(a),l=n(1),s=n.n(l),c=n(6),u=n.n(c),d=n(7),h=n.n(d);try{n(14)}catch(e){console.error(e)}"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js")});try{!function(){for(var e=document.head.querySelectorAll("meta"),t=0;t<e.length;t++)if(e[t].name="viewport")return;var n=document.createElement("meta");n.name="viewport",n.content="width=device-width, initial-scale=1",document.head.appendChild(n)}()}catch(e){console.error(e)}var f=document.styleSheets[0];if(!f){console.warn("No stylesheet available. There must be an existing stylesheet in order for allPages.js to function properly without inline style allowed or without document.documentElement (which may always exist).");var p=document.createElement("style");document.documentElement.appendChild(p),f=document.styleSheets[0]}try{if(f.cssRules[f.cssRules.length-1]instanceof CSSMediaRule){if(window.darkMode=localStorage.getItem("prefersDarkMode"),"null"===window.darkMode&&(window.darkMode=null),"false"===window.darkMode&&(window.darkMode=!1),"true"===window.darkMode&&(window.darkMode=!0),null===window.darkMode&&(window.darkMode=window.matchMedia("(prefers-color-scheme: dark)").matches),!0===window.darkMode&&!1===window.matchMedia("(prefers-color-scheme: dark)").matches)for(var m=f.cssRules[f.cssRules.length-1].cssText,g=(m=m.slice(m.indexOf("{")+1,-1)).split("\n"),v=0;v<g.length;v++){var w=g[v];""!==w.trim()&&f.insertRule(w,f.cssRules.length)}!1===window.darkMode&&!0===window.matchMedia("(prefers-color-scheme: dark)").matches&&f.removeRule(f.cssRules.length-1),window.darkMode&&(f.insertRule("a:link {color: #3333FF;}",f.cssRules.length),f.insertRule("a:visited {color: purple;}",f.cssRules.length),f.insertRule("a:hover {color: green;}",f.cssRules.length),f.insertRule("a:active {color: red;}",f.cssRules.length))}}catch(e){console.error(e)}f.insertRule("html body {font-family: Arial, Helvetica, sans-serif}",f.cssRules.length);var y=window.location.href;y=y.slice(0,y.lastIndexOf("/")+1);var b=document.createElement("div");b.className="topnav";var x=[],M=document.createElement("a");M.href=y,M.innerHTML="River Info",x.push(M);var k=document.createElement("a");k.href=y+"about.html",k.innerHTML="About",x.push(k);var E=document.createElement("a");E.href=y+"FAQ.html",E.innerHTML="FAQ",x.push(E);var L=document.createElement("a");L.href=y+"settings.html",L.innerHTML="Settings",x.push(L);var S=document.createElement("a");S.href=y+"clubs.html",S.innerHTML="Clubs",x.push(S);var T=window.location.href.slice(y.length);-1!==T.indexOf("#")&&(T=T.slice(0,T.indexOf("#")));for(var C=0;C<x.length;C++){var I=x[C];I.href.slice(y.length)===T&&(I.className="topnavcurrent"),b.appendChild(I)}document.body.insertBefore(b,document.body.firstChild),f.insertRule("\n.topnav {\noverflow: hidden;\nbackground-color: #24b9cc;\nmargin:0px;\n}\n",f.cssRules.length),f.insertRule("\n.topnav a {\nfloat: left;\ndisplay: block;\ncolor:black;\ntext-align:center;\npadding: 12px 13px;\ntext-decoration: none; /*Avoid the links being underlined*/\nfont-size: 17px;\n}\n",f.cssRules.length),f.insertRule("\n@media screen and (max-width: 386px) {\n.topnav a {\npadding: 10px 11px;\nfont-size: 4.3vw;\n}\n}\n",f.cssRules.length),f.insertRule(".topnav a:hover {background-color: #359daa}",f.cssRules.length),f.insertRule(".topnavcurrent {background-color: #25d1a7}",f.cssRules.length),f.insertRule("\n.modal {\ndisplay: none; \nposition:fixed; \nz-index:1; \npadding-top: 5%;\nleft:0;\ntop:0;\nwidth:100%;\nheight: 100%;\noverflow:auto;\nbackground-color: rgba(0,0,0,0.4);\n}",f.cssRules.length),f.insertRule("\n.modal-content {\ncolor:black;\nbackground-color: #fefefe;\nmargin: auto;\npadding: 20px;\nborder: 1px solid #888;\nwidth: 90%;\n}",f.cssRules.length),f.insertRule("\n.modal-close {\ncolor: #aaaaaa;\nfloat: right;\nfont-size: 28px;\nfont-weight: bold;\n}",f.cssRules.length),f.insertRule("\n.modal-close:hover, .modal-close:focus {\ncolor: #000;\ntext-decoration: none;\ncursor: pointer;\n}",f.cssRules.length),window.darkMode&&f.insertRule("\t\n.modal-content {\nbackground-color:black;\ncolor:#cfcfcf;\n}",f.cssRules.length);var N=document.createElement("div");N.className="modal";var R=document.createElement("div");R.className="modal-content";var O=document.createElement("span");O.className="modal-close",O.innerHTML="×";var F=document.createElement("p");N.appendChild(R),R.appendChild(O),R.appendChild(F),document.body.appendChild(N),O.onclick=function(){N.style.display="none"},window.addEventListener("click",function(e){e.target===N&&(N.style.display="none")});var A=function(e){function t(){var e;return o()(this,t),(e=i()(this,s()(t).call(this))).style.cursor="pointer",e.style.color="rgb(51, 51, 255)",e.style.textDecoration="underline",e.addEventListener("click",function(){var e="This overview ("+this.innerHTML+") is not available. This is likely due to a programming or data entry error";window.overviews&&window.overviews[this.innerText.trim()]&&(e=window.overviews[this.innerText.trim()]),F.innerHTML=e,N.style.display="block"}),e}return u()(t,e),t}(h()(HTMLElement));try{customElements.define("river-overview",A)}catch(e){console.error(e),navigator.userAgent.includes("Firefox")&&setTimeout(function(){alert("In order to view area overviews, you will need a browser that supports DOM customElements. You may be able to enable customElements in about:config")},4e3)}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},function(e,t,n){var r=n(0);function o(t,n,a){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=o=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a}:e.exports=o=Reflect.construct,o.apply(null,arguments)}e.exports=o},function(e,t){var n=Number(localStorage.getItem("previousVisits"))||0;localStorage.setItem("previousVisits",n+1);var r={userAgent:navigator.userAgent,selectedColorScheme:localStorage.getItem("prefersDarkMode"),usingDarkMode:window.darkMode,supportsDarkMode:"not all"!==window.matchMedia("(prefers-color-scheme: dark)").media,online:navigator.onLine,hasServiceWorkers:"serviceWorker"in navigator,timeStamp:Date.now(),referrer:document.referrer,previousVisits:n,url:window.location.href},o="https://docs.google.com/forms/d/e/1FAIpQLSfyTHeq0fp6-iofQacxfXcsSGjYymLJbLOPmlBBKBtttWvtcA/formResponse?ifq&entry.1198287313="+JSON.stringify(r)+"&submit=Submit";var a=JSON.parse(localStorage.getItem("urlsToLoad")||"[]");a.push(o),localStorage.setItem("urlsToLoad",JSON.stringify(a));for(var i=function(e){var t=a[e];new Promise(function(e,t){if(window.fetch){var n=fetch(o,{mode:"no-cors"});n.then(function(t){"opaque"===t.type?e(!0):e(!1)}),n.catch(function(t){console.error(t),e(!1)})}else{var r=new XMLHttpRequest;r.onload=function(t){e(!0)},r.onerror=function(t){e(!0)},r.open("GET",o),r.send()}}).then(function(e){!0===e&&(a.splice(a.indexOf(t),1),localStorage.setItem("urlsToLoad",JSON.stringify(a)))})},l=0;l<a.length;l++)i(l)},function(e,t,n){"use strict";n.r(t);var r,o=n(2),a=n.n(o),i=n(8),l=n.n(i);try{n(9)}catch(e){console.error(e)}try{window.addLine=n(17).addLine}catch(e){console.error(e)}Object.assign(window,n(21)),window.River=n(22).River,window.sort=n(24).sort,Object.assign(window,n(25)),window.usgsarray={},window.ItemHolder=[],riverarray.map(function(e,t){ItemHolder[t]=new River(t,e)}),n(27).loadUSGS(),window.NewList=function(e,t,n){"string"==typeof e&&(e=e.toLowerCase());var o=ItemHolder.slice(0);if(0!==String(e).length&&e&&t&&("sort"===t&&(r&&(o=r),o=sort(e,o,n)),"normal"===t&&(o=normalSearch(o,e)),"advanced"===t&&(o=advancedSearch(o,e)),"location"===t)){r&&(o=r);var a=[];o.forEach(function(t){t.plat&&t.plon&&distanceto(t.plat,t.plon)<e&&a.push(t)}),o=a}ItemHolder.forEach(function(e){e.delete()});var i=document.getElementById("Rivers");o.forEach(function(e){i.appendChild(e.create())}),"sort"!==t&&(r=o)},document.getElementById("Rivers").appendChild((new TopBar).create()),n(28),NewList("alphabetical","sort");var s=document.getElementById("searchbox");function c(){return(c=l()(a.a.mark(function e(){var t,n,r,o,i,l;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("locationProgress"),n=0,r=setInterval(function(){n=(n+1)%6,t.innerHTML="Calculating your Approximate Location (Expect this to take 15-60 seconds)"+".".repeat(n)},500),e.prev=3,e.next=6,new Promise(function(e,t){navigator.geolocation.getCurrentPosition(e,t)});case 6:o=e.sent,e.next=15;break;case 9:e.prev=9,e.t0=e.catch(3),i="Error code "+e.t0.code+" occoured when getting your location. The error message is: "+e.t0.message,alert(i),clearInterval(r),t.innerHTML=i;case 15:l=o.coords,clearInterval(r),document.getElementById("latitudeQuery").value=l.latitude,document.getElementById("longitudeQuery").value=l.longitude,t.innerHTML="You are within "+l.accuracy+" meters of "+l.latitude+" degrees latitude and "+l.longitude+" degrees longitude.";case 20:case"end":return e.stop()}},e,null,[[3,9]])}))).apply(this,arguments)}if(s.addEventListener("keydown",function(){setTimeout(function(){NewList(s.value,"normal")},20)}),document.getElementById("calculateCoordinates").addEventListener("click",function(){return c.apply(this,arguments)}),document.getElementById("performadvancedsearch").addEventListener("click",function(){var e=function(){var e={};e.name={type:document.getElementById("nameType").value,query:document.getElementById("nameQuery").value},e.section={type:document.getElementById("sectionType").value,query:document.getElementById("sectionQuery").value},e.writeup={type:document.getElementById("writeupType").value,query:document.getElementById("writeupQuery").value};var t=Number(document.getElementById("distanceQuery").value),n=document.getElementById("latitudeQuery").value,r=document.getElementById("longitudeQuery").value;return n=Number(n),r=Number(r),t>0||!n||!r?!(t>0)||n&&r?t>0&&n&&r&&(e.location={lat:n,lon:r,distance:t,includeUnknown:document.getElementById("includeUnknown").checked}):alert("You must enter a latitude and longitude (Get the coordinates from GPS by pressing Calculate my Location)"):alert("Distance must be a number greater than 0 to use location sorting"),e.skill={type:"from",query:[Number(document.getElementById("skillQuery1").value),Number(document.getElementById("skillQuery2").value)]},e}(),t=window.location.href;t=t.slice(0,t.lastIndexOf("/")+1);var n=encodeURI(t+"#"+JSON.stringify(e));document.getElementById("searchlink").innerHTML='Link to this search: <a href="'+n+'">'+n+"</a>",NewList(e,"advanced",!1)}),window.location.hash.length>0){var u=decodeURI(window.location.hash.slice(1));try{var d=JSON.parse(u);NewList(d,"advanced")}catch(e){document.getElementById("searchbox").value=u,NewList(u,"normal")}}},function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(e,t,n){var r=u;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw a;return I()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=E(i,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=c(e,t,n);if("normal"===s.type){if(r=n.done?f:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(e,n,i),a}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u="suspendedStart",d="suspendedYield",h="executing",f="completed",p={};function m(){}function g(){}function v(){}var w={};w[a]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(C([])));b&&b!==n&&r.call(b,a)&&(w=b);var x=v.prototype=m.prototype=Object.create(w);function M(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function k(e){var t;this._invoke=function(n,o){function a(){return new Promise(function(t,a){!function t(n,o,a,i){var l=c(e[n],e,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(u).then(function(e){s.value=e,a(s)},function(e){return t("throw",e,a,i)})}i(l.arg)}(n,o,t,a)})}return t=t?t.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=c(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function C(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:I}}function I(){return{value:t,done:!0}}return g.prototype=x.constructor=v,v.constructor=g,v[l]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},M(k.prototype),k.prototype[i]=function(){return this},e.AsyncIterator=k,e.async=function(t,n,r,o){var a=new k(s(t,n,r,o));return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},M(x),x[l]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return l.type="throw",l.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){"use strict";n.r(t),n.d(t,"addLine",function(){return a});var r=n(3),o=n.n(r);function a(e,t,n,r,a,i,l,s,c){if(3===s)var u=c;2!==s&&(c=0);var d=.8*r.height,h=r.width,f=r.getContext("2d");if(!isNaN(Number(a))){a=[];for(var p=0;p<i.length;p++)a.push(p*h)}a.length!==i.length&&console.warn("Uneven amount of datapoints. "+a.length+" horizontal points found, but "+i.length+" vertical points found."),l=l||"#000000",f.lineWidth=Math.ceil(Math.min(h,d)/120),f.beginPath(),h*=2===s?.86:.93;var m=[];for(p=0;p<i.length;p++)isNaN(Number(i[p]))||""===i[p]||m.push(i[p]);var g=Math.max.apply(Math,m)-Math.min.apply(Math,m),v=Math.max.apply(Math,o()(a))-Math.min.apply(Math,o()(a));g=d/g,v=h/v;var w=Math.min.apply(Math,m),y=Math.min.apply(Math,o()(a));y-=.07*(Math.max.apply(Math,o()(a))-Math.min.apply(Math,o()(a)));var b=Math.floor(.07*r.width/2.6);(f.font=b+"px serif",9===l.length&&(l=l.slice(0,7)),f.fillStyle=l,f.strokeStyle=l,3===s)&&((O=f.createLinearGradient(0,0,0,d)).addColorStop(0,l),O.addColorStop(1,u),f.strokeStyle=O,f.fillStyle=O);if(0===c||void 0===c)var x=1;else x=r.width-.07*r.width;for(p=1;p<11;p++){var M=(Math.max.apply(Math,m)-Math.min.apply(Math,m))*((p-1)/10)+Math.min.apply(Math,m),k=Math.max(0,3-String(Math.round(M)).length);M=Number(M.toFixed(k)),f.fillText(M,x,d*(11-p)/10-5)}M=(Math.max.apply(Math,m)-Math.min.apply(Math,m))*((p-1)/10)+Math.min.apply(Math,m);var E=Math.max(0,3-String(Math.round(M)).length);M=Number(M.toFixed(E)),f.fillText(M,x,27);b=Math.floor(.07*r.width/2.8);function L(e){var t=String(e.getHours());return e.getHours()<10&&(t="0"+t),t+=":",e.getMinutes()<10?t+="0"+e.getMinutes():t+=e.getMinutes(),t+=" "+(e.getMonth()+1)+"/"+e.getDate()+"/"+e.getFullYear()}f.font=b+"px serif",9===l.length&&(l=l.slice(0,7)),window.darkMode?f.fillStyle="#cccccc":f.fillStyle="black";var S=new Date(t[0]),T=new Date(t[t.length-1]),C=new Date((T-S)/2+S.getTime()),I=L(S),N=L(T),R=L(C);f.fillText(I,10,r.height*(11/12)-.06*r.height-12),f.textAlign="end",f.fillText(N,r.width-10,r.height*(11/12)-.06*r.height-12),f.textAlign="center",f.fillText(R,r.width/2,r.height*(11/12)-.06*r.height-12),f.textAlign="start";var O;b=Math.floor(.07*r.width/2.4);(f.font=b+"px serif",f.fillStyle=l,3===s)&&((O=f.createLinearGradient(0,d,200,d)).addColorStop(0,l),O.addColorStop(1,u),f.strokeStyle=O,f.fillStyle=O);if(2===s)0===c||void 0===c?f.fillText("Flow (Cubic Feet/Second)",x+5,r.height*(11/12)):(f.textAlign="right",f.fillText("Gauge Height (Feet)",x-5,r.height*(11/12)),f.textAlign="start");else if(3===s)f.fillText("Water Temperature (°F)",x+5,r.height*(11/12));else if("Precipitation"===e){f.fillText("Precipitation (Inches)",x+5,r.height*(11/12));var F,A=0,H=0;(F=(F=i.slice(-96)).map(Number)).forEach(function(e){A+=e}),(F=F.slice(-48)).forEach(function(e){H+=e}),A=A.toFixed(2),H=H.toFixed(2),f.fillText("Last 24 Hours: "+A+" in",r.width-700,r.height*(11/12)),f.fillText("Last 12 Hours: "+H+" in",r.width-330,r.height*(11/12))}else"cfs"===e?f.fillText("Flow (Cubic Feet/Second)",x+5,r.height*(11/12)):"height"===e?f.fillText("Gauge Height (Feet)",x+5,r.height*(11/12)):f.fillText("Labeling Error...",x+5,r.height*(11/12));3===s&&((O=f.createLinearGradient(0,0,0,.8*r.height)).addColorStop(0,l),O.addColorStop(1,u),f.strokeStyle=O,f.fillStyle=O);function B(e){return Math.round((e-y)*v)}function P(e){return Math.round(d-(e-w)*g)}window.darkMode?f.fillStyle="#cccccc":f.fillStyle="black",f.textAlign="center",f.fillText(n,r.width/2,r.height-10),f.textAlign="start";for(var j=0;j<Math.min(i.length,a.length);j++)if(!isNaN(Number(i[j]))&&""!==i[j]){f.moveTo(B(a[j]),P(i[j]));break}var _=1;for(p=j;p<Math.min(i.length,a.length);p++)isNaN(Number(i[p]))||""===i[p]?_=0:1===_?f.lineTo(B(a[p]),P(i[p])):(f.moveTo(B(a[p]),P(i[p])+10),f.lineTo(B(a[p]),P(i[p])),_=1);f.stroke(),f.beginPath(),f.lineWidth=Math.ceil(f.lineWidth/10),window.darkMode?f.strokeStyle="#ccccccAA":f.strokeStyle="000000AA";for(p=1;p<11;p++)f.moveTo(0,d*(11-p)/10),f.lineTo(r.width,d*(11-p)/10);f.stroke()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t){function n(e){var t=document.createElement("span");return t.className="riverspan",t.innerHTML=e,t}function r(e,t){e.onclick=function(){1===this.value?(NewList(t,"sort",!0),this.value=0):(NewList(t,"sort"),this.value=1)}}e.exports={TopBar:function(){this.create=function(){var e=document.createElement("button");e.id="topbar",e.className="riverbutton";var t=n("River⇅");return r(t,"alphabetical"),t.value=1,e.appendChild(t),e.appendChild(n("Section")),r(t=n("Skill⇅"),"skill"),t.value=0,e.appendChild(t),r(t=n("Rating⇅"),"rating"),t.value=1,e.appendChild(t),r(t=n("Flow Info/Trend⇅"),"running"),t.value=1,e.appendChild(t),e},this.delete=function(){var e=document.getElementById("topbar");e&&e.parentNode.removeChild(e)}}}},function(e,t,n){var r=n(23).addGraphs;function o(e,t){e.onclick=function(){var n=ItemHolder[t];if(0===n.expanded){n.expanded=1;var o=document.createElement("div");o.innerHTML=n.writeup+"<br><br>",n.plat&&n.plon&&(o.innerHTML+="Put-In GPS Coordinates: "+n.plat+", "+n.plon+"<br>"),n.tlat&&n.tlon&&(o.innerHTML+="Take-Out GPS Coordinates: "+n.tlat+", "+n.tlon+"<br>");for(var a=["minrun","lowflow","midflow","highflow","maxrun"],i=0;i<a.length;i++){var l=a[i];n[l]&&(o.innerHTML+=l+":"+n[l]+" ")}if(n.aw){o.appendChild(document.createElement("br"));var s=document.createElement("a");s.target="_blank",s.rel="noopener",s.href="https://www.americanwhitewater.org/content/River/detail/id/"+n.aw,s.innerHTML="Click here to view this river on American Whitewater",o.appendChild(s)}if(self.usgsarray&&n.usgs){var c;try{c=function(e){var t=window.usgsarray[e];if(t){var n;if(t["00060"]?n=t["00060"].values:t["00065"]?n=t["00065"].values:t["00010"]?n=t["00010"].values:t["00045"]&&(n=t["00045"].values),n)for(var r=n.length;r>=0;r--){var o=n[r];if(o)return Date.now()-Number(new Date(o.dateTime))}}return null}(n.usgs)}catch(e){console.error(e),c=null}var u;c>72e5&&((u=document.createElement("p")).style.backgroundColor="yellow",u.innerHTML="Check the dates! This river data is more than "+Math.floor(c/1e3/60/60)+" hours old!",u.style.textAlign="center",u.style.lineHeight="2em",u.style.color="black",o.appendChild(u));var d=self.usgsarray[n.usgs];if(d){var h=document.createElement("p");h.style.fontWeight="bold",h.style.textAlign="center",h.innerHTML="Disclaimer: USGS Gauge data is provisional, and MIGHT be incorrect. Use at your own risk.",o.appendChild(h),c>72e5?(h.style.marginTop="0.5em",u.style.marginBottom="0.5em"):h.style.marginTop="2em",r(o,d)}}o.style.padding="6px",o.id=n.base+2,e.parentNode.insertBefore(o,e.nextSibling)}else{n.expanded=0;var f=document.getElementById(n.base+2);f&&f.parentNode.removeChild(f)}}}function a(e,t){for(var n,r,o=["minrun","lowflow","midflow","highflow","maxrun"],a=0;a<o.length;a++){var i=e[o[a]];if(i){i=i.trim();var l=parseFloat(i),s=i.match(/[^\d|.]+/);if(s&&(s=s[0].trim()),!n&&s)n=s;else if(n!==s){console.warn(o[a]+" on "+e.name+" "+e.section+" has a different extension and has been skipped"),o[a]=void 0;continue}o[a]=l}else o[a]=void 0}if("cfs"===n?r=e.cfs:"feet"!==n&&"ft"!==n||(r=e.feet),r<=o[0])return e.running=0,"hsl(0,100%,"+(t&&t.highlighted?window.darkMode?"35%":"60%":window.darkMode?"30%":"70%")+")";if(r>=o[4])return e.running=4,"hsl(240,100%,"+(t&&t.highlighted?window.darkMode?"30%":"65%":window.darkMode?"20%":"70%")+")";var c=function(e,t,n){return e=Math.log(e),t=Math.log(t),((n=Math.log(n))-e)/(t-e)},u=t&&t.highlighted?window.darkMode?"35%":"65%":window.darkMode?"25%":"75%",d=o[0],h=o[4],f=o[2]||Math.pow(10,(Math.log10(d)+Math.log10(h))/2),p=o[1]||Math.pow(10,(Math.log10(d)+Math.log10(f))/2),m=o[3]||Math.pow(10,(Math.log10(f)+Math.log10(h))/2);return e.lowflow=parseFloat(p.toFixed(3))+n,e.midflow=parseFloat(f.toFixed(3))+n,e.highflow=parseFloat(m.toFixed(3))+n,e.running=r<p?c(d,p,r):r<f?1+c(p,f,r):r<m?2+c(f,m,r):3+c(m,h,r),"hsl("+(0+60*e.running)+",100%,"+u+")"}e.exports.River=function(e,t){switch(Object.assign(this,t),this.tags=this.tags||"",Number(this.rating)){case 1:this.rating="1Star";break;case 2:case 3:case 4:case 5:this.rating=t.rating+"Stars";break;default:this.rating="Error"}this.rating||(this.rating="Error"),this.skill=this.skill||"?",this.base="b"+e,this.expanded=0,this.index=e,this.create=function(t){if(!this.finished||t){var n=function(e){var t=document.createElement("span");return t.innerHTML=e,t.className="riverspan",r.appendChild(t),t},r=document.createElement("button");if(r.id=this.base+1,r.normalColor=(window.darkMode,""),r.focusedColor=window.darkMode?"#333333":"#e3e3e3",n(this.name),n(this.section),n(this.skill),"Error"===this.rating)n("???");else{var i=document.createElement("img");i.src="resources/"+this.rating+".png",i.alt=this.rating[0]+" Stars",i.className="starimg";var l=document.createElement("span");l.appendChild(i),l.className="riverspan",r.appendChild(l)}if(this.flow){n(this.flow+function(e){var t,n=usgsarray[e];if(n&&(n["00060"]?t=n["00060"].values:n["00065"]&&(t=n["00065"].values),t)){for(var r,o,a=Math.max(t.length-5,0),i=t.length;i>a;i--){var l=t[i];if(l){var s=l.value;r?o=s:r=s}}if(r>o)return"⬆";if(o>r)return"⬇";if(r===o)return"-"}}(this.usgs));this.minrun&&this.maxrun&&(r.normalColor=a(this),r.focusedColor=a(this,{highlighted:!0}))}if(r.className="riverbutton",o(r,e),r.addEventListener("mouseover",function(){this.style.backgroundColor=this.focusedColor}),r.addEventListener("mouseout",function(){this.style.backgroundColor=this.normalColor}),-1!==navigator.userAgent.toLowerCase().indexOf("google"))try{setTimeout(function(){r.dispatchEvent(new Event("click"))},100)}catch(e){}this.finished=r}return this.finished.style.backgroundColor=this.finished.normalColor,this.finished},this.delete=function(){var t=ItemHolder[e];function n(e){var n=document.getElementById(t.base+e);n&&n.parentNode.removeChild(n)}var r=document.getElementById(t.base+1);r&&(r.style.backgroundColor=""),n(2),n(1)}}},function(e,t){function n(){var e=document.createElement("canvas");e.width=1200,e.height=800;var t=e.getContext("2d");return window.darkMode?t.fillStyle="black":t.fillStyle="white",t.fillRect(0,0,e.width,e.height),e}function r(e){for(var t=[],n=[],r=0;r<e.length;r++){var o=e[r];t.push(o.value),n.push(o.dateTime)}return{values:t,timestamps:n}}e.exports.addGraphs=function(e,t){var o=t["00010"],a=t["00045"],i=t["00060"],l=t["00065"];try{!function(e,t,o,a){if(t||o){var i=n();if(t&&o){var l=r(t.values);addLine("cfs",l.timestamps,a.name,i,0,l.values,"#00AAFFa0",2),l=r(o.values),addLine("height",l.timestamps,a.name,i,0,l.values,"#2222FFa0",2,1)}else if(t){var s=r(t.values);addLine("cfs",s.timestamps,a.name,i,0,s.values,"#00AAFF")}else{var c=r(o.values);addLine("height",c.timestamps,a.name,i,0,c.values,"#2222FF")}var u=document.createElement("img");u.className="graph",u.src=i.toDataURL("image/png"),e.appendChild(u)}}(e,i,l,t)}catch(e){console.warn("Error creating flow graph: "+e)}try{!function(e,t,o){if(t){var a=n(),i=r(t.values);addLine("",i.timestamps,o.name,a,0,i.values,"#FF0000",3,"#0000FF");var l=document.createElement("img");l.className="graph",l.src=a.toDataURL("image/png"),e.appendChild(l)}}(e,o,t)}catch(e){console.warn("Error creating temperature graph: "+e)}try{!function(e,t,o){if(t){var a=n(),i=r(t.values);addLine("Precipitation",i.timestamps,o.name,a,0,i.values,"#0066FF");var l=document.createElement("img");l.className="graph",l.src=a.toDataURL("image/png"),e.appendChild(l)}}(e,a,t)}catch(e){console.warn("Error creating precipitation graph: "+e)}}},function(e,t){function n(e,t){return e.sort(function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0}),e}function r(e,t){return e=n(e,"name"),t&&e.reverse(),e}function o(e,t){for(e=n(e,"rating"),t&&e.reverse();"Error"===e[0].rating;)e.push(e.shift());return e}function a(e,t){if(e.sort(function(e,t){function n(e){switch(e.skill){case"FW":e=1;break;case"B":e=2;break;case"N":e=3;break;case"LI":e=4;break;case"I":e=5;break;case"HI":e=6;break;case"A":e=7;break;case"E":e=8;break;default:e=9}return e}return n(e)-n(t)}),t)for(e.reverse();"?"===e[0].skill;)e.push(e.shift());return e}e.exports={ratingsort:o,alphabeticalsort:r,skillsort:a,sort:function(e,t,i){if("alphabetical"===e)t=r(t,i);else if("rating"===e)t=o(t,i);else if("skill"===e)t=a(t,i);else{if("running"!==e)throw"Unknown sorting method "+e;t=function(e,t){var r=[],o=[],a=[];return e.forEach(function(e){void 0!==e.running?a.push(e):e.flow?o.push(e):r.push(e)}),a=n(a,"running"),t&&a.reverse(),0===a.length?(alert("Flow data has not yet loaded."),e):a=(a=a.concat(o)).concat(r)}(t,i)}return t}}},function(e,t,n){function r(e){var t=e.content,n=e.query;if(e.matchCase||(t=t.toLowerCase(),n=n.toLowerCase()),"contains"===e.type)return t.includes(n);if("matches"===e.type)return t===n;throw"Unknown Search Type "+e.type}function o(e,t,n){for(var o in e){n.content=e[o][t],r(n)||delete e[o]}return e}function a(e){var t;switch(e){case"FW":t=1;break;case"B":t=2;break;case"N":t=3;break;case"LI":t=4;break;case"I":t=5;break;case"HI":t=6;break;case"A":t=7;break;case"E":t=8}return t}function i(e,t){var n=t.query,r=t.type,o=Math.min(n[0],n[1]),i=Math.max(n[0],n[1]);if("from"!==r)throw"Unknown search type"+r;for(var l in e){var s=!1,c=a(e[l].skill);o<=c&&c<=i&&(s=!0,console.log(o,c,i)),s||delete e[l]}}var l=n(26).lambert;function s(e,t){var n=t.distance,r=t.lat,o=t.lon;for(var a in e){var i=e[a],s=i.plat||i.tlat||i.hidlat,c=i.plon||i.tlon||i.hidlon,u=void 0;if(s&&c)u=l(r,o,s,c)<n;else u=t.includeUnknown;u||delete e[a]}return e}e.exports={normalSearch:function(e,t){var n=[[],[],[],[],[]];return e.forEach(function(e){-1!==e.tags.toLowerCase().indexOf(t)?-1!==e.name.toLowerCase().indexOf(t)?n[0].push(e):n[1].push(e):-1!==e.name.toLowerCase().indexOf(t)?n[2].push(e):-1!==e.section.toLowerCase().indexOf(t)?n[3].push(e):-1!==e.writeup.toLowerCase().indexOf(t)&&n[4].push(e)}),e=(e=n[0].concat(n[1],n[2],n[3])).concat(n[4])},advancedSearch:function(e,t){for(var n in console.log(t),t){var r=t[n];["name","section","writeup"].includes(n)?o(e,n,r):"skill"===n?i(e,r):"rating"===n||("location"===n?s(e,r):"sort"===n||alert("Unable to search based on "+n))}return e}};var c=document.getElementById("advanced-search-modal");document.getElementById("advanced-search-modal-close").onclick=function(){c.style.display="none"};window.addEventListener("click",function(e){e.target===c&&(c.style.display="none")}),document.getElementById("advancedsearch").addEventListener("click",function(){c.style.display="block"})},function(e,t){e.exports={lambert:function(e,t,n,r){e=e*Math.PI/180,t=t*Math.PI/180,n=n*Math.PI/180,r=r*Math.PI/180;var o=Math.atan(.9966471893352525*Math.tan(e)),a=Math.atan(.9966471893352525*Math.tan(n)),i=Math.acos(Math.sin(o)*Math.sin(a)+Math.cos(o)*Math.cos(a)*Math.cos(r-t)),l=(o+a)/2,s=(a-o)/2;return 3963.1905919430524*(i-.0016764053323737402*((i-Math.sin(i))*(Math.pow(Math.sin(l),2)*Math.pow(Math.cos(s),2)/Math.pow(Math.cos(i/2),2))+(i+Math.sin(i))*(Math.pow(Math.cos(l),2)*Math.pow(Math.sin(s),2)/Math.pow(Math.sin(i/2),2))))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"loadUSGS",function(){return l});var r=n(2),o=n.n(r),a=n(8),i=n.n(a);self.usgsarray={};var l=function(){var e=i()(o.a.mark(function e(){var t,n,r,a,i,l,s,c,u,d,h,f,p,m,g,v,w,y;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],n=0;n<riverarray.length;n++)(r=riverarray[n].usgs)&&r.length>7&&r.length<16&&t.push(r);if(a="https://waterservices.usgs.gov/nwis/iv/?format=json&sites="+t.join(",")+"&startDT="+new Date(Date.now()-864e5).toISOString()+"&parameterCd=00060,00065,00010,00045&siteStatus=all",!window.fetch){e.next=12;break}return e.next=6,fetch(a);case 6:return l=e.sent,e.next=9,l.json();case 9:i=e.sent,e.next=17;break;case 12:return s=new XMLHttpRequest,e.next=15,new Promise(function(e,t){s.onload=function(t){e(t.target.response)},s.open("GET",a),s.send()});case 15:c=e.sent,i=JSON.parse(c);case 17:for(i.value.timeSeries.forEach(function(e){var t={};if(t.values=e.values[0].value,0!==t.values.length){t.units=e.variable.variableDescription;var n=e.sourceInfo.siteCode[0].value;if(!usgsarray[n]){var r={};r.name=e.sourceInfo.siteName,usgsarray[n]=r}var o=e.variable.variableCode[0].value;if("00010"===o&&"Temperature, water, degrees Celsius"===t.units){for(var a=0;a<t.values.length;a++)t.values[a].value=1.8*t.values[a].value+32;t.units="Temperature, water, degrees Fahrenheit"}usgsarray[n][o]=t}else console.log("Empty Array. Skipping")}),u=0;u<ItemHolder.length;u++)if(d=ItemHolder[u],h=usgsarray[d.usgs]){f=h["00060"],p=h["00065"],f&&(f=f.values),p&&(p=p.values),m=void 0,g=void 0,f&&(m=f[f.length-1].value),p&&(g=p[p.length-1].value),d.feet=g,d.cfs=m,m&&g?d.flow=m+"cfs "+g+"ft":m?d.flow=f[f.length-1].value+" cfs":g&&(d.flow=p[p.length-1].value+" ft"),v=document.getElementById(d.base+"1"),w=d.expanded,console.log(w),y=d.create(!0);try{v.parentNode.replaceChild(y,v),w&&(y.dispatchEvent(new Event("click")),-1===navigator.userAgent.toLowerCase().indexOf("google")&&y.dispatchEvent(new Event("click")))}catch(e){}}case 19:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},function(e,t){function n(){try{var e=document.getElementById("legend");e.getContext("2d").clearRect(0,0,e.width,e.height),e.style.backgroundColor=window.getComputedStyle(document.body).getPropertyValue("background-color");var t=parseFloat(window.getComputedStyle(document.getElementById("Rivers").firstChild).getPropertyValue("font-size"));(function(e,t){var n=e.getContext("2d"),r=window.darkMode?"30%":"65%",o=window.darkMode?"20%":"70%",a=window.darkMode?"25%":"75%";e.width=document.documentElement.clientWidth,e.height=t;var i=n.createLinearGradient(0,0,e.width,e.height),l="hsl(0,100%,"+r+")",s="hsl(240,100%,"+o+")";i.addColorStop(0,l),i.addColorStop(.08,l);for(var c=0;c<=240;c++)i.addColorStop(.08+c/240*(.92-.08),"hsl("+c+",100%,"+a+")");i.addColorStop(.92,s),i.addColorStop(1,s),n.fillStyle=i,n.fillRect(0,0,e.width,e.height)})(e,t>18?10+2*t:t>14.8?10+2*(t*=1.2):10+2*(t*=1.4)),function(e,t){var n=e.getContext("2d");n.fillStyle=window.darkMode?"white":"black";var r=t;n.font=t+"px Arial",n.textAlign="start",n.fillText("Too Low",0,r),n.textAlign="center",n.fillText("Low Flow",.28*e.width,r),n.fillText("Mid Flow",e.width/2,r),n.fillText("High Flow",.72*e.width,r),window.darkMode||(n.fillStyle="white"),n.textAlign="end",n.fillText("Too High",e.width,r,.2*e.width)}(e,t),function(e){var t=e.offsetTop;window.addEventListener("scroll",function(){window.pageYOffset>t?(e.style.position="fixed",e.style.top=0,document.body.style.paddingTop=e.height+"px"):(e.style.position="",e.style.top="",document.body.style.paddingTop=0)})}(e)}catch(e){console.error("Legend failed to draw. Logging error."),console.error(e)}}window.addEventListener("resize",n),window.addEventListener("orientationchange",n),n()}]);
//# sourceMappingURL=index.js.map