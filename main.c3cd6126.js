parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".append-row"),l=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),n=document.querySelector(".remove-column"),t=document.querySelector(".field"),o=10,c=2;function s(){if(t.rows.length<o){for(var e=t.insertRow(),l=0;l<t.rows[0].cells.length;l++)e.insertCell();w()}}function d(){t.rows.length>c&&(t.deleteRow(-1),w())}function i(){if(t.rows[0].cells.length<o){for(var e=0;e<t.rows.length;e++)t.rows[e].insertCell();w()}}function u(){if(t.rows[0].cells.length>c){for(var e=0;e<t.rows.length;e++)t.rows[e].deleteCell(-1);w()}}function w(){e.disabled=t.rows.length>=o,l.disabled=t.rows.length<=c,r.disabled=t.rows[0].cells.length>=o,n.disabled=t.rows[0].cells.length<=c}e.addEventListener("click",s),l.addEventListener("click",d),r.addEventListener("click",i),n.addEventListener("click",u);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c3cd6126.js.map