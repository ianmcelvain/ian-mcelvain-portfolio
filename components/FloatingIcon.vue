<template>
  <span class="floating-icon">
    <Icon
      :icon="icon"
      :width="width"
      class="icon"
    />
    <span
      v-if="title"
      class="title"
    >{{ title }}</span>
    <slot />
  </span>
</template>

<script setup>
import { Icon } from '@iconify/vue';

defineProps({
  icon: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: () => 20,
  },
  title: {
    type: String,
    default: () => '',
  },
});
</script>

<style scoped>
.floating-icon {
  @apply whitespace-nowrap flex rounded-2xl bg-white px-2.5 py-2.5
          text-sm mr-2 transition-all duration-300 hover:text-white
          hover:bg-gray-700 transform-gpu translate-y-0
          hover:-translate-y-1 ease-in-out;
}
.icon {
  @apply inline;
}
.title {
  @apply pl-1 font-medium;
}
</style>
