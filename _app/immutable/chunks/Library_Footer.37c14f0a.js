import{n as H,M as Y,Y as L,Z as A,g as d,d as m,h as u,_ as B,j as p,i as q,x as g,C as F,v as D,b as v,s as G,f as C,c as I,y as M,z as O,A as S,k as J,l as K,m as N}from"./scheduler.8e25a0a1.js";import{S as R,i as T,a as k,t as E,b as P,d as Q,m as U,e as W}from"./index.e8c7260f.js";import{g as X,f as V}from"./deployments.54f83227.js";function x(o){let e,t,s=[{xmlns:"http://www.w3.org/2000/svg"},{"aria-label":o[2]},{viewBox:"0 0 1024 1024"},{fill:"none"},o[3]],r={};for(let l=0;l<s.length;l+=1)r=Y(r,s[l]);return{c(){e=L("svg"),t=L("path"),this.h()},l(l){e=A(l,"svg",{xmlns:!0,"aria-label":!0,viewBox:!0,fill:!0});var a=d(e);t=A(a,"path",{fill:!0,"fill-rule":!0,"clip-rule":!0,d:!0,transform:!0}),d(t).forEach(m),a.forEach(m),this.h()},h(){u(t,"fill",o[1]),u(t,"fill-rule","evenodd"),u(t,"clip-rule","evenodd"),u(t,"d",`M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z`),u(t,"transform","scale(64)"),B(e,r),p(e,"width",o[0]),p(e,"height",o[0])},m(l,a){q(l,e,a),g(e,t)},p(l,[a]){a&2&&u(t,"fill",l[1]),B(e,r=X(s,[{xmlns:"http://www.w3.org/2000/svg"},a&4&&{"aria-label":l[2]},{viewBox:"0 0 1024 1024"},{fill:"none"},a&8&&l[3]])),p(e,"width",l[0]),p(e,"height",l[0])},i:F,o:F,d(l){l&&m(e)}}}function $(o,e,t){let{size:s="var(--spacing_7, 64px)"}=e,{fill:r="var(--color, #000)"}=e,{label:l="GitHub icon"}=e,{attrs:a=void 0}=e;return o.$$set=f=>{"size"in f&&t(0,s=f.size),"fill"in f&&t(1,r=f.fill),"label"in f&&t(2,l=f.label),"attrs"in f&&t(3,a=f.attrs)},[s,r,l,a]}class ee extends R{constructor(e){super(),T(this,e,$,x,H,{size:0,fill:1,label:2,attrs:3})}}const te=o=>({}),Z=o=>({});function le(o){let e,t;return e=new ee({}),{c(){P(e.$$.fragment)},l(s){Q(e.$$.fragment,s)},m(s,r){U(e,s,r),t=!0},i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){E(e.$$.fragment,s),t=!1},d(s){W(e,s)}}}function j(o){let e,t,s=V(o[0])+"",r;return{c(){e=v("div"),t=v("a"),r=J(s),this.h()},l(l){e=C(l,"DIV",{class:!0});var a=d(e);t=C(a,"A",{href:!0,rel:!0});var f=d(t);r=K(f,s),f.forEach(m),a.forEach(m),this.h()},h(){u(t,"href",o[0]),u(t,"rel","me"),u(e,"class","root_url svelte-1o3q16b")},m(l,a){q(l,e,a),g(e,t),g(t,r)},p(l,a){a&1&&s!==(s=V(l[0])+"")&&N(r,s),a&1&&u(t,"href",l[0])},d(l){l&&m(e)}}}function se(o){let e,t,s,r,l,a;const f=o[4].default,i=D(f,o,o[3],null),w=o[4].logo,b=D(w,o,o[3],Z),h=b||le();let _=o[0]&&j(o);return{c(){e=v("footer"),i&&i.c(),t=G(),s=v("div"),r=v("a"),h&&h.c(),l=G(),_&&_.c(),this.h()},l(n){e=C(n,"FOOTER",{class:!0});var c=d(e);i&&i.l(c),t=I(c),s=C(c,"DIV",{class:!0});var z=d(s);r=C(z,"A",{href:!0,rel:!0,class:!0});var y=d(r);h&&h.l(y),y.forEach(m),z.forEach(m),l=I(c),_&&_.l(c),c.forEach(m),this.h()},h(){u(r,"href",o[1]),u(r,"rel","me"),u(r,"class","svelte-1o3q16b"),u(s,"class","logo svelte-1o3q16b"),u(e,"class","panel padded_lg svelte-1o3q16b")},m(n,c){q(n,e,c),i&&i.m(e,null),g(e,t),g(e,s),g(s,r),h&&h.m(r,null),g(e,l),_&&_.m(e,null),a=!0},p(n,[c]){i&&i.p&&(!a||c&8)&&M(i,f,n,n[3],a?S(f,n[3],c,null):O(n[3]),null),b&&b.p&&(!a||c&8)&&M(b,w,n,n[3],a?S(w,n[3],c,te):O(n[3]),Z),(!a||c&2)&&u(r,"href",n[1]),n[0]?_?_.p(n,c):(_=j(n),_.c(),_.m(e,null)):_&&(_.d(1),_=null)},i(n){a||(k(i,n),k(h,n),a=!0)},o(n){E(i,n),E(h,n),a=!1},d(n){n&&m(e),i&&i.d(n),h&&h.d(n),_&&_.d()}}}function ae(o,e,t){let s,{$$slots:r={},$$scope:l}=e,{pkg:a}=e,{root_url:f=null}=e;return o.$$set=i=>{"pkg"in i&&t(2,a=i.pkg),"root_url"in i&&t(0,f=i.root_url),"$$scope"in i&&t(3,l=i.$$scope)},o.$$.update=()=>{o.$$.dirty&4&&t(1,{repo_url:s}=a,s)},[f,s,a,l,r]}class ie extends R{constructor(e){super(),T(this,e,ae,se,H,{pkg:2,root_url:0})}}export{ie as L};
