(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6c8d"],{"1f46":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pa-6"},[e("v-data-table",{staticClass:"elevation-1 overflow-hidden",attrs:{loading:t.loading,headers:t.headers,items:t.accounts.data,options:t.pagination,"footer-props":{itemsPerPageOptions:t.itemsPerPageOptions},"server-items-length":t.accounts.meta?t.accounts.meta.total:0,dark:""},on:{"update:options":function(a){t.pagination=a}},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-container",{staticClass:"grey darken-4 elevation-1 pt-6 px-7",staticStyle:{"max-width":"100%!important"}},[e("v-row",[e("v-col",{staticClass:"primary--text headline",attrs:{cols:"12"}},[e("v-btn",{staticClass:"mr-3 elevation-0",attrs:{"x-small":"",fab:"",color:"primary"},on:{click:t.reloadAccounts}},[e("v-icon",{staticClass:"black--text",attrs:{small:""}},[t._v("fas fa-redo-alt")])],1),e("small",[t._v("Accounts")])],1)],1)],1)]},proxy:!0},{key:"item.monthly_sharing.total_directs",fn:function(a){var n=a.item;return[n.monthly_sharing?e("div",{staticClass:"justify-center layout"},[e("v-chip",{class:t.isQualified(n.monthly_sharing)?"primary black--text":"red",attrs:{small:"",dark:""}},[t._v(" "+t._s(t.isQualified(n.monthly_sharing)?"Qualified":n.monthly_sharing.total_directs+" / "+n.monthly_sharing.required_directs)+" ")])],1):t._e()]}},{key:"item.total_income",fn:function(a){var n=a.item;return[e("span",{staticClass:"primary--text text-button",staticStyle:{"font-size":"18px!important"}},[t._v("₱")]),t._v(" "+t._s(t.money(n.total_income))+" ")]}},{key:"item.created_at",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.date(e.created_at,"MMMM D, YYYY - hh:mm a"))+" ")]}}])})],1)},i=[],s=(e("96cf"),e("1da1")),r=e("5530"),o=e("2f62"),c={data:function(){return{loading:!1,transactionType:"",disablePagination:!1,pagination:{page:1,itemsPerPage:10},headers:[{text:"Account",align:"start",sortable:!0,value:"name"},{text:"Total Income",align:"start",sortable:!1,value:"total_income"},{text:"Monthly Sharing",align:"center",sortable:!0,value:"monthly_sharing.total_directs"},{text:"Date Registered",align:"start",sortable:!0,value:"created_at",width:"250px"}],accounts:{}}},mounted:function(){this.getAccounts()},computed:Object(r["a"])({},Object(o["b"])({itemsPerPageOptions:"itemsPerPageOptions"})),watch:{pagination:{handler:function(){this.disablePagination||this.getAccounts()},deep:!0},selectedAccount:function(){this.reloadAccounts()},transactionType:function(){this.reloadAccounts()}},methods:{isQualified:function(t){return t.required_directs<=t.total_directs},reloadAccounts:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.disablePagination=!0,t.pagination.page=1,a.next=4,t.getAccounts();case 4:t.disablePagination=!1;case 5:case"end":return a.stop()}}),a)})))()},getAccounts:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.loading=!0,e={page:t.pagination.page,limit:t.pagination.itemsPerPage},t.pagination.sortBy&&t.pagination.sortBy.length>0&&(t.$set(e,"order_by",t.pagination.sortBy[0]),t.$set(e,"order_desc",t.pagination.sortDesc[0]?1:0)),a.next=6,t.$axios.get("/user/accounts-summary",{params:e});case 6:n=a.sent,t.accounts=n.data,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),t.showSnackbar("error",a.t0.response?a.t0.response.data.message:a.t0.message);case 13:return a.prev=13,t.loading=!1,a.finish(13);case 16:case"end":return a.stop()}}),a,null,[[0,10,13,16]])})))()}}},l=c,u=e("2877"),d=e("6544"),p=e.n(d),m=e("8336"),g=e("cc20"),h=e("62ad"),f=e("a523"),v=e("8fea"),_=e("132d"),y=e("0fd9"),b=Object(u["a"])(l,n,i,!1,null,null,null);a["default"]=b.exports;p()(b,{VBtn:m["a"],VChip:g["a"],VCol:h["a"],VContainer:f["a"],VDataTable:v["a"],VIcon:_["a"],VRow:y["a"]})}}]);
//# sourceMappingURL=chunk-2d0b6c8d.52db2fb2.js.map