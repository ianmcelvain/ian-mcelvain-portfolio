import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'object-curly-newline': ['error', {
      // Object literals
      ObjectExpression: {
        multiline: true,
        minProperties: 1,
      },
      // Destructuring
      ObjectPattern: {
        multiline: true,
        minProperties: 3,
      },
      ImportDeclaration: 'never',
      ExportDeclaration: {
        multiline: true,
        minProperties: 3,
      },
    }],
    'object-property-newline': 'error',
    'no-console': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/no-mutating-props': [
      'error',
      {
        shallowOnly: true,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'always',
        },
      },
    ],
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
  },
});
