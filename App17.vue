<script setup lang="ts">
import { ref } from 'vue';

/**
 * Vue内置指令:
 * 1 条件渲染: v-if  v-else  v-else-if  v-show
 */
let isShow = ref(true)
let num = ref(3)
</script>

<template>
  <p v-if="isShow">isShow为true时展示</p>
  <p v-else>isShow为false时展示</p>
  <button @click="isShow=!isShow">改变isShow的值</button>

  <p v-if="num===1">展示1</p>
  <p v-else-if="num===2">展示2</p>
  <p v-else>展示其他</p>

  <p v-show="isShow">展示内容</p>
  <!--
  v-if需要动态创建或销毁DOM节点, 切换开销大, 适用于条件极少改变的场景
  v-show通过修改元素的display样式控制显示和隐藏, 切换开销小, 适用于条件频繁切换的场景
  -->

  <p style="display: block;">显示</p>
  <p style="display: none;">隐藏</p>
</template>

<style scoped lang="scss">
</style>