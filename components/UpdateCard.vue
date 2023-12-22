<template>
  <NuxtLink :to="`/updates/${slug}`" class="update-card">
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
          @click="emit('onCategoryClick', category)"
        />
        <FloatingIcon icon="feather:message-square" />
      </div>
    </div>
    <div class="details">
      <div class="date">
        {{ format(new Date(publishedAt), 'MMMM do yyyy') }}
      </div>
      <h3>{{ title }}</h3>
      <ExcerptText :text="excerpt" />
      <Tag v-for="tag in tags" :key="tag.slug">{{ tag.title }}</Tag>
    </div>
  </NuxtLink>
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
});

const emit = defineEmits(['onCategoryClick']);
</script>

<style scoped>
.update-card {
  @apply text-gray-800 relative justify-between rounded-xl p-4 shadow-lg hover:shadow-xl p-2 
          transition-all duration-300 transform-gpu translate-y-0 hover:-translate-y-1 ease-in-out;
}
.image {
  @apply bg-cover bg-center h-60 mb-4 relative;
}
.meta-details {
  @apply absolute flex font-medium drop-shadow-lg bottom-0 left-0 -mb-5 ml-3;
}
.details {
  @apply mt-10;
}
.date {
  @apply text-xs;
}
</style>
