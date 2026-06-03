<script setup lang="ts">
const username="张三"
const age=18
const gender="男"
const id="123"
</script>

<template>
    <p>子组件</p>
    <!--匿名插槽-->
    <slot :username="username" :age="age"></slot>
    <!--具名插槽-->
    <!--name="具名插槽名称"-->
    <slot name="user" :gender="gender" :id="id"></slot>
  
</template>

<style scoped lang="scss">
  
</style>