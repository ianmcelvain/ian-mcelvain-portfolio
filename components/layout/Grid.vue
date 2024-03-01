<template>
  <div :class="`grid-wrapper ${size}`">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'medium',
  },
});
</script>

<style scoped>
.grid-wrapper.small {
  @apply grid gap-12 mb-8 grid-cols-1 
          sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4;
}
.grid-wrapper.medium {
  @apply grid gap-12 mb-8 grid-cols-1 
          sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3;
}
.grid-wrapper.large {
  @apply grid gap-12 mb-8 grid-cols-1 
          sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2;
}
</style>
