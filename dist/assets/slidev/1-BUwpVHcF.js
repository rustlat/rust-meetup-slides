import{q as b,B as x}from"../modules/unplugin-icons-HJrS0Il2.js";import{d as y,y as k,o as h,b as C,e as s,f as S,h as w,c as P,k as B,a6 as j,l as p,q as I,s as O}from"../modules/vue-BvPUx7_4.js";import{u as _,p as m,f as R}from"./context-D2E7PKBk.js";import{_ as g,a7 as f}from"../index-BECq2EN_.js";import"../modules/shiki-Mj_b9eym.js";function v(e){return e.startsWith("/")?"/"+e.slice(1):e}function T(e,o=!1){const r=e&&["#","rgb","hsl"].some(n=>e.indexOf(n)===0),t={background:r?e:void 0,color:e&&!r?"white":void 0,backgroundImage:r?void 0:e?o?`linear-gradient(#0005, #0008), url(${v(e)})`:`url("${v(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const z=y({__name:"cover",props:{background:{default:""}},setup(e,{expose:o}){o();const{$slidev:r,$nav:t,$clicksContext:n,$clicks:a,$page:i,$renderContext:c,$frontmatter:l}=_(),d=e,$=k(()=>T(d.background,!0)),u={$slidev:r,$nav:t,$clicksContext:n,$clicks:a,$page:i,$renderContext:c,$frontmatter:l,props:d,style:$};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),N={class:"my-auto w-full"};function V(e,o,r,t,n,a){return h(),C("div",{class:"slidev-layout cover",style:w(t.style)},[s("div",N,[S(e.$slots,"default")])],4)}const q=g(z,[["render",V],["__file","/home/cartago-reminiscense/Development/rust-workshop/rust-meetup-slides/meetup-slides/node_modules/@slidev/theme-default/layouts/cover.vue"]]),D={__name:"1",setup(e,{expose:o}){o(),m(f);const{$slidev:r,$nav:t,$clicksContext:n,$clicks:a,$page:i,$renderContext:c,$frontmatter:l}=_(),d={$slidev:r,$nav:t,$clicksContext:n,$clicks:a,$page:i,$renderContext:c,$frontmatter:l,InjectedLayout:q,get frontmatter(){return f},get useSlideContext(){return _},get _provideFrontmatter(){return m},get _frontmatterToProps(){return R}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},F=s("h2",null,"Meetup:",-1),G=s("h1",null,"Introduction to Rust",-1),H=s("p",null,"Discover the power of safe and efficient programming with Rust",-1),L={class:"pt-12"},A={class:"abs-br m-6 flex gap-2"},E={href:"https://github.com/rustlat/",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"};function M(e,o,r,t,n,a){const i=b,c=x;return h(),P(t.InjectedLayout,I(O(t._frontmatterToProps(t.frontmatter,0))),{default:B(()=>[F,G,H,s("div",L,[s("span",{onClick:o[0]||(o[0]=(...l)=>t.$slidev.nav.next&&t.$slidev.nav.next(...l)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[j(" Press Space for next page "),p(i,{class:"inline"})])]),s("div",A,[s("a",E,[p(c)])])]),_:1},16)}const X=g(D,[["render",M],["__file","/@slidev/slides/1.md"]]);export{X as default};
