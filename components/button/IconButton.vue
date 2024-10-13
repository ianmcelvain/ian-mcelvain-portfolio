<template>
  <Tooltip
    :title="text"
    :orientation="orientation"
    :disabled="!text"
    :class="`button-tooltip ${orientation} ${active ? 'active' : ''}`"
  >
    <Icon
      :icon="icon"
      :width="width"
      :class="`icon ${orientation} ${active ? 'active' : ''}`"
    />
  </Tooltip>
</template>

<script setup>
import { Icon } from '@iconify/vue';

defineProps({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
  width: {
    type: Number,
    default: 32,
  },
  orientation: {
    type: String,
    default: 'horizontal',
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.button-tooltip {
  @apply text-gray-800 hover:scale-110 hover:shadow-md cursor-pointer
          hover:rounded-xl transition-all duration-200 ease-linear;
}
.button-tooltip.active {
  @apply shadow-md rounded-xl scale-110 bg-gray-800 text-white;
}
</style>
