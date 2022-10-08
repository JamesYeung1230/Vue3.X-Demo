<template>
  <p>lifecycles demo</p>
</template>

<!-- <script lang="ts">
export default {
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script> -->

<script lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue'
export default {
  setup() {
    onBeforeMount(() => {
      console.log("onBeforeMount");
    })
    onMounted(() => {
      console.log("onMounted");
    })
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    })
    onUpdated(() => {
      console.log("onUpdated");
    })
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    })
    onUnmounted(() => {
      console.log("onUnmounted");
    })
  }
}
</script>