# vue3-ts-init

> 基于 vue3 + ts 搭建框架，配置：git commit 代码提交风格、git husky 提交检测、Prettier 规范和与代码格式化

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run prettier
```

## git commit

```
npm run commit / npx cz 

mac chmod ug+x .husky/*

```

1. Select type 选择修改类型

| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |

2.Scope changes 选择本次修改的范围（作用域）

3.Change info 提交修改详细信息

4.Major change 是否为重大修改

5.Open issue 是否影响某个 open issue
