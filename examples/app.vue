<template>
    <div class="upload-demo">
        <Upload @getFilesList="getFilesList" accept="" drag=""></Upload>
        <Shake>123</Shake>

    </div>
</template>
<script lang="ts" setup>
import { Shake, Upload } from 'kitty-ui'
const getFilesList = (files: File[]) => {
    console.log(files)
}
</script>
<style lang="less">
.upload-demo {
    width: 360px;
}
</style>
