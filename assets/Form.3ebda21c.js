import{d as n,g as i,P as c,h as d}from"./modules-element-pro.434df7b4.js";import"./index.14a47e21.js";import{u as F,A as g}from"./el-row.8e96346e.js";/* empty css             *//* empty css             *//* empty css               *//* empty css                  */import{_ as b}from"./RichEditor.816deb94.js";import{G as t}from"./modules-element-plus.d4af415e.js";import{A as f,ag as r,B,R as _,S as C,U as h,u,i as E}from"./modules-vue.11e6e301.js";import"./modules-quill.209abeee.js";import"./modules-element-icon.51e30304.js";import"./modules-vueuse.04c4aac1.js";const T=f({setup(q){const{form:e,submit:a}=F({url:g.article}),l=n([{label:"\u6807\u9898",prop:"title",component:r(t),rules:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"},props:{clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"}},{label:"\u4F5C\u8005",prop:"author",component:r(t),rules:{required:!0,message:"\u8BF7\u8F93\u5165\u4F5C\u8005",trigger:"blur"},props:{clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u4F5C\u8005"}},{label:"\u6807\u7B7E",prop:"tag",component:r(i),rules:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u7B7E",trigger:"blur"},props:{clearable:!0,trigger:"enter",placeholder:"\u901A\u8FC7 Enter \u952E\u89E6\u53D1\u8F93\u5165"}},{label:"\u5185\u5BB9",prop:"content",component:r(b),rules:{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9",trigger:"blur"}}]);return(w,o)=>{const p=c,s=d;return B(),_(s,{shadow:"never"},{default:C(()=>[h(p,{modelValue:u(e),"onUpdate:modelValue":o[0]||(o[0]=m=>E(e)?e.value=m:null),columns:u(l),"label-width":"100px",onSubmit:u(a)},null,8,["modelValue","columns","onSubmit"])]),_:1})}}});export{T as default};
