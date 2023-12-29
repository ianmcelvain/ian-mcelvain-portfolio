<template>
  <footer>
    <div class="side-quest-easter-egg">
      <UTooltip
        text="Hey psss, I have a surprise for you :)"
        :shortcuts="['⌘', 'O']"
        :popper="{ arrow: true }"
      >
        <NuxtLink to="/cake">
          <img
            src="https://github.githubassets.com/images/mona-loading-dark.gif"
            alt="ianmcelvain-game"
            className="side-quest"
            :width="40"
          />
        </NuxtLink>
      </UTooltip>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  position: sticky;
  top: 100vh;
}
</style>
