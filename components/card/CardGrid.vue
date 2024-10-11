<template>
  <div>
    <FeatureCard
      v-if="latestCard"
      heading="Latest Update"
      :type="type.toLowerCase()"
      v-bind="latestCard"
    />
    <div class="flex items-center">
      <h4>{{ type }}s</h4>
      <h4 class="mx-2">/</h4>
      <h4 :class="currentCategory.slug">{{ currentCategory.title }}</h4>
    </div>
    <IconButtonGroup
      v-if="adjustedCategories.length"
      :items="adjustedCategories"
      @active-change="handleActiveChange"
    />
    <Grid :size="size">
      <component
        :is="cardComponent"
        v-for="(card, index) in filteredCards"
        v-show="filteredCards.length"
        :key="index"
        v-bind="card"
        @on-category-click="handleActiveChange"
      />
      <p v-show="!filteredCards.length && currentCategory.title">
        <template v-if="currentCategory.slug === 'all'">
          {{ `No more ${props.type.toLowerCase()}s 😞` }}
        </template>
        <template v-else>
          No <strong>{{ currentCategory.slug }}</strong>
          {{ `${props.type.toLowerCase()}s 😞` }}</template
        >
      </p>
    </Grid>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    required: true,
  },
  size: {
    type: String,
    default: () => 'medium',
  },
  showLatest: {
    type: Boolean,
    default: () => false,
  },
});

const cardComponent = defineAsyncComponent(
  () => import(`~/components/card/${props.type}Card.vue`)
);

const adjustedCategories = ref([
  {
    title: 'All',
    slug: 'all',
    icon: 'feather:layers',
  },
  ...props.categories,
]);
const currentCategory = ref(adjustedCategories.value[0]);
const filteredCards = ref(props.data);
const latestCard = ref(props.showLatest ? filteredCards.value.shift() : null);

function handleActiveChange(category) {
  currentCategory.value = category;

  if (category.slug === 'all') {
    filteredCards.value = props.data;
    return;
  }

  filteredCards.value = props.data.filter((card) => {
    return card.category.slug === category.slug;
  });
}
</script>

<style scoped></style>
