<template>
  <div class="grid grid-cols-5 gap-y-16 md:gap-y-36 gap-x-12">
    <div
      ref="titleWrapperRef"
      class="hero col-span-5"
    >
      <h4 class="word-pop">
        Writing
      </h4>
      <h1 class="word-pop">
        apps, &nbsp; games, &nbsp; websites
      </h1>
      <h4 class="text-right word-pop">
        since &nbsp; 2012
      </h4>
    </div>
    <div
      class="col-span-5 h-80 md:h-full md:col-span-2 2xl:col-span-1 2xl:col-start-2 avatar"
      :style="{
        backgroundImage: `url(${avatarURL})`,
      }"
    />
    <div class="col-span-5 md:col-span-3 2xl:col-span-2 text-left">
      <h4>Ian C.G. McElvain</h4>
      <p>
        I started programming at 15, creating mods for Call of Duty in
        C++ on a modified Xbox 360 (JTAG). Many of <NuxtLink
          external
          to="https://www.youtube.com/watch?v=nMDJxzE6gmk&ab_channel=EnterTheArktic"
          target="_blank"
        >my mods</NuxtLink> were featured
        on popular modding forums for Modern Warfare 2 and World at War.
        What began as a hobby quickly turned into a passion for game design,
        where I began exploring that art medium.
        <br>
        <br>
        As I honed those skills, I expanded into professional web and native
        app development, gaining a well-rounded understanding of
        interactive software as well as design patterns.
        <br>
        <br>
        These days, I’m still building games. Currently, I’m developing
        <NuxtLink to="/updates/next-project-balloon-fight">
          Balloon Fight</NuxtLink>, a physics-driven brawler that blends strategic gameplay
        with chaotic combat. For a closer look at the project and its
        progress, be sure to check out the <NuxtLink to="/updates">
          Updates
        </NuxtLink> page.
      </p>
      <NuxtLink to="mailto:ian.mcelvain@gmail.com">
        <button class="button block !ml-auto !mr-0">
          <Icon
            class="inline mr-2"
            icon="feather:mail"
            :width="24"
          />Contact
        </button>
      </NuxtLink>
    </div>
    <div class="col-start-1 col-span-5 2xl:col-span-3 2xl:col-start-2">
      <h4>Notable Projects</h4>
      <Grid size="large">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.slug"
          type="project"
          :show-heading="false"
          v-bind="project"
        />
      </Grid>
    </div>
    <div class="col-start-1 col-span-5 2xl:col-start-2 2xl:col-span-3">
      <h4>Recent Update</h4>
      <FeatureCard
        v-bind="updates[0]"
        type="update"
        :show-heading="false"
        :has-floating-meta-details="true"
      />
    </div>
    <div class="col-span-5 text-center">
      <h4 class="!mb-2">
        Like what you see?
      </h4>
      <h4 class="!font-normal">
        Be first to checkout a release!
      </h4>
      <MailchimpForm />
    </div>
    <div class="col-start-2 col-span-3 text-center">
      <div class="flex my-8 justify-center items-center">
        <a href="mailto:ian.mcelvain@gmail.com">
          <IconButton
            text="ian.nmcelvain@gmail.com"
            icon="feather:mail"
          />
        </a>
        <a
          href="https://github.com/ianmcelvain"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            text="ianmcelvain"
            icon="feather:github"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { FeaturedProjects } from '~/constants/featured-projects';

const { getContent } = useStaticContent();

const titleWrapperRef = ref(null);

const updates = await getContent('update', {
  sort: {
    publishedAt: -1,
  },
});
const featuredProjects = await getContent('project', {
  query: {
    title: {
      $in: FeaturedProjects,
    },
  },
});

const avatarURL = 'https://i.imgur.com/6Ay2gYA.jpg';

useSeoMeta({
  ogImage: avatarURL,
  twitterImage: avatarURL,
});

onMounted(() => {
  const { play } = useWordPop([...titleWrapperRef.value.children]);
  play();
});
</script>

<style>
.hero {
  @apply w-fit m-auto;
}
.hero h1 {
  font-size: clamp(55px, 6vw, 100px);
  @apply sm:whitespace-nowrap;
}
.avatar {
  @apply rounded-2xl bg-cover bg-center;
}
</style>
