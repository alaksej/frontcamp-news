(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{114:function(n,t,e){var a=e(4).f,i=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in i||e(5)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(n){return""}}})},115:function(n,t,e){},116:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return r});e(114),e(24),e(30),e(50);var a=e(23),i=e(49);e(115);function c(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var r=function(){function n(t){var e,a,i;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),i=void 0,(a="_newsListContainer")in(e=this)?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,this._newsListContainer=t,this.text="Click 'Go' to get some news!"}var t,e,r;return t=n,(e=[{key:"clear",value:function(){a.a.removeAllChildren(this._newsListContainer)}},{key:"add",value:function(n){var t=this;Object(a.c)(n)&&(this._newsListContainer.innerHTML=Array.from(n,function(n){return t._createCardEl(n)}).join("")),Array.from(document.querySelectorAll(".card-image img")).forEach(function(n){return n.onload=function(){return n.parentElement.classList.remove("loading")}})}},{key:"_createCardEl",value:function(n){return'\n      <div class="card">\n        <a class="card-link" href="'.concat(n.url,'" target="_blank">\n          <div class="card-image loading">\n            <img src="').concat(n.urlToImage||i.c,'" alt="').concat(n.title,'">\n          </div>\n          <div class="card-text">\n            <h3 class="card-title" title="').concat(n.title,'">').concat(n.title,'</h3>\n            <p class="card-description" title="').concat(n.description||"",'">').concat(n.description||"",'</p>\n            <div class="card-footer">\n              <p class="card-date">\n                <time title="').concat(new Date(n.publishedAt).toLocaleString(),'">').concat(new Date(n.publishedAt).toLocaleDateString(),'</time>\n              </p>\n              <p class="card-source" title="').concat(n.source.name,'">').concat(n.source.name,"</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    ")}},{key:"text",set:function(n){this.clear(),this._newsListContainer.append(n)}},{key:"articles",set:function(n){this.clear(),this.add(n)}}])&&c(t.prototype,e),r&&c(t,r),n}()}}]);