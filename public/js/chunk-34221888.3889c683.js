(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34221888"],{"013f":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"d-flex justify-center align-center h-full"},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"8",md:"4","offset-md":"4","offset-sm":"2"}},[s("v-card",{staticClass:"w-full",attrs:{dark:""}},[s("v-form",{ref:"login",attrs:{lazy:""},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[s("div",{staticClass:"d-flex justify-center py-8"},[s("img",{staticClass:"w-1/2",attrs:{src:"/logo.png",alt:""}})]),s("div",{staticClass:"px-16"},[s("v-text-field",{attrs:{"prepend-inner-icon":"fas fa-user",rules:[function(e){return!!e||"Email or Username is required"}],label:"Email or Username",required:"",outlined:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),s("v-text-field",{staticClass:"py-2",attrs:{"prepend-inner-icon":"fas fa-key",rules:[function(e){return!!e||"Password is required"}],label:"Password",type:"password",required:"",outlined:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),s("v-btn",{staticClass:"black--text",class:{"pointer-events-none":e.submitting},attrs:{type:"submit",color:"primary",block:"",loading:e.submitting}},[e._v(" Login ")])],1)]),s("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return[s("div",{staticClass:"d-flex w-full justify-end px-16 py-4 text-overline cursor-pointer",class:r?"primary--text":"white--text",on:{click:function(t){return e.$router.push("/register")}}},[e._v(" Not yet registered ? ")])]}}])})],1)],1)],1)],1)},a=[],n=(s("b0c0"),s("96cf"),s("1da1")),o={data:function(){return{form:{},submitting:!1}},methods:{login:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,r,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.login.validate()){t.next=31;break}return t.prev=1,e.submitting=!0,e.form.grant_type="password",e.form.client_id="2",e.form.client_secret="9GHbpgfADTIhzb7RqxOftc3GTM9Sx5MSjPY3AARk",t.next=8,e.$axios.post("/oauth/token",e.form);case 8:return s=t.sent,r=s.data.token_type+" "+s.data.access_token,e.$axios.defaults.headers.common["Authorization"]=r,t.next=13,e.$store.dispatch("getProfile");case 13:if(a=t.sent,n=a.role.name,"User"!==n){t.next=20;break}return t.next=18,e.$store.dispatch("getAccounts");case 18:o=t.sent,e.$cookies.set("account",o);case 20:e.$cookies.set("token",r,s.data.expires_in),e.$cookies.set("role",n,s.data.expires_in),e.gate(n),t.next=28;break;case 25:t.prev=25,t.t0=t["catch"](1),e.showSnackbar("error","Invalid Credentials.");case 28:return t.prev=28,e.submitting=!1,t.finish(28);case 31:case"end":return t.stop()}}),t,null,[[1,25,28,31]])})))()},gate:function(e){switch(e){case"Admin":this.$router.push("/admin/dashboard");break;case"Seller":this.$router.push("/seller/dashboard");break;default:this.$router.push("/user/dashboard");break}}}},i=o,l=s("2877"),u=s("6544"),c=s.n(u),d=s("8336"),f=s("b0af"),p=s("62ad"),m=s("4bd4"),h=s("ce87"),v=s("0fd9"),b=s("8654"),g=Object(l["a"])(i,r,a,!1,null,null,null);t["default"]=g.exports;c()(g,{VBtn:d["a"],VCard:f["a"],VCol:p["a"],VForm:m["a"],VHover:h["a"],VRow:v["a"],VTextField:b["a"]})},ce87:function(e,t,s){"use strict";var r=s("16b7"),a=s("f2e7"),n=s("58df"),o=s("d9bd");t["a"]=Object(n["a"])(r["a"],a["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(o["c"])("v-hover should only contain a single element",this),e)):(Object(o["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var e}})}}]);
//# sourceMappingURL=chunk-34221888.3889c683.js.map