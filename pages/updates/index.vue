<template>
  <div>
    <CardGrid type="Blog" :categories="UPDATE_CATEGORIES" :data="updateData" />
  </div>
</template>

<script setup>
import UPDATE_CATEGORIES from '~/constants/update_categories';

const updateData = [
  {
    title: 'Balloon Fight',
    image:
      'https://cdn.sanity.io/images/exj3bhzf/production/736302c62d76b32c9c2e7ebe1f4ff01bf1549f8c-1198x759.jpg',
    excerpt: 'Better animations, better systems, Papa Johnss...',
    category: 'development',
    tag: 'Balloon Fight',
    publishDate: 'February 12th 2023',
  },
  {
    title: 'Balloon Fight',
    image:
      'https://cdn.sanity.io/images/exj3bhzf/production/736302c62d76b32c9c2e7ebe1f4ff01bf1549f8c-1198x759.jpg',
    excerpt: 'Better animations, better systems, Papa Johnss...',
    category: 'release',
    tag: 'Balloon Fight',
    publishDate: 'February 12th 2023',
  },
  {
    title: 'Balloon Fight',
    image:
      'https://cdn.sanity.io/images/exj3bhzf/production/736302c62d76b32c9c2e7ebe1f4ff01bf1549f8c-1198x759.jpg',
    excerpt: 'Better animations, better systems, Papa Johns...',
    category: 'uncategorized',
    tag: 'Balloon Fight',
    publishDate: 'February 12th 2023',
  },
  {
    title: 'Balloon Fight',
    image:
      'https://cdn.sanity.io/images/exj3bhzf/production/736302c62d76b32c9c2e7ebe1f4ff01bf1549f8c-1198x759.jpg',
    excerpt: 'Better animations, better systems, Papa Johnss...',
    category: 'development',
    tag: 'Balloon Fight',
    publishDate: 'February 12th 2023',
  },
];

const filteredUpdates = ref(updateData);

function handleActiveChange(category) {
  if (category.name === 'All') {
    filteredUpdates.value = updateData;
    return;
  }

  filteredUpdates.value = updateData.filter((update) => {
    return update.category === category.name.toLowerCase();
  });
}
</script>

<style scoped></style>
