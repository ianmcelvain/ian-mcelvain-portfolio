<template>
  <div class="single-update-page">
    <div
      class="image"
      :style="{
        backgroundImage: `url(${featuredImage.url})`,
      }"
    >
      <div class="meta-details">
        <FloatingIcon
          :class="category.slug"
          :icon="category.icon"
          :title="category.title"
        />
      </div>
    </div>
    <div class="details">
      <div class="date">
        {{ format(new Date(publishedAt), 'MMMM do yyyy') }}
      </div>
      <h1 class="title">{{ title }}</h1>
      <ExcerptText :text="excerpt" />
    </div>
    <ArticleContainer>
      <MarkdownRenderer class="mb-16" :source="body" />
      <ClientOnly>
        <Disqus
          :url="`${config.public.baseUrl}${path}`"
          :title="title"
          :identifier="path"
        />
      </ClientOnly>
    </ArticleContainer>
  </div>
</template>

<script setup>
import { singleUpdateQuery } from '~/graphql/queries';
import { format } from 'date-fns';

const { params, path } = useRoute();
const { query } = useBackend();
const config = useRuntimeConfig();

const { category, featuredImage, publishedAt, title, excerpt, body } =
  await query(`update-${params.slug}`, singleUpdateQuery, {
    slug: params.slug,
  });

useSeoMeta({
  title,
  ogTitle: title,
  ogDescription: excerpt,
  ogImage: featuredImage.url,
  twitterTitle: title,
  twitterDescription: excerpt,
  twitterImage: featuredImage.url,
  twitterCard: excerpt,
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
