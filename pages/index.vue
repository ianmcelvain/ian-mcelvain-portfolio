<template>
  <div class="grid grid-cols-5 gap-y-36 gap-x-12">
    <div class="hero col-span-5">
      <h4>Writing</h4>
      <h1>games, apps, websites</h1>
      <h4 class="text-right">since 2012</h4>
    </div>
    <div class="col-start-2 col-span-1 avatar"></div>
    <div class="col-span-2 text-left">
      <h4>Ian C.G. McElvain</h4>
      <p>
        I learned how to program by making mods for Call of Duty on the Xbox 360
        using C++. Majority of my mods would later become popular for Modern
        Warfare 2 and World at War games. That hobby transitioned into designing
        games shortly after whilst my occupation would become a full stack
        engineer. I have gained immense professional experience developing web
        and native apps with a focus on the frontend. Sharing design patterns
        from different software mediums has made unique experiences for creative
        projects.
        <br />
        <br />
        I still design games independently and can be seen on this site as well
        as any other software I write.
      </p>
      <!-- <h2>Ian C.G. McElvain</h2>
      <h2>
        I started by making mods for Call of Duty using C++ which transitioned
        into designing games shortly after. Since then I've been working on
        games whilst applying those software principles and patterns for apps
        and the web.
      </h2> -->
    </div>
    <div class="col-start-2 col-span-3">
      <h4>Notible Projects</h4>
      <Grid size="large">
        <ProjectCard
          v-for="project in notibleProjects"
          :key="project.id"
          type="project"
          :show-heading="false"
          v-bind="project"
        />
      </Grid>
    </div>
    <div class="col-start-2 col-span-3">
      <h4>Recent Update</h4>
      <FeatureCard v-bind="recentUpdate" type="update" :show-heading="false" />
    </div>
    <div class="col-start-2 col-span-3 text-center">
      <h4 class="!mb-2">Like what you see?</h4>
      <h4 class="!font-normal">Be first to checkout a release!</h4>
      <input type="email" placeholder="Email Address" />
      <button type="submit" @click="handleNewsletterClick">
        <span>Submit</span>
      </button>
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
import { multipleProjectsQuery, allUpdatesQuery } from '~/graphql/queries';
const { query } = useBackend();

const notibleProjects = await query(
  'multiple-projects',
  multipleProjectsQuery,
  {
    slugs: ['balloon-fight', 'vue-form-api', 'cardinal-financial', 'foo-mo'],
  }
);

const recentUpdate = await query('recent-update', allUpdatesQuery).then(
  (updates) => updates[0]
);

function handleNewsletterClick(e) {}
</script>

<style scoped>
.hero {
  @apply w-fit m-auto;
}
.hero h1 {
  font-size: clamp(70px, 7vw, 100px);
}
.avatar {
  background-image: url('https://i.imgur.com/6Ay2gYA.jpg');
  background-size: cover;
  background-position: center;
  @apply rounded-2xl;
}
</style>
