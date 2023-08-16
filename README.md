# Uni-app fast

一个基于`vite`和`uniapp`，包含`vant`和`ColorUI`的小程序快速启动项目。

A mini-program quick start project based on `vite` and `uniapp`, including [Vant Weapp - 轻量、可靠的小程序 UI 组件库](https://vant-contrib.gitee.io/vant-weapp/#/home) and [ColorUI 使用文档](https://miren123.gitee.io/colorui-document/).

## 如何使用 how to use

1. 克隆项目 `git clone git@github.com:bestCoverJ/uniapp-fast.git`

2. 进入项目根目录 `cd uniapp-fast`

3. 安装项目依赖 `npm i` ，或者`yarn` 或者 `pnpm`(国内安装依赖失败可能需要切换npm源)

4. 启动项目 `npm run dev:mp-weixin`

5. 在微信开发者工具中，导入项目，导入的目录为你代码根目录中的 `./dist/dev/mp-weixin`

---

1. Clone the project: `git clone git@github.com:bestCoverJ/uniapp-fast.git`

2. Enter the project root directory: `cd uniapp-fast`

3. Installing project dependencies: `npm i` or `yarn` or `pnpm`

4. Starting the project: `npm run dev:mp-weixin`

5. In wechat developer tools, import the project, the import directory is in your code root directory `./dist/dev/mp-weixin`

## 常见问题 Q&A

- Q: 启动项目时提示： "hasInjectionContext" is not exported by "node_modules/.pnpm/pinia ...
  
  - 由于`pinia`版本更新，不匹配的`vue`和`pinia`会导致此问题产生。可以通过降级pinia `npm i pinia@2.0.36`或升级vue版本`npm i vue@3.3.0`解决该问题。
  
  - Due to the updated version of `pinia`, the mismatch between `vue` and `pinia` can cause this problem. This can be fixed by downgrading pinia `npm i pinia@2.0.36` or upgrading the vue version `npm i vue@3.3.0`.


