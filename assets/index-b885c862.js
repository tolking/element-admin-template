import{F as d,ai as h,H as _,S as f,R as D,O as F,ak as g,ax as v,ay as A,ap as B}from"./modules-vue-39e66fd2.js";import{a7 as y}from"./modules-element-plus-e2fc2490.js";import{w as C,x as P}from"./modules-vueuse-38da200c.js";import{F as R}from"./modules-element-icon-c82074b4.js";import"./modules-quill-ecfe6c98.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const u of e.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();var L={name:"zh-cn",el:{colorpicker:{confirm:"确定",clear:"清空"},datepicker:{now:"此刻",today:"今天",cancel:"取消",clear:"清空",confirm:"确定",selectDate:"选择日期",selectTime:"选择时间",startDate:"开始日期",startTime:"开始时间",endDate:"结束日期",endTime:"结束时间",prevYear:"前一年",nextYear:"后一年",prevMonth:"上个月",nextMonth:"下个月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},select:{loading:"加载中",noMatch:"无匹配数据",noData:"无数据",placeholder:"请选择"},cascader:{noMatch:"无匹配数据",loading:"加载中",placeholder:"请选择",noData:"暂无数据"},pagination:{goto:"前往",pagesize:"条/页",total:"共 {total} 条",pageClassifier:"页",page:"页",prev:"上一页",next:"下一页",currentPage:"第 {pager} 页",prevPages:"向前 {pager} 页",nextPages:"向后 {pager} 页",deprecationWarning:"你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"},messagebox:{title:"提示",confirm:"确定",cancel:"取消",error:"输入的数据不合法!"},upload:{deleteTip:"按 delete 键可删除",delete:"删除",preview:"查看图片",continue:"继续上传"},table:{emptyText:"暂无数据",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},tree:{emptyText:"暂无数据"},transfer:{noMatch:"无匹配数据",noData:"无数据",titles:["列表 1","列表 2"],filterPlaceholder:"请输入搜索内容",noCheckedFormat:"共 {total} 项",hasCheckedFormat:"已选 {checked}/{total} 项"},image:{error:"加载失败"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消"}}};const T=d({__name:"App",setup(n){const o={...L,pro:{form:{submit:"提交",reset:"重置"},crud:{add:"新增",edit:"编辑",detail:"详情",del:"删除",submit:"提交",reset:"重置",search:"搜索",searchReset:"重置"}}};return(i,s)=>{const t=h("router-view"),e=y;return _(),f(e,{locale:o},{default:D(()=>[F(t)]),_:1})}}}),x="modulepreload",O=function(n){return"/element-admin-template/"+n},m={},r=function(o,i,s){if(!i||i.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=O(e),e in m)return;m[e]=!0;const u=e.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!s)for(let c=t.length-1;c>=0;c--){const l=t[c];if(l.href===e&&(!u||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${p}`))return;const a=document.createElement("link");if(a.rel=u?"stylesheet":x,u||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),u)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o()).catch(e=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=e,window.dispatchEvent(u),!u.defaultPrevented)throw e})},b="App_Storage",K=3e4,j="page",z="limit",G=20,w=["/login"],k=C(()=>P(b,{token:"",name:"",avatar:""})),V=[{path:"/login",component:()=>r(()=>import("./Login-90cb8b84.js"),["assets/Login-90cb8b84.js","assets/modules-element-pro-1e9157de.js","assets/modules-vue-39e66fd2.js","assets/modules-vueuse-38da200c.js","assets/modules-element-icon-c82074b4.js","assets/modules-element-plus-e2fc2490.js","assets/modules-quill-ecfe6c98.js","assets/api-faebc3b3.js","assets/api-968460dd.css","assets/el-button-2cb60ae5.css","assets/Login-af6ac8bc.css","assets/el-row-18c8e13f.css","assets/el-tab-pane-eecd8b5a.css","assets/form-9b173974.css"]),meta:{hidden:!0}},{path:"/",redirect:"/demo",component:()=>r(()=>import("./Layout-38874cce.js"),["assets/Layout-38874cce.js","assets/modules-element-pro-1e9157de.js","assets/modules-vue-39e66fd2.js","assets/modules-vueuse-38da200c.js","assets/modules-element-icon-c82074b4.js","assets/modules-element-plus-e2fc2490.js","assets/modules-quill-ecfe6c98.js","assets/el-tooltip-4ed993c7.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Layout-952064b5.css","assets/el-popper-f394526f.css","assets/el-tab-pane-eecd8b5a.css","assets/el-button-2cb60ae5.css","assets/el-button-group-bbe92800.css","assets/el-dropdown-menu-0c6ddabc.css","assets/el-image-viewer-21a319c0.css"]),meta:{title:"Demo",icon:g(R)},children:[{path:"/demo",component:()=>r(()=>import("./Dashboard-d6ba9311.js"),["assets/Dashboard-d6ba9311.js","assets/modules-element-pro-1e9157de.js","assets/modules-vue-39e66fd2.js","assets/modules-vueuse-38da200c.js","assets/modules-element-icon-c82074b4.js","assets/modules-element-plus-e2fc2490.js","assets/modules-quill-ecfe6c98.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Dashboard-05b0847f.css","assets/el-button-2cb60ae5.css","assets/el-button-group-bbe92800.css","assets/el-row-18c8e13f.css","assets/card-76753241.css","assets/DashboardCard-dc436c89.css"]),meta:{title:"首页"}},{path:"/demo/form",component:()=>r(()=>import("./Form-22e30a8e.js"),["assets/Form-22e30a8e.js","assets/modules-element-pro-1e9157de.js","assets/modules-vue-39e66fd2.js","assets/modules-vueuse-38da200c.js","assets/modules-element-icon-c82074b4.js","assets/modules-element-plus-e2fc2490.js","assets/modules-quill-ecfe6c98.js","assets/api-faebc3b3.js","assets/api-968460dd.css","assets/el-button-2cb60ae5.css","assets/RichEditor.vue_vue_type_style_index_0_lang-ba9bfa73.js","assets/RichEditor-94e6bce9.css","assets/el-row-18c8e13f.css","assets/card-76753241.css","assets/el-tab-pane-eecd8b5a.css","assets/form-9b173974.css","assets/DashboardCard-dc436c89.css","assets/el-tag-2fca7a82.css","assets/input-tag-c2118c69.css"]),meta:{title:"简单表单"}},{path:"/demo/table",component:()=>r(()=>import("./Table-7351bc82.js"),["assets/Table-7351bc82.js","assets/modules-element-pro-1e9157de.js","assets/modules-vue-39e66fd2.js","assets/modules-vueuse-38da200c.js","assets/modules-element-icon-c82074b4.js","assets/modules-element-plus-e2fc2490.js","assets/modules-quill-ecfe6c98.js","assets/el-tooltip-4ed993c7.js","assets/api-faebc3b3.js","assets/api-968460dd.css","assets/el-button-2cb60ae5.css","assets/el-loading-d0f2d079.css","assets/el-row-18c8e13f.css","assets/card-76753241.css","assets/table-18074a38.css","assets/el-popper-f394526f.css","assets/el-tag-2fca7a82.css","assets/el-select-0b32213c.css","assets/el-image-viewer-21a319c0.css"]),meta:{title:"简单表格"}},{path:"/demo/descriptions",component:()=>r(()=>import("./Descriptions-45794978.js"),["assets/Descriptions-45794978.js","assets/modules-element-pro-1e9157de.js","assets/modules-vue-39e66fd2.js","assets/modules-vueuse-38da200c.js","assets/modules-element-icon-c82074b4.js","assets/modules-element-plus-e2fc2490.js","assets/modules-quill-ecfe6c98.js","assets/api-faebc3b3.js","assets/api-968460dd.css","assets/el-button-2cb60ae5.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/Descriptions-ab30106f.css","assets/el-loading-d0f2d079.css","assets/el-row-18c8e13f.css","assets/card-76753241.css","assets/descriptions-662285c0.css","assets/el-tag-2fca7a82.css"]),meta:{title:"简单描述"}},{path:"/demo/crud",component:()=>r(()=>import("./Crud-b741107b.js"),["assets/Crud-b741107b.js","assets/modules-element-pro-1e9157de.js","assets/modules-vue-39e66fd2.js","assets/modules-vueuse-38da200c.js","assets/modules-element-icon-c82074b4.js","assets/modules-element-plus-e2fc2490.js","assets/modules-quill-ecfe6c98.js","assets/api-faebc3b3.js","assets/api-968460dd.css","assets/el-button-2cb60ae5.css","assets/el-tooltip-4ed993c7.js","assets/RichEditor.vue_vue_type_style_index_0_lang-ba9bfa73.js","assets/RichEditor-94e6bce9.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/Crud-82c0d457.css","assets/el-loading-d0f2d079.css","assets/el-row-18c8e13f.css","assets/card-76753241.css","assets/crud-6e0bb2ea.css","assets/el-tab-pane-eecd8b5a.css","assets/form-9b173974.css","assets/table-18074a38.css","assets/el-popper-f394526f.css","assets/el-tag-2fca7a82.css","assets/el-select-0b32213c.css","assets/descriptions-662285c0.css","assets/DashboardCard-dc436c89.css","assets/input-tag-c2118c69.css"]),meta:{title:"简单Crud"}},{path:"/demo/keep-alive",component:()=>r(()=>import("./KeepAlive-6df4d7ba.js"),["assets/KeepAlive-6df4d7ba.js","assets/modules-element-pro-1e9157de.js","assets/modules-vue-39e66fd2.js","assets/modules-vueuse-38da200c.js","assets/modules-element-icon-c82074b4.js","assets/modules-element-plus-e2fc2490.js","assets/modules-quill-ecfe6c98.js","assets/api-faebc3b3.js","assets/api-968460dd.css","assets/el-button-2cb60ae5.css","assets/el-row-18c8e13f.css","assets/card-76753241.css","assets/el-tab-pane-eecd8b5a.css","assets/form-9b173974.css"]),meta:{title:"KeepAlive"}},{path:"/demo/complex-form",component:()=>r(()=>import("./ComplexForm-ef1298ef.js"),["assets/ComplexForm-ef1298ef.js","assets/modules-element-pro-1e9157de.js","assets/modules-vue-39e66fd2.js","assets/modules-vueuse-38da200c.js","assets/modules-element-icon-c82074b4.js","assets/modules-element-plus-e2fc2490.js","assets/modules-quill-ecfe6c98.js","assets/api-faebc3b3.js","assets/api-968460dd.css","assets/el-button-2cb60ae5.css","assets/select-04958aec.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/ComplexForm-b46800a9.css","assets/el-loading-d0f2d079.css","assets/el-row-18c8e13f.css","assets/card-76753241.css","assets/el-tab-pane-eecd8b5a.css","assets/form-9b173974.css","assets/el-tag-2fca7a82.css","assets/input-tag-c2118c69.css","assets/el-popper-f394526f.css","assets/el-select-0b32213c.css"]),meta:{title:"复杂表单"}},{path:"/demo/complex-crud",component:()=>r(()=>import("./ComplexCrud-14737dcf.js"),["assets/ComplexCrud-14737dcf.js","assets/modules-element-pro-1e9157de.js","assets/modules-vue-39e66fd2.js","assets/modules-vueuse-38da200c.js","assets/modules-element-icon-c82074b4.js","assets/modules-element-plus-e2fc2490.js","assets/modules-quill-ecfe6c98.js","assets/api-faebc3b3.js","assets/api-968460dd.css","assets/el-button-2cb60ae5.css","assets/el-tooltip-4ed993c7.js","assets/select-04958aec.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/ComplexCrud-13315515.css","assets/el-loading-d0f2d079.css","assets/el-row-18c8e13f.css","assets/card-76753241.css","assets/crud-6e0bb2ea.css","assets/el-tab-pane-eecd8b5a.css","assets/form-9b173974.css","assets/table-18074a38.css","assets/el-popper-f394526f.css","assets/el-tag-2fca7a82.css","assets/el-select-0b32213c.css","assets/descriptions-662285c0.css","assets/el-button-group-bbe92800.css","assets/el-dropdown-menu-0c6ddabc.css"]),meta:{title:"复杂Crud"}}]}],E=v({history:A("/element-admin-template/"),routes:V});E.beforeEach(n=>{const o=k();if(!w.includes(n.path)&&!o.value.token)return"/login";if(n.path==="/login"&&o.value.token)return""});B(T).use(E).mount("#app");export{K as R,G as a,j as b,z as c,E as r,k as u};
