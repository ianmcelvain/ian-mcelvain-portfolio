<template>
  <div>
    <CardGrid type="Feature" :categories="projectCategories" :data="data" />
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
