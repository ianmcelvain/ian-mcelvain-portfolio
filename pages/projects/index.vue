<template>
  <div>
    <IconButtonGroup :items="categories" @active-change="handleActiveChange" />

    <div class="project-grid">
      <FeatureCard
        image="https://cdn.sanity.io/images/exj3bhzf/production/736302c62d76b32c9c2e7ebe1f4ff01bf1549f8c-1198x759.jpg"
        title="Balloon Fight"
        description="Fight balloons with swords, arrows, guns, staple gun...?"
      />
      <FeatureCard
        image="https://cdn.sanity.io/images/exj3bhzf/production/736302c62d76b32c9c2e7ebe1f4ff01bf1549f8c-1198x759.jpg"
        title="Balloon Fight"
        description="Fight balloons with swords, arrows, guns, staple gun...?"
      />
    </div>
  </div>
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

<style scoped>
.project-grid {
  @apply grid gap-12 my-8 grid-cols-1 
          sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4;
}
</style>
