import"./modules-element-pro-71a81d3a.js";import{e as g,f as _,r as b,a as v}from"./api-57caebfc.js";import{r as c,u as t,c as I}from"./modules-vue-1e7a0b2d.js";import{m as d}from"./modules-vueuse-b11b28df.js";function A({url:i,transform:l,showTip:m=!0,type:F="post",afterSubmit:p}){const s=c(t(F)),u=c({}),a=c({}),y=I(()=>b(t(i),a.value.id)),o=g(i,a),n=_(y,a),w=async(e,P)=>{if(P){const r=await f();r.value?t(m)&&v("success","提交成功！"):r.value!==null&&t(m)&&v("warning","提交失败！"),d(p)&&p(r.value)}e()};async function f(e){return e&&(s.value=e),x(),s.value==="post"?(await o.execute(),o.data):(await n.execute(),n.data)}function x(){a.value=d(l)?l(t(u)):u.value}return{...s.value==="put"?n:o,form:u,submit:w,submitForm:f}}export{A as u};
