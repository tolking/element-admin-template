import{u as B}from"./index.8ae3cbac.js";import{d as w,a as v,b as h,P as x}from"./modules-element-pro.93e4a1ff.js";/* empty css               *//* empty css             */import{E as C,aq as y,r as E,ag as o,w as S,F as V,G as k,W as n,U as A,u as s,i as I,S as q}from"./modules-vue.2559fb4f.js";import{w as G,x as P}from"./modules-vueuse.98f91a9c.js";import{u as R,A as D}from"./crud.b82008f5.js";import{I as l,_ as L}from"./modules-element-plus.41ec575c.js";import{G as M,H as N}from"./modules-element-icon.ce895049.js";import"./modules-quill.209abeee.js";const T={class:"login"},U=q("h1",{class:"title"}," \u7BA1\u7406\u540E\u53F0 ",-1),$=C({name:"Login",setup(H){const i=y(),m=B(),{enter:c}=G(),{form:a,submitForm:p}=R({url:D.login}),r=E({}),d=w([{label:"\u7528\u6237",prop:"name",component:o(l),rules:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"},props:{clearable:!0,prefixIcon:o(M),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}},{label:"\u5BC6\u7801",prop:"password",component:o(l),rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"},{min:5,max:16,message:"\u957F\u5EA6 5 \u5230 16 \u4E2A\u5B57\u7B26",trigger:"blur"}],props:{type:"password",clearable:!0,showPassword:!0,prefixIcon:o(N),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}}]),f=v({submitText:"\u767B\u5F55",reset:!1}),_=h(async(u,e)=>{await t(e),u()});P("\u767B\u9646\u540E\u53F0"),S(c,async u=>{if(u){const e=await r.value.validate();await t(e)}});async function t(u){if(u){const e=await p();e.value&&(m.value=e.value,i.push("/"))}}return(u,e)=>{const g=x,F=L;return V(),k("div",T,[n(F,{class:"login-content"},{default:A(()=>[U,n(g,{ref_key:"login",ref:r,modelValue:s(a),"onUpdate:modelValue":e[0]||(e[0]=b=>I(a)?a.value=b:null),columns:s(d),menu:s(f),"label-position":"top",onSubmit:s(_)},null,8,["modelValue","columns","menu","onSubmit"])]),_:1})])}}});export{$ as default};
