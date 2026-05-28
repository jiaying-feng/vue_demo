<script setup lang="ts">
import { onBeforeMount, onMounted, reactive } from 'vue';

interface NewsItf {
  title: string;
  content: string[];
  isStrong: boolean;
  curIndex: number;
  timer: null | number;
}

// 课堂练习：
let news = reactive<NewsItf[]>([
  {
    title: "财经",
    content: [
      "前5月全国规模以上工业企业利润增长18.2%",
      "“双顺差”持续！海力士/美光等被收万亿韩元",
      "外资经济学家称“我们在制造业怎么买？”"
    ],
    isStrong: true,
    curIndex: 0,
    timer: null
  }
])

const fSize = 18;

// 实现功能：每隔2秒修改curIndex的值
// 组件挂载后，为每个主题添加定时器
onMounted(() => {
  // 为每一个主题创建定时器
  news.forEach(ele => {
    // setInterval(执行间隔函数, 延迟多少毫秒) 创建定时器
    ele.timer = setInterval(() => {
      // Math.random() 随机生成范围[0,1)
      // Math.random() * ele.content.length 随机生成范围[0,content数组元素个数) 小数
      // Math.floor() 表示向下取整
      ele.curIndex = Math.floor(Math.random() * ele.content.length)
    }, 2000)
  })
})

// onBeforeMount 移除监听器/定时器
onBeforeMount(() => {
  news.forEach(ele => {
    if (ele.timer) {
      // clearInterval表示移除定时器
      clearInterval(ele.timer)
    }
  })
})
</script>

<template>
  <ul style="list-style-type: none;" class="news-container">
    <li v-for="(item, index) in news" :key="index"
        :style="{fontWeight: item.isStrong ? 'bold' : 'normal', fontSize: fSize + 'px'}">
      {{ item.title }}: {{ item.content[item.curIndex] }}
    </li>
  </ul>
</template>

<style scoped lang="css">
.news-container {
  width: 800px;
  text-align: left;
}
</style>