<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

// 定义属性
defineProps({
  name: {
    type: String,
    default: "default name",
  },
  age: Number,
});
// 定义事件
const emit = defineEmits(["change", "reset"]);

function handleReset() {
  emit("reset", 16)
}

const childInfo = ref(10)

defineExpose({
  childInfo
})

</script>

<template>
  <p>child demo</p>
  <p>{{ name }} {{ age }}</p>
  <button @click="$emit('change')">change</button>
  <button @click="handleReset">reset</button>
</template>
