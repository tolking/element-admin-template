import{G as C,at as h,r as _,w as E,a3 as a,ai as v,S as D,u as o,H as x,Q as y,R as w,Y as k,i as q}from"./modules-vue.91ae1080.js";import{d as A}from"./modules-element-pro.7efdd1e2.js";import{u as Y}from"./cates.dcd75334.js";import{u as M,b as S,A as p}from"./crud.69c953a0.js";import"./index.fce4592a.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";import"./modules-quill.209abeee.js";import"./modules-vueuse.23b0a0ee.js";import"./modules-element-icon.aca8e069.js";import"./modules-element-plus.036ae772.js";const L=C({__name:"ComplexForm",setup(P){const s=h(),{form:t,submit:i}=M({url:p.goods,transform:b}),{isFetching:n,detailId:m,detail:r,loadDetail:c}=S({url:p.goods,immediate:!1}),d=Y(),F=_(A([{label:"\u57FA\u7840\u4FE1\u606F",prop:"id",class:"form-title"},{label:"\u5546\u54C1\u540D\u79F0",prop:"title",component:"el-input",rules:{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",trigger:"blur"},props:{clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"}},{label:"\u4EF7\u683C",prop:"price",component:"el-input",md:12,rules:{required:!0,message:"\u8BF7\u8F93\u5165\u4EF7\u683C",trigger:"blur"},props:{type:"number",clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u4EF7\u683C",slots:{suffix:()=>"\u5143"}}},{label:"\u6210\u672C",prop:"cost",component:"el-input",md:12,props:{type:"number",clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u6210\u672C",slots:{suffix:()=>"\u5143"}}},{label:"\u5E93\u5B58",prop:"stock",component:"el-input",md:12,rules:{required:!0,message:"\u8BF7\u8F93\u5165\u5E93\u5B58",trigger:"blur"},props:{type:"number",clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u5E93\u5B58",slots:{suffix:()=>"\u4EF6"}}},{label:"\u5206\u7C7B",prop:"cates",component:"pro-select",md:12,rules:{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u7C7B",trigger:"blur"},props:{data:d,clearable:!0,placeholder:"\u8BF7\u9009\u62E9\u5206\u7C7B",style:"width:100%"}},{label:"\u6807\u7B7E",prop:"tags",component:"pro-input-tag",md:12,rules:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u7B7E",trigger:"blur"},props:{clearable:!0,max:10,placeholder:"\u901A\u8FC7 Enter \u952E\u89E6\u53D1\u8F93\u5165"}},{label:"\u4E0A\u67B6\u65F6\u95F4",prop:"time",component:"el-date-picker",md:12,rules:{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u67B6\u65F6\u95F4\u6BB5",trigger:"blur"},props:{clearable:!0,unlinkPanels:!0,type:"daterange",format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",rangeSeparator:"\u81F3",startPlaceholder:"\u5F00\u59CB\u65E5\u671F",endPlaceholder:"\u7ED3\u675F\u65E5\u671F",style:"width:100%"}},{label:"\u63CF\u8FF0",prop:"desc",component:"el-input",rules:{required:!0,message:"\u8BF7\u8F93\u5165\u63CF\u8FF0",trigger:"blur"},props:{type:"textarea",clearable:!0,autosize:!0,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0"}},{label:"\u89C4\u683C\u4FE1\u606F",prop:"id",class:"form-title"},{label:"\u957F",prop:"length",component:"el-input",md:12,props:{type:"number",clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u957F",slots:{suffix:()=>"cm"}}},{label:"\u5BBD",prop:"width",component:"el-input",md:12,props:{type:"number",clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u5BBD",slots:{suffix:()=>"cm"}}},{label:"\u9AD8",prop:"height",component:"el-input",md:12,props:{type:"number",clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u9AD8",slots:{suffix:()=>"cm"}}},{label:"\u91CD\u91CF",prop:"weight",component:"el-input",md:12,props:{type:"number",clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u91CD\u91CF",slots:{suffix:()=>"kg"}}},{label:"\u914D\u7F6E\u4FE1\u606F",prop:"sku",class:"form-title",children:[{label:"\u5C5E\u6027",prop:"key",component:"el-input",md:8,rules:{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",trigger:"blur"},props:{clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"}},{label:"\u53EF\u9009\u503C",prop:"value",component:"pro-input-tag",md:16,rules:{required:!0,message:"\u8BF7\u8F93\u5165\u53EF\u9009\u503C",trigger:"blur"},props:{clearable:!0,placeholder:"\u901A\u8FC7 Enter \u952E\u89E6\u53D1\u8F93\u5165"}}]}]));E(()=>s.query.id,async e=>{var u,l;e!==void 0&&(m.value=e,await c(),((u=r.value)==null?void 0:u.start)&&((l=r.value)==null?void 0:l.end)&&(r.value.time=[r.value.start,r.value.end]),t.value=r.value||{})},{immediate:!0});function b(e){var u;return(u=e.time)!=null&&u.length&&(e.start=e.time[0],e.end=e.time[1]),e}return(e,u)=>{const l=a("pro-form"),g=a("pro-card"),f=v("loading");return D((x(),y(g,{shadow:"never"},{default:w(()=>[k(l,{modelValue:o(t),"onUpdate:modelValue":u[0]||(u[0]=B=>q(t)?t.value=B:null),columns:F.value,gutter:40,"label-width":"100px",onSubmit:o(i)},null,8,["modelValue","columns","onSubmit"])]),_:1})),[[f,o(n)]])}}});var J=V(L,[["__scopeId","data-v-fb339ea8"]]);export{J as default};
