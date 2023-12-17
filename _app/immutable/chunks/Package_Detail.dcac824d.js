import{n as Je,v as ne,b as k,s as O,k as q,f as v,g as b,d as h,c as S,L as Re,l as w,h as a,i as T,x as i,y as re,z as oe,A as fe,m as K,O as ze,W as ge,j as _e,J as X,V as Be}from"./scheduler.8e25a0a1.js";import{S as Ge,i as Ke,a as J,g as ce,t as Q,c as he}from"./index.e8c7260f.js";import{e as ae,u as Qe,d as Ye}from"./each.e271170e.js";import{p as Fe}from"./stores.b524fbf1.js";import{s as ke,d as ve,f as be,e as te}from"./deployments.66b18ff1.js";function Ee(r,e,n){var f,u;const l=r.slice();l[24]=e[n],l[29]=n;const s=l[16](l[11],l[24]);l[25]=s;const t=(f=l[3])==null?void 0:f[l[29]];l[26]=t;const o=l[26]&&((u=l[5])==null?void 0:u[l[26]]);return l[27]=o,l}function qe(r,e,n){const l=r.slice();return l[15]=e[n].name,l[30]=e[n].kind,l}const Xe=r=>({homepage_url:r[0]&512}),we=r=>({homepage_url:r[9]}),Ze=r=>({npm_url:r[0]&8192}),je=r=>({npm_url:r[13]}),ye=r=>({description:r[0]&128}),Ie=r=>({description:r[7]}),$e=r=>({repo_name:r[0]&4096}),De=r=>({repo_name:r[12]});function Ae(r){let e=" ",n,l;return{c(){n=q(e),l=q(r[6])},l(s){n=w(s,e),l=w(s,r[6])},m(s,t){T(s,n,t),T(s,l,t)},p(s,t){t[0]&64&&K(l,s[6])},d(s){s&&(h(n),h(l))}}}function xe(r){let e,n,l=r[6]&&Ae(r);return{c(){e=k("div"),n=q(r[12]),l&&l.c(),this.h()},l(s){e=v(s,"DIV",{class:!0});var t=b(e);n=w(t,r[12]),l&&l.l(t),t.forEach(h),this.h()},h(){a(e,"class","repo_name svelte-1rnqnfh")},m(s,t){T(s,e,t),i(e,n),l&&l.m(e,null)},p(s,t){t[0]&4096&&K(n,s[12]),s[6]?l?l.p(s,t):(l=Ae(s),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(s){s&&h(e),l&&l.d()}}}function Oe(r){let e;const n=r[23].description,l=ne(n,r,r[22],Ie),s=l||el(r);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,o){s&&s.m(t,o),e=!0},p(t,o){l?l.p&&(!e||o[0]&4194432)&&re(l,n,t,t[22],e?fe(n,t[22],o,ye):oe(t[22]),Ie):s&&s.p&&(!e||o[0]&128)&&s.p(t,e?o:[-1,-1])},i(t){e||(J(s,t),e=!0)},o(t){Q(s,t),e=!1},d(t){s&&s.d(t)}}}function el(r){let e,n;return{c(){e=k("div"),n=q(r[7]),this.h()},l(l){e=v(l,"DIV",{class:!0});var s=b(e);n=w(s,r[7]),s.forEach(h),this.h()},h(){a(e,"class","spaced")},m(l,s){T(l,e,s),i(e,n)},p(l,s){s[0]&128&&K(n,l[7])},d(l){l&&h(e)}}}function Se(r){let e;const n=r[23].npm_url,l=ne(n,r,r[22],je),s=l||ll(r);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,o){s&&s.m(t,o),e=!0},p(t,o){l?l.p&&(!e||o[0]&4202496)&&re(l,n,t,t[22],e?fe(n,t[22],o,Ze):oe(t[22]),je):s&&s.p&&(!e||o[0]&32768)&&s.p(t,e?o:[-1,-1])},i(t){e||(J(s,t),e=!0)},o(t){Q(s,t),e=!1},d(t){s&&s.d(t)}}}function ll(r){let e,n,l;return{c(){e=k("blockquote"),n=q("npm i -D "),l=q(r[15]),this.h()},l(s){e=v(s,"BLOCKQUOTE",{class:!0});var t=b(e);n=w(t,"npm i -D "),l=w(t,r[15]),t.forEach(h),this.h()},h(){a(e,"class","npm_url spaced svelte-1rnqnfh")},m(s,t){T(s,e,t),i(e,n),i(e,l)},p(s,t){t[0]&32768&&K(l,s[15])},d(s){s&&h(e)}}}function Ve(r){let e;const n=r[23].homepage_url,l=ne(n,r,r[22],we),s=l||sl(r);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,o){s&&s.m(t,o),e=!0},p(t,o){l?l.p&&(!e||o[0]&4194816)&&re(l,n,t,t[22],e?fe(n,t[22],o,Xe):oe(t[22]),we):s&&s.p&&(!e||o[0]&16896)&&s.p(t,e?o:[-1,-1])},i(t){e||(J(s,t),e=!0)},o(t){Q(s,t),e=!1},d(t){s&&s.d(t)}}}function sl(r){let e,n,l,s,t,o,f,u=be(r[9])+"",d;return{c(){e=k("div"),n=q(`homepage:
					`),l=k("a"),s=k("img"),f=O(),d=q(u),this.h()},l(c){e=v(c,"DIV",{class:!0});var p=b(e);n=w(p,`homepage:
					`),l=v(p,"A",{class:!0,href:!0});var g=b(l);s=v(g,"IMG",{src:!0,alt:!0}),f=S(g),d=w(g,u),g.forEach(h),p.forEach(h),this.h()},h(){ge(s.src,t=te(r[9],"/")+"favicon.png")||a(s,"src",t),a(s,"alt",o="favicon to homepage at "+r[9]),_e(s,"width","16px"),_e(s,"height","16px"),_e(s,"margin-right","var(--spacing_xs)"),a(l,"class","chip row svelte-1rnqnfh"),a(l,"href",r[9]),X(l,"selected",r[9]===r[14].url.href),a(e,"class","row svelte-1rnqnfh")},m(c,p){T(c,e,p),i(e,n),i(e,l),i(l,s),i(l,f),i(l,d)},p(c,p){p[0]&512&&!ge(s.src,t=te(c[9],"/")+"favicon.png")&&a(s,"src",t),p[0]&512&&o!==(o="favicon to homepage at "+c[9])&&a(s,"alt",o),p[0]&512&&u!==(u=be(c[9])+"")&&K(d,u),p[0]&512&&a(l,"href",c[9]),p[0]&16896&&X(l,"selected",c[9]===c[14].url.href)},d(c){c&&h(e)}}}function We(r){let e,n,l,s;return{c(){e=k("div"),n=q("repo: "),l=k("a"),s=q(r[12]),this.h()},l(t){e=v(t,"DIV",{class:!0});var o=b(e);n=w(o,"repo: "),l=v(o,"A",{class:!0,title:!0,href:!0});var f=b(l);s=w(f,r[12]),f.forEach(h),o.forEach(h),this.h()},h(){a(l,"class","chip svelte-1rnqnfh"),a(l,"title","repo"),a(l,"href",r[11]),a(e,"class","row svelte-1rnqnfh")},m(t,o){T(t,e,o),i(e,n),i(e,l),i(l,s)},p(t,o){o[0]&4096&&K(s,t[12]),o[0]&2048&&a(l,"href",t[11])},d(t){t&&h(e)}}}function Ce(r){let e,n,l,s;return{c(){e=k("div"),n=q("npm: "),l=k("a"),s=q(r[15]),this.h()},l(t){e=v(t,"DIV",{class:!0});var o=b(e);n=w(o,"npm: "),l=v(o,"A",{class:!0,title:!0,href:!0});var f=b(l);s=w(f,r[15]),f.forEach(h),o.forEach(h),this.h()},h(){a(l,"class","chip svelte-1rnqnfh"),a(l,"title","npm"),a(l,"href",r[13]),a(e,"class","row svelte-1rnqnfh")},m(t,o){T(t,e,o),i(e,n),i(e,l),i(l,s)},p(t,o){o[0]&32768&&K(s,t[15]),o[0]&8192&&a(l,"href",t[13])},d(t){t&&h(e)}}}function Le(r){let e,n,l,s;return{c(){e=k("div"),n=q("version: "),l=k("a"),s=q(r[8]),this.h()},l(t){e=v(t,"DIV",{class:!0});var o=b(e);n=w(o,"version: "),l=v(o,"A",{class:!0,title:!0,href:!0});var f=b(l);s=w(f,r[8]),f.forEach(h),o.forEach(h),this.h()},h(){a(l,"class","chip svelte-1rnqnfh"),a(l,"title","version"),a(l,"href",r[10]),a(e,"class","row svelte-1rnqnfh")},m(t,o){T(t,e,o),i(e,n),i(e,l),i(l,s)},p(t,o){o[0]&256&&K(s,t[8]),o[0]&1024&&a(l,"href",t[10])},d(t){t&&h(e)}}}function Me(r){let e,n,l,s;return{c(){e=k("div"),n=q("license: "),l=k("a"),s=q(r[1]),this.h()},l(t){e=v(t,"DIV",{class:!0});var o=b(e);n=w(o,"license: "),l=v(o,"A",{class:!0,title:!0,href:!0});var f=b(l);s=w(f,r[1]),f.forEach(h),o.forEach(h),this.h()},h(){a(l,"class","chip svelte-1rnqnfh"),a(l,"title","license"),a(l,"href",r[4]),a(e,"class","row svelte-1rnqnfh")},m(t,o){T(t,e,o),i(e,n),i(e,l),i(l,s)},p(t,o){o[0]&2&&K(s,t[1]),o[0]&16&&a(l,"href",t[4])},d(t){t&&h(e)}}}function Ne(r){let e,n,l,s,t,o,f,u,d;return{c(){e=k("section"),n=q(`data:
				`),l=k("a"),s=q("package.json"),o=O(),f=k("a"),u=q("src.json"),this.h()},l(c){e=v(c,"SECTION",{class:!0});var p=b(e);n=w(p,`data:
				`),l=v(p,"A",{class:!0,title:!0,href:!0});var g=b(l);s=w(g,"package.json"),g.forEach(h),o=S(p),f=v(p,"A",{class:!0,title:!0,href:!0});var R=b(f);u=w(R,"src.json"),R.forEach(h),p.forEach(h),this.h()},h(){a(l,"class","chip svelte-1rnqnfh"),a(l,"title","data"),a(l,"href",t=te(r[9],"/")+".well-known/package.json"),a(f,"class","chip svelte-1rnqnfh"),a(f,"title","data"),a(f,"href",d=te(r[9],"/")+".well-known/src.json"),a(e,"class","row spaced svelte-1rnqnfh")},m(c,p){T(c,e,p),i(e,n),i(e,l),i(l,s),i(e,o),i(e,f),i(f,u)},p(c,p){p[0]&512&&t!==(t=te(c[9],"/")+".well-known/package.json")&&a(l,"href",t),p[0]&512&&d!==(d=te(c[9],"/")+".well-known/src.json")&&a(f,"href",d)},d(c){c&&h(e)}}}function Te(r){let e,n,l=[],s=new Map,t=ae(r[2]);const o=f=>f[24];for(let f=0;f<t.length;f+=1){let u=Ee(r,t,f),d=o(u);s.set(d,l[f]=He(d,u))}return{c(){e=k("section"),n=k("menu");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=v(f,"SECTION",{class:!0});var u=b(e);n=v(u,"MENU",{});var d=b(n);for(let c=0;c<l.length;c+=1)l[c].l(d);d.forEach(h),u.forEach(h),this.h()},h(){a(e,"class","width_full spaced")},m(f,u){T(f,e,u),i(e,n);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(n,null)},p(f,u){u[0]&67628&&(t=ae(f[2]),l=Qe(l,u,o,1,f,t,s,n,Ye,He,null,Ee))},d(f){f&&h(e);for(let u=0;u<l.length;u+=1)l[u].d()}}}function Pe(r){let e,n=ae(r[27].declarations),l=[];for(let s=0;s<n.length;s+=1)l[s]=Ue(qe(r,n,s));return{c(){e=k("ul");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=v(s,"UL",{class:!0});var t=b(e);for(let o=0;o<l.length;o+=1)l[o].l(t);t.forEach(h),this.h()},h(){a(e,"class","declarations svelte-1rnqnfh")},m(s,t){T(s,e,t);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p(s,t){if(t[0]&44){n=ae(s[27].declarations);let o;for(o=0;o<n.length;o+=1){const f=qe(s,n,o);l[o]?l[o].p(f,t):(l[o]=Ue(f),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(s){s&&h(e),Be(l,s)}}}function Ue(r){let e,n=r[15]+"",l,s,t;return{c(){e=k("li"),l=q(n),s=O(),this.h()},l(o){e=v(o,"LI",{class:!0});var f=b(e);l=w(f,n),s=S(f),f.forEach(h),this.h()},h(){a(e,"class",t="declaration chip "+r[30]+"_declaration svelte-1rnqnfh")},m(o,f){T(o,e,f),i(e,l),i(e,s)},p(o,f){f[0]&44&&n!==(n=o[15]+"")&&K(l,n),f[0]&44&&t!==(t="declaration chip "+o[30]+"_declaration svelte-1rnqnfh")&&a(e,"class",t)},d(o){o&&h(e)}}}function He(r,e){let n,l,s,t=e[24]+"",o,f,u,d,c=e[27]&&Pe(e);return{key:r,first:null,c(){n=k("li"),l=k("div"),s=k("a"),o=q(t),u=O(),c&&c.c(),d=O(),this.h()},l(p){n=v(p,"LI",{class:!0});var g=b(n);l=v(g,"DIV",{});var R=b(l);s=v(R,"A",{class:!0,href:!0});var B=b(s);o=w(B,t),B.forEach(h),R.forEach(h),u=S(g),c&&c.l(g),d=S(g),g.forEach(h),this.h()},h(){a(s,"class","chip svelte-1rnqnfh"),a(s,"href",f=e[25]),a(n,"class","module svelte-1rnqnfh"),X(n,"ts",e[24].endsWith(".js")),X(n,"svelte",e[24].endsWith(".svelte")),X(n,"css",e[24].endsWith(".css")),X(n,"json",e[24].endsWith(".json")),this.first=n},m(p,g){T(p,n,g),i(n,l),i(l,s),i(s,o),i(n,u),c&&c.m(n,null),i(n,d)},p(p,g){e=p,g[0]&4&&t!==(t=e[24]+"")&&K(o,t),g[0]&2052&&f!==(f=e[25])&&a(s,"href",f),e[27]?c?c.p(e,g):(c=Pe(e),c.c(),c.m(n,d)):c&&(c.d(1),c=null),g[0]&4&&X(n,"ts",e[24].endsWith(".js")),g[0]&4&&X(n,"svelte",e[24].endsWith(".svelte")),g[0]&4&&X(n,"css",e[24].endsWith(".css")),g[0]&4&&X(n,"json",e[24].endsWith(".json"))},d(p){p&&h(n),c&&c.d()}}}function tl(r){let e,n,l,s,t,o,f,u,d,c,p,g,R,B,U,P,Y,x="raw data for <code>pkg: Package_Meta</code>",ee,Z,y,$=JSON.stringify(r[0],null,"	")+"",le,H;const A=r[23].repo_name,se=ne(A,r,r[22],De),E=se||xe(r),F=r[23].default,z=ne(F,r,r[22],null);let j=r[7]&&Oe(r),I=r[13]&&Se(r),D=r[9]&&Ve(r),V=r[11]&&We(r),W=r[13]&&Ce(r),C=r[10]&&Le(r),L=r[4]&&Me(r),M=r[9]&&Ne(r),N=r[2]&&r[11]&&Te(r);return{c(){e=k("div"),n=k("header"),E&&E.c(),l=O(),z&&z.c(),s=O(),j&&j.c(),t=O(),I&&I.c(),o=O(),f=k("section"),D&&D.c(),u=O(),V&&V.c(),d=O(),W&&W.c(),c=O(),C&&C.c(),p=O(),L&&L.c(),g=O(),M&&M.c(),R=O(),N&&N.c(),B=O(),U=k("section"),P=k("details"),Y=k("summary"),Y.innerHTML=x,ee=O(),Z=k("pre"),y=k("code"),le=q($),this.h()},l(_){e=v(_,"DIV",{class:!0});var m=b(e);n=v(m,"HEADER",{class:!0});var ue=b(n);E&&E.l(ue),ue.forEach(h),l=S(m),z&&z.l(m),s=S(m),j&&j.l(m),t=S(m),I&&I.l(m),o=S(m),f=v(m,"SECTION",{class:!0});var G=b(f);D&&D.l(G),u=S(G),V&&V.l(G),d=S(G),W&&W.l(G),c=S(G),C&&C.l(G),p=S(G),L&&L.l(G),g=S(G),M&&M.l(G),G.forEach(h),R=S(m),N&&N.l(m),B=S(m),U=v(m,"SECTION",{class:!0});var pe=b(U);P=v(pe,"DETAILS",{});var ie=b(P);Y=v(ie,"SUMMARY",{"data-svelte-h":!0}),Re(Y)!=="svelte-k220bw"&&(Y.innerHTML=x),ee=S(ie),Z=v(ie,"PRE",{class:!0});var me=b(Z);y=v(me,"CODE",{});var de=b(y);le=w(de,$),de.forEach(h),me.forEach(h),ie.forEach(h),pe.forEach(h),m.forEach(h),this.h()},h(){a(n,"class","spaced"),a(f,"class","properties width_full spaced svelte-1rnqnfh"),a(Z,"class","svelte-1rnqnfh"),a(U,"class","width_full spaced"),a(e,"class","package_detail svelte-1rnqnfh")},m(_,m){T(_,e,m),i(e,n),E&&E.m(n,null),i(e,l),z&&z.m(e,null),i(e,s),j&&j.m(e,null),i(e,t),I&&I.m(e,null),i(e,o),i(e,f),D&&D.m(f,null),i(f,u),V&&V.m(f,null),i(f,d),W&&W.m(f,null),i(f,c),C&&C.m(f,null),i(f,p),L&&L.m(f,null),i(f,g),M&&M.m(f,null),i(e,R),N&&N.m(e,null),i(e,B),i(e,U),i(U,P),i(P,Y),i(P,ee),i(P,Z),i(Z,y),i(y,le),H=!0},p(_,m){se?se.p&&(!H||m[0]&4198400)&&re(se,A,_,_[22],H?fe(A,_[22],m,$e):oe(_[22]),De):E&&E.p&&(!H||m[0]&4160)&&E.p(_,H?m:[-1,-1]),z&&z.p&&(!H||m[0]&4194304)&&re(z,F,_,_[22],H?fe(F,_[22],m,null):oe(_[22]),null),_[7]?j?(j.p(_,m),m[0]&128&&J(j,1)):(j=Oe(_),j.c(),J(j,1),j.m(e,t)):j&&(ce(),Q(j,1,1,()=>{j=null}),he()),_[13]?I?(I.p(_,m),m[0]&8192&&J(I,1)):(I=Se(_),I.c(),J(I,1),I.m(e,o)):I&&(ce(),Q(I,1,1,()=>{I=null}),he()),_[9]?D?(D.p(_,m),m[0]&512&&J(D,1)):(D=Ve(_),D.c(),J(D,1),D.m(f,u)):D&&(ce(),Q(D,1,1,()=>{D=null}),he()),_[11]?V?V.p(_,m):(V=We(_),V.c(),V.m(f,d)):V&&(V.d(1),V=null),_[13]?W?W.p(_,m):(W=Ce(_),W.c(),W.m(f,c)):W&&(W.d(1),W=null),_[10]?C?C.p(_,m):(C=Le(_),C.c(),C.m(f,p)):C&&(C.d(1),C=null),_[4]?L?L.p(_,m):(L=Me(_),L.c(),L.m(f,g)):L&&(L.d(1),L=null),_[9]?M?M.p(_,m):(M=Ne(_),M.c(),M.m(f,null)):M&&(M.d(1),M=null),_[2]&&_[11]?N?N.p(_,m):(N=Te(_),N.c(),N.m(e,B)):N&&(N.d(1),N=null),(!H||m[0]&1)&&$!==($=JSON.stringify(_[0],null,"	")+"")&&K(le,$)},i(_){H||(J(E,_),J(z,_),J(j),J(I),J(D),H=!0)},o(_){Q(E,_),Q(z,_),Q(j),Q(I),Q(D),H=!1},d(_){_&&h(e),E&&E.d(_),z&&z.d(_),j&&j.d(),I&&I.d(),D&&D.d(),V&&V.d(),W&&W.d(),C&&C.d(),L&&L.d(),M&&M.d(),N&&N.d()}}}function nl(r,e,n){let l,s,t,o,f,u,d,c,p,g,R,B,U,P,Y,x,ee,Z,y,$;ze(r,Fe,E=>n(14,$=E));let{$$slots:le={},$$scope:H}=e,{pkg:A}=e;const se=(E,F)=>E+"/blob/main/src/lib/"+(F.endsWith(".js")?F.slice(0,-3)+".ts":F);return r.$$set=E=>{"pkg"in E&&n(0,A=E.pkg),"$$scope"in E&&n(22,H=E.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&1&&n(21,{package_json:l,src_json:s,npm_url:t,repo_name:o,repo_url:f,changelog_url:u,homepage_url:d}=A,l,(n(20,s),n(0,A)),(n(13,t),n(0,A)),(n(12,o),n(0,A)),(n(11,f),n(0,A)),(n(10,u),n(0,A)),(n(9,d),n(0,A))),r.$$.dirty[0]&2097152&&n(15,{name:c,version:p,description:g,icon:R,license:B,repository:U,exports:P}=l,c,(n(8,p),n(21,l),n(0,A)),(n(7,g),n(21,l),n(0,A)),(n(6,R),n(21,l),n(0,A)),(n(1,B),n(21,l),n(0,A)),(n(19,U),n(21,l),n(0,A)),(n(17,P),n(21,l),n(0,A))),r.$$.dirty[0]&1048576&&n(5,{modules:Y}=s,Y),r.$$.dirty[0]&524288&&n(18,x=U?ke(ve(ve(typeof U=="string"?U:U.url,".git"),"/"),"git+"):null),r.$$.dirty[0]&262146&&n(4,ee=B&&x?x+"/blob/main/LICENSE":null),r.$$.dirty[0]&131072&&n(3,Z=P&&Object.keys(P)),r.$$.dirty[0]&131072&&n(2,y=P?Object.keys(P).map(E=>{const F=ke(E,"./");return F==="."?"index.js":F}):null)},[A,B,y,Z,ee,Y,R,g,p,d,u,f,o,t,$,c,se,P,x,U,s,l,H,le]}class _l extends Ge{constructor(e){super(),Ke(this,e,nl,tl,Je,{pkg:0},null,[-1,-1])}}export{_l as P};