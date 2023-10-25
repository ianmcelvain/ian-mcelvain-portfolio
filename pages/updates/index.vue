<template>
  <div>
    <IconButtonGroup
      :items="UPDATE_CATEGORIES"
      @active-change="handleActiveChange"
    />
    <Grid>
      <BlogCard
        v-for="(update, index) in filteredUpdates"
        :key="index"
        :title="update.title"
        :image="update.image"
        :excerpt="update.excerpt"
        :category="update.category"
        :tag="update.tag"
        :publish-date="update.publishDate"
      />
    </Grid>
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
    excerpt: 'Better animations, better systems, Papa Johnss...',
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
