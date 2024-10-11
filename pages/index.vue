<template>
  <div class="grid grid-cols-5 gap-y-16 md:gap-y-36 gap-x-12">
    <div class="hero col-span-5">
      <h4 class="word-pop">Writing</h4>
        <h1 class="word-pop">apps, games, websites</h1>
      <h4 class="text-right word-pop">since 2012</h4>
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
        At 15-years-old, I first learned how to program by making mods for Call
        of Duty on the Xbox 360 using C++. The majority of my mods would later
        become featured downloads for Modern Warfare 2 and World at War games.
        While building mods was a hobby, it transitioned into actively designing
        games while also gaining experience working as a full stack engineer. I
        have years of professional experience developing web and native apps
        with a focus on the frontend. My understanding to utilize design
        principles from a wide range of software practices has brought unique
        outcomes to creative projects.
        <br >
        <br >
        I still design games independently and that work can be viewed on this
        website as well as any other software I write.
      </p>
      <NuxtLink to="mailto:ian.mcelvain@gmail.com">
        <button class="button block !ml-auto !mr-0">
          <Icon class="inline mr-2" icon="feather:mail" :width="24" />Contact
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
      <h4 class="!mb-2">Like what you see?</h4>
      <h4 class="!font-normal">Be first to checkout a release!</h4>
      <MailchimpForm />
    </div>
    <div class="col-start-2 col-span-3 text-center">
      <div class="flex my-8 justify-center items-center">
        <a href="mailto:ian.mcelvain@gmail.com">
          <IconButton text="ian.nmcelvain@gmail.com" icon="feather:mail" />
        </a>
        <a
          href="https://github.com/ianmcelvain"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton text="ianmcelvain" icon="feather:github" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import anime from 'animejs';
import { Icon } from '@iconify/vue';
import { FeaturedProjects } from '~/constants/featured-projects';

const { getContent } = useStaticContent();

const updates = await getContent('update', {
 sort: {
 publishedAt: -1 
} 
});
const featuredProjects = await getContent('project', {
  query: {
    title: {
 $in: FeaturedProjects 
},
  },
});

const avatarURL = 'https://i.imgur.com/6Ay2gYA.jpg';

useSeoMeta({
  ogImage: avatarURL,
  twitterImage: avatarURL,
});

onMounted(() => {
  const elements = [...document.getElementsByClassName('word-pop')];

  elements.forEach((element) => {
    const text = element.textContent;
    const words = text.split(' ');
    
    // // Clear current element
    element.innerHTML = '';
    
    // // Loop through each word, wrap each letter in a span
    words.forEach((word, i) => {
      const wordSplit = word.replace(/[a-zA-Z,0-9]/g, "<span class='letter'>$&</span>");
      
      // Wrap another span around each word, add word to header
      element.innerHTML += `<span class="word">${wordSplit}</span>`;

      if (i < words.length - 1) {
        element.innerHTML += '&nbsp;'
      }
    })
  });

  anime.timeline()
      .add({
        targets: '.word-pop .letter',
        translateY: [1000, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
          return 60 * i;
        }
      });
    
})
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
.word-pop {
  overflow: hidden;
}

.word-pop .word {
  display: inline-block;
  overflow: hidden;
}

.word-pop .letter {
  display: inline-block;
}
</style>
