(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],f=0,l=[];f<c.length;f++)o=c[f],a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0b6f64e4":"98ab511b","chunk-598f0a2c":"366453c2","chunk-b34294b4":"da99981f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0b6f64e4":1,"chunk-598f0a2c":1,"chunk-b34294b4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0b6f64e4":"37d798ff","chunk-598f0a2c":"a829de35","chunk-b34294b4":"8ffeb6a6"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"103b":function(e,t,n){"use strict";var r=n("27a2"),o=n.n(r);o.a},2464:function(e,t,n){},"27a2":function(e,t,n){},"3ad1":function(e,t,n){e.exports=n.p+"media/hq.688df786.mp3"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("heads"),r("menus"),r("transition",{attrs:{name:"route","enter-active-class":"animated flip"}},[r("router-view")],1),r("audio",{ref:"adio",attrs:{loop:"loop",controls:"controls"}},[r("source",{attrs:{src:n("3ad1"),type:"audio/mpeg"}}),e._v("Your browser does not support the audio tag.\n  ")])],1)},a=[],u={components:{heads:function(){return n.e("chunk-598f0a2c").then(n.bind(null,"9a67"))},menus:function(){return n.e("chunk-0b6f64e4").then(n.bind(null,"ac77"))}},mounted:function(){var e=this;setTimeout(function(){e.$refs.adio.play()},4e3)}},c=u,i=(n("7c55"),n("2877")),s=Object(i["a"])(c,o,a,!1,null,null,null),f=s.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"life"},[n("div",{staticClass:"item"},[n("div",[e._v("title")]),n("div",{staticClass:"content"},[e._v("很长的一段内容")])])])}],h={},v=h,m=(n("103b"),Object(i["a"])(v,d,p,!1,null,"e7cd6f7c",null)),b=m.exports;r["a"].use(l["a"]);var g=new l["a"]({routes:[{path:"/",name:"home",component:b},{path:"/life",component:function(e){return n.e("chunk-b34294b4").then(function(){var t=[n("cdc8")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}),y=n("2f62");r["a"].use(y["a"]);var k=new y["a"].Store({state:{},mutations:{},actions:{}});n("455b");r["a"].config.productionTip=!1,new r["a"]({router:g,store:k,render:function(e){return e(f)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var r=n("2464"),o=n.n(r);o.a}});
//# sourceMappingURL=app.a94a0b05.js.map