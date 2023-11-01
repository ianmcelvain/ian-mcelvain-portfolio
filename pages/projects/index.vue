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

const projectCategories = await query(allProjectCategoiresQuery);
const data = await query(allProjectsQuery);
</script>

<style scoped></style>
