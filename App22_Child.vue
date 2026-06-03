<script setup lang="ts">
// 子组件管：布局（上中下三栏结构）、基础样式
// 不管每个区域放了什么内容
</script>

<template>
    <div class="layout">
        <!-- 上中下经典布局 -->
        <header class="layout-header">
            <slot name="header"></slot>
        </header>
        
        <main class="layout-main">
            <slot></slot>
        </main>

        <footer class="layout-footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped lang="css">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.layout-header {
  background: #f5f5f5;
  padding: 16px 24px;
}
.layout-main {
  flex: 1;
  padding: 24px;
}
.layout-footer {
  background: #333;
  color: #fff;
  padding: 16px 24px;
  text-align: center;
}
</style>