import{F as b,T as D}from"./modules-vueuse.3cc95a08.js";import{G as y,b as k,a as g,f as C,H as p,I as v,J as r,X as h,u as _,F as x,c as V,a3 as u,Q as B,R as a,Y as e,a6 as F}from"./modules-vue.f2588fa8.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";const I={class:"title"},T={class:"info"},$=y({__name:"DashboardCard",props:{title:null,info:null},setup(f){const n=f,{title:l,info:i}=k(n),d=g(0),o=b(d,{duration:800,transition:D.easeInOutCubic});return C(()=>{d.value=i.value}),(s,m)=>(p(),v(x,null,[r("p",I,h(_(l)),1),r("p",T,h(_(o).toFixed()),1)],64))}});const L=w($,[["__scopeId","data-v-27192741"]]),N={class:"circle-list"},R=y({__name:"Dashboard",setup(f){const n=g(new Date),l=V(()=>`${n.value.toLocaleDateString()} \u6570\u636E`),i=[{title:"\u9879\u76EE1",info:14758},{title:"\u9879\u76EE2",info:4387},{title:"\u9879\u76EE3",info:4390},{title:"\u9879\u76EE4",info:569}];return(d,o)=>{const s=u("pro-card"),m=u("el-calendar"),t=u("el-progress");return p(),B(s,{ghost:"",direction:"column"},{default:a(()=>[e(s,{gutter:20,ghost:""},{default:a(()=>[(p(),v(x,null,F(i,(c,E)=>e(s,{key:E,xs:12,sm:12,md:6,shadow:"never",class:"space-y"},{default:a(()=>[e(L,{title:c.title,info:c.info},null,8,["title","info"])]),_:2},1024)),64))]),_:1}),e(s,{split:"",shadow:"never",class:"space-y"},{default:a(()=>[e(s,{xs:24,sm:12,md:10,shadow:"never"},{default:a(()=>[e(m,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=c=>n.value=c)},null,8,["modelValue"])]),_:1}),e(s,{header:_(l),shadow:"never"},{default:a(()=>[r("div",N,[e(t,{percentage:25,type:"circle",class:"space-y"}),e(t,{percentage:50,type:"circle",class:"space-y"}),e(t,{percentage:60,type:"circle",class:"space-y"}),e(t,{percentage:14,type:"circle",class:"space-y"})]),r("div",null,[e(t,{"text-inside":!0,"stroke-width":26,percentage:70,class:"space-y"}),e(t,{"text-inside":!0,"stroke-width":26,percentage:100,status:"success",class:"space-y"}),e(t,{"text-inside":!0,"stroke-width":26,percentage:80,status:"warning",class:"space-y"}),e(t,{"text-inside":!0,"stroke-width":26,percentage:50,status:"exception",class:"space-y"})])]),_:1},8,["header"])]),_:1})]),_:1})}}});const J=w(R,[["__scopeId","data-v-675f7d24"]]);export{J as default};