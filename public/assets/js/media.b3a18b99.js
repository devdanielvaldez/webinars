import{b as g,d}from"./app.e5c25aad.js";import{d as h}from"./vendor/vendor-essential.41987d0e.js";function p(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}p()||alert($t("misc.get_user_media_not_supported"));navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(navigator.enumerateDevices=function(t){navigator.mediaDevices.enumerateDevices().then(t)});typeof MediaStreamTrack<"u"&&"getSources"in MediaStreamTrack||navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices;const l=function(t){if(t=Object.assign({},{type:null,loop:!1,duration:1e3},t),!t.type)return;const e=new Audio;return e.preload="auto",e.autoplay=!0,e.loop=t.loop,e.src=`/sound/${t.type}.mp3`,e.play().then(()=>{setTimeout(()=>{e&&e.pause()},t.duration)}).catch(o=>{console.error(o)}),e},b=function(t=!0){if(!(document.hasFocus()&&!t))return l({type:"incoming",loop:!0,duration:3e4})},w=function(t=!0){if(!(document.hasFocus()&&!t))return l({type:"calling",loop:!0,duration:3e4})},F=function(t=!0){if(!(document.hasFocus()&&!t))return l({type:"message",duration:3e3})},S=function(t=!0){if(!(document.hasFocus()&&!t))return l({type:"screenshot",duration:3e3})},D=async function(t={},m,e=!0){const o=document.querySelector("link[rel=canonical]")?document.querySelector("link[rel=canonical]").href:document.location.href,r=t.url?t.url:o;if(e&&navigator.share){const i={title:t.title?t.title:document.title,text:t.text?t.text:document.description,url:r},a=(n,{name:c,type:f})=>new File([n],c,{type:n.type,lastModified:new Date().getTime()}),s=async n=>await(await fetch(n)).blob(),u=async n=>await(await fetch(n)).blob();if(t.file){let n=[];const c=t.file.dataUrl?await u(t.file.dataUrl):await s(t.file.path),f=await a(c,t.file);n.push(f),n.length&&navigator.canShare&&navigator.canShare({files:n})&&(i.files=n)}navigator.share(i).catch(console.error)}else{let i={showCancelButton:!0,confirmButtonText:$t("misc.share_alert.confirm_btn"),cancelButtonText:$t("misc.share_alert.cancel_btn")};t.alertTitle&&(i.title=t.alertTitle),t.alertHtml?i.html=t.alertHtml:i.text=$t("misc.share_alert.text"),g.fire(i).then(a=>{a.value&&(d(r),setTimeout(()=>{m()},500))})}},z=function(t={}){const e=Object.assign({},{data:null,icon:"",size:350,iconSize:60,success:null,error:null},t);if(!e.data||!e.success)throw"Insufficient parameters!";const o=document.createElement("canvas");o.width=e.size,o.height=e.size;const r=o.getContext("2d");r.clearRect(0,0,o.width,o.height);let i=new Image;i.crossOrigin="Anonymous",i.setAttribute("crossorigin","Anonymous");const a=n=>{const c=(e.size-e.iconSize)/2;r.beginPath(),r.rect(c-4,c-4,e.iconSize+8,e.iconSize+8),r.fillStyle="#FFFFFF",r.fill(),r.drawImage(n,c,c,e.iconSize,e.iconSize)},s=document.createElement("canvas");s.width=e.iconSize,s.height=e.iconSize,s.crossOrigin="Anonymous",s.setAttribute("crossorigin","Anonymous");const u=s.getContext("2d");u.clearRect(0,0,s.width,s.height),u.crossOrigin="Anonymous",h.toCanvas(o,e.data,{errorCorrectionLevel:"H",margin:2,width:e.size},n=>{if(n){if(e.error&&_.isFunction(e.error)){e.error(n);return}throw console.error(n),n}e.icon?(i.crossOrigin="Anonymous",i.setAttribute("crossorigin","Anonymous"),i.onload=()=>{a(i),e.success&&_.isFunction(e.success)&&e.success(o.toDataURL("image/png"))},i.src=e.icon+"?v="+uuid()):e.success&&_.isFunction(e.success)&&e.success(o.toDataURL("image/png"))})};export{b as a,w as b,S as c,z as g,F as p,D as s};