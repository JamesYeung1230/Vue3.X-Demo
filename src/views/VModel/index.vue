<template>
  <div>
    <p>{{ name }} {{ age }}</p>
    <UserInfo v-model:name="name" v-model:age="age" />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import UserInfo from "./UserInfo.vue";
export default {
  name: "VModel",
  components: { UserInfo },
  setup() {
    const state = reactive({
      name: 'james',
      age: 18
    })

    return toRefs(state);
  },
};
</script>
