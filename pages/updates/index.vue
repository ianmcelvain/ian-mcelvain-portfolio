<template>
  <div>
    <HeroCard v-bind="latestUpdate" />
    <CardGrid type="Blog" :categories="updateCategories" :data="updates" />
  </div>
</template>

<script setup>
import { allUpdateCategoiresQuery, allUpdatesQuery } from '~/graphql/queries';
import flatten from '~/utilities/flatten';
import { format } from 'date-fns';

const graphql = useStrapiGraphQL();

const updateCategories = await graphql(allUpdateCategoiresQuery).then(
  ({ data }) => flatten(data.updateCategories)
);

const updates = await graphql(allUpdatesQuery).then(({ data }) => {
  return flatten(data.updates);
});

const latestUpdate = updates.pop();
latestUpdate.location = {
  path: `/updates/${latestUpdate.slug}`,
};
</script>

<style scoped></style>
