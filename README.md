<h1 align="center">
    Kitty-UI
</h1>

![v](https://img.shields.io/github/license/smarty-team/smarty-admin?color=red)
![d](https://img.shields.io/npm/dw/kitty-ui)



* 💪 Vue 3 Composition API
* 🔥 Written in TypeScript

<p align="center">Kitty UI - A Vue.js 3 UI library</p>

## Install
```
npm i kitty-ui
```

## 快速开始

```js
<template>
    <Button type="primary">按钮</Button>
</template>
<script lang="ts" setup>
import { Button } from 'kitty-ui'
</script>
```

## 博客教程

[Vite+TypeScript从零搭建Vue3组件库](https://juejin.cn/column/7118932817119019015)

## 使用仓库相关命令

### 安装 pnpm

npm i pnpm -g

### 安装所有依赖

pnpm install

### 启动本地测试项目

pnpm run exm:dev

### 打包组件库

pnpm run build:kitty

### 发布

pnpm run publish:kitty

### 启动文档

pnpm run docs:dev

### 打包文档

pnpm run docs:build

### 启动打包后文档服务

pnpm run docs:serve

### 单元测试

pnpm run test

### 查看测试覆盖率

pnpm run coverage
