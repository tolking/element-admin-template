import"./index-Crc8LH7_.js";/* empty css                   */import{w as y,I as r,e as k,_ as m,C as q,l as D}from"./modules-element-pro-FTTMLDtU.js";/* empty css               *//* empty css             *//* empty css                  *//* empty css                    *//* empty css             */import{D as Y,r as C,ak as e,w as F,a0 as I,u,F as E,S as L,R as M,O as P,i as R,at as S}from"./modules-vue-By89M0U-.js";import{u as V}from"./form-CzUEu54E.js";import{A as i}from"./api-P98th4it.js";import{u as A}from"./detail-Bffu2ejE.js";import{u as B}from"./select-CLjF2eSr.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                  */import{H as l,aj as j,ai as z}from"./modules-element-plus-DH2R2jN-.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./modules-vueuse-Btdjl5qo.js";import"./modules-element-icon-BNWqDq4y.js";import"./modules-quill-Ccay-MFU.js";const N=Y({__name:"ComplexForm",setup(O){const n=S(),{form:s,submit:c}=V({url:i.goods,transform:_}),{isFetching:d,detailId:b,detail:a,loadDetail:g}=A({url:i.goods,immediate:!1}),f=B(),h=C(y([{label:"基础信息",prop:"id",class:"form-title"},{label:"商品名称",prop:"title",component:e(l),rules:{required:!0,message:"请输入商品名称",trigger:"blur"},props:r({clearable:!0,placeholder:"请输入商品名称"})},{label:"价格",prop:"price",component:e(l),md:12,rules:{required:!0,message:"请输入价格",trigger:"blur"},props:r({type:"number",clearable:!0,placeholder:"请输入价格",slots:{suffix:()=>"元"}})},{label:"成本",prop:"cost",component:e(l),md:12,props:r({type:"number",clearable:!0,placeholder:"请输入成本",slots:{suffix:()=>"元"}})},{label:"库存",prop:"stock",component:e(l),md:12,rules:{required:!0,message:"请输入库存",trigger:"blur"},props:r({type:"number",clearable:!0,placeholder:"请输入库存",slots:{suffix:()=>"件"}})},{label:"分类",prop:"cates",component:e(k),md:12,rules:{required:!0,message:"请选择分类",trigger:"blur"},props:{data:f,clearable:!0,placeholder:"请选择分类",style:"width:100%"}},{label:"标签",prop:"tags",component:e(m),md:12,rules:{required:!0,message:"请输入标签",trigger:"blur"},props:r({clearable:!0,max:10,placeholder:"通过 Enter 键触发输入"})},{label:"上架时间",prop:"time",component:e(j),md:12,rules:{required:!0,message:"请选择上架时间段",trigger:"blur"},props:r({clearable:!0,unlinkPanels:!0,type:"daterange",format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",rangeSeparator:"至",startPlaceholder:"开始日期",endPlaceholder:"结束日期",style:"width:100%"})},{label:"描述",prop:"desc",component:e(l),rules:{required:!0,message:"请输入描述",trigger:"blur"},props:r({type:"textarea",clearable:!0,autosize:!0,showWordLimit:!0,placeholder:"请输入描述"})},{label:"规格信息",prop:"id",class:"form-title"},{label:"长",prop:"length",component:e(l),md:12,props:r({type:"number",clearable:!0,placeholder:"请输入长",slots:{suffix:()=>"cm"}})},{label:"宽",prop:"width",component:e(l),md:12,props:r({type:"number",clearable:!0,placeholder:"请输入宽",slots:{suffix:()=>"cm"}})},{label:"高",prop:"height",component:e(l),md:12,props:r({type:"number",clearable:!0,placeholder:"请输入高",slots:{suffix:()=>"cm"}})},{label:"重量",prop:"weight",component:e(l),md:12,props:r({type:"number",clearable:!0,placeholder:"请输入重量",slots:{suffix:()=>"kg"}})},{label:"配置信息",prop:"sku",class:"form-title",children:[{label:"属性",prop:"key",component:e(l),md:8,rules:{required:!0,message:"请输入商品名称",trigger:"blur"},props:r({clearable:!0,placeholder:"请输入商品名称"})},{label:"可选值",prop:"value",component:e(m),md:16,rules:{required:!0,message:"请输入可选值",trigger:"blur"},props:r({clearable:!0,placeholder:"通过 Enter 键触发输入"})}]}]));F(()=>n.query.id,async t=>{var o,p;t!==void 0&&(b.value=t,await g(),(o=a.value)!=null&&o.start&&((p=a.value)!=null&&p.end)&&(a.value.time=[a.value.start,a.value.end]),s.value=a.value||{})},{immediate:!0});function _(t){var o;return(o=t.time)!=null&&o.length&&(t.start=t.time[0],t.end=t.time[1]),t}return(t,o)=>{const p=q,v=D,x=z;return I((E(),L(v,{shadow:"never"},{default:M(()=>[P(p,{modelValue:u(s),"onUpdate:modelValue":o[0]||(o[0]=w=>R(s)?s.value=w:null),columns:u(h),gutter:40,"label-width":"100px",onSubmit:u(c)},null,8,["modelValue","columns","onSubmit"])]),_:1})),[[x,u(d)]])}}}),ce=H(N,[["__scopeId","data-v-1b71636e"]]);export{ce as default};
