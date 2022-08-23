<template>
    <div class="k-upload">
        <input type="file" :multiple="props.multiple" :accept="props.accept" ref="kIpt" @change="getFiles"
            v-show="false">
        <div @click="fileUpload" v-if="!props.drag">
            <slot />
        </div>
        <div v-else class="k-upload-dragger" :class="{ ['k-upload-draggerenter']: isEnter }" ref="fileArea"
            @click="fileUpload">
            <div class="k-upload-content">
                <Icon class="k-upload-icon" :name="isEnter ? 'file-open' : 'folder-close'" />
                <div class="k-upload-dragger-text">将文件拖到此处或<em>点击上传</em></div>
            </div>
        </div>
        <div class="k-upload-list">
            <div class="k-upload-list_item" v-for="(item, index) in filesList" :key="index">
                <div class="k-upload-list_item-name">
                    {{ item.name }}
                </div>
                <div class="k-upload-list_item-status-label">
                    <Icon name="ashbin" @click="delFile(index)" />
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'k-upload'
});
</script>
<script setup lang="ts">
import { ref, defineEmits, defineProps, onMounted } from 'vue'
import Icon from '../Icon/icon.vue'
import './style/index.less'
import { uoloadType } from './types'
const props = defineProps(uoloadType)
const kIpt = ref()
const emits = defineEmits(['getFilesList'])
const filesList = ref<File[]>([])
const fileUpload = () => {
    kIpt.value.click()
}

const getFiles = (e: Event) => {

    const files = (e.target as HTMLInputElement).files
    if (!files) return

    filesList.value.push(...Array.from(files))
    emits('getFilesList', filesList.value)
}

const delFile = (index: number) => {
    filesList.value.splice(index, 1)
    emits('getFilesList', filesList.value)
}


const fileArea = ref()
const isEnter = ref(false)
onMounted(() => {
    if (!props.drag) return
    fileArea.value.addEventListener('drop', (e: any) => {
        e.preventDefault();
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