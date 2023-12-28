<template>
  <div class="feature">
    <div
      class="feature-image"
      :style="{
        backgroundImage: `url(${featuredImage.url})`,
      }"
    ></div>
    <NuxtLink
      :to="link"
      class="feature-link"
      :target="externalLink ? '_blank' : ''"
    >
      <Icon
        :icon="category.icon"
        :width="26"
        :class="`flex-none mt-1.5 mr-2.5 ${category.slug}`"
      />
      <div class="grow">
        <h3 class="text-gray-800">{{ title }}</h3>
        <ExcerptText :text="excerpt" />
        <div class="flex">
          <!-- <Tag>{{ status.title }}</Tag> -->
          <span
            class="whitespace-nowrap w-fit rounded-lg bg-gray-100 px-2.5 py-0.5 text-sm text-gray-700 lg:m-0"
          >
            {{ status.title }}
          </span>
          <Icon
            :icon="linkIcon"
            :width="20"
            :class="`mt-2 ml-auto hover ${category.slug}`"
          />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  status: {
    type: Object,
    required: true,
    validator(value) {
      return [('title', 'slug', 'icon')].every((key) => key in value);
    },
  },
  category: {
    type: Object,
    required: true,
    validator(value) {
      return [('title', 'slug', 'icon')].every((key) => key in value);
    },
  },
  externalLink: {
    type: String,
    default: null,
  },
});

const link = ref(props.externalLink ?? `/projects/${props.slug}`);
const linkIcon = ref(
  props.externalLink ? 'feather:external-link' : 'feather:chevron-right'
);
</script>

<style scoped>
.feature-image {
  @apply h-56 bg-cover bg-center rounded-xl relative shadow-md;
}
.feature-link {
  @apply block relative flex bg-white shadow-lg mx-8 -mt-8 rounded-xl p-3 
          transition-all duration-300 transform-gpu translate-y-0 
          hover:shadow-xl hover:-translate-y-1 ease-in-out;
}
</style>
