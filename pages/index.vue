<template>
  <ArticleContainer class="text-center">
    <h4 className="subtitle">
      I've been writing games, native apps, and websites since 2012
    </h4>
    <p>
      I started by developing mods for Call of Duty using C++ and it naturally
      transitioned into developing games shortly after. Since then games have
      been my main focus but in parallel I use those software principles and
      patterns for apps and the web.
    </p>
    <div className="flex my-8 justify-center items-center">
      <a href="mailto:ian.mcelvain@gmail.com">
        <IconButton icon="mdi:email-outline">
          {{ 'ian.nmcelvain@gmail.com' }}
        </IconButton>
      </a>
      <a href="https://github.com/ianmcelvain" target="_blank" rel="noreferrer">
        <IconButton text="ianmcelvain" icon="mdi:github" />
      </a>
    </div>
  </ArticleContainer>
</template>

<script setup></script>

<style scoped></style>
