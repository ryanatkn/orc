import{n as C,s as B,e as d,c as U,i as b,d as h,a as j,o as W,b as z,f as F,g as G,h as D,j as m,k as H,l as J,m as K,t as M,p as I,q as k}from"../chunks/scheduler.8e25a0a1.js";import{S as Q,i as X,t as g,c as P,a as w,g as y,b as v,d as O,m as R,e as L}from"../chunks/index.e8c7260f.js";const Y="modulepreload",Z=function(o,e){return new URL(o,e).href},T={},p=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in T)return;T[f]=!0;const t=f.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!i)for(let a=r.length-1;a>=0;a--){const u=r[a];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${s}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Y,t||(c.as="script",c.crossOrigin=""),c.href=f,document.head.appendChild(c),t)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},se={};function $(o){let e,n,i;var r=o[1][0];function f(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=k(r,f(o)),o[12](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),b(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){y();const l=e;g(l.$$.fragment,1,0,()=>{L(l,1)}),P()}r?(e=k(r,f(t)),t[12](e),v(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),o[12](null),e&&L(e,t)}}}function x(o){let e,n,i;var r=o[1][0];function f(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=k(r,f(o)),o[11](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),b(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){y();const l=e;g(l.$$.fragment,1,0,()=>{L(l,1)}),P()}r?(e=k(r,f(t)),t[11](e),v(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&8215&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),o[11](null),e&&L(e,t)}}}function ee(o){let e,n,i;var r=o[1][1];function f(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=k(r,f(o)),o[10](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),b(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){y();const l=e;g(l.$$.fragment,1,0,()=>{L(l,1)}),P()}r?(e=k(r,f(t)),t[10](e),v(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&16&&(l.data=t[4]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),o[10](null),e&&L(e,t)}}}function V(o){let e,n=o[6]&&A(o);return{c(){e=z("div"),n&&n.c(),this.h()},l(i){e=F(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=G(e);n&&n.l(r),r.forEach(h),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,r){b(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&h(e),n&&n.d()}}}function A(o){let e;return{c(){e=H(o[7])},l(n){e=J(n,o[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&h(e)}}}function te(o){let e,n,i,r,f;const t=[x,$],s=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=s[e]=t[e](o);let c=o[5]&&V(o);return{c(){n.c(),i=B(),c&&c.c(),r=d()},l(a){n.l(a),i=U(a),c&&c.l(a),r=d()},m(a,u){s[e].m(a,u),b(a,i,u),c&&c.m(a,u),b(a,r,u),f=!0},p(a,[u]){let E=e;e=l(a),e===E?s[e].p(a,u):(y(),g(s[E],1,1,()=>{s[E]=null}),P(),n=s[e],n?n.p(a,u):(n=s[e]=t[e](a),n.c()),w(n,1),n.m(i.parentNode,i)),a[5]?c?c.p(a,u):(c=V(a),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(a){f||(w(n),f=!0)},o(a){g(n),f=!1},d(a){a&&(h(i),h(r)),s[e].d(a),c&&c.d(a)}}}function ne(o,e,n){let{stores:i}=e,{page:r}=e,{constructors:f}=e,{components:t=[]}=e,{form:s}=e,{data_0:l=null}=e,{data_1:c=null}=e;j(i.page.notify);let a=!1,u=!1,E=null;W(()=>{const _=i.page.subscribe(()=>{a&&(n(6,u=!0),M().then(()=>{n(7,E=document.title||"untitled page")}))});return n(5,a=!0),_});function N(_){I[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function q(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return o.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,r=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,s=_.form),"data_0"in _&&n(3,l=_.data_0),"data_1"in _&&n(4,c=_.data_1)},o.$$.update=()=>{o.$$.dirty&768&&i.page.set(r)},[t,f,s,l,c,a,u,E,i,r,N,S,q]}class oe extends Q{constructor(e){super(),X(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.17f45c28.js"),["../nodes/0.17f45c28.js","../chunks/scheduler.8e25a0a1.js","../chunks/index.e8c7260f.js","../chunks/index.de302ae2.js","../chunks/globals.7f7f1b26.js","../chunks/each.e271170e.js","../chunks/deployments.54f83227.js","../chunks/deployments.8008c137.js","../assets/0.9a4c7f37.css"],import.meta.url),()=>p(()=>import("../nodes/1.09354418.js"),["../nodes/1.09354418.js","../chunks/scheduler.8e25a0a1.js","../chunks/index.e8c7260f.js","../chunks/stores.14b89525.js","../chunks/singletons.7b5f0f3b.js","../chunks/index.de302ae2.js"],import.meta.url),()=>p(()=>import("../nodes/2.c4e107c6.js"),["../nodes/2.c4e107c6.js","../chunks/scheduler.8e25a0a1.js","../chunks/index.e8c7260f.js","../chunks/Library_Footer.37c14f0a.js","../chunks/deployments.54f83227.js","../assets/Library_Footer.8d63661c.css","../chunks/stores.14b89525.js","../chunks/singletons.7b5f0f3b.js","../chunks/index.de302ae2.js","../assets/2.a24b0649.css"],import.meta.url),()=>p(()=>import("../nodes/3.80d5a9fb.js"),["../nodes/3.80d5a9fb.js","../chunks/scheduler.8e25a0a1.js","../chunks/index.e8c7260f.js","../chunks/Package_Detail.647ceaf1.js","../chunks/each.e271170e.js","../chunks/stores.14b89525.js","../chunks/singletons.7b5f0f3b.js","../chunks/index.de302ae2.js","../chunks/deployments.54f83227.js","../assets/Package_Detail.91684d2e.css","../chunks/Page_Footer.4716a7c9.js","../chunks/Library_Footer.37c14f0a.js","../assets/Library_Footer.8d63661c.css","../assets/Page_Footer.9b31cd6c.css","../assets/3.26d6c3d9.css"],import.meta.url),()=>p(()=>import("../nodes/4.baf6ea77.js"),["../nodes/4.baf6ea77.js","../chunks/scheduler.8e25a0a1.js","../chunks/index.e8c7260f.js","../chunks/Page_Footer.4716a7c9.js","../chunks/each.e271170e.js","../chunks/singletons.7b5f0f3b.js","../chunks/index.de302ae2.js","../chunks/stores.14b89525.js","../chunks/Library_Footer.37c14f0a.js","../chunks/deployments.54f83227.js","../assets/Library_Footer.8d63661c.css","../assets/Page_Footer.9b31cd6c.css","../chunks/Page_Header.0872abed.js","../assets/Page_Header.9bf56d4d.css","../assets/4.532be894.css"],import.meta.url),()=>p(()=>import("../nodes/5.112068c3.js"),["../nodes/5.112068c3.js","../chunks/scheduler.8e25a0a1.js","../chunks/index.e8c7260f.js","../chunks/each.e271170e.js","../chunks/deployments.54f83227.js","../chunks/singletons.7b5f0f3b.js","../chunks/index.de302ae2.js","../chunks/github_helpers.13c654d7.js","../chunks/Page_Header.0872abed.js","../chunks/Page_Footer.4716a7c9.js","../chunks/stores.14b89525.js","../chunks/Library_Footer.37c14f0a.js","../assets/Library_Footer.8d63661c.css","../assets/Page_Footer.9b31cd6c.css","../assets/Page_Header.9bf56d4d.css","../assets/5.8860352f.css"],import.meta.url),()=>p(()=>import("../nodes/6.4753d589.js"),["../nodes/6.4753d589.js","../chunks/scheduler.8e25a0a1.js","../chunks/index.e8c7260f.js","../chunks/Page_Header.0872abed.js","../chunks/Page_Footer.4716a7c9.js","../chunks/each.e271170e.js","../chunks/singletons.7b5f0f3b.js","../chunks/index.de302ae2.js","../chunks/stores.14b89525.js","../chunks/Library_Footer.37c14f0a.js","../chunks/deployments.54f83227.js","../assets/Library_Footer.8d63661c.css","../assets/Page_Footer.9b31cd6c.css","../assets/Page_Header.9bf56d4d.css","../chunks/globals.7f7f1b26.js","../chunks/github_helpers.13c654d7.js","../assets/6.24db6535.css"],import.meta.url),()=>p(()=>import("../nodes/7.4d86257c.js"),["../nodes/7.4d86257c.js","../chunks/scheduler.8e25a0a1.js","../chunks/index.e8c7260f.js","../chunks/Page_Footer.4716a7c9.js","../chunks/each.e271170e.js","../chunks/singletons.7b5f0f3b.js","../chunks/index.de302ae2.js","../chunks/stores.14b89525.js","../chunks/Library_Footer.37c14f0a.js","../chunks/deployments.54f83227.js","../assets/Library_Footer.8d63661c.css","../assets/Page_Footer.9b31cd6c.css","../chunks/Deployments_Tree.b7b67f9f.js","../chunks/Package_Detail.647ceaf1.js","../assets/Package_Detail.91684d2e.css","../assets/Deployments_Tree.b6444533.css","../chunks/Page_Header.0872abed.js","../assets/Page_Header.9bf56d4d.css","../assets/7.d5a55026.css"],import.meta.url),()=>p(()=>import("../nodes/8.b68d9d7f.js"),["../nodes/8.b68d9d7f.js","../chunks/deployments.8008c137.js","../chunks/deployments.54f83227.js","../chunks/scheduler.8e25a0a1.js","../chunks/index.e8c7260f.js","../chunks/stores.14b89525.js","../chunks/singletons.7b5f0f3b.js","../chunks/index.de302ae2.js","../chunks/Page_Footer.4716a7c9.js","../chunks/each.e271170e.js","../chunks/Library_Footer.37c14f0a.js","../assets/Library_Footer.8d63661c.css","../assets/Page_Footer.9b31cd6c.css","../chunks/Page_Header.0872abed.js","../assets/Page_Header.9bf56d4d.css","../chunks/Deployments_Tree.b7b67f9f.js","../chunks/Package_Detail.647ceaf1.js","../assets/Package_Detail.91684d2e.css","../assets/Deployments_Tree.b6444533.css","../assets/8.3c21a9bd.css"],import.meta.url)],le=[],fe={"/":[2],"/about":[3],"/modules":[4],"/pull_requests":[5],"/table":[6],"/tree":[7],"/tree/[slug]":[8]},ce={handleError:({error:o})=>{console.error(o)}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
