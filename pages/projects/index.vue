<template>
  <div>
    <CardGrid
      type="Feature"
      :categories="PROJECT_CATEGORIES"
      :data="projectData"
    />
  </div>
</template>

<script setup>
import PROJECT_CATEGORIES from '~/constants/project_categories';

const projectData = [
  {
    title: 'Balloon Fight',
    image:
      'https://cdn.sanity.io/images/exj3bhzf/production/736302c62d76b32c9c2e7ebe1f4ff01bf1549f8c-1198x759.jpg',
    description: 'Fight balloons with swords, arrows, guns, staple gun...?',
    category: 'game',
  },
  {
    title: 'Cardinal Financial',
    image:
      'https://cdn.sanity.io/images/exj3bhzf/production/37b705f13c364d0599bb66aaf3d2ee717299a176-1905x943.png',
    description:
      'Collaborated with designers as a full stack engineer to build Cardinal Financials site during their rebranding.',
    category: 'website',
  },
  {
    title: 'FooMo',
    image:
      'https://cdn.sanity.io/images/exj3bhzf/production/3b2c89fdf4956c53a6dbb0d4461f9d0ae5514b3b-752x458.png',
    description:
      'Stalk your favorite food trucks with real-time updates and earn experience visiting them to unlock coupons.',
    category: 'app',
  },
  {
    title: 'The Programmer v2',
    image:
      'https://cdn.sanity.io/images/exj3bhzf/production/736302c62d76b32c9c2e7ebe1f4ff01bf1549f8c-1198x759.jpg',
    description:
      'Collaborated as the front end developer for a stock app that would display and predict stocks using JS and Python.',
    category: 'other',
  },
];

const filteredProjects = ref(projectData);

function handleActiveChange(category) {
  if (category.name === 'All') {
    filteredProjects.value = projectData;
    return;
  }

  filteredProjects.value = projectData.filter((project) => {
    return project.category === category.name.toLowerCase();
  });
}
</script>

<style scoped></style>
