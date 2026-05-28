<script setup lang="ts">
import {ref} from 'vue'
/**
 * Vue内置指令:
 * 1 条件渲染: v-if  v-else  v-else-if  v-show
 * 2 数据插入: v-text  v-html (不常用)
 *    v-text:用于将指定的数据对象的值作为文本插入元素中, 简化模板中对数据的输出
 *    v-html:用于将指定的数据对象的值作为html代码插入元素, 可以渲染html标签和属性
 * 3 循环渲染:  v-for
 * 4 属性绑定:  v-bind  简化: :cNum="num"  :cContent="content"
 * 5 事件绑定:  v-on   简化@  @clcik="num++"  @clcik="hdClick"
 */
let url1 = "https://www.baidu.com/"
let url2 = "https://www.taobao.com/"
let fSzie = 30
let fWeight = "bold"
let num=ref(1)
const hdClick=()=>{
    num.value++
}
</script>

<template>
  <!-- v-bind表示将变量绑定到标签属性上 -->
  <p><a v-bind:href="url1">百度一下</a></p>
  <p><a :href="url2">淘宝一下</a></p>

  <p style="font-size: 30px; font-weight: bold;">展示1</p>

  <!-- 报错: :style表示属性绑定, 引号内的表达式均为js, 而不是css
       绑定style的总结:
       1 引号内写js, 而不是css (引号内用{}, 样式之间逗号隔开)
       2 动态值要用js拼接(30px 写成 fSzie + 'px' 形式)
       3 css属性要用驼峰命名, 或用字符串键名+引号形式
  -->
  <p :style="{fontSize: fSzie + 'px', fontWeight: fWeight}">展示2</p>
  <p :style="{'font-size': fSzie + 'px', 'font-weight': fWeight, 'color': 'red'}">展示3</p>
  <p :style="{'font-size': fSzie + 'px', 'font-weight': fWeight, 'color': 'green'}">展示4</p>
<hr>

<!--v-on表示将事件绑定，用于监听DOM事件并执行逻辑代码-->
<p>{{ num }}</p>
<button v-on:click="num++">按钮1</button>
<button @click="num++">按钮2</button>
<button @click="hdClick">按钮3</button>

</template>

<style scoped lang="scss">
</style>