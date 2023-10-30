<template>
  <section class="text-gray-800 relative rounded-2xl mb-16">
    <div class="block rounded-xl">
      <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 rounded-xl">
        <NuxtLink
          :to="location"
          class="lg:col-span-2 xl:col-span-3 h-[400px] rounded-2xl drop-shadow-md"
          :style="{
            backgroundImage: `url(${useStrapiMedia(featuredImage.url)})`,
          }"
        ></NuxtLink>
        <div
          class="flex flex-col justify-center text-center lg:text-left lg:mt-0"
        >
          <div
            class="z-10 -mt-8 mx-8 lg:mt-0 lg:mx-0 lg:-ml-8 bg-white rounded-xl px-4 py-6 drop-shadow-lg"
          >
            <div class="text-xs">
              {{ format(new Date(publishedAt), 'MMMM do yyyy') }}
            </div>
            <NuxtLink :to="location">
              <h2 class="mb-2">{{ title }}</h2>
            </NuxtLink>
            <div class="flex justify-center mb-8 font-medium lg:justify-normal">
              <FloatingIcon :icon="category.icon" :title="category.title" />
              <FloatingIcon icon="feather:message-square" title="2" />
            </div>
            <p>{{ excerpt }}</p>
            <Tag v-for="tag in tags" :key="tag.slug" class="mr-4">{{
              tag.title
            }}</Tag>
          </div>
        </div>
      </div>
    </div>
  </section>
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

<style lang="scss" scoped></style>
