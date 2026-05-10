<script setup lang="ts">
import { ref } from 'vue';
import Child from './App13_Child.vue'

// 组件传值：子传父
let num = ref(1)

const changeNum = ()=>{
  num.value++
}
</script>

<template>
  <p>父组件</p>
  <p>父组件的num={{ num }}</p>
  <!-- @fn="changeNum" 表示事件绑定，把父组件的changeNum绑定给子组件的fn -->
  <!-- fn表示自定义事件 -->
  <Child :cNum="num" @fn="changeNum" />
  <button @click="num++">父组件的按钮+</button>
</template>

<style scoped lang="scss">
</style>