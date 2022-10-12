<script lang="tsx">
import { ref } from 'vue'
export default {
  name: "JSX-demo1",
  setup() {
    const countRef = ref(10)

    return () => {
      return <div>jsx demo1 {countRef.value}</div>
    }
  }
}
</script>