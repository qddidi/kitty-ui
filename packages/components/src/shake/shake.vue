<template>
    <div class="k-shake" :class="{['k-shakeactive']:props.trigger}">
        <slot />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import './style/index.less'
export default defineComponent({
    name: 'k-shake'
});
</script>
<script lang='ts' setup>

type ShakeProps = {
    trigger: boolean
}
const props = defineProps<ShakeProps>()


</script>
