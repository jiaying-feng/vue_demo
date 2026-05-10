<script setup lang="ts">
import {ref} from 'vue';
//1
import Child from "./App14_Child.vue"
//组件传值：v-model
//v-model定义的父传子和传统方法一致，但是子传父不需要在父组件中提供修改父组件属性的方法
let num=ref(1)
/**
 * 总结：
 * 1传统父子传值：
 * 单向数据流（父传子/子传父），一般用于非表单和传递复杂数据
 * 2.v-model:
 * 相当于实现了双向数据绑定（父子组件中的数据进行同步），一般用于表单的输入（双向数据绑定）和多属性的双向数据绑定
 */
</script>

<template>
    <p>父组件</p>
    <p>父组件的num={{num}}</p>
    <!--2-->
    <Child v-model:cNum="num"></Child>
    <button @click="num++">父组件的按钮</button>
  
  
</template>

<style scoped lang="scss">
  
</style>