<template>
  <span :class="`tooltip-content group ${orientation}`">
    <slot />
    <span v-show="!disabled" :class="`tooltip ${orientation}`">
      {{ title }}
    </span>
  </span>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  orientation: {
    type: String,
    default: 'horizontal',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.tooltip-content {
  @apply relative flex items-center justify-center p-2
          bottom-2 sm:bottom-0 md:bottom-0 lg:bottom-0;
}
.tooltip-content.horizontal {
  @apply mr-8 mb-4;
}
.tooltip {
  @apply absolute w-auto p-2 m-2 min-w-max
          rounded-md shadow-md text-white bg-gray-800
          text-xs font-bold transition-all duration-100
          scale-0 origin-left group-hover:scale-100;
}
.tooltip.horizontal {
  @apply top-12;
}
.tooltip.vertical {
  @apply m-[-15px] p-0 bottom-0 shadow-none scale-100 text-gray-800 bg-transparent
          lg:left-14 lg:m-2 lg:p-2 lg:drop-shadow-md lg:scale-0 lg:text-white lg:bg-gray-800
          md:left-14 md:m-2 md:p-2 md:drop-shadow-md md:scale-0 md:text-white md:bg-gray-800
          sm:left-14 sm:m-2 sm:p-2 sm:drop-shadow-md sm:scale-0 sm:text-white sm:bg-gray-800;
}
</style>
