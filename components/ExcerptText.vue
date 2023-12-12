<template>
  <p class="text-sm text-gray-500">{{ text }}</p>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
