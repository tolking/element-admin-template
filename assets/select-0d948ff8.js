import{w as u}from"./modules-vueuse-9b2c2f8a.js";import{e as l,A as n}from"./api-3f191218.js";function f(){var s;const t=u("CatesList",[]),{data:e,execute:i}=l(n.cates);!((s=t.value)!=null&&s.length)&&o();async function o(){var a;await i(),(a=e.value)!=null&&a.list&&(t.value=e.value.list)}return t}export{f as u};