<template>
  <div></div>
</template>

<script>
import { onBeforeRouteUpdate } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        console.log('CHANGED');
      }
    );
  },
  mounted() {
    this.$confetti.start();
  },
};
</script>

<style lang="scss" scoped></style>
