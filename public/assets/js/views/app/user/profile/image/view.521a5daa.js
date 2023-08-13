import{I as i}from"../../../../../ImageUploader.b4512024.js";import{m as a,i as s}from"../../../../../vendor/vendor-core.b127d6f1.js";import{E as l}from"../../../../../app.e5c25aad.js";import{P as n,a as m,b as d,c as g,d as c}from"../../../../../default-profile-image-female.0dd92339.js";import{P as o}from"../../../../../default-profile-image-male.529a2fd5.js";import{n as f}from"../../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../../../event-bus.fa2a0358.js";import"../../../../../uploader.4e13ce51.js";import"../../../../../vendor/vendor-others.8d770de0.js";import"../../../../../vendor/vendor-essential.41987d0e.js";import"../../../../../vendor/vendor-bootstrap-vue.8cf54841.js";import"../../../../../vendor/vendor-vue-gtag.e72bb2d4.js";const u={components:{ImageUploader:i},data(){return{isLoading:!1}},computed:{...a("config",["configs","vars"]),...a("user",["loggedInUser"])},methods:{...s("common",["Init","Custom"]),...s("user",["GetUser"]),handleUploadError(t){this.$toasted.error(t,this.$toastConfig.error)},getUserImage(t,e){if(!t)return o;if(t.uuid==="male"){if(e){if(e.years<13)return n;if(e.years<18)return m}return o}else{if(e){if(e.years<13)return d;if(e.years<18)return g}return c}},getInitialData(){this.isLoading=!0,this.GetUser().then(t=>{this.isLoading=!1}).catch(t=>{this.isLoading=!1,l(t)})}},mounted(){this.Init({url:"users"}),this.getInitialData()}};var p=function(){var e=this,r=e._self._c;return r("base-container",{attrs:{boxed:"","with-loader":"","is-loading":e.isLoading,"loader-color":e.vars.loaderColor}},[e.loggedInUser?r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h4",{staticClass:"text-center mb-5"},[e._v(e._s(e.$t("global.upload",{attribute:e.$t("user.props.image")}))+" for "+e._s(e.loggedInUser.name))]),r("hr")]),r("div",{staticClass:"col-12 col-md-6 d-flex justify-content-center"},[r("image-uploader",{attrs:{url:"/profile/avatar","name-label":"user.props.image","existing-image":e.loggedInUser.avatar,placeholder:e.getUserImage(e.loggedInUser.gender,e.loggedInUser.age),"remove-from-server":"",profile:""},on:{uploaded:e.getInitialData,removed:e.getInitialData}})],1),r("div",{staticClass:"col-12 col-md-6 d-flex justify-content-center"},[r("image-uploader",{attrs:{url:"/profile/avatar?type=cover","name-label":"user.props.cover_image","existing-image":e.loggedInUser.cover,placeholder:e.getUserImage(e.loggedInUser.gender,e.loggedInUser.age),"remove-from-server":""},on:{uploaded:e.getInitialData,removed:e.getInitialData}})],1)]):e._e(),r("div",{staticClass:"form-footer mt-5"},[r("div",{staticClass:"left-side"},[r("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(h){return e.$router.back()}}},[r("i",{staticClass:"fas fa-chevron-left"}),e._v(" "+e._s(e.$t("general.back")))])],1)])])},v=[],I=f(u,p,v,!1,null,null,null,null);const w=I.exports;export{w as default};
