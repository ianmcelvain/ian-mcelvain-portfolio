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

const title = 'Updates';
const image =
  'https://res.cloudinary.com/dksdnxvzm/image/upload/v1701622291/balloon_fight_system_board_ad99313dec.jpg';
const description = 'Development logs and release updates for projects.';

useSeoMeta({
  title,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: description,
});
</script>

<style scoped></style>
