<script lang="ts">
/**
 * ref
 * 生成值类型的响应式数据/获取Dom元素
 * 可用于模板和reactive
 * 通过 .value 修改值
 */
import { ref, reactive, onMounted } from "vue";
export default {
  name: "RefDemo",
  setup() {
    const ageRef = ref(20);
    const nameRef = ref("James");
    const elRef = ref(null);

    const state = reactive({
      name: nameRef,
      age: ageRef,
    });

    setTimeout(() => {
      ageRef.value = 25;
      nameRef.value = "Ben";
    }, 2000);

    onMounted(() => {
      console.log("elRef", elRef.value);
    });

    return {
      ageRef,
      nameRef,
      state,
      elRef,
    };
  },
};
</script>

<template>
  <div ref="elRef">ref demo {{ ageRef }} {{ state.name }}</div>
</template>
