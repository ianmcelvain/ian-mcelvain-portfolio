<template>
  <div class="single-project-page">
    <div class="header">
      <div
        class="image"
        :style="{
          backgroundImage: `url(${project.featuredImageURL})`,
        }"
      ></div>
      <div class="details">
        <Icon
          :icon="project.category.icon"
          :width="28"
          :class="`${project.category.slug} inline`"
        />
        <div>
          <h3 class="title">{{ project.title }}</h3>
          <ExcerptText :text="project.excerpt" />
        </div>
      </div>
    </div>
    <ArticleContainer>
      <ContentRenderer v-if="project.body.children.length" :value="project" />
    </ArticleContainer>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const { params } = useRoute();
const { getContentBySlug } = useStaticContent();

const project = await getContentBySlug('project', params.slug);

useSeoMeta({
  title: project.title,
  ogTitle: project.title,
  ogDescription: project.excerpt,
  ogImage: project.featuredImageURL,
  twitterTitle: project.title,
  twitterDescription: project.excerpt,
  twitterImage: project.featuredImageURL,
  twitterCard: project.excerpt,
});
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
