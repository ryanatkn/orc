import{r as y,u as d}from"./scheduler.8e25a0a1.js";function x(t,n){const r={},u={},i={$$scope:1};let e=t.length;for(;e--;){const l=t[e],s=n[e];if(s){for(const o in l)o in s||(u[o]=1);for(const o in s)i[o]||(r[o]=s[o],i[o]=1);t[e]=s}else for(const o in l)i[o]=1}for(const l in u)l in r||(r[l]=void 0);return r}function C(t){return typeof t=="object"&&t!==null?t:{}}const p=(t,n)=>!n||!t.startsWith(n)?t:t.substring(n.length),h=(t,n)=>!n||!t.endsWith(n)?t:t.substring(0,t.length-n.length),E=(t,n)=>t.endsWith(n)?t:t+n,g=(t,n,r)=>{const{name:u}=n,e=(f=>f?h(p(h(f,".git"),"git+"),"/"):null)(n.repository?typeof n.repository=="string"?n.repository:n.repository.url:null),l=n.homepage??null,s=!n.private&&!!n.exports&&n.version!=="0.0.1",o=s?"https://www.npmjs.com/package/"+n.name:null,c=s&&e?e+"/blob/main/CHANGELOG.md":null,_=w(u),a=e?p(e,"https://github.com/").split("/")[0]:null;return{url:t,package_json:n,src_json:r,name:u,repo_name:_,repo_url:e,owner_name:a,homepage_url:l,npm_url:o,changelog_url:c,published:s}},w=t=>t[0]==="@"?t.split("/")[1]:t,W=t=>p(new URL(t).host,"www."),m=Symbol("Deployments"),$=t=>y(m,t),q=()=>d(m),G=(t,n)=>{const r=[],u=[];for(const{url:e,package_json:l,src_json:s,check_runs:o,pull_requests:c}of t)l&&s?r.push({...g(e,l,s),check_runs:o,pull_requests:c}):u.push({url:e,package_json:null,src_json:null,check_runs:null,pull_requests:null});const i=r.find(e=>e.homepage_url===n);if(!i)throw Error(`Cannot find deployment with homepage_url: ${n}`);return{deployment:i,deployments:r,unfetched_deployments:u}};export{C as a,$ as b,q as c,h as d,E as e,W as f,x as g,G as p,p as s};