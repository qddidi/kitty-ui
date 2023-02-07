<template>
    <div class="Shake-demo">
        <Shake>
            用户名：<input type="text" />
        </Shake>
        <br>
        <Shake v-model="trigger">
            密&nbsp;&nbsp;&nbsp;码：<input type="text" />
        </Shake>
        <br>
        <Button style="width:230px" type="primary" @click="trigger=true" size="small">登录</Button>
        <k-upload>111</k-upload>
    </div>
</template>
<script lang="ts" setup>
import { Shake, Upload, Button } from 'kitty-ui'
import { ref } from 'vue';
const trigger = ref(true)

</script>
<style lang="less">
.Shake-demo {
    width: 360px;
    padding: 350px;
}
</style>
