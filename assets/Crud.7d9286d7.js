import"./index.8471fa3e.js";/* empty css                   */import{n as P,g as U,o as V,h as A,p as j}from"./modules-element-pro.82186d33.js";import{c as H,A as M}from"./el-row.f918f51a.js";/* empty css             *//* empty css             *//* empty css             *//* empty css              *//* empty css               */import"./el-tooltip.586473e3.js";/* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import{_ as N}from"./RichEditor.48de2546.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import{I as b,H as X,a1 as $}from"./modules-element-plus.4f8aec5f.js";import{D as G,ag as l,E as u,S as n,T as a,L as J,u as e,i as s,F,a4 as B,P as C,a2 as h,X as v}from"./modules-vue.3816da0d.js";import"./modules-quill.209abeee.js";import"./modules-vueuse.6d2083cc.js";import"./modules-element-icon.9f610536.js";const K=G({setup(Q){const{query:p,form:o,isFetching:x,page:i,limit:m,total:E,list:S,beforeOpen:y,search:D,loadList:_,submit:k,deleteRow:w}=H({url:M.article}),z=j({label:"\u64CD\u4F5C"}),L=P([{label:"ID",prop:"id",detail:!0},{label:"\u6807\u9898",prop:"title",component:l(b),search:!0,form:!0,detail:!0,props:{clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"}},{label:"\u4F5C\u8005",prop:"author",component:l(b),search:!0,form:!0,detail:!0,props:{clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u4F5C\u8005"}},{label:"\u6807\u7B7E",prop:"tag",component:l(U),form:!0,detail:!0,props:{clearable:!0,trigger:"enter",placeholder:"\u8BF7\u8F93\u5165\u6807\u7B7E"}},{label:"\u5185\u5BB9",prop:"content",component:l(N),form:!0,detail:!0,hide:!0},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",detail:!0}]),q={title:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"},author:{required:!0,message:"\u8BF7\u8F93\u5165\u4F5C\u8005",trigger:"blur"},tag:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u7B7E",trigger:"blur"},content:{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9",trigger:"blur"}};return(W,t)=>{const f=X,I=V,R=A,T=$;return u(),n(R,{shadow:"never"},{default:a(()=>[J((u(),n(I,{modelValue:e(o),"onUpdate:modelValue":t[0]||(t[0]=r=>s(o)?o.value=r:null),search:e(p),"onUpdate:search":t[1]||(t[1]=r=>s(p)?p.value=r:null),"current-page":e(i),"onUpdate:current-page":t[2]||(t[2]=r=>s(i)?i.value=r:null),"page-size":e(m),"onUpdate:page-size":t[3]||(t[3]=r=>s(m)?m.value=r:null),columns:e(L),menu:e(z),data:e(S),detail:e(o),total:e(E),rules:q,"before-open":e(y),column:1,border:"",stripe:"","label-width":"100px",layout:"total, ->, jumper, prev, pager, next, sizes",onSearch:e(D),onSubmit:e(k),onDelete:e(w),onLoad:e(_),onSearchReset:e(_)},{"table-tag":a(({row:r,size:d})=>[(u(!0),F(C,null,B(r.tag,(c,g)=>(u(),n(f,{key:g,size:d,class:"tag-item"},{default:a(()=>[h(v(c),1)]),_:2},1032,["size"]))),128))]),"detail-tag":a(({item:r,size:d})=>[(u(!0),F(C,null,B(r.tag,(c,g)=>(u(),n(f,{key:g,size:d,class:"tag-item"},{default:a(()=>[h(v(c),1)]),_:2},1032,["size"]))),128))]),_:1},8,["modelValue","search","current-page","page-size","columns","menu","data","detail","total","before-open","onSearch","onSubmit","onDelete","onLoad","onSearchReset"])),[[T,e(x)]])]),_:1})}}});var Be=O(K,[["__scopeId","data-v-3ba72e5c"]]);export{Be as default};
