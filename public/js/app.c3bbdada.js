(function(e){function t(t){for(var a,r,s=t[0],i=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-094751cc":"ca6a24b0","chunk-2d0abf9e":"ed073cf7","chunk-2d0b2949":"56e5bae0","chunk-2d0be6fd":"8ba1ae98","chunk-2d0e88a2":"22a13617","chunk-2d20f6dd":"b48eb304","chunk-2d238a36":"635f27b2","chunk-341d5c4a":"969582ef","chunk-34221888":"96228bc4","chunk-394ed1d3":"0e7f0638","chunk-6767418a":"7ff975a8","chunk-94b48ad8":"18829e33","chunk-2d0b6c8d":"52db2fb2","chunk-2d0be308":"9104377c","chunk-2d0be333":"7eda6b61","chunk-2d0c8824":"e6d635a9","chunk-2d0d0f9a":"7179c1a0","chunk-2d0d659d":"164d0e14","chunk-441d9384":"a214e904","chunk-4fb3d8f4":"0aeadc07","chunk-5c4398fc":"4de40728","chunk-675de13e":"3bb10e25","chunk-9bf564fe":"7338b945","chunk-2d0c1d49":"e85c5de6","chunk-2d0c9709":"a3f6e7cd","chunk-2d20f579":"fe9955ac"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-094751cc":1,"chunk-394ed1d3":1,"chunk-6767418a":1,"chunk-94b48ad8":1,"chunk-4fb3d8f4":1,"chunk-5c4398fc":1,"chunk-675de13e":1,"chunk-9bf564fe":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-094751cc":"cecf4c83","chunk-2d0abf9e":"31d6cfe0","chunk-2d0b2949":"31d6cfe0","chunk-2d0be6fd":"31d6cfe0","chunk-2d0e88a2":"31d6cfe0","chunk-2d20f6dd":"31d6cfe0","chunk-2d238a36":"31d6cfe0","chunk-341d5c4a":"31d6cfe0","chunk-34221888":"31d6cfe0","chunk-394ed1d3":"457609c4","chunk-6767418a":"c7af056b","chunk-94b48ad8":"af4d387b","chunk-2d0b6c8d":"31d6cfe0","chunk-2d0be308":"31d6cfe0","chunk-2d0be333":"31d6cfe0","chunk-2d0c8824":"31d6cfe0","chunk-2d0d0f9a":"31d6cfe0","chunk-2d0d659d":"31d6cfe0","chunk-441d9384":"31d6cfe0","chunk-4fb3d8f4":"9357cc44","chunk-5c4398fc":"a8cdaeae","chunk-675de13e":"9d21c0d7","chunk-9bf564fe":"02f4bc24","chunk-2d0c1d49":"31d6cfe0","chunk-2d0c9709":"31d6cfe0","chunk-2d20f579":"31d6cfe0"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"20e2":function(e){e.exports=JSON.parse('[{"title":"Dashboard","icon":"fas fa-tachometer-alt","path":"/admin/dashboard"},{"title":"Announcements","icon":"fas fa-bullhorn","path":"/admin/announcements"},{"title":"Encashments","icon":"fas fa-money-check","path":"/admin/encashments"},{"title":"Package Codes","icon":"fas fa-cubes","path":"/admin/package-codes"},{"title":"Fund Allocation","icon":"fas fa-money-check","path":"/admin/fund-allocation"},{"title":"Tickets","icon":"fas fa-ticket-alt","path":"/admin/tickets"},{"title":"Monthly Qualifiers","icon":"fas fa-medal","path":"/admin/monthly-qualifiers"},{"title":"Monthly Reports","icon":"fas fa-scroll","path":"/admin/monthly-reports"},{"title":"Users","icon":"fas fa-user","path":"/admin/users"}]')},"2c10":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",[n("v-row",{staticStyle:{height:"100vh"},attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-progress-circular",{attrs:{size:100,width:7,color:"primary",indeterminate:""}})],1)],1)],1)],1)},r=[],c=n("2877"),o=n("6544"),s=n.n(o),i=n("62ad"),l=n("a523"),u=n("490a"),d=n("0fd9"),f={},b=Object(c["a"])(f,a,r,!1,null,null,null);t["a"]=b.exports;s()(b,{VCol:i["a"],VContainer:l["a"],VProgressCircular:u["a"],VRow:d["a"]})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"557b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.mounting?n("page-loading"):[e.login?[n("navigation",{model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),n("v-app-bar",{staticClass:"black",attrs:{app:"",dark:"","clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"d-flex"},[n("v-img",{staticClass:"mr-2",attrs:{src:"/logo.png",width:"30",height:"30"}}),e._v(" Magnifiscent500 ")],1),n("v-spacer"),"User"===e.profile.role.name?n("v-badge",{staticClass:"mr-4",attrs:{content:e.profile.unread_notifications,value:e.profile.unread_notifications,color:"red",overlap:""}},[n("v-icon",[e._v(" fas fa-bell ")])],1):e._e(),n("v-menu",{attrs:{bottom:"",origin:"center center",transition:"scale-transition","offset-y":!0,"nudge-bottom":"10","min-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticClass:"ml-2 elevation-0",attrs:{fab:"",small:""}},a),[n("v-avatar",{class:e.roleColor(e.profile.role.name),attrs:{size:"35"}},[e.profile.first_name&&!e.profile.avatar?n("span",{staticClass:"white--text text-button"},[e._v(" "+e._s(e.profile.first_name.substr(0,1)+e.profile.last_name.substr(0,1))+" ")]):n("img",{class:e.borderColorByRole(e.profile.role.name),attrs:{alt:"avatar",src:e.profile.avatar}})])],1)]}}],null,!1,391647088)},[n("v-card",{staticClass:"elevation-0 pa-0",attrs:{dark:""}},[n("v-card-text",{staticClass:"pa-0"},[n("v-list",{attrs:{dense:"",rounded:""}},[n("v-list-item",{attrs:{to:"/profile",link:"","active-class":"custom-yellow"}},[n("v-list-item-action",[n("v-icon",{staticStyle:{"font-size":"20px"}},[e._v("fas fa-user-circle")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-left",staticStyle:{"font-size":"14px"}},[e._v(" Profile ")])],1)],1),n("v-list-item",{attrs:{link:"","active-class":"primary white--text"},on:{click:function(t){return e.logOut()}}},[n("v-list-item-action",[n("v-icon",{staticStyle:{"font-size":"20px"}},[e._v("fas fa-sign-out-alt")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-left",staticStyle:{"font-size":"14px"}},[e._v(" Log Out ")])],1)],1)],1)],1)],1)],1)],1)]:e._e(),n("v-main",{staticClass:"grey darken-3"},[n("v-container",{staticClass:"h-full",attrs:{fluid:""}},[n("router-view")],1)],1),n("v-snackbar",{attrs:{timeout:e.snackbarTimeout,top:"",right:""},scopedSlots:e._u([{key:"default",fn:function(){return[n("div",{staticClass:"py-2 pl-2 d-flex align-center"},[n("div",{staticClass:"pr-2"},[n("v-icon",{attrs:{large:"",color:e.snackbarType}},[e._v(" fas "+e._s("success"===e.snackbarType?"fa-smile-beam":"fa-frown")+" ")])],1),n("div",[e._v(e._s(e.snackbarText))])])]},proxy:!0},{key:"action",fn:function(t){var a=t.attrs;return[n("div",{staticClass:"pa-2"},[n("v-btn",e._b({attrs:{color:"primary",text:"",fab:"",small:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",a,!1),[n("v-icon",{attrs:{small:""}},[e._v("fas fa-times")])],1)],1)]}}],null,!1,1973589341),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}})]],2)},c=[],o=(n("4160"),n("d3b7"),n("159b"),n("ddb0"),n("96cf"),n("1da1")),s=n("5530"),i=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.profile&&e.profile.role?n("v-navigation-drawer",{staticClass:"grey darken-4",attrs:{app:"",dark:"",clipped:""},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}},[n("div",{staticClass:"w-full h-full"},[n("div",{staticClass:"w-full h-full"},[n("v-divider"),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title text-center"},[e._v(" "+e._s(e.profile.full_name)+" ")]),n("v-list-item-subtitle",{staticClass:"text-center text-button",class:e.roleColor(e.profile.role.name,!0)},[e._v(" "+e._s(e.profile.role.name)+" ")])],1)],1),"User"===e.profile.role.name?[n("v-divider"),n("v-list-item",[n("v-list-item-content",[n("v-autocomplete",{staticClass:"remove-error-message-slot",attrs:{items:e.accounts,"prepend-inner-icon":"fas fa-user","item-text":"name",label:"Account","return-object":"",dense:"",outlined:""},model:{value:e.selectedAccountModel,callback:function(t){e.selectedAccountModel=t},expression:"selectedAccountModel"}})],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-btn",{staticClass:"primary black--text",attrs:{disabled:!e.selectedAccountModel,block:""},on:{click:function(t){return e.showReferral()}}},[e._v(" Referral Link ")]),n("v-btn",{staticClass:"primary black--text mt-2",attrs:{block:""},on:{click:function(t){e.addAccountDialog=!0}}},[e._v(" Add Account ")])],1)],1)]:e._e(),n("v-divider"),n("v-list",{staticClass:"mt-5",attrs:{dense:"",nav:"",rounded:"",dark:""}},e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.path,"active-class":"custom-yellow"},on:{click:function(n){t.middleware?e.call(t.middleware,t.path):e.goTo(t.path)}}},[n("v-list-item-icon",[n("v-icon",{attrs:{small:""}},[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],2)]),n("v-dialog",{attrs:{"max-width":"500","overlay-opacity":"0.6","overlay-color":"grey"},model:{value:e.showReferralDialog,callback:function(t){e.showReferralDialog=t},expression:"showReferralDialog"}},[n("v-card",{attrs:{dark:""}},[n("v-card-title",{staticClass:"headline primary--text"},[e._v("Referral Link")]),n("v-card-text",{staticClass:"py-6",attrs:{id:"copy-code"}},[n("v-text-field",{attrs:{outlined:"",readonly:"",label:"Referral Link",type:"text"},scopedSlots:e._u([{key:"append-outer",fn:function(){return[n("v-tooltip",{attrs:{value:e.showCodeTooltip,top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.attrs;return[n("v-btn",e._b({staticClass:"primary black--text",staticStyle:{"margin-top":"-17px",height:"55px"},on:{click:e.copyCode}},"v-btn",a,!1),[e._v("Copy")])]}}],null,!1,2584721003)},[n("span",[e._v("Referral Link Copied !")])])]},proxy:!0}],null,!1,2465572578),model:{value:e.referralLink,callback:function(t){e.referralLink=t},expression:"referralLink"}},[n("div",{attrs:{id:"copy-code"}})])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.showReferralDialog=!1}}},[n("b",[e._v("Close")])])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500","overlay-opacity":"0.6",persistent:"","overlay-color":"grey"},model:{value:e.addAccountDialog,callback:function(t){e.addAccountDialog=t},expression:"addAccountDialog"}},[n("v-form",{ref:"addAccountForm",attrs:{lazy:""},on:{submit:function(t){return t.preventDefault(),e.addAccount(t)}}},[n("v-card",{attrs:{dark:""}},[n("v-card-title",{staticClass:"headline primary--text"},[e._v("Add Account")]),n("v-card-text",{staticClass:"py-6",attrs:{id:"copy-code"}},[n("v-row",[e.selectedAccountModel?n("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[n("v-select",{attrs:{value:e.selectedAccountModel,"prepend-inner-icon":"fas fa-user","item-text":"name",readonly:"",items:e.accounts,label:"Referrer","return-object":"",dense:"",outlined:""}})],1):e._e(),n("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Package Code",outlined:"",flat:"",dense:"","prepend-inner-icon":"fas fa-user",error:!!e.errors.package_code,"error-messages":e.errors.package_code?e.errors.package_code:[],rules:[function(e){return!!e||"Package Code is required."}]},model:{value:e.addAccountForm.package_code,callback:function(t){e.$set(e.addAccountForm,"package_code",t)},expression:"addAccountForm.package_code"}})],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:"",disabled:e.submitting},on:{click:e.resetAddAccount}},[n("b",[e._v("Close")])]),n("v-btn",{attrs:{color:"primary",text:"",loading:e.submitting,disabled:e.submitting,type:"submit"}},[n("b",[e._v("Save")])])],1)],1)],1)],1)],1):e._e()},u=[],d=n("20e2"),f=n("f692"),b=n("9cad"),m={props:{value:{type:Boolean,required:!1}},data:function(){return{adminItems:d,sellerItems:f,userItems:b,showCodeTooltip:!1,showReferralDialog:!1,referralLink:"",addAccountDialog:!1,addAccountForm:{},errors:{},submitting:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(i["b"])({profile:"profile",role:"role",accounts:"accounts",selectedAccount:"selectedAccount"})),{},{items:function(){switch(this.role){case"Admin":return this.adminItems;case"Seller":return this.sellerItems;default:return this.userItems}},inputValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},selectedAccountModel:{get:function(){return this.selectedAccount},set:function(e){this.$cookies.set("account",e),this.$store.commit("setSelectedAccount",e)}}}),methods:{showReferral:function(){this.referralLink=window.location.origin+"/register/"+this.selectedAccount.code,this.showReferralDialog=!0},copyCode:function(){var e=this,t=document.createElement("textarea");t.value=this.referralLink,document.getElementById("copy-code").appendChild(t),t.select(),document.execCommand("Copy"),document.getElementById("copy-code").removeChild(t),this.showCodeTooltip=!0,setTimeout((function(){e.showCodeTooltip=!1}),1e3)},goTo:function(e){this.$route.path!==e&&this.$router.push(e)},call:function(e,t){this[e](t)},hasAccount:function(e){this.selectedAccount?this.goTo(e):this.showSnackbar("error","Please select an account.")},addAccount:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.addAccountForm.validate()){t.next=19;break}return t.prev=1,e.submitting=!0,e.addAccountForm.referrer_id=e.selectedAccountModel?e.selectedAccountModel.id:null,t.next=6,e.$axios.post("/user/accounts",e.addAccountForm);case 6:e.resetAddAccount(),e.showSnackbar("success","Account has been registered successfully."),e.$store.dispatch("getAccounts"),t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0),e.errors=t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:{},e.showSnackbar("error",t.t0.response?t.t0.response.data.message:t.t0.message);case 16:return t.prev=16,e.submitting=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,11,16,19]])})))()},resetAddAccount:function(){this.errors={},this.addAccountForm={},this.$refs.addAccountForm.resetValidation(),this.addAccountDialog=!1}}},h=m,p=(n("7c79"),n("2877")),k=n("6544"),v=n.n(k),g=n("c6a6"),j=n("8336"),y=n("b0af"),x=n("99d9"),w=n("62ad"),A=n("169a"),C=n("ce7e"),_=n("4bd4"),T=n("132d"),E=n("8860"),O=n("da13"),V=n("5d23"),P=n("34c3"),S=n("f774"),R=n("0fd9"),D=n("b974"),L=n("2fa4"),z=n("8654"),I=n("3a2f"),M=Object(p["a"])(h,l,u,!1,null,"03187fa3",null),$=M.exports;v()(M,{VAutocomplete:g["a"],VBtn:j["a"],VCard:y["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:w["a"],VDialog:A["a"],VDivider:C["a"],VForm:_["a"],VIcon:T["a"],VList:E["a"],VListItem:O["a"],VListItemContent:V["a"],VListItemIcon:P["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VNavigationDrawer:S["a"],VRow:R["a"],VSelect:D["a"],VSpacer:L["a"],VTextField:z["a"],VTooltip:I["a"]});var F=n("2c10"),B={name:"App",components:{Navigation:$,PageLoading:F["a"]},data:function(){return{drawer:null,mounting:!0}},computed:Object(s["a"])(Object(s["a"])({},Object(i["b"])({login:"login",profile:"profile",role:"role",snackbarText:"snackbarText",snackbarType:"snackbarType",snackbarTimeout:"snackbarTimeout"})),{},{snackbar:{get:function(){return this.$store.getters.snackbar},set:function(e){this.$store.commit("setSnackbar",e)}}}),mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.login){t.next=6;break}return t.next=3,e.getProfile();case 3:e.mounting=!1,t.next=7;break;case 6:e.mounting=!1;case 7:case"end":return t.stop()}}),t)})))()},methods:{logOut:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.post("/log-out");case 2:e.logOutClient();case 3:case"end":return t.stop()}}),t)})))()},logOutClient:function(){var e=this;this.$cookies.keys().forEach((function(t){return e.$cookies.remove(t)})),this.$store.commit("reset"),this.$router.push("/login")},getProfile:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("getProfile");case 3:if("User"!==e.role){t.next=6;break}return t.next=6,e.$store.dispatch("getAccounts");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.logOutClient();case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},N=B,U=(n("034f"),n("7496")),q=n("40dc"),J=n("5bc1"),Y=n("8212"),K=n("4ca6"),Q=n("a523"),H=n("adda"),G=n("1800"),W=n("f6c4"),X=n("e449"),Z=n("2db4"),ee=n("2a7f"),te=Object(p["a"])(N,r,c,!1,null,null,null),ne=te.exports;v()(te,{VApp:U["a"],VAppBar:q["a"],VAppBarNavIcon:J["a"],VAvatar:Y["a"],VBadge:K["a"],VBtn:j["a"],VCard:y["a"],VCardText:x["b"],VContainer:Q["a"],VIcon:T["a"],VImg:H["a"],VList:E["a"],VListItem:O["a"],VListItemAction:G["a"],VListItemContent:V["a"],VListItemTitle:V["c"],VMain:W["a"],VMenu:X["a"],VSnackbar:Z["a"],VSpacer:L["a"],VToolbarTitle:ee["a"]});n("b680"),n("ac1f"),n("25f0"),n("5319"),n("7db0"),n("b0c0");var ae,re=n("ade3");a["a"].use(i["a"]);var ce=new i["a"].Store({state:(ae={profile:{},profileDialog:!1,login:!1,snackbar:!1,text:"",timeout:0,role:"",snackbarText:"",snackbarType:"",snackbarTimeoutDefault:2500,snackbarTimeout:1},Object(re["a"])(ae,"role",""),Object(re["a"])(ae,"accounts",[]),Object(re["a"])(ae,"selectedAccount",{}),Object(re["a"])(ae,"itemsPerPageOptions",[10,25,50,100]),Object(re["a"])(ae,"adminFee",25),Object(re["a"])(ae,"tax",10),Object(re["a"])(ae,"minimumEncashment",200),Object(re["a"])(ae,"tableOfExits",[{name:"Table 1",level:1,value:2e3},{name:"Table 2",level:2,value:5e3},{name:"Table 3",level:3,value:1e4},{name:"Table 4",level:4,value:25e3},{name:"Table 5",level:5,value:5e4}]),ae),getters:{login:function(e){return e.login},snackbar:function(e){return e.snackbar},snackbarText:function(e){return e.snackbarText},snackbarType:function(e){return e.snackbarType},snackbarTimeout:function(e){return e.snackbarTimeout},timeout:function(e){return e.timeout},profile:function(e){return e.profile},profileDialog:function(e){return e.profileDialog},role:function(e){return e.role},accounts:function(e){return e.accounts},selectedAccount:function(e){return e.selectedAccount},itemsPerPageOptions:function(e){return e.itemsPerPageOptions},adminFee:function(e){return e.adminFee},tax:function(e){return e.tax},minimumEncashment:function(e){return e.minimumEncashment},tableOfExits:function(e){return e.tableOfExits}},mutations:{setLogIn:function(e,t){e.login=t},setRole:function(e,t){e.role=t},setSnackbar:function(e,t){e.snackbar=t.value,e.snackbarType=t.type,e.snackbarText=t.text,e.snackbarTimeout=t.timeout?t.timeout:e.snackbarTimeoutDefault},setSelectedAccount:function(e,t){e.selectedAccount=t},reset:function(e){e.role="",e.profile={},e.login=!1}},actions:{getProfile:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,n=e.state,t.next=3,window.axios.get("/profile/info");case 3:return a=t.sent,r=a.data.data,n.profile=r,n.role=r.role.name,n.login=!0,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})))()},getAccounts:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,n=e.state,t.next=3,window.axios.get("/user/accounts",{params:{order_by:"name",order_desc:0}});case 3:return a=t.sent,r=a.data.data,n.accounts=r,n.selectedAccount?(c=r.find((function(e){var t=e.id;return t===n.selectedAccount.id})),n.selectedAccount=c):n.selectedAccount=r.length>0?r[0]:{},t.abrupt("return",n.selectedAccount);case 8:case"end":return t.stop()}}),t)})))()}}}),oe=n("c1df"),se=n.n(oe),ie={methods:{showSnackbar:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;ce.commit("setSnackbar",{value:!0,type:e,text:t,timeout:n})},roleColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(e){case"Admin":return t?"primary--text":"primary black--text";case"Seller":return t?"blue--text":"blue white--text";default:return t?"success--text":"success white--text"}},borderColorByRole:function(e){switch(e){case"Admin":return"border primary--border";case"Seller":return"border blue--border";default:return"border success--border"}},ticketStatusColor:function(e){switch(e){case"pending":return"primary black--text";case"active":return"success white--text";default:return"secondary"}},date:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm:ss",n=e?se()(e):se()();return n.format(t)},money:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t+parseFloat(e).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},le=n("f309");n("becf");a["a"].use(le["a"]);var ue=new le["a"]({icons:{iconfont:"fa"},theme:{dark:!0,themes:{dark:{primary:"#FBC02D"}}}}),de=n("8c4f"),fe=function(e){document.title=e?"Magnifiscent500 — "+e:"Magnifiscent500"},be=function(e,t,n){ce.getters.login?"Admin"===ce.getters.role?(fe(e.meta.title),n()):n(!1):n("/login")},me=function(e,t,n){ce.getters.login?(fe(e.meta.title),n()):n("/login")},he=function(e,t,n){if(ce.getters.login)switch(ce.getters.role){case"Admin":n("/admin/dashboard");break;case"Seller":n("/seller/dashboard");break;default:n("/user/dashboard");break}else n("/login")},pe=function(e,t,n){ce.getters.login?n(!1):(fe(e.meta.title),n())},ke=function(e,t,n){ce.getters.login?"Seller"===ce.getters.role?(fe(e.meta.title),n()):n(!1):n("/login")},ve=function(e,t,n){ce.getters.login?"User"===ce.getters.role?(fe(e.meta.title),n()):n(!1):n("/login")},ge=function(e,t,n){ce.getters.login?"User"===ce.getters.role&&null!==ce.getters.selectedAccount?(fe(e.meta.title),n()):n("/"):n("/login")};a["a"].use(de["a"]);var je=[{path:"*",name:"page-not-found",component:function(){return n.e("chunk-094751cc").then(n.bind(null,"bb99"))}},{path:"/",name:"gate",beforeEnter:he},{path:"/login",component:function(){return n.e("chunk-34221888").then(n.bind(null,"013f"))},meta:{title:"Login"},beforeEnter:pe},{path:"/profile",component:function(){return n.e("chunk-2d0be6fd").then(n.bind(null,"2ff9"))},meta:{title:"Profile"},beforeEnter:me},{path:"/register",component:function(){return n.e("chunk-341d5c4a").then(n.bind(null,"56b4"))},meta:{title:"Register"},beforeEnter:pe},{path:"/register/:referrer_code",component:function(){return n.e("chunk-341d5c4a").then(n.bind(null,"56b4"))},meta:{title:"Register"},beforeEnter:pe},{path:"/admin",component:{render:function(e){return e("router-view")}},children:[{path:"announcements",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0be333"),n.e("chunk-441d9384")]).then(n.bind(null,"3fbe"))},meta:{title:"Announcements"},beforeEnter:be},{path:"dashboard",component:function(){return n.e("chunk-2d0e88a2").then(n.bind(null,"8a69"))},meta:{title:"Dashboard"},beforeEnter:be},{path:"encashments",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0be333"),n.e("chunk-4fb3d8f4")]).then(n.bind(null,"ced6"))},meta:{title:"Encashments"},beforeEnter:be},{path:"fund-allocation",component:function(){return n.e("chunk-2d238a36").then(n.bind(null,"ffdd"))},meta:{title:"Fund Allocation"},beforeEnter:be},{path:"monthly-qualifiers",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0be333"),n.e("chunk-2d0d659d")]).then(n.bind(null,"71d1"))},meta:{title:"Monthly Qualifiers"},beforeEnter:be},{path:"monthly-reports",component:function(){return n.e("chunk-2d0b2949").then(n.bind(null,"255e"))},meta:{title:"Monthly Reports"},beforeEnter:be},{path:"package-codes",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0be333"),n.e("chunk-2d0c8824")]).then(n.bind(null,"54d3"))},meta:{title:"Package Codes"},beforeEnter:be},{path:"tickets",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0be333"),n.e("chunk-675de13e")]).then(n.bind(null,"2d4b"))},meta:{title:"Tickets"},beforeEnter:be},{path:"users",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0be333"),n.e("chunk-9bf564fe")]).then(n.bind(null,"dcef"))},meta:{title:"Users"},beforeEnter:be}]},{path:"/seller",component:{render:function(e){return e("router-view")}},children:[{path:"dashboard",component:function(){return n.e("chunk-2d0abf9e").then(n.bind(null,"1823"))},meta:{title:"Dashboard"},beforeEnter:ke},{path:"package-codes",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0be333"),n.e("chunk-2d0d0f9a")]).then(n.bind(null,"69ef"))},meta:{title:"Package Codes"},beforeEnter:ke}]},{path:"/settings",component:function(){return n.e("chunk-2d20f6dd").then(n.bind(null,"b41f"))},beforeEnter:me},{path:"/user",component:{render:function(e){return e("router-view")}},beforeEnter:ve,children:[{path:"account-summary",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0b6c8d")]).then(n.bind(null,"1f46"))},meta:{title:"Account Summary"},beforeEnter:ge},{path:"dashboard",component:function(){return n.e("chunk-394ed1d3").then(n.bind(null,"7b63"))},meta:{title:"Dashboard"},beforeEnter:ve},{path:"direct-referral",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0c1d49")]).then(n.bind(null,"485d"))},meta:{title:"Direct Referral"},beforeEnter:ge},{path:"encashments",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0c9709")]).then(n.bind(null,"58c3"))},meta:{title:"Encashments"},beforeEnter:ge},{path:"notification",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0be308")]).then(n.bind(null,"2ecb"))},meta:{title:"Notification"},beforeEnter:ve},{path:"table-of-exit",component:function(){return n.e("chunk-6767418a").then(n.bind(null,"a4f9"))},meta:{title:"Table Of Exit"},beforeEnter:ge},{path:"tickets",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d0be333"),n.e("chunk-5c4398fc")]).then(n.bind(null,"7473"))},meta:{title:"Tickets"},beforeEnter:ve},{path:"transaction",component:function(){return Promise.all([n.e("chunk-94b48ad8"),n.e("chunk-2d20f579")]).then(n.bind(null,"b2e8"))},meta:{title:"Transaction"},beforeEnter:ge}]}],ye=new de["a"]({mode:"history",routes:je}),xe=n("bc3a"),we=n.n(xe),Ae=n("2b27"),Ce=n.n(Ae);Ce.a.isKey("token")&&(we.a.defaults.headers.common["Authorization"]=Ce.a.get("token"),ce.commit("setRole",Ce.a.get("role")),ce.commit("setSelectedAccount",Ce.a.get("account")),ce.commit("setLogIn",!0));var _e=we.a.create({baseURL:"https://magnifiscent500.herokuapp.com/api"});Plugin.install=function(e){e.axios=_e,window.axios=_e,Object.defineProperties(e.prototype,{axios:{get:function(){return _e}},$axios:{get:function(){return _e}}})},a["a"].use(Plugin);Plugin;a["a"].use(Ce.a);n("557b");a["a"].mixin(ie),a["a"].config.productionTip=!1,new a["a"]({vuetify:ue,router:ye,store:ce,render:function(e){return e(ne)}}).$mount("#app")},"7c79":function(e,t,n){"use strict";n("db78")},"85ec":function(e,t,n){},"9cad":function(e){e.exports=JSON.parse('[{"title":"Dashboard","icon":"fas fa-tachometer-alt","path":"/user/dashboard"},{"title":"Direct Referral","icon":"fas fa-users","path":"/user/direct-referral","middleware":"hasAccount"},{"title":"Encashments","icon":"fas fa-money-check","path":"/user/encashments","middleware":"hasAccount"},{"title":"Table of Exit","icon":"fas fa-door-open","path":"/user/table-of-exit","middleware":"hasAccount"},{"title":"Transaction","icon":"fas fa-handshake","path":"/user/transaction","middleware":"hasAccount"},{"title":"Notification","icon":"far fa-bell","path":"/user/notification"},{"title":"Account Summary","icon":"fas fa-file-alt","path":"/user/account-summary","middleware":"hasAccount"},{"title":"Tickets","icon":"fas fa-ticket-alt","path":"/user/tickets"}]')},db78:function(e,t,n){},f692:function(e){e.exports=JSON.parse('[{"title":"Dashboard","icon":"fas fa-tachometer-alt","path":"/seller/dashboard"},{"title":"Package Codes","icon":"fas fa-cubes","path":"/seller/package-codes"}]')}});
//# sourceMappingURL=app.c3bbdada.js.map