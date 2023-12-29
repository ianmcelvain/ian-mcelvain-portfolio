<template>
  <article>
    <slot />
  </article>
</template>

<style>
article {
  @apply prose prose-primary mx-auto mb-32;
}
/* Hack to counter image margins so that em tags look like they at image captions */
article > p > em {
  @apply block -mt-8;
}
</style>
