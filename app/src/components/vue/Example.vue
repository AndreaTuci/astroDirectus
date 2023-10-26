<template>
  <section class="vue-component">
    <h3>{{ title }}</h3>
  </section>
</template>

<style></style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const title = "Vue component";
    return {title}
  },
  methods: {},
  mounted() {},
});
</script>
