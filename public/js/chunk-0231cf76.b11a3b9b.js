(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0231cf76"],{"13b3":function(t,e,i){},"1bfb":function(t,e,i){},"4f49":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-tabs",{attrs:{dark:""}},[i("v-tab",{on:{click:function(e){return t.showTabs(1)}}},[t._v("Encashment")]),i("v-tab",{on:{click:function(e){return t.showTabs(2)}}},[t._v("Encashment History")]),i("v-tab",{on:{click:function(e){return t.showTabs(3)}}},[t._v("Gift Check")])],1),i("v-divider"),1==t.tab?i("div",{staticClass:"d-flex w-full"},[i("div",{staticStyle:{width:"50%"}},[i("v-card",{staticClass:"mx-10 my-10",attrs:{dark:""}},[i("v-card-title",[i("i",{staticClass:"fas fa-money-check"}),t._v(" Encashment Information ")]),i("v-card-text",[i("h3",[t._v("Commission: ₱ 950.00")])]),i("v-card-text",[i("h4",[t._v("Tax: 10%")])]),i("v-card-text",[i("h4",[t._v("Admin Fee: ₱ 25")])]),i("v-divider"),i("v-card-text",[i("h4",[t._v("Monday 1 February 2021")])])],1),i("v-card",{staticClass:"mx-10 my-4",attrs:{dark:""}},[i("v-card-title",[i("i",{staticClass:"fas fa-calculator"}),t._v(" Calculations ")]),i("v-card-text",[i("div",{staticClass:"d-flex w-full justify-space-between"},[i("h4",[t._v("Admin Fee")]),i("h4",[t._v("25")])])]),i("v-card-text",[i("div",{staticClass:"d-flex w-full justify-space-between"},[i("h4",[t._v("Tax")]),i("h4",[t._v("+")]),i("h4",[t._v("0")])]),i("v-divider"),i("div",{staticClass:"d-flex w-full justify-space-between"},[i("h3",[t._v("Total Fee:")]),i("h3",[t._v("25")])]),i("div",{staticClass:"my-6"},[i("h3",[t._v("Requested Amount:")])]),i("div",{staticClass:"d-flex w-full justify-space-between"},[i("h4",[t._v("Total Fee")]),i("h4",[t._v("-")]),i("h4",[t._v("0")])]),i("v-divider"),i("div",{staticClass:"d-flex w-full justify-space-between my-2"},[i("h2",[t._v("Net Amount:")]),i("h2",[t._v("₱ -25.00")])])],1)],1)],1),i("div",{staticStyle:{width:"50%"}},[i("v-card",{staticClass:"mx-10 my-10",attrs:{dark:""}},[i("v-card-title",[i("i",{staticClass:"fas fa-money-check"}),t._v(" Encashment")]),i("div",{staticClass:"d-flex w-full mx-4"},[i("v-checkbox",{attrs:{label:"Bank"},model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}}),i("v-checkbox",{staticClass:"mx-4",attrs:{label:"Padala Center"},model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}})],1),i("div",{staticClass:"mx-4"},[i("v-text-field",{staticClass:"gray",attrs:{label:"Amount",rules:t.rules,"hide-details":"auto"}})],1),i("div",[i("v-checkbox",{staticClass:"mx-4",attrs:{label:"Please check the box if you want to continue the transaction."},model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}})],1),i("div",{staticClass:"d-flex w-full my-2"},[i("v-btn",{staticClass:"mx-4 my-4",attrs:{depressed:"",color:"success"}},[t._v(" Continue ")]),i("v-btn",{staticClass:"mx-4 my-4",attrs:{depressed:"",color:"primary"}},[t._v(" Reset ")])],1)],1)],1)]):t._e(),2==t.tab?i("div",[i("v-card",{staticClass:"mx-10 my-10",attrs:{dark:""}},[i("v-card-title",[t._v("Encashment History")])],1),i("v-card",{staticClass:"mx-10"},[i("v-data-table",{staticClass:"elevation-1",attrs:{dark:"",headers:t.headers,items:t.directReferral,"items-per-page":5}})],1)],1):t._e(),3==t.tab?i("div",{staticClass:"d-flex w-full"},[i("div",{staticStyle:{width:"50%"}},[i("v-card",{staticClass:"mx-10 my-10",attrs:{dark:""}},[i("v-card-title",[t._v("Available Gift check: "),i("strong",[t._v("1")])])],1),i("v-card",{attrs:{dark:"",color:"mx-10 my-2"}},[i("v-card-title",[t._v("WITHDRAW GIFT CHECK FORM")]),i("v-text-field",{staticClass:"mx-4",attrs:{value:"1",label:"Withdraw Gift check",readonly:""}}),i("div",{staticClass:"mx-4 mb-4 py-4"},[i("v-btn",{staticClass:"success"},[t._v("Claim")])],1)],1)],1),i("div",{staticStyle:{width:"50%"}},[i("v-card",{staticClass:"mr-10 ml-10 my-10",attrs:{dark:""}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.giftsHeaders,items:t.giftChecks,"items-per-page":5}})],1)],1)]):t._e()],1)},n=[],a={data:function(){return{tab:1,rules:[function(t){return!!t||"Required."}],headers:[{text:" Gross Amount",align:"start",sortable:!1,value:"grossAmount"},{text:"Amin Fee",value:"adminFee"},{text:"Tax(%10)",value:"tax"},{text:"Net Amount",value:"netAmount"},{text:"Payment Type",value:"paymentType"},{text:"Date Received",value:"dateReceived"},{text:"Status",value:"status"}],directReferral:[{grossAmount:5e3,adminFee:200,tax:100,netAmount:400,paymentType:"commision",dateReceived:"July 4th 2020, 10:06:43 am",status:"Active"},{grossAmount:5e3,adminFee:200,tax:100,netAmount:400,paymentType:"commision",dateReceived:"July 4th 2020, 10:06:43 am",status:"Active"},{grossAmount:5e3,adminFee:200,tax:100,netAmount:400,paymentType:"commision",dateReceived:"July 4th 2020, 10:06:43 am",status:"Active"},{grossAmount:5e3,adminFee:200,tax:100,netAmount:400,paymentType:"commision",dateReceived:"July 4th 2020, 10:06:43 am",status:"Active"}],giftsHeaders:[{text:"Gift Check",value:"giftCheck"},{text:"Date Requested",value:"dateRequest"},{text:"status",value:"status"}],giftChecks:[{giftCheck:"sample1",dateRequest:"April 19, 2021",status:"active"},{giftCheck:"sample1",dateRequest:"April 19, 2021",status:"active"},{giftCheck:"sample1",dateRequest:"April 19, 2021",status:"active"}]}},methods:{showTabs:function(t){this.tab=t}}},r=a,o=(i("8ef6"),i("2877")),l=i("6544"),c=i.n(l),h=i("8336"),u=i("b0af"),d=i("99d9"),f=(i("d3b7"),i("25f0"),i("5530")),v=(i("6ca7"),i("ec29"),i("9d26")),p=i("c37a"),m=i("fe09"),g=m["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({},p["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(v["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(f["a"])(Object(f["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),b=i("8fea"),x=i("ce7e"),w=(i("c975"),i("ac1f"),i("5319"),i("4e82")),y=i("1c87"),C=i("7560"),k=i("80d2"),$=i("58df"),O=Object($["a"])(y["a"],Object(w["a"])("tabsBar"),C["a"]),I=O.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({"v-tab":!0},y["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render:function(t){var e=this,i=this.generateRouteLink(),s=i.tag,n=i.data;return n.attrs=Object(f["a"])(Object(f["a"])({},n.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),n.on=Object(f["a"])(Object(f["a"])({},n.on),{},{keydown:function(t){t.keyCode===k["x"].enter&&e.click(t),e.$emit("keydown",t)}}),t(s,n,this.$slots.default)}}),A=(i("b0c0"),i("a9e3"),i("1bfb"),i("b85c")),S=(i("99af"),i("caad"),i("fb6a"),i("608c"),i("0789")),_=i("604c"),T=i("e4cd"),B=i("dc22"),V=i("c3f0"),R=Object($["a"])(_["a"],T["a"]).extend({name:"base-slide-group",directives:{Resize:B["a"],Touch:V["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(f["a"])(Object(f["a"])({},_["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,i=t.wrapper;return e>Math.abs(this.scrollOffset)+i},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var i="".concat(t[0].toUpperCase()).concat(t.slice(1)),s=this["has".concat(i)];return this.showArrows||s?this.$createElement(v["a"],{props:{disabled:!s}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(S["d"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,i,s){var n=i?-1:1,a=n*s+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(a,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,i=t.wrapper,s=e.clientWidth-i.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,i,s){var n=t.clientWidth,a=i?e.content-t.offsetLeft-n:t.offsetLeft;i&&(s=-s);var r=e.wrapper+s,o=n+a,l=.4*n;return a<=s?s=Math.max(a-l,0):r<=o&&(s=Math.min(s-(r-o-l),e.content-e.wrapper)),i?-s:s},calculateCenteredOffset:function(t,e,i){var s=t.offsetLeft,n=t.clientWidth;if(i){var a=e.content-s-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,a))}var r=s+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,r))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,i=e.content,s=e.wrapper;t.widths={content:i?i.clientWidth:0,wrapper:s?s.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),j=(R.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),i("d10f")),E=Object($["a"])(R,j["a"],C["a"]).extend({name:"v-tabs-bar",provide:function(){return{tabsBar:this}},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({},R.options.computed.classes.call(this)),{},{"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows},this.themeClasses)}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider:function(){this.isBooted&&this.$emit("call:slider")},genContent:function(){var t=R.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange:function(t,e){if(!this.mandatory){var i,s=this.items,n=t.path,a=e.path,r=!1,o=!1,l=Object(A["a"])(s);try{for(l.s();!(i=l.n()).done;){var c=i.value;if(c.to===n?r=!0:c.to===a&&(o=!0),r&&o)break}}catch(h){l.e(h)}finally{l.f()}!r&&o&&(this.internalValue=void 0)}}},render:function(t){var e=R.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),D=(i("7db0"),i("c740"),i("13b3"),i("afdd")),P=_["a"].extend({name:"v-window",directives:{Touch:V["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(f["a"])(Object(f["a"])({},_["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var s,n=this,a={click:function(t){t.stopPropagation(),n.changedByDelimiters=!0,i()}},r={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},o=null!=(s=null==this.$scopedSlots[t]?void 0:this.$scopedSlots[t]({on:a,attrs:r}))?s:[this.$createElement(D["a"],{props:{icon:!0},attrs:r,on:a},[this.$createElement(v["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},o)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){var n=this.genIcon("next",s,this.next);n&&t.push(n)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,s=i-1;return i<=2?t<e:t===s&&0===e||(0!==t||e!==s)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var s=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:s})}return t("div",i,[this.genContainer()])}}),M=P.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({},P.options.computed.classes.call(this)),{},{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(t,e){return t.id||_["a"].options.methods.getValue.call(this,t,e)}}}),N=i("a9ad"),W=Object($["a"])(N["a"]).extend({name:"v-tabs-slider",render:function(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),z=i("a452"),F=Object($["a"])(N["a"],z["a"],C["a"]),H=F.extend().extend({name:"v-tabs",directives:{Resize:B["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:function(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes:function(){return Object(f["a"])({"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical},this.themeClasses)},isReversed:function(){return this.$vuetify.rtl&&this.vertical},sliderStyles:function(){return{height:Object(k["g"])(this.slider.height),left:this.isReversed?void 0:Object(k["g"])(this.slider.left),right:this.isReversed?Object(k["g"])(this.slider.right):void 0,top:this.vertical?Object(k["g"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(k["g"])(this.slider.width)}},computedColor:function(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted:function(){var t=this;this.$nextTick((function(){window.setTimeout(t.callSlider,30)}))},methods:{callSlider:function(){var t=this;return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((function(){var e=t.$refs.items.selectedItems[0];if(!e||!e.$el)return t.slider.width=0,void(t.slider.left=0);var i=e.$el;t.slider={height:t.vertical?i.scrollHeight:Number(t.sliderSize),left:t.vertical?0:i.offsetLeft,right:t.vertical?0:i.offsetLeft+i.offsetWidth,top:i.offsetTop,width:t.vertical?Number(t.sliderSize):i.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar:function(t,e){var i=this,s={style:{height:Object(k["g"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:function(t){i.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(E,s,[this.genSlider(e),t])},genItems:function(t,e){var i=this;return t||(e.length?this.$createElement(M,{props:{value:this.internalValue},on:{change:function(t){i.internalValue=t}}},e):null)},genSlider:function(t){return this.hideSlider?null:(t||(t=this.$createElement(W,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize:function(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes:function(){for(var t=null,e=null,i=[],s=[],n=this.$slots.default||[],a=n.length,r=0;r<a;r++){var o=n[r];if(o.componentOptions)switch(o.componentOptions.Ctor.options.name){case"v-tabs-slider":e=o;break;case"v-tabs-items":t=o;break;case"v-tab-item":i.push(o);break;default:s.push(o)}else s.push(o)}return{tab:s,slider:e,items:t,item:i}}},render:function(t){var e=this.parseNodes(),i=e.tab,s=e.slider,n=e.items,a=e.item;return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(i,s),this.genItems(n,a)])}}),L=i("8654"),q=Object(o["a"])(r,s,n,!1,null,"3384d502",null);e["default"]=q.exports;c()(q,{VBtn:h["a"],VCard:u["a"],VCardText:d["b"],VCardTitle:d["c"],VCheckbox:g,VDataTable:b["a"],VDivider:x["a"],VTab:I,VTabs:H,VTextField:L["a"]})},"608c":function(t,e,i){},"6ca7":function(t,e,i){},"8ef6":function(t,e,i){"use strict";i("c54a")},c54a:function(t,e,i){},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i("4de4"),i("45fc"),i("d3b7"),i("25f0");var s=i("c37a"),n=i("5607"),a=i("2b0e"),r=a["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),o=i("8547"),l=i("58df");function c(t){t.preventDefault()}e["a"]=Object(l["a"])(s["a"],r,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var s=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===s&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-0231cf76.b11a3b9b.js.map