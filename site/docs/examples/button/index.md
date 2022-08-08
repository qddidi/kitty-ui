<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    .k-button {
        margin:10px 5px !important
    }
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

# k-button 按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
        <k-button>默认按钮</k-button>
        <k-button icon="edit" type="primary">主要按钮</k-button>
        <k-button type="success">成功按钮</k-button>
        <k-button type="info">信息按钮</k-button>
        <k-button type="warning">警告按钮</k-button>
        <k-button type="danger">危险按钮</k-button>
        <k-button type="text">文字按钮</k-button>
        <br>
        <br>
        <k-button plain>朴素按钮</k-button>
        <k-button type="primary" plain>主要按钮</k-button>
        <k-button type="success" plain>成功按钮</k-button>
        <k-button type="info" plain>信息按钮</k-button>
        <k-button type="warning" plain>警告按钮</k-button>
        <k-button type="danger" plain>危险按钮</k-button>
        <br>
        <br>
        <k-button round>圆角按钮</k-button>
        <k-button type="primary" round>主要按钮</k-button>
        <k-button type="success" round>成功按钮</k-button>
        <k-button type="info" round>信息按钮</k-button>
        <k-button type="warning" round>警告按钮</k-button>
        <k-button type="danger" round>危险按钮</k-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <k-button>默认按钮</k-button>
    <k-button type="primary">主要按钮</k-button>
    <k-button type="success">成功按钮</k-button>
    <k-button type="info">信息按钮</k-button>
    <k-button type="warning">警告按钮</k-button>
    <k-button type="danger">危险按钮</k-button>
    <k-button type="text">文字按钮</k-button>
    <br />
    <br />
    <k-button plain>朴素按钮</k-button>
    <k-button type="primary" plain>主要按钮</k-button>
    <k-button type="success" plain>成功按钮</k-button>
    <k-button type="info" plain>信息按钮</k-button>
    <k-button type="warning" plain>警告按钮</k-button>
    <k-button type="danger" plain>危险按钮</k-button>
    <br />
    <br />
    <k-button round>圆角按钮</k-button>
    <k-button type="primary" round>主要按钮</k-button>
    <k-button type="success" round>成功按钮</k-button>
    <k-button type="info" round>信息按钮</k-button>
    <k-button type="warning" round>警告按钮</k-button>
    <k-button type="danger" round>危险按钮</k-button>
  </div>
</template>
<script lang="ts" setup>
import { k-button } from "kitty-ui";
</script>
<style>
.k-k-button {
  margin-right: 10px;
}
</style>
```

</details>

## 禁用状态

<div class="example">
    <div>
        <k-button disabled>禁用按钮</k-button>
        <k-button type="primary" disabled>主要按钮</k-button>
        <k-button type="success" disabled>成功按钮</k-button>
        <k-button type="info" disabled>信息按钮</k-button>
        <k-button type="warning" disabled>警告按钮</k-button>
        <k-button type="danger" disabled>危险按钮</k-button>
        <br>
        <br>
        <k-button disabled>禁用按钮</k-button>
        <k-button type="primary" disabled plain>主要按钮</k-button>
        <k-button type="success" disabled plain>成功按钮</k-button>
        <k-button type="info" disabled plain>信息按钮</k-button>
        <k-button type="warning" disabled plain>警告按钮</k-button>
        <k-button type="danger" disabled plain>危险按钮</k-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <k-button disabled>禁用按钮</k-button>
    <k-button type="primary" disabled>主要按钮</k-button>
    <k-button type="success" disabled>成功按钮</k-button>
    <k-button type="info" disabled>信息按钮</k-button>
    <k-button type="warning" disabled>警告按钮</k-button>
    <k-button type="danger" disabled>危险按钮</k-button>
    <br />
    <br />
    <k-button disabled>禁用按钮</k-button>
    <k-button type="primary" disabled plain>主要按钮</k-button>
    <k-button type="success" disabled plain>成功按钮</k-button>
    <k-button type="info" disabled plain>信息按钮</k-button>
    <k-button type="warning" disabled plain>警告按钮</k-button>
    <k-button type="danger" disabled plain>危险按钮</k-button>
  </div>
</template>
<script lang="ts" setup>
import { k-button } from "kitty-ui";
</script>
<style>
.k-k-button {
  margin-right: 10px;
}
</style>
```

</details>

## 调整尺寸

<div class="example">
    <div>
        <k-button>默认按钮</k-button>
        <k-button size="medium">中等按钮</k-button>
        <k-button size="small">小型按钮</k-button>
        <k-button size="mini">超小按钮</k-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <k-button>默认按钮</k-button>
    <k-button size="medium">中等按钮</k-button>
    <k-button size="small">小型按钮</k-button>
    <k-button size="mini">超小按钮</k-button>
  </div>
</template>
<script lang="ts" setup>
import { k-button } from "kitty-ui";
</script>
<style>
.k-k-button {
  margin-right: 10px;
}
</style>
```

</details>
