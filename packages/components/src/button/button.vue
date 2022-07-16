<template>
    <button class="k-button" :class="styleClass">
        <slot />
    </button>
</template>

<script lang="ts">
import './style/index.less'
import { defineComponent, computed } from 'vue'
import { buttonProps } from './types'
export default defineComponent({
    name: 'k-button',
    props: buttonProps,
    setup(props) {
        console.log(props);

        const styleClass = computed(() => {
            const typeClass = props.type ? `k-button--${props.type}` : ""
            const plainClss = props.plain && props.type ? '--is-plain' : ''
            const roundClass = props.round ? 'is-round' : ''
            return {
                [`k-button--${props.type}`]: props.type,
                'is-plain': props.plain,
                'is-round': props.round
            }
        })

        return {
            styleClass
        };
    },
});
</script>
