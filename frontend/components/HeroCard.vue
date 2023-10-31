<template>
  <div class="hero-card">
    <NuxtLink
      :to="location"
      class="featured-image"
      :style="{
        backgroundImage: `url(${useStrapiMedia(featuredImage.url)})`,
      }"
    ></NuxtLink>
    <div class="details-wrapper">
      <div class="details">
        <div class="date">
          {{ format(new Date(publishedAt), 'MMMM do yyyy') }}
        </div>
        <NuxtLink :to="location">
          <h2 class="title">{{ title }}</h2>
        </NuxtLink>
        <div class="category">
          <FloatingIcon :icon="category.icon" :title="category.title" />
          <FloatingIcon icon="feather:message-square" title="2" />
        </div>
        <p>{{ excerpt }}</p>
        <Tag v-for="tag in tags" :key="tag.slug" class="tags">{{
          tag.title
        }}</Tag>
      </div>
    </div>
  </div>
</template>

<script setup>
import { format } from 'date-fns';

defineProps({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: Object,
    required: true,
  },
  excerpt: {
    type: String,
    default: '',
  },
  tags: {
    type: Array,
    default: () => [],
  },
  category: {
    type: Object,
    required: true,
    validator(value) {
      return [('title', 'slug', 'icon')].every((key) => key in value);
    },
  },
  publishedAt: {
    type: String,
    required: true,
  },
  location: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped>
.hero-card {
  @apply text-gray-800 relative mb-16 block rounded-xl 
          grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4;
}
.featured-image {
  @apply h-[400px] rounded-2xl drop-shadow-md
          lg:col-span-2 xl:col-span-3;
}
.details-wrapper {
  @apply flex flex-col justify-center;
}
.details {
  @apply z-10 -mt-8 mx-8 px-4 py-6 bg-white rounded-xl drop-shadow-lg text-center 
          lg:text-left lg:mt-0 lg:mx-0 lg:-ml-8;
}
.date {
  @apply text-xs;
}
.title {
  @apply mb-2;
}
.category {
  @apply flex justify-center mb-8 font-medium 
          lg:justify-normal;
}
.tags {
  @apply mr-4;
}
</style>
