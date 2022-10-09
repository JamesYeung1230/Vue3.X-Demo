<template>
  <div>
    <p>logic multiplexing demo {{ x }} {{ y }}</p>
    <!-- <p>{{ state.x }} {{ state.y }}</p> -->
  </div>
</template>

<script lang="ts">
/**
 * Composition API实现逻辑复用
 * 抽离逻辑代码到一个函数
 * 函数命名约定为useXxxx(同React Hooks)
 */
import useMousePosition from "@/hooks/useMousePosition";
// import useMousePosition2 from "@/hooks/useMousePosition";
export default {
  setup() {
    const { x, y } = useMousePosition();

    return {
      x,
      y,
    };

    // const state = useMousePosition2();
    // return { state };
  },
};
</script>
