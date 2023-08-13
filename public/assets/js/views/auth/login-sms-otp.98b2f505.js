import{f as a}from"../../auth-form.8b4968ff.js";import{n as i}from"../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../vendor/vendor-core.b127d6f1.js";import"../../guest-footer.14dd9e88.js";import"../../AppLogo.f7561746.js";const n={extends:a,data(){return{formData:{mobile:"",otp:""},otpRequested:!1}},methods:{submit(){this.isLoading=!0;let o=this.$route.query;const t=this.otpRequested?{...this.formData}:{mobile:this.formData.mobile};this.LoginUsingOtp(t).then(e=>{if(this.$toasted.success(e.message,this.$toastConfig),this.otpRequested){this.$gaEvent("activity","loggedin","SMSOTP");let s=e.reload?{name:"appDashboard",query:{reload:1}}:{name:"appDashboard"};o&&o.ref&&this.$router.resolve(o.ref)&&(s=this.$router.resolve(o.ref).route),this.hasRole("admin")&&this.configs.system&&this.configs.system.setupWizard&&(s={name:"setup"}),this.ResetTwoFactorSet().then(()=>{this.$router.push(s)}).catch(r=>{this.isLoading=!1,this.formErrors=formUtil.handleErrors(r)})}else this.$gaEvent("activity","loginOtpRequested","SMSOTP"),this.otpRequested=!0,this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.formErrors=formUtil.handleErrors(e)})}},mounted(){this.SetCSRF()}};var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"guest-page"},[e("box",[e("animated-loader",{attrs:{"is-loading":t.isLoading,"loader-color":t.vars.loaderColor}}),e("guest-header",[e("h5",[t._v(t._s(t.$t("auth.login.login_using_sms_otp")))])]),e("section",{attrs:{role:"main"}},[e("form",{on:{submit:function(s){return s.preventDefault(),t.submit.apply(null,arguments)}}},[e("base-input",{staticClass:"mb-3",attrs:{"auto-focus":!t.otpRequested,label:t.$t("auth.login.props.mobile"),type:"text","addon-left-icon":"fas fa-mobile",error:t.formErrors.mobile,disabled:t.otpRequested},on:{"update:error":function(s){return t.$set(t.formErrors,"mobile",s)}},model:{value:t.formData.mobile,callback:function(s){t.$set(t.formData,"mobile",s)},expression:"formData.mobile"}}),t.otpRequested?e("base-input",{staticClass:"mb-3",attrs:{"auto-focus":t.otpRequested,label:t.$t("auth.login.props.otp"),type:"text","addon-left-icon":"fas fa-key",error:t.formErrors.otp},on:{"update:error":function(s){return t.$set(t.formErrors,"otp",s)}},model:{value:t.formData.otp,callback:function(s){t.$set(t.formData,"otp",s)},expression:"formData.otp"}}):t._e(),e("div",{staticClass:"text-center"},[e("base-button",{staticClass:"my-4 text-lg",attrs:{type:"submit",design:"primary",block:""}},[t.otpRequested?e("span",[t._v(t._s(t.$t("auth.login.login")))]):e("span",[t._v(t._s(t.$t("auth.login.request_otp")))])])],1),e("div",{staticClass:"form-group m-b-0"},[e("div",{staticClass:"col-sm-12 text-center"},[e("p",[e("router-link",{staticClass:"text-primary m-l-5",attrs:{to:t.withQuery({name:"login"})}},[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("auth.login.login_using_password")))])])],1)])])],1)])],1),t.configs.system?e("guest-footer",{attrs:{"footer-credit":t.configs.system.footerCredit,version:t.configs.system.version}}):t._e()],1)},u=[],m=i(n,l,u,!1,null,"98d7eeaa",null,null);const g=m.exports;export{g as default};