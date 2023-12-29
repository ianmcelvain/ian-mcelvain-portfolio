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
</script>

<style scoped></style>
