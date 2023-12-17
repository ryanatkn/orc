import{n as oe,b as p,s as V,f as v,g as T,L as W,c as P,d as u,h,i as z,x as d,C as re,V as Be,O as Fe,k as S,l as L,m as G,W as Ee,j as ne,J as ee,e as te,w as Ge}from"../chunks/scheduler.8e25a0a1.js";import{S as ie,i as fe,b as Q,d as U,m as X,a as Y,t as Z,e as x}from"../chunks/index.e8c7260f.js";import{P as Je}from"../chunks/Page_Header.63ba2ee7.js";import{g as Re}from"../chunks/globals.7f7f1b26.js";import{e as J,u as _e,d as ce}from"../chunks/each.e271170e.js";import{f as le,e as Ce,c as We}from"../chunks/deployments.66b18ff1.js";import{p as Ke}from"../chunks/stores.b524fbf1.js";import{e as Te}from"../chunks/singletons.10684929.js";import{a as $e}from"../chunks/github_helpers.3dc98cb7.js";import{P as Qe}from"../chunks/Page_Footer.e0baa6c8.js";const{Map:ue}=Re;function ye(a,e,t){const l=a.slice();l[7]=e[t];const o=l[7].package_json;l[8]=o;const n=l[8]?l[7].homepage_url:null;return l[9]=n,l}function De(a,e,t){const l=a.slice();return l[13]=e[t],l}function ae(a){const e=a.slice(),t=e[6](e[0],e[7]);return e[12]=t,e}function je(a,e,t){const l=a.slice();l[16]=e[t];const o=l[4](l[7],l[16]);l[17]=o;const n=l[5](l[17]);l[18]=n;const s=l[2].get(l[16]);return l[19]=s,l}function Ue(a){var n,s;const e=a.slice(),t=e[7].check_runs;e[22]=t;const l=((n=e[22])==null?void 0:n.status)==="completed";e[23]=l;const o=((s=e[22])==null?void 0:s.conclusion)==="success";return e[24]=o,e}function we(a,e,t){const l=a.slice();return l[16]=e[t],l}function Ie(a,e){let t,l=e[16]+"",o;return{key:a,first:null,c(){t=p("th"),o=S(l),this.h()},l(n){t=v(n,"TH",{class:!0});var s=T(t);o=L(s,l),s.forEach(u),this.h()},h(){h(t,"class","svelte-16lu23r"),this.first=t},m(n,s){z(n,t,s),d(t,o)},p(n,s){e=n,s&2&&l!==(l=e[16]+"")&&G(o,l)},d(n){n&&u(t)}}}function Ae(a){let e,t=(a[7].package_json.icon||"🌳")+"",l,o;return{c(){e=p("a"),l=S(t),this.h()},l(n){e=v(n,"A",{href:!0});var s=T(e);l=L(s,t),s.forEach(u),this.h()},h(){h(e,"href",o=Te+"/tree/"+a[7].repo_name)},m(n,s){z(n,e,s),d(e,l)},p(n,s){s&1&&t!==(t=(n[7].package_json.icon||"🌳")+"")&&G(l,t),s&1&&o!==(o=Te+"/tree/"+n[7].repo_name)&&h(e,"href",o)},d(n){n&&u(e)}}}function He(a){let e,t,l,o,n,s=le(a[9])+"",r,i;return{c(){e=p("a"),t=p("img"),n=V(),r=S(s),this.h()},l(f){e=v(f,"A",{href:!0,class:!0});var m=T(e);t=v(m,"IMG",{src:!0,alt:!0}),n=P(m),r=L(m,s),m.forEach(u),this.h()},h(){Ee(t.src,l=Ce(a[9],"/")+"favicon.png")||h(t,"src",l),h(t,"alt",o="favicon to homepage at "+a[9]),ne(t,"width","16px"),ne(t,"height","16px"),ne(t,"margin-right","var(--spacing_xs)"),h(e,"href",i=a[9]),h(e,"class","row"),ee(e,"selected",a[9]===a[3].url.href)},m(f,m){z(f,e,m),d(e,t),d(e,n),d(e,r)},p(f,m){m&1&&!Ee(t.src,l=Ce(f[9],"/")+"favicon.png")&&h(t,"src",l),m&1&&o!==(o="favicon to homepage at "+f[9])&&h(t,"alt",o),m&1&&s!==(s=le(f[9])+"")&&G(r,s),m&1&&i!==(i=f[9])&&h(e,"href",i),m&9&&ee(e,"selected",f[9]===f[3].url.href)},d(f){f&&u(e)}}}function Xe(a){let e,t=le(a[7].url)+"",l,o;return{c(){e=p("a"),l=S(t),this.h()},l(n){e=v(n,"A",{href:!0});var s=T(e);l=L(s,t),s.forEach(u),this.h()},h(){h(e,"href",o=a[7].url)},m(n,s){z(n,e,s),d(e,l)},p(n,s){s&1&&t!==(t=le(n[7].url)+"")&&G(l,t),s&1&&o!==(o=n[7].url)&&h(e,"href",o)},d(n){n&&u(e)}}}function ze(a){let e,t=a[7].repo_name+"",l,o,n,s,r=a[22]&&(!a[23]||!a[24])&&Ve(a);return{c(){e=p("a"),l=S(t),n=V(),r&&r.c(),s=te(),this.h()},l(i){e=v(i,"A",{href:!0});var f=T(e);l=L(f,t),f.forEach(u),n=P(i),r&&r.l(i),s=te(),this.h()},h(){h(e,"href",o=a[7].repo_url)},m(i,f){z(i,e,f),d(e,l),z(i,n,f),r&&r.m(i,f),z(i,s,f)},p(i,f){f&1&&t!==(t=i[7].repo_name+"")&&G(l,t),f&1&&o!==(o=i[7].repo_url)&&h(e,"href",o),i[22]&&(!i[23]||!i[24])?r?r.p(i,f):(r=Ve(i),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},d(i){i&&(u(e),u(n),u(s)),r&&r.d(i)}}}function Ve(a){let e,t,l;function o(r,i){return r[23]?Ye:Ze}let n=o(a),s=n(a);return{c(){e=p("a"),s.c(),this.h()},l(r){e=v(r,"A",{href:!0,title:!0});var i=T(e);s.l(i),i.forEach(u),this.h()},h(){h(e,"href",t=a[7].repo_url+"/commits/main"),h(e,"title",l=a[23]?`CI failed: ${a[22].conclusion}`:`status: ${a[22].status}`)},m(r,i){z(r,e,i),s.m(e,null)},p(r,i){n!==(n=o(r))&&(s.d(1),s=n(r),s&&(s.c(),s.m(e,null))),i&1&&t!==(t=r[7].repo_url+"/commits/main")&&h(e,"href",t),i&1&&l!==(l=r[23]?`CI failed: ${r[22].conclusion}`:`status: ${r[22].status}`)&&h(e,"title",l)},d(r){r&&u(e),s.d()}}}function Ye(a){let e;return{c(){e=S("⚠️")},l(t){e=L(t,"⚠️")},m(t,l){z(t,e,l)},d(t){t&&u(e)}}}function Ze(a){let e;return{c(){e=S("🟡")},l(t){e=L(t,"🟡")},m(t,l){z(t,e,l)},d(t){t&&u(e)}}}function Pe(a){let e,t,l,o=a[7].name+"",n,s;return{c(){e=p("div"),t=p("a"),l=p("code"),n=S(o),this.h()},l(r){e=v(r,"DIV",{class:!0});var i=T(e);t=v(i,"A",{href:!0});var f=T(t);l=v(f,"CODE",{});var m=T(l);n=L(m,o),m.forEach(u),f.forEach(u),i.forEach(u),this.h()},h(){h(t,"href",s=a[7].npm_url),h(e,"class","row")},m(r,i){z(r,e,i),d(e,t),d(t,l),d(l,n)},p(r,i){i&1&&o!==(o=r[7].name+"")&&G(n,o),i&1&&s!==(s=r[7].npm_url)&&h(t,"href",s)},d(r){r&&u(e)}}}function Ne(a){let e,t=a[5](a[8].version)+"",l,o;return{c(){e=p("a"),l=S(t),this.h()},l(n){e=v(n,"A",{href:!0});var s=T(e);l=L(s,t),s.forEach(u),this.h()},h(){h(e,"href",o=a[7].changelog_url)},m(n,s){z(n,e,s),d(e,l)},p(n,s){s&1&&t!==(t=n[5](n[8].version)+"")&&G(l,t),s&1&&o!==(o=n[7].changelog_url)&&h(e,"href",o)},d(n){n&&u(e)}}}function qe(a,e){let t,l,o=e[18]+"",n;return{key:a,first:null,c(){t=p("td"),l=p("div"),n=S(o),this.h()},l(s){t=v(s,"TD",{class:!0});var r=T(t);l=v(r,"DIV",{class:!0});var i=T(l);n=L(i,o),i.forEach(u),r.forEach(u),this.h()},h(){h(l,"class","svelte-16lu23r"),ee(l,"latest",!!e[19]&&e[18]===e[19]),h(t,"class","svelte-16lu23r"),this.first=t},m(s,r){z(s,t,r),d(t,l),d(l,n)},p(s,r){e=s,r&3&&o!==(o=e[18]+"")&&G(n,o),r&55&&ee(l,"latest",!!e[19]&&e[18]===e[19])},d(s){s&&u(t)}}}function Me(a){let e,t=a[12]&&Oe(a);return{c(){e=p("div"),t&&t.c(),this.h()},l(l){e=v(l,"DIV",{class:!0});var o=T(e);t&&t.l(o),o.forEach(u),this.h()},h(){h(e,"class","row")},m(l,o){z(l,e,o),t&&t.m(e,null)},p(l,o){l[12]?t?t.p(l,o):(t=Oe(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&u(e),t&&t.d()}}}function Oe(a){let e=[],t=new ue,l,o=J(a[12]);const n=s=>s[13];for(let s=0;s<o.length;s+=1){let r=De(a,o,s),i=n(r);t.set(i,e[s]=Se(i,r))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();l=te()},l(s){for(let r=0;r<e.length;r+=1)e[r].l(s);l=te()},m(s,r){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(s,r);z(s,l,r)},p(s,r){r&65&&(o=J(s[12]),e=_e(e,r,n,1,s,o,t,l.parentNode,ce,Se,l,De))},d(s){s&&u(l);for(let r=0;r<e.length;r+=1)e[r].d(s)}}}function Se(a,e){let t,l,o=e[13].number+"",n,s,r;return{key:a,first:null,c(){t=p("a"),l=S("#"),n=S(o),this.h()},l(i){t=v(i,"A",{href:!0,class:!0,title:!0});var f=T(t);l=L(f,"#"),n=L(f,o),f.forEach(u),this.h()},h(){h(t,"href",s=$e(e[7].repo_url,e[13])),h(t,"class","chip"),h(t,"title",r=e[13].title),this.first=t},m(i,f){z(i,t,f),d(t,l),d(t,n)},p(i,f){e=i,f&1&&o!==(o=e[13].number+"")&&G(n,o),f&1&&s!==(s=$e(e[7].repo_url,e[13]))&&h(t,"href",s),f&1&&r!==(r=e[13].title)&&h(t,"title",r)},d(i){i&&u(t)}}}function Le(a){let e,t,l,o,n,s,r,i,f,m,y,E,A,C,$=[],N=new ue,q,D,F,j=a[8]&&Ae(a),w=a[9]&&He(a);function K(c,k){return c[8]?ze:Xe}function R(c,k){return k===ze?Ue(c):c}let O=K(a),M=O(R(a,O)),I=a[8]&&a[7].npm_url&&Pe(a),b=a[8]&&a[8].version!=="0.0.1"&&Ne(a),g=J(a[1]);const H=c=>c[16];for(let c=0;c<g.length;c+=1){let k=je(a,g,c),B=H(k);N.set(B,$[c]=qe(B,k))}let _=a[8]&&a[7].repo_url&&Me(ae(a));return{c(){e=p("tr"),t=p("td"),l=p("div"),j&&j.c(),o=V(),n=p("td"),s=p("div"),w&&w.c(),r=V(),i=p("td"),f=p("div"),M.c(),m=V(),y=p("td"),I&&I.c(),E=V(),A=p("td"),b&&b.c(),C=V();for(let c=0;c<$.length;c+=1)$[c].c();q=V(),D=p("td"),_&&_.c(),F=V(),this.h()},l(c){e=v(c,"TR",{class:!0});var k=T(e);t=v(k,"TD",{class:!0});var B=T(t);l=v(B,"DIV",{class:!0});var he=T(l);j&&j.l(he),he.forEach(u),B.forEach(u),o=P(k),n=v(k,"TD",{class:!0});var de=T(n);s=v(de,"DIV",{class:!0});var me=T(s);w&&w.l(me),me.forEach(u),de.forEach(u),r=P(k),i=v(k,"TD",{class:!0});var pe=T(i);f=v(pe,"DIV",{class:!0});var ve=T(f);M.l(ve),ve.forEach(u),pe.forEach(u),m=P(k),y=v(k,"TD",{class:!0});var ge=T(y);I&&I.l(ge),ge.forEach(u),E=P(k),A=v(k,"TD",{class:!0});var ke=T(A);b&&b.l(ke),ke.forEach(u),C=P(k);for(let se=0;se<$.length;se+=1)$[se].l(k);q=P(k),D=v(k,"TD",{class:!0});var be=T(D);_&&_.l(be),be.forEach(u),F=P(k),k.forEach(u),this.h()},h(){h(l,"class","row"),h(t,"class","svelte-16lu23r"),h(s,"class","row"),h(n,"class","svelte-16lu23r"),h(f,"class","row"),h(i,"class","svelte-16lu23r"),h(y,"class","svelte-16lu23r"),h(A,"class","svelte-16lu23r"),h(D,"class","svelte-16lu23r"),h(e,"class","svelte-16lu23r")},m(c,k){z(c,e,k),d(e,t),d(t,l),j&&j.m(l,null),d(e,o),d(e,n),d(n,s),w&&w.m(s,null),d(e,r),d(e,i),d(i,f),M.m(f,null),d(e,m),d(e,y),I&&I.m(y,null),d(e,E),d(e,A),b&&b.m(A,null),d(e,C);for(let B=0;B<$.length;B+=1)$[B]&&$[B].m(e,null);d(e,q),d(e,D),_&&_.m(D,null),d(e,F)},p(c,k){c[8]?j?j.p(c,k):(j=Ae(c),j.c(),j.m(l,null)):j&&(j.d(1),j=null),c[9]?w?w.p(c,k):(w=He(c),w.c(),w.m(s,null)):w&&(w.d(1),w=null),O===(O=K(c))&&M?M.p(R(c,O),k):(M.d(1),M=O(R(c,O)),M&&(M.c(),M.m(f,null))),c[8]&&c[7].npm_url?I?I.p(c,k):(I=Pe(c),I.c(),I.m(y,null)):I&&(I.d(1),I=null),c[8]&&c[8].version!=="0.0.1"?b?b.p(c,k):(b=Ne(c),b.c(),b.m(A,null)):b&&(b.d(1),b=null),k&55&&(g=J(c[1]),$=_e($,k,H,1,c,g,N,e,ce,qe,q,je)),c[8]&&c[7].repo_url?_?_.p(ae(c),k):(_=Me(ae(c)),_.c(),_.m(D,null)):_&&(_.d(1),_=null)},d(c){c&&u(e),j&&j.d(),w&&w.d(),M.d(),I&&I.d(),b&&b.d();for(let k=0;k<$.length;k+=1)$[k].d();_&&_.d()}}}function xe(a){let e,t,l,o="detail",n,s,r="homepage",i,f,m="repo",y,E,A="npm",C,$,N="version",q,D=[],F=new ue,j,w,K="pull requests",R,O=J(a[1]);const M=g=>g[16];for(let g=0;g<O.length;g+=1){let H=we(a,O,g),_=M(H);F.set(_,D[g]=Ie(_,H))}let I=J(a[0]),b=[];for(let g=0;g<I.length;g+=1)b[g]=Le(ye(a,I,g));return{c(){e=p("table"),t=p("thead"),l=p("th"),l.textContent=o,n=V(),s=p("th"),s.textContent=r,i=V(),f=p("th"),f.textContent=m,y=V(),E=p("th"),E.textContent=A,C=V(),$=p("th"),$.textContent=N,q=V();for(let g=0;g<D.length;g+=1)D[g].c();j=V(),w=p("th"),w.textContent=K,R=V();for(let g=0;g<b.length;g+=1)b[g].c();this.h()},l(g){e=v(g,"TABLE",{});var H=T(e);t=v(H,"THEAD",{});var _=T(t);l=v(_,"TH",{class:!0,"data-svelte-h":!0}),W(l)!=="svelte-1xh3rv7"&&(l.textContent=o),n=P(_),s=v(_,"TH",{class:!0,"data-svelte-h":!0}),W(s)!=="svelte-edrm22"&&(s.textContent=r),i=P(_),f=v(_,"TH",{class:!0,"data-svelte-h":!0}),W(f)!=="svelte-1ufa3ru"&&(f.textContent=m),y=P(_),E=v(_,"TH",{class:!0,"data-svelte-h":!0}),W(E)!=="svelte-1dlu3td"&&(E.textContent=A),C=P(_),$=v(_,"TH",{class:!0,"data-svelte-h":!0}),W($)!=="svelte-1n0573y"&&($.textContent=N),q=P(_);for(let c=0;c<D.length;c+=1)D[c].l(_);j=P(_),w=v(_,"TH",{class:!0,"data-svelte-h":!0}),W(w)!=="svelte-1i37mc7"&&(w.textContent=K),_.forEach(u),R=P(H);for(let c=0;c<b.length;c+=1)b[c].l(H);H.forEach(u),this.h()},h(){h(l,"class","svelte-16lu23r"),h(s,"class","svelte-16lu23r"),h(f,"class","svelte-16lu23r"),h(E,"class","svelte-16lu23r"),h($,"class","svelte-16lu23r"),h(w,"class","svelte-16lu23r")},m(g,H){z(g,e,H),d(e,t),d(t,l),d(t,n),d(t,s),d(t,i),d(t,f),d(t,y),d(t,E),d(t,C),d(t,$),d(t,q);for(let _=0;_<D.length;_+=1)D[_]&&D[_].m(t,null);d(t,j),d(t,w),d(e,R);for(let _=0;_<b.length;_+=1)b[_]&&b[_].m(e,null)},p(g,[H]){if(H&2&&(O=J(g[1]),D=_e(D,H,M,1,g,O,F,t,ce,Ie,j,we)),H&127){I=J(g[0]);let _;for(_=0;_<I.length;_+=1){const c=ye(g,I,_);b[_]?b[_].p(c,H):(b[_]=Le(c),b[_].c(),b[_].m(e,null))}for(;_<b.length;_+=1)b[_].d(1);b.length=I.length}},i:re,o:re,d(g){g&&u(e);for(let H=0;H<D.length;H+=1)D[H].d();Be(b,g)}}}function et(a,e,t){let l,o;Fe(a,Ke,m=>t(3,o=m));let{deployments:n}=e,{deps:s=["@fuz.dev/fuz","@fuz.dev/fuz_library","@grogarden/gro"]}=e;const r=(m,y)=>{if(!m.package_json)return null;for(const E in m.package_json.dependencies)if(E===y)return m.package_json.dependencies[E];for(const E in m.package_json.devDependencies)if(E===y)return m.package_json.devDependencies[E];return null},i=m=>m===null?"":m.replace(/^(\^|>=)\s*/u,""),f=(m,y)=>{const E=m==null?void 0:m.find(C=>C.url===y.url);if(!(E!=null&&E.package_json))return null;const{pull_requests:A}=E;return A};return a.$$set=m=>{"deployments"in m&&t(0,n=m.deployments),"deps"in m&&t(1,s=m.deps)},a.$$.update=()=>{a.$$.dirty&3&&t(2,l=new Map(s.map(m=>{const y=n.find(E=>{var A;return((A=E.package_json)==null?void 0:A.name)===m});return y!=null&&y.package_json?[m,y.package_json.version]:[m,null]})))},[n,s,l,o,r,i,f]}class tt extends ie{constructor(e){super(),fe(this,e,et,xe,oe,{deployments:0,deps:1})}}function lt(a){let e,t,l,o,n,s,r,i,f,m,y,E,A;return document.title=e="table "+a[0].package_json.icon+" "+a[0].package_json.name,n=new Je({props:{pkg:a[0]}}),f=new tt({props:{deployments:a[1]}}),E=new Qe({props:{pkg:a[0]}}),{c(){t=V(),l=p("main"),o=p("section"),Q(n.$$.fragment),s=V(),r=p("section"),i=p("div"),Q(f.$$.fragment),m=V(),y=p("section"),Q(E.$$.fragment),this.h()},l(C){Ge("svelte-byicko",document.head).forEach(u),t=P(C),l=v(C,"MAIN",{class:!0});var N=T(l);o=v(N,"SECTION",{class:!0});var q=T(o);U(n.$$.fragment,q),q.forEach(u),s=P(N),r=v(N,"SECTION",{class:!0});var D=T(r);i=v(D,"DIV",{class:!0});var F=T(i);U(f.$$.fragment,F),F.forEach(u),D.forEach(u),m=P(N),y=v(N,"SECTION",{class:!0});var j=T(y);U(E.$$.fragment,j),j.forEach(u),N.forEach(u),this.h()},h(){h(o,"class","svelte-oz7o45"),h(i,"class","panel padded_md"),h(r,"class","svelte-oz7o45"),h(y,"class","box svelte-oz7o45"),h(l,"class","box svelte-oz7o45")},m(C,$){z(C,t,$),z(C,l,$),d(l,o),X(n,o,null),d(l,s),d(l,r),d(r,i),X(f,i,null),d(l,m),d(l,y),X(E,y,null),A=!0},p(C,[$]){(!A||$&1)&&e!==(e="table "+C[0].package_json.icon+" "+C[0].package_json.name)&&(document.title=e);const N={};$&1&&(N.pkg=C[0]),n.$set(N);const q={};$&2&&(q.deployments=C[1]),f.$set(q);const D={};$&1&&(D.pkg=C[0]),E.$set(D)},i(C){A||(Y(n.$$.fragment,C),Y(f.$$.fragment,C),Y(E.$$.fragment,C),A=!0)},o(C){Z(n.$$.fragment,C),Z(f.$$.fragment,C),Z(E.$$.fragment,C),A=!1},d(C){C&&(u(t),u(l)),x(n),x(f),x(E)}}}function st(a,e,t){let{deployment:l}=e,{deployments:o}=e;return a.$$set=n=>{"deployment"in n&&t(0,l=n.deployment),"deployments"in n&&t(1,o=n.deployments)},[l,o]}class nt extends ie{constructor(e){super(),fe(this,e,st,lt,oe,{deployment:0,deployments:1})}}function at(a){let e,t;return e=new nt({props:{deployment:a[0],deployments:a[1]}}),{c(){Q(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,o){X(e,l,o),t=!0},p:re,i(l){t||(Y(e.$$.fragment,l),t=!0)},o(l){Z(e.$$.fragment,l),t=!1},d(l){x(e,l)}}}function rt(a){const{deployment:e,deployments:t}=We();return[e,t]}class vt extends ie{constructor(e){super(),fe(this,e,rt,at,oe,{})}}export{vt as component};