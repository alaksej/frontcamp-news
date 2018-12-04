(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,r){"use strict";r.d(t,"b",function(){return s}),r.d(t,"c",function(){return i}),r.d(t,"a",function(){return o});var n=r(3);const s="d63e3d1d1622450aaf814fae749afce1",i=r.n(n).a;class o{constructor(){var e,t,r;return e=this,t="_sourcesConfig",r=new Map([["1",{displayName:"Top headlines from BBC News",urlConfig:{endpoint:"top-headlines",params:{sources:"bbc-news"}},isPaginationHidden:!0}],["2",{displayName:"Articles about Bitcoin",urlConfig:{endpoint:"everything",params:{q:"bitcoin"}}}],["3",{displayName:"Top sports headlines",urlConfig:{endpoint:"top-headlines",params:{category:"sport"}}}]]),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,o.instance||(o.instance=this)}getSearchPanelOptions(){return Array.from(this._sourcesConfig,e=>({sourceId:e[0],displayName:e[1].displayName}))}getUrlConfig(e){return this._sourcesConfig.get(e).urlConfig}getIsPaginationHidden(e){return this._sourcesConfig.get(e).isPaginationHidden}}},function(e,t,r){"use strict";function n(e){return"function"==typeof e}function s(e){return null!=e&&"function"==typeof e[Symbol.iterator]}r.d(t,"b",function(){return n}),r.d(t,"c",function(){return s}),r.d(t,"a",function(){return i});class i{static removeAllChildren(e){for(;e.firstChild;)e.removeChild(e.firstChild)}}},function(e,t){e.exports='<section class="search-panel">\r\n  <form onsubmit="event.preventDefault()">\r\n    <div class="form-group row" title="Select the news source">\r\n      <label class="col-1" for="source">Channel:</label>\r\n      <div class="col-5">\r\n        <select class="form-control" name="source" id="source"> </select>\r\n      </div>\r\n    </div>\r\n    <div id="pageContainer" class="form-group row" title="Enter the page number" hidden>\r\n      <label class="col-1" for="page">Page:</label>\r\n      <div class="col-5">\r\n        <input class="form-control" type="number" name="page" id="page" placeholder="Enter the page number">\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n      <div class="col-6 align-right">\r\n        <button class="btn btn-primary" id="submit" type="submit" title="Begin search" disabled>Go</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</section>'},function(e,t,r){e.exports=r.p+"d71b28089d8fad554dc1f7a92446bf45.png"},function(e,t){e.exports='<div id="mainContainer" class="container">\r\n  <header class="header">\r\n    <div class="content-wrapper">\r\n      <h1>Worldwide News</h1>\r\n    </div>\r\n  </header>\r\n  <main>\r\n    <div class="content-wrapper">\r\n      <h2 class="welcome-title">Welcome to Worldwide News!</h2>\r\n      <app-search-panel></app-search-panel>\r\n      <app-news-list></app-news-list>\r\n    </div>\r\n  </main>\r\n\r\n  <footer class="footer">\r\n    <div class="content-wrapper">\r\n      <a href="https://newsapi.org" class="attribution">Powered by News API</a>\r\n    </div>\r\n  </footer>\r\n\r\n  <div class="popup-container"></div>\r\n</div>'},function(e){e.exports={greeting:"Hi there",name:"Alex",passport:1234567890,addresses:[{city:"Minsk",street:"Tirazhnaya",building:150},{city:"Gomel",building:3,street:"Tranzitnaya"}]}},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(1);function s(e){switch(e){case"NewsList":return r.e(2).then(r.bind(null,11)).then(e=>{return e.default});case"ErrorPopup":return r.e(0).then(r.bind(null,12)).then(e=>{return e.default})}}async function i(e){(await s("ErrorPopup")).getInstance().showError(e)}var o=r(2),a=r.n(o),c=r(0);class l{constructor(e,t){return new Proxy(e,{get(e,r,n){const s=e[r];return"function"!=typeof s?s:function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t.log(`${r} ${JSON.stringify(i)}`),s.apply(e,i)}}})}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class h{get urlWithParams(){if(!this.queryParams)return this.url;const e=Object.keys(this.queryParams).map(e=>`${e}=${this.queryParams[e]}`).join("&");return`${this.url}?${e}`}constructor(e){u(this,"method","GET"),u(this,"url",void 0),u(this,"queryParams",void 0),u(this,"headers",void 0),u(this,"body",void 0),Object.assign(this,e)}}class d{create(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=r.queryParams,s=r.body,i=r.headers;switch(e){case"GET":case"DELETE":return new h({method:e,url:t,queryParams:n,headers:i});case"POST":case"PUT":return new h({method:e,url:t,body:s,queryParams:n,headers:i});default:throw new Error(`The '${e}' http method is not supported.`)}}}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class b{constructor(){p(this,"_httpRequestFactory",new d)}get(e,t){return this._request("GET",e,t)}post(e,t){return this._request("POST",e,t)}put(e,t){return this._request("PUT",e,t)}delete(e,t){return this._request("DELETE",e,t)}_request(e,t,r){const n=this._httpRequestFactory.create(e,t,r);return fetch(n.urlWithParams,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){p(e,t,r[t])})}return e}({},n))}}class g{log(e){console.log(e)}}const f="https://newsapi.org",m="v2";class w{constructor(e){var t,r,n;if(t=this,r="_httpClient",n=new l(new b,new g),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,!e)throw new Error("No API key specified");this._headers={"x-api-key":e}}get(e,t){return this._getDataFromWeb(this._buildUrl(e),t)}_buildUrl(e){return`${f}/${m}/${e}`}async _getDataFromWeb(e,t){let r;try{r=await this._httpClient.get(e,{headers:this._headers,queryParams:t})}catch(e){return i("Network error."),void console.error(e)}const n=await r.json();if("error"===n.status){throw new _(n)}return n}}class _ extends Error{constructor(e){super(),this.name=`NewsAPIError: ${e.code}`,this.message=e.message}}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class v{constructor(e){y(this,"_sourcesConfig",new c.a),y(this,"_newsApi",new w(c.b)),this._model=e}onSourceChange(e){this._model.patch({searchPanel:{sourceId:e,isPaginationHidden:this._sourcesConfig.getIsPaginationHidden(e)}})}onPageChange(e){this._model.patch({searchPanel:{page:e}})}onSubmitClick(){const e=this._sourcesConfig.getUrlConfig(this._model.value.searchPanel.sourceId),t=e.endpoint,r=e.params;this.loadNews(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){y(e,t,r[t])})}return e}({},r,{page:this._model.value.searchPanel.page}))}async loadNews(e,t){this._model.patch({isLoading:!0});try{const r=await this._newsApi.get(e,t);r&&r.articles&&r.articles.length?this._model.patch({newsList:{articles:r.articles,showText:!1}}):this._model.patch({newsList:{articles:[],showText:!0,text:"Nothing's found. Try changing the channel or page number."}})}catch(e){console.log(e);const t="Oops, something went wrong. Maybe the page number is too big?";this._model.patch({newsList:{articles:[],showText:!0,text:t}}),handleError(t)}finally{this._model.patch({isLoading:!1})}}}class P{constructor(e,t){t.innerHTML=a.a,this._controller=new v(e),this._pageEl=t.querySelector("#page"),this._pageElContainer=t.querySelector("#pageContainer"),this._pageEl.addEventListener("change",()=>this._controller.onPageChange(this.page)),this._sourceEl=t.querySelector("#source"),this._initSourceOptions(this._sourceEl,(new c.a).getSearchPanelOptions()),this._sourceEl.addEventListener("change",()=>this._controller.onSourceChange(this._sourceEl.value)),this._submitButton=t.querySelector("#submit"),this._submitButton.addEventListener("click",()=>this._controller.onSubmitClick()),this.update(e.value),e.change.subscribe(e=>this.update(e))}update(e){this._pageEl.value=e.searchPanel.page,this._sourceEl.value=e.searchPanel.sourceId,this._setPageVisibility(e.searchPanel.isPaginationHidden),this._setButtonEnabledState(!e.isLoading)}get page(){const e=(this._isPaginationHidden,this._pageEl&&+this._pageEl.value);if(!Number.isInteger(e)||e<1){const e="The page must be a positive integer number";throw i(e),new TypeError(e)}return e}_initSourceOptions(e,t){e.innerHTML=t.reduce((e,t)=>{let r=t.displayName;return e+`<option value="${t.sourceId}">${r}</option>`},"")}_setPageVisibility(e){e?this._pageElContainer.setAttribute("hidden",""):this._pageElContainer.removeAttribute("hidden")}_setButtonEnabledState(e){e?this._submitButton.removeAttribute("disabled"):this._submitButton.setAttribute("disabled","")}}var E,O,C;C="app-search-panel",(O="selector")in(E=P)?Object.defineProperty(E,O,{value:C,enumerable:!0,configurable:!0,writable:!0}):E[O]=C;var j=r(4),S=r.n(j);class L{constructor(){var e,t,r;r=[],(t="_subscribers")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}emit(e){this._subscribers.forEach(t=>t(e))}subscribe(e){if(!Object(n.b)(e))throw new Error("Only functions are allowed as subscribers.");const t=this._subscribers.length;return this._subscribers=[...this._subscribers,e],new T(()=>this._subscribers=this._subscribers.filter((e,r)=>r!==t))}}class T{constructor(e){this._unsubscribeFn=e}unsubscribe(){Object(n.b)(this._unsubscribeFn)&&this._unsubscribeFn()}}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){N(e,t,r[t])})}return e}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class x{constructor(){N(this,"change",new L),N(this,"_value",{searchPanel:{sourceId:"1",page:1,isPaginationHidden:!0},isLoading:!1,newsList:{articles:[],showText:!0,text:""}})}get value(){return this._value}patch(e){const t=q({},this._value.searchPanel,e.searchPanel),r=q({},this._value.newsList,e.newsList);this._value=q({},this._value,e,{searchPanel:t,newsList:r}),this.change.emit(this._value)}}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class k{constructor(){A(this,"selector","app-root"),A(this,"_model",new x),this._hostEl=document.querySelector(this.selector),this.render(this._hostEl),this._searchPanel=new P(this._model,this._hostEl.querySelector(P.selector)),this._subscription=this._model.change.subscribe(e=>{!this._newsList&&e.isLoading&&s("NewsList").then(e=>{this._newsList=new e(this._model,this._hostEl.querySelector(e.selector)),this._subscription.unsubscribe()})})}render(e){e.innerHTML=S.a}}r(6);var I=r(5);console.log({json:I}),document.addEventListener("DOMContentLoaded",()=>new k)}],[[7,3]]]);