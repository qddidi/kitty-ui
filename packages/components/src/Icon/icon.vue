<template>
    <div class="kitty-icon">
        <svg class="icon" :style="iconColor" aria-hidden="true">
            <use :xlink:href="iconName"></use>
        </svg>
        <div v-if="dot" class="kitty-info" :class="styleDot">{{ badge }}</div>
    </div>
</template>
 <script lang="ts">
 import './font/iconfont.js'
 import './style/index.less'
 import { defineComponent, computed } from 'vue'
 import { iconProps } from './types'
 export default defineComponent({
     props: iconProps,
     setup(props) {
         const iconName = computed(() => {
             return `#kitty-${props.name}`
         })
         const styleDot = computed(() => {
             return {
                 [`kitty-dot`]: props.dot && !props.badge
             }
         })
         const badge = computed(() => {
             return props.badge
         })
 
         const iconColor = computed(() => {
             return {
                 color: props.color
             }
         })
         return {
             iconName,
             styleDot,
             badge,
             iconColor
         };
     },
 });
 </script>