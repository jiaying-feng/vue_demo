<script setup lang="ts">
/**
 * 插槽作用：
 * 1 内容分发：父组件决定子组件某个区域显示的内容
 * 2 提高灵活性和复用性：同一套组件壳子，不同场景渲染不同内容（不用写多个组件）
 * 3 解耦UI与逻辑：子组件管：布局结构、交互逻辑、基础样式（骨架）
 *                父组件管：具体内容、自定义样式、业务数据（血肉）
 * 4 作用域通信（插槽作用域）：子组件把数据推送给父组件的插槽内容（反向数据流）
 */
import Child from "./App22_Child.vue"

</script>

<template>
  <!-- 后台管理系统 -->
  <Child>
    <!-- 头部：导航栏 -->
    <template #header>
      <nav style="display: flex; gap: 16px;">
        <span style="font-weight: bold; font-size: 18px;">后台管理</span>
        <a href="#">首页</a>
        <a href="#">用户</a>
        <a href="#">设置</a>
      </nav>
    </template>

    <!-- 中间：content内容 -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
      <div v-for="i in 3" :key="i" style="background: #e8f4fd; padding: 20px; border-radius: 8px;">
        数据卡片 {{ i }}
      </div>
    </div>

    <!-- 底部：版权 -->
    <template #footer>
      <p>© 2026 公司名 - 后台管理系统</p>
    </template>
  </Child>
</template>

<style scoped lang="scss">

</style>