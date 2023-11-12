<template>
  <div>
    <CardGrid
      type="Project"
      :categories="projectCategories"
      :data="data"
      size="medium"
    />
  </div>
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
