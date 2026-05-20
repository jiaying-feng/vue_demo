<script setup lang="ts">
/*
 * Vue内置指令:
 * 1 条件渲染: v-if  v-else  v-else-if  v-show
 * 2 数据插入: v-text  v-html (不常用)
 *    v-text: 用于将指定的数据对象的值作为文本插入元素中, 简化模板中对数据的输出
 *    v-html: 用于将指定的数据对象的值作为html代码插入元素, 可以渲染html标签和属性
 */
let msg = "helloworld"
let htmlmsg = "<b>加粗后的helloworld</b>"
</script>

<template>
  <p>展示msg内容: <span v-text="msg"></span></p>
  <!-- 一般用这种方法 -->
  <p>展示msg内容: {{ msg }}</p>
  <!--
  v-html容易受到攻击: 跨站脚本攻击 (XSS)
  -->
  <p v-html="htmlmsg"></p>
</template>

<style scoped lang="scss">
</style>