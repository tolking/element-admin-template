import{e as ye,u as m,r as _,w as E,a as Q,t as Oe,g as ge,o as Pe,b as Se,s as B,c as $e,d as je,f as Fe,n as Te,h as Z,i as Ee}from"./modules-vue.beb3456d.js";function G(){const e=[],t=o=>{const i=e.indexOf(o);i!==-1&&e.splice(i,1)};return{on:o=>(e.push(o),{off:()=>t(o)}),off:t,trigger:o=>{e.forEach(i=>i(o))}}}function _t(e){let t=!1,r;const n=ye(!0);return()=>(t||(r=n.run(e),t=!0),r)}function R(e){return ge()?(Pe(e),!0):!1}function Ot(e){let t=0,r,n;const o=()=>{t-=1,n&&t<=0&&(n.stop(),r=void 0,n=void 0)};return(...i)=>(t+=1,r||(n=ye(!0),r=n.run(()=>e(...i))),R(o),r)}const K=typeof window!="undefined",gt=e=>typeof e=="boolean",Pt=e=>typeof e=="number",he=e=>typeof e=="string",V=()=>{};function we(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const Ne=e=>e();function De(e,t=!0,r=!0){let n=0,o,i=!r;const a=()=>{o&&(clearTimeout(o),o=void 0)};return l=>{const f=m(e),p=Date.now()-n;if(a(),f<=0)return n=Date.now(),l();p>f&&(n=Date.now(),i?i=!1:l()),t&&(o=setTimeout(()=>{n=Date.now(),r||(i=!0),a(),l()},f)),!r&&!o&&(o=setTimeout(()=>i=!0,f))}}function xe(e,t=!1,r="Timeout"){return new Promise((n,o)=>{setTimeout(t?()=>o(r):n,e)})}function Ce(e,...t){return t.some(r=>r in e)}var ie=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,Me=(e,t)=>{var r={};for(var n in e)Ie.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ie)for(var n of ie(e))t.indexOf(n)<0&&Ae.call(e,n)&&(r[n]=e[n]);return r};function Be(e,t,r={}){const n=r,{eventFilter:o=Ne}=n,i=Me(n,["eventFilter"]);return E(e,we(o,t),i)}var We=Object.defineProperty,ze=Object.defineProperties,Re=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,se=(e,t,r)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ue=(e,t)=>{for(var r in t||(t={}))Je.call(t,r)&&se(e,r,t[r]);if(ae)for(var r of ae(t))Le.call(t,r)&&se(e,r,t[r]);return e},Ve=(e,t)=>ze(e,Re(t));function St(e,t){var r;const n=B();return $e(()=>{n.value=e()},Ve(Ue({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),Se(n)}function $t(e,...t){return Q(Object.fromEntries(t.map(r=>[r,Oe(e,r)])))}function jt(e,t=200,r=!0,n=!0){return we(De(t,r,n),e)}function He(e,t=!0){je()?Fe(e):t?e():Te(e)}function Ke(e){let t=!1;function r(s,{flush:u="sync",deep:d=!1,timeout:h,throwOnTimeout:b}={}){let y=null;const v=[new Promise(g=>{y=E(e,q=>{s(q)===!t&&(y==null||y(),g())},{flush:u,deep:d,immediate:!0})})];return h&&v.push(xe(h,b).finally(()=>{y==null||y()})),Promise.race(v)}function n(s,u){return r(d=>d===m(s),u)}function o(s){return r(u=>Boolean(u),s)}function i(s){return n(null,s)}function a(s){return n(void 0,s)}function c(s){return r(Number.isNaN,s)}function l(s,u){return r(d=>{const h=Array.from(d);return h.includes(s)||h.includes(m(s))},u)}function f(s){return p(1,s)}function p(s=1,u){let d=-1;return r(()=>(d+=1,d>=s),u)}return Array.isArray(m(e))?{toMatch:r,toContains:l,changed:f,changedTimes:p,get not(){return t=!t,this}}:{toMatch:r,toBe:n,toBeTruthy:o,toBeNull:i,toBeNaN:c,toBeUndefined:a,changed:f,changedTimes:p,get not(){return t=!t,this}}}function qe(e,t,r={}){const{immediate:n=!0}=r,o=_(!1);let i=null;function a(){i&&(clearTimeout(i),i=null)}function c(){o.value=!1,a()}function l(...f){a(),o.value=!0,i=setTimeout(()=>{o.value=!1,i=null,e(...f)},m(t))}return n&&(o.value=!0,K&&l()),R(c),{isPending:o,start:l,stop:c}}function W(e){var t;const r=m(e);return(t=r==null?void 0:r.$el)!=null?t:r}const j=K?window:void 0,be=K?window.document:void 0;function F(...e){let t,r,n,o;if(he(e[0])?([r,n,o]=e,t=j):[t,r,n,o]=e,!t)return V;let i=V;const a=E(()=>m(t),l=>{i(),l&&(l.addEventListener(r,n,o),i=()=>{l.removeEventListener(r,n,o),i=V})},{immediate:!0,flush:"post"}),c=()=>{a(),i()};return R(c),c}function Ft(e,t,r={}){const{window:n=j,ignore:o}=r;if(!n)return;const i=_(!0),c=[F(n,"click",f=>{const p=W(e),s=f.composedPath();!p||p===f.target||s.includes(p)||!i.value||o&&o.length>0&&o.some(u=>{const d=W(u);return d&&(f.target===d||s.includes(d))})||t(f)},{passive:!0,capture:!0}),F(n,"pointerdown",f=>{const p=W(e);i.value=!!p&&!f.composedPath().includes(p)},{passive:!0})];return()=>c.forEach(f=>f())}const X=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Y="__vueuse_ssr_handlers__";X[Y]=X[Y]||{};const ke=X[Y];function Ge(e,t){return ke[e]||t}function Qe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Xe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))}};function Tt(e,t,r,n={}){var o;const{flush:i="pre",deep:a=!0,listenToStorageChanges:c=!0,writeDefaults:l=!0,shallow:f,window:p=j,eventFilter:s,onError:u=v=>{console.error(v)}}=n,d=m(t),h=Qe(d),b=(f?B:_)(t),y=(o=n.serializer)!=null?o:Xe[h];if(!r)try{r=Ge("getDefaultStorage",()=>{var v;return(v=j)==null?void 0:v.localStorage})()}catch(v){u(v)}function T(v){if(!(!r||v&&v.key!==e))try{const g=v?v.newValue:r.getItem(e);g==null?(b.value=d,l&&d!==null&&r.setItem(e,y.write(d))):typeof g!="string"?b.value=g:b.value=y.read(g)}catch(g){u(g)}}return T(),p&&c&&F(p,"storage",v=>setTimeout(()=>T(v),0)),r&&Be(b,()=>{try{b.value==null?r.removeItem(e):r.setItem(e,y.write(b.value))}catch(v){u(v)}},{flush:i,deep:a,eventFilter:s}),b}function Et({document:e=be}={}){if(!e)return _("visible");const t=_(e.visibilityState);return F(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var le=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,et=(e,t)=>{var r={};for(var n in e)Ye.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&le)for(var n of le(e))t.indexOf(n)<0&&Ze.call(e,n)&&(r[n]=e[n]);return r};function Nt(e,t,r={}){const n=r,{window:o=j}=n,i=et(n,["window"]);let a;const c=o&&"ResizeObserver"in o,l=()=>{a&&(a.disconnect(),a=void 0)},f=E(()=>W(e),s=>{l(),c&&o&&s&&(a=new o.ResizeObserver(t),a.observe(s,i))},{immediate:!0,flush:"post"}),p=()=>{l(),f()};return R(p),{isSupported:c,stop:p}}var tt=Object.defineProperty,rt=Object.defineProperties,nt=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,ce=(e,t,r)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))ot.call(t,r)&&ce(e,r,t[r]);if(ue)for(var r of ue(t))it.call(t,r)&&ce(e,r,t[r]);return e},M=(e,t)=>rt(e,nt(t));const at={json:"application/json",text:"text/plain",formData:"multipart/form-data"};function H(e){return Ce(e,"immediate","refetch","initialData","timeout","beforeFetch","afterFetch","onFetchError")}function z(e){return e instanceof Headers?Object.fromEntries([...e.entries()]):e}function Dt(e={}){const t=e.options||{},r=e.fetchOptions||{};function n(o,...i){const a=Z(()=>e.baseUrl?lt(m(e.baseUrl),m(o)):m(o));let c=t,l=r;return i.length>0&&(H(i[0])?c=w(w({},c),i[0]):l=M(w(w({},l),i[0]),{headers:w(w({},z(l.headers)||{}),z(i[0].headers)||{})})),i.length>1&&H(i[1])&&(c=w(w({},c),i[1])),st(a,l,c)}return n}function st(e,...t){var r;const n=typeof AbortController=="function";let o={},i={immediate:!0,refetch:!1,timeout:0};const a={method:"get",type:"text",payload:void 0};t.length>0&&(H(t[0])?i=w(w({},i),t[0]):o=t[0]),t.length>1&&H(t[1])&&(i=w(w({},i),t[1]));const{fetch:c=(r=j)==null?void 0:r.fetch,initialData:l,timeout:f}=i,p=G(),s=G(),u=G(),d=_(!1),h=_(!1),b=_(!1),y=_(null),T=B(null),v=B(null),g=B(l),q=Z(()=>n&&h.value);let x,C;const ee=()=>{n&&x&&x.abort()},k=P=>{h.value=P,d.value=!P};f&&(C=qe(ee,f,{immediate:!1}));const J=async(P=!1)=>{var S;k(!0),v.value=null,y.value=null,b.value=!1,x=void 0,n&&(x=new AbortController,x.signal.onabort=()=>b.value=!0,o=M(w({},o),{signal:x.signal}));const $={method:a.method,headers:{}};if(a.payload){const U=z($.headers);a.payloadType&&(U["Content-Type"]=(S=at[a.payloadType])!=null?S:a.payloadType),$.body=a.payloadType==="json"?JSON.stringify(m(a.payload)):m(a.payload)}let re=!1;const A={url:m(e),options:o,cancel:()=>{re=!0}};if(i.beforeFetch&&Object.assign(A,await i.beforeFetch(A)),re||!c)return k(!1),Promise.resolve(null);let D=null;return C&&C.start(),new Promise((U,_e)=>{var ne;c(A.url,M(w(w({},$),A.options),{headers:w(w({},z($.headers)),z((ne=A.options)==null?void 0:ne.headers))})).then(async O=>{if(T.value=O,y.value=O.status,D=await O[a.type](),i.afterFetch&&y.value>=200&&y.value<300&&({data:D}=await i.afterFetch({data:D,response:O})),g.value=D,!O.ok)throw new Error(O.statusText);return p.trigger(O),U(O)}).catch(async O=>{let oe=O.message||O.name;return i.onFetchError&&({data:D,error:oe}=await i.onFetchError({data:D,error:O})),g.value=D,v.value=oe,s.trigger(O),P?_e(O):U(null)}).finally(()=>{k(!1),C&&C.stop(),u.trigger(null)})})};E(()=>[m(e),m(i.refetch)],()=>m(i.refetch)&&J(),{deep:!0});const L={isFinished:d,statusCode:y,response:T,error:v,data:g,isFetching:h,canAbort:q,aborted:b,abort:ee,execute:J,onFetchResponse:p.on,onFetchError:s.on,onFetchFinally:u.on,get:N("get"),put:N("put"),post:N("post"),delete:N("delete"),patch:N("patch"),head:N("head"),options:N("options"),json:I("json"),text:I("text"),blob:I("blob"),arrayBuffer:I("arrayBuffer"),formData:I("formData")};function N(P){return(S,$)=>{if(!h.value)return a.method=P,a.payload=S,a.payloadType=$,Ee(a.payload)&&E(()=>[m(a.payload),m(i.refetch)],()=>m(i.refetch)&&J(),{deep:!0}),!$&&m(S)&&Object.getPrototypeOf(m(S))===Object.prototype&&(a.payloadType="json"),L}}function te(){return new Promise((P,S)=>{Ke(d).toBe(!0).then(()=>P(L)).catch($=>S($))})}function I(P){return()=>{if(!h.value)return a.type=P,M(w({},L),{then(S,$){return te().then(S,$)}})}}return i.immediate&&setTimeout(J,0),M(w({},L),{then(P,S){return te().then(P,S)}})}function lt(e,t){return!e.endsWith("/")&&!t.startsWith("/")?`${e}/${t}`:`${e}${t}`}const ut={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function xt(e={}){const{reactive:t=!1,target:r=j,aliasMap:n=ut,passive:o=!0,onEventFired:i=V}=e,a=Q(new Set),c={toJSON(){return{}},current:a},l=t?Q(c):c;function f(s,u){var d,h;const b=(d=s.key)==null?void 0:d.toLowerCase(),y=(h=s.code)==null?void 0:h.toLowerCase(),T=[y,b].filter(Boolean);y&&(u?a.add(s.code):a.delete(s.code));for(const v of T)v in l&&(t?l[v]=u:l[v].value=u)}r&&(F(r,"keydown",s=>(f(s,!0),i(s)),{passive:o}),F(r,"keyup",s=>(f(s,!1),i(s)),{passive:o}));const p=new Proxy(l,{get(s,u,d){if(typeof u!="string")return Reflect.get(s,u,d);if(u=u.toLowerCase(),u in n&&(u=n[u]),!(u in l))if(/[+_-]/.test(u)){const b=u.split(/[+_-]/g).map(y=>y.trim());l[u]=Z(()=>b.every(y=>m(p[y])))}else l[u]=_(!1);const h=Reflect.get(s,u,d);return t?m(h):h}});return p}var fe=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,pt=(e,t)=>{var r={};for(var n in e)ct.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&fe)for(var n of fe(e))t.indexOf(n)<0&&ft.call(e,n)&&(r[n]=e[n]);return r};function dt(e,t,r={}){const n=r,{window:o=j}=n,i=pt(n,["window"]);let a;const c=o&&"IntersectionObserver"in o,l=()=>{a&&(a.disconnect(),a=void 0)},f=E(()=>W(e),s=>{l(),c&&o&&s&&(a=new o.MutationObserver(t),a.observe(s,i))},{immediate:!0}),p=()=>{l(),f()};return R(p),{isSupported:c,stop:p}}var pe,de;K&&(window==null?void 0:window.navigator)&&((pe=window==null?void 0:window.navigator)==null?void 0:pe.platform)&&/iP(ad|hone|od)/.test((de=window==null?void 0:window.navigator)==null?void 0:de.platform);var vt=Object.defineProperty,ve=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable,me=(e,t,r)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ht=(e,t)=>{for(var r in t||(t={}))mt.call(t,r)&&me(e,r,t[r]);if(ve)for(var r of ve(t))yt.call(t,r)&&me(e,r,t[r]);return e};const wt={top:0,left:0,bottom:0,right:0,height:0,width:0};ht({text:""},wt);function Ct(e=null,t={}){var r,n;const{document:o=be,observe:i=!1,titleTemplate:a="%s"}=t,c=_((r=e!=null?e:o==null?void 0:o.title)!=null?r:null);return E(c,(l,f)=>{he(l)&&l!==f&&o&&(o.title=a.replace("%s",l))},{immediate:!0}),i&&o&&dt((n=o.head)==null?void 0:n.querySelector("title"),()=>{o&&o.title!==c.value&&(c.value=a.replace("%s",o.title))},{childList:!0}),c}function It({window:e=j}={}){if(!e)return _(!1);const t=_(e.document.hasFocus());return F(e,"blur",()=>{t.value=!1}),F(e,"focus",()=>{t.value=!0}),t}function At({window:e=j,initialWidth:t=1/0,initialHeight:r=1/0}={}){const n=_(t),o=_(r),i=()=>{e&&(n.value=e.innerWidth,o.value=e.innerHeight)};return i(),He(i),F("resize",i,{passive:!0}),{width:n,height:o}}export{Pt as a,gt as b,Nt as c,qe as d,jt as e,Et as f,It as g,St as h,K as i,Ot as j,At as k,Dt as l,_t as m,Tt as n,Ft as o,xt as p,Ct as q,$t as r,R as t,F as u};
