(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e88a2"],{"8a69":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.loading?e("div",[e("page-loading",{staticStyle:{"margin-top":"-80px"}})],1):[e("div",{staticClass:"px-6 pb-6"},[e("div",{staticClass:"d-flex text-uppercase pb-5 pt-5 tracking-widest text-2xl font-weight-bold text-shadow"},[t._v(" Sales "),e("v-spacer"),e("v-btn",{staticClass:"mr-3 elevation-0",attrs:{"x-small":"",fab:"",color:"primary"},on:{click:function(a){return t.getSummary()}}},[e("v-icon",{staticClass:"black--text",attrs:{small:""}},[t._v("fas fa-redo-alt")])],1)],1),e("v-row",t._l(t.summary.sales?t.summary.sales:[],(function(a,s){return e("v-col",{key:s,attrs:{cols:"12",md:"6",sm:"12"}},[e("v-card",{attrs:{dark:""}},[e("v-card-title",{staticClass:"text-4xl d-flex justify-center"},[e("span",{staticClass:"primary--text pr-2"},[t._v("₱")]),t._v(" "+t._s(t.money(a.value))+" ")]),e("v-card-text",{staticClass:"text-center text-button"},[t._v(" "+t._s(a.name)+" ")])],1)],1)})),1),e("div",{staticClass:"text-uppercase py-5 tracking-widest text-2xl font-weight-bold text-shadow"},[t._v("Users")]),e("v-row",t._l(t.summary.users?t.summary.users:[],(function(a,s){return e("v-col",{key:s,attrs:{cols:"12",md:"Total"===a.name?12:4,sm:"12"}},[e("v-card",{attrs:{dark:""}},[e("v-card-title",{staticClass:"text-4xl d-flex justify-center"},[t._v(" "+t._s(a.value)+" ")]),e("v-card-text",{staticClass:"text-center text-button",class:{"primary--text":"Total"===a.name}},[t._v(" "+t._s(a.name)+" ")])],1)],1)})),1),e("div",{staticClass:"text-uppercase py-5 tracking-widest text-2xl font-weight-bold text-shadow"},[t._v(" Accounts ")]),e("v-row",t._l(t.summary.accounts?t.summary.accounts:[],(function(a,s){return e("v-col",{key:s,attrs:{cols:"12",md:"4",sm:"12"}},[e("v-card",{attrs:{dark:""}},[e("v-card-title",{staticClass:"text-4xl d-flex justify-center"},[t._v(" "+t._s(a.value)+" ")]),e("v-card-text",{staticClass:"text-center text-button",class:{"primary--text":"Total"===a.name}},[t._v(" "+t._s(a.name)+" ")])],1)],1)})),1),e("div",{staticClass:"text-uppercase py-5 tracking-widest text-2xl font-weight-bold text-shadow"},[t._v(" Encashments ")]),e("v-row",t._l(t.summary.encashments?t.summary.encashments:[],(function(a,s){return e("v-col",{key:s,attrs:{cols:"12",md:"4",sm:"12"}},[e("v-card",{attrs:{dark:""}},[e("v-card-title",{staticClass:"text-4xl d-flex justify-center"},[e("span",{staticClass:"primary--text pr-2"},[t._v("₱")]),t._v(" "+t._s(t.money(a.value))+" ")]),e("v-card-text",{staticClass:"text-center text-button",class:{"primary--text":"Total"===a.name}},[t._v(" "+t._s(a.name)+" ")])],1)],1)})),1),e("div",{staticClass:"text-uppercase py-5 tracking-widest text-2xl font-weight-bold text-shadow"},[t._v(" Monthly Sharing Poll ")]),e("v-row",t._l(t.summary.monthly_sharing?t.summary.monthly_sharing:[],(function(a,s){return e("v-col",{key:s,attrs:{cols:"12",md:"6",sm:"12"}},[e("v-card",{attrs:{dark:""}},[e("v-card-title",{staticClass:"text-4xl d-flex justify-center"},["Qualified Accounts"!==a.name?[e("span",{staticClass:"primary--text pr-2"},[t._v("₱")]),t._v(" "+t._s(t.money(a.value))+" ")]:e("span",[t._v(t._s(a.value))])],2),e("v-card-text",{staticClass:"text-center text-button"},[t._v(" "+t._s(a.name)+" ")])],1)],1)})),1),e("div",{staticClass:"text-uppercase py-5 tracking-widest text-2xl font-weight-bold text-shadow"},[t._v(" Other Income/s ")]),e("v-row",t._l(t.summary.other_income?t.summary.other_income:[],(function(a,s){return e("v-col",{key:s,attrs:{cols:"12"}},[e("v-card",{attrs:{dark:""}},[e("v-card-title",{staticClass:"text-4xl d-flex justify-center"},[e("span",{staticClass:"primary--text pr-2"},[t._v("₱")]),t._v(" "+t._s(t.money(a.value))+" ")]),e("v-card-text",{staticClass:"primary--text text-center text-button"},[t._v(" "+t._s(a.name)+" ")])],1)],1)})),1)],1)]],2)},r=[],n=(e("96cf"),e("1da1")),c=e("2c10"),l={components:{PageLoading:c["a"]},data:function(){return{loading:!0,summary:{}}},mounted:function(){this.getSummary()},methods:{getSummary:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.loading=!0,a.next=4,t.$axios.get("/admin/dashboard");case 4:e=a.sent,t.summary=e.data.data,a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),t.showSnackbar("error",a.t0.response?a.t0.response.data.message:a.t0.message);case 11:return a.prev=11,t.loading=!1,a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[0,8,11,14]])})))()}}},i=l,o=e("2877"),d=e("6544"),m=e.n(d),u=e("8336"),v=e("b0af"),x=e("99d9"),p=e("62ad"),y=e("132d"),_=e("0fd9"),f=e("2fa4"),h=Object(o["a"])(i,s,r,!1,null,null,null);a["default"]=h.exports;m()(h,{VBtn:u["a"],VCard:v["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:p["a"],VIcon:y["a"],VRow:_["a"],VSpacer:f["a"]})}}]);
//# sourceMappingURL=chunk-2d0e88a2.dad01494.js.map