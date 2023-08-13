import{A as o}from"../../../app-dashboard-header.a5a0f4f1.js";import{m as r,i as l}from"../../../vendor/vendor-core.b127d6f1.js";import{n as i}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../app-page-header-wrapper.7c301931.js";const n={name:"stat-box",props:{stat:{type:Object},isFetching:{type:Boolean,default:!0}},data(){return{}},computed:{...r("config",["vars"])},methods:{},mounted(){}};var d=function(){var t=this,s=t._self._c;return s("card",{staticClass:"stat-widget min-height-150px",attrs:{shadow:""}},[t._t("default",function(){return[s("div",{staticClass:"stat-details"},[s("h5",{staticClass:"card-title text-uppercase mb-2 nowrap"},[t._v(t._s(t.stat.label))]),s("div",{staticClass:"row"},[s("div",{staticClass:"col d-flex align-items-center"},[s("span",{staticClass:"h3 font-weight-bold mb-0"},[t._v(t._s(t.stat.value))])]),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"icon icon-shape text-white rounded-circle shadow",class:t.stat.color},[s("animated-loader",{attrs:{"is-loading":t.isFetching,"loader-color":t.vars.colors.white,"overlay-color":"transparent"}}),t.isFetching?t._e():s("i",{class:t.stat.icon})],1)])]),t.stat.extra&&t.stat.extra.today?s("p",{staticClass:"mt-2 mb-0 text-muted text-sm nowrap"},[s("span",{class:["mr-1",t.stat.extra.today.color]},[s("i",{class:t.stat.extra.today.icon})]),s("span",{class:["d-inline-block mb-0 mr-1",t.stat.extra.today.color]},[t._v(t._s(t.stat.extra.today.value)+" "+t._s(t.stat.extra.today.label))])]):t._e()])]})],2)},c=[],m=i(n,d,c,!1,null,"625977e6",null,null);const _=m.exports;const h={components:{AppDashboardHeader:o,StatBox:_},data(){return{isLoading:!1}},computed:{...r("config",["configs","vars","dashboardLayout"]),...r("common",["others"]),...r("user",["hasActiveMembership","membershipExpiryDate"])},methods:{...l("common",["Custom","SetOthers"]),getInitialData(){this.isLoading=!0,this.Custom({url:"dashboard/stats",method:"get"}).then(a=>{this.SetOthers({stats:a}),this.isLoading=!1}).catch(a=>{this.isLoading=!1,formUtil.handleErrors(a)})}},mounted(){this.getInitialData()},beforeRouteEnter(a,t,s){s(e=>{e.$store.state.config.ui.appIsLoading=!1})}};var p=function(){var t=this,s=t._self._c;return s("app-dashboard-header",{class:[{"d-none":t.dashboardLayout!=="default"}]},[s("div",{class:["header-body",{"min-height-150px":t.configs.dashboard.enableWidgetStats}]},[s("animated-loader",{attrs:{"is-loading":t.isLoading&&!(t.others.stats&&t.others.stats.length),"loader-color":t.vars.colors.white,"overlay-color":"transparent"}}),t.others.alerts?s("div",{staticClass:"row dashboard-alerts"},t._l(t.others.alerts,function(e){return s("div",{key:e.title,staticClass:"col-12"},[s("div",{class:["alert fade show mb-element",`alert-${e.type}`,{"alert-dismissible":e.dismissible}],attrs:{role:"alert"}},[s("div",{staticClass:"alert-content"},[e.title?s("h4",[t._v(t._s(e.title))]):t._e(),e.description?s("p",{staticClass:"mb-0"},[t._v(t._s(e.description))]):t._e()]),e.link?[e.link.route?s("router-link",{staticClass:"btn btn-lg alert-btn",attrs:{to:{name:e.link.route}}},[t._v(t._s(e.link.text))]):e.link.href?s("a",{attrs:{href:e.link.href,target:e.link.target?e.link.target:"_self"}},[t._v(t._s(e.link.text))]):t._e()]:t._e(),e.dismissible?s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("\xD7")])]):t._e()],2)])}),0):t._e(),t.configs.dashboard.enableWidgetStats&&t.others.stats&&t.others.stats.length?s("div",{staticClass:"row"},t._l(t.others.stats,function(e){return s("div",{key:e.label+Math.random(),staticClass:"col-12 col-sm-6 col-md-3"},[s("stat-box",{attrs:{"is-fetching":t.isLoading,stat:e}})],1)}),0):t._e(),t.configs.membership.dashboardAlertStartMembership&&!t.hasActiveMembership&&!t.membershipExpiryDate?s("div",{staticClass:"dashboard-alerts mt-element"},[s("div",{staticClass:"alert fade show mb-element alert-info",attrs:{role:"alert"}},[s("div",{staticClass:"alert-content"},[s("h4",[t._v(t._s(t.$t("membership.dashboard_alert_start.title")))]),s("p",{staticClass:"mb-0"},[t._v(t._s(t.$t("membership.dashboard_alert_start.description")))])]),s("router-link",{staticClass:"btn btn-lg alert-btn",attrs:{to:{name:"appMembershipList"}}},[t._v(t._s(t.$t("membership.start_membership")))])],1)]):t.configs.membership.dashboardAlertMembershipExpired&&!t.hasActiveMembership&&t.membershipExpiryDate?s("div",{staticClass:"dashboard-alerts mt-element"},[s("div",{staticClass:"alert fade show mb-element alert-danger",attrs:{role:"alert"}},[s("div",{staticClass:"alert-content"},[s("h4",[t._v(t._s(t.$t("membership.dashboard_alert_expired.title")))]),s("p",{staticClass:"mb-0"},[t._v(t._s(t.$t("membership.dashboard_alert_expired.description")))])]),s("router-link",{staticClass:"btn btn-lg alert-btn",attrs:{to:{name:"appMembershipList"}}},[t._v(t._s(t.$t("membership.renew_membership")))])],1)]):t._e()],1)])},b=[],v=i(h,p,b,!1,null,"5c703ebd",null,null);const C=v.exports;export{C as default};
