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
  @apply w-full sm:w-[90px] md:w-[90px] lg:w-[90px];
}
.page-container {
  @apply ml-0 sm:ml-[90px] md:ml-[90px] lg:ml-[90px];
}

.breadcrumbs {
  @apply relative top-0 left-0 py-4 
          sm:absolute sm:top-8 sm:left-56;
}
</style>
