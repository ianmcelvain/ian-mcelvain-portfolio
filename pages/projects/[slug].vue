<template>
  <div class="single-project-page">
    <div class="header">
      <div
        class="image"
        :style="{
          backgroundImage: `url(${featuredImage.url})`,
        }"
      ></div>
      <div class="details">
        <Icon
          :icon="category.icon"
          :width="28"
          :class="`${category.title} inline`"
        />
        <div>
          <h3 class="title">{{ title }}</h3>
          <ExcerptText :text="excerpt" />
        </div>
      </div>
    </div>
    <ArticleContainer>
      <MarkdownRenderer v-if="body" :source="body" />
    </ArticleContainer>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { singleProjectQuery } from '~/graphql/queries';

const { params } = useRoute();
const { query } = useBackend();

const { category, featuredImage, title, excerpt, body } = await query(
  `project-${params.slug}`,
  singleProjectQuery,
  {
    slug: params.slug,
  }
);
</script>

<style scoped>
.header {
  @apply mb-16 text-center;
}
.image {
  @apply bg-cover bg-center rounded-xl shadow-md h-[30vh] lg:h-[40vh];
}
.details {
  @apply bg-white w-[70%] lg:w-[60%] xl:w-[50%] mx-auto -mt-8 shadow-lg rounded-xl p-3;
}
.title {
  @apply text-gray-800;
}
</style>
