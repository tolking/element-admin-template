import"./index-b885c862.js";/* empty css                   */import{I as F,q as c,G as T,J as G,a as J,M}from"./modules-element-pro-1e9157de.js";/* empty css               *//* empty css             *//* empty css                  *//* empty css             */import{d as N,A as O}from"./api-faebc3b3.js";/* empty css                    *//* empty css             *//* empty css              */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css               *//* empty css                  *//* empty css                     *//* empty css                                                                      */import{_ as P}from"./RichEditor.vue_vue_type_style_index_0_lang-ba9bfa73.js";/* empty css                  */import{A as h,ad as $,z as j}from"./modules-element-plus-e2fc2490.js";import{F as H,ak as g,$ as W,u as e,H as a,S as _,R as o,O as K,I as v,a8 as S,P as x,i as s,V as k,W as q}from"./modules-vue-39e66fd2.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";import"./modules-vueuse-38da200c.js";import"./modules-element-icon-c82074b4.js";import"./modules-quill-ecfe6c98.js";const X=H({__name:"Crud",setup(Y){const{query:n,form:l,isFetching:y,page:p,limit:i,total:z,list:w,beforeOpen:C,search:I,loadList:f,submit:R,deleteRow:V}=N({url:O.article}),D=M({label:"操作"}),L=F([{label:"ID",prop:"id"},{label:"标题",prop:"title",component:g(h),search:!0,form:!0,detail:!0,props:c({clearable:!0,placeholder:"请输入标题"})},{label:"作者",prop:"author",component:g(h),search:!0,form:!0,detail:!0,props:c({clearable:!0,placeholder:"请输入作者"})},{label:"标签",prop:"tag",component:T,form:!0,detail:!0,props:c({clearable:!0,trigger:"enter",placeholder:"请输入标签"})},{label:"内容",prop:"content",component:g(P),form:!0,detail:!0,hide:!0},{label:"创建时间",prop:"createTime"}]),U={title:{required:!0,message:"请输入标题",trigger:"blur"},author:{required:!0,message:"请输入作者",trigger:"blur"},tag:{required:!0,message:"请输入标签",trigger:"blur"},content:{required:!0,message:"请输入内容",trigger:"blur"}};return(Z,r)=>{const b=j,A=G,B=J,E=$;return W((a(),_(B,{shadow:"never"},{default:o(()=>[K(A,{modelValue:e(l),"onUpdate:modelValue":r[0]||(r[0]=t=>s(l)?l.value=t:null),search:e(n),"onUpdate:search":r[1]||(r[1]=t=>s(n)?n.value=t:null),"current-page":e(p),"onUpdate:currentPage":r[2]||(r[2]=t=>s(p)?p.value=t:null),"page-size":e(i),"onUpdate:pageSize":r[3]||(r[3]=t=>s(i)?i.value=t:null),columns:e(L),menu:e(D),data:e(w),detail:e(l),total:e(z),rules:U,"before-open":e(C),border:"",stripe:"","label-width":"100px",layout:"total, ->, jumper, prev, pager, next, sizes",onSearch:e(I),onSubmit:e(R),onDelete:e(V),onLoad:e(f),onSearchReset:e(f)},{"table-tag":o(({row:t,size:u})=>[(a(!0),v(x,null,S(t.tag,(m,d)=>(a(),_(b,{key:d,size:u,class:"tag-item"},{default:o(()=>[k(q(m),1)]),_:2},1032,["size"]))),128))]),"detail-tag":o(({item:t,size:u})=>[(a(!0),v(x,null,S(t.tag,(m,d)=>(a(),_(b,{key:d,size:u,class:"tag-item"},{default:o(()=>[k(q(m),1)]),_:2},1032,["size"]))),128))]),_:1},8,["modelValue","search","current-page","page-size","columns","menu","data","detail","total","before-open","onSearch","onSubmit","onDelete","onLoad","onSearchReset"])]),_:1})),[[E,e(y)]])}}});const ze=Q(X,[["__scopeId","data-v-f7f07ce3"]]);export{ze as default};