<template>
  <div>
    <NavBar />
    <PageContainer>
      <Breadcrumbs
        v-show="breadcrumbs.length > 2"
        class="breadcrumbs"
        :breadcrumbs="breadcrumbs"
      />
      <slot />
    </PageContainer>
  </div>
</template>

<script setup>
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

.breadcrumbs {
  @apply relative top-0 left-0 py-4 
          sm:absolute sm:top-8 sm:left-64;
}
</style>
