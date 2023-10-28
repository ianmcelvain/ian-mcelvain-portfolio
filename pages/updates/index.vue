<template>
  <div>
    <section class="text-gray-800 relative rounded-2xl mb-16">
      <div class="block rounded-xl">
        <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 rounded-xl">
          <NuxtLink
            :to="latestUpdate.link"
            class="lg:col-span-2 xl:col-span-3 h-[400px] rounded-2xl drop-shadow-md"
            :style="{
              backgroundImage: `url(http://localhost:1337${latestUpdate.featuredImage.url})`,
            }"
          ></NuxtLink>
          <div
            class="flex flex-col justify-center text-center lg:text-left lg:mt-0"
          >
            <div
              class="z-10 -mt-8 mx-8 lg:mt-0 lg:mx-0 lg:-ml-8 bg-white rounded-xl px-4 py-6 drop-shadow-lg"
            >
              <div class="text-xs">
                {{ format(new Date(latestUpdate.publishedAt), 'MMMM do yyyy') }}
              </div>
              <NuxtLink :to="latestUpdate.link">
                <h2 class="mb-2">{{ latestUpdate.title }}</h2>
              </NuxtLink>
              <div
                class="flex justify-center mb-8 font-medium lg:justify-normal"
              >
                <FloatingIcon
                  :icon="latestUpdate.category.icon"
                  :title="latestUpdate.category.title"
                />
                <FloatingIcon icon="mdi:message" title="2" />
              </div>
              <p>{{ latestUpdate.excerpt }}</p>
              <span
                class="whitespace-nowrap w-fit rounded-lg bg-gray-100 px-2.5 py-0.5 text-sm text-gray-700 m-auto lg:m-0"
              >
                {{ latestUpdate.tags[0].title }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CardGrid type="Blog" :categories="updateCategories" :data="updates" />
  </div>
</template>

<script setup>
import { allUpdateCategoiresQuery, allUpdatesQuery } from '~/graphql/queries';
import flatten from '~/utilities/flatten';
import { format } from 'date-fns';

const updateCategories = await useAsyncQuery(allUpdateCategoiresQuery).then(
  ({ data }) => flatten(data.value.updateCategories)
);

const updates = await useAsyncQuery(allUpdatesQuery).then(({ data }) =>
  flatten(data.value.updates)
);

const latestUpdate = updates.pop();
latestUpdate.link = {
  path: `/updates/${latestUpdate.slug}`,
  query: { id: latestUpdate.id },
};
</script>

<style scoped></style>
