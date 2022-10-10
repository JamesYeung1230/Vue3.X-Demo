<template>
  <div>GetInstance</div>
</template>

<script lang="ts">
/**
 * setup 函数中获取组件实例
 * 在setup或其他Composition Api中没有this
 * 可以通过getCurrentInstance获取当前实例
 * Options Api中可照常使用
 */
import { getCurrentInstance, onMounted } from "vue";
export default {
  name: "GetInstance",
  data() {
    return {
      demo: 0,
    };
  },
  setup() {
    console.log("this in setup", this);
    onMounted(() => {
      console.log("this in onMounted", this);
      console.log("data demo in onMounted", instance?.data.demo);
    });

    const instance = getCurrentInstance();
    console.log("instance", instance);
    console.log("data demo", instance?.data.demo);
  },
};
</script>

<style></style>
