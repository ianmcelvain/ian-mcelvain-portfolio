<template>
  <div class="grid-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.grid-wrapper {
  @apply grid gap-12 mb-8 grid-cols-1 
          sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4;
}
</style>
