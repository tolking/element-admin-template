import"./index-3e6b6df6.js";/* empty css                   */import{I as U,t as $,M as A,h as q,J as D,a as J}from"./modules-element-pro-71a81d3a.js";/* empty css               *//* empty css             *//* empty css                  */import{u as M}from"./crud-96a2bd9a.js";import{A as N}from"./api-57caebfc.js";/* empty css                    *//* empty css             */import"./list-54a9b13a.js";import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css               *//* empty css                  *//* empty css                     *//* empty css                        *//* empty css                         */import{I as O}from"./modules-element-icon-4f85e918.js";import{F as P,au as j,r as H,ak as b,$ as W,u as e,H as f,S as C,R as r,O as a,V as s,i,I as G,a8 as K,P as Q,W as X}from"./modules-vue-1e7a0b2d.js";import{u as Y}from"./select-572d5d69.js";import{A as Z,L as ee,ad as te,z as oe}from"./modules-element-plus-faf0934f.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import"./modules-vueuse-b11b28df.js";import"./modules-quill-ecfe6c98.js";import"./form-db243072.js";import"./detail-6c334a75.js";const ae=P({__name:"ComplexCrud",setup(le){const{query:u,isFetching:k,page:m,limit:c,total:v,list:y,beforeOpen:x,search:z,loadList:d,deleteRow:L}=M({url:N.goods}),S=j(),w=Y(),R=A({label:"操作",add:!1,edit:!1,detail:!1,del:!1}),p=H(U([{label:"基础信息",prop:"id",hide:!0},{label:"商品名称",prop:"title",component:b(Z),search:!0,props:{clearable:!0,placeholder:"请输入商品名称"}},{label:"价格",prop:"price"},{label:"成本",prop:"cost",hide:!0},{label:"库存",prop:"stock"},{label:"分类",prop:"cates",component:b($),search:!0,props:{data:w,clearable:!0,placeholder:"请选择分类",style:"width:100%"}},{label:"标签",prop:"tags"},{label:"描述",prop:"desc",hide:!0},{label:"规格信息",prop:"length",children:[{label:"长",prop:"length"},{label:"宽",prop:"width"},{label:"高",prop:"height"},{label:"重量",prop:"weight"}]},{label:"开始时间",prop:"start",hide:!0},{label:"结束时间",prop:"end",hide:!0},{label:"创建时间",prop:"createTime",hide:!0}]));function g(h){S.push({path:"/demo/complex-form",query:{id:h}})}return(h,o)=>{const n=ee,I=q,V=oe,B=D,E=J,F=te;return W((f(),C(E,{shadow:"never"},{default:r(()=>[a(B,{search:e(u),"onUpdate:search":o[2]||(o[2]=t=>i(u)?u.value=t:null),"current-page":e(m),"onUpdate:currentPage":o[3]||(o[3]=t=>i(m)?m.value=t:null),"page-size":e(c),"onUpdate:pageSize":o[4]||(o[4]=t=>i(c)?c.value=t:null),columns:e(p),menu:e(R),data:e(y),total:e(v),"before-open":e(x),border:"",stripe:"",layout:"total, ->, jumper, prev, pager, next, sizes",onSearch:e(z),onLoad:e(d),onSearchReset:e(d)},{"menu-right":r(({size:t})=>[a(n,{size:t,type:"primary",onClick:o[0]||(o[0]=l=>g())},{default:r(()=>[s(" 增加 ")]),_:2},1032,["size"])]),action:r(()=>[a(n,{icon:e(O),circle:"",style:{"margin-right":"8px"},onClick:e(d)},null,8,["icon","onClick"]),a(I,{modelValue:e(p),"onUpdate:modelValue":o[1]||(o[1]=t=>i(p)?p.value=t:null)},null,8,["modelValue"])]),menu:r(({row:t,size:l})=>[a(n,{size:l,type:"primary",link:"",onClick:_=>g(t.id)},{default:r(()=>[s(" 编辑 ")]),_:2},1032,["size","onClick"]),a(n,{size:l,type:"danger",link:"",onClick:_=>e(L)(t)},{default:r(()=>[s(" 删除 ")]),_:2},1032,["size","onClick"])]),"table-tags":r(({row:t,size:l})=>[(f(!0),G(Q,null,K(t.tags,(_,T)=>(f(),C(V,{key:T,size:l,class:"tag-item"},{default:r(()=>[s(X(_),1)]),_:2},1032,["size"]))),128))]),_:1},8,["search","current-page","page-size","columns","menu","data","total","before-open","onSearch","onLoad","onSearchReset"])]),_:1})),[[F,e(k)]])}}});const Fe=re(ae,[["__scopeId","data-v-6cb2036a"]]);export{Fe as default};
