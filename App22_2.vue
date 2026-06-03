<script setup lang="ts">
/**
 * 插槽作用：
 * 1 内容分发：父组件决定子组件某个区域显示的内容
 * 2 提高灵活性和复用性：同一套组件壳子，不同场景渲染不同内容（不用写多个组件）
 * 3 解耦UI与逻辑：子组件管：布局结构、交互逻辑、基础样式（骨架）
 *                父组件管：具体内容、自定义样式、业务数据（血肉）
 * 4 作用域通信（插槽作用域）：子组件把数据推送给父组件的插槽内容（反向数据流）
 */
import { ref } from "vue";
import Child from "./App22_Child.vue"
const posts = ref([
  { id: 1, title: 'Vue3 插槽详解', summary: '一文搞懂 slot...' },
  { id: 2, title: 'TypeScript 进阶', summary: '泛型、工具类型...' },
])

</script>

<template>
  <Child>
    <!-- 博客页面 -->
    <!-- 头部：网站标题 -->
    <template #header>
      <h1 style="margin: 0; color: #e74c3c;">📝 我的博客</h1>
    </template>

    <!-- 中间：文章列表 -->
    <div style="max-width: 800px; margin: 0 auto;">
      <article v-for="post in posts" :key="post.id" style="margin-bottom: 24px; 
      padding-bottom: 24px; border-bottom: 1px solid #eee;">
        <h2>{{ post.title }}</h2>
        <p style="color: #666;">{{ post.summary }}</p>
      </article>
    </div>

    <!-- 底部：社交链接 -->
    <template #footer>
      <div style="display: flex; gap: 12px; justify-content: center;">
        <span>GitHub</span>
        <span>Twitter</span>
        <span>Email</span>
      </div>
    </template>
  </Child>
</template>

<style scoped lang="scss">

</style>