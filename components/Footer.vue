<template>
  <footer>
    <div class="side-quest-easter-egg">
      <SfTooltip
        label="Hey psss, I have a surprise for you :)"
        placement="left"
        :show-arrow="true"
      >
        <NuxtLink to="/cake">
          <img
            src="https://github.githubassets.com/images/mona-loading-dark.gif"
            alt="ianmcelvain-game"
            className="side-quest"
            :width="40"
          />
        </NuxtLink>
      </SfTooltip>
    </div>
  </footer>
</template>

<script setup>
import { SfTooltip } from '@storefront-ui/vue';
</script>

<style scoped>
footer {
  position: sticky;
  top: 100vh;
}
</style>
