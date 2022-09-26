<template>
    <div class="upload-demo">
        <k-upload @getFilesList="getFilesList" drag multiple accept="image/*"></k-upload>
        <Button></Button>
    </div>
</template>
<script lang="ts" setup>
import { Button } from 'kitty-ui'
const getFilesList = (files: File[]) => {
    console.log(files)
}
</script>
<style lang="less">
.upload-demo {
    width: 360px;
}
</style>
