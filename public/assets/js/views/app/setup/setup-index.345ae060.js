import{v as i}from"../../../vendor/vendor-vue-form-wizard.a6272628.js";import{C as n,m as l,i as c}from"../../../vendor/vendor-core.b127d6f1.js";import{f as u}from"../../../config-form.d5ff8528.js";import{n as o}from"../../../app.e5c25aad.js";import{I as m}from"../../../item-row.645e18f7.js";import{n as p}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../vendor/vendor-essential.41987d0e.js";import"../../../vendor/vendor-others.8d770de0.js";import"../../../vendor/vendor-bootstrap-vue.8cf54841.js";import"../../../vendor/vendor-vue-gtag.e72bb2d4.js";const d={extends:u,components:{FormWizard:i.exports.FormWizard,TabContent:i.exports.TabContent,CollapseTransition:n,ItemRow:m},data(){return{wizardData:{basic:{orgName:"",appName:"",appDesc:""},system:{timezone:"",currency:"",footerCredit:""},mail:{driver:"",fromName:"",fromAddress:"",smtpHost:"",smtpPort:"",smtpUsername:"",smtpPassword:"",smtpEncryption:"",mailgunDomain:"",mailgunSecret:"",mailgunEndpoint:""},pusher:{pusherAppKey:"",pusherAppId:"",pusherAppCluster:"",pusherAppSecret:""},signal:{url:""},ice:{servers:[]}},formData:{setupWizard:!0,type:"basic"},preRequisite:{timezones:[],currencies:[],mailDrivers:[],mailEncryptions:[]},newRowObj:{urls:"",requiresCredential:!1,expirableCredentials:!1,username:"",credential:"",secret:"",expiresIn:43200,timeDifference:0},formErrors:{},dataTypes:["basic","system","mail","pusher","signal","ice"],isLoading:!1}},computed:{...l("config",["vars"])},methods:{...c("config",["GetConfig","SetConfig","SetUiConfig","SetAppConfig"]),onTabChange(s,t){const e=this;this.$nextTick(()=>{e&&(t===1&&e.$refs.timezone?e.formData.type="system":t===2&&e.$refs.driver?e.formData.type="mail":t===3&&e.$refs.pusherAppId?(e.formData.type="pusher",e.$refs.pusherAppId.focus()):t===4&&e.$refs.signalUrl?(e.formData.type="signal",e.$refs.signalUrl.focus()):t===5&&(e.formData.type="ice",this.addNewRowIfNone()))})},skip(){this.$router.push({name:"appDashboard"})},finishInstallation(){this.formData.setupWizard=!1,this.submit()?(this.$toasted.success($t("setup.wizard.setup_completed"),this.$toastConfig),this.isLoading=!0,this.$nextTick(()=>{setTimeout(()=>{this.$router.push({name:"appDashboard"})},1e3)})):this.formData.setupWizard=!0},fillFormData(){this.isLoading=!0,this.dataTypes.forEach(s=>{this.wizardData[s]=formUtil.assignValues(this.wizardData[s],this.configs[s])}),this.isLoading=!1},submit(){if(this.isLoading=!0,this.beforeSubmit&&typeof this.beforeSubmit=="function"&&this.beforeSubmit()===!1){this.isLoading=!1;return}const s=_.cloneDeep(this.formData);return this.formData={...this.formData,...this.wizardData[this.formData.type]},o(this.formData).then(t=>this.GetConfig().then(()=>(this.formData=_.cloneDeep(s),this.isLoading=!1,!0)).catch(e=>(this.isLoading=!1,this.formErrors=formUtil.handleErrors(e),!1))).catch(t=>(this.isLoading=!1,this.formErrors=formUtil.handleErrors(t),!1))},hideWizard(){this.isLoading=!0;const s=_.cloneDeep(this.formData);return this.formData={...this.formData,...this.wizardData[this.formData.type]},this.formData.setupWizard=!1,o(this.formData).then(t=>this.GetConfig().then(()=>(this.formData=_.cloneDeep(s),this.$nextTick(()=>{setTimeout(()=>{this.$router.push({name:"appDashboard"})},1e3)}),!0)).catch(e=>(this.isLoading=!1,this.formErrors=formUtil.handleErrors(e),!1))).catch(t=>(this.isLoading=!1,this.formErrors=formUtil.handleErrors(t),!1))},skipTab(s,t){this.$refs.setupWizard&&this.$refs.setupWizard.changeTab(t,t+1)},unsavedCheck(s){s()},addNewRow(){const s=_.cloneDeep(this.newRowObj);this.wizardData.ice.servers.push(s)},removeRow(s){formUtil.confirmAction().then(t=>{t.value&&(this.wizardData.ice.servers.splice(s,1),this.addNewRowIfNone())})},addNewRowIfNone(){this.initianLength=this.wizardData.ice.servers.length,this.wizardData.ice.servers.length<1&&this.addNewRow()},beforeSubmit(){this.wizardData.ice.servers=this.wizardData.ice.servers.filter(s=>s.urls!=="")}},mounted(){this.getInitialData(),this.$nextTick(()=>{this.SetUiConfig({pageHeaderShow:!1})})},destroyed(){this.SetConfig({setup:!1}),this.SetUiConfig({pageHeaderShow:!0})}};var f=function(){var t=this,e=t._self._c;return e("base-container",{staticClass:"mt-element p-0",attrs:{boxed:""}},[e("animated-loader",{attrs:{"is-loading":t.isLoading,"loader-color":t.vars.loaderColor}}),e("form-wizard",{ref:"setupWizard",attrs:{color:t.vars.colors.primary,shape:"square",errorColor:t.vars.colors.danger,title:t.$t("setup.wizard.title"),subtitle:t.$t("setup.wizard.subtitle"),nextButtonText:t.$t("setup.wizard.next_button"),backButtonText:t.$t("setup.wizard.back_button"),finishButtonText:t.$t("setup.wizard.finish_button")},on:{"on-complete":t.finishInstallation,"on-change":t.onTabChange}},[e("tab-content",{attrs:{title:t.$t("config.basic.basic"),"before-change":t.submit,icon:"far fa-building"}},[e("h4",{staticClass:"text-center mb-5 mt-3"},[t._v(t._s(t.$t("setup.wizard.basic_configurations")))]),e("form",{staticClass:"form-horizontal",on:{submit:function(a){return a.preventDefault(),t.$refs.setupWizard.nextTab()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{"auto-focus":"",label:t.$t("config.basic.org_name"),type:"text",error:t.formErrors.orgName},on:{"update:error":function(a){return t.$set(t.formErrors,"orgName",a)}},model:{value:t.wizardData.basic.orgName,callback:function(a){t.$set(t.wizardData.basic,"orgName",a)},expression:"wizardData.basic.orgName"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{label:t.$t("setup.wizard.app_name"),type:"text",error:t.formErrors.appName},on:{"update:error":function(a){return t.$set(t.formErrors,"appName",a)}},model:{value:t.wizardData.basic.appName,callback:function(a){t.$set(t.wizardData.basic,"appName",a)},expression:"wizardData.basic.appName"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{label:t.$t("setup.wizard.app_desc"),type:"text",error:t.formErrors.appDesc},on:{"update:error":function(a){return t.$set(t.formErrors,"appDesc",a)}},model:{value:t.wizardData.basic.appDesc,callback:function(a){t.$set(t.wizardData.basic,"appDesc",a)},expression:"wizardData.basic.appDesc"}})],1)]),e("div",{staticClass:"d-flex justify-content-center my-4"},[e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.hideWizard}},[t._v(t._s(t.$t("setup.wizard.hide_button")))]),e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(a){return t.skipTab(a,0)}}},[t._v(t._s(t.$t("setup.wizard.skip_button")))]),e("button",{staticClass:"btn d-none",attrs:{type:"submit"}},[t._v(t._s(t.$t("setup.wizard.next_button")))])])])]),e("tab-content",{attrs:{title:t.$t("config.system.system"),"before-change":t.submit,icon:"fas fa-sliders-h"}},[e("h4",{staticClass:"text-center mb-5 mt-3"},[t._v(t._s(t.$t("setup.wizard.system_configurations")))]),e("form",{staticClass:"form-horizontal",on:{submit:function(a){return a.preventDefault(),t.$refs.setupWizard.nextTab()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-select",{ref:"timezone",attrs:{options:t.preRequisite.timezones,label:t.$t("config.system.timezone"),"allow-empty":!1,simple:"",disabled:t.isLoading},model:{value:t.wizardData.system.timezone,callback:function(a){t.$set(t.wizardData.system,"timezone",a)},expression:"wizardData.system.timezone"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-select",{attrs:{options:t.preRequisite.currencies,"track-by":"name","show-by":"description",label:t.$t("config.system.currency"),"allow-empty":!1,disabled:t.isLoading},model:{value:t.wizardData.system.currency,callback:function(a){t.$set(t.wizardData.system,"currency",a)},expression:"wizardData.system.currency"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{staticClass:"mb-5",attrs:{label:t.$t("config.system.footer_credit"),type:"text",error:t.formErrors.footerCredit},on:{"update:error":function(a){return t.$set(t.formErrors,"footerCredit",a)}},model:{value:t.wizardData.system.footerCredit,callback:function(a){t.$set(t.wizardData.system,"footerCredit",a)},expression:"wizardData.system.footerCredit"}})],1)]),e("div",{staticClass:"d-flex justify-content-center my-4"},[e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.hideWizard}},[t._v(t._s(t.$t("setup.wizard.hide_button")))]),e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(a){return t.skipTab(a,1)}}},[t._v(t._s(t.$t("setup.wizard.skip_button")))]),e("button",{staticClass:"btn d-none",attrs:{type:"submit"}},[t._v(t._s(t.$t("setup.wizard.next_button")))])])])]),e("tab-content",{attrs:{title:t.$t("config.mail.mail"),"before-change":t.submit,icon:"fas fa-envelope"}},[e("h4",{staticClass:"text-center mb-5 mt-3"},[t._v(t._s(t.$t("setup.wizard.mail_configurations")))]),e("form",{staticClass:"form-horizontal",on:{submit:function(a){return a.preventDefault(),t.$refs.setupWizard.nextTab()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-select",{ref:"driver",attrs:{options:t.preRequisite.mailDrivers,label:t.$t("config.mail.driver"),"allow-empty":!1,simple:"",disabled:t.isLoading},model:{value:t.wizardData.mail.driver,callback:function(a){t.$set(t.wizardData.mail,"driver",a)},expression:"wizardData.mail.driver"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{label:t.$t("config.mail.from_name"),type:"text",error:t.formErrors.fromName},on:{"update:error":function(a){return t.$set(t.formErrors,"fromName",a)}},model:{value:t.wizardData.mail.fromName,callback:function(a){t.$set(t.wizardData.mail,"fromName",a)},expression:"wizardData.mail.fromName"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{label:t.$t("config.mail.from_address"),type:"text",error:t.formErrors.fromAddress},on:{"update:error":function(a){return t.$set(t.formErrors,"fromAddress",a)}},model:{value:t.wizardData.mail.fromAddress,callback:function(a){t.$set(t.wizardData.mail,"fromAddress",a)},expression:"wizardData.mail.fromAddress"}})],1)]),e("collapse-transition",[t.wizardData.mail.driver==="mailgun"?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-12 col-md-6 mb-4"},[e("base-input",{attrs:{label:t.$t("config.mail.mailgun_domain"),type:"text",error:t.formErrors.mailgunDomain},on:{"update:error":function(a){return t.$set(t.formErrors,"mailgunDomain",a)}},model:{value:t.wizardData.mail.mailgunDomain,callback:function(a){t.$set(t.wizardData.mail,"mailgunDomain",a)},expression:"wizardData.mail.mailgunDomain"}})],1),e("div",{staticClass:"col-12 col-md-6 mb-4"},[e("base-input",{attrs:{label:t.$t("config.mail.mailgun_secret"),type:"text",error:t.formErrors.mailgunSecret},on:{"update:error":function(a){return t.$set(t.formErrors,"mailgunSecret",a)}},model:{value:t.wizardData.mail.mailgunSecret,callback:function(a){t.$set(t.wizardData.mail,"mailgunSecret",a)},expression:"wizardData.mail.mailgunSecret"}})],1),e("div",{staticClass:"col-12 col-md-6 mb-4"},[e("base-input",{attrs:{label:t.$t("config.mail.mailgun_endpoint"),type:"text",error:t.formErrors.mailgunEndpoint},on:{"update:error":function(a){return t.$set(t.formErrors,"mailgunEndpoint",a)}},model:{value:t.wizardData.mail.mailgunEndpoint,callback:function(a){t.$set(t.wizardData.mail,"mailgunEndpoint",a)},expression:"wizardData.mail.mailgunEndpoint"}})],1)]):t._e(),t.wizardData.mail.driver==="smtp"?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{label:t.$t("config.mail.smtp_host"),type:"text",error:t.formErrors.smtpHost},on:{"update:error":function(a){return t.$set(t.formErrors,"smtpHost",a)}},model:{value:t.wizardData.mail.smtpHost,callback:function(a){t.$set(t.wizardData.mail,"smtpHost",a)},expression:"wizardData.mail.smtpHost"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{label:t.$t("config.mail.smtp_port"),type:"text",error:t.formErrors.smtpPort},on:{"update:error":function(a){return t.$set(t.formErrors,"smtpPort",a)}},model:{value:t.wizardData.mail.smtpPort,callback:function(a){t.$set(t.wizardData.mail,"smtpPort",a)},expression:"wizardData.mail.smtpPort"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-select",{attrs:{options:t.preRequisite.mailEncryptions,label:t.$t("config.mail.smtp_encryption"),"allow-empty":!1,simple:"",disabled:t.isLoading},model:{value:t.wizardData.mail.smtpEncryption,callback:function(a){t.$set(t.wizardData.mail,"smtpEncryption",a)},expression:"wizardData.mail.smtpEncryption"}})],1),e("div",{staticClass:"col-12 col-md-6 mb-4"},[e("base-input",{attrs:{label:t.$t("config.mail.smtp_username"),type:"text",error:t.formErrors.smtpUsername},on:{"update:error":function(a){return t.$set(t.formErrors,"smtpUsername",a)}},model:{value:t.wizardData.mail.smtpUsername,callback:function(a){t.$set(t.wizardData.mail,"smtpUsername",a)},expression:"wizardData.mail.smtpUsername"}})],1),e("div",{staticClass:"col-12 col-md-6 mb-4"},[e("base-input",{attrs:{label:t.$t("config.mail.smtp_password"),type:"text",error:t.formErrors.smtpPassword},on:{"update:error":function(a){return t.$set(t.formErrors,"smtpPassword",a)}},model:{value:t.wizardData.mail.smtpPassword,callback:function(a){t.$set(t.wizardData.mail,"smtpPassword",a)},expression:"wizardData.mail.smtpPassword"}})],1)]):t._e()]),e("div",{staticClass:"d-flex justify-content-center my-4"},[e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.hideWizard}},[t._v(t._s(t.$t("setup.wizard.hide_button")))]),e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(a){return t.skipTab(a,2)}}},[t._v(t._s(t.$t("setup.wizard.skip_button")))]),e("button",{staticClass:"btn d-none",attrs:{type:"submit"}},[t._v(t._s(t.$t("setup.wizard.next_button")))])])],1)]),e("tab-content",{attrs:{title:t.$t("config.pusher.pusher"),"before-change":t.submit,icon:"fab fa-pushed"}},[e("h4",{staticClass:"text-center mb-5 mt-3"},[t._v(t._s(t.$t("setup.wizard.pusher_configurations")))]),e("form",{staticClass:"form-horizontal",on:{submit:function(a){return a.preventDefault(),t.$refs.setupWizard.nextTab()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6 mb-4"},[e("base-input",{ref:"pusherAppId",attrs:{label:t.$t("config.pusher.app_id"),type:"text",error:t.formErrors.pusherAppId},on:{"update:error":function(a){return t.$set(t.formErrors,"pusherAppId",a)}},model:{value:t.wizardData.pusher.pusherAppId,callback:function(a){t.$set(t.wizardData.pusher,"pusherAppId",a)},expression:"wizardData.pusher.pusherAppId"}})],1),e("div",{staticClass:"col-12 col-md-6 mb-4"},[e("base-input",{attrs:{label:t.$t("config.pusher.app_key"),type:"text",error:t.formErrors.pusherAppKey},on:{"update:error":function(a){return t.$set(t.formErrors,"pusherAppKey",a)}},model:{value:t.wizardData.pusher.pusherAppKey,callback:function(a){t.$set(t.wizardData.pusher,"pusherAppKey",a)},expression:"wizardData.pusher.pusherAppKey"}})],1),e("div",{staticClass:"col-12 col-md-6 mb-4"},[e("base-input",{attrs:{label:t.$t("config.pusher.app_secret"),type:"text",error:t.formErrors.pusherAppSecret},on:{"update:error":function(a){return t.$set(t.formErrors,"pusherAppSecret",a)}},model:{value:t.wizardData.pusher.pusherAppSecret,callback:function(a){t.$set(t.wizardData.pusher,"pusherAppSecret",a)},expression:"wizardData.pusher.pusherAppSecret"}})],1),e("div",{staticClass:"col-12 col-md-6 mb-4"},[e("base-input",{attrs:{label:t.$t("config.pusher.app_cluster"),type:"text",error:t.formErrors.pusherAppCluster},on:{"update:error":function(a){return t.$set(t.formErrors,"pusherAppCluster",a)}},model:{value:t.wizardData.pusher.pusherAppCluster,callback:function(a){t.$set(t.wizardData.pusher,"pusherAppCluster",a)},expression:"wizardData.pusher.pusherAppCluster"}})],1)]),t.configs.links.pusherHelper?e("a",{staticClass:"d-block mb-3",attrs:{href:t.configs.links.pusherHelper,target:"_blank"}},[t._v(t._s(t.$t("config.pusher.how_to")))]):t._e(),e("div",{staticClass:"d-flex justify-content-center my-4"},[e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.hideWizard}},[t._v(t._s(t.$t("setup.wizard.hide_button")))]),e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(a){return t.skipTab(a,3)}}},[t._v(t._s(t.$t("setup.wizard.skip_button")))]),e("button",{staticClass:"btn d-none",attrs:{type:"submit"}},[t._v(t._s(t.$t("setup.wizard.next_button")))])])])]),e("tab-content",{attrs:{title:t.$t("config.signal.signaling_server"),"before-change":t.submit,icon:"fas fa-signal"}},[e("h4",{staticClass:"text-center mb-5 mt-3"},[t._v(t._s(t.$t("setup.wizard.signal_server_configurations")))]),e("form",{staticClass:"form-horizontal",on:{submit:function(a){return a.preventDefault(),t.$refs.setupWizard.nextTab()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-4"},[e("base-input",{ref:"signalUrl",attrs:{label:t.$t("config.signal.url"),type:"text",error:t.formErrors.url},on:{"update:error":function(a){return t.$set(t.formErrors,"url",a)}},model:{value:t.wizardData.signal.url,callback:function(a){t.$set(t.wizardData.signal,"url",a)},expression:"wizardData.signal.url"}})],1)]),t.configs.links.signalHelper?e("a",{staticClass:"d-block mb-3",attrs:{href:t.configs.links.signalHelper,target:"_blank"}},[t._v(t._s(t.$t("config.signal.why_needed")))]):t._e(),e("div",{staticClass:"d-flex justify-content-center my-4"},[e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.hideWizard}},[t._v(t._s(t.$t("setup.wizard.hide_button")))]),e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(a){return t.skipTab(a,4)}}},[t._v(t._s(t.$t("setup.wizard.skip_button")))]),e("button",{staticClass:"btn d-none",attrs:{type:"submit"}},[t._v(t._s(t.$t("setup.wizard.next_button")))])])])]),e("tab-content",{attrs:{title:t.$t("config.ice_server.ice_server"),"before-change":t.submit,icon:"fas fa-voicemail"}},[e("h4",{staticClass:"text-center mb-5 mt-3"},[t._v(t._s(t.$t("setup.wizard.ice_server_configurations")))]),e("form",{staticClass:"form-horizontal",on:{submit:function(a){return a.preventDefault(),t.$refs.setupWizard.nextTab()}}},[e("collapse-transition",{attrs:{tag:"div",group:!0,duration:300}},t._l(t.wizardData.ice.servers,function(a,r){return e("item-row",{key:r,attrs:{"form-data":a,"form-errors":t.formErrors[`servers${r}`],index:r},on:{remove:function(g){return t.removeRow(r)}}})}),1),e("div",{staticClass:"my-3 d-flex justify-content-end"},[e("base-button",{attrs:{type:"button",design:"light"},on:{click:t.addNewRow}},[t._v(t._s(t.$t("general.add")))])],1),t.configs.links.iceHelper?e("a",{staticClass:"d-block mb-3",attrs:{href:t.configs.links.iceHelper,target:"_blank"}},[t._v(t._s(t.$t("config.ice_server.why_needed")))]):t._e(),e("div",{staticClass:"d-flex justify-content-center my-4"},[e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.hideWizard}},[t._v(t._s(t.$t("setup.wizard.hide_button")))]),e("button",{staticClass:"btn d-none",attrs:{type:"submit"}},[t._v(t._s(t.$t("setup.wizard.next_button")))])])],1)])],1)],1)},b=[],h=p(d,f,b,!1,null,null,null,null);const A=h.exports;export{A as default};
