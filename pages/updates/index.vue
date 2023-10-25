<template>
  <div>
    <CardGrid type="Blog" :categories="UPDATE_CATEGORIES" :data="updateData" />
  </div>
</template>

<script setup>
import UPDATE_CATEGORIES from '~/constants/update_categories';
import { allUpdatesQuery } from '~/graphql/queries';

const updateData = await useAsyncQuery(allUpdatesQuery).then(({ data }) => {
  // I HATE THESE NESTED KEYS
  return data.value.updates.data;
});
</script>

<style scoped></style>
