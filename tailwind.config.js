import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindConfig],
  content: [
    './node_modules/@storefront-ui/vue/**/*.{js,mjs}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    'docs/content/**/*.md',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      typography: ({ theme }) => ({
        primary: {
          css: {
            '--tw-prose-body': 'rgb(var(--color-gray-700))',
            '--tw-prose-headings': 'rgb(var(--color-gray-900))',
            '--tw-prose-lead': 'rgb(var(--color-gray-600))',
            '--tw-prose-links': 'rgb(var(--color-primary-500))',
            '--tw-prose-bold': 'rgb(var(--color-gray-900))',
            '--tw-prose-counters': 'rgb(var(--color-gray-500))',
            '--tw-prose-bullets': 'rgb(var(--color-gray-300))',
            '--tw-prose-hr': 'rgb(var(--color-gray-200))',
            '--tw-prose-quotes': 'rgb(var(--color-gray-900))',
            '--tw-prose-quote-borders': 'rgb(var(--color-gray-200))',
            '--tw-prose-captions': 'rgb(var(--color-gray-500))',
            '--tw-prose-code': 'rgb(var(--color-gray-900))',
            '--tw-prose-pre-code': 'rgb(var(--color-gray-900))',
            '--tw-prose-pre-bg': 'rgb(var(--color-gray-50))',
            '--tw-prose-pre-border': 'rgb(var(--color-gray-200))',
            '--tw-prose-th-borders': 'rgb(var(--color-gray-300))',
            '--tw-prose-td-borders': 'rgb(var(--color-gray-200))',
            '--tw-prose-invert-body': 'rgb(var(--color-gray-200))',
            '--tw-prose-invert-headings': 'rgb(var(--color-white))',
            '--tw-prose-invert-lead': 'rgb(var(--color-gray-400))',
            '--tw-prose-invert-links': 'rgb(var(--color-primary-400))',
            '--tw-prose-invert-bold': 'rgb(var(--color-white))',
            '--tw-prose-invert-counters': 'rgb(var(--color-gray-400))',
            '--tw-prose-invert-bullets': 'rgb(var(--color-gray-600))',
            '--tw-prose-invert-hr': 'rgb(var(--color-gray-800))',
            '--tw-prose-invert-quotes': 'rgb(var(--color-gray-100))',
            '--tw-prose-invert-quote-borders': 'rgb(var(--color-gray-700))',
            '--tw-prose-invert-captions': 'rgb(var(--color-gray-400))',
            '--tw-prose-invert-code': 'rgb(var(--color-white))',
            '--tw-prose-invert-pre-code': 'rgb(var(--color-white))',
            '--tw-prose-invert-pre-bg': 'rgb(var(--color-gray-800))',
            '--tw-prose-invert-pre-border': 'rgb(var(--color-gray-700))',
            '--tw-prose-invert-th-borders': 'rgb(var(--color-gray-700))',
            '--tw-prose-invert-td-borders': 'rgb(var(--color-gray-800))',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
