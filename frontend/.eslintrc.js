module.exports = {
  // 適用環境
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'eslint:recommended',

    'plugin:prettier/recommended',
    'prettier',
  ],
  // パーサー
  parser: '@typescript-eslint/parser',
  // jsxにお利用
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    // import 文でモジュールを利用
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jest'],
  // React のバージョン自動検出
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    // 拡張子ts/tsxファイルインポートの解釈
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      // "webpack": {
      //   "config": "webpack.config.js"
      // }
    },
  },
  rules: {
    'prettier/prettier': 'error',
    // 名前付きexportの使用を許容
    'import/prefer-default-export': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'import/no-unresolved': 'off',
    // TypeScirpt なので prop-types は不要
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    // JSXを含むファイルの拡張子を制限
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    // 拡張子ts/tsxファイルインポートの解釈
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
