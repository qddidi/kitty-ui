<template>
    <div class="k-upload-dragger" :class="{ ['k-upload-draggerenter']: isEnter }" ref="fileArea"
        @click="emits('fileUpload')">
        <div class="k-upload-content">
            <Icon class="k-upload-icon" :name="isEnter ? 'file-open' : 'folder-close'" />
            <div class="k-upload-dragger-text">将文件拖到此处或<em>点击上传</em></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import './style/drag.less'
import { ref, onMounted } from 'vue'
import Icon from '../Icon/icon.vue'
const emits = defineEmits(['getFilesList', 'fileUpload'])
const fileArea = ref()
const isEnter = ref(false)
const filesList = ref<File[]>([])
onMounted(() => {
    fileArea.value.addEventListener('drop', (e: any) => {
        e.preventDefault()
        filesList.value.push(...Array.from(e.dataTransfer.files as FileList))
        emits('getFilesList', filesList.value)

    }, false)
    fileArea.value.addEventListener('dragover', (e: Event) => {
        e.preventDefault();

    }, false)
    fileArea.value.addEventListener('dragenter', (e: Event) => {
        isEnter.value = true
        e.preventDefault();

    }, false)
    fileArea.value.addEventListener('dragleave', (e: Event) => {
        isEnter.value = false
        e.preventDefault();

    }, false)
})
</script>