import { ref, onMounted, onUnmounted, reactive } from "vue";
function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function updatePosition(ev) {
    x.value = ev.pageX;
    y.value = ev.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", updatePosition);
  });
  onUnmounted(() => {
    window.removeEventListener("mousemove", updatePosition);
  });
  return {
    x,
    y,
  };
}

export default useMousePosition;

// function useMousePosition2() {
//   const state = reactive({
//     x: 0,
//     y: 0,
//   });

//   function updatePosition(ev) {
//     state.x = ev.pageX;
//     state.y = ev.pageY;
//   }

//   onMounted(() => {
//     window.addEventListener("mousemove", updatePosition);
//   });
//   onUnmounted(() => {
//     window.removeEventListener("mousemove", updatePosition);
//   });

//   return state;
// }

// export default useMousePosition2;
