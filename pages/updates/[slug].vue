<template>
  <div class="single-update-page">
    <div
      class="image"
      :style="{
        backgroundImage: `url(${update.featuredImage.url})`,
      }"
    >
      <div class="meta-details">
        <FloatingIcon
          :icon="update.category.icon"
          :title="update.category.title"
        />
        <FloatingIcon icon="feather:message-square" title="2" />
      </div>
    </div>
    <div class="details">
      <div class="date">
        {{ format(new Date(update.publishedAt), 'MMMM do yyyy') }}
      </div>
      <h1 class="title">{{ update.title }}</h1>
      <div class="excerpt">{{ update.excerpt }}</div>
    </div>
    <ArticleContainer>
      <MarkdownRenderer :source="update.body" />
      <!-- <Disqus
          class="my-28"
          config={{
            url: location.href,
            identifier: id,
            title,
          }}
        /> -->
    </ArticleContainer>
  </div>
</template>

<script setup>
import { singleUpdateQuery } from '~/graphql/queries';
import { format } from 'date-fns';

const { params } = useRoute();
const { query } = useBackend();

const update = await query(`update-${params.slug}`, singleUpdateQuery, {
  slug: params.slug,
});
</script>

<style scoped>
.image {
  @apply bg-cover relative rounded-2xl 
          h-[40vh] md:h-[50vh] lg:h-[60vh];
}
.meta-details {
  @apply absolute flex font-medium drop-shadow-lg bottom-0 left-0 -mb-5 ml-3;
}
.details {
  @apply text-center my-16;
}
.details.date {
  @apply text-xs;
}
.details.title {
  @apply text-gray-800 mb-4;
}
.details.excerpt {
  @apply mb-0 text-sm text-gray-500;
}
</style>
