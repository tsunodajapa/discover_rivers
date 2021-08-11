module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],

  rules: {
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': 'off',
    'vue/attributes-order': 'warning',
    'vue/no-confusing-v-for-v-if': 'warning',
    'vue/no-v-html': 'warning',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/prop-name-casing': 'error',
    'vue/script-indent': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-param-reassign': 'off',
    'vue/max-attributes-per-line': [
      3,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'trailing-comma': [
      true,
      {
        multiline: {
          objects: 'always',
          arrays: 'always',
          functions: 'never',
          typeLiterals: 'ignore',
        },
        esSpecCompliant: true,
      },
    ],
    'func-names': 'off'
  },
};
