<template>
  <div class="update-card">
    <NuxtLink :to="`/updates/${slug}`">
      <div
        class="image"
        :style="{
          backgroundImage: `url(${featuredImageURL})`,
        }"
      >
        <div class="meta-details">
          <FloatingIcon
            :class="category.slug"
            :icon="category.icon"
            @click="emit('onCategoryClick', category)"
          />
        </div>
      </div>
    </NuxtLink>
    <div class="details">
      <div class="date">
        {{ format(new Date(publishedAt), 'MMMM do yyyy') }}
      </div>
      <NuxtLink :to="`/updates/${slug}`">
        <h3>{{ title }}</h3>
      </NuxtLink>
      <ExcerptText :text="excerpt" />
      <div class="tags">
        <Tag
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </Tag>
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
  featuredImageURL: {
    type: String,
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
      return [('title', 'slug', 'icon')].every(key => key in value);
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
  @apply text-gray-800 relative justify-between rounded-xl p-4 shadow-lg hover:shadow-xl h-fit
          transition-all duration-300 transform-gpu translate-y-0 hover:-translate-y-1 ease-in-out;
}
.image {
  @apply bg-cover rounded-xl bg-center h-60 mb-4 relative;
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
.tags {
  @apply mt-6;
}
</style>
