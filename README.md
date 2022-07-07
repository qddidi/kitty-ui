
## 前言

随着前端技术的发展，业界涌现出了许多的UI组件库。例如我们熟知的ElementUI,Vant,vuetify等等。但是作为一个前端开发者，你知道一个UI组件库是如何被打造出来的吗?读完这篇文章你将学会:

* 如何使用pnpm搭建出一个menorepo环境、
* 如何使用vite搭建一个基本的Vue3脚手架项目
* 如何开发调试一个自己的UI组件库
* 如何打包并发布自己的UI组件库 
* 如何开发一个简单的发布脚本

作为一个前端拥有一个属于自己的UI组件库是一件非常酷的事情。它不仅能让我们对组件的原理有更深的理解，还能在找工作的时候为自己增色不少。试问有哪个前端不想拥有一套属于自己的UI组件库呢？


本文将使用Vue3和TypeScript来编写一个组件库，使用Vite+Vue3来对这个组件库中的组件进行调试，最后使用rollup来对组件库进行打包并且发布到npm上。最终的产物是一个名为kitty-ui的组件库。目前里面暂时仅有一个Button组件；未来也许会将一些常用组件添加进去进行完善(ps:如果有人想看的话。

好了~ 接下来让我们先看下什么是menorepo环境以及它是如何搭建的吧

## menorepo环境

就是指在一个大的项目仓库中，管理多个模块/包（package），这种类型的项目大都在项目根目录下有一个packages文件夹，分多个项目管理。大概结构如下：

```
-- packages
  -- pkg1
    --package.json
  -- pkg2
    --package.json
--package.json
  
```
简单来说就是**单仓库 多项目**

目前很多我们熟知的项目都是采用这种模式，如Vant，ElementUI，Vue3等。打造一个menorepo环境的工具有很多，如：lerna、pnpm、yarn等，这里我们将使用pnpm来开发我们的UI组件库。

为什么要使用pnpm?

因为它简单啊！

下面我们就开始用pnpm来进行我们的组件库搭建吧~

## 使用pnpm

### 安装

```
npm install pnpm -g
```

### 初始化package.json

```
pnpm init
```

### 新建配置文件 .npmrc

```
shamefully-hoist = true
```

这里简单说下为啥要配置这个东西。

如果某些工具仅在根目录的node_modules时才有效，可以将其设置为true来提升那些不在根目录的node_modules，就是将你安装的依赖包的依赖包的依赖包的...都放到同一级别（扁平化）。说白了就是不设置为true有些包可能会出问题!

## 安装对应依赖

```
pnpm i vue@next typescript less -D
```

我们开发的是vue3组件嘛， 所以vue3和ts是必不可少的（当然如果你想要js开发也是可以的，甚至可以省略到很多配置和写法。但是作为我们的第一个组件库我们得规范起来！);less为了我们写样式方便，以及使用它的命名空间（这个暂时这里没用到，后面有时间再补上~



* 配置tsconfit.json

这里的配置就不细说了，可以自行搜索都是代表什么意思。或者你可以先直接复制

```
npx tsc --init
```

tsconfig.json:

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "jsx": "preserve",
    "strict": true,
    "target": "ES2015",
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "moduleResolution": "Node",
    "lib": ["esnext", "dom"]
  }
}
```

## monorepo的实现

接下就是pnpm如何实现monorepo的了。

为了我们各个项目之间能够互相联系我们要新建一个**pnpm-workspace.yaml**文件  

```
packages:
    - 'packages/**'
    - 'examples'
```

这样就能将我们项目下的packages目录和examples目录关联起来了，当然如果你想关联更多目录你只需要往里面添加即可。根据上面的目录结构很显然你在根目录下新packages和examples文件夹，packages文件夹存放我们开发的包，examples用来调试我们的组件

examples文件夹就是接下来我们要**使用vite搭建一个基本的Vue3脚手架项目**的地方



## 手动搭建一个基于vite的vue3项目

### 初始化仓库

进入examples文件夹，执行

```
pnpm init
```

### 安装vite和@vitejs/plugin-vue

@vitejs/plugin-vue用来支持.vue文件的转译

```
pnpm install vite @vitejs/plugin-vue -D -w
```

-w 代表安装在根目录下

### 配置vite.config.ts

新建vite.config.ts

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins:[vue()]
})

```

### 新建html文件

@vitejs/plugin-vue 会默认加载examples下的index.html

新建index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
    <script src="main.ts" type="module"></script>
</body>
</html>
```

<b>注意：</b>
vite 是基于esmodule的 所以type="module"

### 新建app.vue模板

```
<template>
    <div>
        启动测试
    </div>
</template>
```

### 新建main.ts

```
import {createApp} from 'vue'
import App from './app.vue'

const app = createApp(App)

app.mount('#app')
```

此时会发现编译器会提示个错误：找不到模块“./app.vue”或其相应的类型声明

因为直接引入.vue文件 TS会找不到对应的类型声明；所以需要新建typings（命名没有明确规定，TS会自动寻找.d.ts文件）文件夹来专门放这些声明文件。

typings/vue-shim.d.ts

TypeScriptTS默认只认ES 模块。如果你要导入.vue文件就要declare module把他们声明出来。

```
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component:DefineComponent<{},{},any>
}
```

### 配置脚本启动项目

最后在package.json文件中配置scripts脚本

```
...
"scripts": {
    "dev": "vite"
  },
...
```

然后终端输入我们熟悉的命令：pnpm run dev

vite启动默认端口为3000；在浏览器中打开localhost:3000 就会看我们的“启动测试”页面。


## 本地调试

### 新建包文件

本节可能和目前组件的开发关联不大，但是未来组件需要引入一些工具方法的时候会用到

接下来就是要往我们的packages文件夹冲填充内容了。

* utils包

一般packages要有utils包来存放我们公共方法，工具函数等

既然它是一个包，所以我们新建utils目录后就需要初始化它，让它变成一个包；终端进入utils文件夹执行：pnpm init 然后会生成一个package.json文件；这里需要改一下包名，我这里将name改成@kitty-ui/utils表示这个utils包是属于kitty-ui这个组织下的。所以记住发布之前要登录npm新建一个组织；例如kitty-ui

```
{
  "name": "@kitty-ui/utils",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

因为我们使用ts写的，所以需要将入口文件index.js改为index.ts，并新建index.ts文件:(先导出一个简单的加法函数7)

```
export const testfun = (a:number,b:number):number=>{
    return a + b
}
```

* 组件库包(这里命名为kitty-ui)

components是我们用来存放各种UI组件的包

新建components文件夹并执行 pnpm init 生成package.json

```
{
  "name": "kitty-ui",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

新建index.ts入口文件并引入utils包

```
import {testfun} from '@kitty-ui/utils'

const result = testfun (1,1)

console.log(result)
```

* ts-node

由于组件库是基于ts的，所以需要安装ts-node来执行ts文件便于测试组件之间的引入情况

### 包之间本地调试

进入components文件夹执行

```
pnpm install @kitty-ui/utils
```

你会发现pnpm会自动创建个软链接直接指向我们的utils包；此时components下的packages：

```
{
  "name": "kitty-ui",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@kitty-ui/utils": "workspace:^1.0.1"
  }
}

```

你会发现它的依赖@kitty-ui/utils对应的版本为：workspace:^1.0.0；因为pnpm是由workspace管理的，所以有一个前缀workspace可以指向utils下的工作空间从而方便本地调试各个包直接的关联引用。

到这里基本开发方法我们已经知道啦；接下来就要进入正题了，开发一个button组件

## 试着开发一个button组件

在components文件夹下新建src,同时在src下新建button组件目录和icon组件目录(新建icon为了便于调试);此时components文件目录如下

```
-- components
  -- src
    -- button
    -- icon
    -- index.ts
-- package.json

```


让我们先测试一下我们的button组件能否在我们搭建的examples下的vue3项目本引用~

首先在button下新建一个简单的button.vue

```
<template>
    <button>测试按钮</button>
</template>
```

然后在button/index.ts将其导出

```
import Button from './src/button.vue'

export default Button
```

因为我们开发组件库的时候不可能只有button，所以我们需要一个components/index.ts将我们开发的组件一个个的集中导出

```
import Button from './button'

export {
    Button
}

```

好了，一个组件的大体目录差不多就是这样了，接下来请进入我们的examples来看看能否引入我们的button组件

## vue3项目使用button

上面已经说过执行在workspace执行 pnpm i xxx的时候pnpm会自动创建个软链接直接指向我们的xxx包。

所以这里我们直接在examples执行：pnpm i kitty-ui

此时你就会发现packages.json的依赖多了个 

```
"kitty-ui": "workspace:^1.0.0"
```

这时候我们就能直接在我们的测试项目下引入我们本地的components组件库了，启动我们的测试项目，来到我们的 **examples/app.vue** 直接引入Button

```
<template>
    <div>
        <Button />
    </div>
</template>
<script lang="ts" setup>
import { Button } from 'kitty-ui'
</script>
```

不出意外的话你的页面就会展示我们刚刚写的button组件了

## 正式开发一个Button组件

好了万事具...(其实还差个打包，这个后面再说~)；接下来的工作就是专注于组件的开发了；让我们回到我们的button组件目录下（测试页面不用关，此时我们已经可以边开发!边调试!边看效果了！）

因为我们的button组件是需要接收很多属性的，如type、size等等，所以我们要新建个types.ts文件来规范这些属性

在button/src下新建types.ts

```

import { ExtractPropTypes } from 'vue'


export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';


type buttonProps = {
  type: ButtonType,
  size: ButtonSize
}

export type ButtonProps = ExtractPropTypes<buttonProps>




```
**TIPS**

import type 表示只导入类型；ExtractPropTypes是vue3中内置的类型声明,它的作用是接收一个类型，然后把对应的vue3所接收的props类型提供出来，后面有需要可以直接使用








到这里组件开发的基本配置已经完成，最后我们对我们的组件库以及工具库进行打包，打包之前如果要发公共包的话记得将我们的各个包的协议改为MIT开源协议
```
...
"license": "MIT",
...
```
## vite打包

vite-plugin-dts

pnpm i vite-plugin-dts -D -w

vite-plugin-libcss

pnpm i vite-plugin-libcss -D -w

pnpm i autoprefixer -D -w


## 开始发布

做了那么多终于到发布的阶段了；其实npm发包是很容易的，就拿我们的组件库kitty-ui举例吧

发布之前记得到[npm](https://www.npmjs.com/)官网注册个账户,如果你要发布@xx/xx这种包的话需要在npm新建个组织组织组织名就是@后面的，比如我建的组织就是kitty-ui,注册完之后你就可以发布了



进入到packages/dist/kittyui执行

```
npm publish --access public
```

输入你的账户和密码（记得输入密码的时候是不显示的，不要以为卡了）正常情况下应该是发布成功了

**注意**

发布的时候要将npm的源切换到npm的官方地址(https://registry.npmjs.org/); 如果你使用了其它镜像源的话


## 直接使用

如果你不想一步步的搭建，想直接使用现成的话，你可以直接把项目clone下来-> [kittyui](https://gitee.com/geeksdidi/kittyui),然后你只需要以下几步便可将其完成

### 安装依赖

* 安装pnpm npm i pnpm -g
* 安装mversion npm i mversion -g
* 安装所有依赖 pnpm install

### 打包命令

* 打包所有 

根目录执行 pnpm run build

* 分别打包

分别进入组件库的包(packages/components)和utils(packages/utils)包分别执行 pnpm run build

* 本地测试

进入examples文件夹执行 pnpm run dev 启动vue3项目


## 写在最后

由于作者水平有限，难免会存在一些错误或不妥之处，希望各位能够不吝指出，一定及时修改。如果你对这个项目有更好的想法或者建议也欢迎在评论区提出，不胜感激。

后续我会对一些常用组件进行开发，每个组件的开发都会以文章的形式展现出来以供大家参考。也欢迎大家将项目fork下来，提交自己组件或者对kittyui的修改到[kittyui](https://gitee.com/geeksdidi/kittyui)~ 

创作不易，你的点赞就是我的动力！如果感觉对自己有帮助的话就请点个赞吧，感谢~

我正在参与掘金技术社区创作者签约计划招募活动，[点击链接报名投稿](https://juejin.cn/post/7112770927082864653 "https://juejin.cn/post/7112770927082864653")。