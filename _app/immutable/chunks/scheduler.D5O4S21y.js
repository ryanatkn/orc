function j(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function at(){return Object.create(null)}function R(t){t.forEach(I)}function F(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ft(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function _t(t,e){return t!=t?e==e:t!==e}function dt(t){return Object.keys(t).length===0}function S(t,...e){if(t==null){for(const i of e)i(void 0);return j}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t){let e;return S(t,n=>e=n)(),e}function mt(t,e,n){t.$$.on_destroy.push(S(e,n))}function pt(t,e,n,i){if(t){const s=D(t,e,n,i);return t[0](s)}}function D(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function yt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function gt(t,e,n,i,s,c){if(s){const r=D(e,n,i,c);t.p(r,s)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function xt(t,e,n){return t.set(n),e}function wt(t){return t&&F(t.destroy)?t.destroy:j}let b=!1;function Et(){b=!0}function vt(){b=!1}function U(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:U(1,s,W=>e[n[W]].claim_order,a))-1;i[l]=n[u]+1;const k=u+1;n[k]=l,s=Math.max(k,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[l],u)}}function K(t,e){t.appendChild(e)}function Q(t,e){if(b){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function V(t,e,n){t.insertBefore(e,n||null)}function X(t,e,n){b&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function Tt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function P(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function At(){return A(" ")}function Nt(){return A("")}function C(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function N(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Y=["width","height"];function Z(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Y.indexOf(i)===-1?t[i]=e[i]:N(t,i,e[i])}function kt(t,e){for(const n in e)N(t,n,e[n])}function $(t,e){Object.keys(e).forEach(n=>{tt(t,n,e[n])})}function tt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:N(t,e,n)}function Ct(t){return/-/.test(t)?$:Z}function Ht(t){return t.dataset.svelteH}function Lt(t){return Array.from(t.childNodes)}function O(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,i,s=!1){O(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function z(t,e,n,i){return q(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Mt(t,e,n){return z(t,e,n,T)}function jt(t,e,n){return z(t,e,n,P)}function et(t,e){return q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function St(t){return et(t," ")}function H(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Dt(t,e){const n=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new x(e);O(t);const s=t.splice(n,i-n+1);y(s[0]),y(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new x(e);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new x(e,c)}function Pt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ot(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let p;function nt(){if(p===void 0){p=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{p=!0}}return p}function qt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=T("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=nt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=C(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=C(i.contentWindow,"resize",e),e()}),K(t,i),()=>{(s||c&&i.contentWindow)&&c(),y(i)}}function zt(t,e,n){t.classList.toggle(e,!!n)}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Bt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class st{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=P(n.nodeName):this.e=T(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)V(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}class x extends st{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)X(this.t,this.n[n],e)}}function Wt(t,e){return new t(e)}let g;function w(t){g=t}function d(){if(!g)throw new Error("Function called outside component initialization");return g}function Gt(t){d().$$.on_mount.push(t)}function It(t){d().$$.after_update.push(t)}function Rt(t){d().$$.on_destroy.push(t)}function Ft(){const t=d();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=it(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Ut(t,e){return d().$$.context.set(t,e),e}function Jt(t){return d().$$.context.get(t)}function Kt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],L=[];let _=[];const M=[],B=Promise.resolve();let v=!1;function rt(){v||(v=!0,B.then(lt))}function Qt(){return rt(),B}function ct(t){_.push(t)}const E=new Set;let f=0;function lt(){if(f!==0)return;const t=g;do{try{for(;f<h.length;){const e=h[f];f++,w(e),ot(e.$$)}}catch(e){throw h.length=0,f=0,e}for(w(null),h.length=0,f=0;L.length;)L.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];E.has(n)||(E.add(n),n())}_.length=0}while(h.length);for(;M.length;)M.pop()();v=!1,E.clear(),w(t)}function ot(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ct)}}function Vt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{ut as $,yt as A,Dt as B,j as C,S as D,Ft as E,Rt as F,C as G,x as H,F as I,zt as J,R as K,Ht as L,G as M,Z as N,mt as O,xt as P,ht as Q,ct as R,qt as S,wt as T,Ct as U,Tt as V,ft as W,Kt as X,P as Y,jt as Z,kt as _,It as a,at as a0,lt as a1,dt as a2,Vt as a3,g as a4,w as a5,I as a6,h as a7,rt as a8,Et as a9,vt as aa,T as b,St as c,y as d,Nt as e,Mt as f,Lt as g,N as h,X as i,Ot as j,A as k,et as l,Pt as m,_t as n,Gt as o,L as p,Wt as q,Ut as r,At as s,Qt as t,Jt as u,pt as v,Bt as w,Q as x,gt as y,bt as z};
