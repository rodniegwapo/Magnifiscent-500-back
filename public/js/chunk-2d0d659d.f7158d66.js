(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d659d"],{"71d1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pa-6"},[a("v-data-table",{staticClass:"elevation-1 overflow-hidden",attrs:{loading:e.loading,headers:e.headers,items:e.users.data,options:e.pagination,"footer-props":{itemsPerPageOptions:e.itemsPerPageOptions},"server-items-length":e.users.meta?e.users.meta.total:0,dark:""},on:{"update:options":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-container",{staticClass:"grey darken-4 elevation-1 pt-6 px-7",staticStyle:{"max-width":"100%!important"}},[a("v-row",[a("v-col",{staticClass:"primary--text headline",attrs:{cols:"12",md:"8",sm:"12"}},[a("v-btn",{staticClass:"mr-3 elevation-0",attrs:{"x-small":"",fab:"",color:"primary"},on:{click:function(t){return e.reloadUsers()}}},[a("v-icon",{staticClass:"black--text",attrs:{small:""}},[e._v("fas fa-redo-alt")])],1),a("small",[e._v("Monthly Qualifiers")])],1),a("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"4",sm:"12"}},[a("div",[a("v-text-field",{attrs:{disabled:e.loading,label:"Search User...","prepend-inner-icon":"fas fa-user",outlined:"",color:"primary",clearable:"",flat:"",dense:"",dark:"",type:"text"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)])],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var s=t.item;return[a("div",{staticClass:"justify-center layout"},[a("v-btn",{staticClass:"elevation-0 blue",attrs:{dark:"",fab:"","x-small":""},on:{click:function(t){return e.$router.push("account-summary/"+s.id)}}},[a("v-icon",{attrs:{dark:"",small:""}},[e._v("fas fa-file-alt")])],1)],1)]}}])})],1)},n=[],r=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),i=a("5530"),o=a("2f62"),l=a("2ef0"),c=a.n(l),u={data:function(){return{loading:!0,pagination:{page:1,itemsPerPage:10},search:null,headers:[{text:"Last Name",align:"start",sortable:!0,value:"last_name"},{text:"First Name",align:"start",sortable:!0,value:"first_name"},{text:"Middle Name",align:"start",sortable:!0,value:"middle_name"},{text:"Username",align:"start",sortable:!0,value:"username"},{text:"Total Accounts",align:"center",sortable:!1,value:"total_accounts"},{text:"Total Qualified Accounts",align:"center",sortable:!1,value:"total_qualified_accounts"},{text:"Actions",align:"center",sortable:!1,value:"actions"}],users:{},disablePagination:!1}},mounted:function(){this.getUsers()},computed:Object(i["a"])({},Object(o["b"])({itemsPerPageOptions:"itemsPerPageOptions"})),watch:{search:c.a.debounce((function(){this.reloadUsers()}),500),pagination:{handler:function(){this.disablePagination||this.getUsers()},deep:!0}},methods:{reloadUsers:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.disablePagination=!0,e.pagination.page=1,t.next=4,e.getUsers();case 4:e.disablePagination=!1;case 5:case"end":return t.stop()}}),t)})))()},getUsers:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,a=e.pagination,s={page:a.page,limit:a.itemsPerPage,year:e.date(null,"YYYY"),month:e.date(null,"M"),search:e.search},a.sortBy&&a.sortBy.length>0&&(e.$set(s,"order_by",a.sortBy[0]),e.$set(s,"order_desc",a.sortDesc[0]?1:0)),t.next=7,e.$axios.get("/admin/users-monthly-qualifiers",{params:s});case 7:n=t.sent,e.users=n.data,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),e.showSnackbar("error",t.t0.response?t.t0.response.data.message:t.t0.message);case 14:return t.prev=14,e.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})))()}}},d=u,m=a("2877"),p=a("6544"),f=a.n(p),g=a("8336"),v=a("62ad"),h=a("a523"),b=a("8fea"),x=a("132d"),y=a("0fd9"),k=a("8654"),w=Object(m["a"])(d,s,n,!1,null,null,null);t["default"]=w.exports;f()(w,{VBtn:g["a"],VCol:v["a"],VContainer:h["a"],VDataTable:b["a"],VIcon:x["a"],VRow:y["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-2d0d659d.f7158d66.js.map