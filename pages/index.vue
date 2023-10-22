<template>
  <section className="flex flex-col items-center text-center h-screen !mb-0">
    <PageContainer class-name="text-gray-700">
      <ReadingContainer>
        <h4 className="subtitle">
          Writing games, native apps, and websites since 2012
        </h4>
        <p>
          Started by making Call of Duty mods in C++ which transitioned into
          developing games shortly after. Since then games have been my main
          focus but in parallel I use those software principles and patterns for
          apps and the web.
        </p>
        <div className="flex my-8 justify-center items-center">
          <a href="mailto:ian.mcelvain@gmail.com">
            <!-- <IconButton
                active={false}
                orientation={"horizontal"}
                icon={<FiMail size="28" />}
                text={"ian.mcelvain@gmail.com"}
              /> -->
          </a>
          <a
            href="https://github.com/ianmcelvain"
            target="_blank"
            rel="noreferrer"
          >
            <!-- <IconButton
                active={0}
                orientation={"horizontal"}
                icon={<FiGithub size="28" />}
                text={"ianmcelvain"}
              /> -->
          </a>
        </div>
      </ReadingContainer>
    </PageContainer>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
