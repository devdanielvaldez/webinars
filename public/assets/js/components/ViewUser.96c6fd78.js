import{m as i}from"../vendor/vendor-core.b127d6f1.js";import{P as n,a as r,b as u,c as p,d}from"../default-profile-image-female.0dd92339.js";import{P as a}from"../default-profile-image-male.529a2fd5.js";import{n as f}from"../_plugin-vue2_normalizer.7b9a2fe2.js";import{m as v}from"../vendor/vendor-bootstrap-vue.8cf54841.js";import"../vendor/vendor-others.8d770de0.js";const c={name:"view-user",components:{BPopover:v},props:{label:{type:String,description:"View label (text before input)"},labelClasses:{type:[String,Array],description:"View label css classes",default:"d-block"},dataClasses:{type:[String,Array],description:"View css classes"},value:{type:[String,Number,Boolean,Object],description:"View value"},tag:{type:String,description:"Tag value",default:"h6"},subtitleKey:{type:String,default:"username"},subtitleSecondaryKey:{type:String,default:"email"},subArr:{type:Array},showSub:{type:Boolean,default:!0},showImage:{type:Boolean,default:!0},size:{type:String,default:"md"},showStatus:{type:Boolean,default:!0},showStatusIfOnline:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},showPopoverButtons:{type:Boolean,default:!0},focusable:{type:Boolean,default:!1},hidePopover:{type:Boolean,default:!1},inlineSub:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},popoverElementClasses:{type:String,default:""},smallAvatar:{type:Boolean,default:!1},link:{type:Object,default:null},linkSecond:{type:Object,default:null}},data(){return{elementId:"",renderPopover:!1,showPopup:!1,timer:"",isInInfo:!1}},computed:{...i("config",["configs","uiConfigs","vars"]),...i("user",["liveUsers","liveLoggedInUser"]),isLoggedIn(){return this.value&&this.liveLoggedInUser&&this.value.uuid===this.liveLoggedInUser.uuid},liveUser(){return this.value&&this.liveUsers.find(s=>s.uuid===this.value.uuid)},isOnline(){return!!this.liveUser},isUserBusy(){return this.isOnline&&!!this.liveUser.busy},computedLink(){return this.link?this.link:this.profileLink?this.profileLink:null},computedLinkSecond(){return this.linkSecond?this.linkSecond:this.ledgerLink?this.ledgerLink:null},profileLink(){return this.value?{name:"appUserView",params:{uuid:this.value.uuid,slug:this.value.slug}}:null}},methods:{getSubValue(s,e){s=s.split(".");let t=e;return s.forEach(o=>{t=t[o]}),t},computedImage(){if(!(this.value.profile&&this.value.profile.gender))return a;const s=this.value.profile.gender,e=this.value.profile.age;if(s==="male"||s.uuid==="male"){if(e){if(e.years<13)return n;if(e.years<18)return r}return a}else{if(e){if(e.years<13)return u;if(e.years<18)return p}return d}},hover(){let s=this;this.timer=setTimeout(()=>{s.showPopover()},300)},hoverOut(){let s=this;clearTimeout(s.timer),this.timer=setTimeout(()=>{s.isInInfo||s.closePopover()},200)},hoverInfo(){this.isInInfo=!0},hoverOutInfo(){this.isInInfo=!1,this.hoverOut()},showPopover(){this.showPopup=!0},closePopover(){this.showPopup=!1},onShow(){},onShown(){},onHidden(){},focusRef(s){this.$nextTick(()=>{this.$nextTick(()=>{(s.$el||s).focus()})})}},mounted(){this.$nextTick(()=>{this.renderPopover=!0})},created(){this.elementId=Math.random().toString(16).slice(2)}};var m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-view view-user"},[t("div",{staticClass:"view-group",class:[{"has-label":e.label||e.$slots.label},{"not-empty":e.value||e.value===0},{"d-inline":e.inline},`size-${e.size}`]},[e._t("label",function(){return[e.label?t("label",{class:e.labelClasses},[e._v(" "+e._s(e.label)+" ")]):e._e()]}),e._t("main",function(){return[e.value&&e.elementId?[t("div",{class:["popover-parent user-popover-parent",{"show-buttons":e.showButtons&&e.hidePopover}],attrs:{id:"Container"+e.elementId}},[t("router-link",{ref:"Button"+e.elementId,staticClass:"btn-popover-link",class:[{focusable:e.focusable}],attrs:{to:e.computedLink,disabled:!e.hidePopover&&e.showPopup,id:"Button"+e.elementId,custom:""},scopedSlots:e._u([{key:"default",fn:function({navigate:o}){return[t("button",{attrs:{role:"link"},on:{click:o,keypress:function(l){return!l.type.indexOf("key")&&e._k(l.keyCode,"enter",13,l.key,"Enter")?null:o.apply(null,arguments)}}},[t("div",{class:["popover-element",e.popoverElementClasses],on:{mouseover:e.hover,mouseout:e.hoverOut}},[e.showImage?t("div",{class:["user-image-wrapper",{"user-image-sm":e.smallAvatar}]},[e.value?t("user-avatar",{staticClass:"user-image",attrs:{user:e.value,size:e.smallAvatar?40:60,"background-color":e.vars.colors.white,"foreground-color":e.vars.colors.primary}}):e._e()],1):e._e(),t("div",{staticClass:"user-details"},[t(e.tag,{tag:"component",class:["view-data",{"inline-sub":e.inlineSub},{"user-status":!e.isLoggedIn&&e.showStatus&&(!e.showStatusIfOnline||e.showStatusIfOnline&&e.isOnline)},{"is-online":e.isOnline},{"is-offline":!e.isOnline},{"is-busy":e.isUserBusy},e.dataClasses]},[t("span",{staticClass:"title"},[e._v(e._s(e.value.profile.name))]),e.showSub&&e.inlineSub?t("small",{staticClass:"subtitle"},[e.subtitleKey?t("span",{staticClass:"bracketed"},[e._v(e._s(e.getSubValue(e.subtitleKey,e.value)))]):e._e()]):e._e()]),e._t("sub",function(){return[e._t("submain",function(){return[e.showSub&&!e.inlineSub?t("div",{staticClass:"subtitle comma-list"},[e.subtitleKey?t("span",{staticClass:"bracketed"},[e._v(e._s(e.getSubValue(e.subtitleKey,e.value)))]):e._e(),e.subtitleSecondaryKey?t("span",{staticClass:"bracketed"},[e._v(e._s(e.getSubValue(e.subtitleSecondaryKey,e.value)))]):e._e()]):e._e()]}),e._t("subextra")]})],2)])])]}}],null,!0)}),e.showButtons&&e.hidePopover?t("profile-buttons",{attrs:{link:e.link,user:e.value}}):e._e(),!e.hidePopover&&e.renderPopover?[t("b-popover",{ref:"Popover"+e.elementId,attrs:{target:"Button"+e.elementId,show:e.showPopup,placement:"auto",container:"Container"+e.elementId},on:{"update:show":function(o){e.showPopup=o},show:e.onShow,shown:e.onShown,hidden:e.onHidden}},[t("div",{staticClass:"user-popover dark-bg",on:{mouseover:e.hoverInfo,mouseout:e.hoverOutInfo}},[t("profile-card",{attrs:{name:e.value.profile.name,"sub-heading":e.value.username||"-",gender:e.value.profile.gender,image:e.value.profile.avatar,age:e.value.profile.age,"data-card-color":"whitish",to:e.profileLink,"show-buttons":e.showPopoverButtons,"user-status":e.isOnline,user:e.value},on:{buttonClicked:function(o){return e.$root.$emit("bv::hide::popover","Button"+e.elementId)}}})],1)])]:e._e()],2)]:t("span",[e._v("-")])]})],2)])},h=[],b=f(c,m,h,!1,null,null,null,null);const k=b.exports;export{k as default};
