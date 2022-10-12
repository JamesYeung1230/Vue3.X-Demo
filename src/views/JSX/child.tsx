import { defineComponent } from "vue";

export default defineComponent({
  name: "ChildDemo",
  props: ["test"],
  emits: ["changeTest"],
  setup(props, { emit }) {
    const render = () => {
      return (
        <div onClick={() => emit("changeTest")}>This is Child {props.test}</div>
      );
    };
    return render;
  },
});
