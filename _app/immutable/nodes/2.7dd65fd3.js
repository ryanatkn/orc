import{n as x,e as ge,i as g,d as c,O as Le,v as ae,M as ye,b as v,s as N,f as b,g as M,c as S,h as E,U as ve,J as w,x as p,y as re,z as oe,A as ie,k as q,l as O,m as Ie,L as ne,C as z,w as Me}from"../chunks/scheduler.8e25a0a1.js";import{S as ce,i as fe,a as $,t as C,g as be,c as $e,b as R,d as B,m as G,e as K}from"../chunks/index.e8c7260f.js";import{L as Te}from"../chunks/Library_Footer.634c26b4.js";import{g as je,c as He}from"../chunks/deployments.66b18ff1.js";import{p as Ne}from"../chunks/stores.b524fbf1.js";import{e as Y}from"../chunks/singletons.10684929.js";const Se=l=>({}),Ee=l=>({}),qe=l=>({}),ke=l=>({});function we(l){let e,t;const s=l[15].icon,r=ae(s,l,l[14],ke),n=r||Oe(l);return{c(){e=v("div"),n&&n.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var i=M(e);n&&n.l(i),i.forEach(c),this.h()},h(){E(e,"class","icon svelte-515js9")},m(a,i){g(a,e,i),n&&n.m(e,null),t=!0},p(a,i){r?r.p&&(!t||i&16384)&&re(r,s,a,a[14],t?ie(s,a[14],i,qe):oe(a[14]),ke):n&&n.p&&(!t||i&8)&&n.p(a,t?i:-1)},i(a){t||($(n,a),t=!0)},o(a){C(n,a),t=!1},d(a){a&&c(e),n&&n.d(a)}}}function Oe(l){let e;return{c(){e=q(l[3])},l(t){e=O(t,l[3])},m(t,s){g(t,e,s)},p(t,s){s&8&&Ie(e,t[3])},d(t){t&&c(e)}}}function Ce(l){let e,t;const s=l[15].icon,r=ae(s,l,l[14],Ee),n=r||Ae(l);return{c(){e=v("div"),n&&n.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var i=M(e);n&&n.l(i),i.forEach(c),this.h()},h(){E(e,"class","icon svelte-515js9")},m(a,i){g(a,e,i),n&&n.m(e,null),t=!0},p(a,i){r?r.p&&(!t||i&16384)&&re(r,s,a,a[14],t?ie(s,a[14],i,Se):oe(a[14]),Ee):n&&n.p&&(!t||i&8)&&n.p(a,t?i:-1)},i(a){t||($(n,a),t=!0)},o(a){C(n,a),t=!1},d(a){a&&c(e),n&&n.d(a)}}}function Ae(l){let e;return{c(){e=q(l[3])},l(t){e=O(t,l[3])},m(t,s){g(t,e,s)},p(t,s){s&8&&Ie(e,t[3])},d(t){t&&c(e)}}}function le(l){let e,t,s,r,n,a=(l[0]==="left"||l[0]==="above")&&we(l);const i=l[15].default,h=ae(i,l,l[14],null);let _=(l[0]==="right"||l[0]==="below")&&Ce(l),I=[{class:"card"},l[1],l[8]],d={};for(let o=0;o<I.length;o+=1)d=ye(d,I[o]);return{c(){e=v(l[9]),a&&a.c(),t=N(),s=v("div"),h&&h.c(),r=N(),_&&_.c(),this.h()},l(o){e=b(o,(l[9]||"null").toUpperCase(),{class:!0});var f=M(e);a&&a.l(f),t=S(f),s=b(f,"DIV",{class:!0});var A=M(s);h&&h.l(A),A.forEach(c),r=S(f),_&&_.l(f),f.forEach(c),this.h()},h(){E(s,"class","content svelte-515js9"),ve(l[9])(e,d),w(e,"link",l[2]),w(e,"selected",l[10]),w(e,"left",l[7]),w(e,"right",l[6]),w(e,"above",l[5]),w(e,"below",l[4]),w(e,"svelte-515js9",!0)},m(o,f){g(o,e,f),a&&a.m(e,null),p(e,t),p(e,s),h&&h.m(s,null),p(e,r),_&&_.m(e,null),n=!0},p(o,f){o[0]==="left"||o[0]==="above"?a?(a.p(o,f),f&1&&$(a,1)):(a=we(o),a.c(),$(a,1),a.m(e,t)):a&&(be(),C(a,1,1,()=>{a=null}),$e()),h&&h.p&&(!n||f&16384)&&re(h,i,o,o[14],n?ie(i,o[14],f,null):oe(o[14]),null),o[0]==="right"||o[0]==="below"?_?(_.p(o,f),f&1&&$(_,1)):(_=Ce(o),_.c(),$(_,1),_.m(e,null)):_&&(be(),C(_,1,1,()=>{_=null}),$e()),ve(o[9])(e,d=je(I,[{class:"card"},f&2&&o[1],f&256&&o[8]])),w(e,"link",o[2]),w(e,"selected",o[10]),w(e,"left",o[7]),w(e,"right",o[6]),w(e,"above",o[5]),w(e,"below",o[4]),w(e,"svelte-515js9",!0)},i(o){n||($(a),$(h,o),$(_),n=!0)},o(o){C(a),C(h,o),C(_),n=!1},d(o){o&&c(e),a&&a.d(),h&&h.d(o),_&&_.d()}}}function De(l){let e=l[9],t,s,r=l[9]&&le(l);return{c(){r&&r.c(),t=ge()},l(n){r&&r.l(n),t=ge()},m(n,a){r&&r.m(n,a),g(n,t,a),s=!0},p(n,[a]){n[9]?e?x(e,n[9])?(r.d(1),r=le(n),e=n[9],r.c(),r.m(t.parentNode,t)):r.p(n,a):(r=le(n),e=n[9],r.c(),r.m(t.parentNode,t)):e&&(r.d(1),r=null,e=n[9])},i(n){s||($(r,n),s=!0)},o(n){C(r,n),s=!1},d(n){n&&c(t),r&&r.d(n)}}}function Fe(l,e,t){let s,r,n,a,i,h,_,I,d,o;Le(l,Ne,m=>t(13,o=m));let{$$slots:f={},$$scope:A}=e,{tag:j=void 0}=e,{href:k=void 0}=e,{align:H="left"}=e,{attrs:D=void 0}=e;return l.$$set=m=>{"tag"in m&&t(11,j=m.tag),"href"in m&&t(12,k=m.href),"align"in m&&t(0,H=m.align),"attrs"in m&&t(1,D=m.attrs),"$$scope"in m&&t(14,A=m.$$scope)},l.$$.update=()=>{l.$$.dirty&4096&&t(2,s=!!k),l.$$.dirty&12292&&t(10,r=s&&o.url.pathname===k),l.$$.dirty&2052&&t(9,n=j||(s?"a":"div")),l.$$.dirty&4100&&t(8,a=s?{href:k}:void 0),l.$$.dirty&1&&t(7,i=H==="left"),l.$$.dirty&1&&t(6,h=H==="right"),l.$$.dirty&1&&t(5,_=H==="above"),l.$$.dirty&1&&t(4,I=H==="below"),l.$$.dirty&4&&t(3,d=s?"🔗":"🪧")},[H,D,s,d,I,_,h,i,a,n,r,j,k,o,A,f]}class Z extends ce{constructor(e){super(),fe(this,e,Fe,De,x,{tag:11,href:12,align:0,attrs:1})}}function Ue(l){let e,t=`<blockquote class="text_align_center pane"><h1 class="padded_sm">orc</h1> <div class="icon spaced svelte-ideo17">🪄</div>
		a tool for orchestrating many repos</blockquote>`;return{c(){e=v("header"),e.innerHTML=t,this.h()},l(s){e=b(s,"HEADER",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-43p9f5"&&(e.innerHTML=t),this.h()},h(){E(e,"class","padded_md")},m(s,r){g(s,e,r)},p:z,i:z,o:z,d(s){s&&c(e)}}}class Ve extends ce{constructor(e){super(),fe(this,e,null,Ue,x,{})}}function ze(l){let e;return{c(){e=q("table")},l(t){e=O(t,"table")},m(t,s){g(t,e,s)},d(t){t&&c(e)}}}function Je(l){let e="",t;return{c(){t=q(e)},l(s){t=O(s,e)},m(s,r){g(s,t,r)},p:z,d(s){s&&c(t)}}}function Pe(l){let e;return{c(){e=q("modules")},l(t){e=O(t,"modules")},m(t,s){g(t,e,s)},d(t){t&&c(e)}}}function Re(l){let e="",t;return{c(){t=q(e)},l(s){t=O(s,e)},m(s,r){g(s,t,r)},p:z,d(s){s&&c(t)}}}function Be(l){let e;return{c(){e=q("pull requests")},l(t){e=O(t,"pull requests")},m(t,s){g(t,e,s)},d(t){t&&c(e)}}}function Ge(l){let e="",t;return{c(){t=q(e)},l(s){t=O(s,e)},m(s,r){g(s,t,r)},p:z,d(s){s&&c(t)}}}function Ke(l){let e;return{c(){e=q("tree")},l(t){e=O(t,"tree")},m(t,s){g(t,e,s)},d(t){t&&c(e)}}}function Qe(l){let e="",t;return{c(){t=q(e)},l(s){t=O(s,e)},m(s,r){g(s,t,r)},p:z,d(s){s&&c(t)}}}function We(l){let e,t,s,r,n,a,i,h='<aside class="text_align_center">for a real usage example see <a href="https://www.spiderspace.org/">spiderspace.org</a></aside>',_,I,d,o,f,A,j,k,H,D,m,ee,J,F,te,U,_e=`<a class="chip" href="${Y}/about">about</a>`,se,P,V,Q;return document.title=e=l[0].package_json.name,n=new Ve({}),f=new Z({props:{href:Y+"/table",$$slots:{icon:[Je],default:[ze]},$$scope:{ctx:l}}}),k=new Z({props:{href:Y+"/modules",$$slots:{icon:[Re],default:[Pe]},$$scope:{ctx:l}}}),m=new Z({props:{href:Y+"/pull_requests",$$slots:{icon:[Ge],default:[Be]},$$scope:{ctx:l}}}),F=new Z({props:{href:Y+"/tree",$$slots:{icon:[Qe],default:[Ke]},$$scope:{ctx:l}}}),V=new Te({props:{pkg:l[0],root_url:"https://www.ryanatkn.com/"}}),{c(){t=N(),s=v("main"),r=v("section"),R(n.$$.fragment),a=N(),i=v("section"),i.innerHTML=h,_=N(),I=v("section"),d=v("menu"),o=v("li"),R(f.$$.fragment),A=N(),j=v("li"),R(k.$$.fragment),H=N(),D=v("li"),R(m.$$.fragment),ee=N(),J=v("li"),R(F.$$.fragment),te=N(),U=v("section"),U.innerHTML=_e,se=N(),P=v("section"),R(V.$$.fragment),this.h()},l(u){Me("svelte-1tyjpj7",document.head).forEach(c),t=S(u),s=b(u,"MAIN",{class:!0});var y=M(s);r=b(y,"SECTION",{class:!0});var W=M(r);B(n.$$.fragment,W),W.forEach(c),a=S(y),i=b(y,"SECTION",{class:!0,"data-svelte-h":!0}),ne(i)!=="svelte-38aol3"&&(i.innerHTML=h),_=S(y),I=b(y,"SECTION",{class:!0});var X=M(I);d=b(X,"MENU",{class:!0});var T=M(d);o=b(T,"LI",{class:!0});var ue=M(o);B(f.$$.fragment,ue),ue.forEach(c),A=S(T),j=b(T,"LI",{class:!0});var me=M(j);B(k.$$.fragment,me),me.forEach(c),H=S(T),D=b(T,"LI",{class:!0});var de=M(D);B(m.$$.fragment,de),de.forEach(c),ee=S(T),J=b(T,"LI",{class:!0});var pe=M(J);B(F.$$.fragment,pe),pe.forEach(c),T.forEach(c),X.forEach(c),te=S(y),U=b(y,"SECTION",{class:!0,"data-svelte-h":!0}),ne(U)!=="svelte-1tdnmp3"&&(U.innerHTML=_e),se=S(y),P=b(y,"SECTION",{class:!0});var he=M(P);B(V.$$.fragment,he),he.forEach(c),y.forEach(c),this.h()},h(){E(r,"class","svelte-easx4e"),E(i,"class","prose svelte-easx4e"),E(o,"class","svelte-easx4e"),E(j,"class","svelte-easx4e"),E(D,"class","svelte-easx4e"),E(J,"class","svelte-easx4e"),E(d,"class","svelte-easx4e"),E(I,"class","svelte-easx4e"),E(U,"class","box svelte-easx4e"),E(P,"class","svelte-easx4e"),E(s,"class","box svelte-easx4e")},m(u,L){g(u,t,L),g(u,s,L),p(s,r),G(n,r,null),p(s,a),p(s,i),p(s,_),p(s,I),p(I,d),p(d,o),G(f,o,null),p(d,A),p(d,j),G(k,j,null),p(d,H),p(d,D),G(m,D,null),p(d,ee),p(d,J),G(F,J,null),p(s,te),p(s,U),p(s,se),p(s,P),G(V,P,null),Q=!0},p(u,[L]){(!Q||L&1)&&e!==(e=u[0].package_json.name)&&(document.title=e);const y={};L&2&&(y.$$scope={dirty:L,ctx:u}),f.$set(y);const W={};L&2&&(W.$$scope={dirty:L,ctx:u}),k.$set(W);const X={};L&2&&(X.$$scope={dirty:L,ctx:u}),m.$set(X);const T={};L&2&&(T.$$scope={dirty:L,ctx:u}),F.$set(T)},i(u){Q||($(n.$$.fragment,u),$(f.$$.fragment,u),$(k.$$.fragment,u),$(m.$$.fragment,u),$(F.$$.fragment,u),$(V.$$.fragment,u),Q=!0)},o(u){C(n.$$.fragment,u),C(f.$$.fragment,u),C(k.$$.fragment,u),C(m.$$.fragment,u),C(F.$$.fragment,u),C(V.$$.fragment,u),Q=!1},d(u){u&&(c(t),c(s)),K(n),K(f),K(k),K(m),K(F),K(V)}}}function Xe(l){const{deployment:e}=He();return[e]}class lt extends ce{constructor(e){super(),fe(this,e,Xe,We,x,{})}}export{lt as component};