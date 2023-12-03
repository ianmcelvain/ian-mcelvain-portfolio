<template>
  <article class="markdown" v-html="markdown.render(source)" />
</template>

<script setup>
import MarkdownIt from 'markdown-it';
import MarkdownItAbbr from 'markdown-it-abbr';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItFootnote from 'markdown-it-footnote';
import MarkdownItHighlightjs from 'markdown-it-highlightjs';
import MarkdownItSub from 'markdown-it-sub';
import MarkdownItSup from 'markdown-it-sup';
import MarkdownItTasklists from 'markdown-it-task-lists';
import MarkdownItTOC from 'markdown-it-toc-done-right';

defineProps({
  source: {
    type: String,
    default: '',
  },
});

const markdown = new MarkdownIt()
  .use(MarkdownItAbbr)
  .use(MarkdownItAnchor)
  .use(MarkdownItFootnote)
  .use(MarkdownItHighlightjs)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(MarkdownItTasklists)
  .use(MarkdownItTOC);
</script>

<style>
.markdown {
  @apply prose prose-slate mx-auto mb-32;
}
/* Hack to counter image margins so that em tags look like they at image captions */
.markdown > p > em {
  @apply block -mt-8;
}
</style>
