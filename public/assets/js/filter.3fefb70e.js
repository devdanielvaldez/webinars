import{f as a}from"./filter-form.85f47f17.js";import{n as i}from"./_plugin-vue2_normalizer.7b9a2fe2.js";const l={extends:a};var r=function(){var e=this,t=e._self._c;return t("filter-wrapper",{attrs:{boxed:e.boxed,"is-loading":e.isLoading},on:{close:function(s){return e.$emit("close")}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{"auto-focus":"",label:e.$t("general.search_keyword"),type:"text",disabled:e.isLoading},model:{value:e.filters.keyword,callback:function(s){e.$set(e.filters,"keyword",s)},expression:"filters.keyword"}})],1),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-select",{attrs:{options:e.preRequisite.types,label:e.$t("meeting.props.type"),disabled:e.isLoading,simple:!0},model:{value:e.filters.type,callback:function(s){e.$set(e.filters,"type",s)},expression:"filters.type"}})],1),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-select",{attrs:{options:e.preRequisite.categories,label:e.$t("meeting.meeting_category.category"),disabled:e.isLoading,simple:!0},model:{value:e.filters.category,callback:function(s){e.$set(e.filters,"category",s)},expression:"filters.category"}})],1),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-select",{attrs:{options:e.preRequisite.statuses,label:e.$t("meeting.props.status"),disabled:e.isLoading,simple:!0},model:{value:e.filters.status,callback:function(s){e.$set(e.filters,"status",s)},expression:"filters.status"}})],1),t("div",{staticClass:"col-12 col-md-8 mb-4"},[t("date-between",{attrs:{label:e.$t("global.between",{attribute:e.$t("meeting.meetings")}),start:e.filters.startDate,end:e.filters.endDate,disabled:e.isLoading},on:{"update:start":function(s){return e.$set(e.filters,"startDate",s)},"update:end":function(s){return e.$set(e.filters,"endDate",s)}}})],1)])])},o=[],n=i(l,r,o,!1,null,null,null,null);const f=n.exports;export{f as F};
