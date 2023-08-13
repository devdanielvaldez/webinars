import{n as a}from"../../_plugin-vue2_normalizer.7b9a2fe2.js";const i={name:"base-checkbox",model:{prop:"modelValue",event:"change"},props:{modelValue:{type:[Array,String,Number,Boolean],default:!1,description:"Whether checkbox is checked"},disabled:{type:Boolean,description:"Whether checkbox is disabled"},inline:{type:Boolean,description:"Whether checkbox is inline"},clickStop:{type:Boolean,default:!1},design:{type:String,default:"default",description:"Button design (e,g primary, danger etc)"},value:{type:[Array,String,Number,Boolean],default:!0,description:"Value to check in an array"}},data(){return{cbId:"",touched:!1,checkedProxy:!1}},computed:{shouldBeChecked(){return this.modelValue instanceof Array?this.checkedProxy=this.modelValue.includes(this.value):this.checkedProxy=this.modelValue===this.value,this.checkedProxy},classes(){return[{"form-check-inline":this.inline},this.design&&!this.disabled?`control-${this.design}`:""]}},methods:{doUpdate(t=!1){if(this.touched||(this.touched=!0),this.modelValue instanceof Array){let e=[...this.modelValue];t?e.push(this.value):e.splice(e.indexOf(this.value),1),this.$emit("change",e)}else this.$emit("change",t?this.value:!1)},toggleInput(){let t=!this.checkedProxy;this.doUpdate(t)},updateInput(t){let e=t.target.checked;this.doUpdate(e)}},created(){this.cbId=Math.random().toString(16).slice(2)}};var c=function(){var e=this,s=e._self._c;return s("div",{staticClass:"custom-control custom-checkbox",class:[e.classes,{disabled:e.disabled}]},[s("input",{staticClass:"custom-control-input",attrs:{id:e.cbId,type:"checkbox",disabled:e.disabled},domProps:{checked:e.shouldBeChecked,value:e.value},on:{change:e.updateInput}}),e.clickStop?[s("label",{staticClass:"custom-control-label",attrs:{for:e.cbId},on:{click:function(l){return l.stopPropagation(),l.preventDefault(),e.toggleInput.apply(null,arguments)}}},[e._t("default",function(){return[e.inline?s("span",[e._v("\xA0")]):e._e()]})],2)]:[s("label",{staticClass:"custom-control-label",attrs:{for:e.cbId}},[e._t("default",function(){return[e.inline?s("span",[e._v("\xA0")]):e._e()]})],2)]],2)},n=[],o=a(i,c,n,!1,null,null,null,null);const r=o.exports;export{r as default};