import{F as E,T as D}from"./modules-vueuse.24e291c9.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{G as y,b as k,r as g,h as C,H as u,I as x,J as c,X as v,u as _,F as w,c as V,a3 as p,Q as B,R as s,Y as e,a5 as F}from"./modules-vue.91ae1080.js";const I={class:"title"},T={class:"info"},$=y({__name:"DashboardCard",props:{title:null,info:null},setup(f){const o=f,{title:l,info:i}=k(o),d=g(0),r=E(d,{duration:800,transition:D.easeInOutCubic});return C(()=>{d.value=i.value}),(a,m)=>(u(),x(w,null,[c("p",I,v(_(l)),1),c("p",T,v(_(r).toFixed()),1)],64))}});var z=h($,[["__scopeId","data-v-62072fa2"]]);const L={class:"circle-list"},N=y({__name:"Dashboard",setup(f){const o=g(new Date),l=V(()=>`${o.value.toLocaleDateString()} \u6570\u636E`),i=[{title:"\u9879\u76EE1",info:14758},{title:"\u9879\u76EE2",info:4387},{title:"\u9879\u76EE3",info:4390},{title:"\u9879\u76EE4",info:569}];return(d,r)=>{const a=p("pro-card"),m=p("el-calendar"),t=p("el-progress");return u(),B(a,{ghost:"",direction:"column"},{default:s(()=>[e(a,{gutter:20,ghost:""},{default:s(()=>[(u(),x(w,null,F(i,(n,b)=>e(a,{key:b,xs:12,sm:12,md:6,shadow:"never",class:"space-y"},{default:s(()=>[e(z,{title:n.title,info:n.info},null,8,["title","info"])]),_:2},1024)),64))]),_:1}),e(a,{split:"",shadow:"never",class:"space-y"},{default:s(()=>[e(a,{xs:24,sm:12,md:10,shadow:"never"},{default:s(()=>[e(m,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=n=>o.value=n)},null,8,["modelValue"])]),_:1}),e(a,{header:_(l),shadow:"never"},{default:s(()=>[c("div",L,[e(t,{percentage:25,type:"circle",class:"space-y"}),e(t,{percentage:50,type:"circle",class:"space-y"}),e(t,{percentage:60,type:"circle",class:"space-y"}),e(t,{percentage:14,type:"circle",class:"space-y"})]),c("div",null,[e(t,{"text-inside":!0,"stroke-width":26,percentage:70,class:"space-y"}),e(t,{"text-inside":!0,"stroke-width":26,percentage:100,status:"success",class:"space-y"}),e(t,{"text-inside":!0,"stroke-width":26,percentage:80,status:"warning",class:"space-y"}),e(t,{"text-inside":!0,"stroke-width":26,percentage:50,status:"exception",class:"space-y"})])]),_:1},8,["header"])]),_:1})]),_:1})}}});var G=h(N,[["__scopeId","data-v-5b852c2a"]]);export{G as default};
