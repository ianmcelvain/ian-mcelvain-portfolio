<template>
  <IconButtonGroup :items="categories" @active-change="handleActiveChange" />
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

function handleActiveChange(item) {
  // TODO: filter projects here
}
</script>

<style scoped></style>
