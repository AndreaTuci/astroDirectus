<template>
  <section class="vue-component">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(item, index) in items.data" :key="index">
        {{ item.id }}

      </li>
    </ul>

  </section>
</template>

<style></style>


<script setup lang="ts" async>
const title = "Vue component";
const response = await fetch("http://directus.localhost:8055/items/test")
const items = await response?.json();
</script>
