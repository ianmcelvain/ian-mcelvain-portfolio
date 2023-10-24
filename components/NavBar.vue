<template>
  <div id="navigation" class="navbar">
    <NuxtLink
      v-for="page in pages"
      :key="page.route"
      :to="page.route"
      class="mx-auto my-4"
      @click="handleClick(page)"
    >
      <IconButton
        :icon="page.icon"
        :text="page.name"
        :width="32"
        orientation="vertical"
        :active="page.active"
      >
        {{ page.name }}
      </IconButton>
    </NuxtLink>
  </div>
</template>

<script setup>
const pages = ref([
  {
    route: '/',
    name: 'Information',
    icon: 'mdi:information-outline',
    active: true,
  },
  {
    route: '/updates',
    name: 'Updates',
    icon: 'mdi:file-document-edit-outline',
  },
  {
    route: '/projects',
    name: 'Projects',
    icon: 'mdi:archive-outline',
  },
]);

function resetActivePages() {
  pages.value.forEach((page) => {
    delete page.active;
  });
}

function handleClick(page) {
  resetActivePages();
  page.active = true;
}
</script>

<style scoped>
.navbar {
  @apply lg:top-0 lg:left-0 lg:flex lg:flex-col lg:h-screen lg:w-[150px]
          md:top-0 md:left-0 md:flex md:flex-col md:h-screen md:w-[150px]
          sm:relative sm:top-0 sm:left-0 sm:flex sm:flex-col sm:h-screen sm:w-[150px] sm:justify-normal
          fixed mt-20 text-white inline-flex w-full flex-row bg-white bottom-0 z-20 justify-around;
}
</style>
