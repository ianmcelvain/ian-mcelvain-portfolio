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
import { CategoryMap } from '~/constants/category-map';

const { getContent } = useStaticContent();

const updateCategories = Object.values(CategoryMap['update']);
const updates = await getContent('update');

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
