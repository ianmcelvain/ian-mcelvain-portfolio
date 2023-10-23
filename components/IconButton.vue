<template>
  <span :class="`sidebar-icon group ${orientation} ${active ? 'active' : ''}`">
    <Icon :icon="icon" :width="width" />
    <span :class="`sidebar-tooltip ${orientation}`">
      <slot />
    </span>
  </span>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  icon: {
    type: String,
    required: true,
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
.sidebar-icon {
  @apply relative flex items-center justify-center  h-12 w-12 
          text-gray-800 hover:scale-110
          hover:shadow-md cursor-pointer 
          hover:rounded-xl transition-all duration-200
          ease-linear bottom-2
          sm:bottom-0 md:bottom-0 lg:bottom-0;
}
.sidebar-icon.active {
  @apply shadow-md rounded-xl scale-110 bg-gray-800 text-white;
}
.sidebar-icon.horizontal {
  @apply mr-8 mb-4;
}
.sidebar-icon.vertical {
  @apply mx-auto my-4;
}
.sidebar-tooltip {
  @apply absolute w-auto p-2 m-2 min-w-max
          rounded-md shadow-md text-white bg-gray-800
          text-xs font-bold transition-all duration-100
          scale-0 origin-left group-hover:scale-100;
}
.sidebar-tooltip.horizontal {
  @apply top-12;
}
.sidebar-tooltip.vertical {
  @apply m-[-15px] p-0 bottom-0 shadow-none scale-100 text-gray-800 bg-transparent
          lg:left-14 lg:m-2 lg:p-2 lg:drop-shadow-md lg:scale-0 lg:text-white lg:bg-gray-800
          md:left-14 md:m-2 md:p-2 md:drop-shadow-md md:scale-0 md:text-white md:bg-gray-800
          sm:left-14 sm:m-2 sm:p-2 sm:drop-shadow-md sm:scale-0 sm:text-white sm:bg-gray-800;
}
</style>
