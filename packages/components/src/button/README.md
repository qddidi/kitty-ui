button组件几乎是每个组件库都有的；其实实现一个button组件是很简单的。本篇文章将带你一步一步的实现一个button组件。如果你想了解完整的组件库搭建，你可以先看[使用Vite和TypeScript带你从零打造一个属于自己的Vue3组件库](https://juejin.cn/post/7117886038126624805)，这篇文章有详细介绍。当然如果你只想知道一个button组件如何开发出来的，只看这篇也就够了。

首先我们先看下我们这个button组件要实现的功能

* 使用type、plain、round，size属性来定义组件样式
* 通过disabled来控制按钮是否可点击


## type实现

我们的type可以传入的值可以是primary, success, info，warning, danger分别展示不同按钮颜色,type传入text显示文字按钮(没有边框和背景色的按钮)

这里只展示了一个primary的样式，因为其它值的样式实现是一样的。需要的话可以到[button组件样式](https://gitee.com/geeksdidi/kittyui/blob/master/packages/components/src/button/style/index.less)进行查看。

所以在button/types.ts文件中我们定义一下type的类型：

```

import { ExtractPropTypes } from 'vue'

export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger','text']

export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      //这里表示type只能接收这些值
      return ButtonType.includes(value)
    }
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

```

接下来在button.vue中实现传入不同值赋予不同类名，从而实现显示不同效果。


```
<template>
    <button class="k-button" :class="styleClass">
        <slot />
    </button>
</template>

<script lang="ts">
import './style/index.less'
import { defineComponent, computed } from 'vue'
import { buttonProps } from './types'
export default defineComponent({
    name: 'k-button',
    props: buttonProps,
    setup(props) {
        const styleClass = computed(() => { 
            return {
                [`k-button--${props.type}`]: props.type
            }
        })

        return {
            styleClass
        };
    },
});
</script>

```

这样一来传入primary组件就会有个类名k-button--primary吗，传入其它值也一样。然后我们就可以给它们写样式了。进入style/index.less:

```
.k-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.k-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.k-button--text {
  border-color: transparent;
  color: #409eff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
  &:hover {
    color: #66b1ff;
    border-color: transparent;
    background-color: transparent;
  }
}
```


## plain(朴素按钮)和round(圆角按钮)

我们可以通过传入plain和round来决定这个按钮是否为朴素按钮和圆角按钮，很显然它们是个布尔类型

```
//types.ts

...

export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return ButtonType.includes(value)
    }
  },
  plain: Boolean,
  round: Boolean
}

...

```

然后在button.vue定义我们的styleClass

```
//button.vue

const styleClass = computed(() => {
            return {
                [`k-button--${props.type}`]: props.type,
                'is-plain': props.plain,
                'is-round': props.round
            }
        })
```

最后在style/index.less写上我们的样式

```

...

.k-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
.is-round {
  border-radius: 20px;
}
```

**注意**

两个连在一起的类名如：.k-button--primary.is-plain 代表一个元素只有包含这两个类名，定义的样式才生效

## 禁用按钮

同样的，在types.ts定义disabled的类型


```
//types.ts

...
export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger']

export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return ButtonType.includes(value)
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean
}

...

```

然后在button.vue定义我们的styleClass

```
//button.vue

const styleClass = computed(() => {
            return {
                [`k-button--${props.type}`]: props.type,
                'is-plain': props.plain,
                'is-round': props.round,
                'is-disabled': props.disabled
            }
        })
```

最后添加上我们的样式

```
...
.k-button.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.k-button--primary.is-disabled,
.k-button--primary.is-disabled:active,
.k-button--primary.is-disabled:focus,
.k-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
//朴素按钮禁用
.k-button--primary.is-disabled.is-plain,
.k-button--primary.is-disabled.is-plain:active,
.k-button--primary.is-disabled.is-plain:focus,
.k-button--primary.is-disabled.is-plain:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
...
```

## size

通过size我们可以控制按钮的大小，组件接收的size值有：midium, small, mini。实现方式和上面差不多，这里就直接展示部分代码了

* types.ts

```
//types.ts

...

export const ButtonSize = ['midium', 'small', 'mini'];

export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return ButtonSize.includes(value)
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean
}

...

```

* button.vue

```
//button.vue

const styleClass = computed(() => {
            return {
                [`k-button--${props.type}`]: props.type,
                'is-plain': props.plain,
                'is-round': props.round,
                'is-disabled': props.disabled,
                [`k-button--${props.size}`]: props.size,
            }
        })
```

* style/index.less

```
//index.less
...
.k-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.k-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}

.k-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
```

最后我们在项目中引用（examples）来查看效果;

```
<-- App.vue -->
<template>
    <div>
        <Button>默认按钮</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
        <Button type="text">文字按钮</Button>
        <br>
        <br>
        <Button plain>朴素按钮</Button>
        <Button type="primary" plain>主要按钮</Button>
        <Button type="success" plain>成功按钮</Button>
        <Button type="info" plain>信息按钮</Button>
        <Button type="warning" plain>警告按钮</Button>
        <Button type="danger" plain>危险按钮</Button>
        <br>
        <br>
        <Button round>圆角按钮</Button>
        <Button type="primary" round>主要按钮</Button>
        <Button type="success" round>成功按钮</Button>
        <Button type="info" round>信息按钮</Button>
        <Button type="warning" round>警告按钮</Button>
        <Button type="danger" round>危险按钮</Button>
        <br>
        <br>
        <Button disabled>禁用按钮</Button>
        <Button type="primary" disabled>主要按钮</Button>
        <Button type="success" disabled>成功按钮</Button>
        <Button type="info" disabled>信息按钮</Button>
        <Button type="warning" disabled>警告按钮</Button>
        <Button type="danger" disabled>危险按钮</Button>
        <br>
        <br>
        <Button disabled>禁用按钮</Button>
        <Button type="primary" disabled plain>主要按钮</Button>
        <Button type="success" disabled plain>成功按钮</Button>
        <Button type="info" disabled plain>信息按钮</Button>
        <Button type="warning" disabled plain>警告按钮</Button>
        <Button type="danger" disabled plain>危险按钮</Button>
        <br>
        <br>
        <Button>默认按钮</Button>
        <Button size="medium">中等按钮</Button>
        <Button size="small">小型按钮</Button>
        <Button size="mini">超小按钮</Button>
    </div>
</template>
<script lang="ts" setup>
import { Button } from 'kitty-ui'
</script>
<style lang="less">
.k-button {
    margin-right: 10px;
}
</style>
```

启动项目我们就会在浏览器中看到我们的各式各样的button组件了


![1658045827629.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/853aa65f5223436281d6dc8a6b8229fb~tplv-k3u1fbpfcp-watermark.image?)