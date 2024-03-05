<template>
  <div class="feature">
    <div
      class="feature-image"
      :style="{
        backgroundImage: `url(${featuredImageURL})`,
      }"
    ></div>
    <NuxtLink
      :to="externalLink ?? `/projects/${props.slug}`"
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
        <div class="flex mt-6">
          <Tag>{{ status }}</Tag>
          <Icon
            :icon="
              props.externalLink
                ? 'feather:external-link'
                : 'feather:chevron-right'
            "
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
  featuredImageURL: {
    type: String,
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
    type: String,
    required: true,
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
