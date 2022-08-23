<template>
    <div class="upload-demo">
        <k-upload @getFilesList="getFilesList" drag multiple accept="image/*"></k-upload>
    </div>
</template>
<script lang="ts" setup>
const getFilesList = (files: File[]) => {
    console.log(files)
}
</script>
<style lang="less">
.upload-demo {
    width: 360px;
}
</style>
