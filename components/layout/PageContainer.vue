<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<style scoped>
.page-container {
  @apply w-full px-4 pt-8 
          sm:pl-32 sm:pr-12 sm:pt-24 
          md:pl-32 md:pr-12 
          lg:pl-32 lg:pr-12;
}
</style>
