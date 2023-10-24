<template>
  <div :class="`icon-button-group ${orientation}`">
    <IconButton
      v-for="item in items"
      :key="item.name"
      :icon="item.icon"
      :text="item.name"
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
</script>

<style scoped>
.icon-button-group.horizontal {
  @apply flex;
}
</style>
