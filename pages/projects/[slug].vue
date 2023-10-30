<template>
  <div>
    <div class="header">
      <div
        class="featured-image"
        :style="{
          backgroundImage: `url(${useStrapiMedia(project.featuredImage.url)})`,
        }"
      ></div>
      <div class="details">
        <Icon
          :icon="project.category.icon"
          :width="28"
          :class="`${project.category.title} inline`"
        />
        <div>
          <h3 class="text-gray-800">{{ project.title }}</h3>
          <div class="mb-0 text-sm text-gray-500">{{ project.excerpt }}</div>
        </div>
      </div>
    </div>
    <ArticleContainer>
      <MarkdownRenderer :source="project.body" />
    </ArticleContainer>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { singleProjectQuery } from '~/graphql/queries';

const { params } = useRoute();
const { query } = useBackend();

const project = await query(singleProjectQuery, {
  slug: params.slug,
});
</script>

<style scoped>
.header {
  @apply mb-16 text-center;
}
.featured-image {
  @apply bg-cover bg-center rounded-xl shadow-md h-[30vh] lg:h-[40vh];
}
.details {
  @apply bg-white w-[70%] lg:w-[60%] xl:w-[50%] mx-auto -mt-8 shadow-lg rounded-xl p-3;
}
.details.title {
  @apply text-gray-800;
}
.details.excerpt {
  @apply mb-0 text-sm text-gray-500;
}
</style>
