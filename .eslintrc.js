module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'no-null',
  ],
  rules: {
    'linebreak-style': 'off',
    'no-await-in-loop': 'off',
    'max-len': ['error', { code: 150 }],
    'no-null/no-null': 2,
  },
};
