<template>
  <div>
    <CardGrid
      type="Project"
      :categories="projectCategories"
      :data="data"
      size="large"
    />
  </div>
</template>

<script setup>
import { allProjectCategoiresQuery, allProjectsQuery } from '~/graphql/queries';
import flatten from '~/utilities/flatten';

const projectCategories = await useAsyncQuery(allProjectCategoiresQuery).then(
  ({ data }) => flatten(data.value.projectCategories)
);

const data = await useAsyncQuery(allProjectsQuery).then(({ data }) =>
  flatten(data.value.projects)
);
</script>

<style scoped></style>
