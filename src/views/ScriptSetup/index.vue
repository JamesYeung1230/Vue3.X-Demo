<script setup lang="ts">
/**
 * script setup 在 Vue3.2 开始出现, 并非新功能,只是一种语法糖
 * 顶级变量, 自定义组件可直接应用于模板
 * 可正常使用ref, reactive, computed等功能
 * 可以与其他<script>同时使用
 * 利用defineProps, defineEmits处理属性和事件
 * 利用defineExpose暴露组件信息
 */

import { onMounted, reactive, ref, toRefs } from "vue-demi";
import ChildDemo from "./ChildDemo.vue"

 const countRef = ref(100)
 const state = reactive({
  name: "james",
  age: 18
 })
 const {name, age} = toRefs(state)

 function handleChildChange() {
  age.value++
 }
 function handleReset(val) {
  age.value = val
 }

 const childRef = ref(null)

 onMounted(() => {
  console.log("childRef", childRef.value, childRef.value?.childInfo);
 })

</script>

<template>
  <div>script setup demo</div>
  <p>{{ countRef }}</p>
  <p>{{ name }}</p>
  <ChildDemo ref="childRef" :age="age" @change="age++" @reset="handleReset" />
</template>