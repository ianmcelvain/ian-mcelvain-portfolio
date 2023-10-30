<template>
  <div>
    <NavBar />
    <Breadcrumbs
      v-show="breadcrumbs.length > 2"
      class="absolute top-8 left-64"
      :breadcrumbs="breadcrumbs"
    />
    <PageContainer>
      <slot />
    </PageContainer>
  </div>
</template>

<script setup>
import { useBreadcrumbs } from '../composables/useBreadcrumbs';

const { breadcrumbs } = useBreadcrumbs();
</script>

<style>
/* Layout margins to compensate sidebar width */
.navbar {
  @apply w-full sm:w-[150px] md:w-[150px] lg:w-[150px];
}
.page-container {
  @apply ml-0 sm:ml-[150px] md:ml-[150px] lg:ml-[150px];
}
</style>
