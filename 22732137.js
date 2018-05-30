/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 * V 1.9.3
 */
!function(e,t,n){typeof module!="undefined"&&module.exports?module.exports=n():typeof define=="function"&&define.amd?define(t,n):e[t]=n()}(this,"bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}function N(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return undefined}}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=/nexus\s*[0-6]\s*/i.test(t),a=!u&&/nexus\s*[0-9]+/i.test(t),f=/CrOS/.test(t),l=/silk/i.test(t),c=/sailfish/i.test(t),h=/tizen/i.test(t),p=/(web|hpw)os/i.test(t),d=/windows phone/i.test(t),v=/SamsungBrowser/i.test(t),m=!d&&/windows/i.test(t),g=!i&&!l&&/macintosh/i.test(t),y=!o&&!c&&!h&&!p&&/linux/i.test(t),b=r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),w=n(/version\/(\d+(\.\d+)?)/i),E=/tablet/i.test(t)&&!/tablet pc/i.test(t),S=!E&&/[^-]mobi/i.test(t),x=/xbox/i.test(t),T;/opera/i.test(t)?T={name:"Opera",opera:e,version:w||n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(t)?T={name:"Opera",opera:e,version:n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||w}:/SamsungBrowser/i.test(t)?T={name:"Samsung Internet for Android",samsungBrowser:e,version:w||n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(t)?T={name:"Opera Coast",coast:e,version:w||n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?T={name:"Yandex Browser",yandexbrowser:e,version:w||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(t)?T={name:"UC Browser",ucbrowser:e,version:n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(t)?T={name:"Maxthon",maxthon:e,version:n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(t)?T={name:"Epiphany",epiphany:e,version:n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(t)?T={name:"Puffin",puffin:e,version:n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(t)?T={name:"Sleipnir",sleipnir:e,version:n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(t)?T={name:"K-Meleon",kMeleon:e,version:n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:d?(T={name:"Windows Phone",osname:"Windows Phone",windowsphone:e},b?(T.msedge=e,T.version=b):(T.msie=e,T.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?T={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:f?T={name:"Chrome",osname:"Chrome OS",chromeos:e,chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(t)?T={name:"Microsoft Edge",msedge:e,version:b}:/vivaldi/i.test(t)?T={name:"Vivaldi",vivaldi:e,version:n(/vivaldi\/(\d+(\.\d+)?)/i)||w}:c?T={name:"Sailfish",osname:"Sailfish OS",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?T={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(t)?(T={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(T.firefoxos=e,T.osname="Firefox OS")):l?T={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(t)?T={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(t)?T={name:"SlimerJS",slimer:e,version:n(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?T={name:"BlackBerry",osname:"BlackBerry OS",blackberry:e,version:w||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:p?(T={name:"WebOS",osname:"WebOS",webos:e,version:w||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(T.touchpad=e)):/bada/i.test(t)?T={name:"Bada",osname:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:h?T={name:"Tizen",osname:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||w}:/qupzilla/i.test(t)?T={name:"QupZilla",qupzilla:e,version:n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||w}:/chromium/i.test(t)?T={name:"Chromium",chromium:e,version:n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||w}:/chrome|crios|crmo/i.test(t)?T={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:o?T={name:"Android",version:w}:/safari|applewebkit/i.test(t)?(T={name:"Safari",safari:e},w&&(T.version=w)):i?(T={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},w&&(T.version=w)):/googlebot/i.test(t)?T={name:"Googlebot",googlebot:e,version:n(/googlebot\/(\d+(\.\d+))/i)||w}:T={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!T.msedge&&/(apple)?webkit/i.test(t)?(/(apple)?webkit\/537\.36/i.test(t)?(T.name=T.name||"Blink",T.blink=e):(T.name=T.name||"Webkit",T.webkit=e),!T.version&&w&&(T.version=w)):!T.opera&&/gecko\//i.test(t)&&(T.name=T.name||"Gecko",T.gecko=e,T.version=T.version||n(/gecko\/(\d+(\.\d+)?)/i)),!T.windowsphone&&(o||T.silk)?(T.android=e,T.osname="Android"):!T.windowsphone&&i?(T[i]=e,T.ios=e,T.osname="iOS"):g?(T.mac=e,T.osname="macOS"):x?(T.xbox=e,T.osname="Xbox"):m?(T.windows=e,T.osname="Windows"):y&&(T.linux=e,T.osname="Linux");var C="";T.windows?C=N(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)):T.windowsphone?C=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):T.mac?(C=n(/Mac OS X (\d+([_\.\s]\d+)*)/i),C=C.replace(/[_\s]/g,".")):i?(C=n(/os (\d+([_\s]\d+)*) like mac os x/i),C=C.replace(/[_\s]/g,".")):o?C=n(/android[ \/-](\d+(\.\d+)*)/i):T.webos?C=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):T.blackberry?C=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):T.bada?C=n(/bada\/(\d+(\.\d+)*)/i):T.tizen&&(C=n(/tizen[\/\s](\d+(\.\d+)*)/i)),C&&(T.osversion=C);var k=!T.windows&&C.split(".")[0];if(E||a||i=="ipad"||o&&(k==3||k>=4&&!S)||T.silk)T.tablet=e;else if(S||i=="iphone"||i=="ipod"||o||u||T.blackberry||T.webos||T.bada)T.mobile=e;return T.msedge||T.msie&&T.version>=10||T.yandexbrowser&&T.version>=15||T.vivaldi&&T.version>=1||T.chrome&&T.version>=20||T.samsungBrowser&&T.version>=4||T.firefox&&T.version>=20||T.safari&&T.version>=6||T.opera&&T.version>=10||T.ios&&T.osversion&&T.osversion.split(".")[0]>=6||T.blackberry&&T.version>=10.1||T.chromium&&T.version>=20?T.a=e:T.msie&&T.version<10||T.chrome&&T.version<20||T.firefox&&T.version<20||T.safari&&T.version<6||T.opera&&T.version<10||T.ios&&T.osversion&&T.osversion.split(".")[0]<6||T.chromium&&T.version<20?T.c=e:T.x=e,T}function r(e){return e.split(".").length}function i(e,t){var n=[],r;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r++)n.push(t(e[r]));return n}function s(e){var t=Math.max(r(e[0]),r(e[1])),n=i(e,function(e){var n=t-r(e);return e+=(new Array(n+1)).join(".0"),i(e.split("."),function(e){return(new Array(20-e.length)).join("0")+e}).reverse()});while(--t>=0){if(n[0][t]>n[1][t])return 1;if(n[0][t]!==n[1][t])return-1;if(t===0)return 0}}function o(e,r,i){var o=n;typeof r=="string"&&(i=r,r=void 0),r===void 0&&(r=!1),i&&(o=t(i));var u=""+o.version;for(var a in e)if(e.hasOwnProperty(a)&&o[a]){if(typeof e[a]!="string")throw new Error("Browser version in the minVersion map should be a string: "+a+": "+String(e));return s([u,e[a]])<0}return r}function u(e,t,n){return!o(e,t,n)}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent||"":"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n.isUnsupportedBrowser=o,n.compareVersions=s,n.check=u,n._detect=t,n.detect=t,n});


	/*! jQuery v3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,u=n.push,s=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,d=f.toString,p=d.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},v=function e(t){return null!=t&&t===t.window},y={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in y)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function b(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var x="3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",w=function(e,t){return new w.fn.init(e,t)},C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:x,constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},u=1,s=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[u]||{},u++),"object"==typeof a||g(a)||(a={}),u===s&&(a=this,u--);u<s;u++)if(null!=(e=arguments[u]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+(x+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&d.call(n)===p)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(T(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(T(Object(e))?w.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,u=!n;o<a;o++)(r=!t(e[o],o))!==u&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,u=[];if(T(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&u.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&u.push(i);return a.apply([],u)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function T(e){var t=!!e&&"length"in e&&e.length,n=b(e);return!g(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,u,s,l,c,f,d,p,h,g,v,y,m,b,x="sizzle"+1*new Date,w=e.document,C=0,T=0,E=ae(),N=ae(),k=ae(),A=function(e,t){return e===t&&(f=!0),0},D={}.hasOwnProperty,S=[],L=S.pop,j=S.push,q=S.push,O=S.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",I="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",B="\\["+I+"*("+R+")(?:"+I+"*([*^$|!~]?=)"+I+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+I+"*\\]",M=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+B+")*)|.*)\\)|)",W=new RegExp(I+"+","g"),$=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),F=new RegExp("^"+I+"*,"+I+"*"),z=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),_=new RegExp("="+I+"*([^\\]'\"]*?)"+I+"*\\]","g"),U=new RegExp(M),V=new RegExp("^"+R+"$"),X={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+B),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,G=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+I+"?|("+I+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){d()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{q.apply(S=O.call(w.childNodes),w.childNodes),S[w.childNodes.length].nodeType}catch(e){q={apply:S.length?function(e,t){j.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,u,l,c,f,h,y,m=t&&t.ownerDocument,C=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==C&&9!==C&&11!==C)return r;if(!i&&((t?t.ownerDocument||t:w)!==p&&d(t),t=t||p,g)){if(11!==C&&(f=K.exec(e)))if(o=f[1]){if(9===C){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&b(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return q.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return q.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!k[e+" "]&&(!v||!v.test(e))){if(1!==C)m=t,y=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=x),u=(h=a(e)).length;while(u--)h[u]="#"+c+" "+ye(h[u]);y=h.join(","),m=J.test(e)&&ge(t.parentNode)||t}if(y)try{return q.apply(r,m.querySelectorAll(y)),r}catch(e){}finally{c===x&&t.removeAttribute("id")}}}return s(e.replace($,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function ue(e){return e[x]=!0,e}function se(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function de(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return ue(function(t){return t=+t,ue(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},d=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(p=a,h=p.documentElement,g=!o(p),w!==p&&(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=se(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=se(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=G.test(p.getElementsByClassName),n.getById=se(function(e){return h.appendChild(e).id=x,!p.getElementsByName||!p.getElementsByName(x).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},y=[],v=[],(n.qsa=G.test(p.querySelectorAll))&&(se(function(e){h.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+I+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+I+"*(?:value|"+H+")"),e.querySelectorAll("[id~="+x+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||v.push(".#.+[+~]")}),se(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+I+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(n.matchesSelector=G.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&se(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),y.push("!=",M)}),v=v.length&&new RegExp(v.join("|")),y=y.length&&new RegExp(y.join("|")),t=G.test(h.compareDocumentPosition),b=t||G.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===w&&b(w,e)?-1:t===p||t.ownerDocument===w&&b(w,t)?1:c?P(c,e)-P(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],u=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:c?P(c,e)-P(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)u.unshift(n);while(a[r]===u[r])r++;return r?ce(a[r],u[r]):a[r]===w?-1:u[r]===w?1:0},p):p},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&d(e),t=t.replace(_,"='$1']"),n.matchesSelector&&g&&!k[t+" "]&&(!y||!y.test(t))&&(!v||!v.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,p,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==p&&d(e),b(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==p&&d(e);var i=r.attrHandle[t.toLowerCase()],o=i&&D.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(A),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:ue,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return X.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,s){var l,c,f,d,p,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,y=u&&t.nodeName.toLowerCase(),m=!s&&!u,b=!1;if(v){if(o){while(g){d=t;while(d=d[g])if(u?d.nodeName.toLowerCase()===y:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&m){b=(p=(l=(c=(f=(d=v)[x]||(d[x]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===C&&l[1])&&l[2],d=p&&v.childNodes[p];while(d=++p&&d&&d[g]||(b=p=0)||h.pop())if(1===d.nodeType&&++b&&d===t){c[e]=[C,p,b];break}}else if(m&&(b=p=(l=(c=(f=(d=t)[x]||(d[x]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===C&&l[1]),!1===b)while(d=++p&&d&&d[g]||(b=p=0)||h.pop())if((u?d.nodeName.toLowerCase()===y:1===d.nodeType)&&++b&&(m&&((c=(f=d[x]||(d[x]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[C,b]),d===t))break;return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[x]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ue(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=P(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ue(function(e){var t=[],n=[],r=u(e.replace($,"$1"));return r[x]?ue(function(e,t,n,i){var o,a=r(e,null,i,[]),u=e.length;while(u--)(o=a[u])&&(e[u]=!(t[u]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ue(function(e){return function(t){return oe(e,t).length>0}}),contains:ue(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ue(function(e){return V.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:pe(!1),disabled:pe(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=de(t);function ve(){}ve.prototype=r.filters=r.pseudos,r.setFilters=new ve,a=oe.tokenize=function(e,t){var n,i,o,a,u,s,l,c=N[e+" "];if(c)return t?0:c.slice(0);u=e,s=[],l=r.preFilter;while(u){n&&!(i=F.exec(u))||(i&&(u=u.slice(i[0].length)||u),s.push(o=[])),n=!1,(i=z.exec(u))&&(n=i.shift(),o.push({value:n,type:i[0].replace($," ")}),u=u.slice(n.length));for(a in r.filter)!(i=X[a].exec(u))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),u=u.slice(n.length));if(!n)break}return t?u.length:u?oe.error(e):N(e,s).slice(0)};function ye(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,u=T++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,s){var l,c,f,d=[C,u];if(s){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[x]||(t[x]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===C&&l[1]===u)return d[2]=l[2];if(c[o]=d,d[2]=e(t,n,s))return!0}return!1}}function be(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xe(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],u=0,s=e.length,l=null!=t;u<s;u++)(o=e[u])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(u)));return a}function Ce(e,t,n,r,i,o){return r&&!r[x]&&(r=Ce(r)),i&&!i[x]&&(i=Ce(i,o)),ue(function(o,a,u,s){var l,c,f,d=[],p=[],h=a.length,g=o||xe(t||"*",u.nodeType?[u]:u,[]),v=!e||!o&&t?g:we(g,d,e,u,s),y=n?i||(o?e:h||r)?[]:a:v;if(n&&n(v,y,u,s),r){l=we(y,p),r(l,[],u,s),c=l.length;while(c--)(f=l[c])&&(y[p[c]]=!(v[p[c]]=f))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(f=y[c])&&l.push(v[c]=f);i(null,y=[],l,s)}c=y.length;while(c--)(f=y[c])&&(l=i?P(o,f):d[c])>-1&&(o[l]=!(a[l]=f))}}else y=we(y===a?y.splice(h,y.length):y),i?i(null,a,y,s):q.apply(a,y)})}function Te(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],u=a||r.relative[" "],s=a?1:0,c=me(function(e){return e===t},u,!0),f=me(function(e){return P(t,e)>-1},u,!0),d=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];s<o;s++)if(n=r.relative[e[s].type])d=[me(be(d),n)];else{if((n=r.filter[e[s].type].apply(null,e[s].matches))[x]){for(i=++s;i<o;i++)if(r.relative[e[i].type])break;return Ce(s>1&&be(d),s>1&&ye(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),n,s<i&&Te(e.slice(s,i)),i<o&&Te(e=e.slice(i)),i<o&&ye(e))}d.push(n)}return be(d)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,u,s,c){var f,h,v,y=0,m="0",b=o&&[],x=[],w=l,T=o||i&&r.find.TAG("*",c),E=C+=null==w?1:Math.random()||.1,N=T.length;for(c&&(l=a===p||a||c);m!==N&&null!=(f=T[m]);m++){if(i&&f){h=0,a||f.ownerDocument===p||(d(f),u=!g);while(v=e[h++])if(v(f,a||p,u)){s.push(f);break}c&&(C=E)}n&&((f=!v&&f)&&y--,o&&b.push(f))}if(y+=m,n&&m!==y){h=0;while(v=t[h++])v(b,x,a,u);if(o){if(y>0)while(m--)b[m]||x[m]||(x[m]=L.call(s));x=we(x)}q.apply(s,x),c&&!o&&x.length>0&&y+t.length>1&&oe.uniqueSort(s)}return c&&(C=E,l=w),b};return n?ue(o):o}return u=oe.compile=function(e,t){var n,r=[],i=[],o=k[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Te(t[n]))[x]?r.push(o):i.push(o);(o=k(e,Ee(i,r))).selector=e}return o},s=oe.select=function(e,t,n,i){var o,s,l,c,f,d="function"==typeof e&&e,p=!i&&a(e=d.selector||e);if(n=n||[],1===p.length){if((s=p[0]=p[0].slice(0)).length>2&&"ID"===(l=s[0]).type&&9===t.nodeType&&g&&r.relative[s[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(s.shift().value.length)}o=X.needsContext.test(e)?0:s.length;while(o--){if(l=s[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),J.test(s[0].type)&&ge(t.parentNode)||t))){if(s.splice(o,1),!(e=i.length&&ye(s)))return q.apply(n,i),n;break}}}return(d||u(e,p))(i,t,!g,n,!t||J.test(e)&&ge(t.parentNode)||t),n},n.sortStable=x.split("").sort(A).join("")===x,n.detectDuplicates=!!f,d(),n.sortDetached=se(function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))}),se(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&se(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),se(function(e){return null==e.getAttribute("disabled")})||le(H,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var N=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},k=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},A=w.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var S=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return s.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(L(this,e||[],!1))},not:function(e){return this.pushStack(L(this,e||[],!0))},is:function(e){return!!L(this,"string"==typeof e&&A.test(e)?w(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:q.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),S.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,j=w(r);var O=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!A.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?s.call(w(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function H(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return N(e,"parentNode")},parentsUntil:function(e,t,n){return N(e,"parentNode",n)},next:function(e){return H(e,"nextSibling")},prev:function(e){return H(e,"previousSibling")},nextAll:function(e){return N(e,"nextSibling")},prevAll:function(e){return N(e,"previousSibling")},nextUntil:function(e,t,n){return N(e,"nextSibling",n)},prevUntil:function(e,t,n){return N(e,"previousSibling",n)},siblings:function(e){return k((e.parentNode||{}).firstChild,e)},children:function(e){return k(e.firstChild)},contents:function(e){return D(e,"iframe")?e.contentDocument:(D(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(P[e]||w.uniqueSort(i),O.test(e)&&i.reverse()),this.pushStack(i)}});var I=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(I)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],u=-1,s=function(){for(i=i||e.once,r=t=!0;a.length;u=-1){n=a.shift();while(++u<o.length)!1===o[u].apply(n[0],n[1])&&e.stopOnFalse&&(u=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(u=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==b(r)&&t(r)})}(arguments),n&&!t&&s()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=u&&u--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||s()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function B(e){return e}function M(e){throw e}function W(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var u=this,s=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(u,s))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,B,i),a(o,n,M,i)):(o++,l.call(e,a(o,n,B,i),a(o,n,M,i),a(o,n,B,n.notifyWith))):(r!==B&&(u=void 0,s=[e]),(i||n.resolveWith)(u,s))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==M&&(u=void 0,s=[e]),n.rejectWith(u,s))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:B,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:B)),n[2][3].add(a(0,e,g(r)?r:M))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],u=t[5];i[t[1]]=a.add,u&&a.add(function(){r=u},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),u=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&(W(e,a.done(u(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)W(i[n],u(n),a.reject);return a.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&$.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function z(){r.removeEventListener("DOMContentLoaded",z),e.removeEventListener("load",z),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",z),e.addEventListener("load",z));var _=function(e,t,n,r,i,o,a){var u=0,s=e.length,l=null==n;if("object"===b(n)){i=!0;for(u in n)_(e,t,u,n[u],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;u<s;u++)t(e[u],n,a?r:r.call(e[u],u,t(e[u],n)));return i?e:l?t.call(e):s?t(e[0],n):o},U=/^-ms-/,V=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function Q(e){return e.replace(U,"ms-").replace(V,X)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=w.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[Q(t)]=n;else for(r in t)i[Q(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][Q(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(Q):(t=Q(t))in r?[t]:t.match(I)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var K=new G,J=new G,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}J.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return J.hasData(e)||K.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return K.access(e,t,n)},_removeData:function(e,t){K.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=J.get(o),1===o.nodeType&&!K.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=Q(r.slice(5)),ne(o,r,i[r]));K.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){J.set(this,e)}):_(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=J.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){J.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=K.get(e,t),n&&(!r||Array.isArray(n)?r=K.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return K.get(e,n)||K.access(e,n,{empty:w.Callbacks("once memory").add(function(){K.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,u=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=K.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(u));return u(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function se(e,t,n,r){var i,o,a=20,u=r?function(){return r.cur()}:function(){return w.css(e,t,"")},s=u(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+s)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){s/=2,l=l||c[3],c=+s||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=u()/s||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+s||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=K.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",K.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var de=/^(?:checkbox|radio)$/i,pe=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t)?w.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)K.set(e[n],"globalEval",!t||K.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function be(e,t,n,r,i){for(var o,a,u,s,l,c,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)if("object"===b(o))w.merge(d,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),u=(pe.exec(o)||["",""])[1].toLowerCase(),s=ge[u]||ge._default,a.innerHTML=s[1]+w.htmlPrefilter(o)+s[2],c=s[0];while(c--)a=a.lastChild;w.merge(d,a.childNodes),(a=f.firstChild).textContent=""}else d.push(t.createTextNode(o));f.textContent="",p=0;while(o=d[p++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var xe=r.documentElement,we=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function Ne(){return!1}function ke(){try{return r.activeElement}catch(e){}}function Ae(e,t,n,r,i,o){var a,u;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(u in t)Ae(e,u,n,r,t[u],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ne;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,u,s,l,c,f,d,p,h,g,v=K.get(e);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(xe,i),n.guid||(n.guid=w.guid++),(s=v.events)||(s=v.events={}),(a=v.handle)||(a=v.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(I)||[""]).length;while(l--)p=g=(u=Te.exec(t[l])||[])[1],h=(u[2]||"").split(".").sort(),p&&(f=w.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=w.event.special[p]||{},c=w.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=s[p])||((d=s[p]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(p,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),w.event.global[p]=!0)}},remove:function(e,t,n,r,i){var o,a,u,s,l,c,f,d,p,h,g,v=K.hasData(e)&&K.get(e);if(v&&(s=v.events)){l=(t=(t||"").match(I)||[""]).length;while(l--)if(u=Te.exec(t[l])||[],p=g=u[1],h=(u[2]||"").split(".").sort(),p){f=w.event.special[p]||{},d=s[p=(r?f.delegateType:f.bindType)||p]||[],u=u[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=d.length;while(o--)c=d[o],!i&&g!==c.origType||n&&n.guid!==c.guid||u&&!u.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||w.removeEvent(e,p,v.handle),delete s[p])}else for(p in s)w.event.remove(e,p+t[l],n,r,!0);w.isEmptyObject(s)&&K.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,u,s=new Array(arguments.length),l=(K.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(s[0]=t,n=1;n<arguments.length;n++)s[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){u=w.event.handlers.call(this,t,l),n=0;while((o=u[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,s))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,u=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<s;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&u.push({elem:l,handlers:o})}return l=this,s<t.length&&u.push({elem:l,handlers:t.slice(s)}),u},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ke()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===ke()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&D(this,"input"))return this.click(),!1},_default:function(e){return D(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:Ne,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:Ne,isPropagationStopped:Ne,isImmediatePropagationStopped:Ne,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ne),this.each(function(){w.event.remove(this,e,n,t)})}});var De=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Se=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function Oe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Pe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function He(e,t){var n,r,i,o,a,u,s,l;if(1===t.nodeType){if(K.hasData(e)&&(o=K.access(e),a=K.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}J.hasData(e)&&(u=J.access(e),s=w.extend({},u),J.set(t,s))}}function Ie(e,t){var n=t.nodeName.toLowerCase();"input"===n&&de.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,u,s,l,c,f=0,d=e.length,p=d-1,v=t[0],y=g(v);if(y||d>1&&"string"==typeof v&&!h.checkClone&&Le.test(v))return e.each(function(i){var o=e.eq(i);y&&(t[0]=v.call(this,i,o.html())),Re(o,t,n,r)});if(d&&(i=be(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=(u=w.map(ve(i,"script"),Oe)).length;f<d;f++)l=i,f!==p&&(l=w.clone(l,!0,!0),s&&w.merge(u,ve(l,"script"))),n.call(e[f],l,f);if(s)for(c=u[u.length-1].ownerDocument,w.map(u,Pe),f=0;f<s;f++)l=u[f],he.test(l.type||"")&&!K.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(je,""),c,l))}return e}function Be(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ve(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(De,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,u=e.cloneNode(!0),s=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ve(u),r=0,i=(o=ve(e)).length;r<i;r++)Ie(o[r],a[r]);if(t)if(n)for(o=o||ve(e),a=a||ve(u),r=0,i=o.length;r<i;r++)He(o[r],a[r]);else He(e,u);return(a=ve(u,"script")).length>0&&ye(a,!s&&ve(e,"script")),u},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[K.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[K.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return _(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Se.test(e)&&!ge[(pe.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ve(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),u.apply(r,n.get());return this.pushStack(r)}});var Me=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),We=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},$e=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",xe.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,s=12===n(t.marginLeft),c.style.right="60%",u=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",xe.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,u,s,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),u},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),s},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,u=e.style;return(n=n||We(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&Me.test(a)&&$e.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var _e=/^(none|table(?!-c[ea]).+)/,Ue=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"},Qe=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Ge(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Ye)return e}function Ke(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Ge(e)||e),t}function Je(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,u=0,s=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(s+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(s-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(s-=w.css(e,"border"+oe[a]+"Width",!0,i))):(s+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?s+=w.css(e,"border"+oe[a]+"Width",!0,i):u+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(s+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-s-u-.5))),s}function et(e,t,n){var r=We(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(Me.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,u=Q(t),s=Ue.test(t),l=e.style;if(s||(t=Ke(u)),a=w.cssHooks[t]||w.cssHooks[u],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[u]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(s?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,u=Q(t);return Ue.test(t)||(t=Ke(u)),(a=w.cssHooks[t]||w.cssHooks[u])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Xe&&(i=Xe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!_e.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):ue(e,Ve,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=We(e),a="border-box"===w.css(e,"boxSizing",!1,o),u=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),u&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Je(e,n,u)}}}),w.cssHooks.marginLeft=ze(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Je)}),w.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=We(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}}),w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var tt,nt=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return _(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?tt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(I);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),tt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=nt[t]||w.find.attr;nt[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=nt[a],nt[a]=i,i=null!=n(e,t,r)?a:null,nt[a]=o),i}});var rt=/^(?:input|select|textarea|button)$/i,it=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return _(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):rt.test(e.nodeName)||it.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function ot(e){return(e.match(I)||[]).join(" ")}function at(e){return e.getAttribute&&e.getAttribute("class")||""}function ut(e){return Array.isArray(e)?e:"string"==typeof e?e.match(I)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,u,s=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,at(this)))});if((t=ut(e)).length)while(n=this[s++])if(i=at(n),r=1===n.nodeType&&" "+ot(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(u=ot(r))&&n.setAttribute("class",u)}return this},removeClass:function(e){var t,n,r,i,o,a,u,s=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,at(this)))});if(!arguments.length)return this.attr("class","");if((t=ut(e)).length)while(n=this[s++])if(i=at(n),r=1===n.nodeType&&" "+ot(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(u=ot(r))&&n.setAttribute("class",u)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,at(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=ut(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=at(this))&&K.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":K.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+ot(at(n))+" ").indexOf(t)>-1)return!0;return!1}});var st=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(st,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:ot(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,u=a?null:[],s=a?o+1:i.length;for(r=o<0?s:a?o:0;r<s;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;u.push(t)}return u},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var lt=/^(?:focusinfocus|focusoutblur)$/,ct=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,u,s,l,c,d,p,h,y=[i||r],m=f.call(t,"type")?t.type:t,b=f.call(t,"namespace")?t.namespace.split("."):[];if(u=h=s=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!lt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(b=m.split(".")).shift(),b.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=b.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),p=w.event.special[m]||{},o||!p.trigger||!1!==p.trigger.apply(i,n))){if(!o&&!p.noBubble&&!v(i)){for(l=p.delegateType||m,lt.test(l+m)||(u=u.parentNode);u;u=u.parentNode)y.push(u),s=u;s===(i.ownerDocument||r)&&y.push(s.defaultView||s.parentWindow||e)}a=0;while((u=y[a++])&&!t.isPropagationStopped())h=u,t.type=a>1?l:p.bindType||m,(d=(K.get(u,"events")||{})[t.type]&&K.get(u,"handle"))&&d.apply(u,n),(d=c&&u[c])&&d.apply&&Y(u)&&(t.result=d.apply(u,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||p._default&&!1!==p._default.apply(y.pop(),n)||!Y(i)||c&&g(i[m])&&!v(i)&&((s=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,ct),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,ct),w.event.triggered=void 0,s&&(i[c]=s)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=K.access(r,t);i||r.addEventListener(e,n,!0),K.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=K.access(r,t)-1;i?K.access(r,t,i):(r.removeEventListener(e,n,!0),K.remove(r,t))}}});var ft=/\[\]$/,dt=/\r?\n/g,pt=/^(?:submit|button|image|reset|file)$/i,ht=/^(?:input|select|textarea|keygen)/i;function gt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||ft.test(e)?r(e,i):gt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==b(t))r(e,t);else for(i in t)gt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)gt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&ht.test(this.nodeName)&&!pt.test(e)&&(this.checked||!de.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(dt,"\r\n")}}):{name:t.name,value:n.replace(dt,"\r\n")}}).get()}}),w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=S.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=be([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.offset={setOffset:function(e,t,n){var r,i,o,a,u,s,l,c=w.css(e,"position"),f=w(e),d={};"static"===c&&(e.style.position="relative"),u=f.offset(),o=w.css(e,"top"),s=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+s).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(s)||0),g(t)&&(t=t.call(e,n,w.extend({},u))),null!=t.top&&(d.top=t.top-u.top+a),null!=t.left&&(d.left=t.left-u.left+i),"using"in t?t.using.call(e,d):f.css(d)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||xe})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return _(this,function(e,r,i){var o;if(v(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=ze(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),Me.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),u=n||(!0===i||!0===o?"margin":"border");return _(this,function(t,n,i){var o;return v(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,u):w.style(t,n,i,u)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=D,w.isFunction=g,w.isWindow=v,w.camelCase=Q,w.type=b,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var vt=e.jQuery,yt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=yt),t&&e.jQuery===w&&(e.jQuery=vt),w},t||(e.jQuery=e.$=w),w});	window.$abpro = jQuery.noConflict();

(function(){

	//jQuery for internal Usage
	if(typeof $abpro !== 'undefined'){
		var $ = $abpro;
	}

	/* + + + + + + + + + + SCRIPT + + + + + + + + + + */
	
	var Script = {
		
		version: '1.0',
		
		revision: 566,
		
		logDomain: 'http://local.log.abpro.io/',
		goalsEnabled: true,
		
		isPreview: false,
		previewCombinations: [],
		
		optedOut: false,
		
		doNotTrackUser: false,
		
		init: function(projectData){
			this.projectData = projectData;
			this.handlePreview();
			this.handleOptOut();
			this.handleDoNotTrack();

			console.groupCollapsed('ABpro # Initiated SCRIPT with Revision', this.revision);
				console.log('goalsEnabled', this.goalsEnabled);
				console.log('isPreview', this.isPreview);
				console.log('optedOut', this.optedOut);
				console.log('doNotTrackUser', this.doNotTrackUser);
			console.groupEnd();
		},
		
		run: function(){
			//Respect OptOut and DoNotTrack
			if(!this.optedOut && !this.doNotTrackUser){
				this.applyAntiFlicker();
				this.main();
				this.removeAntiFlicker();
			}
		},
		
		handlePreview: function(){
			var previewCombinations = false;
			var previewCombinationsJson = Tools.getUrlParameter(System.urlParamPrefix+ 'preview');
			if(previewCombinationsJson){
				try {
					this.previewCombinations = JSON.parse(previewCombinationsJson);
			        if(this.previewCombinations.length){
			        	this.isPreview = true;
			        	this.goalsEnabled = false;
			        }
			    }catch (e){
			    	console.error('PREVIEW: Unable to parse the Preview Input');
			    }
			}
		},
		
		getVariationIdToPreviewByExperiment: function(experiment){
			var combinationsLength = this.previewCombinations.length;
			for(var i = 0; i < combinationsLength; i++){
				var splittedCombination = this.previewCombinations[i].split('_'); 
				var combinationExperimentId = parseInt( splittedCombination[0] );
				var combinationVariationId = parseInt( splittedCombination[1] );
				if(combinationExperimentId === experiment.data.id){
					//Check if Variation exists for Experiment
					if(experiment.variationIdExists(combinationVariationId)){
						return combinationVariationId;
					}
					else{
						console.error('PREVIEW: Variation '+ combinationVariationId +' does not exist for Experiment '+ combinationExperimentId);
					}
				}
			}
			return false;
		},
		
		handleOptOut: function(){
			var urlParam = Tools.getUrlParameter(System.urlParamPrefix+ 'opt_out');
			var cookieName = System.cookiePrefix+ 'opt_out';
			if(urlParam){
				if(urlParam === 'true'){
					Tools.setCookie(cookieName, 'true');
				}
				else if(urlParam === 'false'){
					Tools.removeCookie(cookieName);
				}
			}
			var cookieValue = Tools.getCookie(cookieName);
			this.optedOut = false;
			if(cookieValue === 'true'){
				this.optedOut = true;
			}
		},
		
		handleDoNotTrack: function(){
			if(this.projectData.adhere_dnt && navigator.doNotTrack == 1){
				this.doNotTrackUser = true;
			}
		},

		applyAntiFlicker: function(){
			var _self = this;
			if(!this.projectData.use_antiflicker){
				return false;
			}
			document.getElementsByTagName("HTML")[0].style.visibility = "hidden";
			//Fallback
			setTimeout(function(){ 
				_self.removeAntiFlicker();
			}, 2000);
		},
		
		removeAntiFlicker: function(){
			if(!this.projectData.use_antiflicker){
				return false;
			}
			document.getElementsByTagName("HTML")[0].style.visibility = "visible"; 
		},
		
		getProjectData: function(){
			return this.projectData;
		},

		prepareEvent: function(senderObj){
			var eventObj = {};

			eventObj.timestamp = Math.floor(Date.now() / 1000); //Make Unix Timestamp
			eventObj.type = senderObj.data.type;
			
			eventObj.value = 0;
			if(senderObj.data.hasOwnProperty('value')){
				if(System.isInteger(senderObj.data.value)){
					eventObj.value = senderObj.data.value;
				}
				else{
					System.log('error', 2, ['EVENT', 'The Value "'+ senderObj.data.value +'" is not an Integer!']);
				}
			}
			
			//Sender: Goal
			if(senderObj.className === 'goal'){
				eventObj.goal = {};
				eventObj.goal.id = senderObj.data.id;
			}

			return eventObj;
		},
		
		sendEvents: function(events, clearEventQueue){
			if(EventQueue.sending){
				return 'busy';
			}
			EventQueue.sending = true;

			//Remove those Variations where Variation ID is 0 (excluded)
			for(var index in User.experimentsBucket){
				if(User.experimentsBucket[index] === 0){
					delete User.experimentsBucket[index];
				}
			}
			if(!Object.keys(User.experimentsBucket).length){
				EventQueue.clear();	
				EventQueue.sending = false;
				return false;
			}
			
			//General
			var postObj = {
				projectId: 			this.projectData.id,
				snippetVersion: 	this.version,
				snippetRevision: 	this.revision,
				user: 				User,
				events: 			events,
			};

			var postUrl = this.logDomain +'test.php';
			var request = new XMLHttpRequest();
			request.onreadystatechange = function(){
        		if(request.readyState === 4 && request.status === 200){
            		if(clearEventQueue){
            			EventQueue.clear();	
            		}
            		EventQueue.sending = false;
        		}
    		}; 
			request.open('POST', postUrl, true);
			request.send(JSON.stringify(postObj));
			return 'ready';
		},
		
		getGoalByApiName: function(apiName){
			//Collect all Goals through Experiments
			var allGoals = [];
			var experiments = this.projectData.experiments;
			for(var index in experiments){
				var goals = experiments[index].goals;
				allGoals = allGoals.concat(goals);
			}
			//Iterate over Goals
			for(var index in allGoals){
				var goal = allGoals[index];
				if(goal.api_name === apiName){
					return goal;
				}
			}
			return null;
		},
			
	};
	
	
	/* + + + + + + + + + + API + + + + + + + + + + */

	//Collect Events fired before Snippet was loaded
	var abpro = window.abpro;
	var formerPushedEvents = [];
	if(typeof abpro !== 'undefined'){
		if(abpro.length){
			formerPushedEvents = abpro;
		}
	}
	
	var Api = {
		
		init: function(){
			this.initEventsApi();
		},
			
		initEventsApi: function(){
			
			window.abpro = {
				
				push: function(event){
					var goalData = Script.getGoalByApiName( event.eventName );
					if(goalData){
						if(!Script.goalsEnabled){
				    		return false;
				    	}
						var goal = new Goal(goalData);
						var value = 0;
						if(event.hasOwnProperty('eventValue')){
							value = event.eventValue
						}
						goal.trigger(value);
					}
				}
					
			};
			
			//Fire former collected Events
			for(var index in formerPushedEvents){
		  		var pushedEvent = formerPushedEvents[index];
		  		window.abpro.push(pushedEvent);
			}
			
		},
			
	};


	/* + + + + + + + + + + SYSTEM + + + + + + + + + + */
	
	var System = {
			
		urlParamPrefix: 'abpro_',	
			
		cookiePrefix: 'abpro_',
		
		eventQueueStorageName: 'abproEventQueue',
		
		triggeredGoalsStorageName: 'abproTriggeredGoals',
		
		logEnabled: false,
	
		init: function(){
		},
		
		enableLog: function(){
			this.logEnabled = true;
		},
		
		log: function(type, nesting, message, argument){
			if(!this.logEnabled){
				return false;
			}
			var outputPrefix = 'ABpro #';
			var nestingStepChars = '----';
			var outputNestingSteps = nestingStepChars;
			for(i=0; i < nesting; i++){
				outputNestingSteps += nestingStepChars;
			} 
			var logPrefix = outputPrefix + outputNestingSteps + ' ';
			if(!argument){
				argument = '';
			}
			if(type === 'info'){
				console.log(logPrefix + message, argument);
			}
			else if(type === 'error'){
				var senderObj = message[0];
				if(typeof senderObj === 'object'){
					message = 'ERROR on '+ senderObj.className.toUpperCase() +' '+ senderObj.data.id +': '+ message[1];
				}
				else{
					message = 'ERROR on '+ senderObj +': '+ message[1];
				}
				console.error(logPrefix + message, argument);
			}
		},
		
		generateUID: function(){
			function s4(){
				return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
		},
		
		applyJs: function(senderObj, silent){
			var js = senderObj.data.js;
			if(!js.length){
				return false;
			}
			if(!silent){
				System.log('info', 2, 'Applying JS');
			}
			try {
				eval(js);
			}
			catch(err){
				System.log('error', 2, [senderObj, err.message]);
			}
		},
		
		applyCss: function(css){
			if(!css.length){
				return false;
			}
			System.log('info', 2, 'Applying CSS');
			var head = document.head || document.getElementsByTagName('head')[0],
    			style = document.createElement('style');
			style.type = 'text/css';
			if (style.styleSheet){
  				style.styleSheet.cssText = css;
			} else {
  				style.appendChild(document.createTextNode(css));
			}
			head.appendChild(style);
		},
		
		jsConditionReturnsTrue: function(expression){
			//When its empty, it passes
			if(expression === 'null' || expression === ''){
				return true;
			}
			var result = false;	
			try {
				var jsConditionFn = new Function('User', expression); //TODO?
				result = jsConditionFn(User);
			}
			catch(err){
				System.log('error', 2, ['JS RULE', err.message]);
			}
			return result;
		},
		
		getCurrentUrl: function(){
			return window.location.href;
		},
		
		parseUrl: function(url){
        	var parser = document.createElement('a'),
            	searchObject = {},
            	queries, split, i;
        	// Let the browser do the work
        	parser.href = url;
        	// Convert query string to object
        	queries = parser.search.replace(/^\?/, '').split('&');
        	for( i = 0; i < queries.length; i++ ) {
          		split = queries[i].split('=');
          		searchObject[split[0]] = split[1];
        	}
        	return {
            	protocol: parser.protocol,
            	host: parser.host,
            	hostname: parser.hostname,
            	port: parser.port,
            	pathname: parser.pathname,
            	search: parser.search,
            	searchObject: searchObject,
            	hash: parser.hash
        	};
    	},
    	
    	addLiveEventListeners: function(selector, event, handler){
		    document.querySelector("html").addEventListener(event, function(evt){
				var target = evt.target;
				while (target != null){
		   			var isMatch = target.matches ? target.matches(selector) : target.msMatchesSelector(selector);
		  			if(isMatch){
		   				handler(evt);
		           		return;
		      		}
		   			 target = target.parentElement;
				}
			}, true);
		},
		
		isInteger: function(value){
			var x;
			if (isNaN(value)) {
				return false;
			}
			x = parseFloat(value);
			return (x | 0) === x;
		},
		
	};
	
	System.init();
	
	
	/* + + + + + + + + + + EVENTSTORAGE + + + + + + + + + + */
	
	var EventQueue = {

		storage: localStorage,
		storageItemName: System.eventQueueStorageName,
		
		sending: false,
		busyTries: 0,
			
		init: function(){
			var _self = this;
			//Send max every 1 Sec (and after Dom Ready)
			document.addEventListener("DOMContentLoaded", function(event){
				setInterval(function(){
					_self.send();
				}, 2000);
			});
		},	
		
		add: function(event){			
			var _self = this;
			this.addItemToJson(event);
		},
		
		get: function(){
			var sItem = this.storage.getItem(this.storageItemName);
			if(sItem){
				var events = JSON.parse(sItem);
				return events;
			}
			return [];
		},
		
		clear: function(){
			this.storage.setItem(this.storageItemName, JSON.stringify([]));
		},
		
		send: function(){
			var _self = this;
			var events = this.get();
			if(events.length){
				var status = Script.sendEvents(events, true);
			}
			//If sending didn't work, try it again
			if(status === 'busy'){
				 setTimeout(function(){ 
					 _self.send();
				 }, 1000);
				 this.busyTries++;
				 if(this.busyTries >= 5){
					 System.log('error', 2, ['EventQueue', 'too busy, giving it up']);
				 }
			}
		},
		
		addItemToJson: function(event){
			var events = this.get();
			events.push(event);
			this.storage.setItem(this.storageItemName, JSON.stringify(events));
		},
		
	};
	

    /* + + + + + + + + + + TOOLS + + + + + + + + + + */

	var Tools = {

		maxCookieLifetime: 365,
			
		init: function(){
		},

		setCookie: function(name, value, days){
			days = (typeof days !== 'undefined') ? days : this.maxCookieLifetime;
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
			document.cookie = name+"="+value+expires+"; path=/";
		},

		getCookie: function(name){
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)===' '){
					c = c.substring(1,c.length);
				}
				if (c.indexOf(nameEQ) === 0){
					return c.substring(nameEQ.length,c.length);
				}
			}
			return null;
		},

		removeCookie: function(name){
  			document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		},

		getUrlParameter: function(name, url){
		    if(!url){
		      url = window.location.href;
		    }
		    name = name.replace(/[\[\]]/g, "\\$&");
		    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		        results = regex.exec(url);
		    if(!results){
		        return null;
		    }
		    if(!results[2]){
		        return '';
		    }
		    return decodeURIComponent(results[2].replace(/\+/g, " "));
		},
		
		poll: function(pollingFn, callbackFn){
			var result = pollingFn();
			var i = setInterval(function(){ 
				result = pollingFn();
				if(result === true){
					clearInterval(i);
					callbackFn();
				}
			}, 25);
			if(result === true){
				clearInterval(i);
				callbackFn();
			}
			//End after 10 Secs
			setTimeout(function(){
				clearInterval(i);
			}, 10000); 
			//End 2 Secs after Dom Ready
			document.addEventListener("DOMContentLoaded", function(event){
				setTimeout(function(){
					clearInterval(i);
				}, 2000);
			});
		},

	};

	Tools.init();

	
    /* + + + + + + + + + + CLASS USER + + + + + + + + + + */
    
    var User = {
    		
    	id: null,
    	
    	experimentsBucket: {},
    
    	init: function(){
    		this.setId();
    		this.setExperimentsBucketFromStorage();
    		//Set bowser
    		this.setBrowser();
    	},
    	
    	setId: function(){
    		var uidCookieName = System.cookiePrefix+'uid';
    		//Is there a UserID Cookie?
    		var uid = Tools.getCookie(uidCookieName); 
    		if(!uid){
    			//Build new
        		uid = System.generateUID();
        		Tools.setCookie(uidCookieName, uid);
    		}
    		this.id = uid;
    	},
    	
    	getVariationIdOfExperimemt: function(experiment){
    		var experimentId = experiment.data.id;
    		//Check if there is a stored Variation
    		if(this.experimentsBucket.hasOwnProperty(experimentId)){
    			var variationId = this.experimentsBucket[experimentId];
    			//Check if Variation still exists
    			if(experiment.variationIdExists(variationId)){
    				return variationId;
    			}
    			return false;
    		}
    		return false;
    	},
    	
    	setExperimentsBucketFromStorage: function(){
    		var expCookieName = System.cookiePrefix+'exps';
    		var exps = Tools.getCookie(expCookieName);
    		if(exps){
    			this.experimentsBucket = JSON.parse(exps);
    		}	
    	},
    	
    	setExperimentToBucket: function(experimentId, variationId){
    		this.experimentsBucket[experimentId] = variationId;
    		//To local Bucket
    		this.saveExperimentsBucketToStorage();
    		//Bucketing Event for Logger (when not excluded)
    		if(variationId !== 0){
    			var bucketing = {
    	    		className: 'bucketing',
    	    		data: {
    	    			type: 'bucketing',
    	    			value: variationId,
    	    		}
    	    	};
    			//Add to Event Queue
    	    	EventQueue.add(Script.prepareEvent(bucketing));   	
    		}
    		
    	},
    	
    	saveExperimentsBucketToStorage: function(){
    		var expCookieName = System.cookiePrefix+'exps';
    		Tools.setCookie(expCookieName, JSON.stringify(this.experimentsBucket));
    	},
    	
    	setBrowser: function(){
    		this.browser = bowser;
    		//Add check for Desktop
    		if(!this.browser.mobile && !this.browser.tablet){
    			this.browser.desktop = true;
    		}
    	},

    };

    
    /* + + + + + + + + + + CLASS PROJECT + + + + + + + + + + */
    
    var Project = {
    
    	init: function(data){
    		this.className = 'project';
    		this.data = data;
    		if(this.data.debug){
    			System.enableLog();
    		}
    		System.log('info', 0, 'Initiated PROJECT', this.data.id);
    		this.runCodes();
    	},
    	
    	runCodes: function(){
    		System.applyJs(this);
    		System.applyCss(this.data.css);
    	},

    };
    
    
    /* + + + + + + + + + + CLASS EXPERIMENT + + + + + + + + + + */
    
    function Experiment(data){
    	this.className = 'experiment';
    	this.data = data;
    	System.log('info', 0, 'Initiated EXPERIMENT', this.data.id);
    }
    
    Experiment.prototype.runCodes = function() {
  		System.applyJs(this);
  		System.applyCss(this.data.css);
	};
	
	Experiment.prototype.pagesPassed = function(){
		var pages = this.data.pages;
		//If none, its okay
		if(pages.length === 0){
			return true;
		}
  		for(var pageKey in pages){
  			var page = new Page(pages[pageKey]);
  			var pagePassed = page.matches();
  			if(pagePassed){
  				return true;
  			}
  		}
  		return false;
	};
	
	Experiment.prototype.audiencesPassed = function(){
		var matchType = this.data.audiences_match_type;
		var audiences = this.data.audiences;
		//If none, its okay
		if(audiences.length === 0){
			return true;
		}
		
		var result = false;
		
		//Matchtype: Any
		if(matchType === 'any'){
			for(var audienceKey in audiences){
				var audience = new Audience(audiences[audienceKey]);
				if(audience.rulesPassed()){
					result = true;
					break;
				}
			}
		}
		
		//Matchtype: All
		else if(matchType === 'all'){
			result = true;
			for(var audienceKey in audiences){
				var audience = new Audience(audiences[audienceKey]);
				if(!audience.rulesPassed()){
					result = false;
					break;
				}
			}
		}
		
		return result;
	};
	
	Experiment.prototype.trafficAllocationPassed = function() {
  		return Math.random() < (this.data.traffic_allocation / 100);
	};
	
	Experiment.prototype.chooseVariation = function(){
    	var variations = this.data.variations;
    	var varsDicerArr = [];
    	var dicedVariationId = false;  			
  		for(var variationKey in variations){
			for(i = 0; i < variations[variationKey].traffic_allocation; i++){
				varsDicerArr.push(variations[variationKey].id);
			}
		}
		var chosenVariationKey = Math.floor(Math.random() * varsDicerArr.length);
		dicedVariationId = varsDicerArr[chosenVariationKey];
		return dicedVariationId;
    };
    
    Experiment.prototype.getVariationData = function(variationId){
    	var variations = this.data.variations;
    	var variationData = false;
    	for(var variationKey in variations){
    		var loopVariation = variations[variationKey];
    		if(loopVariation.id === variationId){
    			variationData = loopVariation;
    			break;
    		}
    	}
    	return variationData;
    };

    Experiment.prototype.variationIdExists = function(variationIdSearch){
    	var variations = this.data.variations;
    	var variationExists = false;
    	for(var variationKey in variations){
    		if(variations[variationKey].id === variationIdSearch){
    			variationExists = true;
    			break;
    		}
    	}
    	return variationExists;
    };
    
    Experiment.prototype.applyGoals = function(){
    	var goals = this.data.goals;
    	var goalsObj = {};
    	
    	if(!Script.goalsEnabled){
    		return false;
    	}
    	
    	//Wait until 1 Seconds after DOM ready
    	document.addEventListener("DOMContentLoaded", function(event){
			setTimeout(function(){
				for(var goalKey in goals){
		    		var goal = new Goal(goals[goalKey]);

		    		if(goal.data.type === 'custom'){ continue; }
		    		goalsObj[goal.data.id] = goal;
		    		
		    		//Does Page match?
			  	  	var page = new Page(goal.data.page);
			  	  	var pagePassed = page.matches(true);
			  	  	if(pagePassed){
			  	  		
			  	  		//Pageview Goals
						if(goal.data.type === 'pageview'){
							goal.trigger();
						}
						
						//Click Goals (application of data-attribute
						else if(goal.data.type === 'click'){
							var cssSelector = goal.data.css_selector;					
							if(cssSelector !== ''){						
								var elements = document.querySelectorAll(cssSelector);
								for(i = 0; i < elements.length; ++i){
									elements[i].setAttribute('data-abpro-clickgoal', goal.data.id);
								}						
							}
						}
			  	  		
			  	  	}
		    	}
			}, 1000);
		});
    	
    	//Register Click Events
    	System.addLiveEventListeners('[data-abpro-clickgoal]', 'click', function(e){
			var goalId = e.target.getAttribute('data-abpro-clickgoal');
			var goal = goalsObj[goalId];
			goal.trigger();
		});
    	
    };
    
    
    /* + + + + + + + + + + CLASS VARIATION + + + + + + + + + + */
    
    function Variation(data){
    	this.className = 'variation';
    	this.data = data;
    	System.log('info', 1, 'Initiated VARIATION', this.data.id);
    }
    
    Variation.prototype.runCodes = function(){
  		System.applyJs(this);
  		System.applyCss(this.data.css);
	};
	
	
	/* + + + + + + + + + + CLASS PAGE + + + + + + + + + + */
    
    function Page(data){
    	this.data = data;
    }
    
    Page.prototype.matches = function(silent){
    	var currentUrl = System.getCurrentUrl();
    	var urlTargetings = this.data.urltargetings;
    	var resultUrls = false;
    	var resultRules = false;
    	var result = false;
    	//URLTARGETINGS
    	if(urlTargetings.length === 0){
    		resultUrls = true;
    	}
  		for(var urlTargetingKey in urlTargetings){
  			var urltargeting = new Urltargeting(urlTargetings[urlTargetingKey]);
  			var urltargetingMatch = urltargeting.matches(System.getCurrentUrl());
  			if(urltargetingMatch){
  				if(urltargetingMatch === 'included'){
  					resultUrls = true;
  				}
  				else{
  					resultUrls = false;
  					break;
  				}
  			}
  		}
  		
  		//RULES
  		resultRules = System.jsConditionReturnsTrue(this.data.rules_js);
  		//RESULT of both
  		if(resultUrls && resultRules){
  			result = true;
  		}
  		//CONSOLE
  		if(!silent){	
	  		if(result){
	  			System.log('info', 2, 'PAGE '+ this.data.id +' is matching');
	  		}
	  		else{
	  			//System.log('info', 2, 'PAGE '+ this.data.id +' is not matching');
	  		}
	  	}
  		return result;
    };
    
    
	/* + + + + + + + + + + CLASS URLTARGETING + + + + + + + + + + */
    
    function Urltargeting(data){
    	this.data = data;
    }
    
    Urltargeting.prototype.simplifyUrl = function(url){
    	var urlParts = System.parseUrl(url);
    	var simpleUrl = urlParts.host + urlParts.pathname;
    	return simpleUrl;
    };
    
    Urltargeting.prototype.matches = function(currentUrl){
    	var type = this.data.type;
    	var urlType = this.data.url_type;
    	var setUrl = this.data.url;
    	if(urlType === 'simple'){
    		var currentUrlSimple = this.simplifyUrl(currentUrl);
    		var setUrlSimple = this.simplifyUrl(setUrl);
    		if(currentUrlSimple === setUrlSimple){
    			return (type === 'include' ? 'included' : 'excluded');
    		}
    	}
    	else if(urlType === 'exact'){
    		if(currentUrl === setUrl){
    			return (type === 'include' ? 'included' : 'excluded');
    		}
    	}
    	else if(urlType === 'substring'){
    		if(currentUrl.indexOf(setUrl) !== -1){
    			return (type === 'include' ? 'included' : 'excluded');
    		}
    	}
    	else if(urlType === 'regex'){
    		var regex = RegExp(setUrl);
    		if(regex.test(currentUrl)){
    			return (type === 'include' ? 'included' : 'excluded');
    		}
    	}
    	return false;
    };
	
	
	/* + + + + + + + + + + CLASS AUDIENCE + + + + + + + + + + */
    
    function Audience(data){
    	this.data = data;
    }
    
    Audience.prototype.rulesPassed = function(){
    	var result = System.jsConditionReturnsTrue(this.data.rules_js);
  		//RETURN
  		if(result){
  			System.log('info', 2, 'AUDIENCE '+ this.data.id +' is matching');
  		}
  		else{
  			//System.log('info', 2, 'AUDIENCE '+ this.data.id +' is not matching');
  		}
  		return result;
	};
	
	
	/* + + + + + + + + + + CLASS GOALSTORAGE + + + + + + + + + + */
    
    var GoalStorage = {
    
    	storage: localStorage,
    		
    	init: function(){
    	},
    	
    	add: function(goal){
    		//this.storage.removeItem(Script.triggeredGoalsStorageName); //DEBUG
    		var goalIds = [];
    		goalIds = goalIds.concat(this.getAll());
    		if(!this.exists(goal)){
    			goalIds.push(goal.data.id);
    		}
    		this.storage.setItem(Script.triggeredGoalsStorageName, JSON.stringify(goalIds));
    	},
    	
    	getAll: function(){
    		var jsonArr = this.storage.getItem(Script.triggeredGoalsStorageName);
    		if(!jsonArr){
    			return [];
    		}
    		var goalIds = JSON.parse(jsonArr);
    		return goalIds;
    	},
    	
    	exists: function(goal){
    		var goalIds = this.getAll();
    		return goalIds.includes(goal.data.id);
    	},

    };
	
	
	/* + + + + + + + + + + CLASS GOAL + + + + + + + + + + */
    
    function Goal(data){
    	this.className = 'goal';
    	this.data = data;
    }
    
    Goal.prototype.trigger = function(value){
    	System.log('info', 1, 'Triggered GOAL ('+ this.data.type +')', this.data.id);
    	//Value
    	if(value){
    		this.data.value = value;
    	}
    	//Counting Method: One
    	if(this.data.counting_method === 'one'){
    		//Check if this Goal wasn't already send
    		if(!GoalStorage.exists(this)){
        		this.send();
        	}
    	}
    	//Counting Method: Every
    	else{
    		this.send();
    	}
    	//Add this triggered Goal to Storage
    	GoalStorage.add(this);
	};
	
	Goal.prototype.send = function(){
		EventQueue.add(Script.prepareEvent(this));
	};
	
	
	/* + + + + + + + + + + CLASS INTEGRATION + + + + + + + + + + */
    
    function Integration(data){
    	this.className = 'integration';
    	this.data = data;
    }
    
    Integration.prototype.run = function(project, experiment, variation){
    	if(!Script.goalsEnabled){
    		return false;
    	}
    	System.log('info', 1, 'Running INTEGRATION', this.data.name);
    	try {
    		var projectId = project.data.id;
    		var projectName = project.data.name;
    		var experimentId = experiment.data.id;
    		var experimentName = experiment.data.name;
    		var variationId = variation.data.id;
    		var variationName = variation.data.name;
			eval(this.data.js);
		}
		catch(err){
			System.log('error', 2, [this, err.message]);
		}
	};


    /* + + + + + + + + + + LETS GO + + + + + + + + + + */
    
    Script.init({"id":22732137,"name":"companywithbrain.com","debug":1,"adhere_dnt":0,"max_cookie_lifetime":365,"jquery_include":"3.3.1_slim","snippet_location":"eu-central-1","use_antiflicker":0,"snippet_revision":566,"js":"\/\/window.$(function() {\r\n\/\/\talert(\"JS ready\");\r\n\/\/})\r\n\/\/https:\/\/s3.eu-central-1.amazonaws.com\/assets.abpro.io\/22732137\/oQGOAxJacpXlZykd7RIQAVH0DZjJiHV07cFu9Adv.png","css":"body{\r\n\tborder: 5px solid green;\r\n}","experiments":[{"id":49616615,"status":"running","name":"Headlines with direct Speech","traffic_allocation":100,"audiences_match_type":"any","js":"\/\/https:\/\/solaranlagen.firmen.de\/start_1480.html \r\n\/\/https:\/\/photovoltaikanlagen.firmen.de\/start_1576.html\r\n\r\n(function(){\r\n\r\n    \/* + + + + + + + + + + ArTools + + + + + + + + + + *\/\r\n\r\n\tvar ArTools = {\r\n\r\n\t\tinit: function(){\r\n\t\t\tvar _self = this;\r\n\t\t\twindow.addEventListener('load', function(){\r\n        \t\t_self.runVariationCallback();\r\n        \t}, false);\r\n\t\t},\r\n\r\n        runVariationCallback: function(){\r\n            ArVariation.init();\r\n        },\r\n\r\n\t\tsetCookie: function(name, value, days){\r\n\t\t\tvar expires = \"\";\r\n\t\t\tif(days){\r\n\t\t\t\tvar date = new Date();\r\n\t\t\t\tdate.setTime(date.getTime()+(days*24*60*60*1000));\r\n\t\t\t\texpires = \"; expires=\"+date.toGMTString();\r\n\t\t\t}\r\n\t\t\tdocument.cookie = name+\"=\"+value+expires+\"; path=\/\";\r\n\t\t},\r\n\r\n\t\tgetCookie: function(name){\r\n\t\t\tvar nameEQ = name + \"=\";\r\n\t\t\tvar ca = document.cookie.split(';');\r\n\t\t\tfor(var i=0;i < ca.length;i++) {\r\n\t\t\t\tvar c = ca[i];\r\n\t\t\t\twhile (c.charAt(0)===' '){\r\n\t\t\t\t\tc = c.substring(1,c.length);\r\n\t\t\t\t}\r\n\t\t\t\tif (c.indexOf(nameEQ) === 0){\r\n\t\t\t\t\treturn c.substring(nameEQ.length,c.length);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\treturn null;\r\n\t\t},\r\n\r\n\t\tremoveCookie: function(name){\r\n  \t\t\tdocument.cookie = name +'=; Path=\/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';\r\n\t\t},\r\n\r\n\t\tgetUrlParameter: function(name, url){\r\n\t\t    if(!url){\r\n\t\t      url = window.location.href;\r\n\t\t    }\r\n\t\t    name = name.replace(\/[\\[\\]]\/g, \"\\\\$&\");\r\n\t\t    var regex = new RegExp(\"[?&]\" + name + \"(=([^&#]*)|&|#|$)\"),\r\n\t\t        results = regex.exec(url);\r\n\t\t    if(!results){\r\n\t\t        return null;\r\n\t\t    }\r\n\t\t    if(!results[2]){\r\n\t\t        return '';\r\n\t\t    }\r\n\t\t    return decodeURIComponent(results[2].replace(\/\\+\/g, \" \"));\r\n\t\t},\r\n\r\n\t};\r\n\r\n\tArTools.init();\r\n\r\n\r\n    \/* + + + + + + + + + + ArVariation + + + + + + + + + + *\/\r\n\r\n    var ArVariation = {\r\n\r\n        init: function(){\r\n\t\t\tthis.addHelpers();\r\n\t\t\tthis.run();\r\n\t\t},\r\n\r\n        addHelpers: function(){\r\n            document.documentElement.classList.add('arExp_001__1');\r\n\t\t\tif(window.location.href.indexOf('datenEingabe') > -1){\r\n\t\t\t\tthis.pagetype = 'dateneingabe';\r\n\t\t       document.documentElement.classList.add('arPage_dateneingabe');\r\n\t\t    }\r\n\t\t\telse{\r\n\t\t\t\tthis.pagetype = 'default';\r\n\t\t\t\tdocument.documentElement.classList.add('arPage_default');\r\n\t\t\t}\r\n        },\r\n\r\n\t\trun: function(){\r\n\t\t\t\/\/General Alternation\r\n\t\t\tthis.alterStepPlz();\r\n\t\t\t\/\/Intent\r\n\t\t\tthis.setIntent();\r\n\t\t\tthis.intentId = this.getIntent();\r\n\t\t\tif(this.intentId){\r\n\t\t\t\tthis.changeElements();\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\t\/* - - - - - - - - - - Variation Functions - - - - - - - - - - *\/\r\n\r\n\t\tgetSubdomain: function(){\r\n\t\t\tvar hostname = window.location.hostname;\r\n\t\t\tvar regexParse = new RegExp('[a-z\\-0-9]{2,63}\\.[a-z\\.]{2,5}$');\r\n        \tvar urlParts = regexParse.exec(hostname);\r\n        \treturn hostname.replace(urlParts[0],'').slice(0, -1);\r\n\t\t},\r\n\r\n\t\tsetIntent: function(){\r\n\t\t\tvar intentId = ArTools.getUrlParameter('i');\r\n\t\t\tif(intentId){\r\n\t\t\t\tArTools.setCookie('userintent', intentId);\r\n\t\t\t\tif(intentId === 'reset'){\r\n\t\t\t\t\tArTools.removeCookie('userintent');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tgetIntent: function(){\r\n\t\t\tvar intentId = ArTools.getCookie('userintent');\r\n\t\t\tif(intentId){\r\n\t\t\t\treturn intentId;\r\n\t\t\t}\r\n\t\t\treturn false;\r\n\t\t},\r\n\r\n\t\talterStepPlz: function(){\r\n\t\t\ttry {\r\n\t\t\t\tvar subdomain = this.getSubdomain();\r\n\t\t\t\tvar frageLiClass = 'frage8';\r\n\t\t\t\tif(subdomain === 'photovoltaikanlagen'){\r\n\t\t\t\t\tfrageLiClass = 'frage15';\r\n\t\t\t\t}\r\n\t\t\t\tdocument.querySelector('li.'+frageLiClass).classList.add('arStepPlz');\r\n\r\n\t\t\t\tvar plzCta = document.querySelector('li.'+frageLiClass+' .sliderNextWrap > button');\r\n\t\t\t\tplzCta.classList.add('arBtnNextPlz');\r\n\t\t\t\tplzCta.insertAdjacentHTML('afterbegin', '\u00bb ');\r\n\r\n\t\t\t\tvar plzErrorLabel = '<div class=\"arPlzErrorLabel\"><\/div>';\r\n\t\t\t\tdocument.querySelector('li.'+frageLiClass+' .sliderNextWrap').insertAdjacentHTML('afterend', plzErrorLabel);\r\n\r\n\t\t\t\tvar plzInput = document.querySelector('li.'+frageLiClass+' .sliderAnswerWrap input');\r\n\t\t\t\tplzCta.addEventListener('click', function(){\r\n\t\t\t\t\tsetTimeout(function(){\r\n\t\t\t\t\t\tdocument.querySelector('.arPlzErrorLabel').innerHTML = '';\r\n\t\t\t\t\t\tif(plzInput.classList.contains('mfwError')){\r\n\t\t\t\t\t\t\tdocument.querySelector('.arPlzErrorLabel').innerHTML = '<span><i class=\"fa fa-info-circle\" aria-hidden=\"true\"><\/i> Bitte geben Sie eine <strong>PLZ<\/strong> an, damit wir <strong>regionale Anbieter<\/strong> f\u00fcr Sie ermitteln k\u00f6nnen.<\/span>';\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}, 25);\r\n\t\t\t\t});\r\n\t\t\t} catch(e){\r\n\t\t\t\t\/\/Nothing\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tgetContentArray: function(){\r\n\t\t\tvar subdomain = this.getSubdomain();\r\n\r\n\t\t\tvar content = {\r\n\r\n\t\t\t\t\/\/SOLARANLAGEN\r\n\t\t\t\tsolaranlagen: [\r\n\t\t\t\t\t\/\/ 1 = Mieten\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Mieten von Solaranlagen',\r\n\t\t\t\t\t\tslider_hl: 'Solaranlage mieten & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Mietangebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Mietangebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Mietangebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 2 = Kaufen\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Kauf von Solaranlagen',\r\n\t\t\t\t\t\tslider_hl: 'Solaranlage kaufen & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Angebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Mietangebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Angebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 3 = Rechner\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Berechnung starten'\r\n\t\t\t\t\t}\r\n\t\t\t\t],\r\n\r\n\t\t\t\t\/\/PHOTOVOLTAIKANLAGEN\r\n\t\t\t\tphotovoltaikanlagen: [\r\n\t\t\t\t\t\/\/ 1 = Mieten\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Mieten von Photovoltaikanlagen',\r\n\t\t\t\t\t\tslider_hl: 'PV-Anlage mieten & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Mietangebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Angebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Mietangebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 2 = Kaufen\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Kauf von Photovoltaikanlagen',\r\n\t\t\t\t\t\tslider_hl: 'PV-Anlage kaufen & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Angebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Agebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Angebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 3 = Rechner\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Berechnung starten'\r\n\t\t\t\t\t}\r\n\t\t\t\t],\r\n\r\n\t\t\t};\r\n\r\n\t\t\treturn content[subdomain];\r\n\t\t},\r\n\r\n\t\tgetContent: function(label){\r\n\t\t\tvar cid = this.intentId -1;\r\n\t\t\tvar content = this.getContentArray();\r\n\t\t\tif(content && cid in content){\r\n\t\t\t\treturn content[cid][label];\r\n\t\t\t}\r\n\t\t\treturn false;\r\n\t\t},\r\n\r\n\t\tchangeContent: function(element, content){\r\n\t\t\tif(element && content){\r\n\t\t\t\telement.innerHTML = content;\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tchangeElements: function(){\r\n\r\n\t\t\t\/\/GENERELL - - - - -\r\n\r\n\t\t\tvar d = document;\r\n\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelector('.slogan'),\r\n\t\t\t\tthis.getContent('head_claim')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelector('.col-headline > h1'),\r\n\t\t\t\tthis.getContent('slider_hl')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelector('.col-headline > h2 > span'),\r\n\t\t\t\tthis.getContent('slider_sub_hl')\r\n\t\t\t);\r\n\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelectorAll('.liste-box .liste-top')[0],\r\n\t\t\t\tthis.getContent('slider_uvp_1')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelectorAll('.liste-box .liste-top')[1],\r\n\t\t\t\tthis.getContent('slider_uvp_2')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelectorAll('.liste-box .liste-top')[2],\r\n\t\t\t\tthis.getContent('slider_uvp_3')\r\n\t\t\t);\r\n\r\n\r\n\t\t\t\/\/DATENEINGABE - - - - -\r\n\r\n\t\t\tif(this.pagetype === 'dateneingabe'){\r\n\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelector('.arPage_dateneingabe .col-head-form > .alert-success'),\r\n\t\t\t\t\tthis.getContent('dateneingabe_notification')\r\n\t\t\t\t);\r\n\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelector('.arPage_dateneingabe .formular .col-head-form h3'),\r\n\t\t\t\t\tthis.getContent('dateneingabe_intro')\r\n\t\t\t\t);\r\n\r\n\t\t\t\tvar checkIcon = '<i class=\"glyphicon glyphicon-ok\"><\/i> ';\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelectorAll('.arPage_dateneingabe .formular .liste > li')[0],\r\n\t\t\t\t\tcheckIcon + this.getContent('dateneingabe_uvp_1')\r\n\t\t\t\t);\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelectorAll('.arPage_dateneingabe .formular .liste > li')[1],\r\n\t\t\t\t\tcheckIcon + this.getContent('dateneingabe_uvp_2')\r\n\t\t\t\t);\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelectorAll('.arPage_dateneingabe .formular .liste > li')[2],\r\n\t\t\t\t\tcheckIcon + this.getContent('dateneingabe_uvp_3')\r\n\t\t\t\t);\r\n\r\n\t\t\t\tif(this.getContent('dateneingabe_cta')){\r\n\t\t\t\t\td.querySelector('#mfw_submit_adressInputStep1').setAttribute('value', this.getContent('dateneingabe_cta'));\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n    };\r\n\r\n})();\r\n","css":"","audiences":[{"id":49788342,"name":"Desktop Users","rules_js":"if(User.browser.desktop){\r\n  return true;\r\n}\r\n"},{"id":56425134,"name":"Dummy Audience","rules_js":"return false;"}],"variations":[{"id":72647771,"name":"Original","baseline":1,"traffic_allocation":49,"js":"","css":"body{\r\n\tborder: 5px solid red;\r\n}","experiment":{"id":49616615,"status":"running","name":"Headlines with direct Speech","traffic_allocation":100,"audiences_match_type":"any","js":"\/\/https:\/\/solaranlagen.firmen.de\/start_1480.html \r\n\/\/https:\/\/photovoltaikanlagen.firmen.de\/start_1576.html\r\n\r\n(function(){\r\n\r\n    \/* + + + + + + + + + + ArTools + + + + + + + + + + *\/\r\n\r\n\tvar ArTools = {\r\n\r\n\t\tinit: function(){\r\n\t\t\tvar _self = this;\r\n\t\t\twindow.addEventListener('load', function(){\r\n        \t\t_self.runVariationCallback();\r\n        \t}, false);\r\n\t\t},\r\n\r\n        runVariationCallback: function(){\r\n            ArVariation.init();\r\n        },\r\n\r\n\t\tsetCookie: function(name, value, days){\r\n\t\t\tvar expires = \"\";\r\n\t\t\tif(days){\r\n\t\t\t\tvar date = new Date();\r\n\t\t\t\tdate.setTime(date.getTime()+(days*24*60*60*1000));\r\n\t\t\t\texpires = \"; expires=\"+date.toGMTString();\r\n\t\t\t}\r\n\t\t\tdocument.cookie = name+\"=\"+value+expires+\"; path=\/\";\r\n\t\t},\r\n\r\n\t\tgetCookie: function(name){\r\n\t\t\tvar nameEQ = name + \"=\";\r\n\t\t\tvar ca = document.cookie.split(';');\r\n\t\t\tfor(var i=0;i < ca.length;i++) {\r\n\t\t\t\tvar c = ca[i];\r\n\t\t\t\twhile (c.charAt(0)===' '){\r\n\t\t\t\t\tc = c.substring(1,c.length);\r\n\t\t\t\t}\r\n\t\t\t\tif (c.indexOf(nameEQ) === 0){\r\n\t\t\t\t\treturn c.substring(nameEQ.length,c.length);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\treturn null;\r\n\t\t},\r\n\r\n\t\tremoveCookie: function(name){\r\n  \t\t\tdocument.cookie = name +'=; Path=\/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';\r\n\t\t},\r\n\r\n\t\tgetUrlParameter: function(name, url){\r\n\t\t    if(!url){\r\n\t\t      url = window.location.href;\r\n\t\t    }\r\n\t\t    name = name.replace(\/[\\[\\]]\/g, \"\\\\$&\");\r\n\t\t    var regex = new RegExp(\"[?&]\" + name + \"(=([^&#]*)|&|#|$)\"),\r\n\t\t        results = regex.exec(url);\r\n\t\t    if(!results){\r\n\t\t        return null;\r\n\t\t    }\r\n\t\t    if(!results[2]){\r\n\t\t        return '';\r\n\t\t    }\r\n\t\t    return decodeURIComponent(results[2].replace(\/\\+\/g, \" \"));\r\n\t\t},\r\n\r\n\t};\r\n\r\n\tArTools.init();\r\n\r\n\r\n    \/* + + + + + + + + + + ArVariation + + + + + + + + + + *\/\r\n\r\n    var ArVariation = {\r\n\r\n        init: function(){\r\n\t\t\tthis.addHelpers();\r\n\t\t\tthis.run();\r\n\t\t},\r\n\r\n        addHelpers: function(){\r\n            document.documentElement.classList.add('arExp_001__1');\r\n\t\t\tif(window.location.href.indexOf('datenEingabe') > -1){\r\n\t\t\t\tthis.pagetype = 'dateneingabe';\r\n\t\t       document.documentElement.classList.add('arPage_dateneingabe');\r\n\t\t    }\r\n\t\t\telse{\r\n\t\t\t\tthis.pagetype = 'default';\r\n\t\t\t\tdocument.documentElement.classList.add('arPage_default');\r\n\t\t\t}\r\n        },\r\n\r\n\t\trun: function(){\r\n\t\t\t\/\/General Alternation\r\n\t\t\tthis.alterStepPlz();\r\n\t\t\t\/\/Intent\r\n\t\t\tthis.setIntent();\r\n\t\t\tthis.intentId = this.getIntent();\r\n\t\t\tif(this.intentId){\r\n\t\t\t\tthis.changeElements();\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\t\/* - - - - - - - - - - Variation Functions - - - - - - - - - - *\/\r\n\r\n\t\tgetSubdomain: function(){\r\n\t\t\tvar hostname = window.location.hostname;\r\n\t\t\tvar regexParse = new RegExp('[a-z\\-0-9]{2,63}\\.[a-z\\.]{2,5}$');\r\n        \tvar urlParts = regexParse.exec(hostname);\r\n        \treturn hostname.replace(urlParts[0],'').slice(0, -1);\r\n\t\t},\r\n\r\n\t\tsetIntent: function(){\r\n\t\t\tvar intentId = ArTools.getUrlParameter('i');\r\n\t\t\tif(intentId){\r\n\t\t\t\tArTools.setCookie('userintent', intentId);\r\n\t\t\t\tif(intentId === 'reset'){\r\n\t\t\t\t\tArTools.removeCookie('userintent');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tgetIntent: function(){\r\n\t\t\tvar intentId = ArTools.getCookie('userintent');\r\n\t\t\tif(intentId){\r\n\t\t\t\treturn intentId;\r\n\t\t\t}\r\n\t\t\treturn false;\r\n\t\t},\r\n\r\n\t\talterStepPlz: function(){\r\n\t\t\ttry {\r\n\t\t\t\tvar subdomain = this.getSubdomain();\r\n\t\t\t\tvar frageLiClass = 'frage8';\r\n\t\t\t\tif(subdomain === 'photovoltaikanlagen'){\r\n\t\t\t\t\tfrageLiClass = 'frage15';\r\n\t\t\t\t}\r\n\t\t\t\tdocument.querySelector('li.'+frageLiClass).classList.add('arStepPlz');\r\n\r\n\t\t\t\tvar plzCta = document.querySelector('li.'+frageLiClass+' .sliderNextWrap > button');\r\n\t\t\t\tplzCta.classList.add('arBtnNextPlz');\r\n\t\t\t\tplzCta.insertAdjacentHTML('afterbegin', '\u00bb ');\r\n\r\n\t\t\t\tvar plzErrorLabel = '<div class=\"arPlzErrorLabel\"><\/div>';\r\n\t\t\t\tdocument.querySelector('li.'+frageLiClass+' .sliderNextWrap').insertAdjacentHTML('afterend', plzErrorLabel);\r\n\r\n\t\t\t\tvar plzInput = document.querySelector('li.'+frageLiClass+' .sliderAnswerWrap input');\r\n\t\t\t\tplzCta.addEventListener('click', function(){\r\n\t\t\t\t\tsetTimeout(function(){\r\n\t\t\t\t\t\tdocument.querySelector('.arPlzErrorLabel').innerHTML = '';\r\n\t\t\t\t\t\tif(plzInput.classList.contains('mfwError')){\r\n\t\t\t\t\t\t\tdocument.querySelector('.arPlzErrorLabel').innerHTML = '<span><i class=\"fa fa-info-circle\" aria-hidden=\"true\"><\/i> Bitte geben Sie eine <strong>PLZ<\/strong> an, damit wir <strong>regionale Anbieter<\/strong> f\u00fcr Sie ermitteln k\u00f6nnen.<\/span>';\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}, 25);\r\n\t\t\t\t});\r\n\t\t\t} catch(e){\r\n\t\t\t\t\/\/Nothing\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tgetContentArray: function(){\r\n\t\t\tvar subdomain = this.getSubdomain();\r\n\r\n\t\t\tvar content = {\r\n\r\n\t\t\t\t\/\/SOLARANLAGEN\r\n\t\t\t\tsolaranlagen: [\r\n\t\t\t\t\t\/\/ 1 = Mieten\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Mieten von Solaranlagen',\r\n\t\t\t\t\t\tslider_hl: 'Solaranlage mieten & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Mietangebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Mietangebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Mietangebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 2 = Kaufen\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Kauf von Solaranlagen',\r\n\t\t\t\t\t\tslider_hl: 'Solaranlage kaufen & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Angebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Mietangebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Angebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 3 = Rechner\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Berechnung starten'\r\n\t\t\t\t\t}\r\n\t\t\t\t],\r\n\r\n\t\t\t\t\/\/PHOTOVOLTAIKANLAGEN\r\n\t\t\t\tphotovoltaikanlagen: [\r\n\t\t\t\t\t\/\/ 1 = Mieten\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Mieten von Photovoltaikanlagen',\r\n\t\t\t\t\t\tslider_hl: 'PV-Anlage mieten & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Mietangebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Angebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Mietangebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 2 = Kaufen\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Kauf von Photovoltaikanlagen',\r\n\t\t\t\t\t\tslider_hl: 'PV-Anlage kaufen & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Angebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Agebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Angebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 3 = Rechner\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Berechnung starten'\r\n\t\t\t\t\t}\r\n\t\t\t\t],\r\n\r\n\t\t\t};\r\n\r\n\t\t\treturn content[subdomain];\r\n\t\t},\r\n\r\n\t\tgetContent: function(label){\r\n\t\t\tvar cid = this.intentId -1;\r\n\t\t\tvar content = this.getContentArray();\r\n\t\t\tif(content && cid in content){\r\n\t\t\t\treturn content[cid][label];\r\n\t\t\t}\r\n\t\t\treturn false;\r\n\t\t},\r\n\r\n\t\tchangeContent: function(element, content){\r\n\t\t\tif(element && content){\r\n\t\t\t\telement.innerHTML = content;\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tchangeElements: function(){\r\n\r\n\t\t\t\/\/GENERELL - - - - -\r\n\r\n\t\t\tvar d = document;\r\n\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelector('.slogan'),\r\n\t\t\t\tthis.getContent('head_claim')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelector('.col-headline > h1'),\r\n\t\t\t\tthis.getContent('slider_hl')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelector('.col-headline > h2 > span'),\r\n\t\t\t\tthis.getContent('slider_sub_hl')\r\n\t\t\t);\r\n\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelectorAll('.liste-box .liste-top')[0],\r\n\t\t\t\tthis.getContent('slider_uvp_1')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelectorAll('.liste-box .liste-top')[1],\r\n\t\t\t\tthis.getContent('slider_uvp_2')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelectorAll('.liste-box .liste-top')[2],\r\n\t\t\t\tthis.getContent('slider_uvp_3')\r\n\t\t\t);\r\n\r\n\r\n\t\t\t\/\/DATENEINGABE - - - - -\r\n\r\n\t\t\tif(this.pagetype === 'dateneingabe'){\r\n\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelector('.arPage_dateneingabe .col-head-form > .alert-success'),\r\n\t\t\t\t\tthis.getContent('dateneingabe_notification')\r\n\t\t\t\t);\r\n\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelector('.arPage_dateneingabe .formular .col-head-form h3'),\r\n\t\t\t\t\tthis.getContent('dateneingabe_intro')\r\n\t\t\t\t);\r\n\r\n\t\t\t\tvar checkIcon = '<i class=\"glyphicon glyphicon-ok\"><\/i> ';\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelectorAll('.arPage_dateneingabe .formular .liste > li')[0],\r\n\t\t\t\t\tcheckIcon + this.getContent('dateneingabe_uvp_1')\r\n\t\t\t\t);\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelectorAll('.arPage_dateneingabe .formular .liste > li')[1],\r\n\t\t\t\t\tcheckIcon + this.getContent('dateneingabe_uvp_2')\r\n\t\t\t\t);\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelectorAll('.arPage_dateneingabe .formular .liste > li')[2],\r\n\t\t\t\t\tcheckIcon + this.getContent('dateneingabe_uvp_3')\r\n\t\t\t\t);\r\n\r\n\t\t\t\tif(this.getContent('dateneingabe_cta')){\r\n\t\t\t\t\td.querySelector('#mfw_submit_adressInputStep1').setAttribute('value', this.getContent('dateneingabe_cta'));\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n    };\r\n\r\n})();\r\n","css":"","project":{"id":22732137,"name":"companywithbrain.com","debug":1,"adhere_dnt":0,"max_cookie_lifetime":365,"jquery_include":"3.3.1_slim","snippet_location":"eu-central-1","use_antiflicker":0,"snippet_revision":566,"js":"\/\/window.$(function() {\r\n\/\/\talert(\"JS ready\");\r\n\/\/})\r\n\/\/https:\/\/s3.eu-central-1.amazonaws.com\/assets.abpro.io\/22732137\/oQGOAxJacpXlZykd7RIQAVH0DZjJiHV07cFu9Adv.png","css":"body{\r\n\tborder: 5px solid green;\r\n}"}}},{"id":50148453,"name":"Variation #1","baseline":0,"traffic_allocation":51,"js":"var wtf = true;","css":"body{\r\n\tborder: 5px solid blue;\r\n  \tbackground: url('https:\/\/s3.eu-central-1.amazonaws.com\/assets.abpro.io\/22732137\/lr9dZWFi0b3eEePSUbghPuQwZEpV7QJtb2sQVMqV.png');\r\n}","experiment":{"id":49616615,"status":"running","name":"Headlines with direct Speech","traffic_allocation":100,"audiences_match_type":"any","js":"\/\/https:\/\/solaranlagen.firmen.de\/start_1480.html \r\n\/\/https:\/\/photovoltaikanlagen.firmen.de\/start_1576.html\r\n\r\n(function(){\r\n\r\n    \/* + + + + + + + + + + ArTools + + + + + + + + + + *\/\r\n\r\n\tvar ArTools = {\r\n\r\n\t\tinit: function(){\r\n\t\t\tvar _self = this;\r\n\t\t\twindow.addEventListener('load', function(){\r\n        \t\t_self.runVariationCallback();\r\n        \t}, false);\r\n\t\t},\r\n\r\n        runVariationCallback: function(){\r\n            ArVariation.init();\r\n        },\r\n\r\n\t\tsetCookie: function(name, value, days){\r\n\t\t\tvar expires = \"\";\r\n\t\t\tif(days){\r\n\t\t\t\tvar date = new Date();\r\n\t\t\t\tdate.setTime(date.getTime()+(days*24*60*60*1000));\r\n\t\t\t\texpires = \"; expires=\"+date.toGMTString();\r\n\t\t\t}\r\n\t\t\tdocument.cookie = name+\"=\"+value+expires+\"; path=\/\";\r\n\t\t},\r\n\r\n\t\tgetCookie: function(name){\r\n\t\t\tvar nameEQ = name + \"=\";\r\n\t\t\tvar ca = document.cookie.split(';');\r\n\t\t\tfor(var i=0;i < ca.length;i++) {\r\n\t\t\t\tvar c = ca[i];\r\n\t\t\t\twhile (c.charAt(0)===' '){\r\n\t\t\t\t\tc = c.substring(1,c.length);\r\n\t\t\t\t}\r\n\t\t\t\tif (c.indexOf(nameEQ) === 0){\r\n\t\t\t\t\treturn c.substring(nameEQ.length,c.length);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\treturn null;\r\n\t\t},\r\n\r\n\t\tremoveCookie: function(name){\r\n  \t\t\tdocument.cookie = name +'=; Path=\/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';\r\n\t\t},\r\n\r\n\t\tgetUrlParameter: function(name, url){\r\n\t\t    if(!url){\r\n\t\t      url = window.location.href;\r\n\t\t    }\r\n\t\t    name = name.replace(\/[\\[\\]]\/g, \"\\\\$&\");\r\n\t\t    var regex = new RegExp(\"[?&]\" + name + \"(=([^&#]*)|&|#|$)\"),\r\n\t\t        results = regex.exec(url);\r\n\t\t    if(!results){\r\n\t\t        return null;\r\n\t\t    }\r\n\t\t    if(!results[2]){\r\n\t\t        return '';\r\n\t\t    }\r\n\t\t    return decodeURIComponent(results[2].replace(\/\\+\/g, \" \"));\r\n\t\t},\r\n\r\n\t};\r\n\r\n\tArTools.init();\r\n\r\n\r\n    \/* + + + + + + + + + + ArVariation + + + + + + + + + + *\/\r\n\r\n    var ArVariation = {\r\n\r\n        init: function(){\r\n\t\t\tthis.addHelpers();\r\n\t\t\tthis.run();\r\n\t\t},\r\n\r\n        addHelpers: function(){\r\n            document.documentElement.classList.add('arExp_001__1');\r\n\t\t\tif(window.location.href.indexOf('datenEingabe') > -1){\r\n\t\t\t\tthis.pagetype = 'dateneingabe';\r\n\t\t       document.documentElement.classList.add('arPage_dateneingabe');\r\n\t\t    }\r\n\t\t\telse{\r\n\t\t\t\tthis.pagetype = 'default';\r\n\t\t\t\tdocument.documentElement.classList.add('arPage_default');\r\n\t\t\t}\r\n        },\r\n\r\n\t\trun: function(){\r\n\t\t\t\/\/General Alternation\r\n\t\t\tthis.alterStepPlz();\r\n\t\t\t\/\/Intent\r\n\t\t\tthis.setIntent();\r\n\t\t\tthis.intentId = this.getIntent();\r\n\t\t\tif(this.intentId){\r\n\t\t\t\tthis.changeElements();\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\t\/* - - - - - - - - - - Variation Functions - - - - - - - - - - *\/\r\n\r\n\t\tgetSubdomain: function(){\r\n\t\t\tvar hostname = window.location.hostname;\r\n\t\t\tvar regexParse = new RegExp('[a-z\\-0-9]{2,63}\\.[a-z\\.]{2,5}$');\r\n        \tvar urlParts = regexParse.exec(hostname);\r\n        \treturn hostname.replace(urlParts[0],'').slice(0, -1);\r\n\t\t},\r\n\r\n\t\tsetIntent: function(){\r\n\t\t\tvar intentId = ArTools.getUrlParameter('i');\r\n\t\t\tif(intentId){\r\n\t\t\t\tArTools.setCookie('userintent', intentId);\r\n\t\t\t\tif(intentId === 'reset'){\r\n\t\t\t\t\tArTools.removeCookie('userintent');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tgetIntent: function(){\r\n\t\t\tvar intentId = ArTools.getCookie('userintent');\r\n\t\t\tif(intentId){\r\n\t\t\t\treturn intentId;\r\n\t\t\t}\r\n\t\t\treturn false;\r\n\t\t},\r\n\r\n\t\talterStepPlz: function(){\r\n\t\t\ttry {\r\n\t\t\t\tvar subdomain = this.getSubdomain();\r\n\t\t\t\tvar frageLiClass = 'frage8';\r\n\t\t\t\tif(subdomain === 'photovoltaikanlagen'){\r\n\t\t\t\t\tfrageLiClass = 'frage15';\r\n\t\t\t\t}\r\n\t\t\t\tdocument.querySelector('li.'+frageLiClass).classList.add('arStepPlz');\r\n\r\n\t\t\t\tvar plzCta = document.querySelector('li.'+frageLiClass+' .sliderNextWrap > button');\r\n\t\t\t\tplzCta.classList.add('arBtnNextPlz');\r\n\t\t\t\tplzCta.insertAdjacentHTML('afterbegin', '\u00bb ');\r\n\r\n\t\t\t\tvar plzErrorLabel = '<div class=\"arPlzErrorLabel\"><\/div>';\r\n\t\t\t\tdocument.querySelector('li.'+frageLiClass+' .sliderNextWrap').insertAdjacentHTML('afterend', plzErrorLabel);\r\n\r\n\t\t\t\tvar plzInput = document.querySelector('li.'+frageLiClass+' .sliderAnswerWrap input');\r\n\t\t\t\tplzCta.addEventListener('click', function(){\r\n\t\t\t\t\tsetTimeout(function(){\r\n\t\t\t\t\t\tdocument.querySelector('.arPlzErrorLabel').innerHTML = '';\r\n\t\t\t\t\t\tif(plzInput.classList.contains('mfwError')){\r\n\t\t\t\t\t\t\tdocument.querySelector('.arPlzErrorLabel').innerHTML = '<span><i class=\"fa fa-info-circle\" aria-hidden=\"true\"><\/i> Bitte geben Sie eine <strong>PLZ<\/strong> an, damit wir <strong>regionale Anbieter<\/strong> f\u00fcr Sie ermitteln k\u00f6nnen.<\/span>';\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}, 25);\r\n\t\t\t\t});\r\n\t\t\t} catch(e){\r\n\t\t\t\t\/\/Nothing\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tgetContentArray: function(){\r\n\t\t\tvar subdomain = this.getSubdomain();\r\n\r\n\t\t\tvar content = {\r\n\r\n\t\t\t\t\/\/SOLARANLAGEN\r\n\t\t\t\tsolaranlagen: [\r\n\t\t\t\t\t\/\/ 1 = Mieten\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Mieten von Solaranlagen',\r\n\t\t\t\t\t\tslider_hl: 'Solaranlage mieten & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Mietangebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Mietangebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Mietangebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 2 = Kaufen\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Kauf von Solaranlagen',\r\n\t\t\t\t\t\tslider_hl: 'Solaranlage kaufen & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Angebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Mietangebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Angebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 3 = Rechner\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Berechnung starten'\r\n\t\t\t\t\t}\r\n\t\t\t\t],\r\n\r\n\t\t\t\t\/\/PHOTOVOLTAIKANLAGEN\r\n\t\t\t\tphotovoltaikanlagen: [\r\n\t\t\t\t\t\/\/ 1 = Mieten\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Mieten von Photovoltaikanlagen',\r\n\t\t\t\t\t\tslider_hl: 'PV-Anlage mieten & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Mietangebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Angebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Mietangebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 2 = Kaufen\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\thead_claim: 'Die besten Angebote zum Kauf von Photovoltaikanlagen',\r\n\t\t\t\t\t\tslider_hl: 'PV-Anlage kaufen & unabh\u00e4ngig sein',\r\n\t\t\t\t\t\tslider_sub_hl: 'Angebote vergleichen & sparen!',\r\n\t\t\t\t\t\tslider_uvp_1: 'Kostenlos & unverbindlich',\r\n\t\t\t\t\t\tslider_uvp_2: 'Zeit & Geld sparen',\r\n\t\t\t\t\t\tslider_uvp_3: 'Die besten Angebote vergleichen',\r\n\t\t\t\t\t\tdateneingabe_notification: 'Mehr als 3 passende Angebote gefunden',\r\n\t\t\t\t\t\tdateneingabe_intro: 'Um die besten Anbieter f\u00fcr Ihre individuellen Angebote ermitteln zu k\u00f6nnen, rufen wir Sie schnellstm\u00f6glich an.',\r\n\t\t\t\t\t\tdateneingabe_uvp_1: 'einfach & sicher',\r\n\t\t\t\t\t\tdateneingabe_uvp_2: 'T\u00dcV-gepr\u00fcfter Datenschutz',\r\n\t\t\t\t\t\tdateneingabe_uvp_3: 'Agebote von ausgew\u00e4hlten Fachbetrieben',\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Angebote vergleichen'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t\/\/ 3 = Rechner\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tdateneingabe_cta: 'Jetzt Berechnung starten'\r\n\t\t\t\t\t}\r\n\t\t\t\t],\r\n\r\n\t\t\t};\r\n\r\n\t\t\treturn content[subdomain];\r\n\t\t},\r\n\r\n\t\tgetContent: function(label){\r\n\t\t\tvar cid = this.intentId -1;\r\n\t\t\tvar content = this.getContentArray();\r\n\t\t\tif(content && cid in content){\r\n\t\t\t\treturn content[cid][label];\r\n\t\t\t}\r\n\t\t\treturn false;\r\n\t\t},\r\n\r\n\t\tchangeContent: function(element, content){\r\n\t\t\tif(element && content){\r\n\t\t\t\telement.innerHTML = content;\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tchangeElements: function(){\r\n\r\n\t\t\t\/\/GENERELL - - - - -\r\n\r\n\t\t\tvar d = document;\r\n\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelector('.slogan'),\r\n\t\t\t\tthis.getContent('head_claim')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelector('.col-headline > h1'),\r\n\t\t\t\tthis.getContent('slider_hl')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelector('.col-headline > h2 > span'),\r\n\t\t\t\tthis.getContent('slider_sub_hl')\r\n\t\t\t);\r\n\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelectorAll('.liste-box .liste-top')[0],\r\n\t\t\t\tthis.getContent('slider_uvp_1')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelectorAll('.liste-box .liste-top')[1],\r\n\t\t\t\tthis.getContent('slider_uvp_2')\r\n\t\t\t);\r\n\t\t\tthis.changeContent(\r\n\t\t\t\td.querySelectorAll('.liste-box .liste-top')[2],\r\n\t\t\t\tthis.getContent('slider_uvp_3')\r\n\t\t\t);\r\n\r\n\r\n\t\t\t\/\/DATENEINGABE - - - - -\r\n\r\n\t\t\tif(this.pagetype === 'dateneingabe'){\r\n\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelector('.arPage_dateneingabe .col-head-form > .alert-success'),\r\n\t\t\t\t\tthis.getContent('dateneingabe_notification')\r\n\t\t\t\t);\r\n\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelector('.arPage_dateneingabe .formular .col-head-form h3'),\r\n\t\t\t\t\tthis.getContent('dateneingabe_intro')\r\n\t\t\t\t);\r\n\r\n\t\t\t\tvar checkIcon = '<i class=\"glyphicon glyphicon-ok\"><\/i> ';\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelectorAll('.arPage_dateneingabe .formular .liste > li')[0],\r\n\t\t\t\t\tcheckIcon + this.getContent('dateneingabe_uvp_1')\r\n\t\t\t\t);\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelectorAll('.arPage_dateneingabe .formular .liste > li')[1],\r\n\t\t\t\t\tcheckIcon + this.getContent('dateneingabe_uvp_2')\r\n\t\t\t\t);\r\n\t\t\t\tthis.changeContent(\r\n\t\t\t\t\td.querySelectorAll('.arPage_dateneingabe .formular .liste > li')[2],\r\n\t\t\t\t\tcheckIcon + this.getContent('dateneingabe_uvp_3')\r\n\t\t\t\t);\r\n\r\n\t\t\t\tif(this.getContent('dateneingabe_cta')){\r\n\t\t\t\t\td.querySelector('#mfw_submit_adressInputStep1').setAttribute('value', this.getContent('dateneingabe_cta'));\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n    };\r\n\r\n})();\r\n","css":"","project":{"id":22732137,"name":"companywithbrain.com","debug":1,"adhere_dnt":0,"max_cookie_lifetime":365,"jquery_include":"3.3.1_slim","snippet_location":"eu-central-1","use_antiflicker":0,"snippet_revision":566,"js":"\/\/window.$(function() {\r\n\/\/\talert(\"JS ready\");\r\n\/\/})\r\n\/\/https:\/\/s3.eu-central-1.amazonaws.com\/assets.abpro.io\/22732137\/oQGOAxJacpXlZykd7RIQAVH0DZjJiHV07cFu9Adv.png","css":"body{\r\n\tborder: 5px solid green;\r\n}"}}}],"pages":[{"id":59968434,"name":"Index","rules_js":"return window.testVar;","pivot":{"experiment_id":49616615,"page_id":59968434},"urltargetings":[{"id":1,"type":"include","url":"http:\/\/google.de","url_type":"simple"},{"id":2,"type":"include","url":"http:\/\/google.de","url_type":"simple"},{"id":3,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":4,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":5,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":6,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":7,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":8,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":9,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":10,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":11,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":12,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":13,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"}]},{"id":67848484,"name":"Step 2","rules_js":"","pivot":{"experiment_id":49616615,"page_id":67848484},"urltargetings":[{"id":14,"type":"include","url":"http:\/\/local.test.abpro.io\/step_2.php","url_type":"simple"}]}],"goals":[{"id":80660831,"type":"pageview","counting_method":"every","css_selector":null,"name":"Visited Index","api_name":null,"rules_js":null,"pivot":{"experiment_id":49616615,"goal_id":80660831},"page":{"id":59968434,"name":"Index","rules_js":"return window.testVar;","urltargetings":[{"id":1,"type":"include","url":"http:\/\/google.de","url_type":"simple"},{"id":2,"type":"include","url":"http:\/\/google.de","url_type":"simple"},{"id":3,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":4,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":5,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":6,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":7,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":8,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":9,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":10,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":11,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":12,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":13,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"}]}},{"id":63125054,"type":"click","counting_method":"every","css_selector":".pricing-header > h1","name":"Click on Headline","api_name":null,"rules_js":null,"pivot":{"experiment_id":49616615,"goal_id":63125054},"page":{"id":59968434,"name":"Index","rules_js":"return window.testVar;","urltargetings":[{"id":1,"type":"include","url":"http:\/\/google.de","url_type":"simple"},{"id":2,"type":"include","url":"http:\/\/google.de","url_type":"simple"},{"id":3,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":4,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":5,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":6,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":7,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":8,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":9,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":10,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":11,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":12,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":13,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"}]}},{"id":39474237,"type":"click","counting_method":"every","css_selector":"#linkStep2","name":"Click Link \"Step 2\"","api_name":null,"rules_js":null,"pivot":{"experiment_id":49616615,"goal_id":39474237},"page":{"id":59968434,"name":"Index","rules_js":"return window.testVar;","urltargetings":[{"id":1,"type":"include","url":"http:\/\/google.de","url_type":"simple"},{"id":2,"type":"include","url":"http:\/\/google.de","url_type":"simple"},{"id":3,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":4,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":5,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":6,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":7,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":8,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":9,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":10,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":11,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":12,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"},{"id":13,"type":"include","url":"http:\/\/local.test.abpro.io\/","url_type":"simple"}]}},{"id":61892330,"type":"pageview","counting_method":"every","css_selector":null,"name":"Visited Step 2","api_name":null,"rules_js":null,"pivot":{"experiment_id":49616615,"goal_id":61892330},"page":{"id":67848484,"name":"Step 2","rules_js":"","urltargetings":[{"id":14,"type":"include","url":"http:\/\/local.test.abpro.io\/step_2.php","url_type":"simple"}]}},{"id":99350290,"type":"custom","counting_method":"every","css_selector":null,"name":"Test Custom Goal","api_name":"test-custom-goal","rules_js":null,"pivot":{"experiment_id":49616615,"goal_id":99350290},"page":null}],"project":{"id":22732137,"name":"companywithbrain.com","debug":1,"adhere_dnt":0,"max_cookie_lifetime":365,"jquery_include":"3.3.1_slim","snippet_location":"eu-central-1","use_antiflicker":0,"snippet_revision":566,"js":"\/\/window.$(function() {\r\n\/\/\talert(\"JS ready\");\r\n\/\/})\r\n\/\/https:\/\/s3.eu-central-1.amazonaws.com\/assets.abpro.io\/22732137\/oQGOAxJacpXlZykd7RIQAVH0DZjJiHV07cFu9Adv.png","css":"body{\r\n\tborder: 5px solid green;\r\n}"}}],"custom_integrations":[],"default_integrations":[{"id":4,"name":"Webtrekk","help_url":"https:\/\/support.webtrekk.com\/hc\/de\/article_attachments\/115007805409\/Webtrekk-Implementation-Guidelines-v6-EN.PDF","logo":"webtrekk.png","used_hook":"experimentViewed","js":"window._ti = window._ti || {};\r\nwindow._ti['contentGroup'] = {\r\n\t1: experimentName,\r\n\t2: variationName\r\n};","pivot":{"project_id":22732137,"default_integration_id":4}},{"id":5,"name":"ContentSquare","help_url":"https:\/\/docs.contentsquare.com\/uxa-en\/#sending-custom-vars","logo":"contentsquare.png","used_hook":"experimentViewed","js":"window._uxa = window._uxa || [];\r\nwindow._uxa.push(['setCustomVariable', 20, experimentName, variationName]);","pivot":{"project_id":22732137,"default_integration_id":5}}]});

    EventQueue.init();
    
    Api.init();
    
    Script.main = function(){

	    // User - - - - - - - - - -
	    
	    User.init();
	
	    
	    // Project - - - - - - - - - -
	    
	    Project.init( Script.getProjectData() );
	    
	    Project.data.experiments.forEach(function(experiment){
	    	
			// Experiment - - - - - - - - - -
	
	  		var experiment = new Experiment(experiment);
	  		
	  		//Preview
	  		var previewVariationId = Script.getVariationIdToPreviewByExperiment(experiment);
	  		
	  		//Apply Goals
	  		System.log('info', 1, 'Initiated GOALS APPLICATION');
		  	experiment.applyGoals();
	
	  		System.log('info', 1, 'Initiated PAGES LOOKUP');
	  		
	  		Tools.poll(
	  			function(){
	  				
		  			//Do Pages match?
			        var pagesPassed = experiment.pagesPassed();
			        return pagesPassed;
			        
	  			}, 
	  			function(){
	  				
	  				System.log('info', 1, 'Initiated AUDIENCE LOOKUP');
	  				
	  				Tools.poll(
	  					function(){
	  			  				
	  						// Audiences - - - - - - - - - -
	  						
	  						//Preview
	  						if(previewVariationId){
	  							return true;
	  						}
	  						
	  						//Do Audiences match?
	  						var audiencesPassed = experiment.audiencesPassed();
	  						return audiencesPassed;
	  					        
	  			  		}, 
	  			  		function(){
	  				
	  			  			// Bucketing / Traffic Allocation - - - - - - - - - -
	  			  			
	  			  			//Check if user is allready in this Experiment
	  						var variationId = User.getVariationIdOfExperimemt(experiment);	
	  						
	  						//Preview
	  						if(previewVariationId){
	  							variationId = previewVariationId;
	  						}
	  						
	  						//First run: No Variation ID set
	  						var newBucketing = false;
	  						if(variationId === false){
	  							//Does Experiment Traffic Allocation match?
	  							var expTrafficAllocationPassed = experiment.trafficAllocationPassed();
	  					  		if(!expTrafficAllocationPassed){
	  					  			variationId = 0;
	  					  		}
	  					  		else{
	  					  			//Dice out Variation
		  					  		variationId = experiment.chooseVariation();	
	  					  		}
	  					  		//Set Experiment/Variation to User
	  					  		newBucketing = true;
	  							User.setExperimentToBucket(experiment.data.id, variationId);
	  							//Step further Step
	  							if(!expTrafficAllocationPassed){
	  					  			return;
	  					  		}
	  						}
	  						//User excluded to due Experiment Traffic Allocation
	  						else if(variationId === 0){
	  							return;
	  						}
	  				
	  				  		//Run Code
	  				  		experiment.runCodes();

	  				  		
	  				  		// Variation - - - - - - - - - -

	  						var variation = new Variation( experiment.getVariationData(variationId) );
	  				
	  						//Run Code
	  						variation.runCodes();
	  						
	  						
	  						// Integrations: Default - - - - - - - - - -
	  						
	  						var defaultIntegrations = Script.projectData.default_integrations;

	  						//IntegrationDefault: userBucketed
	  						if(newBucketing){
	  			    	    	for(var index in defaultIntegrations){
	  			    				var integration = new Integration(defaultIntegrations[index]);
	  			    				if(integration.data.used_hook !== 'userBucketed'){ 
	  			    					continue;
	  			    				}
	  			    				integration.run(Project, experiment, variation);
	  			    			}
	  						}
	  						//IntegrationDefault: experimentViewed
	  						for(var index in defaultIntegrations){
  			    				var integration = new Integration(defaultIntegrations[index]);
  			    				if(integration.data.used_hook !== 'experimentViewed'){ 
  			    					continue;
  			    				}
  			    				integration.run(Project, experiment, variation);
  			    			}
	  						
	  						
	  						// Integrations: Custom - - - - - - - - - -
	  						
	  						var customIntegrations = Script.projectData.custom_integrations;

	  						//IntegrationCustom: userBucketed
	  						if(newBucketing){
	  			    	    	for(var index in customIntegrations){
	  			    				var integration = new Integration(customIntegrations[index]);
	  			    				if(integration.data.used_hook !== 'userBucketed'){ 
	  			    					continue;
	  			    				}
	  			    				integration.run(Project, experiment, variation);
	  			    			}
	  						}
	  						//IntegrationCustom: experimentViewed
	  						for(var index in customIntegrations){
  			    				var integration = new Integration(customIntegrations[index]);
  			    				if(integration.data.used_hook !== 'experimentViewed'){ 
  			    					continue;
  			    				}
  			    				integration.run(Project, experiment, variation);
  			    			}

	  						
	  			  		}
	  				);
			        
	  			}
	  		);
	  		
		});
	    
	};
	
	Script.run();

})();
