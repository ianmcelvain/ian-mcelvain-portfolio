<template>
  <div class="feature-card">
    <NuxtLink
      :to="`/${type}s/${slug}`"
      class="image"
      :style="{
        backgroundImage: `url(${featuredImage.url})`,
      }"
    ></NuxtLink>
    <div class="details-wrapper">
      <div class="details">
        <div class="date">
          {{ format(new Date(publishedAt), 'MMMM do yyyy') }}
        </div>
        <NuxtLink :to="`/${type}s/${slug}`">
          <h2 class="title">{{ title }}</h2>
        </NuxtLink>
        <div class="category">
          <FloatingIcon :icon="category.icon" :title="category.title" />
          <FloatingIcon icon="feather:message-square" title="2" />
        </div>
        <ExcerptText :text="excerpt" />
        <Tag v-for="tag in tags" :key="tag.slug" class="tag">{{
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
  type: {
    type: String,
    required: true,
    validator(value) {
      return ['update', 'project'].includes(value);
    },
  },
});
</script>

<style scoped>
.feature-card {
  @apply text-gray-800 relative mb-16 block rounded-xl 
          grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4;
}
.image {
  @apply h-[400px] rounded-2xl bg-center bg-cover drop-shadow-md
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
.tag {
  @apply mr-4;
}
</style>
