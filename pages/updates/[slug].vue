<template>
  <div class="single-update-page">
    <div
      class="image"
      :style="{
        backgroundImage: `url(${update.featuredImageURL})`,
      }"
    >
      <div class="meta-details">
        <FloatingIcon
          :class="update.category.slug"
          :icon="update.category.icon"
          :title="update.category.title"
        />
        <FloatingIcon
          v-for="tag in update.tags"
          :key="tag"
          class="tag"
          icon="feather:tag"
          :title="tag"
        />
      </div>
    </div>
    <div class="details">
      <div class="date">
        {{ format(new Date(update.publishedAt), 'MMMM do yyyy') }}
      </div>
      <h1 ref="titleRef" class="title">{{ update.title }}</h1>
      <ExcerptText :text="update.excerpt" />
    </div>
    <ArticleContainer>
      <ContentRenderer class="mb-16" :value="update" />
      <ClientOnly>
        <Disqus
          :url="`${config.public.baseUrl}${path}`"
          :title="update.title"
          :identifier="path"
        />
      </ClientOnly>
    </ArticleContainer>
  </div>
</template>

<script setup>
import { format } from 'date-fns';

const { params, path } = useRoute();
const config = useRuntimeConfig();

const { getContentBySlug } = useStaticContent();

const update = await getContentBySlug('update', params.slug);

useSeoMeta({
  title: update.title,
  ogTitle: update.title,
  ogDescription: update.excerpt,
  ogImage: update.featuredImageURL,
  twitterTitle: update.title,
  twitterDescription: update.excerpt,
  twitterImage: update.featuredImageURL,
  twitterCard: update.excerpt,
});

const titleRef = ref(null);
onMounted(() => {
  const { play } = useWordPop([titleRef.value]);
  play();
});
</script>

<style scoped>
.image {
  @apply bg-cover bg-center relative rounded-2xl 
          h-[40vh] md:h-[50vh] lg:h-[60vh];
}
.meta-details {
  @apply absolute flex font-medium drop-shadow-lg bottom-0 left-0 -mb-5 ml-3;
}
.details {
  @apply text-center my-16;
}
.date {
  @apply text-xs;
}
.title {
  @apply text-gray-800 mb-4;
}
</style>
