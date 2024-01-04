<template>
  <section class="flex justify-center !m-0">
    <div class="relative">
      <div class="portal-cake">
        <NuxtLink
          to="https://en.wikipedia.org/wiki/The_cake_is_a_lie"
          target="_blank"
        >
          <img
            alt="portal-cake-is-a-lie"
            class="m-auto"
            src="https://res.cloudinary.com/dksdnxvzm/image/upload/v1704332106/200px_Portal_Cake_c03b0dcbed.png"
          />
        </NuxtLink>
      </div>
      <div id="typewriter" class="text-center mt-8"></div>
    </div>
  </section>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';

export default {
  mounted() {
    this.$confetti.start();

    const typyEl = document.getElementById('typewriter');

    const typewriter = new Typewriter(typyEl, {
      delay: 75,
    });

    typewriter
      .pauseFor(1000)
      .typeString(
        'Enjoy your <strong><span style="color: #27ae60;">PRIS</span></strong>'
      )
      .pauseFor(300)
      .deleteChars(1)
      .typeString('<strong><span style="color: #27ae60;">ZE</span></strong>')
      .pauseFor(1000)
      .callFunction(() => {
        this.$confetti.stop();
      })
      .deleteAll(1)
      .changeDelay(1)
      .typeString(
        'The cake is a <strong><span style="color: red;">LIE</span></strong>'
      )
      .typeString('<br>')
      .typeString(
        'The cake is a <strong><span style="color: red;">LIE</span></strong>'
      )
      .typeString('<br>')
      .typeString(
        'The cake is a <strong><span style="color: red;">LIE</span></strong>'
      )
      .typeString('<br>')
      .changeDelay('natural')
      .typeString(
        'The cake is a <strong><span style="color: red;">L</span></strong>'
      )
      .pauseFor(2000)
      .deleteAll(1)
      .typeString('Sorry about that, ')
      .pauseFor(500)
      .typeString(
        'I think I might have a <span style="color: red;">virus</span>.'
      )
      .pauseFor(800)
      .typeString('<br>')
      .typeString(
        'If you can find the <span style="color: red;">virus</span> on this site,'
      )
      .pauseFor(500)
      .typeString(' please let me know.')
      .pauseFor(1000)
      .start();
  },
  beforeUnmount() {
    this.$confetti.stop();
  },
};
</script>

<style lang="scss" scoped></style>
