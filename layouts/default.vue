<template>
  <div class="wrapper">
    <NavBar />
    <PageContainer class="body">
      <Breadcrumbs
        v-show="breadcrumbs.length > 2"
        class="breadcrumbs"
        :breadcrumbs="breadcrumbs"
      />
      <slot class="content" />
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
    </PageContainer>
  </div>
</template>

<script setup>
import { SfTooltip } from '@storefront-ui/vue';
const { breadcrumbs } = useBreadcrumbs();
</script>

<style>
html,
body,
#__nuxt,
.wrapper,
.body {
  @apply h-full;
}
footer {
  position: sticky;
  top: 100vh;
}

/* Layout margins to compensate sidebar width */
.navbar {
  @apply w-full sm:w-[90px] md:w-[90px] lg:w-[90px];
}
.page-container {
  @apply ml-0 sm:ml-[90px] md:ml-[90px] lg:ml-[90px];
}

.breadcrumbs {
  @apply relative top-0 left-0 py-4 
          sm:absolute sm:top-8 sm:left-60;
}

.side-quest-easter-egg {
  @apply flex justify-end;
}
</style>
