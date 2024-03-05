<template>
  <CardGrid
    type="Project"
    :categories="projectCategories"
    :data="projects"
    size="small"
  />
</template>

<script setup>
import { CategoryMap } from '~/constants/category-map';

const { getContent } = useStaticContent();

const projectCategories = Object.values(CategoryMap['project']);
const projects = await getContent('project');

const title = 'Projects';
const image =
  'https://res.cloudinary.com/dksdnxvzm/image/upload/v1701619061/balloon_fight_projectile_block_ea6c139171.jpg';
const description = 'Professional and hobby software contributions.';

useSeoMeta({
  title,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: description,
});
</script>

<style scoped></style>
