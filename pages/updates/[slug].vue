<template>
  <article>
    <div
      class="featured-image"
      :style="{
        backgroundImage: `url(${useStrapiMedia(update.featuredImage.url)})`,
      }"
    >
      <div class="details">
        <FloatingIcon
          :icon="update.category.icon"
          :title="update.category.title"
        />
        <FloatingIcon icon="feather:message-square" title="2" />
      </div>
    </div>
    <div class="text-center my-16">
      <div class="text-xs">
        {{ format(new Date(update.publishedAt), 'MMMM do yyyy') }}
      </div>
      <h1 class="m-4">{{ update.title }}</h1>
      <div>{{ update.excerpt }}</div>
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
  </article>
</template>

<script setup>
import { singleUpdateQuery } from '~/graphql/queries';
import { format } from 'date-fns';

const { params } = useRoute();
const { query } = useBackend();

const update = await query(singleUpdateQuery, {
  slug: params.slug,
});
</script>

<style scoped>
.featured-image {
  @apply bg-cover relative rounded-2xl 
          h-[40vh] md:h-[50vh] lg:h-[60vh];
}
.details {
  @apply absolute flex font-medium drop-shadow-lg bottom-0 left-0 -mb-5 ml-3;
}
.details.title {
  @apply text-gray-800;
}
.details.excerpt {
  @apply mb-0 text-sm text-gray-500;
}
</style>
