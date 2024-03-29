module.exports = {
  parser: '@typescript-eslint/parser',
  // NOTE: using `plugin:` prefix makes it so that the corresponding
  // eslint plugin is automatically enabled and the rules are turned on
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:jsx-a11y/recommended', 'plugin:lodash/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'lodash'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    // jest: true,
  },
  rules: {
    // You must disable the base rule as it can report incorrect errors
    'no-var': 'error',
    'eslint-comments/no-unlimited-disable': 'off',
    // Turn off unuseful TS specific rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'lodash/import-scope': [2, 'member'],
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-lodash-typecheck': 'off',
    'lodash/collection-ordering': 'off',
    'lodash/prop-shorthand': 'off',
    'lodash/prefer-constant': 'off',
    // Enforce absolute imports to be first
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'sibling', 'index'],
        ],
      },
    ],
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
  },
};
