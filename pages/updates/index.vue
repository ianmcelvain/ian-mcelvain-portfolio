<template>
  <CardGrid
    type="Update"
    :categories="updateCategories"
    :data="updates"
    :show-latest="true"
    size="medium"
  />
</template>

<script setup>
import { allUpdateCategoiresQuery, allUpdatesQuery } from '~/graphql/queries';

const { query } = useBackend();

const updateCategories = await query(
  'update-categories',
  allUpdateCategoiresQuery
);
const updates = await query('updates', allUpdatesQuery);
</script>

<style scoped></style>
