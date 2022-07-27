import{e as Fe,r as K,t as Re,i as H,a as _,c as M,b as ze,u as O,g as He,o as Qe,d as se,f as ke,n as De,w as j,s as U,h as Ue,j as Je,k as Ke}from"./modules-vue.e6816ec1.js";var Ge=Object.defineProperty,qe=Object.defineProperties,Xe=Object.getOwnPropertyDescriptors,de=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,pe=(e,t,r)=>t in e?Ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,et=(e,t)=>{for(var r in t||(t={}))Ye.call(t,r)&&pe(e,r,t[r]);if(de)for(var r of de(t))Ze.call(t,r)&&pe(e,r,t[r]);return e},tt=(e,t)=>qe(e,Xe(t));function pr(e,t){var r;const n=U();return Ue(()=>{n.value=e()},tt(et({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),Je(n)}var ve;const te=typeof window<"u",rt=e=>typeof e<"u",nt=Object.prototype.toString,vr=e=>typeof e=="boolean",ot=e=>typeof e=="function",ne=e=>typeof e=="number",Ie=e=>typeof e=="string",mr=e=>nt.call(e)==="[object Object]",at=(e,t,r)=>Math.min(r,Math.max(t,e)),Q=()=>{};te&&((ve=window==null?void 0:window.navigator)==null?void 0:ve.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ue(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const Ne=e=>e();function it(e,t={}){let r,n;return a=>{const s=O(e),i=O(t.maxWait);if(r&&clearTimeout(r),s<=0||i!==void 0&&i<=0)return n&&(clearTimeout(n),n=null),a();i&&!n&&(n=setTimeout(()=>{r&&clearTimeout(r),n=null,a()},i)),r=setTimeout(()=>{n&&clearTimeout(n),n=null,a()},s)}}function st(e,t=!0,r=!0){let n=0,o,a=!0;const s=()=>{o&&(clearTimeout(o),o=void 0)};return l=>{const p=O(e),d=Date.now()-n;if(s(),p<=0)return n=Date.now(),l();d>p&&(r||!a)?(n=Date.now(),l()):t&&(o=setTimeout(()=>{n=Date.now(),a=!0,s(),l()},p)),!r&&!o&&(o=setTimeout(()=>a=!0,p)),a=!1}}function ut(e=Ne){const t=_(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...a)=>{t.value&&e(...a)}}}function me(e,t=!1,r="Timeout"){return new Promise((n,o)=>{setTimeout(t?()=>o(r):n,e)})}function xe(e){return e}function lt(e,...t){return t.some(r=>r in e)}function ct(e,t){var r;if(typeof e=="number")return e+t;const n=((r=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:r[0])||"",o=e.slice(n.length),a=parseFloat(n)+t;return Number.isNaN(a)?e:a+o}function oe(){const e=[],t=o=>{const a=e.indexOf(o);a!==-1&&e.splice(a,1)};return{on:o=>(e.push(o),{off:()=>t(o)}),off:t,trigger:o=>{e.forEach(a=>a(o))}}}function hr(e){let t=!1,r;const n=Fe(!0);return()=>(t||(r=n.run(e),t=!0),r)}function R(e){return He()?(Qe(e),!0):!1}function yr(e){let t=0,r,n;const o=()=>{t-=1,n&&t<=0&&(n.stop(),r=void 0,n=void 0)};return(...a)=>(t+=1,r||(n=Fe(!0),r=n.run(()=>e(...a))),R(o),r)}function ft(e){if(!H(e))return K(e);const t=new Proxy({},{get(r,n,o){return O(Reflect.get(e.value,n,o))},set(r,n,o){return H(e.value[n])&&!H(o)?e.value[n].value=o:e.value[n]=o,!0},deleteProperty(r,n){return Reflect.deleteProperty(e.value,n)},has(r,n){return Reflect.has(e.value,n)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return K(t)}function dt(e){return ft(M(e))}function Or(e,...t){const r=t.flat();return dt(()=>Object.fromEntries(Object.entries(ze(e)).filter(n=>!r.includes(n[0]))))}function wr(e,...t){const r=t.flat();return K(Object.fromEntries(r.map(n=>[n,Re(e,n)])))}function pt(e,t=200,r={}){return ue(it(t,r),e)}function _r(e,t=200,r={}){if(t<=0)return e;const n=_(e.value),o=pt(()=>{n.value=e.value},t,r);return j(e,()=>o()),n}function gr(e,t=200,r=!0,n=!0){return ue(st(t,r,n),e)}function vt(e,t=!0){se()?Ke(e):t?e():De(e)}function le(e,t=!0){se()?ke(e):t?e():De(e)}function mt(e){let t=!1;function r(u,{flush:f="sync",deep:v=!1,timeout:y,throwOnTimeout:m}={}){let c=null;const b=[new Promise(P=>{c=j(e,$=>{u($)!==t&&(c==null||c(),P($))},{flush:f,deep:v,immediate:!0})})];return y!=null&&b.push(me(y,m).then(()=>O(e)).finally(()=>c==null?void 0:c())),Promise.race(b)}function n(u,f){if(!H(u))return r($=>$===u,f);const{flush:v="sync",deep:y=!1,timeout:m,throwOnTimeout:c}=f!=null?f:{};let g=null;const P=[new Promise($=>{g=j([e,u],([w,h])=>{t!==(w===h)&&(g==null||g(),$(w))},{flush:v,deep:y,immediate:!0})})];return m!=null&&P.push(me(m,c).then(()=>O(e)).finally(()=>(g==null||g(),O(e)))),Promise.race(P)}function o(u){return r(f=>Boolean(f),u)}function a(u){return n(null,u)}function s(u){return n(void 0,u)}function i(u){return r(Number.isNaN,u)}function l(u,f){return r(v=>{const y=Array.from(v);return y.includes(u)||y.includes(O(u))},f)}function p(u){return d(1,u)}function d(u=1,f){let v=-1;return r(()=>(v+=1,v>=u),f)}return Array.isArray(O(e))?{toMatch:r,toContains:l,changed:p,changedTimes:d,get not(){return t=!t,this}}:{toMatch:r,toBe:n,toBeTruthy:o,toBeNull:a,toBeNaN:i,toBeUndefined:s,changed:p,changedTimes:d,get not(){return t=!t,this}}}function Me(e,t,r={}){const{immediate:n=!0}=r,o=_(!1);let a=null;function s(){a&&(clearTimeout(a),a=null)}function i(){o.value=!1,s()}function l(...p){s(),o.value=!0,a=setTimeout(()=>{o.value=!1,a=null,e(...p)},O(t))}return n&&(o.value=!0,te&&l()),R(i),{isPending:o,start:l,stop:i}}function br(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,o=H(e),a=_(e);function s(i){return arguments.length?(a.value=i,a.value):(a.value=a.value===O(r)?O(n):O(r),a.value)}return o?s:[a,s]}var he=Object.getOwnPropertySymbols,ht=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable,Ot=(e,t)=>{var r={};for(var n in e)ht.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&he)for(var n of he(e))t.indexOf(n)<0&&yt.call(e,n)&&(r[n]=e[n]);return r};function wt(e,t,r={}){const n=r,{eventFilter:o=Ne}=n,a=Ot(n,["eventFilter"]);return j(e,ue(o,t),a)}var _t=Object.defineProperty,gt=Object.defineProperties,bt=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,ye=(e,t,r)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Pt=(e,t)=>{for(var r in t||(t={}))Ce.call(t,r)&&ye(e,r,t[r]);if(Z)for(var r of Z(t))Ae.call(t,r)&&ye(e,r,t[r]);return e},$t=(e,t)=>gt(e,bt(t)),St=(e,t)=>{var r={};for(var n in e)Ce.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Z)for(var n of Z(e))t.indexOf(n)<0&&Ae.call(e,n)&&(r[n]=e[n]);return r};function Et(e,t,r={}){const n=r,{eventFilter:o}=n,a=St(n,["eventFilter"]),{eventFilter:s,pause:i,resume:l,isActive:p}=ut(o);return{stop:wt(e,t,$t(Pt({},a),{eventFilter:s})),pause:i,resume:l,isActive:p}}function C(e){var t;const r=O(e);return(t=r==null?void 0:r.$el)!=null?t:r}const F=te?window:void 0,Be=te?window.document:void 0;function T(...e){let t,r,n,o;if(Ie(e[0])?([r,n,o]=e,t=F):[t,r,n,o]=e,!t)return Q;let a=Q;const s=j(()=>C(t),l=>{a(),l&&(l.addEventListener(r,n,o),a=()=>{l.removeEventListener(r,n,o),a=Q})},{immediate:!0,flush:"post"}),i=()=>{s(),a()};return R(i),i}function Pr(e,t,r={}){const{window:n=F,ignore:o,capture:a=!0,detectIframe:s=!1}=r;if(!n)return;const i=_(!0);let l;const p=f=>{n.clearTimeout(l);const v=C(e),y=f.composedPath();!v||v===f.target||y.includes(v)||!i.value||o&&o.length>0&&o.some(m=>{const c=C(m);return c&&(f.target===c||y.includes(c))})||t(f)},d=[T(n,"click",p,{passive:!0,capture:a}),T(n,"pointerdown",f=>{const v=C(e);i.value=!!v&&!f.composedPath().includes(v)},{passive:!0}),T(n,"pointerup",f=>{if(f.button===0){const v=f.composedPath();f.composedPath=()=>v,l=n.setTimeout(()=>p(f),50)}},{passive:!0}),s&&T(n,"blur",f=>{var v;const y=C(e);((v=document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(y!=null&&y.contains(document.activeElement))&&t(f)})].filter(Boolean);return()=>d.forEach(f=>f())}function Y(e,t={}){const{window:r=F}=t,n=Boolean(r&&"matchMedia"in r&&typeof r.matchMedia=="function");let o;const a=_(!1),s=()=>{!n||(o||(o=r.matchMedia(e)),a.value=o.matches)};return vt(()=>{s(),o&&("addEventListener"in o?o.addEventListener("change",s):o.addListener(s),R(()=>{"removeEventListener"in o?o.removeEventListener("change",s):o.removeListener(s)}))}),a}var Tt=Object.defineProperty,Oe=Object.getOwnPropertySymbols,jt=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,we=(e,t,r)=>t in e?Tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Dt=(e,t)=>{for(var r in t||(t={}))jt.call(t,r)&&we(e,r,t[r]);if(Oe)for(var r of Oe(t))Ft.call(t,r)&&we(e,r,t[r]);return e};function $r(e,t={}){function r(i,l){let p=e[i];return l!=null&&(p=ct(p,l)),typeof p=="number"&&(p=`${p}px`),p}const{window:n=F}=t;function o(i){return n?n.matchMedia(i).matches:!1}const a=i=>Y(`(min-width: ${r(i)})`,t),s=Object.keys(e).reduce((i,l)=>(Object.defineProperty(i,l,{get:()=>a(l),enumerable:!0,configurable:!0}),i),{});return Dt({greater:a,smaller(i){return Y(`(max-width: ${r(i,-.1)})`,t)},between(i,l){return Y(`(min-width: ${r(i)}) and (max-width: ${r(l,-.1)})`,t)},isGreater(i){return o(`(min-width: ${r(i)})`)},isSmaller(i){return o(`(max-width: ${r(i,-.1)})`)},isInBetween(i,l){return o(`(min-width: ${r(i)}) and (max-width: ${r(l,-.1)})`)}},s)}const ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ie="__vueuse_ssr_handlers__";ae[ie]=ae[ie]||{};const It=ae[ie];function Le(e,t){return It[e]||t}function Nt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const xt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Mt(e,t,r,n={}){var o;const{flush:a="pre",deep:s=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,shallow:p,window:d=F,eventFilter:u,onError:f=h=>{console.error(h)}}=n,v=(p?U:_)(t);if(!r)try{r=Le("getDefaultStorage",()=>{var h;return(h=F)==null?void 0:h.localStorage})()}catch(h){f(h)}if(!r)return v;const y=O(t),m=Nt(y),c=(o=n.serializer)!=null?o:xt[m],{pause:g,resume:b}=Et(v,()=>P(v.value),{flush:a,deep:s,eventFilter:u});return d&&i&&T(d,"storage",w),w(),v;function P(h){try{h==null?r.removeItem(e):r.setItem(e,c.write(h))}catch(E){f(E)}}function $(h){if(!(h&&h.key!==e)){g();try{const E=h?h.newValue:r.getItem(e);return E==null?(l&&y!==null&&r.setItem(e,c.write(y)),y):typeof E!="string"?E:c.read(E)}catch(E){f(E)}finally{b()}}}function w(h){h&&h.key!==e||(v.value=$(h))}}function Ve(e){return Y("(prefers-color-scheme: dark)",e)}var Ct=Object.defineProperty,_e=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,Bt=Object.prototype.propertyIsEnumerable,ge=(e,t,r)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Lt=(e,t)=>{for(var r in t||(t={}))At.call(t,r)&&ge(e,r,t[r]);if(_e)for(var r of _e(t))Bt.call(t,r)&&ge(e,r,t[r]);return e};function Vt(e={}){const{selector:t="html",attribute:r="class",window:n=F,storage:o,storageKey:a="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:i,emitAuto:l}=e,p=Lt({auto:"",light:"light",dark:"dark"},e.modes||{}),d=Ve({window:n}),u=M(()=>d.value?"dark":"light"),f=i||(a==null?_("auto"):Mt(a,"auto",o,{window:n,listenToStorageChanges:s})),v=M({get(){return f.value==="auto"&&!l?u.value:f.value},set(g){f.value=g}}),y=Le("updateHTMLAttrs",(g,b,P)=>{const $=n==null?void 0:n.document.querySelector(g);if(!!$)if(b==="class"){const w=P.split(/\s/g);Object.values(p).flatMap(h=>(h||"").split(/\s/g)).filter(Boolean).forEach(h=>{w.includes(h)?$.classList.add(h):$.classList.remove(h)})}else $.setAttribute(b,P)});function m(g){var b;const P=g==="auto"?u.value:g;y(t,r,(b=p[P])!=null?b:P)}function c(g){e.onChanged?e.onChanged(g,m):m(g)}return j(v,c,{flush:"post",immediate:!0}),le(()=>c(v.value)),v}var Wt=Object.defineProperty,Rt=Object.defineProperties,zt=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertySymbols,Ht=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable,Pe=(e,t,r)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,kt=(e,t)=>{for(var r in t||(t={}))Ht.call(t,r)&&Pe(e,r,t[r]);if(be)for(var r of be(t))Qt.call(t,r)&&Pe(e,r,t[r]);return e},Ut=(e,t)=>Rt(e,zt(t));function Sr(e={}){const{valueDark:t="dark",valueLight:r="",window:n=F}=e,o=Vt(Ut(kt({},e),{onChanged:(i,l)=>{var p;e.onChanged?(p=e.onChanged)==null||p.call(e,i==="dark"):l(i)},modes:{dark:t,light:r}})),a=Ve({window:n});return M({get(){return o.value==="dark"},set(i){i===a.value?o.value="auto":o.value=i?"dark":"light"}})}function Er({document:e=Be}={}){if(!e)return _("visible");const t=_(e.visibilityState);return T(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var $e=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,Gt=(e,t)=>{var r={};for(var n in e)Jt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&$e)for(var n of $e(e))t.indexOf(n)<0&&Kt.call(e,n)&&(r[n]=e[n]);return r};function qt(e,t,r={}){const n=r,{window:o=F}=n,a=Gt(n,["window"]);let s;const i=o&&"ResizeObserver"in o,l=()=>{s&&(s.disconnect(),s=void 0)},p=j(()=>C(e),u=>{l(),i&&o&&u&&(s=new ResizeObserver(t),s.observe(u,a))},{immediate:!0,flush:"post"}),d=()=>{l(),p()};return R(d),{isSupported:i,stop:d}}function Tr(e,t={}){const{reset:r=!0,windowResize:n=!0,windowScroll:o=!0,immediate:a=!0}=t,s=_(0),i=_(0),l=_(0),p=_(0),d=_(0),u=_(0),f=_(0),v=_(0);function y(){const m=C(e);if(!m){r&&(s.value=0,i.value=0,l.value=0,p.value=0,d.value=0,u.value=0,f.value=0,v.value=0);return}const c=m.getBoundingClientRect();s.value=c.height,i.value=c.bottom,l.value=c.left,p.value=c.right,d.value=c.top,u.value=c.width,f.value=c.x,v.value=c.y}return qt(e,y),j(()=>C(e),m=>!m&&y()),o&&T("scroll",y,{passive:!0}),n&&T("resize",y,{passive:!0}),le(()=>{a&&y()}),{height:s,bottom:i,left:l,right:p,top:d,width:u,x:f,y:v,update:y}}function Xt(e,t={}){const{immediate:r=!0,window:n=F}=t,o=_(!1);let a=null;function s(){!o.value||!n||(e(),a=n.requestAnimationFrame(s))}function i(){!o.value&&n&&(o.value=!0,s())}function l(){o.value=!1,a!=null&&n&&(n.cancelAnimationFrame(a),a=null)}return r&&i(),R(l),{isActive:o,pause:l,resume:i}}var Yt=Object.defineProperty,Zt=Object.defineProperties,er=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,tr=Object.prototype.hasOwnProperty,rr=Object.prototype.propertyIsEnumerable,Ee=(e,t,r)=>t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,S=(e,t)=>{for(var r in t||(t={}))tr.call(t,r)&&Ee(e,r,t[r]);if(Se)for(var r of Se(t))rr.call(t,r)&&Ee(e,r,t[r]);return e},z=(e,t)=>Zt(e,er(t));const nr={json:"application/json",text:"text/plain",formData:"multipart/form-data"};function ee(e){return lt(e,"immediate","refetch","initialData","timeout","beforeFetch","afterFetch","onFetchError","fetch")}function J(e){return typeof Headers<"u"&&e instanceof Headers?Object.fromEntries([...e.entries()]):e}function jr(e={}){const t=e.options||{},r=e.fetchOptions||{};function n(o,...a){const s=M(()=>e.baseUrl?ar(O(e.baseUrl),O(o)):O(o));let i=t,l=r;return a.length>0&&(ee(a[0])?i=S(S({},i),a[0]):l=z(S(S({},l),a[0]),{headers:S(S({},J(l.headers)||{}),J(a[0].headers)||{})})),a.length>1&&ee(a[1])&&(i=S(S({},i),a[1])),or(s,l,i)}return n}function or(e,...t){var r;const n=typeof AbortController=="function";let o={},a={immediate:!0,refetch:!1,timeout:0};const s={method:"GET",type:"text",payload:void 0};t.length>0&&(ee(t[0])?a=S(S({},a),t[0]):o=t[0]),t.length>1&&ee(t[1])&&(a=S(S({},a),t[1]));const{fetch:i=(r=F)==null?void 0:r.fetch,initialData:l,timeout:p}=a,d=oe(),u=oe(),f=oe(),v=_(!1),y=_(!1),m=_(!1),c=_(null),g=U(null),b=U(null),P=U(l),$=M(()=>n&&y.value);let w,h;const E=()=>{n&&w&&w.abort()},A=I=>{y.value=I,v.value=!I};p&&(h=Me(E,p,{immediate:!1}));const B=async(I=!1)=>{var N;A(!0),b.value=null,c.value=null,m.value=!1,w=void 0,n&&(w=new AbortController,w.signal.onabort=()=>m.value=!0,o=z(S({},o),{signal:w.signal}));const x={method:s.method,headers:{}};if(s.payload){const X=J(x.headers);s.payloadType&&(X["Content-Type"]=(N=nr[s.payloadType])!=null?N:s.payloadType),x.body=s.payloadType==="json"?JSON.stringify(O(s.payload)):O(s.payload)}let q=!1;const V={url:O(e),options:S(S({},x),o),cancel:()=>{q=!0}};if(a.beforeFetch&&Object.assign(V,await a.beforeFetch(V)),q||!i)return A(!1),Promise.resolve(null);let W=null;return h&&h.start(),new Promise((X,We)=>{var ce;i(V.url,z(S(S({},x),V.options),{headers:S(S({},J(x.headers)),J((ce=V.options)==null?void 0:ce.headers))})).then(async D=>{if(g.value=D,c.value=D.status,W=await D[s.type](),a.afterFetch&&c.value>=200&&c.value<300&&({data:W}=await a.afterFetch({data:W,response:D})),P.value=W,!D.ok)throw new Error(D.statusText);return d.trigger(D),X(D)}).catch(async D=>{let fe=D.message||D.name;return a.onFetchError&&({data:W,error:fe}=await a.onFetchError({data:W,error:D,response:g.value})),P.value=W,b.value=fe,u.trigger(D),I?We(D):X(null)}).finally(()=>{A(!1),h&&h.stop(),f.trigger(null)})})};j(()=>[O(e),O(a.refetch)],()=>O(a.refetch)&&B(),{deep:!0});const G={isFinished:v,statusCode:c,response:g,error:b,data:P,isFetching:y,canAbort:$,aborted:m,abort:E,execute:B,onFetchResponse:d.on,onFetchError:u.on,onFetchFinally:f.on,get:L("GET"),put:L("PUT"),post:L("POST"),delete:L("DELETE"),patch:L("PATCH"),head:L("HEAD"),options:L("OPTIONS"),json:k("json"),text:k("text"),blob:k("blob"),arrayBuffer:k("arrayBuffer"),formData:k("formData")};function L(I){return(N,x)=>{if(!y.value)return s.method=I,s.payload=N,s.payloadType=x,H(s.payload)&&j(()=>[O(s.payload),O(a.refetch)],()=>O(a.refetch)&&B(),{deep:!0}),!x&&O(N)&&Object.getPrototypeOf(O(N))===Object.prototype&&(s.payloadType="json"),z(S({},G),{then(q,V){return re().then(q,V)}})}}function re(){return new Promise((I,N)=>{mt(v).toBe(!0).then(()=>I(G)).catch(x=>N(x))})}function k(I){return()=>{if(!y.value)return s.type=I,z(S({},G),{then(N,x){return re().then(N,x)}})}}return a.immediate&&setTimeout(B,0),z(S({},G),{then(I,N){return re().then(I,N)}})}function ar(e,t){return!e.endsWith("/")&&!t.startsWith("/")?`${e}/${t}`:`${e}${t}`}const ir={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Fr(e={}){const{reactive:t=!1,target:r=F,aliasMap:n=ir,passive:o=!0,onEventFired:a=Q}=e,s=K(new Set),i={toJSON(){return{}},current:s},l=t?K(i):i,p=new Set,d=new Set;function u(m,c){m in l&&(t?l[m]=c:l[m].value=c)}function f(){for(const m of d)u(m,!1)}function v(m,c){var g,b;const P=(g=m.key)==null?void 0:g.toLowerCase(),$=(b=m.code)==null?void 0:b.toLowerCase(),w=[$,P].filter(Boolean);$&&(c?s.add(m.code):s.delete(m.code));for(const h of w)d.add(h),u(h,c);P==="meta"&&!c?(p.forEach(h=>{s.delete(h),u(h,!1)}),p.clear()):typeof m.getModifierState=="function"&&m.getModifierState("Meta")&&c&&[...s,...w].forEach(h=>p.add(h))}r&&(T(r,"keydown",m=>(v(m,!0),a(m)),{passive:o}),T(r,"keyup",m=>(v(m,!1),a(m)),{passive:o}),T("blur",f,{passive:!0}),T("focus",f,{passive:!0}));const y=new Proxy(l,{get(m,c,g){if(typeof c!="string")return Reflect.get(m,c,g);if(c=c.toLowerCase(),c in n&&(c=n[c]),!(c in l))if(/[+_-]/.test(c)){const P=c.split(/[+_-]/g).map($=>$.trim());l[c]=M(()=>P.every($=>O(y[$])))}else l[c]=_(!1);const b=Reflect.get(m,c,g);return t?O(b):b}});return y}var Te=Object.getOwnPropertySymbols,sr=Object.prototype.hasOwnProperty,ur=Object.prototype.propertyIsEnumerable,lr=(e,t)=>{var r={};for(var n in e)sr.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Te)for(var n of Te(e))t.indexOf(n)<0&&ur.call(e,n)&&(r[n]=e[n]);return r};function cr(e,t,r={}){const n=r,{window:o=F}=n,a=lr(n,["window"]);let s;const i=o&&"MutationObserver"in o,l=()=>{s&&(s.disconnect(),s=void 0)},p=j(()=>C(e),u=>{l(),i&&o&&u&&(s=new MutationObserver(t),s.observe(u,a))},{immediate:!0}),d=()=>{l(),p()};return R(d),{isSupported:i,stop:d}}var je;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(je||(je={}));function Dr(e=null,t={}){var r,n;const{document:o=Be,observe:a=!1,titleTemplate:s="%s"}=t,i=_((r=e!=null?e:o==null?void 0:o.title)!=null?r:null);return j(i,(l,p)=>{Ie(l)&&l!==p&&o&&(o.title=s.replace("%s",l))},{immediate:!0}),a&&o&&cr((n=o.head)==null?void 0:n.querySelector("title"),()=>{o&&o.title!==i.value&&(i.value=s.replace("%s",o.title))},{childList:!0}),i}const Ir={linear:xe,easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};function fr([e,t,r,n]){const o=(d,u)=>1-3*u+3*d,a=(d,u)=>3*u-6*d,s=d=>3*d,i=(d,u,f)=>((o(u,f)*d+a(u,f))*d+s(u))*d,l=(d,u,f)=>3*o(u,f)*d*d+2*a(u,f)*d+s(u),p=d=>{let u=d;for(let f=0;f<4;++f){const v=l(u,e,r);if(v===0)return u;u-=(i(u,e,r)-d)/v}return u};return d=>e===t&&r===n?d:i(p(d),t,n)}function Nr(e,t={}){const{delay:r=0,disabled:n=!1,duration:o=1e3,onFinished:a=Q,onStarted:s=Q,transition:i=xe}=t,l=M(()=>{const w=O(i);return ot(w)?w:fr(w)}),p=M(()=>{const w=O(e);return ne(w)?w:w.map(O)}),d=M(()=>ne(p.value)?[p.value]:p.value),u=_(d.value.slice(0));let f,v,y,m,c;const{resume:g,pause:b}=Xt(()=>{const w=Date.now(),h=at(1-(y-w)/f,0,1);u.value=c.map((E,A)=>{var B;return E+((B=v[A])!=null?B:0)*l.value(h)}),h>=1&&(b(),a())},{immediate:!1}),P=()=>{b(),f=O(o),v=u.value.map((w,h)=>{var E,A;return((E=d.value[h])!=null?E:0)-((A=u.value[h])!=null?A:0)}),c=u.value.slice(0),m=Date.now(),y=m+f,g(),s()},$=Me(P,r,{immediate:!1});return j(d,()=>{O(n)?u.value=d.value.slice(0):O(r)<=0?P():$.start()},{deep:!0}),M(()=>{const w=O(n)?d:u;return ne(p.value)?w.value[0]:w.value})}function xr(e,t,r,n={}){var o,a,s;const{passive:i=!1,eventName:l,deep:p=!1,defaultValue:d}=n,u=se(),f=r||(u==null?void 0:u.emit)||((o=u==null?void 0:u.$emit)==null?void 0:o.bind(u))||((s=(a=u==null?void 0:u.proxy)==null?void 0:a.$emit)==null?void 0:s.bind(u==null?void 0:u.proxy));let v=l;t||(t="modelValue"),v=l||v||`update:${t.toString()}`;const y=()=>rt(e[t])?e[t]:d;if(i){const m=_(y());return j(()=>e[t],c=>m.value=c),j(m,c=>{(c!==e[t]||p)&&f(v,c)},{deep:p}),m}else return M({get(){return y()},set(m){f(v,m)}})}function Mr({window:e=F}={}){if(!e)return _(!1);const t=_(e.document.hasFocus());return T(e,"blur",()=>{t.value=!1}),T(e,"focus",()=>{t.value=!0}),t}function Cr(e={}){const{window:t=F,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:o=!0}=e,a=_(r),s=_(n),i=()=>{t&&(a.value=t.innerWidth,s.value=t.innerHeight)};return i(),le(i),T("resize",i,{passive:!0}),o&&T("orientationchange",i,{passive:!0}),{width:a,height:s}}export{Mt as A,Fr as B,Sr as C,Dr as D,br as E,Nr as F,Ir as T,ne as a,vr as b,Cr as c,Tr as d,T as e,qt as f,gr as g,Me as h,te as i,Er as j,Mr as k,pr as l,xr as m,Or as n,Pr as o,wr as p,Ie as q,_r as r,mr as s,R as t,C as u,ot as v,yr as w,$r as x,jr as y,hr as z};