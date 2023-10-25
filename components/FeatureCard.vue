<template>
  <div class="feature">
    <div
      class="feature-image"
      :style="{
        backgroundImage: `url(${image})`,
      }"
    ></div>
    <NuxtLink to="/" class="feature-link">
      <Icon
        :icon="'mdi:controller-classic-outline'"
        :width="26"
        class="flex-none mt-1.5 mr-2.5"
      />
      <div>
        <h3 class="text-gray-800">{{ title }}</h3>
        <div class="mb-0 text-sm text-gray-500">
          <p>{{ description }}</p>
        </div>
        <div class="flex">
          <span
            class="whitespace-nowrap w-fit rounded-lg bg-gray-100 px-2.5 py-0.5 text-sm text-gray-700 lg:m-0"
          >
            Archived
          </span>
          <Icon :icon="'mdi:web'" :width="20" class="mt-2 ml-auto" />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.feature-image {
  @apply h-56 -mt-8 bg-cover bg-center rounded-xl relative shadow-md;
}
.feature-link {
  @apply relative flex bg-white -mt-8 shadow-lg mx-8 -mt-8 rounded-xl p-3 
          transition-all duration-300 transform-gpu translate-y-0 
          hover:shadow-xl hover:-translate-y-1 ease-in-out;
}
</style>
