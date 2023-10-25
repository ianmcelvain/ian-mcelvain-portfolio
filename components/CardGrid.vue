<template>
  <div>
    <IconButtonGroup :items="categories" @active-change="handleActiveChange" />
    <Grid>
      <component
        :is="cardComponent"
        v-for="(card, index) in filteredCards"
        :key="index"
        v-bind="card"
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
});

const cardComponent = defineAsyncComponent(() =>
  import(`../components/${props.type}Card`),
);

const filteredCards = ref(props.data);

function handleActiveChange(category) {
  if (category.name === 'All') {
    filteredCards.value = props.data;
    return;
  }

  filteredCards.value = props.data.filter((card) => {
    return card.category === category.name.toLowerCase();
  });
}
</script>

<style scoped></style>
