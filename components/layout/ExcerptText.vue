<template>
  <p class="excerpt">
    {{ text }}
  </p>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.excerpt {
  @apply text-sm !m-0 text-gray-500;
}
</style>
