!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}([function(e,n){function t(n,o){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,o)}e.exports=t},function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},,,function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},function(e,n,t){var o=t(10),r=t(11);e.exports=function(e,n){return!n||"object"!==o(n)&&"function"!=typeof n?r(e):n}},function(e,n,t){var o=t(0);e.exports=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&o(e,n)}},function(e,n,t){var o=t(1),r=t(0),i=t(12),l=t(13);function c(n){var t="function"==typeof Map?new Map:void 0;return e.exports=c=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return l(e,arguments,o(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r(n,e)},c(n)}e.exports=c},,function(e,n,t){"use strict";t.r(n);var o=t(4),r=t.n(o),i=t(5),l=t.n(i),c=t(1),s=t.n(c),a=t(6),u=t.n(a),d=t(7),f=t.n(d),p=document.styleSheets[0];if(!p){console.warn("No stylesheet available. There must be an existing stylesheet in order for allPages.js to function properly without inline style allowed or without document.body.");var m=document.createElement("style");document.body.appendChild(m),p=document.styleSheets[0]}try{if(p.cssRules[p.cssRules.length-1]instanceof CSSMediaRule){if(window.darkMode=localStorage.getItem("prefersDarkMode"),"null"===window.darkMode&&(window.darkMode=null),"false"===window.darkMode&&(window.darkMode=!1),"true"===window.darkMode&&(window.darkMode=!0),null===window.darkMode&&(window.darkMode=window.matchMedia("(prefers-color-scheme: dark)").matches),!0===window.darkMode&&!1===window.matchMedia("(prefers-color-scheme: dark)").matches)for(var h=p.cssRules[p.cssRules.length-1].cssText,y=(h=h.slice(h.indexOf("{")+1,-1)).split("\n"),v=0;v<y.length;v++){var b=y[v];""!==b.trim()&&p.insertRule(b,p.cssRules.length)}!1===window.darkMode&&!0===window.matchMedia("(prefers-color-scheme: dark)").matches&&p.removeRule(p.cssRules.length-1),window.darkMode&&(p.insertRule("a:link {color: #3333FF;}",p.cssRules.length),p.insertRule("a:visited {color: purple;}",p.cssRules.length),p.insertRule("a:hover {color: green;}",p.cssRules.length),p.insertRule("a:active {color: red;}",p.cssRules.length))}}catch(e){console.error(e)}p.insertRule("html body {font-family: Arial, Helvetica, sans-serif}",p.cssRules.length);var w=window.location.href;w=w.slice(0,w.lastIndexOf("/")+1);var g=document.createElement("div");g.className="topnav";var x=[],R=document.createElement("a");R.href=w,R.innerHTML="River Info",x.push(R);var k=document.createElement("a");k.href=w+"about.html",k.innerHTML="About",x.push(k);var M=document.createElement("a");M.href=w+"FAQ.html",M.innerHTML="FAQ",x.push(M);var S=document.createElement("a");S.href=w+"settings.html",S.innerHTML="Settings",x.push(S);var O=document.createElement("a");O.href=w+"clubs.html",O.innerHTML="Clubs",x.push(O);var E=window.location.href.slice(w.length);-1!==E.indexOf("#")&&(E=E.slice(0,E.indexOf("#")));for(var T=0;T<x.length;T++){var j=x[T];j.href.slice(w.length)===E&&(j.className="topnavcurrent"),g.appendChild(j)}document.body.insertBefore(g,document.body.firstChild),p.insertRule("\n.topnav {\n    overflow: hidden;\n    background-color: #24b9cc;\n    margin:0px;\n}\n",p.cssRules.length),p.insertRule("\n.topnav a {\n    float: left;\n    display: block;\n    color:black;\n    text-align:center;\n    padding: 12px 13px;\n    text-decoration: none; /*Avoid the links being underlined*/\n    font-size: 17px;\n}\n",p.cssRules.length),p.insertRule("\n@media screen and (max-width: 386px) {\n    .topnav a {\n        padding: 10px 11px;\n        font-size: 4.3vw;\n    }\n}\n",p.cssRules.length),p.insertRule(".topnav a:hover {background-color: #359daa}",p.cssRules.length),p.insertRule(".topnavcurrent {background-color: #25d1a7}",p.cssRules.length),p.insertRule("\n.modal {\ndisplay: none; \nposition:fixed; \nz-index:1; \npadding-top: 5%;\nleft:0;\ntop:0;\nwidth:100%;\nheight: 100%;\noverflow:auto;\nbackground-color: rgba(0,0,0,0.4);\n}",p.cssRules.length),p.insertRule("\n.modal-content {\ncolor:black;\nbackground-color: #fefefe;\nmargin: auto;\npadding: 20px;\nborder: 1px solid #888;\nwidth: 90%;\n}",p.cssRules.length),p.insertRule("\n.modal-close {\ncolor: #aaaaaa;\nfloat: right;\nfont-size: 28px;\nfont-weight: bold;\n}",p.cssRules.length),p.insertRule("\n.modal-close:hover, .modal-close:focus {\ncolor: #000;\ntext-decoration: none;\ncursor: pointer;\n}",p.cssRules.length),window.darkMode&&p.insertRule("\t\n.modal-content {\nbackground-color:black;\ncolor:#cfcfcf;\n}",p.cssRules.length);var _=document.createElement("div");_.className="modal";var L=document.createElement("div");L.className="modal-content";var P=document.createElement("span");P.className="modal-close",P.innerHTML="×";var C=document.createElement("p");_.appendChild(L),L.appendChild(P),L.appendChild(C),document.body.appendChild(_),P.onclick=function(){_.style.display="none"},window.addEventListener("click",function(e){e.target===_&&(_.style.display="none")});var H=function(e){function n(){var e;return r()(this,n),(e=l()(this,s()(n).call(this))).style.cursor="pointer",e.style.color="rgb(51, 51, 255)",e.style.textDecoration="underline",e.addEventListener("click",function(){var e="This overview ("+this.innerHTML+") is not available. This is likely due to a programming or data entry error";window.overviews&&window.overviews[this.innerText.trim()]&&(e=window.overviews[this.innerText.trim()]),C.innerHTML=e,_.style.display="block"}),e}return u()(n,e),n}(f()(HTMLElement));try{customElements.define("river-overview",H)}catch(e){console.error(e),navigator.userAgent.includes("Firefox")&&setTimeout(function(){alert("In order to view area overviews, you will need a browser that supports DOM customElements. You may be able to enable customElements in about:config")},4e3)}},function(e,n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(n){return"function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?e.exports=o=function(e){return t(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},o(n)}e.exports=o},function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,n){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},function(e,n,t){var o=t(0);function r(n,t,i){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=r=function(e,n,t){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(e,r));return t&&o(i,t.prototype),i}:e.exports=r=Reflect.construct,r.apply(null,arguments)}e.exports=r}]);
//# sourceMappingURL=allPages.js.map