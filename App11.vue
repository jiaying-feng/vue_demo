<script setup lang="ts">
import {ref,watch,computed, reactive} from 'vue';
//计算属性：一个数据受到其他数据的影响，则需要放在计算属性中
let num=ref(1)
let dbNum=num.value*2//不是响应式
watch([num,()=>dbNum],(newVal,oldVal)=>{
    //[num,dbNum]更新后的值：（2）【2，undefined],更新前的值：（2）【1，unbdefined]
    //getter函数解决
    console.log("[num,dbNum]更新后的值：",newVal,",更新前的值:",oldVal);
    
})
//方法一：监听
watch(num,(newVal)=>{
    dbNum=newVal*2
})
//方法二：计算属性
//依赖发生变化就会重新计算，否则直接返回缓存结果
let dbNumComputed=computed(()=>{
    //计算属性返回值是响应式
    return num.value*2
})
watch([num,dbNumComputed],(newVal,oldVal)=>{
    //[num,dbNumComputed]更新后的值：（2）[3,6],更新前的值：（2）[2,4]]
    
    console.log("[num,dbNumComputed]更新后的值：",newVal,",更新前的值:",oldVal);
    
})
//复杂数据类型
let objReact=reactive({
    numX:1
})
let dbNumX=computed(()=>{
    return objReact.numX*2
})
watch([()=>objReact.numX,dbNumX],(newVal,oldVal)=>{
    //[num,dbNumComputed]更新后的值：（2）[3,6],更新前的值：（2）[2,4]]
    
    console.log("[num,dbNumComputed]更新后的值：",newVal,",更新前的值:",oldVal);
    
})

</script>

<template>
    <p> num:{{ num }}</p>
    <p> num:{{ dbNum }}</p>
    <button @click="num++">按钮</button>
    <p> num:{{ dbNumComputed }}</p>
    <p>objReact.numX:{{ objReact.numX }}</p>

  
</template>

<style scoped lang="scss">
  
</style>