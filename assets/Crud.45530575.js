import"./index.8ae3cbac.js";/* empty css                   */import{n as U,h as V,o as A,g as P,p as M}from"./modules-element-pro.93e4a1ff.js";/* empty css               *//* empty css             *//* empty css             *//* empty css             *//* empty css              *//* empty css               */import"./el-tooltip.586473e3.js";/* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import{c as N,A as j}from"./crud.b82008f5.js";import{_ as G}from"./RichEditor.f877a08f.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import{I as F,H as O,a3 as Q}from"./modules-element-plus.41ec575c.js";import{E as W,ag as l,M as Y,u as e,F as a,T as g,U as u,W as $,i as n,G as b,a4 as B,Q as C,a5 as h,Y as v}from"./modules-vue.2559fb4f.js";import"./modules-quill.209abeee.js";import"./modules-vueuse.98f91a9c.js";import"./modules-element-icon.ce895049.js";const J=W({name:"Crud",setup(K){const{query:s,form:o,isFetching:x,page:p,limit:i,total:E,list:y,beforeOpen:S,search:k,loadList:_,submit:w,deleteRow:z}=N({url:j.article}),D=M({label:"\u64CD\u4F5C"}),q=U([{label:"ID",prop:"id"},{label:"\u6807\u9898",prop:"title",component:l(F),search:!0,form:!0,detail:!0,props:{clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"}},{label:"\u4F5C\u8005",prop:"author",component:l(F),search:!0,form:!0,detail:!0,props:{clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u4F5C\u8005"}},{label:"\u6807\u7B7E",prop:"tag",component:l(V),form:!0,detail:!0,props:{clearable:!0,trigger:"enter",placeholder:"\u8BF7\u8F93\u5165\u6807\u7B7E"}},{label:"\u5185\u5BB9",prop:"content",component:l(G),form:!0,detail:!0,hide:!0},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"}]),I={title:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"},author:{required:!0,message:"\u8BF7\u8F93\u5165\u4F5C\u8005",trigger:"blur"},tag:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u7B7E",trigger:"blur"},content:{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9",trigger:"blur"}};return(X,t)=>{const f=O,L=A,R=P,T=Q;return Y((a(),g(R,{shadow:"never"},{default:u(()=>[$(L,{modelValue:e(o),"onUpdate:modelValue":t[0]||(t[0]=r=>n(o)?o.value=r:null),search:e(s),"onUpdate:search":t[1]||(t[1]=r=>n(s)?s.value=r:null),"current-page":e(p),"onUpdate:current-page":t[2]||(t[2]=r=>n(p)?p.value=r:null),"page-size":e(i),"onUpdate:page-size":t[3]||(t[3]=r=>n(i)?i.value=r:null),columns:e(q),menu:e(D),data:e(y),detail:e(o),total:e(E),rules:I,"before-open":e(S),border:"",stripe:"","label-width":"100px",layout:"total, ->, jumper, prev, pager, next, sizes",onSearch:e(k),onSubmit:e(w),onDelete:e(z),onLoad:e(_),onSearchReset:e(_)},{"table-tag":u(({row:r,size:m})=>[(a(!0),b(C,null,B(r.tag,(d,c)=>(a(),g(f,{key:c,size:m,class:"tag-item"},{default:u(()=>[h(v(d),1)]),_:2},1032,["size"]))),128))]),"detail-tag":u(({item:r,size:m})=>[(a(!0),b(C,null,B(r.tag,(d,c)=>(a(),g(f,{key:c,size:m,class:"tag-item"},{default:u(()=>[h(v(d),1)]),_:2},1032,["size"]))),128))]),_:1},8,["modelValue","search","current-page","page-size","columns","menu","data","detail","total","before-open","onSearch","onSubmit","onDelete","onLoad","onSearchReset"])]),_:1})),[[T,e(x)]])}}});var he=H(J,[["__scopeId","data-v-41907a4c"]]);export{he as default};
