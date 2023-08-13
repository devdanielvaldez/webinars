import{t as r}from"../../../table.2ac66788.js";import{F as n}from"../../../filter.3fefb70e.js";import{M as o}from"../../../meeting-dropdown-options.525c3a15.js";import{s as l}from"../../../media.b3a18b99.js";import{a as m}from"../../../vendor/vendor-add-to-calendar-button.b6160d47.js";import{n as d}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../app.e5c25aad.js";import"../../../vendor/vendor-core.b127d6f1.js";import"../../../vendor/vendor-others.8d770de0.js";import"../../../vendor/vendor-essential.41987d0e.js";import"../../../vendor/vendor-bootstrap-vue.8cf54841.js";import"../../../vendor/vendor-vue-gtag.e72bb2d4.js";import"../../../header.31500a75.js";import"../../../event-bus.fa2a0358.js";import"../../../filter-form.85f47f17.js";const c={components:{FilterForm:n,MeetingDropdownOptions:o},extends:r,data(){return{fields:[{key:"title",label:$t("meeting.props.title"),sort:"title",transformer:"limitWords",tdClass:"td-ellipsis max-width-250px"},{key:"user",label:$t("meeting.host")},{key:"agenda",label:$t("meeting.props.agenda"),transformer:"limitWords",tdClass:"d-none td-ellipsis max-width-100px",thClass:"d-none"},{key:"type",label:$t("meeting.props.type"),transformer:"objectWithName"},{key:"category",label:$t("meeting.meeting_category.category"),transformer:"objectWithName"},{key:"accessibleViaLink",label:"",headerTitle:$t("meeting.meeting_attributes"),tdClass:"text-center"},{key:"status",label:$t("meeting.props.status")},{key:"startDateTime",label:$t("meeting.props.scheduled_on"),sort:"start_date_time",transformer:"datetime"},{key:"endedAt",label:$t("meeting.ended_at"),transformer:"datetime",thClass:"d-none",tdClass:"d-none"},{key:"period",label:$t("meeting.props.estimated_period"),thClass:"d-none",tdClass:"d-none"},{key:"createdAt",label:$t("general.created_at"),sort:"created_at",transformer:"datetime",thClass:"d-none",tdClass:"d-none"},{key:"updatedAt",label:$t("general.updated_at"),sort:"updated_at",transformer:"datetime",thClass:"d-none",tdClass:"d-none"},{key:"actions",label:"",cantHide:!0,tdClass:"actions-dropdown-wrapper"}],preRequisite:{types:[],categories:[],statuses:[]},filtersOptions:{keyword:"",type:"",category:"",status:"",startDate:"",endDate:""},sortOptions:{hasScroll:!0},columnsOptions:{hasScroll:!0},exportOptions:{orientation:"l"},permissionsRequired:{add:"create-meeting",config:"access-meeting-config"},routesRequired:{add:"appMeetingAdd",config:"appMeetingConfigGeneral"},initUrl:"meetings",dataType:"meeting"}},methods:{sameDate({startDateTime:a,endDateTime:t}){return moment(a,this.vars.serverDateTimeFormat).format(this.vars.defaultDateFormat)===moment(t,this.vars.serverDateTimeFormat).format(this.vars.defaultDateFormat)},shareURL(a){let t=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");t=t+(a.identifier?`/m/${a.identifier}`:`/app/live/meetings/${a.uuid}`);const e=a.identifier?`<span class="text-nowrap">${$t("meeting.meeting_code")}:</span> <strong class="ml-2 text-wrap-pre-line text-word-break-all"> ${a.identifier}</strong>`:null;l({title:$t("meeting.user_inviting_msg",{attribute:this.profile?this.profile.name:"User"}),alertTitle:e,alertHtml:`${$t("misc.share_alert.text")}<br><small class='text-muted'>${t}</small><br>`,url:t},()=>{this.$toasted.success($t("meeting.url_has_been_copied"),this.$toastConfig)})},addToCalendar(a){const t=a.startDateTime.split(" ");let e=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");e=e+(a.identifier?`/m/${a.identifier}`:`/app/live/meetings/${a.uuid}`);let i={name:a.title,description:$t("meeting.reminder.notification_cta")+"[br][url]"+e+"|"+e+"[/url]",startDate:t[0],options:["Apple","Google","iCal","Microsoft365","Outlook.com","Yahoo"],iCalFileName:($t("meeting.scheduled_meeting")+" "+a.identifier).replace(/\s/gi,"-"),timeZone:"UTC"};if(a.estimatedEndTime){const s=a.estimatedEndTime.split(" ");i.startTime=t[1],i.endDate=s[0],i.endTime=s[1]}m(i)}},mounted(){this.getInitialData()},created(){this.configs&&this.configs.meeting&&this.configs.meeting.cardLayout&&location.reload()}};var p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"entity-list-container"},[e("collapse-transition",{attrs:{group:!0,duration:300,tag:"div"}},[t.showFilters?e("filter-form",{key:"filters",attrs:{boxed:!0,"pre-requisite":t.preRequisite,"is-loading":t.isLoading},on:{close:t.toggleFilter}}):t._e(),e("base-container",{key:"list",staticClass:"p-0 zoom-print-85",attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[t.isInitialized?e("table-wrapper",{attrs:{meta:t.entities.meta,filtered:t.isFiltered,"add-button-route":"appMeetingAdd","add-button-permissions":["create-meeting"],"entity-title":"meeting.meeting","entities-title":"meeting.meetings","entity-description":"meeting.module_description"}},[e("b-table",{directives:[{name:"show",rawName:"v-show",value:t.entities.meta.total,expression:"entities.meta.total"}],ref:"btable",attrs:{items:t.itemsProvider,fields:t.fields,busy:t.isLoading,hover:"",striped:"",stacked:"sm","per-page":t.entities.meta.perPage,"current-page":t.entities.meta.currentPage,filters:null},on:{"update:busy":function(i){t.isLoading=i},"row-dblclicked":function(i){return t.rowClickHandler({route:"appMeetingView"},i)}},scopedSlots:t._u([{key:"cell(title)",fn:function(i){return[e("router-link",{staticClass:"row-link",attrs:{to:{name:"appMeetingView",params:{uuid:i.item.uuid}}}},[t._v(" "+t._s(i.item.title)+" ")])]}},{key:"cell(user)",fn:function(i){return[e("view-user",{staticClass:"m-0",attrs:{value:i.item.user,"inline-sub":"","show-image":!1,"data-classes":"m-0"}})]}},{key:"cell(createdAt)",fn:function(i){return[e("view-date",{staticClass:"mb-0",attrs:{value:i.item.createdAt,"with-tz":"",tag:"span","data-classes":"text-sm"}})]}},{key:"cell(updatedAt)",fn:function(i){return[e("view-date",{staticClass:"mb-0",attrs:{value:i.item.updatedAt,"with-tz":"",tag:"span","data-classes":"text-sm"}})]}},{key:"cell(startDateTime)",fn:function(i){return[e("view-date",{staticClass:"mb-0",attrs:{value:i.item.startDateTime,"with-tz":"",tag:"span","data-classes":"text-sm"}})]}},{key:"cell(endedAt)",fn:function(i){return[e("view-date",{staticClass:"mb-0",attrs:{value:i.item.endedAt,"with-tz":"",tag:"span","data-classes":"text-sm"}})]}},{key:"cell(period)",fn:function(i){return[e("view-single",{staticClass:"mb-0",attrs:{value:i.item.period,tag:"span","data-classes":"text-sm"}})]}},{key:"cell(type)",fn:function(i){return[i.item.type?e("badge",{staticClass:"mb-0",attrs:{type:"default"}},[t._v(t._s(i.item.type.name))]):t._e()]}},{key:"cell(category)",fn:function(i){return[i.item.category?e("badge",{staticClass:"mb-0",attrs:{type:"dark"}},[t._v(t._s(i.item.category.name))]):t._e()]}},{key:"cell(status)",fn:function(i){return[i.item.status?e("badge",{attrs:{rounded:"",type:t.vars.colorsForStatus["meeting-"+i.item.status]}},[t._v(t._s(i.item.status))]):t._e()]}},{key:"cell(accessibleViaLink)",fn:function(i){return[i.item.accessibleViaLink?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"text-success",attrs:{title:t.$t("meeting.props.accessible_via_link")}},[e("i",{staticClass:"fas fa-link"})]):e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"text-light",attrs:{title:t.$t("meeting.props.not_accessible_via_link")}},[e("i",{staticClass:"fas fa-link"})]),i.item.hasEvent?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-success",attrs:{title:t.$t("meeting.props.has_event")}},[e("i",{staticClass:"far fa-calendar-check"})]):e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-light",attrs:{title:t.$t("meeting.props.does_not_have_event")}},[e("i",{staticClass:"far fa-calendar"})]),i.item.isPam?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-success",attrs:{title:t.$t("meeting.props.is_pam")}},[e("i",{staticClass:"fas fa-users"})]):e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-light",attrs:{title:t.$t("meeting.props.not_is_pam")}},[e("i",{staticClass:"fas fa-users"})]),t.allowExtraInput&&t.configs.meeting.enablePaidMeeting?[i.item.isPaid?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-success",attrs:{title:t.$t("meeting.props.is_paid")}},[e("i",{staticClass:"fas fa-dollar-sign"})]):e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-light",attrs:{title:t.$t("meeting.props.not_is_paid")}},[e("i",{staticClass:"fas fa-dollar-sign"})])]:t._e(),t.allowExtraInput&&t.configs.membership.enabled?[i.item.accessibleToMembers?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-success",attrs:{title:t.$t("meeting.props.only_accessible_to_members")}},[e("i",{staticClass:"far fa-id-badge"})]):e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-light",attrs:{title:t.$t("meeting.props.not_only_accessible_to_members")}},[e("i",{staticClass:"far fa-id-badge"})])]:t._e()]}},{key:"cell(actions)",fn:function(i){return[e("table-row-actions",[e("meeting-dropdown-options",{attrs:{meeting:i.item,configs:t.configs,hasPermission:t.hasPermission,deleteEntity:t.deleteEntity,addToCalendar:t.addToCalendar,shareURL:t.shareURL}})],1)]}}],null,!1,1192091731)})],1):t._e()],1)],1)],1)},u=[],f=d(c,p,u,!1,null,null,null,null);const A=f.exports;export{A as default};
