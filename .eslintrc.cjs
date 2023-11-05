module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true    
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types':'off',
    'react/react-in-jsx-scope':'off',
    'react/jsx-uses-react':'off'    
  },
  settings:{
    "react":{
      "version":"detect"
    }
  }
}
