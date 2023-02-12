(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3623aa2"],{"9d01":function(t,e,a){},b73d:function(t,e,a){"use strict";a("0481"),a("4069");var s=a("5530"),n=(a("ec29"),a("9d01"),a("fe09")),i=a("c37a"),c=a("c3f0"),r=a("0789"),l=a("490a"),o=a("80d2");e["a"]=n["a"].extend({name:"v-switch",directives:{Touch:c["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(s["a"])(Object(s["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(r["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(l["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===o["y"].left&&this.isActive||t.keyCode===o["y"].right&&!this.isActive)&&this.onChange()}}})},ced6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-6"},[a("v-data-table",{staticClass:"elevation-1 overflow-hidden",attrs:{loading:t.loading,headers:t.headers,items:t.encashments.data,options:t.pagination,"footer-props":{itemsPerPageOptions:t.itemsPerPageOptions},"server-items-length":t.encashments.meta?t.encashments.meta.total:0,dark:""},on:{"update:options":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-container",{staticClass:"grey darken-4 elevation-1 pt-6 px-7",staticStyle:{"max-width":"100%!important"}},[a("v-row",[a("v-col",{staticClass:"primary--text headline",attrs:{cols:"12",md:"4",sm:"12"}},[a("v-btn",{staticClass:"mr-3 elevation-0",attrs:{"x-small":"",fab:"",color:"primary"},on:{click:function(e){return t.reloadEncashments()}}},[a("v-icon",{staticClass:"black--text",attrs:{small:""}},[t._v("fas fa-redo-alt")])],1),a("small",[t._v("Encashment Management")])],1),a("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"4",sm:"12"}},[a("div",[a("v-text-field",{attrs:{disabled:t.loading,label:"Search User...","prepend-inner-icon":"fas fa-user",outlined:"",color:"primary",clearable:"",flat:"",dense:"",dark:"",type:"text"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]),a("v-col",{staticClass:"py-2",attrs:{cols:"12",md:"4",sm:"12"}},[a("v-select",{attrs:{disabled:t.loading,"prepend-inner-icon":"fas fa-money-check",items:[{text:"Paid",value:"paid"},{text:"Unpaid",value:"unpaid"}],label:"Status",dense:"",dark:"",outlined:""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)],1)],1)]},proxy:!0},{key:"item.full_name",fn:function(e){var s=e.item;return[t._v(" "+t._s(s.first_name)+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:s.middle_name,expression:"item.middle_name"}]},[t._v(t._s(s.middle_name))]),t._v(" "+t._s(s.last_name)+" ")]}},{key:"item.amount",fn:function(e){var s=e.item;return[a("span",{staticClass:"primary--text text-button",staticStyle:{"font-size":"18px!important"}},[t._v("₱")]),t._v(" "+t._s(t.money(s.encashment_details.net_amount))+" ")]}},{key:"item.encashment_details.bank_account",fn:function(e){var s=e.item;return[a("span",{staticClass:"primary--text"},[t._v(t._s(s.encashment_details.bank_account))])]}},{key:"item.status",fn:function(e){var s=e.item;return[a("div",{staticClass:"justify-center layout"},[a("v-switch",{attrs:{color:"success darken-1","input-value":"paid"===t.status,success:"paid"===t.status,disabled:"paid"===t.status||t.loading,readonly:""},on:{click:function(e){return t.showConfirmDialog(s)}}}),a("v-chip",{staticClass:"mt-5 text-capitalize",class:"paid"===t.status?"success":"primary black--text",attrs:{small:"",dark:""}},[t._v(" "+t._s(t.status)+" ")])],1)]}},{key:"item.actions",fn:function(e){var s=e.item;return[a("div",{staticClass:"justify-center layout"},[a("v-btn",{staticClass:"elevation-0 ml-2 blue",attrs:{dark:"",fab:"","x-small":""},on:{click:function(e){t.selectedEncashment=s,t.showEncashmentDialog=!0}}},[a("v-icon",{attrs:{dark:"",small:""}},[t._v("fas fa-search")])],1)],1)]}}])}),a("v-dialog",{attrs:{persistent:"","max-width":"500px","overlay-opacity":"0.6","overlay-color":"grey"},model:{value:t.showEncashmentDialog,callback:function(e){t.showEncashmentDialog=e},expression:"showEncashmentDialog"}},[a("v-card",{attrs:{dark:""}},[a("v-card-title",{staticClass:"pb-8"},[a("v-icon",{staticClass:"mr-2",attrs:{color:"primary"}},[t._v("fas fa-money-check")]),a("span",{staticClass:"headline primary--text"},[a("small",[t._v("Encashment Request Information")])]),a("v-spacer"),a("v-btn",{attrs:{disabled:t.submitting,fab:"",text:"",small:"",color:"primary"},on:{click:function(e){t.showEncashmentDialog=!1}}},[a("v-icon",[t._v("fas fa-times")])],1)],1),a("v-card-text",[a("v-card",{staticClass:"px-0 elevation-0"},[t.selectedEncashment&&t.selectedEncashment.encashment_details?a("v-card-text",[a("table",{staticClass:"w-full"},[a("tr",[a("td",{staticClass:"py-1"},[t._v("Requested By")]),a("td",{staticClass:"py-1 white--text"},[t._v(" "+t._s(t.selectedEncashment.first_name)+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.selectedEncashment.middle_name,expression:"selectedEncashment.middle_name"}]},[t._v(t._s(t.selectedEncashment.middle_name))]),t._v(" "+t._s(t.selectedEncashment.last_name)+" ")])]),a("tr",[a("td",{staticClass:"py-1"},[t._v("Payment Channel")]),a("td",{staticClass:"py-1 white--text"},[t._v(t._s(t.selectedEncashment.encashment_details.payment_channel))])]),t.selectedEncashment.encashment_details.bank_account?a("tr",[a("td",{staticClass:"py-1"},[t._v("Bank Account")]),a("td",{staticClass:"py-1 primary--text"},[t._v(t._s(t.selectedEncashment.encashment_details.bank_account))])]):t._e(),a("tr",[a("td",{staticClass:"py-1"},[t._v("Mobile Number")]),a("td",{staticClass:"py-1 white--text"},[t._v(t._s(t.selectedEncashment.mobile_no))])]),a("tr",[a("td",{staticClass:"py-1"},[t._v("Amount")]),a("td",{staticClass:"py-1 white--text"},[a("span",{staticClass:"primary--text text-button",staticStyle:{"font-size":"18px!important"}},[t._v("₱")]),t._v(" "+t._s(t.money(t.selectedEncashment.encashment_details.amount))+" ")])]),a("tr",[a("td",{staticClass:"py-1"},[t._v("Tax")]),a("td",{staticClass:"py-1 white--text"},[a("span",{staticClass:"red--text text-button",staticStyle:{"font-size":"18px!important"}},[t._v("₱")]),t._v(" "+t._s(t.money(t.selectedEncashment.encashment_details.tax_fee))+" ")])]),a("tr",[a("td",{staticClass:"py-1"},[t._v("Admin Fee")]),a("td",{staticClass:"py-1 white--text"},[a("span",{staticClass:"red--text text-button",staticStyle:{"font-size":"18px!important"}},[t._v("₱")]),t._v(" "+t._s(t.money(t.selectedEncashment.encashment_details.admin_fee))+" ")])]),a("tr",[a("td",{staticClass:"py-1"},[t._v("Net Amount")]),a("td",{staticClass:"py-1 white--text"},[a("span",{staticClass:"primary--text text-button",staticStyle:{"font-size":"18px!important"}},[t._v("₱")]),t._v(" "+t._s(t.money(t.selectedEncashment.encashment_details.net_amount))+" ")])]),a("tr",[a("td",{staticClass:"py-1"},[t._v("Status")]),a("td",{staticClass:"py-1 text-capitalize",class:"paid"===t.status?"success--text":"primary--text"},[a("v-chip",{staticClass:"mt-5 text-capitalize",class:"paid"===t.status?"success":"primary black--text",attrs:{small:"",dark:""}},[t._v(" "+t._s(t.status)+" ")])],1)])])]):t._e()],1)],1),a("v-card-actions",{staticClass:"pt-0"},[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:"",disabled:t.submitting},on:{click:function(e){t.showEncashmentDialog=!1}}},[a("b",[t._v("Close")])])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290","overlay-opacity":"0.6","overlay-color":"grey"},model:{value:t.approveEncashmentDialog,callback:function(e){t.approveEncashmentDialog=e},expression:"approveEncashmentDialog"}},[a("v-card",{attrs:{dark:""}},[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure ?")]),a("v-card-text",[t._v(" This encashment will be paid. ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:"",disabled:t.submitting},on:{click:function(e){t.approveEncashmentDialog=!1}}},[a("b",[t._v("Cancel")])]),a("v-btn",{attrs:{color:"primary",text:"",loading:t.submitting,disabled:t.submitting},on:{click:t.approveEncashment}},[a("b",[t._v("Confirm")])])],1)],1)],1)],1)},n=[],i=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),c=a("5530"),r=a("2f62"),l=a("2ef0"),o=a.n(l),u={data:function(){return{showEncashmentDialog:!1,approveEncashmentDialog:!1,search:"",loading:!0,submitting:!1,pagination:{page:1,itemsPerPage:10},selectedEncashment:{},errors:{},status:"unpaid",users:[],headers:[{text:"Requested By",align:"start",sortable:!1,value:"full_name"},{text:"Mobile No.",align:"start",sortable:!1,value:"mobile_no",width:"120px"},{text:"Payment Channel",align:"start",sortable:!1,value:"encashment_details.payment_channel"},{text:"Bank Account",align:"start",sortable:!1,value:"encashment_details.bank_account"},{text:"Net Amount",align:"start",sortable:!1,value:"amount",width:"120px"},{text:"Status",align:"center",sortable:!1,value:"status",width:"120px"},{text:"Actions",align:"center",sortable:!1,value:"actions",width:"120px"}],encashments:{},disablePagination:!1}},mounted:function(){this.getEncashments()},computed:Object(c["a"])({},Object(r["b"])({itemsPerPageOptions:"itemsPerPageOptions"})),watch:{status:function(){this.reloadEncashments()},userId:function(){this.reloadEncashments()},search:o.a.debounce((function(){this.reloadEncashments()}),500),pagination:{handler:function(){this.disablePagination||this.getEncashments()},deep:!0}},methods:{reloadEncashments:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.disablePagination=!0,t.pagination.page=1,e.next=4,t.getEncashments();case 4:t.disablePagination=!1;case 5:case"end":return e.stop()}}),e)})))()},getEncashments:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,a=t.pagination,s={page:a.page,limit:a.itemsPerPage,status:t.status,user_id:t.userId,search:t.search},e.next=6,t.$axios.get("/admin/encashments/users",{params:s});case 6:n=e.sent,t.encashments=n.data,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.showSnackbar("error",e.t0.response?e.t0.response.data.message:e.t0.message);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()},showConfirmDialog:function(t){"unpaid"===this.status&&(this.selectedEncashment=t,this.approveEncashmentDialog=!0)},approveEncashment:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.submitting=!0,e.next=4,t.$axios.put("/admin/encashments/mark-as-paid/"+t.selectedEncashment.id);case 4:t.getEncashments(),t.approveEncashmentDialog=!1,t.showSnackbar("success","Encashment has been paid successfully."),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.showSnackbar("error",e.t0.response?e.t0.response.data.message:e.t0.message);case 12:return e.prev=12,t.submitting=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}}},h=u,d=a("2877"),m=a("6544"),p=a.n(m),v=a("8336"),f=a("b0af"),g=a("99d9"),b=a("cc20"),_=a("62ad"),y=a("a523"),x=a("8fea"),C=a("169a"),w=a("132d"),k=a("0fd9"),E=a("b974"),V=a("2fa4"),S=a("b73d"),D=a("8654"),A=Object(d["a"])(h,s,n,!1,null,null,null);e["default"]=A.exports;p()(A,{VBtn:v["a"],VCard:f["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VChip:b["a"],VCol:_["a"],VContainer:y["a"],VDataTable:x["a"],VDialog:C["a"],VIcon:w["a"],VRow:k["a"],VSelect:E["a"],VSpacer:V["a"],VSwitch:S["a"],VTextField:D["a"]})},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";a("4de4"),a("45fc"),a("d3b7"),a("25f0");var s=a("c37a"),n=a("5607"),i=a("2b0e"),c=i["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),r=a("8547"),l=a("58df");function o(t){t.preventDefault()}e["a"]=Object(l["a"])(s["a"],c,r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var s=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===s&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-c3623aa2.6344105b.js.map