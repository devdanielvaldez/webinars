import{V as a}from"./vendor/vendor-vue2-editor.6baaf148.js";import{a as n}from"./uploader.4e13ce51.js";import{n as s}from"./_plugin-vue2_normalizer.7b9a2fe2.js";const d={name:"editor-wrapper",components:{VueEditor:a},props:{disabled:{type:Boolean,default:!1,description:"Whether input is required (adds an asterix *)"},required:{type:Boolean,default:!1,description:"Whether input is required (adds an asterix *)"},config:{type:[String,Object]},autogrow:{type:Boolean,default:!1},height:{type:String,default:""},label:{type:String,default:"Enter content"},value:{type:String,description:"Selected value"},placeholder:{type:String,default:""},error:{type:String,description:"Select error (below select)"},uploadUrl:{type:String,default:"/uploads/image"}},data(){return{configObj:{customModules:[],editorOptions:{modules:{}},editorToolbar:[[{font:[]}],[{header:[1,2,3,4,5,6,!1]}],[{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike"],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],[{align:[]},{list:"ordered"},{list:"bullet"}],["link","image"],["blockquote","code-block"],["clean"]]},minConfigObj:{customModules:[],editorOptions:{},editorToolbar:[[{font:[]}],[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],[{align:[]},{list:"ordered"},{list:"bullet"}],["link","image"],["clean"]]},leastConfigObj:{customModules:[],editorOptions:{},editorToolbar:[[{font:[]}],[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],[{align:[]}],["clean"]]}}},computed:{content:{get(){return this.value},set(r){r=r.replace(/<[^>]+/gmi,e=>e.replace(/ on\w+="[^"]*"/gmi,"")),this.$emit("input",r),this.$emit("update:error","")}},computedConfig(){if(this.config){if(this.config==="minimal")return this.minConfigObj;if(this.config==="least")return this.leastConfigObj}return this.configObj}},methods:{handleImageAdded(r,e,t,o){let i=new FormData;i.append("image",r),n({url:this.uploadUrl,data:i}).then(l=>{e.insertEmbed(t,"image",l.url),o()}).catch(l=>{console.error(err)})}},mounted(){}};var u=function(){var e=this,t=e._self._c;return t("div",{class:["editor-wrapper d-flex flex-column",{"not-empty":!!e.value},{required:e.required},e.height==="full"?"h-100":e.height?`h-${e.height}`:""]},[e.label||e.label===" "?t("label",{staticClass:"input-group-material-label"},[e._v(e._s(e.label)+" "),e.required?t("span",{staticClass:"required-asterix"},[e._v("*")]):e._e()]):e._e(),t("div",{class:{"flex-grow":e.height==="full"}},[e._t("default",function(){return[t("vue-editor",{attrs:{id:"editor",name:"content",placeholder:e.placeholder,customModules:e.computedConfig.customModules,editorOptions:e.computedConfig.editorOptions,editorToolbar:e.computedConfig.editorToolbar,useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.content,callback:function(o){e.content=o},expression:"content"}})]})],2),e._t("errorBlock",function(){return[e.error?t("div",{staticClass:"text-danger invalid-feedback error-block mt-1"},[e._v(" "+e._s(e.error)+" ")]):e._e()]})],2)},c=[],p=s(d,u,c,!1,null,null,null,null);const h=p.exports;export{h as E};
