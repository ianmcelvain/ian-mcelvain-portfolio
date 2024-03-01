<template>
  <div :class="`icon-button-group ${orientation}`">
    <IconButton
      v-for="item in items"
      :key="item.id"
      :class="item.slug"
      :icon="item.icon"
      :text="item.title"
      :active="activeItem.title === item.title"
      @click="handleClick(item)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  orientation: {
    type: String,
    default: 'horizontal',
  },
});

const { items } = toRefs(props);
const activeItem = ref(items.value[0]);

const emit = defineEmits(['activeChange']);

function handleClick(item) {
  activeItem.value = item;
  emit('activeChange', item);
}
</script>

<style scoped>
.icon-button-group.horizontal {
  @apply flex mb-2;
}
</style>
