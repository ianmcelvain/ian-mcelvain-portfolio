<template>
  <div class="flex">
    <NavBar />
    <Breadcrumbs
      v-show="route.path !== '/'"
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

const route = useRoute();
const { breadcrumbs } = useBreadcrumbs();
</script>

<style scoped></style>
