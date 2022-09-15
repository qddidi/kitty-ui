<template>
    <div class="k-upload">
        <input type="file" :multiple="props.multiple" :accept="props.accept" ref="kIpt" @change="getFiles"
            v-show="false">
        <div @click="fileUpload" v-if="!props.drag">
            <slot />
        </div>
        <Drager v-else @getFilesList="getFilesList" @fileUpload="fileUpload" />
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
import { type } from 'os'
export default defineComponent({
    name: 'k-upload'
});
</script>
<script setup lang="ts">
import './style/index.less'
import { ref } from 'vue'
import Icon from '../icon/icon.vue'
import { uploadType } from './types'
import Drager from './dragger.vue'
export type Emits = {
    (e: 'getFilesList', value: File[]): void
}

const props = defineProps<{
    multiple: boolean,
    accept: string,
    drag: boolean
}>()
const kIpt = ref()

const emits = defineEmits<Emits>()
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

const getFilesList = (file: File[]) => {
    filesList.value = file
    emits('getFilesList', file)
}

</script>