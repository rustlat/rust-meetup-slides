import{d as u,t as c,a7 as m,D as p,E as d,o as _,b as f,i as g}from"../modules/vue-BvPUx7_4.js";import{u as v}from"./context-D2E7PKBk.js";import{u as w}from"./DrawingPreview-NMzGmxW1.js";import{_ as b}from"../index-BECq2EN_.js";import"../modules/shiki-Mj_b9eym.js";const h=u({__name:"DrawingLayer",setup(l,{expose:s}){s();const{drauu:e,drawingEnabled:n,loadCanvas:o}=w(),a=v().$scale,t=c();m(()=>{e.mount(t.value,t.value.parentElement),p(a,i=>e.options.coordinateScale=1/i,{immediate:!0}),o()}),d(()=>{e.unmount()});const r={drauu:e,drawingEnabled:n,loadCanvas:o,scale:a,svg:t};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function D(l,s,e,n,o,a){return _(),f("svg",{ref:"svg",class:g(["w-full h-full absolute top-0",{"pointer-events-none":!n.drawingEnabled,"touch-none":n.drawingEnabled}])},null,2)}const k=b(h,[["render",D],["__file","/home/cartago-reminiscense/Development/rust-workshop/rust-meetup-slides/meetup-slides/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{k as default};
