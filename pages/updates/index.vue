<template>
  <div>
    <IconButtonGroup
      :items="UPDATE_CATEGORIES"
      @active-change="handleActiveChange"
    />
    <Grid>
      <BlogCard
        title="CMD + A + DEL Everything & Add AI"
        image="https://cdn.sanity.io/images/exj3bhzf/production/f471dfa5992fe2619703331df388513b1c316f17-785x496.jpg"
        excerpt="Better animations, better systems, Papa Johns's..."
        category="game"
        tag="Balloon Fight"
        publish-date="February 12th 2023"
      />
    </Grid>
  </div>
</template>

<script setup>
import UPDATE_CATEGORIES from '~/constants/update_categories';

function handleActiveChange(category) {}
</script>

<style scoped></style>
