(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-349a1c62"],{"23a7":function(e,t,s){"use strict";s("99af"),s("a623"),s("4160"),s("caad"),s("d81d"),s("13d5"),s("fb6a"),s("a434"),s("b0c0"),s("a9e3"),s("159b");var a=s("2909"),r=s("5530"),i=s("53ca"),n=(s("5803"),s("2677")),l=s("cc20"),o=s("80d2"),c=s("d9bd"),d=s("d9f7");t["a"]=n["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"===typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(o["F"])(e).every((function(e){return null!=e&&"object"===Object(i["a"])(e)}))}}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var e=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var s=t.size,a=void 0===s?0:s;return e+a}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(o["v"])(t,1024===this.base))},internalArrayValue:function(){return Object(o["F"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var e=this;return this.isDirty?this.internalArrayValue.map((function(t){var s=t.name,a=void 0===s?"":s,r=t.size,i=void 0===r?0:r,n=e.truncateText(a);return e.showSize?"".concat(n," (").concat(Object(o["v"])(i,1024===e.base),")"):n})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object(c["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.isMultiple?e:e?[e]:[];Object(o["i"])(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(t,s){return e.$createElement(l["a"],{props:{small:e.smallChips},on:{"click:close":function(){var t=e.internalValue;t.splice(s,1),e.internalValue=t}}},[t])})):[]},genControl:function(){var e=n["a"].options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(d["c"])(e.data.style,{display:"none"})),e},genInput:function(){var e=n["a"].options.methods.genInput.call(this);return delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(s,a){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[a],file:s,index:a}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=n["a"].options.methods.genTextFieldSlot.call(this);return t.data.on=Object(r["a"])(Object(r["a"])({},t.data.on||{}),{},{click:function(){return e.$refs.input.click()}}),t},onInput:function(e){var t=Object(a["a"])(e.target.files||[]);this.internalValue=this.isMultiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(e.slice(0,t),"…").concat(e.slice(e.length-t))}}})},2677:function(e,t,s){"use strict";var a=s("8654");t["a"]=a["a"]},5803:function(e,t,s){},"9d01":function(e,t,s){},b73d:function(e,t,s){"use strict";s("0481"),s("4069");var a=s("5530"),r=(s("ec29"),s("9d01"),s("fe09")),i=s("c37a"),n=s("c3f0"),l=s("0789"),o=s("490a"),c=s("80d2");t["a"]=r["a"].extend({name:"v-switch",directives:{Touch:n["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(l["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(o["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===c["x"].left&&this.isActive||e.keyCode===c["x"].right&&!this.isActive)&&this.onChange()}}})},dcef:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pa-6"},[s("v-data-table",{staticClass:"elevation-1 overflow-hidden",attrs:{loading:e.loading,headers:e.headers,items:e.users.data,options:e.pagination,"footer-props":{itemsPerPageOptions:e.itemsPerPageOptions},"server-items-length":e.users.meta?e.users.meta.total:0,dark:""},on:{"update:options":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[s("v-container",{staticClass:"grey darken-4 elevation-1 pt-6 px-7",staticStyle:{"max-width":"100%!important"}},[s("v-row",[s("v-col",{staticClass:"primary--text headline",attrs:{cols:"12"}},[s("v-btn",{staticClass:"mr-3 elevation-0",attrs:{"x-small":"",fab:"",color:"primary"},on:{click:function(t){return e.reloadUsers()}}},[s("v-icon",{staticClass:"black--text",attrs:{small:""}},[e._v("fas fa-redo-alt")])],1),s("small",[e._v("User Management")])],1),s("v-col",{attrs:{cols:"12"}},[s("v-row",[s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3",sm:"12"}},[s("div",[s("v-text-field",{attrs:{disabled:e.loading,label:"Search User...","prepend-inner-icon":"fas fa-user",outlined:"",color:"primary",clearable:"",flat:"",dense:"",dark:"",type:"text"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),s("v-col",{staticClass:"py-2",attrs:{cols:"12",md:"3",sm:"12"}},[s("v-select",{attrs:{disabled:e.loading,"prepend-inner-icon":"fas fa-user",items:e.roles,"item-text":"name","item-value":"id",label:"Role",clearable:"",dense:"",dark:"",outlined:""},model:{value:e.roleId,callback:function(t){e.roleId=t},expression:"roleId"}})],1),s("v-col",{staticClass:"py-2",attrs:{cols:"12",md:"3",sm:"12"}},[s("v-select",{attrs:{disabled:e.loading,"prepend-inner-icon":"fas fa-user",items:[{text:"Active",value:0},{text:"Blocked",value:1}],label:"Status",clearable:"",dense:"",dark:"",outlined:""},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3",sm:"12"}},[s("v-btn",{staticClass:"elevation-1 black--text",attrs:{color:"primary",block:""},on:{click:function(t){e.addUserDialog=!0}}},[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fas fa-plus")]),e._v(" Create User ")],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.created_at",fn:function(t){var s=t.item;return[e._v(" "+e._s(e.date(s.created_at,"MMMM D, YYYY - hh:mm a"))+" ")]}},{key:"item.role",fn:function(t){var a=t.item;return[s("v-chip",{staticClass:"text-capitalize",attrs:{dark:"",color:e.roleColor(a.role.name)}},[e._v(e._s(a.role.name))])]}},{key:"item.status",fn:function(t){var a=t.item;return[s("div",{staticClass:"justify-center layout"},[s("v-switch",{attrs:{color:"success darken-1","input-value":!a.blocked,success:!a.blocked,error:a.blocked,readonly:"Admin"!==a.role.name,disabled:"Admin"===a.role.name},on:{click:function(t){e.selectedUser=a,e.toogleBlockedDialog=!0}}}),s("v-chip",{staticClass:"mt-5",class:a.blocked?"px-3":"px-5",attrs:{small:"",dark:"",color:a.blocked?"red":"success"}},[e._v(" "+e._s(a.blocked?"Blocked":"Active")+" ")])],1)]}},{key:"item.actions",fn:function(t){var a=t.item;return[s("div",{staticClass:"justify-center layout"},[s("v-btn",{staticClass:"elevation-0 blue",attrs:{dark:"",fab:"","x-small":""},on:{click:function(t){e.selectedUser=a,e.showUserDialog=!0}}},[s("v-icon",{attrs:{dark:"",small:""}},[e._v("fas fa-search")])],1),s("v-btn",{staticClass:"elevation-0 ml-2 blue",attrs:{disabled:"User"!==a.role.name,dark:"",fab:"","x-small":""},on:{click:function(t){return e.$router.push("account-summary/"+a.id)}}},[s("v-icon",{attrs:{dark:"",small:""}},[e._v("fas fa-file-alt")])],1),s("v-btn",{staticClass:"elevation-0 ml-2 yellow darken-3",attrs:{dark:"",fab:"","x-small":"",disabled:"Admin"===a.role.name},on:{click:function(t){return e.showEditUserDialog(a)}}},[s("v-icon",{attrs:{dark:"",small:""}},[e._v("fas fa-edit")])],1)],1)]}}])}),s("v-dialog",{attrs:{width:"550px","overlay-opacity":"0.6","overlay-color":"grey"},model:{value:e.showUserDialog,callback:function(t){e.showUserDialog=t},expression:"showUserDialog"}},[s("v-card",{attrs:{dark:""}},[s("v-card-title",{staticClass:"pb-8"},[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary"}},[e._v("fas fa-user")]),s("span",{staticClass:"headline primary--text"},[s("small",[e._v("User Information")])]),s("v-spacer"),s("v-btn",{attrs:{fab:"",text:"",small:"",color:"primary"},on:{click:function(t){e.showUserDialog=!1}}},[s("v-icon",[e._v("fas fa-times")])],1)],1),e.selectedUser&&e.selectedUser.role?s("v-card-text",[s("div",{staticClass:"text-center mb-7"},[s("v-badge",{attrs:{content:e.selectedUser.blocked?"Blocked":"Active",color:e.selectedUser.blocked?"red":"green",overlap:""}},[s("v-avatar",{class:e.roleColor(e.selectedUser.role.name),attrs:{size:"150"}},[e.selectedUser.first_name&&!e.selectedUser.avatar?s("span",{staticClass:"white--text text-h3"},[e._v(" "+e._s(e.selectedUser.first_name.substr(0,1)+e.selectedUser.last_name.substr(0,1))+" ")]):s("img",{class:e.borderColorByRole(e.selectedUser.role.name),attrs:{alt:"avatar",src:e.selectedUser.avatar}})])],1)],1),s("table",{staticClass:"w-full"},[s("tr",[s("td",{staticClass:"py-2",staticStyle:{width:"210px"}},[s("b",[e._v("Role")])]),s("td",{staticClass:"py-2"},[e._v(" "+e._s(e.selectedUser.role.name)+" ")])]),s("tr",[s("td",{staticClass:"py-2"},[s("b",[e._v("First Name")])]),s("td",{staticClass:"py-2"},[e._v(" "+e._s(e.selectedUser.first_name)+" ")])]),s("tr",[s("td",{staticClass:"py-2"},[s("b",[e._v("Middle Name")])]),s("td",{staticClass:"py-2"},[e._v(" "+e._s(e.selectedUser.middle_name)+" ")])]),s("tr",[s("td",{staticClass:"py-2"},[s("b",[e._v("Last Name")])]),s("td",{staticClass:"py-2"},[e._v(" "+e._s(e.selectedUser.last_name)+" ")])]),s("tr",[s("td",{staticClass:"py-2"},[s("b",[e._v("Username")])]),s("td",{staticClass:"py-2"},[e._v(" "+e._s(e.selectedUser.username)+" ")])]),s("tr",[s("td",{staticClass:"py-2"},[s("b",[e._v("Email")])]),s("td",{staticClass:"py-2"},[e._v(" "+e._s(e.selectedUser.email)+" ")])]),s("tr",[s("td",{staticClass:"py-2"},[s("b",[e._v("Mobile Number")])]),s("td",{staticClass:"py-2"},[e._v(" "+e._s(e.selectedUser.mobile_no)+" ")])]),"User"===e.selectedUser.role.name?[s("tr",[s("td",{staticClass:"py-2"},[s("b",[e._v("Address")])]),s("td",{staticClass:"py-2"},[e._v(" "+e._s(e.selectedUser.address)+" ")])]),s("tr",[s("td",{staticClass:"py-2"},[s("b",[e._v("BDO")])]),s("td",{staticClass:"py-2"},[e._v(" "+e._s(e.selectedUser.bdo_account)+" ")])]),s("tr",[s("td",{staticClass:"py-2"},[s("b",[e._v("Eastwest")])]),s("td",{staticClass:"py-2"},[e._v(" "+e._s(e.selectedUser.eastwest_account)+" ")])]),s("tr",[s("td",{staticClass:"py-2"},[s("b",[e._v("Security Bank")])]),s("td",{staticClass:"py-2"},[e._v(" "+e._s(e.selectedUser.security_bank_account)+" ")])])]:e._e()],2)]):e._e(),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.showUserDialog=!1}}},[s("b",[e._v("Close")])])],1)],1)],1),s("v-dialog",{attrs:{persistent:"","max-width":"900px","overlay-opacity":"0.6","overlay-color":"grey"},model:{value:e.addUserDialog,callback:function(t){e.addUserDialog=t},expression:"addUserDialog"}},[s("v-form",{ref:"addUserForm",attrs:{lazy:""},on:{submit:function(t){return t.preventDefault(),e.addUser(t)}}},[s("v-card",{attrs:{dark:""}},[s("v-card-title",{staticClass:"pb-8"},[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary"}},[e._v("fas fa-user")]),s("span",{staticClass:"headline primary--text"},[s("small",[e._v("Create User")])]),s("v-spacer"),s("v-btn",{attrs:{disabled:e.submitting,fab:"",text:"",small:"",color:"primary"},on:{click:function(t){e.$refs.addUserForm.reset(),e.addUserDialog=!1}}},[s("v-icon",[e._v("fas fa-times")])],1)],1),s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[s("v-select",{staticClass:"required",attrs:{"prepend-inner-icon":"fas fa-user",items:e.roles,rules:[function(e){return!!e||"Role is required."}],"item-text":"name",label:"Role","return-object":"",dense:"",outlined:""},model:{value:e.addUserForm.role,callback:function(t){e.$set(e.addUserForm,"role",t)},expression:"addUserForm.role"}})],1)],1),s("v-row",[s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{staticClass:"required",attrs:{rules:[function(e){return!!e||"First name is required."}],label:"First name",name:"first_name","prepend-inner-icon":"fas fa-user",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.addUserForm.first_name,callback:function(t){e.$set(e.addUserForm,"first_name",t)},expression:"addUserForm.first_name"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{attrs:{label:"Middle name",name:"middle_name","prepend-inner-icon":"fas fa-user",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.addUserForm.middle_name,callback:function(t){e.$set(e.addUserForm,"middle_name",t)},expression:"addUserForm.middle_name"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{staticClass:"required",attrs:{rules:[function(e){return!!e||"Last name is required."}],label:"Last Name",name:"last_name","prepend-inner-icon":"fas fa-user",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.addUserForm.last_name,callback:function(t){e.$set(e.addUserForm,"last_name",t)},expression:"addUserForm.last_name"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{staticClass:"required",attrs:{error:!!e.errors.username,"error-messages":e.errors.username?e.errors.username:[],rules:[function(e){return!!e||"Username is required."}],label:"Username",name:"username","prepend-inner-icon":"fas fa-user",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.addUserForm.username,callback:function(t){e.$set(e.addUserForm,"username",t)},expression:"addUserForm.username"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{staticClass:"required",attrs:{label:"Email",name:"email",error:!!e.errors.email,"error-messages":e.errors.email?e.errors.email:[],rules:[function(e){return!!e||"Email is required."},function(e){return/.+@.+\..+/.test(e)||"Email is invalid."}],"prepend-inner-icon":"fas fa-envelope",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.addUserForm.email,callback:function(t){e.$set(e.addUserForm,"email",t)},expression:"addUserForm.email"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{staticClass:"required",attrs:{label:"Mobile Number",name:"mobile_no",rules:[function(e){return!!e||"Mobile Number is required."}],"prepend-inner-icon":"fas fa-mobile",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.addUserForm.mobile_no,callback:function(t){e.$set(e.addUserForm,"mobile_no",t)},expression:"addUserForm.mobile_no"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6",sm:"12"}},[s("v-text-field",{class:"User"===e.userRole?"required":"",attrs:{label:"Address",name:"address",rules:"User"===e.userRole?[function(e){return!!e||"Address is required."}]:[],"prepend-inner-icon":"fas fa-map-marker-alt",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.addUserForm.address,callback:function(t){e.$set(e.addUserForm,"address",t)},expression:"addUserForm.address"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6",sm:"12"}},[s("v-file-input",{staticClass:"file-input-small-chips",attrs:{label:"Avatar",dense:"",outlined:"",chips:"",rules:[function(e){return!e||e.size<3e6||"Avatar must not exceed 3mb."}],accept:"image/png, image/jpeg, image/bmp","prepend-icon":"fas fa-user"},model:{value:e.addUserForm.avatar,callback:function(t){e.$set(e.addUserForm,"avatar",t)},expression:"addUserForm.avatar"}})],1),"User"===e.userRole?[s("v-col",{attrs:{cols:"12"}},[e._v(" Please add at least one bank account. "),s("span",{staticClass:"red--text"},[e._v("*")])]),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{attrs:{label:"BDO",name:"bdo_account","prepend-inner-icon":"fas fa-university",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.addUserForm.bdo_account,callback:function(t){e.$set(e.addUserForm,"bdo_account",t)},expression:"addUserForm.bdo_account"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{attrs:{label:"Eastwest",name:"eastwest_account","prepend-inner-icon":"fas fa-university",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.addUserForm.eastwest_account,callback:function(t){e.$set(e.addUserForm,"eastwest_account",t)},expression:"addUserForm.eastwest_account"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{attrs:{label:"Security Bank",name:"security_bank_account","prepend-inner-icon":"fas fa-university",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.addUserForm.security_bank_account,callback:function(t){e.$set(e.addUserForm,"security_bank_account",t)},expression:"addUserForm.security_bank_account"}})],1)]:e._e()],2)],1),s("v-card-actions",{staticClass:"pt-0"},[s("v-spacer"),s("v-btn",{attrs:{color:"primary",text:"",disabled:e.submitting},on:{click:function(t){e.$refs.addUserForm.reset(),e.addUserDialog=!1}}},[s("b",[e._v("Close")])]),s("v-btn",{attrs:{color:"primary",text:"",loading:e.submitting,disabled:e.submitting,type:"submit"}},[s("b",[e._v("Save")])])],1)],1)],1)],1),s("v-dialog",{attrs:{persistent:"","max-width":"900px","overlay-opacity":"0.6","overlay-color":"grey"},model:{value:e.editUserDialog,callback:function(t){e.editUserDialog=t},expression:"editUserDialog"}},[s("v-form",{ref:"editUserForm",attrs:{lazy:""},on:{submit:function(t){return t.preventDefault(),e.editUser(t)}}},[s("v-card",{attrs:{dark:""}},[s("v-card-title",{staticClass:"pb-8"},[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary"}},[e._v("fas fa-user")]),s("span",{staticClass:"headline primary--text"},[s("small",[e._v("Edit User")])]),s("v-spacer"),s("v-btn",{attrs:{disabled:e.submitting,fab:"",text:"",small:"",color:"primary"},on:{click:function(t){e.$refs.editUserForm.reset(),e.editUserDialog=!1}}},[s("v-icon",[e._v("fas fa-times")])],1)],1),s("v-card-text",[s("v-row",[s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{staticClass:"required",attrs:{rules:[function(e){return!!e||"First name is required."}],label:"First name",name:"first_name","prepend-inner-icon":"fas fa-user",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.editUserForm.first_name,callback:function(t){e.$set(e.editUserForm,"first_name",t)},expression:"editUserForm.first_name"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{attrs:{label:"Middle name",name:"middle_name","prepend-inner-icon":"fas fa-user",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.editUserForm.middle_name,callback:function(t){e.$set(e.editUserForm,"middle_name",t)},expression:"editUserForm.middle_name"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{staticClass:"required",attrs:{rules:[function(e){return!!e||"Last name is required."}],label:"Last Name",name:"last_name","prepend-inner-icon":"fas fa-user",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.editUserForm.last_name,callback:function(t){e.$set(e.editUserForm,"last_name",t)},expression:"editUserForm.last_name"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{staticClass:"required",attrs:{error:!!e.errors.username,"error-messages":e.errors.username?e.errors.username:[],rules:[function(e){return!!e||"Username is required."}],label:"Username",name:"username","prepend-inner-icon":"fas fa-user",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.editUserForm.username,callback:function(t){e.$set(e.editUserForm,"username",t)},expression:"editUserForm.username"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{staticClass:"required",attrs:{label:"Email",name:"email",error:!!e.errors.email,"error-messages":e.errors.email?e.errors.email:[],rules:[function(e){return!!e||"Email is required."},function(e){return/.+@.+\..+/.test(e)||"Email is invalid."}],"prepend-inner-icon":"fas fa-envelope",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.editUserForm.email,callback:function(t){e.$set(e.editUserForm,"email",t)},expression:"editUserForm.email"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{staticClass:"required",attrs:{label:"Mobile Number",name:"mobile_no",rules:[function(e){return!!e||"Mobile Number is required."}],"prepend-inner-icon":"fas fa-mobile",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.editUserForm.mobile_no,callback:function(t){e.$set(e.editUserForm,"mobile_no",t)},expression:"editUserForm.mobile_no"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6",sm:"12"}},[s("v-text-field",{class:"User"===e.userRole?"required":"",attrs:{label:"Address",name:"address",rules:"User"===e.editUserRole?[function(e){return!!e||"Address is required."}]:[],"prepend-inner-icon":"fas fa-map-marker-alt",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.editUserForm.address,callback:function(t){e.$set(e.editUserForm,"address",t)},expression:"editUserForm.address"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6",sm:"12"}},[s("v-file-input",{staticClass:"file-input-small-chips",attrs:{label:"Avatar",dense:"",outlined:"",chips:"",rules:[function(e){return!e||e.size<2e6||"ID Picture size should be less than 2 MB."}],accept:"image/png, image/jpeg, image/bmp","prepend-icon":"fas fa-user"},model:{value:e.editUserForm.avatar,callback:function(t){e.$set(e.editUserForm,"avatar",t)},expression:"editUserForm.avatar"}})],1),"User"===e.editUserRole?[s("v-col",{attrs:{cols:"12"}},[e._v(" Please add at least one bank account. "),s("span",{staticClass:"red--text"},[e._v("*")])]),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{attrs:{label:"BDO",name:"bdo_account","prepend-inner-icon":"fas fa-university",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.editUserForm.bdo_account,callback:function(t){e.$set(e.editUserForm,"bdo_account",t)},expression:"editUserForm.bdo_account"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{attrs:{label:"Eastwest",name:"eastwest_account","prepend-inner-icon":"fas fa-university",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.editUserForm.eastwest_account,callback:function(t){e.$set(e.editUserForm,"eastwest_account",t)},expression:"editUserForm.eastwest_account"}})],1),s("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-text-field",{attrs:{label:"Security Bank",name:"security_bank_account","prepend-inner-icon":"fas fa-university",outlined:"",flat:"",dense:"",type:"text"},model:{value:e.editUserForm.security_bank_account,callback:function(t){e.$set(e.editUserForm,"security_bank_account",t)},expression:"editUserForm.security_bank_account"}})],1)]:e._e()],2)],1),s("v-card-actions",{staticClass:"pt-0"},[s("v-spacer"),s("v-btn",{attrs:{color:"primary",text:"",disabled:e.submitting},on:{click:function(t){e.editUserDialog=!1}}},[s("b",[e._v("Close")])]),s("v-btn",{attrs:{color:"primary",text:"",loading:e.submitting,disabled:e.submitting,type:"submit"}},[s("b",[e._v("Save")])])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"290","overlay-opacity":"0.6","overlay-color":"grey"},model:{value:e.toogleBlockedDialog,callback:function(t){e.toogleBlockedDialog=t},expression:"toogleBlockedDialog"}},[s("v-card",{attrs:{dark:""}},[s("v-card-title",{staticClass:"headline primary--text"},[e._v("Are you sure ?")]),s("v-card-text",[e.selectedUser.blocked?s("span",[e._v("This user will be activated.")]):s("span",[e._v("This user will be blocked.")])]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"primary",text:"",disabled:e.submitting},on:{click:function(t){e.toogleBlockedDialog=!1}}},[s("b",[e._v("Cancel")])]),s("v-btn",{attrs:{color:"primary",text:"",loading:e.submitting,disabled:e.submitting},on:{click:e.toogleUserBlocked}},[s("b",[e._v("Confirm")])])],1)],1)],1)],1)},r=[],i=(s("b0c0"),s("ac1f"),s("841c"),s("5530")),n=(s("96cf"),s("1da1")),l=s("2f62"),o=s("2ef0"),c=s.n(o),d={data:function(){return{showUserDialog:!1,addUserDialog:!1,editUserDialog:!1,toogleBlockedDialog:!1,loading:!0,submitting:!1,pagination:{page:1,itemsPerPage:10},roleId:null,selectedUser:{},errors:{},addUserForm:{},editUserForm:{},status:null,roles:[],search:null,headers:[{text:"Last Name",align:"start",sortable:!0,value:"last_name"},{text:"First Name",align:"start",sortable:!0,value:"first_name"},{text:"Middle Name",align:"start",sortable:!0,value:"middle_name"},{text:"Date Registered",align:"start",sortable:!0,value:"created_at"},{text:"Role",align:"center",sortable:!1,value:"role"},{text:"Status",align:"center",sortable:!1,value:"status"},{text:"Actions",align:"center",sortable:!1,value:"actions"}],users:{},disablePagination:!1}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getRoles();case 2:e.getUsers();case 3:case"end":return t.stop()}}),t)})))()},computed:Object(i["a"])(Object(i["a"])({},Object(l["b"])({itemsPerPageOptions:"itemsPerPageOptions"})),{},{userRole:function(){return this.addUserForm.role?this.addUserForm.role.name:""},editUserRole:function(){return this.editUserForm.role?this.editUserForm.role.name:""}}),watch:{status:function(){this.reloadUsers()},roleId:function(){this.reloadUsers()},search:c.a.debounce((function(){this.reloadUsers()}),500),pagination:{handler:function(){this.disablePagination||this.getUsers()},deep:!0}},methods:{reloadUsers:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.disablePagination=!0,e.pagination.page=1,t.next=4,e.getUsers();case 4:e.disablePagination=!1;case 5:case"end":return t.stop()}}),t)})))()},getRoles:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/roles");case 2:s=t.sent,e.roles=s.data.data;case 4:case"end":return t.stop()}}),t)})))()},getUsers:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,s=e.pagination,a={page:s.page,limit:s.itemsPerPage,role_id:e.roleId,search:e.search,blocked:e.status},s.sortBy&&s.sortBy.length>0&&(e.$set(a,"order_by",s.sortBy[0]),e.$set(a,"order_desc",s.sortDesc[0]?1:0)),t.next=7,e.$axios.get("/admin/users",{params:a});case 7:r=t.sent,e.users=r.data,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),e.showSnackbar("error",t.t0.response?t.t0.response.data.message:t.t0.message);case 14:return t.prev=14,e.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})))()},addUser:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.addUserForm.validate()){t.next=25;break}if(s=e.addUserForm,a=!s.bdo_account&&!s.eastwest_account&&!s.security_bank_account,"User"!==e.addUserForm.role.name||!a){t.next=7;break}e.showSnackbar("error","Please add at least one bank account."),t.next=25;break;case 7:for(i in t.prev=7,e.submitting=!0,r=new FormData,s)s[i]&&("role"===i?r.append("role_id",s[i].id):r.append(i,s[i]));return t.next=13,e.$axios.post("/admin/users",r);case 13:e.$refs.addUserForm.reset(),e.reset(),e.showSnackbar("success","User has been created successfully."),t.next=22;break;case 18:t.prev=18,t.t0=t["catch"](7),e.errors=t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:{},e.showSnackbar("error",t.t0.response?t.t0.response.data.message:t.t0.message);case 22:return t.prev=22,e.submitting=!1,t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[7,18,22,25]])})))()},showEditUserDialog:function(e){this.editUserForm=Object.assign({},e),delete this.editUserForm.avatar,this.editUserDialog=!0},editUser:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.editUserForm.validate()){t.next=25;break}if(s=e.editUserForm,a=!s.bdo_account&&!s.eastwest_account&&!s.security_bank_account,"User"!==s.role.name||!a){t.next=7;break}e.showSnackbar("error","Please add at least one bank account."),t.next=25;break;case 7:for(i in t.prev=7,e.submitting=!0,r=new FormData,s)s[i]&&r.append(i,s[i]);return t.next=13,e.$axios.post("/admin/users/"+s.id,r);case 13:e.$refs.editUserForm.reset(),e.reset(),e.showSnackbar("success","User has been updated successfully."),t.next=22;break;case 18:t.prev=18,t.t0=t["catch"](7),e.errors=t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:{},e.showSnackbar("error",t.t0.response?t.t0.response.data.message:t.t0.message);case 22:return t.prev=22,e.submitting=!1,t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[7,18,22,25]])})))()},toogleUserBlocked:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.submitting=!0,!e.selectedUser.blocked){t.next=7;break}return t.next=5,e.$axios.post("/admin/users/"+e.selectedUser.id+"/restore");case 5:t.next=9;break;case 7:return t.next=9,e.$axios.delete("/admin/users/"+e.selectedUser.id);case 9:e.reset(),s=e.selectedUser.blocked?"activated":"blocked",e.showSnackbar("success","User has been "+s+" successfully."),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),e.showSnackbar("error",t.t0.response?t.t0.response.data.message:t.t0.message);case 17:return t.prev=17,e.submitting=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})))()},reset:function(){this.getUsers(),this.addUserDialog=!1,this.editUserDialog=!1,this.toogleBlockedDialog=!1,this.errors={}}}},u=d,m=s("2877"),p=s("6544"),v=s.n(p),f=s("8212"),h=s("4ca6"),b=s("8336"),g=s("b0af"),y=s("99d9"),x=s("cc20"),U=s("62ad"),_=s("a523"),k=s("8fea"),C=s("169a"),w=s("23a7"),F=s("4bd4"),S=s("132d"),$=s("0fd9"),D=s("b974"),V=s("2fa4"),O=s("b73d"),j=s("8654"),A=Object(m["a"])(u,a,r,!1,null,null,null);t["default"]=A.exports;v()(A,{VAvatar:f["a"],VBadge:h["a"],VBtn:b["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VChip:x["a"],VCol:U["a"],VContainer:_["a"],VDataTable:k["a"],VDialog:C["a"],VFileInput:w["a"],VForm:F["a"],VIcon:S["a"],VRow:$["a"],VSelect:D["a"],VSpacer:V["a"],VSwitch:O["a"],VTextField:j["a"]})},ec29:function(e,t,s){},fe09:function(e,t,s){"use strict";s("4de4"),s("45fc"),s("d3b7"),s("25f0");var a=s("c37a"),r=s("5607"),i=s("2b0e"),n=i["a"].extend({name:"rippleable",directives:{ripple:r["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),l=s("8547"),o=s("58df");function c(e){e.preventDefault()}t["a"]=Object(o["a"])(a["a"],n,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,s=this.internalValue;return this.isMultiple?!!Array.isArray(s)&&s.some((function(s){return e.valueComparator(s,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,s):Boolean(s):this.valueComparator(s,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=a["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:c},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,s=this.internalValue;if(this.isMultiple){Array.isArray(s)||(s=[]);var a=s.length;s=s.filter((function(s){return!e.valueComparator(s,t)})),s.length===a&&s.push(t)}else s=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(s,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(s,t)?null:t:!s;this.validate(!0,s),this.internalValue=s,this.hasColor=s}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}})}}]);
//# sourceMappingURL=chunk-349a1c62.38d00094.js.map