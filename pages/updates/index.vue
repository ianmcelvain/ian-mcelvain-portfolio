<template>
  <div>
    <CardGrid type="Blog" :categories="updateCategories" :data="data" />
  </div>
</template>

<script setup>
import { allUpdateCategoiresQuery, allUpdatesQuery } from '~/graphql/queries';
import flatten from '~/utilities/flatten';

const updateCategories = await useAsyncQuery(allUpdateCategoiresQuery).then(
  ({ data }) => flatten(data.value.updateCategories)
);

const data = await useAsyncQuery(allUpdatesQuery).then(({ data }) =>
  flatten(data.value.updates)
);
</script>

<style scoped></style>
