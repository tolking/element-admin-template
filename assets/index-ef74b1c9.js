import{ak as p,ax as d,ay as h}from"./modules-vue-7af85754.js";import{u as E,A as f}from"./store-fe035025.js";import{F as v}from"./modules-element-icon-c981c180.js";const R="modulepreload",L=function(r){return"/element-admin-template/"+r},_={},e=function(n,l,c){if(!l||l.length===0)return n();const s=document.getElementsByTagName("link");return Promise.all(l.map(t=>{if(t=L(t),t in _)return;_[t]=!0;const i=t.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(!!c)for(let a=s.length-1;a>=0;a--){const m=s[a];if(m.href===t&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${u}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":R,i||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),i)return new Promise((a,m)=>{o.addEventListener("load",a),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n())},A=[{path:"/login",component:()=>e(()=>import("./Login-cc549754.js"),["assets/Login-cc549754.js","assets/modules-element-pro-7fcc2064.js","assets/modules-vue-7af85754.js","assets/modules-vueuse-fea2e48f.js","assets/modules-element-icon-c981c180.js","assets/modules-element-plus-3944a27c.js","assets/modules-quill-94ea01f0.js","assets/store-fe035025.js","assets/api-4ce25680.js","assets/api-5f7620ac.css","assets/base-3111e043.css","assets/el-button-2cb60ae5.css","assets/Login-af6ac8bc.css","assets/el-row-18c8e13f.css","assets/el-tab-pane-5164aac9.css","assets/form-b97d11d4.css"]),meta:{hidden:!0}},{path:"/",redirect:"/demo",component:()=>e(()=>import("./Layout-31c4b302.js"),["assets/Layout-31c4b302.js","assets/modules-element-pro-7fcc2064.js","assets/modules-vue-7af85754.js","assets/modules-vueuse-fea2e48f.js","assets/modules-element-icon-c981c180.js","assets/modules-element-plus-3944a27c.js","assets/modules-quill-94ea01f0.js","assets/el-tooltip-4ed993c7.js","assets/store-fe035025.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Layout-2d7a7156.css","assets/base-3111e043.css","assets/el-popper-f394526f.css","assets/el-tab-pane-5164aac9.css","assets/el-button-2cb60ae5.css","assets/el-button-group-bbe92800.css","assets/el-dropdown-menu-0c6ddabc.css","assets/el-image-viewer-21a319c0.css"]),meta:{title:"Demo",icon:p(v)},children:[{path:"/demo",component:()=>e(()=>import("./Dashboard-d0fcca7c.js"),["assets/Dashboard-d0fcca7c.js","assets/modules-element-pro-7fcc2064.js","assets/modules-vue-7af85754.js","assets/modules-vueuse-fea2e48f.js","assets/modules-element-icon-c981c180.js","assets/modules-element-plus-3944a27c.js","assets/modules-quill-94ea01f0.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Dashboard-e18df07c.css","assets/base-3111e043.css","assets/el-button-2cb60ae5.css","assets/el-button-group-bbe92800.css","assets/el-row-18c8e13f.css","assets/card-c51bed43.css","assets/DashboardCard-dc436c89.css"]),meta:{title:"首页"}},{path:"/demo/form",component:()=>e(()=>import("./Form-c0994350.js"),["assets/Form-c0994350.js","assets/modules-element-pro-7fcc2064.js","assets/modules-vue-7af85754.js","assets/modules-vueuse-fea2e48f.js","assets/modules-element-icon-c981c180.js","assets/modules-element-plus-3944a27c.js","assets/modules-quill-94ea01f0.js","assets/api-4ce25680.js","assets/store-fe035025.js","assets/api-5f7620ac.css","assets/base-3111e043.css","assets/el-button-2cb60ae5.css","assets/RichEditor.vue_vue_type_style_index_0_lang-aaf0089f.js","assets/RichEditor-8692da9c.css","assets/el-row-18c8e13f.css","assets/card-c51bed43.css","assets/el-tab-pane-5164aac9.css","assets/form-b97d11d4.css","assets/DashboardCard-dc436c89.css","assets/el-tag-5dc68ec4.css","assets/input-tag-c2118c69.css"]),meta:{title:"简单表单"}},{path:"/demo/table",component:()=>e(()=>import("./Table-11c2fab8.js"),["assets/Table-11c2fab8.js","assets/modules-element-pro-7fcc2064.js","assets/modules-vue-7af85754.js","assets/modules-vueuse-fea2e48f.js","assets/modules-element-icon-c981c180.js","assets/modules-element-plus-3944a27c.js","assets/modules-quill-94ea01f0.js","assets/el-tooltip-4ed993c7.js","assets/api-4ce25680.js","assets/store-fe035025.js","assets/api-5f7620ac.css","assets/base-3111e043.css","assets/el-button-2cb60ae5.css","assets/el-loading-d0f2d079.css","assets/el-row-18c8e13f.css","assets/card-c51bed43.css","assets/table-7f24f9e5.css","assets/el-tag-5dc68ec4.css","assets/el-popper-f394526f.css","assets/el-select-2b11dd84.css","assets/el-image-viewer-21a319c0.css"]),meta:{title:"简单表格"}},{path:"/demo/descriptions",component:()=>e(()=>import("./Descriptions-ce809862.js"),["assets/Descriptions-ce809862.js","assets/modules-element-pro-7fcc2064.js","assets/modules-vue-7af85754.js","assets/modules-vueuse-fea2e48f.js","assets/modules-element-icon-c981c180.js","assets/modules-element-plus-3944a27c.js","assets/modules-quill-94ea01f0.js","assets/api-4ce25680.js","assets/store-fe035025.js","assets/api-5f7620ac.css","assets/base-3111e043.css","assets/el-button-2cb60ae5.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/Descriptions-ab30106f.css","assets/el-loading-d0f2d079.css","assets/el-row-18c8e13f.css","assets/card-c51bed43.css","assets/descriptions-662285c0.css","assets/el-tag-5dc68ec4.css"]),meta:{title:"简单描述"}},{path:"/demo/crud",component:()=>e(()=>import("./Crud-a6a3133f.js"),["assets/Crud-a6a3133f.js","assets/modules-element-pro-7fcc2064.js","assets/modules-vue-7af85754.js","assets/modules-vueuse-fea2e48f.js","assets/modules-element-icon-c981c180.js","assets/modules-element-plus-3944a27c.js","assets/modules-quill-94ea01f0.js","assets/api-4ce25680.js","assets/store-fe035025.js","assets/api-5f7620ac.css","assets/base-3111e043.css","assets/el-button-2cb60ae5.css","assets/el-tooltip-4ed993c7.js","assets/RichEditor.vue_vue_type_style_index_0_lang-aaf0089f.js","assets/RichEditor-8692da9c.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/Crud-82c0d457.css","assets/el-loading-d0f2d079.css","assets/el-row-18c8e13f.css","assets/card-c51bed43.css","assets/crud-2fd210f2.css","assets/el-tab-pane-5164aac9.css","assets/form-b97d11d4.css","assets/table-7f24f9e5.css","assets/el-tag-5dc68ec4.css","assets/el-popper-f394526f.css","assets/el-select-2b11dd84.css","assets/descriptions-662285c0.css","assets/DashboardCard-dc436c89.css","assets/input-tag-c2118c69.css"]),meta:{title:"简单Crud"}},{path:"/demo/keep-alive",component:()=>e(()=>import("./KeepAlive-9c553174.js"),["assets/KeepAlive-9c553174.js","assets/modules-element-pro-7fcc2064.js","assets/modules-vue-7af85754.js","assets/modules-vueuse-fea2e48f.js","assets/modules-element-icon-c981c180.js","assets/modules-element-plus-3944a27c.js","assets/modules-quill-94ea01f0.js","assets/api-4ce25680.js","assets/store-fe035025.js","assets/api-5f7620ac.css","assets/base-3111e043.css","assets/el-button-2cb60ae5.css","assets/el-row-18c8e13f.css","assets/card-c51bed43.css","assets/el-tab-pane-5164aac9.css","assets/form-b97d11d4.css"]),meta:{title:"KeepAlive"}},{path:"/demo/complex-form",component:()=>e(()=>import("./ComplexForm-55fd0b68.js"),["assets/ComplexForm-55fd0b68.js","assets/modules-element-pro-7fcc2064.js","assets/modules-vue-7af85754.js","assets/modules-vueuse-fea2e48f.js","assets/modules-element-icon-c981c180.js","assets/modules-element-plus-3944a27c.js","assets/modules-quill-94ea01f0.js","assets/api-4ce25680.js","assets/store-fe035025.js","assets/api-5f7620ac.css","assets/base-3111e043.css","assets/el-button-2cb60ae5.css","assets/select-a533b300.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/ComplexForm-ff704693.css","assets/el-loading-d0f2d079.css","assets/el-row-18c8e13f.css","assets/card-c51bed43.css","assets/el-tab-pane-5164aac9.css","assets/form-b97d11d4.css","assets/el-popper-f394526f.css","assets/el-tag-5dc68ec4.css","assets/el-select-2b11dd84.css","assets/input-tag-c2118c69.css"]),meta:{title:"复杂表单"}},{path:"/demo/complex-crud",component:()=>e(()=>import("./ComplexCrud-a513ee6a.js"),["assets/ComplexCrud-a513ee6a.js","assets/modules-element-pro-7fcc2064.js","assets/modules-vue-7af85754.js","assets/modules-vueuse-fea2e48f.js","assets/modules-element-icon-c981c180.js","assets/modules-element-plus-3944a27c.js","assets/modules-quill-94ea01f0.js","assets/api-4ce25680.js","assets/store-fe035025.js","assets/api-5f7620ac.css","assets/base-3111e043.css","assets/el-button-2cb60ae5.css","assets/el-tooltip-4ed993c7.js","assets/select-a533b300.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/ComplexCrud-1b9ac416.css","assets/el-loading-d0f2d079.css","assets/el-row-18c8e13f.css","assets/card-c51bed43.css","assets/crud-2fd210f2.css","assets/el-tab-pane-5164aac9.css","assets/form-b97d11d4.css","assets/table-7f24f9e5.css","assets/el-tag-5dc68ec4.css","assets/el-popper-f394526f.css","assets/el-select-2b11dd84.css","assets/descriptions-662285c0.css","assets/el-button-group-bbe92800.css","assets/el-dropdown-menu-0c6ddabc.css"]),meta:{title:"复杂Crud"}}]}],P=d({history:h("/element-admin-template/"),routes:A});P.beforeEach(r=>{const n=E();if(!f.includes(r.path)&&!n.value.token)return"/login";if(r.path==="/login"&&n.value.token)return""});export{P as r};
