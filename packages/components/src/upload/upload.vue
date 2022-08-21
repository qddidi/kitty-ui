<template>
    <div class="k-upload">
        <input type="file" :multiple="props.multiple" :accept="props.accept" ref="kIpt" @change="getFiles"
            v-show="false">
        <div @click="fileUpload">
            <slot />
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
import { ref, defineEmits, defineProps } from 'vue'
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
    console.log(filesList.value);

    emits('getFilesList', filesList.value)
}

const delFile = (index: number) => {
    filesList.value.splice(index, 1)
}
</script>