(function(e){function t(t){for(var a,r,i=t[0],s=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-17347c5d":"ad48b0d6","chunk-2d0abf9e":"8e09eecc","chunk-2d0b2949":"34ab2a20","chunk-2d0e88a2":"dad01494","chunk-2d20f6dd":"57f937b7","chunk-2d22c54d":"b858d1fd","chunk-2d238a36":"58cab41e","chunk-33f0cc4c":"5cdadb9d","chunk-33f40910":"0febcbfc","chunk-34221888":"51b763ac","chunk-394ed1d3":"8fd297fe","chunk-6767418a":"a63b0748","chunk-69498528":"a699efc5","chunk-2d0ab147":"3833f083","chunk-2d0b6c8d":"f1ddf216","chunk-2d0be308":"bfb53d4a","chunk-2d0be333":"7eda6b61","chunk-2d0c8824":"5f7f6e6c","chunk-2d0d0f9a":"12149314","chunk-2d0d659d":"7096e042","chunk-349a1c62":"a066125e","chunk-441d9384":"4368f9f8","chunk-5c4398fc":"3a76aed2","chunk-675de13e":"fb1d781b","chunk-c3623aa2":"bece14f5","chunk-2d0c1d49":"40321091","chunk-2d0c9709":"136f8ead","chunk-2d20f579":"95e97941","chunk-6d3ed37c":"b28cd2cb","chunk-75f71a00":"324e1517"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-17347c5d":1,"chunk-394ed1d3":1,"chunk-6767418a":1,"chunk-69498528":1,"chunk-349a1c62":1,"chunk-5c4398fc":1,"chunk-675de13e":1,"chunk-c3623aa2":1,"chunk-6d3ed37c":1,"chunk-75f71a00":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-17347c5d":"22e8163b","chunk-2d0abf9e":"31d6cfe0","chunk-2d0b2949":"31d6cfe0","chunk-2d0e88a2":"31d6cfe0","chunk-2d20f6dd":"31d6cfe0","chunk-2d22c54d":"31d6cfe0","chunk-2d238a36":"31d6cfe0","chunk-33f0cc4c":"31d6cfe0","chunk-33f40910":"31d6cfe0","chunk-34221888":"31d6cfe0","chunk-394ed1d3":"457609c4","chunk-6767418a":"c7af056b","chunk-69498528":"9de1674a","chunk-2d0ab147":"31d6cfe0","chunk-2d0b6c8d":"31d6cfe0","chunk-2d0be308":"31d6cfe0","chunk-2d0be333":"31d6cfe0","chunk-2d0c8824":"31d6cfe0","chunk-2d0d0f9a":"31d6cfe0","chunk-2d0d659d":"31d6cfe0","chunk-349a1c62":"1d2df076","chunk-441d9384":"31d6cfe0","chunk-5c4398fc":"a8cdaeae","chunk-675de13e":"9d21c0d7","chunk-c3623aa2":"692dc0c5","chunk-2d0c1d49":"31d6cfe0","chunk-2d0c9709":"31d6cfe0","chunk-2d20f579":"31d6cfe0","chunk-6d3ed37c":"76a811a3","chunk-75f71a00":"fd25dc4b"}[e]+".css",c=s.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"20e2":function(e){e.exports=JSON.parse('[{"title":"Dashboard","icon":"fas fa-tachometer-alt","path":"/admin/dashboard"},{"title":"Announcements","icon":"fas fa-bullhorn","path":"/admin/announcements"},{"title":"Encashments","icon":"fas fa-money-check","path":"/admin/encashments"},{"title":"Package Codes","icon":"fas fa-cubes","path":"/admin/package-codes"},{"title":"Fund Allocation","icon":"fas fa-money-check","path":"/admin/fund-allocation"},{"title":"Tickets","icon":"fas fa-ticket-alt","path":"/admin/tickets"},{"title":"Monthly Qualifiers","icon":"fas fa-medal","path":"/admin/monthly-qualifiers"},{"title":"Monthly Reports","icon":"fas fa-scroll","path":"/admin/monthly-reports"},{"title":"Users","icon":"fas fa-user","path":"/admin/users"}]')},"2c10":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",[n("v-row",{staticStyle:{height:"100vh"},attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-progress-circular",{attrs:{size:100,width:7,color:"primary",indeterminate:""}})],1)],1)],1)],1)},r=[],c=n("2877"),o=n("6544"),i=n.n(o),s=n("62ad"),l=n("a523"),u=n("490a"),d=n("0fd9"),f={},m=Object(c["a"])(f,a,r,!1,null,null,null);t["a"]=m.exports;i()(m,{VCol:s["a"],VContainer:l["a"],VProgressCircular:u["a"],VRow:d["a"]})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"47dc":function(e,t,n){},"557b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.mounting?n("page-loading"):[e.login?[n("navigation",{model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),n("v-app-bar",{staticClass:"black",attrs:{app:"",dark:"","clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"d-flex"},[n("v-img",{staticClass:"mr-2",attrs:{src:"/logo.png",width:"30",height:"30"}}),e._v(" Magnifiscent500 ")],1),n("v-spacer"),n("v-menu",{attrs:{bottom:"",origin:"center center",transition:"scale-transition","offset-y":!0,"nudge-bottom":"10","min-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return["User"===e.profile.role.name?n("v-badge",{staticClass:"mr-4",attrs:{content:e.totalUnreadNotifications,value:e.totalUnreadNotifications,color:"red",overlap:""}},[n("v-icon",e._g({},a),[e._v(" fas fa-bell ")])],1):e._e()]}}],null,!1,2296485643),model:{value:e.notification,callback:function(t){e.notification=t},expression:"notification"}},[n("v-card",{staticClass:"elevation-0 pa-0",attrs:{dark:""}},[n("v-card-text",{staticClass:"pa-0"},[n("v-list",{attrs:{dense:"",rounded:""}},[e._l(e.notifications,(function(t,a){return n("v-list-item",{key:a},[n("v-list-item-action",[n("v-icon",{staticStyle:{"font-size":"16px"}},[e._v("fas fa-gift")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-left",staticStyle:{"font-size":"14px"}},[e._v(" "+e._s(t.title)+" ")])],1)],1)})),e.notifications.length>0?n("v-list-item",{on:{click:e.goToNotificationPage}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-center cursor-pointer primary--text",staticStyle:{"font-size":"14px"}},[e._v(" Open Notifications ")])],1)],1):n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-center cursor-pointer primary--text",staticStyle:{"font-size":"14px"}},[e._v(" No available notifications ")])],1)],1)],2)],1)],1)],1),n("v-menu",{attrs:{bottom:"",origin:"center center",transition:"scale-transition","offset-y":!0,"nudge-bottom":"10","min-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticClass:"ml-2 elevation-0",attrs:{fab:"",small:""}},a),[n("v-avatar",{class:e.roleColor(e.profile.role.name),attrs:{size:"35"}},[e.profile.first_name&&!e.profile.avatar?n("span",{staticClass:"white--text text-button"},[e._v(" "+e._s(e.profile.first_name.substr(0,1)+e.profile.last_name.substr(0,1))+" ")]):n("img",{class:e.borderColorByRole(e.profile.role.name),attrs:{alt:"avatar",src:e.profile.avatar}})])],1)]}}],null,!1,391647088)},[n("v-card",{staticClass:"elevation-0 pa-0",attrs:{dark:""}},[n("v-card-text",{staticClass:"pa-0"},[n("v-list",{attrs:{dense:"",rounded:""}},[n("v-list-item",{attrs:{to:"/profile",link:"","active-class":"custom-yellow"}},[n("v-list-item-action",[n("v-icon",{staticStyle:{"font-size":"20px"}},[e._v("fas fa-user-circle")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-left",staticStyle:{"font-size":"14px"}},[e._v(" Profile ")])],1)],1),n("v-list-item",{attrs:{link:"","active-class":"primary white--text"},on:{click:function(t){return e.logOut()}}},[n("v-list-item-action",[n("v-icon",{staticStyle:{"font-size":"20px"}},[e._v("fas fa-sign-out-alt")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-left",staticStyle:{"font-size":"14px"}},[e._v(" Log Out ")])],1)],1)],1)],1)],1)],1)],1)]:e._e(),n("v-main",{staticClass:"grey darken-3"},[n("v-container",{staticClass:"h-full",attrs:{fluid:""}},[n("router-view")],1)],1),n("v-snackbar",{attrs:{timeout:e.snackbarTimeout,top:"",right:""},scopedSlots:e._u([{key:"default",fn:function(){return[n("div",{staticClass:"py-2 pl-2 d-flex align-center"},[n("div",{staticClass:"pr-2"},[n("v-icon",{attrs:{large:"",color:e.snackbarType}},[e._v(" fas "+e._s("success"===e.snackbarType?"fa-smile-beam":"fa-frown")+" ")])],1),n("div",[e._v(e._s(e.snackbarText))])])]},proxy:!0},{key:"action",fn:function(t){var a=t.attrs;return[n("div",{staticClass:"pa-2"},[n("v-btn",e._b({attrs:{color:"primary",text:"",fab:"",small:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",a,!1),[n("v-icon",{attrs:{small:""}},[e._v("fas fa-times")])],1)],1)]}}],null,!1,1973589341),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}})]],2)},c=[],o=(n("4160"),n("d3b7"),n("159b"),n("ddb0"),n("5530")),i=(n("96cf"),n("1da1")),s=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.profile&&e.profile.role?n("v-navigation-drawer",{staticClass:"grey darken-4",attrs:{app:"",dark:"",clipped:""},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}},[n("div",{staticClass:"w-full h-full"},[n("div",{staticClass:"w-full h-full"},[n("v-divider"),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title text-center"},[e._v(" "+e._s(e.profile.full_name)+" ")]),n("v-list-item-subtitle",{staticClass:"text-center text-button",class:e.roleColor(e.profile.role.name,!0)},[e._v(" "+e._s(e.profile.role.name)+" ")])],1)],1),"User"===e.profile.role.name?[n("v-divider"),n("v-list-item",[n("v-list-item-content",[n("v-autocomplete",{staticClass:"remove-error-message-slot",attrs:{items:e.accounts,"prepend-inner-icon":"fas fa-user","item-text":"name",label:"Account","return-object":"",dense:"",outlined:""},model:{value:e.selectedAccountModel,callback:function(t){e.selectedAccountModel=t},expression:"selectedAccountModel"}})],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-btn",{staticClass:"primary black--text",attrs:{disabled:!e.selectedAccountModel,block:""},on:{click:function(t){return e.showReferral()}}},[e._v(" Referral Link ")]),n("v-btn",{staticClass:"primary black--text mt-2",attrs:{block:""},on:{click:function(t){e.addAccountDialog=!0}}},[e._v(" Add Account ")])],1)],1)]:e._e(),n("v-divider"),n("v-list",{staticClass:"mt-5",attrs:{dense:"",nav:"",rounded:"",dark:""}},e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.path,disabled:!!t.middleware&&null===e.selectedAccount,"active-class":"custom-yellow"}},[n("v-list-item-icon",[n("v-icon",{attrs:{small:""}},[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],2)]),n("v-dialog",{attrs:{"max-width":"500","overlay-opacity":"0.6","overlay-color":"grey"},model:{value:e.showReferralDialog,callback:function(t){e.showReferralDialog=t},expression:"showReferralDialog"}},[n("v-card",{attrs:{dark:""}},[n("v-card-title",{staticClass:"headline primary--text"},[e._v("Referral Link")]),n("v-card-text",{staticClass:"py-6",attrs:{id:"copy-code"}},[n("v-text-field",{attrs:{outlined:"",readonly:"",label:"Referral Link",type:"text"},scopedSlots:e._u([{key:"append-outer",fn:function(){return[n("v-tooltip",{attrs:{value:e.showCodeTooltip,top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.attrs;return[n("v-btn",e._b({staticClass:"primary black--text",staticStyle:{"margin-top":"-17px",height:"55px"},on:{click:e.copyCode}},"v-btn",a,!1),[e._v("Copy")])]}}],null,!1,2584721003)},[n("span",[e._v("Referral Link Copied !")])])]},proxy:!0}],null,!1,2465572578),model:{value:e.referralLink,callback:function(t){e.referralLink=t},expression:"referralLink"}},[n("div",{attrs:{id:"copy-code"}})])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.showReferralDialog=!1}}},[n("b",[e._v("Close")])])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500","overlay-opacity":"0.6",persistent:"","overlay-color":"grey"},model:{value:e.addAccountDialog,callback:function(t){e.addAccountDialog=t},expression:"addAccountDialog"}},[n("v-form",{ref:"addAccountForm",attrs:{lazy:""},on:{submit:function(t){return t.preventDefault(),e.addAccount(t)}}},[n("v-card",{attrs:{dark:""}},[n("v-card-title",{staticClass:"headline primary--text"},[e._v("Add Account")]),n("v-card-text",{staticClass:"py-6",attrs:{id:"copy-code"}},[n("v-row",[e.selectedAccountModel?n("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[n("v-select",{attrs:{value:e.selectedAccountModel,items:e.accounts,"prepend-inner-icon":"fas fa-user","item-text":"name",readonly:"",label:"Referrer","return-object":"",dense:"",outlined:""}})],1):e._e(),n("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Package Code",outlined:"",flat:"",dense:"","prepend-inner-icon":"fas fa-user",error:!!e.errors.package_code,"error-messages":e.errors.package_code?e.errors.package_code:[],rules:[function(e){return!!e||"Package Code is required."}]},model:{value:e.addAccountForm.package_code,callback:function(t){e.$set(e.addAccountForm,"package_code",t)},expression:"addAccountForm.package_code"}})],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:"",disabled:e.submitting},on:{click:e.resetAddAccount}},[n("b",[e._v("Close")])]),n("v-btn",{attrs:{color:"primary",text:"",loading:e.submitting,disabled:e.submitting,type:"submit"}},[n("b",[e._v("Save")])])],1)],1)],1)],1)],1):e._e()},u=[],d=n("20e2"),f=n("f692"),m=n("9cad"),b={props:{value:{type:Boolean,required:!1}},data:function(){return{adminItems:d,sellerItems:f,userItems:m,showCodeTooltip:!1,showReferralDialog:!1,referralLink:"",addAccountDialog:!1,addAccountForm:{},errors:{},submitting:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(s["b"])({profile:"profile",role:"role",accounts:"accounts",selectedAccount:"selectedAccount"})),{},{items:function(){switch(this.role){case"Admin":return this.adminItems;case"Seller":return this.sellerItems;default:return this.userItems}},inputValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},selectedAccountModel:{get:function(){return this.selectedAccount},set:function(e){this.$cookies.set("account",e),this.$store.commit("setSelectedAccount",e)}}}),methods:{showReferral:function(){this.referralLink=window.location.origin+"/register/"+this.selectedAccount.code,this.showReferralDialog=!0},copyCode:function(){var e=this,t=document.createElement("textarea");t.value=this.referralLink,document.getElementById("copy-code").appendChild(t),t.select(),document.execCommand("Copy"),document.getElementById("copy-code").removeChild(t),this.showCodeTooltip=!0,setTimeout((function(){e.showCodeTooltip=!1}),1e3)},goTo:function(e){this.$route.path!==e&&this.$router.push(e)},call:function(e,t){this[e](t)},addAccount:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.addAccountForm.validate()){t.next=18;break}return t.prev=1,e.submitting=!0,e.addAccountForm.referrer_id=e.selectedAccountModel?e.selectedAccountModel.id:null,t.next=6,e.$axios.post("/user/accounts",e.addAccountForm);case 6:e.resetAddAccount(),e.showSnackbar("success","Account has been registered successfully."),e.$store.dispatch("getAccounts"),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),e.errors=t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:{},e.showSnackbar("error",t.t0.response?t.t0.response.data.message:t.t0.message);case 15:return t.prev=15,e.submitting=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,11,15,18]])})))()},resetAddAccount:function(){this.errors={},this.addAccountForm={},this.$refs.addAccountForm.resetValidation(),this.addAccountDialog=!1}}},h=b,p=(n("70ce"),n("2877")),k=n("6544"),v=n.n(k),g=n("c6a6"),j=n("8336"),y=n("b0af"),x=n("99d9"),w=n("62ad"),A=n("169a"),C=n("ce7e"),_=n("4bd4"),T=n("132d"),O=n("8860"),E=n("da13"),S=n("5d23"),P=n("34c3"),V=n("f774"),R=n("0fd9"),z=n("b974"),D=n("2fa4"),L=n("8654"),N=n("3a2f"),$=Object(p["a"])(h,l,u,!1,null,"00e468d3",null),I=$.exports;v()($,{VAutocomplete:g["a"],VBtn:j["a"],VCard:y["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:w["a"],VDialog:A["a"],VDivider:C["a"],VForm:_["a"],VIcon:T["a"],VList:O["a"],VListItem:E["a"],VListItemContent:S["a"],VListItemIcon:P["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VNavigationDrawer:V["a"],VRow:R["a"],VSelect:z["a"],VSpacer:D["a"],VTextField:L["a"],VTooltip:N["a"]});var M=n("2c10"),F={name:"App",components:{Navigation:I,PageLoading:M["a"]},data:function(){return{drawer:null,mounting:!0,notification:!1}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.login){t.next=6;break}return t.next=3,e.getProfile();case 3:e.mounting=!1,t.next=7;break;case 6:e.mounting=!1;case 7:case"end":return t.stop()}}),t)})))()},computed:Object(o["a"])(Object(o["a"])({},Object(s["b"])({login:"login",profile:"profile",role:"role",snackbarText:"snackbarText",snackbarType:"snackbarType",snackbarTimeout:"snackbarTimeout",totalUnreadNotifications:"totalUnreadNotifications",notifications:"notifications"})),{},{snackbar:{get:function(){return this.$store.getters.snackbar},set:function(e){this.$store.commit("setSnackbar",e)}}}),watch:{notification:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e){n.next=4;break}return n.next=3,t.$axios.post("/user/notifications/read");case 3:t.$store.commit("readNotifications");case 4:case"end":return n.stop()}}),n)})))()}},methods:{logOut:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.post("/log-out");case 2:e.logOutClient();case 3:case"end":return t.stop()}}),t)})))()},logOutClient:function(){var e=this;this.$cookies.keys().forEach((function(t){return e.$cookies.remove(t)})),this.$store.commit("reset"),this.$router.push("/login")},goToNotificationPage:function(){var e="/user/notification";this.$route.path!==e&&this.$router.push(e)},getProfile:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("getProfile");case 3:if("User"!==e.role){t.next=8;break}return t.next=6,e.$store.dispatch("getAccounts");case 6:return t.next=8,e.$store.dispatch("getNotifications");case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.logOutClient();case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},U=F,B=(n("034f"),n("7496")),q=n("40dc"),J=n("5bc1"),Y=n("8212"),K=n("4ca6"),Q=n("a523"),H=n("adda"),G=n("1800"),W=n("f6c4"),X=n("e449"),Z=n("2db4"),ee=n("2a7f"),te=Object(p["a"])(U,r,c,!1,null,null,null),ne=te.exports;v()(te,{VApp:B["a"],VAppBar:q["a"],VAppBarNavIcon:J["a"],VAvatar:Y["a"],VBadge:K["a"],VBtn:j["a"],VCard:y["a"],VCardText:x["b"],VContainer:Q["a"],VIcon:T["a"],VImg:H["a"],VList:O["a"],VListItem:E["a"],VListItemAction:G["a"],VListItemContent:S["a"],VListItemTitle:S["c"],VMain:W["a"],VMenu:X["a"],VSnackbar:Z["a"],VSpacer:D["a"],VToolbarTitle:ee["a"]});n("b680"),n("ac1f"),n("25f0"),n("5319"),n("b0c0");var ae,re=n("ade3"),ce=n("2b27"),oe=n.n(ce);a["a"].use(s["a"]);var ie=new s["a"].Store({state:(ae={profile:{},profileDialog:!1,login:!1,snackbar:!1,text:"",timeout:0,role:"",snackbarText:"",snackbarType:"",snackbarTimeoutDefault:2500,snackbarTimeout:1},Object(re["a"])(ae,"role",""),Object(re["a"])(ae,"accounts",[]),Object(re["a"])(ae,"selectedAccount",null),Object(re["a"])(ae,"itemsPerPageOptions",[10,25,50,100]),Object(re["a"])(ae,"adminFee",25),Object(re["a"])(ae,"tax",10),Object(re["a"])(ae,"minimumEncashment",200),Object(re["a"])(ae,"tableOfExits",[{name:"Table 1",level:1,value:2e3},{name:"Table 2",level:2,value:5e3},{name:"Table 3",level:3,value:1e4},{name:"Table 4",level:4,value:25e3},{name:"Table 5",level:5,value:5e4}]),Object(re["a"])(ae,"notifications",[]),Object(re["a"])(ae,"totalUnreadNotifications",0),ae),getters:{login:function(e){return e.login},snackbar:function(e){return e.snackbar},snackbarText:function(e){return e.snackbarText},snackbarType:function(e){return e.snackbarType},snackbarTimeout:function(e){return e.snackbarTimeout},timeout:function(e){return e.timeout},profile:function(e){return e.profile},profileDialog:function(e){return e.profileDialog},role:function(e){return e.role},accounts:function(e){return e.accounts},selectedAccount:function(e){return e.selectedAccount},itemsPerPageOptions:function(e){return e.itemsPerPageOptions},adminFee:function(e){return e.adminFee},tax:function(e){return e.tax},minimumEncashment:function(e){return e.minimumEncashment},tableOfExits:function(e){return e.tableOfExits},notifications:function(e){return e.notifications},totalUnreadNotifications:function(e){return e.totalUnreadNotifications}},mutations:{setLogIn:function(e,t){e.login=t},setRole:function(e,t){e.role=t},setAccounts:function(e,t){e.accounts=t},setSnackbar:function(e,t){e.snackbar=t.value,e.snackbarType=t.type,e.snackbarText=t.text,e.snackbarTimeout=t.timeout?t.timeout:e.snackbarTimeoutDefault},setSelectedAccount:function(e,t){e.selectedAccount=t},setProfile:function(e,t){e.profile=t},reset:function(e){e.role="",e.selectedAccount=null,e.accounts=[],e.profile={},e.login=!1},readNotifications:function(e){e.totalUnreadNotifications=0}},actions:{getProfile:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,n=e.state,t.next=3,window.axios.get("/profile/info");case 3:return a=t.sent,r=a.data.data,n.profile=r,n.role=r.role.name,n.login=!0,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})))()},getAccounts:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,n=e.state,t.next=3,window.axios.get("/user/accounts",{params:{order_by:"name",order_desc:0}});case 3:return a=t.sent,r=a.data.data,n.accounts=r,n.selectedAccount||(n.selectedAccount=r.length>0?r[0]:null),t.abrupt("return",n.selectedAccount);case 8:case"end":return t.stop()}}),t)})))()},getNotifications:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,n=e.state,t.next=3,window.axios.get("/user/notifications",{params:{page:1,limit:5}});case 3:a=t.sent,n.notifications=a.data.data,n.totalUnreadNotifications=a.data.meta.total_unread_notifications;case 6:case"end":return t.stop()}}),t)})))()}}}),se=n("c1df"),le=n.n(se),ue={methods:{showSnackbar:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;ie.commit("setSnackbar",{value:!0,type:e,text:t,timeout:n})},roleColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(e){case"Admin":return t?"primary--text":"primary black--text";case"Seller":return t?"blue--text":"blue white--text";default:return t?"success--text":"success white--text"}},borderColorByRole:function(e){switch(e){case"Admin":return"border primary--border";case"Seller":return"border blue--border";default:return"border success--border"}},ticketStatusColor:function(e){switch(e){case"pending":return"primary black--text";case"active":return"success white--text";default:return"secondary"}},date:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm:ss",n=e?le()(e):le()();return n.format(t)},money:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t+parseFloat(e).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},de=n("f309");n("becf");a["a"].use(de["a"]);var fe=new de["a"]({icons:{iconfont:"fa"},theme:{dark:!0,themes:{dark:{primary:"#FBC02D"}}}}),me=n("8c4f"),be=function(e){document.title=e?"Magnifiscent500 — "+e:"Magnifiscent500"},he=function(e,t,n){ie.getters.login?"Admin"===ie.getters.role?(be(e.meta.title),n()):n(!1):n("/login")},pe=function(e,t,n){ie.getters.login?(be(e.meta.title),n()):n("/login")},ke=function(e,t,n){if(ie.getters.login)switch(ie.getters.role){case"Admin":n("/admin/dashboard");break;case"Seller":n("/seller/dashboard");break;default:n("/user/dashboard");break}else n("/login")},ve=function(e,t,n){ie.getters.login?n(!1):(be(e.meta.title),n())},ge=function(e,t,n){ie.getters.login?"Seller"===ie.getters.role?(be(e.meta.title),n()):n(!1):n("/login")},je=function(e,t,n){ie.getters.login?"User"===ie.getters.role?(be(e.meta.title),n()):n(!1):n("/login")},ye=function(e,t,n){ie.getters.login?"User"===ie.getters.role&&null!==ie.getters.selectedAccount?(be(e.meta.title),n()):n("/"):n("/login")};a["a"].use(me["a"]);var xe=[{path:"*",name:"page-not-found",component:function(){return n.e("chunk-17347c5d").then(n.bind(null,"bb99"))}},{path:"/",name:"gate",beforeEnter:ke},{path:"/login",component:function(){return n.e("chunk-34221888").then(n.bind(null,"013f"))},meta:{title:"Login"},beforeEnter:ve},{path:"/profile",component:function(){return n.e("chunk-6d3ed37c").then(n.bind(null,"2ff9"))},meta:{title:"Profile"},beforeEnter:pe},{path:"/register",component:function(){return n.e("chunk-75f71a00").then(n.bind(null,"56b4"))},meta:{title:"Register"},beforeEnter:ve},{path:"/register/:referrer_code",component:function(){return n.e("chunk-75f71a00").then(n.bind(null,"56b4"))},meta:{title:"Register"},beforeEnter:ve},{path:"/reset-password",component:function(){return n.e("chunk-33f0cc4c").then(n.bind(null,"f833"))},meta:{title:"Reset Password"},beforeEnter:ve},{path:"/terms-of-service",component:function(){return n.e("chunk-2d22c54d").then(n.bind(null,"f37a"))},meta:{title:"Terms of Service"},beforeEnter:ve},{path:"/update-password/:token",component:function(){return n.e("chunk-33f40910").then(n.bind(null,"ace3"))},meta:{title:"Update Password"},beforeEnter:ve},{path:"/admin",component:{render:function(e){return e("router-view")}},children:[{path:"announcements",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0be333"),n.e("chunk-441d9384")]).then(n.bind(null,"3fbe"))},meta:{title:"Announcements"},beforeEnter:he},{path:"account-summary/:user_id",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0ab147")]).then(n.bind(null,"146d"))},meta:{title:"Account Summary"},beforeEnter:he},{path:"dashboard",component:function(){return n.e("chunk-2d0e88a2").then(n.bind(null,"8a69"))},meta:{title:"Dashboard"},beforeEnter:he},{path:"encashments",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0be333"),n.e("chunk-c3623aa2")]).then(n.bind(null,"ced6"))},meta:{title:"Encashments"},beforeEnter:he},{path:"fund-allocation",component:function(){return n.e("chunk-2d238a36").then(n.bind(null,"ffdd"))},meta:{title:"Fund Allocation"},beforeEnter:he},{path:"monthly-qualifiers",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0be333"),n.e("chunk-2d0d659d")]).then(n.bind(null,"71d1"))},meta:{title:"Monthly Qualifiers"},beforeEnter:he},{path:"monthly-reports",component:function(){return n.e("chunk-2d0b2949").then(n.bind(null,"255e"))},meta:{title:"Monthly Reports"},beforeEnter:he},{path:"package-codes",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0be333"),n.e("chunk-2d0c8824")]).then(n.bind(null,"54d3"))},meta:{title:"Package Codes"},beforeEnter:he},{path:"tickets",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0be333"),n.e("chunk-675de13e")]).then(n.bind(null,"2d4b"))},meta:{title:"Tickets"},beforeEnter:he},{path:"users",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0be333"),n.e("chunk-349a1c62")]).then(n.bind(null,"dcef"))},meta:{title:"Users"},beforeEnter:he}]},{path:"/seller",component:{render:function(e){return e("router-view")}},children:[{path:"dashboard",component:function(){return n.e("chunk-2d0abf9e").then(n.bind(null,"1823"))},meta:{title:"Dashboard"},beforeEnter:ge},{path:"package-codes",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0be333"),n.e("chunk-2d0d0f9a")]).then(n.bind(null,"69ef"))},meta:{title:"Package Codes"},beforeEnter:ge}]},{path:"/settings",component:function(){return n.e("chunk-2d20f6dd").then(n.bind(null,"b41f"))},beforeEnter:pe},{path:"/user",component:{render:function(e){return e("router-view")}},beforeEnter:je,children:[{path:"account-summary",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0b6c8d")]).then(n.bind(null,"1f46"))},meta:{title:"Account Summary"},beforeEnter:ye},{path:"dashboard",component:function(){return n.e("chunk-394ed1d3").then(n.bind(null,"7b63"))},meta:{title:"Dashboard"},beforeEnter:je},{path:"direct-referral",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0c1d49")]).then(n.bind(null,"485d"))},meta:{title:"Direct Referral"},beforeEnter:ye},{path:"encashments",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0c9709")]).then(n.bind(null,"58c3"))},meta:{title:"Encashments"},beforeEnter:ye},{path:"notification",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0be308")]).then(n.bind(null,"2ecb"))},meta:{title:"Notification"},beforeEnter:je},{path:"table-of-exit",component:function(){return n.e("chunk-6767418a").then(n.bind(null,"a4f9"))},meta:{title:"Table Of Exit"},beforeEnter:ye},{path:"tickets",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d0be333"),n.e("chunk-5c4398fc")]).then(n.bind(null,"7473"))},meta:{title:"Tickets"},beforeEnter:je},{path:"transaction",component:function(){return Promise.all([n.e("chunk-69498528"),n.e("chunk-2d20f579")]).then(n.bind(null,"b2e8"))},meta:{title:"Transaction"},beforeEnter:ye}]}],we=new me["a"]({mode:"history",routes:xe}),Ae=n("bc3a"),Ce=n.n(Ae);oe.a.isKey("token")&&(Ce.a.defaults.headers.common["Authorization"]=oe.a.get("token"),ie.commit("setRole",oe.a.get("role")),ie.commit("setSelectedAccount","null"!==oe.a.get("account")?oe.a.get("account"):null),ie.commit("setLogIn",!0));var _e=Ce.a.create({baseURL:"https://app.magnifiscent500-premium.com/api"});Plugin.install=function(e){e.axios=_e,window.axios=_e,Object.defineProperties(e.prototype,{axios:{get:function(){return _e}},$axios:{get:function(){return _e}}})},a["a"].use(Plugin);Plugin;a["a"].use(oe.a);n("557b");a["a"].mixin(ue),a["a"].config.productionTip=!1,new a["a"]({vuetify:fe,router:we,store:ie,render:function(e){return e(ne)}}).$mount("#app")},"70ce":function(e,t,n){"use strict";n("47dc")},"85ec":function(e,t,n){},"9cad":function(e){e.exports=JSON.parse('[{"title":"Dashboard","icon":"fas fa-tachometer-alt","path":"/user/dashboard"},{"title":"Direct Referral","icon":"fas fa-users","path":"/user/direct-referral","middleware":"hasAccount"},{"title":"Encashments","icon":"fas fa-money-check","path":"/user/encashments","middleware":"hasAccount"},{"title":"Table of Exit","icon":"fas fa-door-open","path":"/user/table-of-exit","middleware":"hasAccount"},{"title":"Transaction","icon":"fas fa-handshake","path":"/user/transaction","middleware":"hasAccount"},{"title":"Notification","icon":"far fa-bell","path":"/user/notification"},{"title":"Account Summary","icon":"fas fa-file-alt","path":"/user/account-summary","middleware":"hasAccount"},{"title":"Tickets","icon":"fas fa-ticket-alt","path":"/user/tickets"}]')},f692:function(e){e.exports=JSON.parse('[{"title":"Dashboard","icon":"fas fa-tachometer-alt","path":"/seller/dashboard"},{"title":"Package Codes","icon":"fas fa-cubes","path":"/seller/package-codes"}]')}});
//# sourceMappingURL=app.9f4ab904.js.map