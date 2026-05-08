<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue';

//set up 语法 入口函数
/*
生命周期函数:
1.setup:组件实例被创建前就被调用了，用于初始化组件状态，定义数据与方法
2.onBeforeMount:在组件编译后，挂载前被调用，即还未挂在到页面上（可以访问组件实例（数据源，函数，计算属性等），无法访问组件视图中的DOM元素）
3.onMounted:在组建挂在到DOM之后被调用（组件视图已经被渲染到实际的DOM上，可以访问到DOM节点和计算后的样式）
4.onBeforeUpdate:组件更新前被调用，常用于组件更新前的准备工作（可访问组件实例（数据源，函数，计算属性等）和更新前的DOM元素，无法访问更新后的DOM元素）
5.onUpdated:组件更新后被调用（可访问组件实例）（数据源，函数，计算属性等）和更新后的DOM元素
6.onBeforeUnmount:组件被卸载前可被调用（可访问组件实例（数据源，函数，计算属性等）和视图中的DOM元素），一般用于清除定时器，移出时间监听器等
7.onUnmount:组件被卸载后被调用（无法访问组件实例和DOM元素），一般用于执行资源释放和清理操作
*/
console.log("1:执行了setup函数1");
onBeforeMount(()=>{
    console.log("2:执行了onBeforeMount函数");
    
})
console.log("3:执行了setup函数1");
onMounted(()=>{
    console.log("4:执行了onMounted函数");
    
})
console.log("5:执行了setup函数1");



</script>

<template>
  
</template>

<style scoped lang="scss">

</style>