module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    camelcase: 'off',
    'no-mixed-spaces-and-tabs': 0,
    semi: [
      'warn',
      'never',
    ],
    'react/jsx-one-expression-per-line': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': 'warn',
    'import/prefer-default-export': 'off',
    'arrow-parens': [
      'warn',
      'as-needed',
    ],
    'no-underscore-dangle': 'off',
    'no-return-assign': [
      'warn',
      'except-parens',
    ],
    'object-curly-newline': 'off',
    'react/prop-types': 'off',
    'no-sequences': 'off',
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'no-unused-vars': ['warn'],
    'no-confusing-arrow': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
    },
    ],
    'react/display-name': 'off',
    'n/no-callback-literal': 'off',
    'react/no-deprecated': 'off',
    indent: ['warn', 2, {
      SwitchCase: 1,
    },
    ],
    'no-tabs': 0,
    'newline-before-return': 'warn',
    'no-multiple-empty-lines': 'warn',
    quotes: ['warn', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    'jsx-quotes': ['warn', 'prefer-single'],
  },
}
