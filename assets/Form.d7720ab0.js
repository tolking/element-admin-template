import{d as s,g as n,P as i}from"./modules-element-pro.bae82071.js";import"./index.a59d0955.js";/* empty css             *//* empty css             *//* empty css               */import{_ as c}from"./RichEditor.878878b0.js";import{u as F,A as g}from"./crud.102c2e5d.js";import{D as t}from"./modules-element-plus.e6f21360.js";import{z as d,ae as u,A as B,Q as b,u as e,i as f}from"./modules-vue.3bc0effc.js";import"./modules-quill.209abeee.js";import"./modules-element-icon.beeb2b9d.js";import"./modules-vueuse.2a165f14.js";const v=d({setup(_){const{form:r,submit:l}=F({url:g.article}),a=s([{label:"\u6807\u9898",prop:"title",component:u(t),rules:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"},props:{clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"}},{label:"\u4F5C\u8005",prop:"author",component:u(t),rules:{required:!0,message:"\u8BF7\u8F93\u5165\u4F5C\u8005",trigger:"blur"},props:{clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u4F5C\u8005"}},{label:"\u6807\u7B7E",prop:"tag",component:u(n),rules:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u7B7E",trigger:"blur"},props:{clearable:!0,trigger:"enter",placeholder:"\u8BF7\u8F93\u5165\u6807\u7B7E"}},{label:"\u5185\u5BB9",prop:"content",component:u(c),rules:{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9",trigger:"blur"}}]);return(C,o)=>{const p=i;return B(),b(p,{modelValue:e(r),"onUpdate:modelValue":o[0]||(o[0]=m=>f(r)?r.value=m:null),columns:e(a),"label-width":"100px",onSubmit:e(l)},null,8,["modelValue","columns","onSubmit"])}}});export{v as default};
