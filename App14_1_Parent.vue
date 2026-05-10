<script setup lang="ts">
//随堂练习：实现功能：输入框在子组件，父组件实时获取输入框中的内容
//方法一：
import {ref} from "vue";
import Child from "./App14_1_Child.vue"
let content =ref("")
</script>

<template>
    <p>父组件的content={{ content }}</p>
    <Child v-model:cContent="content"></Child>
  
</template>

<style scoped lang="scss">
  
</style>