(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1d49"],{"485d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pa-6"},[a("v-data-table",{staticClass:"elevation-1 overflow-hidden",attrs:{loading:e.loading,headers:e.headers,items:e.directReferrals.data,options:e.pagination,"footer-props":{itemsPerPageOptions:e.itemsPerPageOptions},"server-items-length":e.directReferrals.meta?e.directReferrals.meta.total:0,dark:""},on:{"update:options":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-container",{staticClass:"grey darken-4 elevation-1 pt-6 px-7",staticStyle:{"max-width":"100%!important"}},[a("v-row",[a("v-col",{staticClass:"primary--text headline",attrs:{cols:"12",md:"12",sm:"12"}},[a("v-btn",{staticClass:"mr-3 elevation-0",attrs:{"x-small":"",fab:"",color:"primary"},on:{click:e.reloadDirectReferrals}},[a("v-icon",{staticClass:"black--text",attrs:{small:""}},[e._v("fas fa-redo-alt")])],1),a("small",[e._v("Direct Referrals")])],1)],1)],1)]},proxy:!0},{key:"item.created_at",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.date(a.created_at,"MMMM D, YYYY - hh:mm a"))+" ")]}},{key:"item.amount",fn:function(t){var r=t.item;return[a("span",{staticClass:"primary--text text-button",staticStyle:{"font-size":"18px!important"}},[e._v("₱")]),e._v(" "+e._s(e.money(r.amount))+" ")]}}])})],1)},n=[],i=(a("96cf"),a("1da1")),s=a("5530"),o=a("2f62"),c={data:function(){return{loading:!1,disablePagination:!1,pagination:{page:1,itemsPerPage:10},headers:[{text:"Account",align:"start",sortable:!1,value:"account.name"},{text:"Referred Account",align:"start",sortable:!1,value:"referred_account.name"},{text:"Amount",align:"start",sortable:!0,value:"amount",width:"150px"},{text:"Date Added",align:"start",sortable:!0,value:"created_at",width:"250px"}],directReferrals:{}}},mounted:function(){this.getDirectReferrals()},computed:Object(s["a"])({},Object(o["b"])({itemsPerPageOptions:"itemsPerPageOptions",selectedAccount:"selectedAccount"})),watch:{pagination:{handler:function(){this.disablePagination||this.getDirectReferrals()},deep:!0},selectedAccount:function(){this.reloadDirectReferrals()}},methods:{reloadDirectReferrals:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.disablePagination=!0,e.pagination.page=1,t.next=4,e.getDirectReferrals();case 4:e.disablePagination=!1;case 5:case"end":return t.stop()}}),t)})))()},getDirectReferrals:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,a={page:e.pagination.page,limit:e.pagination.itemsPerPage,meta_type:"Direct Referral",account_id:e.selectedAccount?e.selectedAccount.id:null},e.pagination.sortBy&&e.pagination.sortBy.length>0&&(e.$set(a,"order_by",e.pagination.sortBy[0]),e.$set(a,"order_desc",e.pagination.sortDesc[0]?1:0)),t.next=6,e.$axios.get("/user/transactions",{params:a});case 6:r=t.sent,e.directReferrals=r.data,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.showSnackbar("error",t.t0.response?t.t0.response.data.message:t.t0.message);case 13:return t.prev=13,e.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()}}},l=c,d=a("2877"),u=a("6544"),p=a.n(u),m=a("8336"),f=a("62ad"),g=a("a523"),v=a("8fea"),h=a("132d"),b=a("0fd9"),x=Object(d["a"])(l,r,n,!1,null,null,null);t["default"]=x.exports;p()(x,{VBtn:m["a"],VCol:f["a"],VContainer:g["a"],VDataTable:v["a"],VIcon:h["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-2d0c1d49.e85c5de6.js.map