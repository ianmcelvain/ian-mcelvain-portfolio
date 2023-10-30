<template>
  <div>
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
      />
      <p
        v-show="!filteredCards.length && currentCategory.title"
        v-html="noResultsMessage"
      />
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
});

const cardComponent = defineAsyncComponent(() =>
  import(`../components/${props.type}Card.vue`)
);

const adjustedCategories = ref([
  {
    title: 'All',
    slug: 'all',
    icon: 'mdi:layers-triple-outline',
  },
  ...props.categories,
]);
const currentCategory = ref(adjustedCategories.value[0]);
const filteredCards = ref(props.data);

const noResultsMessage = computed(() => {
  const { slug } = currentCategory.value;

  if (slug === 'all') {
    return 'No more updates 😞';
  }

  return `No <strong>${slug}</strong> updates 😞`;
});

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
