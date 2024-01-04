<template>
  <CardGrid
    type="Project"
    :categories="projectCategories"
    :data="data"
    size="small"
  />
</template>

<script setup>
import { allProjectCategoiresQuery, allProjectsQuery } from '~/graphql/queries';

const { query } = useBackend();

const projectCategories = await query(
  'project-categories',
  allProjectCategoiresQuery
);
const data = await query('projects', allProjectsQuery);

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
