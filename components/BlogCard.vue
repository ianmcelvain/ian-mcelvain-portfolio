<template>
  <NuxtLink
    to="/"
    class="text-gray-800 relative justify-between rounded-xl p-4 shadow-lg transition-all hover:shadow-xl p-2 duration-300 tranform-gpu translate-y-0 hover:-translate-y-1 ease-in-out"
  >
    <div
      class="post-thumbnail h-60 mb-4 relative"
      :style="{
        backgroundImage: `url(http://localhost:1337${featuredImage.data.attributes.url})`,
      }"
    >
      <div
        class="absolute flex font-medium drop-shadow-lg bottom-0 left-0 -mb-5 ml-3"
      >
        <span
          :class="`text hover ${category}  whitespace-nowrap rounded-2xl bg-white px-2.5 py-2.5 text-sm mr-2 cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:text-white tranform-gpu translate-y-0 hover:-translate-y-1 ease-in-out`"
        >
          <Icon icon="mdi:source-branch" :width="20" />
        </span>
        <a
          href="/"
          class="whitespace-nowrap rounded-2xl bg-white px-2.5 py-2.5 text-sm text-gray-700 mr-2 cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:text-white tranform-gpu translate-y-0 hover:-translate-y-1 ease-in-out"
        >
          <Icon icon="mdi:message" :width="20" />
        </a>
      </div>
    </div>
    <div class="mt-10">
      <div class="text-xs">
        {{ publishedAt }}
      </div>
      <h3>{{ title }}</h3>
      <p>{{ excerpt }}</p>
      <span
        v-if="tag"
        class="whitespace-nowrap rounded-lg bg-gray-100 px-2.5 py-0.5 text-sm text-gray-700"
      >
        {{ tag }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  title: {
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
  tag: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  publishedAt: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
