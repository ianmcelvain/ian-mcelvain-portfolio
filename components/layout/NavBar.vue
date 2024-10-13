<template>
  <div
    id="navigation"
    class="navbar"
  >
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
const { path } = useRoute();

const pages = ref([
  {
    route: '/',
    name: 'Info',
    icon: 'feather:info',
  },
  {
    route: '/updates',
    name: 'Updates',
    icon: 'feather:edit',
  },
  {
    route: '/projects',
    name: 'Projects',
    icon: 'feather:archive',
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

// Set current page on initial site visit to active
pages.value.forEach((page) => {
  if (page.route === path) page.active = true;
});
</script>

<style scoped>
.navbar {
  @apply lg:top-0 lg:left-0 lg:flex lg:flex-col lg:h-screen
          mt-20 px-16 text-white fixed inline-flex flex-row bg-white bottom-0 z-20;
}
</style>
