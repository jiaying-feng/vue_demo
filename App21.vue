<script setup lang="ts">
/**
 * Vue内置指令
 * 1 条件渲染：v-if v-else v-else-if v-show
 * 2 数据插入：v-text v-html(不常用)
 *      v-text:用于将指定的数据对象的值作为文本插入元素中，简化模板中对数据的输出
 *      v-html:用于将指定的数据对象的值作为html代码插入元素，可以渲染html标签和属性
 * 3 循环渲染：v-for
 * 4 属性绑定：v-bind 简写为： 如 ：cNum="num"    :cContent="content"
 * 5 事件绑定：v-on   简写为@  如  @click="num++" @click="num++"
 * 6 插槽：v-slot    简写为#
 * 
 * 插槽：是一种让父组件向子组件传递内容的机制，可以在子组件中预留“占位符”中插入任意内容
 * 
 * 
 * 
 */
 import Child from "./App21_Child.vue"
</script>

<template>
      <div style="margin-bottom: 10px; font-size: 16px;">
        </div>
  <p>父组件</p>
  <child>
    <!--匿名/默认插槽-->
    <!--看不到的，需要在子组件中设置插槽接受父组件的标签 -->
    <h1>父组件的标题1</h1>
    <button>父组件按钮1</button>
  </child>

  <child>
    <!--具名插槽
    1 传递的内容必须包裹在template中
    2 必须用v-slot:(或#)指定插槽的名称
    3 子组件定义插槽时通过slot标签中name属性预留位置，父组件指定要填充哪个插槽
     4 展示到界面上的布局与父组件中的顺序无关，只与子组件预留的位置有关
     -->
    <!-- v-slot:命名  这个插槽的名字为h1 -->
    <template v-slot:h1>
      <h1>父组件的标题2</h1>
    </template>
    <!-- v-slot:命名 这个插槽的名字为btn -->
    <template v-slot:btn>
      <button>父组件的按钮2</button>
    </template>
    <!-- v-slot:可以简写为# -->
    <template #b>
      <b>父组件加粗内容</b>
    </template>
  </Child>
</template>

<style scoped lang="scss">

</style>

