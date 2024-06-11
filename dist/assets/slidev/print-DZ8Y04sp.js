import{d as p,ag as u,y as h,b as n,e,x as a,F as f,a8 as g,o as i,a6 as v,l as x,g as b}from"../modules/vue-BvPUx7_4.js";import{a as N,u as y,x as _,_ as k}from"../index-BECq2EN_.js";import{N as w}from"./NoteDisplay-D0LEBQwc.js";import"../modules/shiki-Mj_b9eym.js";const D=p({__name:"print",setup(d,{expose:c}){c();const{slides:r,total:o}=N();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${_.title}`});const m=h(()=>r.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),l={slides:r,total:o,slidesWithNote:m,get configs(){return _},NoteDisplay:w};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),S={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},H={class:"text-lg"},W={class:"font-bold flex gap-2"},j={class:"opacity-50"},C=e("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"};function M(d,c,r,o,m,l){return i(),n("div",S,[e("div",L,[e("div",T,[e("h1",V,a(o.configs.title),1),e("div",B,a(new Date().toLocaleString()),1)]),(i(!0),n(f,null,g(o.slidesWithNote,(t,s)=>(i(),n("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",H,[e("div",W,[e("div",j,a(t==null?void 0:t.no)+"/"+a(o.total),1),v(" "+a(t==null?void 0:t.title)+" ",1),C])]),x(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(i(),n("hr",F)):b("v-if",!0)]))),128))])])}const P=k(D,[["render",M],["__file","/home/cartago-reminiscense/Development/rust-workshop/rust-meetup-slides/meetup-slides/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{P as default};
