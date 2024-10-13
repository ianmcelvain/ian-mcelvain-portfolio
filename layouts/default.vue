<template>
  <div class="wrapper">
    <NavBar />
    <PageContainer class="body">
      <Transition>
        <UBreadcrumb
          v-show="links.length > 1"
          class="absolute -mt-12 mb-8"
          :links="links"
          divider=" / "
        >
          <template #default="{ link }">
            <h4 class="mb-0">
              {{ link.label }}
            </h4>
          </template>
        </UBreadcrumb>
      </Transition>
      <slot class="content" />
    </PageContainer>
  </div>
</template>

<script setup>
const links = useBreadcrumbItems({
  hideRoot: true,
});
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

html,
body,
.body,
#__nuxt,
.wrapper {
  @apply mb-16 sm:mb-0 sm:h-full;
}

/* Layout margins to compensate sidebar width */
.navbar {
  @apply w-full lg:w-[90px];
}
.page-container {
  @apply ml-0 lg:ml-[90px];
}

.side-quest-easter-egg {
  @apply flex justify-end;
}

.word-pop {
  overflow: hidden;
  visibility: hidden;
}

.word-pop .word {
  display: inline-block;
  overflow: hidden;
}

.word-pop .letter {
  display: inline-block;
}
</style>
