<template>
  <footer>
    <div class="side-quest-easter-egg">
      <ClientOnly>
        <UTooltip :popper="{ arrow: true }">
          <template #text>
            <Glitch id="glitchy" complex text="THE CAKE IS A LIE!!!!!!!!!"
              >Hey psss, I have a surprise for you :)</Glitch
            >
          </template>
          <NuxtLink to="/cake">
            <img
              src="https://github.githubassets.com/images/mona-loading-dark.gif"
              alt="ianmcelvain-game"
              className="side-quest"
              :width="40"
            >
          </NuxtLink>
        </UTooltip>
      </ClientOnly>
    </div>
  </footer>
</template>

<script setup>
import { Glitch } from 'vue-glitched';
</script>

<style scoped>
footer {
  position: sticky;
  top: 100vh;
}
</style>
