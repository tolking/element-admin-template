import"./index-b885c862.js";/* empty css                  *//* empty css                        */import{a as k}from"./modules-element-pro-1e9157de.js";/* empty css               *//* empty css             */import{C,T as D}from"./modules-vueuse-38da200c.js";import{F as f,r as h,f as V,H as p,I as g,Y as c,W as m,u as d,P as y,c as B,S as I,R as o,O as e,a8 as P,i as E}from"./modules-vue-39e66fd2.js";/* empty css                                                                      */import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{ab as F,ac as S}from"./modules-element-plus-e2fc2490.js";import"./modules-element-icon-c82074b4.js";import"./modules-quill-ecfe6c98.js";const T={class:"title"},$={class:"info"},L=f({__name:"DashboardCard",props:{title:{},info:{}},setup(_){const s=_,n=h(0),i=C(n,{duration:800,transition:D.easeInOutCubic});return V(()=>{n.value=s.info}),(u,l)=>(p(),g(y,null,[c("p",T,m(u.title),1),c("p",$,m(d(i).toFixed()),1)],64))}}),N=v(L,[["__scopeId","data-v-68d7d29a"]]),O={class:"circle-list"},R=f({__name:"Dashboard",setup(_){const s=h(new Date),n=B(()=>`${s.value.toLocaleDateString()} 数据`),i=[{title:"项目1",info:14758},{title:"项目2",info:4387},{title:"项目3",info:4390},{title:"项目4",info:569}];return(u,l)=>{const x=N,a=k,w=F,t=S;return p(),I(a,{ghost:"",direction:"column"},{default:o(()=>[e(a,{gutter:20,ghost:""},{default:o(()=>[(p(),g(y,null,P(i,(r,b)=>e(a,{key:b,xs:12,sm:12,md:6,shadow:"never",class:"space-y"},{default:o(()=>[e(x,{title:r.title,info:r.info},null,8,["title","info"])]),_:2},1024)),64))]),_:1}),e(a,{split:"",shadow:"never",class:"space-y"},{default:o(()=>[e(a,{xs:24,sm:12,md:10,shadow:"never"},{default:o(()=>[e(w,{modelValue:d(s),"onUpdate:modelValue":l[0]||(l[0]=r=>E(s)?s.value=r:null)},null,8,["modelValue"])]),_:1}),e(a,{header:d(n),shadow:"never"},{default:o(()=>[c("div",O,[e(t,{percentage:25,type:"circle",class:"space-y"}),e(t,{percentage:50,type:"circle",class:"space-y"}),e(t,{percentage:60,type:"circle",class:"space-y"}),e(t,{percentage:14,type:"circle",class:"space-y"})]),c("div",null,[e(t,{"text-inside":!0,"stroke-width":26,percentage:70,class:"space-y"}),e(t,{"text-inside":!0,"stroke-width":26,percentage:100,status:"success",class:"space-y"}),e(t,{"text-inside":!0,"stroke-width":26,percentage:80,status:"warning",class:"space-y"}),e(t,{"text-inside":!0,"stroke-width":26,percentage:50,status:"exception",class:"space-y"})])]),_:1},8,["header"])]),_:1})]),_:1})}}});const X=v(R,[["__scopeId","data-v-7e21bd53"]]);export{X as default};
