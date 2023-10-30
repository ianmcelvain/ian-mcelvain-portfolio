<template>
  <span class="tagg">
    <slot />
  </span>
</template>

<script setup></script>

<style scoped>
.tagg {
  @apply whitespace-nowrap w-fit rounded-lg bg-gray-100 px-2.5 py-0.5 text-sm text-gray-700 lg:m-0;
}
</style>
