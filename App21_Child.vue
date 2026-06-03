<script setup lang="ts">

</script>

<template>
  <p>子组件</p>
  <!--匿名/默认插槽
  1 一个组件有且仅有一个匿名/默认插值
  2 匿名插槽只接受没有name属性的插槽，即他不会接收具名插槽

  slot表示插槽，子组件中预留的“占位符”
  在子组件中设置的接受父组件传来的内容
  
  
  -->
  <slot></slot>
  <!--具名插槽-->
   <!--子组件中定义2个分别名为h1和btn的插槽-->
  <slot name="btn"></slot>
  <slot name="b"></slot>
  <slot name="h1"></slot>
</template>

<style scoped lang="scss">
  
</style>