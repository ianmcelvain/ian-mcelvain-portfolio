<template>
  <div v-html="update.body"></div>
</template>

<script setup>
import { singleUpdateQuery } from '~/graphql/queries';
import flatten from '~/utilities/flatten';

const { query } = useRoute();

const update = await useAsyncQuery(singleUpdateQuery, query).then(({ data }) =>
  flatten(data.value.update)
);
</script>

<style scoped></style>
