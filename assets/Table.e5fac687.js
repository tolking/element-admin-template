import{c as p}from"./index.72e3b932.js";/* empty css                   */import{i as S,g as A,j as V,k as j}from"./modules-element-pro.6d945eed.js";/* empty css               *//* empty css             *//* empty css              *//* empty css               */import"./el-tooltip.586473e3.js";/* empty css                  *//* empty css                  *//* empty css                        */import{a as I,u as M,A as m}from"./crud.b3d7892c.js";import{$ as N,H as P,K as U,a3 as $}from"./modules-element-plus.9e23f4e5.js";import{D as H,E as c,S as d,T as e,L as K,u as a,i as g,V as i,a2 as _,X as f}from"./modules-vue.ccde96de.js";import"./modules-quill.209abeee.js";import"./modules-vueuse.fdeee5e2.js";import"./modules-element-icon.e3a14ee7.js";const lt=H({setup(R){const{isFetching:F,page:u,limit:n,total:b,list:v,loadList:C}=I({url:m.user}),{isFetching:E,form:l,submitForm:x}=M({url:m.userStatus,type:"put"}),y=V({label:"\u64CD\u4F5C"}),D=j([{label:"ID",prop:"id"},{label:"\u7528\u6237\u540D",prop:"name"},{label:"\u5934\u50CF",prop:"avatar"},{label:"\u6743\u9650",prop:"role"},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{label:"\u662F\u5426\u542F\u7528",prop:"status"}]);async function L(s){l.value={id:s.id,status:!s.status},(await x()).value?(p("success","\u4FEE\u6539\u6210\u529F!"),s.status=!s.status):p("warning","\u4FEE\u6539\u5931\u8D25!"),l.value={}}return(s,o)=>{const T=N,h=P,z=U,k=S,w=A,B=$;return c(),d(w,{shadow:"never"},{default:e(()=>[K((c(),d(k,{"current-page":a(u),"onUpdate:current-page":o[0]||(o[0]=t=>g(u)?u.value=t:null),"page-size":a(n),"onUpdate:page-size":o[1]||(o[1]=t=>g(n)?n.value=t:null),columns:a(D),data:a(v),total:a(b),menu:a(y),border:"",stripe:"",layout:"total, ->, jumper, prev, pager, next, sizes",onLoad:a(C)},{avatar:e(({row:t})=>[i(T,{style:{width:"60px",height:"60px"},src:t.avatar,fit:"scale-down"},null,8,["src"])]),status:e(({row:t,size:r})=>[i(h,{type:t.status?"success":"danger",size:r},{default:e(()=>[_(f(t.status?"\u542F\u7528":"\u7981\u7528"),1)]),_:2},1032,["type","size"])]),menu:e(({row:t,size:r})=>[i(z,{loading:a(E),size:r,type:"text",onClick:X=>L(t)},{default:e(()=>[_(f(t.status?"\u7981\u7528":"\u542F\u7528"),1)]),_:2},1032,["loading","size","onClick"])]),_:1},8,["current-page","page-size","columns","data","total","menu","onLoad"])),[[B,a(F)]])]),_:1})}}});export{lt as default};
