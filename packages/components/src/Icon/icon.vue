<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>

</template>
 <script lang="ts">
 import './font/iconfont.js'
 import './style/index.less'
 import { defineComponent, computed } from 'vue'
 export default defineComponent({
     props: ['name'],
     setup(props) {
         const iconName = computed(() => {
             return `#kitty-${props.name}`
         })
         return {
             iconName
         };
     },
 });
 </script>