<template>
  <div class="scope-app" id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMainStore } from "./store/test";

export default {
  computed: {
    ...mapState(useMainStore, ["foo"]),
  },
  mounted() {
    console.log(this.foo);
  },
};
</script>
