<template>
  <div>
    <h4>Latest Update</h4>
    <HeroCard v-bind="latestUpdate" />
    <CardGrid
      type="Blog"
      :categories="updateCategories"
      :data="updates"
      size="medium"
    />
  </div>
</template>

<script setup>
import { allUpdateCategoiresQuery, allUpdatesQuery } from '~/graphql/queries';

const { query } = useBackend();

const updateCategories = await query(
  'update-categories',
  allUpdateCategoiresQuery
);
const updates = await query('updates', allUpdatesQuery);

const latestUpdate = updates.pop();
latestUpdate.location = {
  path: `/updates/${latestUpdate.slug}`,
};
</script>

<style scoped></style>
