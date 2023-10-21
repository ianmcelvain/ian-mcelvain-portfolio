module.exports = {
  root: false,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'no-console': 'warn',
    // 'vue/require-default-prop': 'off',
  },
};
