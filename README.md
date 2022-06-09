# element-admin-template (相关示例正在快速开发中)

> 一个基础的后台管理系统模版，方便快速开发

## 基于

此项目的开发离不开下面这些项目

- [vue](https://github.com/vuejs/core) 基于 Vue 3 的项目
- [vue-router](https://github.com/vuejs/router) 提供路由支持
- [vueuse](https://github.com/vueuse/vueuse) 使用其中的可组合函数
- [element-plus](https://github.com/element-plus/element-plus) 使用 element-plus 组件及其图标库
- [element-pro-components](https://github.com/tolking/element-pro-components) 使用 element-pro-components 快速构建后台界面
- [quill](https://github.com/quilljs/quill) 基于 Quill 的富文本编辑器
- [virapi](https://virapi.com) 由 virapi 提供的在线 Mock 接口
- [vite](https://github.com/vitejs/vite) 基于 Vite 开发和打包
- [vue-tsc](https://github.com/johnsoncodehk/volar) 提供类型检查
- [typescript](https://github.com/Microsoft/TypeScript) 全局基于 TypeScript 开发
- [eslint](https://github.com/eslint/eslint) [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) [prettier](https://github.com/prettier/prettier) 提供代码检查或格式化
- [husky](https://github.com/typicode/husky) [lint-staged](https://github.com/okonet/lint-staged) 在 git 提交前格式化代码
- ...

## 特色

- 大量新技术
- 项目精简，不包含无用依赖
- 使用可组合函数，方便复用
- 数据化驱动界面，基于 element-pro-components 通过配置直接生成表单和表格等

## 起步

选择下面一种方式快速开始

- 快速开启在线编辑器

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/tolking/element-admin-template)

- 通过克隆

```
git clone https://github.com/tolking/element-admin-template.git
```

- [直接下载压缩包](https://github.com/tolking/element-admin-template/archive/refs/heads/main.zip)

- [快速创建模版项目](https://github.com/tolking/element-admin-template/generate)

- 如果想参与贡献推荐 Fork

## 使用

- 初始化依赖，推荐使用 pnpm

```sh
pnpm install
# 或者
yarn install
# 或者
npm install
```

- 项目基础信息配置

  - 修改 `.env.development` `.env.production` 中的地址为你请求的 api 地址
  - 修改 `src/utils/config.ts` 中的配置信息
  - 全局搜索 `// NOTE:`，这里包含了你可能需要更改的代码

- 启动项目

```sh
pnpm dev
# 或者
yarn dev
# 或者
npm run dev
```

## 使用说明

- 项目示例是基于 TypeScript 和 Vue 3 的 setup 语法糖，你可以不使用 TypeScript，但 setup 语法糖是非常推荐的。项目中提供大量的可组合函数供在 setup 中使用。
- 项目默认会在 git 提交前进行格式化，如果想取消请移除 `husky` `lint-staged`，并删除 `.husky` 文件夹
- 如果不需要格式化请移除 `@typescript-eslint/eslint-plugin` `@typescript-eslint/parser` `eslint` `eslint-plugin-prettier` `eslint-plugin-vue` `prettier`，并删除 `.eslintrc.js` `.prettierrc` 文件
- 项目打包时会强制进行类型检查，修改 `package.json` 中 `scripts` 即可

```diff
- "build": "vue-tsc --noEmit && vite build",
+ "build": "vite build",
```

- 项目中的 `useForm` `useDetail` `useList` `useCrud` 是基于 Restful API 接口规范进行封装的，请根据情况使用
- 项目中的 `useGet` `usePost` `usePut` `useDelete` `useBlob` 是可组合函数，接收响应式参数。与 Axios 使用存在很大区别

```ts
const url = ref('/url')
const form = ref({})
const { data, execute } = uesPost(url, form)

// 通过 execute 触发提交
execute()
```

## 开发流程

- 在 `src/utils/api.ts` 中增加 api 地址
- 在 `src/router/index.ts` 中配置路由信息
- 在 `src/types/` 中增加相关类型
- 在 `src/views/` 中增加界面，参考模版进行页面构建

## 打包

```sh
pnpm build
# 或者
yarn build
# 或者
npm run build
```

## 贡献

如果你有好的想法，欢迎加入贡献

## License

[MIT](http://opensource.org/licenses/MIT)
