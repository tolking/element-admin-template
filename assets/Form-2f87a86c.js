import{z as n,q as o,U as c,C as d,r as _}from"./modules-element-pro-b81ea309.js";/* empty css             *//* empty css               *//* empty css             *//* empty css                  *//* empty css                    *//* empty css             */import{u as b,A as g}from"./api-3f191218.js";/* empty css                                                                      */import{_ as f}from"./RichEditor.vue_vue_type_style_index_0_lang-b2a85ef0.js";/* empty css               *//* empty css                  */import{M as p}from"./modules-element-plus-92389d6d.js";import{G as h,aj as r,H as q,U as V,V as w,X as x,u as t,i as C}from"./modules-vue-596fe172.js";import"./modules-vueuse-9b2c2f8a.js";import"./modules-element-icon-c5b6ad9f.js";import"./store-094d7e77.js";import"./index-b2df5dea.js";import"./modules-quill-94ea01f0.js";const K=h({__name:"Form",setup(U){const{form:e,submit:l}=b({url:g.article}),m=n([{label:"标题",prop:"title",component:r(p),rules:{required:!0,message:"请输入标题",trigger:"blur"},props:o({clearable:!0,placeholder:"请输入标题"})},{label:"作者",prop:"author",component:r(p),rules:{required:!0,message:"请输入作者",trigger:"blur"},props:o({clearable:!0,placeholder:"请输入作者"})},{label:"标签",prop:"tag",component:r(c),rules:{required:!0,message:"请输入标签",trigger:"blur"},props:o({clearable:!0,trigger:"enter",placeholder:"通过 Enter 键触发输入"})},{label:"内容",prop:"content",component:r(f),rules:{required:!0,message:"请输入内容",trigger:"blur"}}]);return(k,a)=>{const s=d,u=_;return q(),V(u,{shadow:"never"},{default:w(()=>[x(s,{modelValue:t(e),"onUpdate:modelValue":a[0]||(a[0]=i=>C(e)?e.value=i:null),columns:t(m),"label-width":"100px",onSubmit:t(l)},null,8,["modelValue","columns","onSubmit"])]),_:1})}}});export{K as default};