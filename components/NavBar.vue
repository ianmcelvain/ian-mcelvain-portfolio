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
const props = defineProps({
  width: {
    type: Number,
    default: () => 150,
  },
});

const { path } = useRoute();

const pages = ref([
  {
    route: '/',
    name: 'Information',
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
          md:top-0 md:left-0 md:flex md:flex-col md:h-screen
          sm:top-0 sm:left-0 sm:flex sm:flex-col sm:h-screen
          mt-20 text-white fixed inline-flex flex-row bg-white bottom-0 z-20;
}
</style>
