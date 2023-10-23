<template>
  <Tooltip :title="text" :disabled="!text">
    <Icon
      :icon="icon"
      :width="width"
      :class="`icon ${orientation} ${active ? 'active' : ''}`"
    />
  </Tooltip>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
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
    default: 44,
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
.icon {
  @apply h-12 w-12 
          text-gray-800 hover:scale-110 hover:shadow-md cursor-pointer 
          hover:rounded-xl transition-all duration-200 ease-linear;
}
.icon.active {
  @apply shadow-md rounded-xl scale-110 bg-gray-800 text-white;
}
</style>
