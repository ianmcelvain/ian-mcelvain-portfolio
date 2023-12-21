<template>
  <nav class="inline-flex items-center text-sm font-normal font-body">
    <ol class="flex w-auto leading-none group md:flex-wrap">
      <li class="flex items-center text-neutral-500"></li>
      <li
        v-for="(item, index) in breadcrumbs"
        :key="item.name"
        class="peer flex peer-[:nth-of-type(even)]:before:content-['/'] peer-[:nth-of-type(even)]:before:px-2 peer-[:nth-of-type(even)]:before:leading-5 last-of-type:flex last-of-type:before:font-normal last-of-type:before:text-neutral-500 text-neutral-500 last-of-type:text-neutral-900 last-of-type:font-medium"
      >
        <SfLink
          v-if="index === 0"
          :href="item.path"
          variant="secondary"
          :tag="NuxtLink"
          class-name="inline-flex leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-neutral-500"
        >
          <SfIconHome size="sm" />
        </SfLink>
        <SfLink
          v-else
          :href="item.path"
          variant="secondary"
          :tag="NuxtLink"
          class="leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-inherit"
        >
          {{ item.name }}
        </SfLink>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { SfLink, SfIconHome } from '@storefront-ui/vue';
import { resolveComponent } from 'vue';

const NuxtLink = resolveComponent('NuxtLink');

const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
});

const dropdownOpened = ref(false);

function close() {
  dropdownOpened.value = false;
}

function toggle() {
  dropdownOpened.value = !dropdownOpened.value;
}
</script>
