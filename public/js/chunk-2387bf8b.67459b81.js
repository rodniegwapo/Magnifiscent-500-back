(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2387bf8b"],{"2bfd":function(t,e,s){},"9d01":function(t,e,s){},b73d:function(t,e,s){"use strict";s("0481"),s("4069");var a=s("5530"),n=(s("ec29"),s("9d01"),s("4de4"),s("45fc"),s("d3b7"),s("25f0"),s("c37a")),i=s("5607"),r=s("2b0e"),c=r["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),l=s("8547"),o=s("58df");function u(t){t.preventDefault()}var h=Object(o["a"])(n["a"],c,l["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,s=this.internalValue;return this.isMultiple?!!Array.isArray(s)&&s.some((function(s){return t.valueComparator(s,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,s):Boolean(s):this.valueComparator(s,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:u},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:u},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,s=this.internalValue;if(this.isMultiple){Array.isArray(s)||(s=[]);var a=s.length;s=s.filter((function(s){return!t.valueComparator(s,e)})),s.length===a&&s.push(e)}else s=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(s,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(s,e)?null:e:!s;this.validate(!0,s),this.internalValue=s,this.hasColor=s}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),d=s("c3f0"),m=s("0789"),p=s("490a"),v=s("80d2");e["a"]=h.extend({name:"v-switch",directives:{Touch:d["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(m["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(p["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===v["x"].left&&this.isActive||t.keyCode===v["x"].right&&!this.isActive)&&this.onChange()}}})},c6a6:function(t,e,s){"use strict";s("4de4"),s("7db0"),s("c975"),s("d81d"),s("45fc"),s("498a");var a=s("5530"),n=(s("2bfd"),s("b974")),i=s("8654"),r=s("d9f7"),c=s("80d2"),l=Object(a["a"])(Object(a["a"])({},n["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,s){return s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:function(){return l}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var s=Object(c["q"])(e,t.itemText),a=null!=s?String(s):"";return t.filter(e,String(t.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=n["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(a["a"])(Object(a["a"])({},l),t)},searchIsDirty:function(){return null!=this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=n["a"].options.computed.listData.call(this);return t.props=Object(a["a"])(Object(a["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var s=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){s.internalSearch&&(1===t.length||s.autoSelectFirst)&&(s.$refs.menu.getTiles(),s.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===c["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===c["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==c["x"].backspace&&t!==c["x"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var s=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===s){var a=this.selectedItems.length,n=t!==a-1?t:t-1,i=this.selectedItems[n];i?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=s}},clearableCallback:function(){this.internalSearch=null,n["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(c["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(c["o"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=n["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,s=e.value;e.value&&this.activateMenu(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;n["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){n["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){n["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,s;if(-1!==this.selectedIndex){var a=this.selectedItems[this.selectedIndex],n=this.getText(a);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}})},ced6:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pa-6"},[s("v-data-table",{staticClass:"elevation-1 overflow-hidden",attrs:{loading:t.loading,headers:t.headers,items:t.encashments.data,options:t.pagination,"footer-props":{itemsPerPageOptions:t.itemsPerPageOptions},"server-items-length":t.encashments.meta?t.encashments.meta.total:0,dark:""},on:{"update:options":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[s("v-container",{staticClass:"grey darken-4 elevation-1 pt-6 px-7",staticStyle:{"max-width":"100%!important"}},[s("v-row",[s("v-col",{staticClass:"primary--text headline",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-btn",{staticClass:"mr-3 elevation-0",attrs:{"x-small":"",fab:"",color:"primary"},on:{click:function(e){return t.reloadEncashments()}}},[s("v-icon",{staticClass:"black--text",attrs:{small:""}},[t._v("fas fa-redo-alt")])],1),s("small",[t._v("Encashment Management")])],1),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-autocomplete",{attrs:{items:t.users,"search-input":t.searchUserValue,loading:t.searchingUser,"persistent-hint":"","item-text":"full_name","item-value":"id","cache-items":"",label:"User",clearable:"","prepend-inner-icon":"fas fa-user",dense:"",outlined:"",dark:""},on:{"update:searchInput":function(e){t.searchUserValue=e},"update:search-input":function(e){t.searchUserValue=e}},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}})],1),s("v-col",{staticClass:"py-2",attrs:{cols:"12",md:"4",sm:"12"}},[s("v-select",{attrs:{disabled:t.loading,"prepend-inner-icon":"fas fa-money-check",items:[{text:"Confirmed",value:1},{text:"Pending",value:0}],label:"Status",clearable:"",dense:"",dark:"",outlined:""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)],1)],1)]},proxy:!0},{key:"item.created_at",fn:function(e){var s=e.item;return[t._v(" "+t._s(t.date(s.created_at,"MMMM D, YYYY - hh:mm a"))+" ")]}},{key:"item.amount",fn:function(e){var a=e.item;return[s("span",{staticClass:"primary--text text-button",staticStyle:{"font-size":"18px!important"}},[t._v("₱")]),t._v(" "+t._s(t.money(a.amount))+" ")]}},{key:"item.status",fn:function(e){var a=e.item;return[s("div",{staticClass:"justify-center layout"},[s("v-switch",{attrs:{color:"success darken-1","input-value":a.confirmed,success:a.confirmed,disabled:a.confirmed,readonly:""},on:{click:function(e){return t.showConfirmDialog(a)}}}),s("v-chip",{staticClass:"mt-5",class:a.confirmed?"success":"primary black--text",attrs:{small:"",dark:""}},[t._v(" "+t._s(a.confirmed?"Approved":"Pending")+" ")])],1)]}},{key:"item.actions",fn:function(e){var a=e.item;return[s("div",{staticClass:"justify-center layout"},[s("v-btn",{staticClass:"elevation-0 ml-2 blue",attrs:{dark:"",fab:"","x-small":""},on:{click:function(e){t.selectedEncashment=a,t.showEncashmentDialog=!0}}},[s("v-icon",{attrs:{dark:"",small:""}},[t._v("fas fa-search")])],1),s("v-btn",{staticClass:"elevation-0 ml-2 red",attrs:{disabled:a.confirmed,dark:"",fab:"","x-small":""},on:{click:function(e){t.selectedEncashment=a,t.deleteEncashmentDialog=!0}}},[s("v-icon",{attrs:{dark:"",small:""}},[t._v("fas fa-trash")])],1)],1)]}}])}),s("v-dialog",{attrs:{persistent:"","max-width":"500px","overlay-opacity":"0.6","overlay-color":"grey"},model:{value:t.showEncashmentDialog,callback:function(e){t.showEncashmentDialog=e},expression:"showEncashmentDialog"}},[s("v-card",{attrs:{dark:""}},[s("v-card-title",{staticClass:"pb-8"},[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary"}},[t._v("fas fa-money-check")]),s("span",{staticClass:"headline primary--text"},[s("small",[t._v("Encashment Request Information")])]),s("v-spacer"),s("v-btn",{attrs:{disabled:t.submitting,fab:"",text:"",small:"",color:"primary"},on:{click:function(e){t.showEncashmentDialog=!1}}},[s("v-icon",[t._v("fas fa-times")])],1)],1),s("v-card-text",[s("v-card",{staticClass:"px-0 elevation-0"},[t.selectedEncashment.account&&t.selectedEncashment.account?s("v-card-text",[s("table",{staticClass:"w-full"},[s("tr",[s("td",{staticClass:"py-1"},[t._v("Requested By")]),s("td",{staticClass:"py-1 white--text"},[t._v(t._s(t.selectedEncashment.account.full_name))])]),s("tr",[s("td",{staticClass:"py-1"},[t._v("Account")]),s("td",{staticClass:"py-1 white--text"},[t._v(t._s(t.selectedEncashment.account.name))])]),s("tr",[s("td",{staticClass:"py-1"},[t._v("Payment Channel")]),s("td",{staticClass:"py-1 white--text"},[t._v(t._s(t.selectedEncashment.meta.payment_channel))])]),t.selectedEncashment.bank_account?s("tr",[s("td",{staticClass:"py-1"},[t._v("Bank Account")]),s("td",{staticClass:"py-1 primary--text"},[t._v(t._s(t.selectedEncashment.bank_account))])]):t._e(),s("tr",[s("td",{staticClass:"py-1"},[t._v("Amount")]),s("td",{staticClass:"py-1 white--text"},[s("span",{staticClass:"primary--text text-button",staticStyle:{"font-size":"18px!important"}},[t._v("₱")]),t._v(" "+t._s(t.selectedEncashment.amount)+" ")])]),s("tr",[s("td",{staticClass:"py-1"},[t._v("Tax")]),s("td",{staticClass:"py-1 white--text"},[s("span",{staticClass:"red--text text-button",staticStyle:{"font-size":"18px!important"}},[t._v("₱")]),t._v(" "+t._s(t.selectedEncashment.meta.tax_fee)+" ")])]),s("tr",[s("td",{staticClass:"py-1"},[t._v("Admin Fee")]),s("td",{staticClass:"py-1 white--text"},[s("span",{staticClass:"red--text text-button",staticStyle:{"font-size":"18px!important"}},[t._v("₱")]),t._v(" "+t._s(t.selectedEncashment.meta.admin_fee)+" ")])]),s("tr",[s("td",{staticClass:"py-1"},[t._v("Net Amount")]),s("td",{staticClass:"py-1 white--text"},[s("span",{staticClass:"primary--text text-button",staticStyle:{"font-size":"18px!important"}},[t._v("₱")]),t._v(" "+t._s(t.selectedEncashment.meta.net_amount)+" ")])]),s("tr",[s("td",{staticClass:"py-1"},[t._v("Date Requested")]),s("td",{staticClass:"py-1 white--text"},[t._v(" "+t._s(t.date(t.selectedEncashment.created_at,"MMMM D, YYYY - hh:mm a"))+" ")])])])]):t._e()],1)],1),s("v-card-actions",{staticClass:"pt-0"},[s("v-spacer"),s("v-btn",{attrs:{color:"primary",text:"",disabled:t.submitting},on:{click:function(e){t.showEncashmentDialog=!1}}},[s("b",[t._v("Close")])])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"290","overlay-opacity":"0.6","overlay-color":"grey"},model:{value:t.approveEncashmentDialog,callback:function(e){t.approveEncashmentDialog=e},expression:"approveEncashmentDialog"}},[s("v-card",{attrs:{dark:""}},[s("v-card-title",{staticClass:"headline"},[t._v("Are you sure ?")]),s("v-card-text",[t._v(" This encashment will be approved. ")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"primary",text:"",disabled:t.submitting},on:{click:function(e){t.approveEncashmentDialog=!1}}},[s("b",[t._v("Cancel")])]),s("v-btn",{attrs:{color:"primary",text:"",loading:t.submitting,disabled:t.submitting},on:{click:t.approveEncashment}},[s("b",[t._v("Confirm")])])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"290","overlay-opacity":"0.6","overlay-color":"grey"},model:{value:t.deleteEncashmentDialog,callback:function(e){t.deleteEncashmentDialog=e},expression:"deleteEncashmentDialog"}},[s("v-card",{attrs:{dark:""}},[s("v-card-title",{staticClass:"headline"},[t._v("Are you sure ?")]),s("v-card-text",[t._v(" This encashment will be deleted. ")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"primary",text:"",disabled:t.submitting},on:{click:function(e){t.deleteEncashmentDialog=!1}}},[s("b",[t._v("Cancel")])]),s("v-btn",{attrs:{color:"primary",text:"",loading:t.submitting,disabled:t.submitting},on:{click:t.deleteEncashment}},[s("b",[t._v("Confirm")])])],1)],1)],1)],1)},n=[],i=s("5530"),r=(s("96cf"),s("1da1")),c=s("2f62"),l=s("2ef0"),o=s.n(l),u={data:function(){return{showEncashmentDialog:!1,approveEncashmentDialog:!1,deleteEncashmentDialog:!1,userId:null,searchingUser:!1,searchUserValue:null,loading:!0,submitting:!1,pagination:{page:1,itemsPerPage:10},selectedEncashment:{},errors:{},status:null,users:[],search:null,headers:[{text:"Requested By",align:"start",sortable:!0,value:"account.full_name"},{text:"Account",align:"start",sortable:!1,value:"account.name"},{text:"Date Requested",align:"start",value:"created_at"},{text:"Amount",align:"start",value:"amount"},{text:"Status",align:"center",sortable:!1,value:"status",width:"120px"},{text:"Actions",align:"center",sortable:!1,value:"actions",width:"120px"}],encashments:{},disablePagination:!1}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.searchUser();case 2:t.getEncashments();case 3:case"end":return e.stop()}}),e)})))()},computed:Object(i["a"])({},Object(c["b"])({itemsPerPageOptions:"itemsPerPageOptions"})),watch:{status:function(){this.reloadEncashments()},userId:function(){this.reloadEncashments()},searchUserValue:o.a.debounce((function(){this.searchUser()}),500),pagination:{handler:function(){this.disablePagination||this.getEncashments()},deep:!0}},methods:{searchUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.searchingUser=!0,e.next=4,t.$axios.get("/admin/users",{params:{search:t.searchUserValue,page:1,limit:10,role_slug:"user"}});case 4:s=e.sent,t.users=s.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.showSnackbar("error",e.t0.response?e.t0.response.data.message:e.t0.message);case 11:return e.prev=11,t.searchingUser=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()},reloadEncashments:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.disablePagination=!0,t.pagination.page=1,e.next=4,t.getEncashments();case 4:t.disablePagination=!1;case 5:case"end":return e.stop()}}),e)})))()},getEncashments:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,s=t.pagination,a={page:s.page,limit:s.itemsPerPage,meta_type:"Encashment",confirmed:t.status,user_id:t.userId},s.sortBy&&s.sortBy.length>0&&(t.$set(a,"order_by",s.sortBy[0]),t.$set(a,"order_desc",s.sortDesc[0]?1:0)),e.next=7,t.$axios.get("/admin/transactions",{params:a});case 7:n=e.sent,t.encashments=n.data,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.showSnackbar("error",e.t0.response?e.t0.response.data.message:e.t0.message);case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))()},showConfirmDialog:function(t){t.confirmed||(this.selectedEncashment=t,this.approveEncashmentDialog=!0)},approveEncashment:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.submitting=!0,e.next=4,t.$axios.put("/admin/transactions/approve-encashment/"+t.selectedEncashment.id);case 4:t.getEncashments(),t.approveEncashmentDialog=!1,t.showSnackbar("success","Encashment has been approved successfully."),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.showSnackbar("error",e.t0.response?e.t0.response.data.message:e.t0.message);case 12:return e.prev=12,t.submitting=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()},deleteEncashment:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.submitting=!0,e.next=4,t.$axios.delete("/admin/transactions/"+t.selectedEncashment.id);case 4:t.getEncashments(),t.deleteEncashmentDialog=!1,t.showSnackbar("success","Encashment has been deleted successfully."),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.showSnackbar("error",e.t0.response?e.t0.response.data.message:e.t0.message);case 12:return e.prev=12,t.submitting=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}}},h=u,d=s("2877"),m=s("6544"),p=s.n(m),v=s("c6a6"),f=s("8336"),g=s("b0af"),b=s("99d9"),y=s("cc20"),x=s("62ad"),C=s("a523"),w=s("8fea"),I=s("169a"),S=s("132d"),_=s("0fd9"),k=s("b974"),D=s("2fa4"),E=s("b73d"),V=Object(d["a"])(h,a,n,!1,null,null,null);e["default"]=V.exports;p()(V,{VAutocomplete:v["a"],VBtn:f["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VChip:y["a"],VCol:x["a"],VContainer:C["a"],VDataTable:w["a"],VDialog:I["a"],VIcon:S["a"],VRow:_["a"],VSelect:k["a"],VSpacer:D["a"],VSwitch:E["a"]})},ec29:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2387bf8b.67459b81.js.map