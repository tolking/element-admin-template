var k=Object.defineProperty,G=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var R=(u,t,e)=>t in u?k(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,x=(u,t)=>{for(var e in t||(t={}))M.call(t,e)&&R(u,e,t[e]);if(C)for(var e of C(t))O.call(t,e)&&R(u,e,t[e]);return u},I=(u,t)=>G(u,K(t));import{a as S,b as j,c as p,d as _,r as L,e as z,f as H,R as J,g as N,h as Q}from"./index.8ae3cbac.js";import{r as f,c as A,u as i,w as h}from"./modules-vue.2559fb4f.js";const T={login:"/admin/login",user:"/admin/user",userStatus:"/admin/user/{id}/status",article:"/admin/article",goods:"/admin/goods",cates:"/admin/goods/cates",form:"/admin/form"};function U({url:u,transform:t,showTip:e=!0,type:a="post"}){const n=f(!1),c=f({}),s=A(()=>t?t(i(c)):c.value),l=A(()=>L(i(u),s.value.id)),o=S(u,s),r=j(l,s),w=async(g,v)=>{if(v){const m=await F();m.value?i(e)&&p("success","\u63D0\u4EA4\u6210\u529F\uFF01"):m.value!==null&&i(e)&&p("warning","\u63D0\u4EA4\u5931\u8D25\uFF01")}g()};async function F(g=a){return n.value=!0,i(g)==="post"?(await o.execute(),n.value=!1,o.data):(await r.execute(),n.value=!1,r.data)}return{isFetching:n,form:c,submit:w,submitForm:F}}function V({url:u,immediate:t=!0}){const e=f(void 0),a=A(()=>L(i(u),e.value)),{isFetching:n,data:c,execute:s}=_(a);i(t)&&h(e,o=>{o!==void 0&&l()});async function l(){n.value||await s()}return{isFetching:n,detailId:e,detail:c,loadDetail:l}}function W({url:u,immediate:t=!1,showTip:e=!0}){const a=f(void 0),n=A(()=>L(i(u),a.value)),{isFetching:c,data:s,execute:l}=z(n);i(t)&&h(a,r=>{r!==void 0&&o()});function o(){return H("\u8B66\u544A","\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?",{type:"warning"}).then(async()=>(await l(),s.value?(a.value=void 0,i(e)&&p("success","\u5220\u9664\u6210\u529F!")):i(e)&&p("warning","\u5220\u9664\u5931\u8D25!"),s)).catch(()=>{a.value=void 0,p("info","\u5DF2\u53D6\u6D88\u64CD\u4F5C")})}return{isFetching:c,deleteId:a,submitDelete:o}}function X({url:u,transform:t,immediate:e=!0}){const a=f(1),n=f(J),c=f(0),s=f({}),l=A(()=>{const m=t?t(i(s)):s.value;return I(x({},m),{[N]:a.value,[Q]:n.value})}),{isFetching:o,data:r,execute:w}=_(u,l),F=f([]),g=async(m,E)=>{E&&(a.value=1,await v()),m()};i(e)&&v();async function v(){o.value||(await w(),r.value&&(F.value=r.value.list,c.value=r.value.total))}return{query:s,isFetching:o,page:a,limit:n,total:c,list:F,search:g,loadList:v}}function ee({url:u,immediate:t=!0,showTip:e=!0,syncDetail:a=!1,transform:n,transformQuery:c,transformDetail:s}){const l=X({url:u,immediate:t,transform:c}),{form:o,submitForm:r}=U({url:u,showTip:e,transform:n}),{deleteId:w,submitDelete:F}=W({url:u,showTip:e}),{detailId:g,detail:v,loadDetail:m}=V({url:u,immediate:!1}),E=async(b,y,D)=>{if(y==="edit"||y==="detail"){let d=x({},D);i(a)&&(d==null?void 0:d.id)&&(g.value=d.id,await m(),v.value&&(d=v.value)),o.value=s?s(d):d}b()},B=async(b,y,D,d)=>{if(d){const q=await r(D==="add"?"post":"put");q.value?(e&&p("success","\u63D0\u4EA4\u6210\u529F\uFF01"),l.loadList(),b()):q.value!==null&&e&&p("warning","\u63D0\u4EA4\u5931\u8D25\uFF01")}y()};async function P(b){const y=b;w.value=y.id;const D=await F();D!=null&&D.value&&l.loadList()}return I(x({},l),{form:o,beforeOpen:E,submit:B,submitForm:r,deleteRow:P})}export{T as A,X as a,V as b,ee as c,U as u};
