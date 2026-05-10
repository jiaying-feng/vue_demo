<script setup lang="ts">
//问题：cNum能在子组件中使用吗？不能
//console.log(cNum);//报错：Cannot
interface CObjItf{
    age:number,
    gender:string
}
//子组件靠defineProps接收父组件中传来的值
const props=defineProps({
    //3在子组件中接受
    //基础数据类型
    cNum:Number,//不要用number(接口形式)
    cUsername:{//定义默认值
        type:String,
        default:"李四"

    },
  
  // 复杂的数据类型
  // as ()=>CObjItf表示类型断言，用于解决defineProps对复杂数据类型的类型推断
  cObj: {
    type: Object as ()=>CObjItf, // 明确类型
    // // 方法一：默认值
    // default(){
    //   return {
    //     age: 0,
    //     gender: '未知'
    //   }
    // },
    // // 方法二：父组件必须传递给子组件的属性，否则报错
    required: true//表示cObj必须传值
  }
})

// defineProps函数默认返回值是props，如果要在ts里使用这些属性，则需要用props获取
console.log(props.cNum);
console.log(props.cUsername);
console.log(props.cObj.age);
</script>

<template>
  <!-- 子组件 -->
  <p>子组件的num={{ cNum }}</p>
  <p>子组件的username={{ cUsername }}</p>
  <!-- cObj类型为Object,但不知道cObj是否有age/gender属性 -->
  <!-- 类型不明确-》自定义类型-》接口 -->
  <p>子组件的obj的age={{ cObj.age }}</p>
  <p>子组件的obj的gender={{ cObj.gender }}</p>
</template>
<style scoped lang="scss">
  
</style>
