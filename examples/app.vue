<template>
    <div class="upload-demo">
        <k-upload @getFilesList="getFilesList" multiple accept="image/*">
            <k-button type="primary" size="small">文件上传</k-button>
        </k-upload>
    </div>
</template>
<script lang="ts" setup>
const getFilesList = (files: File[]) => {
    console.log(files)
}
</script>
<style lang="less">
.upload-demo {
    width: 400px;
}
</style>
