!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=69)}([function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(29)("wks"),o=r(15),i=r(0).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(5),o=r(47),i=r(24),u=Object.defineProperty;n.f=r(4)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){t.exports=!r(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(2);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n,r){var e=r(0),o=r(12),i=r(9),u=r(10),c=r(11),f=function(t,n,r){var a,s,l,p,v=t&f.F,y=t&f.G,h=t&f.S,d=t&f.P,g=t&f.B,b=y?e:h?e[n]||(e[n]={}):(e[n]||{}).prototype,m=y?o:o[n]||(o[n]={}),_=m.prototype||(m.prototype={});for(a in y&&(r=n),r)l=((s=!v&&b&&void 0!==b[a])?b:r)[a],p=g&&s?c(l,e):d&&"function"==typeof l?c(Function.call,l):l,b&&u(b,a,l,t&f.U),m[a]!=l&&i(m,a,p),d&&_[a]!=l&&(_[a]=l)};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(3),o=r(16);t.exports=r(4)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(0),o=r(9),i=r(8),u=r(15)("src"),c=Function.toString,f=(""+c).split("toString");r(12).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(a&&(i(r,u)||o(r,u,t[n]?""+t[n]:f.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,r){var e=r(23);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(64),o=r(27);t.exports=function(t){return e(o(t))}},function(t,n,r){"use strict";r.d(n,"b",function(){return o}),r.d(n,"c",function(){return i}),r.d(n,"a",function(){return u});r(54),r(57);function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(t){return"function"==typeof t}function i(t){return null!=t&&"function"==typeof t[Symbol.iterator]}var u=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,r,o;return n=t,o=[{key:"removeAllChildren",value:function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}}],(r=null)&&e(n.prototype,r),o&&e(n,o),t}()},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n){t.exports=!1},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(3).f,o=r(8),i=r(1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(52),o=r(34);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(5),o=r(71),i=r(34),u=r(33)("IE_PROTO"),c=function(){},f=function(){var t,n=r(39)("iframe"),e=i.length;for(n.style.display="none",r(61).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;e--;)delete f.prototype[i[e]];return f()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=f(),void 0===n?r:o(r,n)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(2);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(30),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){for(var e=r(31),o=r(21),i=r(10),u=r(0),c=r(9),f=r(17),a=r(1),s=a("iterator"),l=a("toStringTag"),p=f.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},y=o(v),h=0;h<y.length;h++){var d,g=y[h],b=v[g],m=u[g],_=m&&m.prototype;if(_&&(_[s]||c(_,s,p),_[l]||c(_,l,g),f[g]=p,b))for(d in e)_[d]||i(_,d,e[d],!0)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){"use strict";r.d(n,"b",function(){return i}),r.d(n,"c",function(){return u}),r.d(n,"a",function(){return c});r(44),r(26),r(31),r(36),r(65);var e=r(59);function o(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var i="d63e3d1d1622450aaf814fae749afce1",u=r.n(e).a,c=function(){function t(){var n,r,e;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r="_sourcesConfig",e=new Map([["1",{displayName:"Top headlines from BBC News",urlConfig:{endpoint:"top-headlines",params:{sources:"bbc-news"}},isPaginationHidden:!0}],["2",{displayName:"Articles about Bitcoin",urlConfig:{endpoint:"everything",params:{q:"bitcoin"}}}],["3",{displayName:"Top sports headlines",urlConfig:{endpoint:"top-headlines",params:{category:"sport"}}}]]),r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e}var n,r,e;return n=t,(r=[{key:"getSearchPanelOptions",value:function(){return Array.from(this._sourcesConfig,function(t){return{value:t[0],displayName:t[1].displayName,isPaginationHidden:t[1].isPaginationHidden}})}},{key:"getUrlConfig",value:function(t){return this._sourcesConfig.get(t).urlConfig}}])&&o(n.prototype,r),e&&o(n,e),t}()},function(t,n,r){var e=r(12),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){"use strict";var e=r(63),o=r(51),i=r(17),u=r(13);t.exports=r(32)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,e("keys"),e("values"),e("entries")},function(t,n,r){"use strict";var e=r(18),o=r(6),i=r(10),u=r(9),c=r(17),f=r(70),a=r(20),s=r(74),l=r(1)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,r,y,h,d,g){f(r,n,y);var b,m,_,x=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},S=n+" Iterator",w="values"==h,O=!1,j=t.prototype,P=j[l]||j["@@iterator"]||h&&j[h],E=P||x(h),k=h?w?x("entries"):E:void 0,C="Array"==n&&j.entries||P;if(C&&(_=s(C.call(new t)))!==Object.prototype&&_.next&&(a(_,S,!0),e||"function"==typeof _[l]||u(_,l,v)),w&&P&&"values"!==P.name&&(O=!0,E=function(){return P.call(this)}),e&&!g||!p&&!O&&j[l]||u(j,l,E),c[n]=E,c[S]=v,h)if(b={values:w?E:x("values"),keys:d?E:x("keys"),entries:k},g)for(m in b)m in j||i(j,m,b[m]);else o(o.P+o.F*(p||O),n,b);return b}},function(t,n,r){var e=r(29)("keys"),o=r(15);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(27);t.exports=function(t){return Object(e(t))}},function(t,n,r){"use strict";var e=r(76)(!0);r(32)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){var e=r(15)("meta"),o=r(2),i=r(8),u=r(3).f,c=0,f=Object.isExtensible||function(){return!0},a=!r(7)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!i(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!i(t,e)&&s(t),t}}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(2),o=r(0).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var e=r(11),o=r(48),i=r(49),u=r(5),c=r(25),f=r(50),a={},s={};(n=t.exports=function(t,n,r,l,p){var v,y,h,d,g=p?function(){return t}:f(t),b=e(r,l,n?2:1),m=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(v=c(t.length);v>m;m++)if((d=n?b(u(y=t[m])[0],y[1]):b(t[m]))===a||d===s)return d}else for(h=g.call(t);!(y=h.next()).done;)if((d=o(h,b,y.value,n))===a||d===s)return d}).BREAK=a,n.RETURN=s},function(t,n,r){var e=r(10);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},function(t,n,r){var e=r(1)("iterator"),o=!1;try{var i=[7][e]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i=[7],u=i[e]();u.next=function(){return{done:r=!0}},i[e]=function(){return u},t(i)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(11),o=r(6),i=r(35),u=r(48),c=r(49),f=r(25),a=r(75),s=r(50);o(o.S+o.F*!r(43)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,o,l,p=i(t),v="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,d=void 0!==h,g=0,b=s(p);if(d&&(h=e(h,y>2?arguments[2]:void 0,2)),null==b||v==Array&&c(b))for(r=new v(n=f(p.length));n>g;g++)a(r,g,d?h(p[g],g):p[g]);else for(l=b.call(p),r=new v;!(o=l.next()).done;g++)a(r,g,d?u(l,h,[o.value,g],!0):o.value);return r.length=g,r}})},function(t,n,r){var e=r(38),o=r(16),i=r(13),u=r(24),c=r(8),f=r(47),a=Object.getOwnPropertyDescriptor;n.f=r(4)?a:function(t,n){if(t=i(t),n=u(n,!0),f)try{return a(t,n)}catch(t){}if(c(t,n))return o(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(52),o=r(34).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){t.exports=!r(4)&&!r(7)(function(){return 7!=Object.defineProperty(r(39)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(5);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(17),o=r(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[o]===t)}},function(t,n,r){var e=r(60),o=r(1)("iterator"),i=r(17);t.exports=r(12).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[e(t)]}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){var e=r(8),o=r(13),i=r(72)(!1),u=r(33)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(2);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,r){r(55)("asyncIterator")},function(t,n,r){var e=r(0),o=r(12),i=r(18),u=r(56),c=r(3).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){n.f=r(1)},function(t,n,r){"use strict";var e=r(0),o=r(8),i=r(4),u=r(6),c=r(10),f=r(37).KEY,a=r(7),s=r(29),l=r(20),p=r(15),v=r(1),y=r(56),h=r(55),d=r(79),g=r(68),b=r(5),m=r(2),_=r(13),x=r(24),S=r(16),w=r(22),O=r(80),j=r(45),P=r(3),E=r(21),k=j.f,C=P.f,T=O.f,A=e.Symbol,L=e.JSON,M=L&&L.stringify,N=v("_hidden"),F=v("toPrimitive"),I={}.propertyIsEnumerable,D=s("symbol-registry"),G=s("symbols"),R=s("op-symbols"),H=Object.prototype,B="function"==typeof A,V=e.QObject,W=!V||!V.prototype||!V.prototype.findChild,z=i&&a(function(){return 7!=w(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=k(H,n);e&&delete H[n],C(t,n,r),e&&t!==H&&C(H,n,e)}:C,K=function(t){var n=G[t]=w(A.prototype);return n._k=t,n},U=B&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},q=function(t,n,r){return t===H&&q(R,n,r),b(t),n=x(n,!0),b(r),o(G,n)?(r.enumerable?(o(t,N)&&t[N][n]&&(t[N][n]=!1),r=w(r,{enumerable:S(0,!1)})):(o(t,N)||C(t,N,S(1,{})),t[N][n]=!0),z(t,n,r)):C(t,n,r)},J=function(t,n){b(t);for(var r,e=d(n=_(n)),o=0,i=e.length;i>o;)q(t,r=e[o++],n[r]);return t},Y=function(t){var n=I.call(this,t=x(t,!0));return!(this===H&&o(G,t)&&!o(R,t))&&(!(n||!o(this,t)||!o(G,t)||o(this,N)&&this[N][t])||n)},Q=function(t,n){if(t=_(t),n=x(n,!0),t!==H||!o(G,n)||o(R,n)){var r=k(t,n);return!r||!o(G,n)||o(t,N)&&t[N][n]||(r.enumerable=!0),r}},X=function(t){for(var n,r=T(_(t)),e=[],i=0;r.length>i;)o(G,n=r[i++])||n==N||n==f||e.push(n);return e},Z=function(t){for(var n,r=t===H,e=T(r?R:_(t)),i=[],u=0;e.length>u;)!o(G,n=e[u++])||r&&!o(H,n)||i.push(G[n]);return i};B||(c((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(r){this===H&&n.call(R,r),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),z(this,t,S(1,r))};return i&&W&&z(H,t,{configurable:!0,set:n}),K(t)}).prototype,"toString",function(){return this._k}),j.f=Q,P.f=q,r(46).f=O.f=X,r(38).f=Y,r(58).f=Z,i&&!r(18)&&c(H,"propertyIsEnumerable",Y,!0),y.f=function(t){return K(v(t))}),u(u.G+u.W+u.F*!B,{Symbol:A});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)v($[tt++]);for(var nt=E(v.store),rt=0;nt.length>rt;)h(nt[rt++]);u(u.S+u.F*!B,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=A(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var n in D)if(D[n]===t)return n},useSetter:function(){W=!0},useSimple:function(){W=!1}}),u(u.S+u.F*!B,"Object",{create:function(t,n){return void 0===n?w(t):J(w(t),n)},defineProperty:q,defineProperties:J,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),L&&u(u.S+u.F*(!B||a(function(){var t=A();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))})),"JSON",{stringify:function(t){for(var n,r,e=[t],o=1;arguments.length>o;)e.push(arguments[o++]);if(r=n=e[1],(m(n)||void 0!==t)&&!U(t))return g(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!U(n))return n}),e[1]=n,M.apply(L,e)}}),A.prototype[F]||r(9)(A.prototype,F,A.prototype.valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){t.exports=r.p+"d71b28089d8fad554dc1f7a92446bf45.png"},function(t,n,r){var e=r(19),o=r(1)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,r){var e=r(0).document;t.exports=e&&e.documentElement},function(t,n,r){"use strict";var e=r(0),o=r(3),i=r(4),u=r(1)("species");t.exports=function(t){var n=e[t];i&&n&&!n[u]&&o.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,r){var e=r(1)("unscopables"),o=Array.prototype;null==o[e]&&r(9)(o,e,{}),t.exports=function(t){o[e][t]=!0}},function(t,n,r){var e=r(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){"use strict";var e=r(77),o=r(53);t.exports=r(78)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var n=e.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return e.def(o(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){var e=r(2),o=r(67).set;t.exports=function(t,n,r){var i,u=n.constructor;return u!==r&&"function"==typeof u&&(i=u.prototype)!==r.prototype&&e(i)&&o&&o(t,i),t}},function(t,n,r){var e=r(2),o=r(5),i=function(t,n){if(o(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=r(11)(Function.call,r(45).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,r){return i(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:i}},function(t,n,r){var e=r(19);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){"use strict";r.r(n),r.d(n,"NewsList",function(){return u});r(81),r(26),r(36),r(44);var e=r(14),o=r(28);function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var u=function(){function t(n){var r,e,o;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),o=void 0,(e="_newsListContainer")in(r=this)?Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[e]=o,this._newsListContainer=n,this.text="Click 'Go' to get some news!"}var n,r,u;return n=t,(r=[{key:"clear",value:function(){e.a.removeAllChildren(this._newsListContainer)}},{key:"add",value:function(t){var n=this;Object(e.c)(t)&&(this._newsListContainer.innerHTML=Array.from(t,function(t){return n._createCardEl(t)}).join("")),Array.from(document.querySelectorAll(".card-image img")).forEach(function(t){return t.onload=function(){return t.parentElement.classList.remove("loading")}})}},{key:"_createCardEl",value:function(t){return'\n      <div class="card">\n        <a class="card-link" href="'.concat(t.url,'" target="_blank">\n          <div class="card-image loading">\n            <img src="').concat(t.urlToImage||o.c,'" alt="').concat(t.title,'">\n          </div>\n          <div class="card-text">\n            <h3 class="card-title" title="').concat(t.title,'">').concat(t.title,'</h3>\n            <p class="card-description" title="').concat(t.description||"",'">').concat(t.description||"",'</p>\n            <div class="card-footer">\n              <p class="card-date">\n                <time title="').concat(new Date(t.publishedAt).toLocaleString(),'">').concat(new Date(t.publishedAt).toLocaleDateString(),'</time>\n              </p>\n              <p class="card-source" title="').concat(t.source.name,'">').concat(t.source.name,"</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    ")}},{key:"text",set:function(t){this.clear(),this._newsListContainer.append(t)}},{key:"articles",set:function(t){this.clear(),this.add(t)}}])&&i(n.prototype,r),u&&i(n,u),t}()},function(t,n,r){"use strict";var e=r(22),o=r(16),i=r(20),u={};r(9)(u,r(1)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:o(1,r)}),i(t,n+" Iterator")}},function(t,n,r){var e=r(3),o=r(5),i=r(21);t.exports=r(4)?Object.defineProperties:function(t,n){o(t);for(var r,u=i(n),c=u.length,f=0;c>f;)e.f(t,r=u[f++],n[r]);return t}},function(t,n,r){var e=r(13),o=r(25),i=r(73);t.exports=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},function(t,n,r){var e=r(30),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},function(t,n,r){var e=r(8),o=r(35),i=r(33)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){"use strict";var e=r(3),o=r(16);t.exports=function(t,n,r){n in t?e.f(t,n,o(0,r)):t[n]=r}},function(t,n,r){var e=r(30),o=r(27);t.exports=function(t){return function(n,r){var i,u,c=String(o(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}}},function(t,n,r){"use strict";var e=r(3).f,o=r(22),i=r(42),u=r(11),c=r(40),f=r(41),a=r(32),s=r(51),l=r(62),p=r(4),v=r(37).fastKey,y=r(53),h=p?"_s":"size",d=function(t,n){var r,e=v(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,r,a){var s=t(function(t,e){c(t,s,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[h]=0,null!=e&&f(e,r,t[a],t)});return i(s.prototype,{clear:function(){for(var t=y(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var r=y(this,n),e=d(r,t);if(e){var o=e.n,i=e.p;delete r._i[e.i],e.r=!0,i&&(i.n=o),o&&(o.p=i),r._f==e&&(r._f=o),r._l==e&&(r._l=i),r[h]--}return!!e},forEach:function(t){y(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!d(y(this,n),t)}}),p&&e(s.prototype,"size",{get:function(){return y(this,n)[h]}}),s},def:function(t,n,r){var e,o,i=d(t,n);return i?i.v=r:(t._l=i={i:o=v(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=i),e&&(e.n=i),t[h]++,"F"!==o&&(t._i[o]=i)),t},getEntry:d,setStrong:function(t,n,r){a(t,n,function(t,r){this._t=y(t,n),this._k=r,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))},r?"entries":"values",!r,!0),l(n)}}},function(t,n,r){"use strict";var e=r(0),o=r(6),i=r(10),u=r(42),c=r(37),f=r(41),a=r(40),s=r(2),l=r(7),p=r(43),v=r(20),y=r(66);t.exports=function(t,n,r,h,d,g){var b=e[t],m=b,_=d?"set":"add",x=m&&m.prototype,S={},w=function(t){var n=x[t];i(x,t,"delete"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof m&&(g||x.forEach&&!l(function(){(new m).entries().next()}))){var O=new m,j=O[_](g?{}:-0,1)!=O,P=l(function(){O.has(1)}),E=p(function(t){new m(t)}),k=!g&&l(function(){for(var t=new m,n=5;n--;)t[_](n,n);return!t.has(-0)});E||((m=n(function(n,r){a(n,m,t);var e=y(new b,n,m);return null!=r&&f(r,d,e[_],e),e})).prototype=x,x.constructor=m),(P||k)&&(w("delete"),w("has"),d&&w("get")),(k||j)&&w(_),g&&x.clear&&delete x.clear}else m=h.getConstructor(n,t,d,_),u(m.prototype,r),c.NEED=!0;return v(m,t),S[t]=m,o(o.G+o.W+o.F*(m!=b),S),g||h.setStrong(m,t,d),m}},function(t,n,r){var e=r(21),o=r(58),i=r(38);t.exports=function(t){var n=e(t),r=o.f;if(r)for(var u,c=r(t),f=i.f,a=0;c.length>a;)f.call(t,u=c[a++])&&n.push(u);return n}},function(t,n,r){var e=r(13),o=r(46).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},function(t,n,r){var e=r(3).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||r(4)&&e(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})}]);