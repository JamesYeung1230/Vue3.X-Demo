import { defineComponent, ref } from "vue";
import Child from "./child";

export default defineComponent(() => {
  const countRef = ref(11);

  const handleTestChange = () => {
    countRef.value = countRef.value + 1;
  };

  return () => {
    return (
      <>
        <div>jsx demo1 {countRef.value}</div>
        <Child test={countRef.value} onChangeTest={handleTestChange} />
      </>
    );
  };
});
// export default defineComponent({
//     name: "",
//     props: [],
//     setup() {}
// })

/**
 * defineComponent 参数
 * 1. setup 函数
 * 2. 组件配置项
 */
