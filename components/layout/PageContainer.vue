<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<style scoped>
.page-container {
  @apply px-4 pt-8
          sm:pt-24
          lg:pl-36 lg:pr-36;
}
</style>
