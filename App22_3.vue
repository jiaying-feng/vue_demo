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
  <Child>
    <!-- 登录页面 -->
    <!-- 头部：空（不需要） -->
    <template #header />

    <!-- 中间：登录表单 -->
    <div style="max-width: 400px; margin: 0 auto; text-align: center;">
      <h2>登录</h2>
      <input placeholder="用户名" style="width: 100%; padding: 10px; margin: 8px 0;" />
      <input placeholder="密码" type="password" 
             style="width: 100%; padding: 10px; margin: 8px 0;" />
      <button style="width: 100%; padding: 10px; background: #3498db; 
              color: #fff; border: none; border-radius: 4px; cursor: pointer;">
        登录
      </button>
    </div>

    <!-- 底部：简单文字 -->
    <template #footer>
      <p style="margin: 0;">还没账号？<a href="#" style="color: #3498db;">立即注册</a></p>
    </template>
  </Child>
</template>

<style scoped lang="scss">

</style>