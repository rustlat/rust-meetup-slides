import{f as L,E as V,F as z,G as U,H as j,J as K,K as N,L as O,M as R,N as F,O as q,P as A}from"../modules/unplugin-icons-HJrS0Il2.js";import{d as I,t as B,S as G,aB as H,o as p,b as P,f as J,h as S,c as M,k as r,l as a,i as t,e as l,x as T,ad as f,ae as Y,F as Q,a8 as W,ao as v,g as X}from"../modules/vue-BvPUx7_4.js";import{L as Z}from"../modules/shiki-Mj_b9eym.js";import{u as $}from"./DrawingPreview-NMzGmxW1.js";import{V as nn}from"./ContextMenu-DqgWAjCM.js";import{_ as E}from"../index-BECq2EN_.js";import{I as en}from"./IconButton-Cm-Ts35b.js";import"./SlideContainer-BWWmvLbn.js";import"./SlideWrapper-CF52dCRP.js";import"./context-D2E7PKBk.js";const on=I({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(u,{expose:e}){e();const i=u,n=B(null),d=i.initial??{x:0,y:0},c=i.storageKey?G(i.storageKey,d):B(d),{style:g}=H(n,{initialValue:c}),s={props:i,el:n,initial:d,point:c,style:g};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function an(u,e,i,n,d,c){return p(),P("div",{ref:"el",class:"fixed",style:S(n.style)},[J(u.$slots,"default")],4)}const rn=E(on,[["render",an],["__file","/home/cartago-reminiscense/Development/rust-workshop/rust-meetup-slides/meetup-slides/node_modules/@slidev/client/internals/Draggable.vue"]]),tn=I({__name:"DrawingControls",setup(u,{expose:e}){e();const{brush:i,canClear:n,canRedo:d,canUndo:c,clear:g,drauu:s,drawingEnabled:w,drawingMode:m,drawingPinned:D,brushColors:k}=$();function y(){s.undo()}function C(){s.redo()}let _="stylus";function h(o){m.value=o,w.value=!0,o!=="eraseLine"&&(_=o)}function x(o){i.color=o,w.value=!0,m.value=_}const b={brush:i,canClear:n,canRedo:d,canUndo:c,clear:g,drauu:s,drawingEnabled:w,drawingMode:m,drawingPinned:D,brushColors:k,undo:y,redo:C,get lastDrawingMode(){return _},set lastDrawingMode(o){_=o},setDrawingMode:h,setBrushColor:x,get Menu(){return Z},VerticalDivider:nn,Draggable:rn,IconButton:en};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}),ln=l("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[l("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),sn=l("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[l("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),l("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),l("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),dn={class:"flex bg-main p-2"},cn={class:"inline-block w-7 text-center"},_n={class:"pt-.5"};function un(u,e,i,n,d,c){const g=L,s=V,w=z,m=U,D=j,k=K,y=N,C=O,_=R,h=F,x=q,b=A;return p(),M(n.Draggable,{class:t(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",n.drawingEnabled?"":n.drawingPinned?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:r(()=>[a(n.IconButton,{title:"Draw with stylus",class:t({shallow:n.drawingMode!=="stylus"}),onClick:e[0]||(e[0]=o=>n.setDrawingMode("stylus"))},{default:r(()=>[a(g)]),_:1},8,["class"]),a(n.IconButton,{title:"Draw a line",class:t({shallow:n.drawingMode!=="line"}),onClick:e[1]||(e[1]=o=>n.setDrawingMode("line"))},{default:r(()=>[ln]),_:1},8,["class"]),a(n.IconButton,{title:"Draw an arrow",class:t({shallow:n.drawingMode!=="arrow"}),onClick:e[2]||(e[2]=o=>n.setDrawingMode("arrow"))},{default:r(()=>[a(s)]),_:1},8,["class"]),a(n.IconButton,{title:"Draw an ellipse",class:t({shallow:n.drawingMode!=="ellipse"}),onClick:e[3]||(e[3]=o=>n.setDrawingMode("ellipse"))},{default:r(()=>[a(w)]),_:1},8,["class"]),a(n.IconButton,{title:"Draw a rectangle",class:t({shallow:n.drawingMode!=="rectangle"}),onClick:e[4]||(e[4]=o=>n.setDrawingMode("rectangle"))},{default:r(()=>[a(m)]),_:1},8,["class"]),a(n.IconButton,{title:"Erase",class:t({shallow:n.drawingMode!=="eraseLine"}),onClick:e[5]||(e[5]=o=>n.setDrawingMode("eraseLine"))},{default:r(()=>[a(D)]),_:1},8,["class"]),a(n.VerticalDivider),a(n.Menu,null,{popper:r(()=>[l("div",dn,[l("div",cn,T(n.brush.size),1),l("div",_n,[f(l("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>n.brush.size=o),type:"range",min:"1",max:"15",onChange:e[7]||(e[7]=o=>n.drawingMode=n.lastDrawingMode)},null,544),[[Y,n.brush.size]])])])]),default:r(()=>[a(n.IconButton,{title:"Adjust stroke width",class:t({shallow:n.drawingMode==="eraseLine"})},{default:r(()=>[sn]),_:1},8,["class"])]),_:1}),(p(!0),P(Q,null,W(n.brushColors,o=>(p(),M(n.IconButton,{key:o,title:"Set brush color",class:t(n.brush.color===o&&n.drawingMode!=="eraseLine"?"active":"shallow"),onClick:gn=>n.setBrushColor(o)},{default:r(()=>[l("div",{class:t(["w-6 h-6 transition-all transform border",n.brush.color!==o?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:S(n.drawingEnabled?{background:o}:{borderColor:o})},null,6)]),_:2},1032,["class","onClick"]))),128)),a(n.VerticalDivider),a(n.IconButton,{title:"Undo",class:t({disabled:!n.canUndo}),onClick:e[8]||(e[8]=o=>n.undo())},{default:r(()=>[a(k)]),_:1},8,["class"]),a(n.IconButton,{title:"Redo",class:t({disabled:!n.canRedo}),onClick:e[9]||(e[9]=o=>n.redo())},{default:r(()=>[a(y)]),_:1},8,["class"]),a(n.IconButton,{title:"Delete",class:t({disabled:!n.canClear}),onClick:e[10]||(e[10]=o=>n.clear())},{default:r(()=>[a(C)]),_:1},8,["class"]),a(n.VerticalDivider),a(n.IconButton,{title:n.drawingPinned?"Unpin drawing":"Pin drawing",class:t({shallow:!n.drawingPinned}),onClick:e[11]||(e[11]=o=>n.drawingPinned=!n.drawingPinned)},{default:r(()=>[f(a(_,{class:"transform -rotate-45"},null,512),[[v,n.drawingPinned]]),f(a(h,null,null,512),[[v,!n.drawingPinned]])]),_:1},8,["title","class"]),n.drawingEnabled?(p(),M(n.IconButton,{key:0,title:n.drawingPinned?"Drawing pinned":"Drawing unpinned",class:t({shallow:!n.drawingEnabled}),onClick:e[12]||(e[12]=o=>n.drawingEnabled=!n.drawingEnabled)},{default:r(()=>[f(a(x,null,null,512),[[v,n.drawingPinned]]),f(a(b,null,null,512),[[v,!n.drawingPinned]])]),_:1},8,["title","class"])):X("v-if",!0)]),_:1},8,["class"])}const hn=E(tn,[["render",un],["__file","/home/cartago-reminiscense/Development/rust-workshop/rust-meetup-slides/meetup-slides/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{hn as default};
