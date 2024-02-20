<template>
  <div class="grid grid-cols-5 gap-y-16 lg:gap-y-36 gap-x-12">
    <div class="hero col-span-5">
      <h4>Writing</h4>
      <h1>games, apps, websites</h1>
      <h4 class="text-right">since 2012</h4>
    </div>
    <div
      class="col-span-5 h-80 md:h-full md:col-span-2 2xl:col-span-1 2xl:col-start-2 avatar"
    ></div>
    <div class="col-span-5 md:col-span-3 2xl:col-span-2 text-left">
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
    <div class="col-start-1 col-span-5 2xl:col-span-3 2xl:col-start-2">
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
    <div class="col-start-1 col-span-5 2xl:col-start-2 2xl:col-span-3">
      <h4>Recent Update</h4>
      <FeatureCard v-bind="recentUpdate" type="update" :show-heading="false" />
    </div>
    <div class="col-span-5 text-center">
      <h4 class="!mb-2">Like what you see?</h4>
      <h4 class="!font-normal">Be first to checkout a release!</h4>
      <form
        action="https://ianmcelvain.us8.list-manage.com/subscribe/post?u=e7692bdd97e4ee4f988f767cd&amp;id=5b856bb52a&amp;f_id=00717ce0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate=""
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="Email Address"
          class="my-4"
          id="mce-EMAIL"
          required=""
          value=""
        />
        <div aria-hidden="true" style="position: absolute; left: -5000px">
          /* real people should not fill this in and expect good things - do not
          remove this or risk form bot signups */
          <input
            type="text"
            name="b_e7692bdd97e4ee4f988f767cd_5b856bb52a"
            tabindex="-1"
            value=""
          />
        </div>
        <button
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          class="button"
        >
          Submit
        </button>
      </form>
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

const newsletterInput = reactive({
  email: '',
  error: null,
});

async function submitNewsletterSignup(e) {
  if (
    !newsletterInput.email ||
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
      newsletterInput.email
    )
  ) {
    newsletterInput.error = 'Form invalid';
    return;
  }
}
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

/* button {
  @apply bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded;
} */

button {
  @apply text-white py-2 px-4 mx-4 shadow-md cursor-pointer 
          font-semibold text-sm uppercase tracking-widest
          rounded-xl transition-all duration-100 ease-in bg-orange-500
          hover:scale-110 hover:shadow-lg
          active:scale-90 active:shadow-none;
}
button span {
  @apply font-semibold text-sm uppercase tracking-widest;
}
input {
  @apply py-2 px-4 mx-4 shadow-md
          rounded-xl transition-all duration-100 ease-in
          focus:scale-90 focus:shadow-none focus:outline-orange-500
          !border-none outline-none;
}
</style>
