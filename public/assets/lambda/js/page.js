(self.webpackChunk=self.webpackChunk||[]).push([[683],{46295:(t,n,e)=>{let i=[{path:"/p/:menu_id",component:e(50657).Z,children:[{path:":sub_menu_id",component:e(42520).Z}]},{path:"/module/:module",component:e(47139).Z},{name:"Error",path:"/*",component:e(18533).Z}];const o=(t,n)=>{t.mixin({mounted(){this.$nextTick((()=>{this.$parent||this.$router.app.$router.addRoutes(i)}))}})};"undefined"!=typeof window&&window.Vue&&o(window.Vue)},67180:(t,n,e)=>{"use strict";e.d(n,{Z:()=>a});var i=e(94015),o=e.n(i),r=e(23645),s=e.n(r)()(o());s.push([t.id,"#notfound{position:relative;height:100vh}#notfound .notfound{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.notfound{max-width:520px;width:100%;line-height:1.4;text-align:center}.notfound .notfound-404{position:relative;height:200px;margin:0 auto 20px;z-index:-1}.notfound .notfound-404 h1{font-size:236px;font-weight:200;margin:0;left:50%;top:50%;transform:translate(-50%,-50%)}.notfound .notfound-404 h1,.notfound .notfound-404 h2{font-family:Montserrat,sans-serif;color:#211b19;text-transform:uppercase;position:absolute}.notfound .notfound-404 h2{font-size:28px;font-weight:400;background:#fff;padding:10px 5px;margin:auto;display:inline-block;bottom:0;left:0;right:0}.notfound a{font-family:Montserrat,sans-serif;display:inline-block;font-weight:700;text-decoration:none;color:#fff;text-transform:uppercase;padding:13px 23px;background:#007ae5;font-size:18px;transition:all .2s}.notfound a:hover{color:#007ae5;background:#211b19}@media only screen and (max-width:767px){.notfound .notfound-404 h1{font-size:148px}}@media only screen and (max-width:480px){.notfound .notfound-404{height:148px;margin:0 auto 10px}.notfound .notfound-404 h1{font-size:86px}.notfound .notfound-404 h2{font-size:16px}.notfound a{padding:7px 15px;font-size:14px}}","",{version:3,sources:["webpack://./node_modules/@lambda-platform/page/src/views/404.vue"],names:[],mappings:"AAgBA,UACA,iBAAA,CACA,YACA,CAEA,oBACA,iBAAA,CACA,QAAA,CACA,OAAA,CAGA,8BACA,CAEA,UACA,eAAA,CACA,UAAA,CACA,eAAA,CACA,iBACA,CAEA,wBACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,UACA,CAEA,2BAEA,eAAA,CACA,eAAA,CACA,QAAA,CAIA,QAAA,CACA,OAAA,CAGA,8BACA,CAEA,sDAdA,iCAAA,CAIA,aAAA,CACA,wBAAA,CACA,iBAsBA,CAdA,2BAEA,cAAA,CACA,eAAA,CAGA,eAAA,CACA,gBAAA,CACA,WAAA,CACA,oBAAA,CAEA,QAAA,CACA,MAAA,CACA,OACA,CAEA,YACA,iCAAA,CACA,oBAAA,CACA,eAAA,CACA,oBAAA,CACA,UAAA,CACA,wBAAA,CACA,iBAAA,CACA,kBAAA,CACA,cAAA,CAEA,kBACA,CAEA,kBACA,aAAA,CACA,kBACA,CAEA,yCACA,2BACA,eACA,CACA,CAEA,yCACA,wBACA,YAAA,CACA,kBACA,CACA,2BACA,cACA,CACA,2BACA,cACA,CACA,YACA,gBAAA,CACA,cACA,CACA",sourcesContent:["<template>\n    <div id=\"notfound\">\n        <div class=\"notfound\">\n            <div class=\"notfound-404\">\n                <h1>Oops!</h1>\n                <h2>404 - The Page can't be found</h2>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {}\n<\/script>\n<style>\n\n#notfound {\n    position: relative;\n    height: 100vh;\n}\n\n#notfound .notfound {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n}\n\n.notfound {\n    max-width: 520px;\n    width: 100%;\n    line-height: 1.4;\n    text-align: center;\n}\n\n.notfound .notfound-404 {\n    position: relative;\n    height: 200px;\n    margin: 0px auto 20px;\n    z-index: -1;\n}\n\n.notfound .notfound-404 h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 236px;\n    font-weight: 200;\n    margin: 0px;\n    color: #211b19;\n    text-transform: uppercase;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n}\n\n.notfound .notfound-404 h2 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 28px;\n    font-weight: 400;\n    text-transform: uppercase;\n    color: #211b19;\n    background: #fff;\n    padding: 10px 5px;\n    margin: auto;\n    display: inline-block;\n    position: absolute;\n    bottom: 0px;\n    left: 0;\n    right: 0;\n}\n\n.notfound a {\n    font-family: 'Montserrat', sans-serif;\n    display: inline-block;\n    font-weight: 700;\n    text-decoration: none;\n    color: #fff;\n    text-transform: uppercase;\n    padding: 13px 23px;\n    background: #007AE5;\n    font-size: 18px;\n    -webkit-transition: 0.2s all;\n    transition: 0.2s all;\n}\n\n.notfound a:hover {\n    color: #007AE5;\n    background: #211b19;\n}\n\n@media only screen and (max-width: 767px) {\n    .notfound .notfound-404 h1 {\n        font-size: 148px;\n    }\n}\n\n@media only screen and (max-width: 480px) {\n    .notfound .notfound-404 {\n        height: 148px;\n        margin: 0px auto 10px;\n    }\n    .notfound .notfound-404 h1 {\n        font-size: 86px;\n    }\n    .notfound .notfound-404 h2 {\n        font-size: 16px;\n    }\n    .notfound a {\n        padding: 7px 15px;\n        font-size: 14px;\n    }\n}\n</style>\n"],sourceRoot:""}]);const a=s},23645:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);i&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),n.push(u))}},n}},94015:t=>{"use strict";function n(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(e.push(s.value),!n||e.length!==n);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}t.exports=function(t){var e=n(t,4),i=e[1],o=e[3];if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(s," */"),u=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[i].concat(u).concat([a]).join("\n")}return[i].join("\n")}},93379:(t,n,e)=>{"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),s=[];function a(t){for(var n=-1,e=0;e<s.length;e++)if(s[e].identifier===t){n=e;break}return n}function u(t,n){for(var e={},i=[],o=0;o<t.length;o++){var r=t[o],u=n.base?r[0]+n.base:r[0],l=e[u]||0,d="".concat(u," ").concat(l);e[u]=l+1;var c=a(d),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==c?(s[c].references++,s[c].updater(p)):s.push({identifier:d,updater:m(p,n),references:1}),i.push(d)}return i}function l(t){var n=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=e.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){n.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(n);else{var s=r(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var d,c=(d=[],function(t,n){return d[t]=n,d.filter(Boolean).join("\n")});function p(t,n,e,i){var o=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=c(n,o);else{var r=document.createTextNode(o),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(r,s[n]):t.appendChild(r)}}function f(t,n,e){var i=e.css,o=e.media,r=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var A=null,h=0;function m(t,n){var e,i,o;if(n.singleton){var r=h++;e=A||(A=l(n)),i=p.bind(null,e,r,!1),o=p.bind(null,e,r,!0)}else e=l(n),i=f.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=u(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<e.length;i++){var o=a(e[i]);s[o].references--}for(var r=u(t,n),l=0;l<e.length;l++){var d=a(e[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}e=r}}}},18533:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});const i={};var o=e(93379),r=e.n(o),s=e(67180),a={insert:"head",singleton:!1};r()(s.Z,a);s.Z.locals;const u=(0,e(51900).Z)(i,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"notfound"}},[e("div",{staticClass:"notfound"},[e("div",{staticClass:"notfound-404"},[e("h1",[t._v("Oops!")]),t._v(" "),e("h2",[t._v("404 - The Page can't be found")])])])])}],!1,null,null,null).exports},50657:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});const i={data:()=>({options:{height:"1000px"},pageType:"",property:{template:"canvas",title:"",grid:null,form:null,form_width:800,view_url:null,actions:[],user_condition:null,permissions:{c:!1,r:!1,u:!1,d:!1}},iframeUrl:"",submenu:[],showSub:!1,menu:window.init.menu,cruds:window.init.cruds,permissions:window.init.permissions.permissions,pageTitle:""}),methods:{checkSub(){let t=this.menu.findIndex((t=>t.id==this.$route.params.menu_id));if(t>=0)if(this.menu[t].children.length>=1)if(this.pageTitle=this.getTitle(this.menu[t]),this.pageTitle=this.getTitle(this.menu[t]),this.$route.matched.length<=1){let n=this.getShowAbleChild(this.menu[t].children);n&&this.$router.push(`/p/${this.$route.params.menu_id}/${n.id}`)}else this.subMenu=this.menu[t].children,this.showSub=!0;else this.showSub=!1,this.getPage()},getShowAbleChild(t){let n=t.findIndex((t=>this.can(t)));return n>=0?t[n]:null},can(t){return!!this.permissions[t.id]&&!!this.permissions[t.id].show},getTitle(t){if("crud"==t.link_to){let n=this.cruds.findIndex((n=>n.id==t.url));return n>=0?this.cruds[n].title:""}return t.title},getPage(){let t=this.menu.findIndex((t=>t.id==this.$route.params.menu_id));if(t>=0){let n=this.menu[t];switch(this.pageType=n.link_to,this.pageType){case"crud":let e=this.cruds.findIndex((t=>t.id==n.url));if(e>=0){this.property.title=this.cruds[e].title,this.property.grid=this.cruds[e].grid,this.property.form=this.cruds[e].form,this.property.form_width=this.cruds[e].form_width?this.cruds[e].form_width:null,this.property.view_url=this.cruds[e].view_url,this.property.permissions.c=this.permissions[n.id].c,this.property.permissions.r=this.permissions[n.id].r,this.property.permissions.u=this.permissions[n.id].u,this.property.permissions.d=this.permissions[n.id].d;let t={};this.permissions[n.id].formCondition&&(t.formCondition=this.permissions[n.id].formCondition),this.permissions[n.id].gridCondition&&(t.gridCondition=this.permissions[n.id].gridCondition),t&&(this.property.user_condition=t)}break;case"link":window.location=this.menu[t].url;break;case"router-link":console.log(this.menu[t].url),this.$router.push(this.menu[t].url);break;case"iframe":this.iframeUrl=n.url}}}},mounted(){this.checkSub()}};const o=(0,e(51900).Z)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"page"},[t.showSub?e("router-view",{key:t.$route.path},[t.showSub?e("nav",{attrs:{slot:"v-nav"},slot:"v-nav"},[e("div",{staticClass:"card sub-nav-list"},[e("h3",{staticClass:"card-header"},[t._v(t._s(t.pageTitle))]),t._v(" "),e("ul",{staticClass:"card-body"},t._l(t.subMenu,(function(n,i){return t.can(n)?e("li",{key:i},["link"!=n.link_to?e("router-link",{attrs:{to:"/p/"+t.$route.params.menu_id+"/"+n.id}},[n.icon?e("i",{class:n.icon}):t._e(),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.getTitle(n))}})]):t._e(),t._v(" "),"link"==n.link_to?e("a",{attrs:{href:n.url,target:"_blank"}},[n.icon?e("i",{class:n.icon}):t._e(),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.getTitle(n))}})]):t._e()],1):t._e()})),0)])]):t._e()]):t._e(),t._v(" "),t.showSub?t._e():e("div",{class:"iframe"==t.pageType?"iframe-page":"sub-page"},["crud"==t.pageType?e("krud",{staticClass:"material",attrs:{template:t.property.template,property:t.property}},[e("user-control",{attrs:{slot:"right"},slot:"right"})],1):t._e(),t._v(" "),"iframe"==t.pageType?e("iframe",{attrs:{src:t.iframeUrl}}):t._e()],1)],1)}),[],!1,null,null,null).exports},47139:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i});const i=(0,e(51900).Z)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",["agent"==t.$route.params.module?e("agent",[e("user-control",{attrs:{slot:"user-control"},slot:"user-control"})],1):t._e(),t._v(" "),"profile"==t.$route.params.module?e("agent-form",{attrs:{type:"profile"}},[e("user-control",{attrs:{slot:"user-control"},slot:"user-control"})],1):t._e(),t._v(" "),"password"==t.$route.params.module?e("agent-form",{attrs:{type:"password"}},[e("user-control",{attrs:{slot:"user-control"},slot:"user-control"})],1):t._e(),t._v(" "),"notify"==t.$route.params.module?e("notif-list"):t._e(),t._v(" "),"logger"==t.$route.params.module?e("logger"):t._e()],1)}),[],!1,null,null,null).exports},42520:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});const i={data:()=>({pageType:"",menu:window.init.menu,cruds:window.init.cruds,permissions:window.init.permissions.permissions,property:{template:"canvas",title:"",grid:null,form:null,form_width:null,view_url:null,actions:[],user_condition:null,permissions:{c:!1,r:!1,u:!1,d:!1}},iframeUrl:""}),methods:{getPage(){let t=this.menu.findIndex((t=>t.id==this.$route.params.menu_id));if(t>=0){let n=this.menu[t].children.findIndex((t=>t.id==this.$route.params.sub_menu_id));if(n>=0){let e=this.menu[t].children[n];if(this.pageType=e.link_to,"crud"==this.pageType){let t=this.cruds.findIndex((t=>t.id==e.url));if(t>=0){this.property.title=this.cruds[t].title,this.property.grid=this.cruds[t].grid,this.property.form=this.cruds[t].form,this.property.form_width=this.cruds[t].form_width?this.cruds[t].form_width:null,this.property.view_url=this.cruds[t].view_url,this.property.permissions.c=this.permissions[e.id].c,this.property.permissions.r=this.permissions[e.id].r,this.property.permissions.u=this.permissions[e.id].u,this.property.permissions.d=this.permissions[e.id].d;let n={};this.permissions[e.id].formCondition&&(n.formCondition=this.permissions[e.id].formCondition),this.permissions[e.id].gridCondition&&(n.gridCondition=this.permissions[e.id].gridCondition),n&&(this.property.user_condition=n)}}else"iframe"==this.pageType&&(this.iframeUrl=e.url)}}}},mounted(){this.getPage()}};const o=(0,e(51900).Z)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:(t.pageType,"")},["crud"==t.pageType?e("krud",{staticClass:"material",attrs:{template:t.property.template,property:t.property}},[e("template",{slot:"nav"},[t._t("nav")],2),t._v(" "),e("template",{slot:"v-nav"},[t._t("v-nav")],2),t._v(" "),e("user-control",{attrs:{slot:"right"},slot:"right"})],2):t._e(),t._v(" "),"iframe"==t.pageType?e("div",{staticClass:"material"},[e("section",{staticClass:"offcanvas-template"},[e("div",{staticClass:"crud-page"},[t._m(0),t._v(" "),e("div",{staticClass:"crud-page-body"},[e("div",{staticClass:"v-nav"},[t._t("v-nav")],2),t._v(" "),e("div",{staticClass:"dg-flex"},[e("div",{staticClass:"iframe-page"},["iframe"==t.pageType?e("iframe",{attrs:{src:t.iframeUrl}}):t._e()])])])])])]):t._e()],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"crud-page-header"},[n("h3")])}],!1,null,null,null).exports},51900:(t,n,e)=>{"use strict";function i(t,n,e,i,o,r,s,a){var u,l="function"==typeof t?t.options:t;if(n&&(l.render=n,l.staticRenderFns=e,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):o&&(u=a?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var d=l.render;l.render=function(t,n){return u.call(n),d(t,n)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,u):[u]}return{exports:t,options:l}}e.d(n,{Z:()=>i})}},0,[[46295,245]]]);
//# sourceMappingURL=page.js.map