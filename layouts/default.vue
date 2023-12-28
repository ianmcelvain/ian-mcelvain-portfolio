<template>
  <div class="wrapper">
    <NavBar />
    <PageContainer class="body">
      <UBreadcrumb
        v-show="links.length > 1"
        class="mb-4 !text-sm"
        :links="links"
        divider="/"
      >
        <!-- <template #icon="{ link, index, isActive }">
          <UIcon v-if="link.icon" :name="link.icon" dynamic />
        </template> -->
        <template #default="{ link, isActive, index }">
          <span
            :class="`breadcrumb ${
              isActive ? 'text-neutral-900' : 'text-neutral-500'
            }`"
          >
            {{ link.label }}
          </span>
        </template>
      </UBreadcrumb>
      <slot class="content" />
    </PageContainer>
  </div>
</template>

<script setup>
const links = useBreadcrumbItems({ hideRoot: true });
</script>

<style>
html,
body,
#__nuxt,
.wrapper,
.body {
  @apply h-full;
}

/* Layout margins to compensate sidebar width */
.navbar {
  @apply w-full sm:w-[90px] md:w-[90px] lg:w-[90px];
}
.page-container {
  @apply ml-0 sm:ml-[90px] md:ml-[90px] lg:ml-[90px];
}

.breadcrumbs {
  @apply relative top-0 left-0 py-4 
          sm:absolute sm:top-8 sm:left-60;
}
.breadcrumb {
  @apply text-sm font-normal no-underline hover:underline active:underline 
          whitespace-nowrap outline-secondary-600;
}

.side-quest-easter-egg {
  @apply flex justify-end;
}
</style>
