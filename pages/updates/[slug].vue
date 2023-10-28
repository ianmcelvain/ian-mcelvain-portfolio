<template>
  <article>
    <div
      class="featured-image"
      :style="{
        backgroundImage: `url(http://localhost:1337${update.featuredImage.url})`,
      }"
    >
      <div class="details">
        <FloatingIcon
          :icon="update.category.icon"
          :title="update.category.title"
        />
        <FloatingIcon icon="mdi:message" title="2" />
      </div>
    </div>
    <div class="text-center mt-16">
      <div class="text-xs">
        {{ update.publishedAt }}
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
import flatten from '~/utilities/flatten';

const { query } = useRoute();

const update = await useAsyncQuery(singleUpdateQuery, query).then(({ data }) =>
  flatten(data.value.update)
);
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
