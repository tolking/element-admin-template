import{c as m,u as c,aB as p}from"./modules-vue-1e7a0b2d.js";import{i as d,E as g,l as h}from"./modules-vueuse-b11b28df.js";import{c as b,u,r as l}from"./index-3e6b6df6.js";/* empty css                  */import{af as v,ag as j}from"./modules-element-plus-faf0934f.js";function f(e,t,s={}){return v(Object.assign(s,{type:e,message:t}))}function F(e,t,s={}){return j.confirm(e,t,s)}function w(e){return/\/$/.test(e)?e:e+"/"}function $(e,...t){const[s,...o]=t;if(s!==void 0&&/\{\w*\}/.test(e))e=e.replace(/\{\w*\}/,String(s));else if(s!==void 0)e=w(e)+s;else return e;return $(e,...o)}function M(){d&&window.scrollTo({left:0,top:0,behavior:"smooth"})}let i=!1;const E="https://api.virapi.com/vir_github21e78h6b5d24e",n=g({baseUrl:E,options:{immediate:!1,timeout:b,beforeFetch({options:e,cancel:t}){return i?t():(u(),e.headers=Object.assign(e.headers||{},{"app-token":"$2a$10$oWYgEw/X1hj9BbvejQOud.xFezq5wP8H7NGkVA.4HcChK928Z2nja"}),{options:e})},afterFetch({data:e,response:t}){const s=u(),o=e.code;return o===200?e=e.data||{}:o===401?(s.value={token:"",name:"",avatar:""},!i&&f("warning","登录已经过期"),i=!0,setTimeout(()=>{l.replace(`/login?redirect=${l.currentRoute.value.path}`).then(()=>location.reload())},1500),e=null):o===1e3?(console.error(e.message),f("warning",e.message),e=null):o&&(console.log("出现未全局拦截错误"),e=void 0),{data:e,response:t}},onFetchError({data:e,error:t}){return console.error(t),e=void 0,{data:e,error:t}}},fetchOptions:{mode:"cors",credentials:"same-origin"}});function S(e,t){const s=m(()=>{const o=c(e),r=c(t),a=h(r)?p(r):r||"";return`${o}${a?"?":""}${a}`});return n(s).json()}function k(e,t){return n(e).post(t).json()}function _(e,t){return n(e).put(t).json()}function A(e,t){return n(e).delete(t).json()}const C={login:"/admin/login",user:"/admin/user",userStatus:"/admin/user/{id}/status",article:"/admin/article",goods:"/admin/goods",cates:"/admin/goods/cates",form:"/admin/form"};export{C as A,f as a,F as b,S as c,M as d,k as e,_ as f,$ as r,A as u};
