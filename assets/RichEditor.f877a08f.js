import{Q as d}from"./modules-quill.209abeee.js";import{E as p,b as v,r as t,w as _,h as f,D as m,F as h,G as b}from"./modules-vue.2559fb4f.js";const y=p({name:"RichEditor",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"\u8BF7\u8F93\u5165\u6587\u672C"}},emits:["update:modelValue"],setup(n,{emit:i}){const a=n,{modelValue:l,placeholder:s}=v(a),r=t({}),e=t({}),u=t(!1);_(l,o=>{o!==e.value.root.innerHTML&&!e.value.hasFocus()&&(e.value.root.innerHTML=o)}),f(()=>{c()}),m(()=>{e.value=null});function c(){e.value=new d(r.value,{theme:"snow",placeholder:s.value,modules:{toolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],["clean"]]}}),!u.value&&(l==null?void 0:l.value)&&(e.value.root.innerHTML=a.modelValue||""),e.value.on("text-change",()=>{u.value=!0,i("update:modelValue",e.value.root.innerHTML)})}return(o,g)=>(h(),b("div",{ref_key:"editor",ref:r},null,512))}});export{y as _};
