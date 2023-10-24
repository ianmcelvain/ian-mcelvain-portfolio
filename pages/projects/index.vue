<template>
  <IconButtonGroup :items="categories" />
</template>

<script setup>
const categories = ref([
  {
    name: 'All',
    icon: 'mdi:layers-triple-outline',
  },
  {
    name: 'Game',
    icon: 'mdi:controller-classic-outline',
  },
  {
    name: 'App',
    icon: 'mdi:cellphone',
  },
  {
    name: 'Website',
    icon: 'mdi:web',
  },
]);
</script>

<style scoped></style>
