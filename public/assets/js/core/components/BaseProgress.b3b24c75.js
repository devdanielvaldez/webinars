import{n as t}from"../../_plugin-vue2_normalizer.7b9a2fe2.js";const a={name:"base-progress",props:{striped:{type:Boolean,description:"Whether progress is striped"},animated:{type:Boolean,description:"Whether progress is animated (works only with `striped` prop together)"},label:{type:String,description:"Progress label (shown on the left above progress)"},height:{type:Number,default:8,description:"Progress line height"},type:{type:String,default:"default",description:"Progress type (e.g danger, primary etc)"},value:{type:Number,default:0,validator:r=>r>=0&&r<=100,description:"Progress value"}},computed:{computedClasses(){return[{"progress-bar-striped":this.striped},{"progress-bar-animated":this.animated},{[`bg-${this.type}`]:this.type}]}}};var i=function(){var e=this,s=e._self._c;return s("div",{staticClass:"progress-wrapper"},[s("div",{class:`progress-${e.type}`},[s("div",{staticClass:"progress-label"},[e._t("label",function(){return[s("span",[e._v(e._s(e.label))])]})],2),s("div",{staticClass:"progress-percentage"},[e._t("default",function(){return[s("span",[e._v(e._s(e.value)+"%")])]})],2)]),s("div",{staticClass:"progress",style:`height: ${e.height}px`},[s("div",{staticClass:"progress-bar",class:e.computedClasses,style:`width: ${e.value}%;`,attrs:{role:"progressbar","aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"}})])])},o=[],n=t(a,i,o,!1,null,null,null,null);const l=n.exports;export{l as default};
