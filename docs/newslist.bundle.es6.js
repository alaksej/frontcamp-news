(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{6:function(e,t,n){},7:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var i=n(0),a=n(1);n(6);class r{constructor(e){var t,n,i;i=void 0,(n="_newsListContainer")in(t=this)?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,this._newsListContainer=e,this.text="Click 'Go' to get some news!"}set text(e){this.clear(),this._newsListContainer.append(e)}set articles(e){this.clear(),this.add(e)}clear(){i.a.removeAllChildren(this._newsListContainer)}add(e){Object(i.c)(e)&&(this._newsListContainer.innerHTML=Array.from(e,e=>this._createCardEl(e)).join("")),Array.from(document.querySelectorAll(".card-image img")).forEach(e=>e.onload=(()=>e.parentElement.classList.remove("loading")))}_createCardEl(e){return`\n      <div class="card">\n        <a class="card-link" href="${e.url}" target="_blank">\n          <div class="card-image loading">\n            <img src="${e.urlToImage||a.c}" alt="${e.title}">\n          </div>\n          <div class="card-text">\n            <h3 class="card-title" title="${e.title}">${e.title}</h3>\n            <p class="card-description" title="${e.description||""}">${e.description||""}</p>\n            <div class="card-footer">\n              <p class="card-date">\n                <time title="${new Date(e.publishedAt).toLocaleString()}">${new Date(e.publishedAt).toLocaleDateString()}</time>\n              </p>\n              <p class="card-source" title="${e.source.name}">${e.source.name}</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    `}}}}]);