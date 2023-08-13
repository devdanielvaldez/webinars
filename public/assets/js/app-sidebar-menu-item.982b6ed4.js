import{_ as m}from"./app.e5c25aad.js";import{n as s}from"./_plugin-vue2_normalizer.7b9a2fe2.js";import{M as r}from"./vendor/vendor-others.8d770de0.js";import{k as l}from"./vendor/vendor-bootstrap-vue.8cf54841.js";const o={name:"MenuItemContent",props:{item:{type:Object,required:!0},thumbOnRight:{type:Boolean,default:!1},menuLetterIcon:{type:Boolean,default:!1}},methods:{iconLetter(){return(this.item.meta.trans?this.$t(this.item.meta.trans,{attribute:this.$t(this.item.meta.title)}):this.$t(this.item.meta.title)).split(" ").map(e=>e.charAt(0).toUpperCase()).join("")},itemClasses(){return this.item.meta.class?this.item.meta.class:""}}};var c=function(){var e=this,t=e._self._c;return t("div",{class:["menu-item-content",e.itemClasses()]},[e.thumbOnRight?e._e():t("span",{staticClass:"menu-thumbnail"},[e.menuLetterIcon&&!e.item.meta.icon?t("span",{staticClass:"letter-icon"},[e._v(e._s(e.iconLetter()))]):e.item.meta.icon?t("i",{class:e.item.meta.icon}):t("i",{staticClass:"fas fa-caret-right text-muted-sm"})]),t("span",{staticClass:"detailed"},[t("span",{staticClass:"title"},[e._v(e._s(e.$t(e.item.meta.title)))]),t("span",{staticClass:"description"},[e._v(e._s(e.$t(e.item.meta.description)))])]),e.item.meta.badge?t("span",{class:["ml-auto",e.item.meta.badge.class],attrs:{"data-badge":e.item.meta.badge.class}},[e._v(e._s(e.$t(e.item.meta.badge.title)))]):e._e(),e.thumbOnRight?t("span",{staticClass:"menu-thumbnail"},[e.menuLetterIcon&&!e.item.meta.icon?t("span",{staticClass:"letter-icon"},[e._v(e._s(e.iconLetter()))]):e.item.meta.icon?t("i",{class:e.item.meta.icon}):t("i",{staticClass:"fas fa-caret-right text-muted-sm"})]):e._e()])},u=[],p=s(o,c,u,!1,null,"189470b5",null,null);const h=p.exports;const d={name:"MenuItem",props:{menuId:{type:String,required:!0},item:{type:Object,required:!0},parent:{type:Object},basePath:{type:String,default:""},thumbOnRight:{type:Boolean,default:!1},showChildren:{type:Boolean,default:!1},menuLetterIcon:{type:Boolean,default:!1},sidebarOpen:{type:Boolean,default:!1}},components:{BCollapse:l,MenuItem:()=>m(()=>Promise.resolve().then(()=>g),void 0),MenuItemContent:h},data(){return{isCollapseOpen:!1,wasCollapseOpen:!1}},watch:{sidebarOpen(i){i?this.isCollapseOpen=this.wasCollapseOpen:(this.wasCollapseOpen=this.isCollapseOpen,this.isCollapseOpen=!1)}},methods:{resolvePath(i){return i.meta&&i.meta.link?i.redirect:r.resolve(this.basePath,i.path)}}};var _=function(){var e=this,t=e._self._c;return t("li",{class:e.item.meta.classes},[e.item.meta.prefixTitle?[t("div",{staticClass:"section-title"},[e._v(e._s(e.$t(e.item.meta.prefixTitle)))])]:e._e(),!e.item.children||e.item.children.length===0||e.item.meta.hideChildren?[e.item.meta&&e.item.meta.link?t("a",{attrs:{target:"_blank",href:e.item.redirect}},[t("menu-item-content",{attrs:{item:e.item,"thumb-on-right":e.thumbOnRight,"menu-letter-icon":e.menuLetterIcon}})],1):e._e(),t("router-link",{attrs:{to:e.resolvePath(e.item)}},[t("menu-item-content",{attrs:{item:e.item,"thumb-on-right":e.thumbOnRight,"menu-letter-icon":e.menuLetterIcon}})],1)]:e.item.meta.hideChildren&&!e.showChildren?[t("router-link",{attrs:{to:e.resolvePath(e.item)}},[t("menu-item-content",{attrs:{item:e.item,"thumb-on-right":e.thumbOnRight,"menu-letter-icon":e.menuLetterIcon}})],1)]:e.item.meta.isHiddenNav&&e.item.children.length?[e._l(e.item.children,function(n,a){return[n.meta.isHiddenNav&&n.meta.hideChildren?e._e():t("menu-item",{key:n.name,attrs:{"menu-id":`${e.menuId}-${n.name}-${a}`,item:n,"base-path":e.resolvePath(e.item),"thumb-on-right":e.thumbOnRight,"menu-letter-icon":e.menuLetterIcon,"sidebar-open":e.sidebarOpen}})]})]:[t("a",{class:["has-children",e.isCollapseOpen?"is-open":""],on:{click:function(n){e.isCollapseOpen=!e.isCollapseOpen}}},[t("menu-item-content",{attrs:{item:e.item,"thumb-on-right":e.thumbOnRight,"menu-letter-icon":e.menuLetterIcon}})],1),t("b-collapse",{attrs:{id:e.menuId,accordion:e.parent?`sub-menu-accordion-${e.parent.title.length}`:"menu-accordion"},model:{value:e.isCollapseOpen,callback:function(n){e.isCollapseOpen=n},expression:"isCollapseOpen"}},[t("ul",{staticClass:"list-unstyled"},[e._l(e.item.children,function(n,a){return[n.meta.isHiddenNav&&n.meta.hideChildren?e._e():t("menu-item",{key:n.name||n.path,attrs:{"menu-id":`${e.menuId}-${n.name}-${a}`,item:n,"base-path":e.resolvePath(e.item),"thumb-on-right":e.thumbOnRight,"menu-letter-icon":e.menuLetterIcon,"show-children":e.showChildren,"sidebar-open":e.sidebarOpen,parent:e.item.meta}})]})],2)])]],2)},b=[],f=s(d,_,b,!1,null,"53e9d2ab",null,null);const C=f.exports,g=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{C as M};
