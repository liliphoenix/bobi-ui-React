# bobi-ui

[![NPM version](https://img.shields.io/npm/v/bobi-ui.svg?style=flat)](https://npmjs.org/package/bobi-ui)
[![NPM downloads](http://img.shields.io/npm/dm/bobi-ui.svg?style=flat)](https://npmjs.org/package/bobi-ui)

A react library developed with dumi

## Usage

TODO

## Options

TODO

## Development

```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

# build library source code
$ npm run build

# build library source code in watch mode
$ npm run build:watch

# build docs
$ npm run docs:build

# check your project for potential problems
$ npm run doctor
```

## LICENSE

MIT

## 我学到的

const ButtonTypes=['xx','xxx','xxxx'] as const
export const ButtonType = typeof ButtonType[number]

'<code>这种导入方式是默认导入方式'

### less 学习

### 架构完善

#### lerna 实现 monorepo 的第一步

err:
Cannot initialize lerna because your package manager has not been configured to use `workspaces`, and you have not explicitly specified any packages to operate on
resolve：
在 package.json 添加 workspaces 选项，为了让其子目录成为单独的项目

流程：
lerna init
别忘了在 package.json 里设置工作区是哪个文件夹
lerna create xxx
在工作区下的文件夹添加项目包

#### husky+eslint+prettier+commitizen+changelog】

##### eslint

    ```yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin ```
    @typescript-eslint/parser 是解析器，先让eslint识别ts代码

这里可以使用推荐的 airbnb 风格的 lint 包
首先是要安装 airbnb 的包，先看看 airbnb 的依赖
`npm info eslint-config-airbnb@least peerDependencies  `
`yarn add --dev eslint-plugin-import@^2.25.3 eslint-plugin-jsx-a11y@^6.5.1 eslint-plugin-react@^7.28.0 eslint-plugin-react-hooks@^4.3.0 -W `
`yarn add --dev eslint-config-airbnb eslint-config-airbnb-typescript `
安装完 airbnb 和 airbnb 所需的依赖
