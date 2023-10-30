<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<style scoped>
.page-container {
  @apply px-4 pt-8
          sm:pl-28 sm:pr-28 sm:pt-24 
          md:pl-28 md:pr-28 
          lg:pl-28 lg:pr-28;
}
</style>
