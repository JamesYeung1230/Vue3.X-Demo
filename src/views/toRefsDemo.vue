<template>
  <div>
    <p>toRefs demo {{ age }} {{ state.name }} {{ state.age }}</p>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
/**
 * toRef
 * 将一个响应式对象转换为普通对象
 * 对象的每个prop都是对应的ref
 * 两者保持引用关系
 */

/**
 * ref, toRef, toRefs使用总结
 * 用reactive做对象的响应式, 用ref做值的响应式
 * setup中返回toRefs/toRef
 * 合成函数(将通用逻辑抽离出来的函数)返回响应式对象时使用toRefs
 */

export default {
  name: "ToRefsDemo",
  setup() {
    const state = reactive({
      age: 18,
      name: "James",
    });

    const stateToRefs = toRefs(state);
    // const { name: nameRef, age: ageRef } = stateToRefs;

    setTimeout(() => {
      state.age = 16;
    }, 2000);

    setTimeout(() => {
      // ageRef.value = 20;
    }, 4000);

    return {
      state,
      ...stateToRefs,
      // nameRef,
      // ageRef,
    };
    // 直接解构state,会失去响应式
    // return {
    //   ...state
    // }
  },
};
</script>
