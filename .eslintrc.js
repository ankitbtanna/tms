// 'eslint:recommended', 'airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier', 'prettier/@typescript-eslint'
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true
    }
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
    es6: true
  },
  rules: {
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: false
    }],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': ['error', 'never'],
    'import/order': 'off',
    'no-useless-constructor': 'off'
  },
  plugins: ['html', 'prettier', 'react-hooks', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
