<template>
  <div>
    <p>toRef demo {{ ageRef }} {{ state.name }} {{ state.age }}</p>
  </div>
</template>

<script lang="ts">
import { reactive, toRef } from "vue";
/**
 * toRef
 * 针对一个响应式对象(reactive封装)的prop
 * 创建一个ref, 具有响应式
 * 两者保持引用关系
 */
export default {
  name: "ToRefDemo",
  setup() {
    const state = reactive({
      age: 18,
      name: "James",
    });

    const ageRef = toRef(state, "age");

    setTimeout(() => {
      state.age = 16;
    }, 2000);

    setTimeout(() => {
      ageRef.value = 20;
    }, 4000);

    return {
      state,
      ageRef,
    };
  },
};
</script>
