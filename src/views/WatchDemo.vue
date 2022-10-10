<template>
  <div>
    <p>watch & watchEffect</p>
    <p>{{ numRef }}</p>
    <p>{{ name }} {{ age }}</p>
  </div>
</template>

<script lang="ts">
import { reactive, ref, toRefs, watch, watchEffect } from "vue-demi";
/**
 * watch 和 watchEffect 的区别
 * 两者都可以监听data属性的变化
 * watch需要明确监听那个属性
 * watchEffect会根据其中的属性,自动监听数据变化
 */
export default {
  name: "WtachDemo",
  setup() {
    const numRef = ref(100);
    const state = reactive({
      name: "james",
      age: 18,
    });

    watch(
      numRef,
      (newNum, oldNum) => {
        console.log("watch numRef", newNum, oldNum);
      },
      // {
      //   immediate: true,
      //   deep: true,
      // }
    );

    setTimeout(() => {
      numRef.value = 200
    }, 2000);

    watch(
      // 第一个参数,确定要监听那个属性
      () => state.age,
      // 第二个参数,回调函数
      (newAge, oldAge) => {
        console.log("watch state age", newAge, oldAge);
      }
    )

    setTimeout(() => {
      state.age = 16
    }, 1000);
    setTimeout(() => {
      state.name = "leo"
    }, 2000);

    watchEffect(() => {
      // watchEffect初始化时就会执行一次(收集需要监听的数据)
      console.log("hello watchEffect");
    })
    watchEffect(() => {
      console.log("watchEffect state name", state.name);
    })

    return {
      numRef,
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
