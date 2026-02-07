// eslint.config.ts

import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugIn from 'eslint-plugin-import';
// import arrows from 'eslint-plugin-prefer-arrow-functions';
// import react from 'eslint-plugin-react';
import globals from 'globals';
import ts from 'typescript-eslint';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import nextPlugin from '@next/eslint-plugin-next';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // arrows.configs.all, // enforces arrows, but ultimately useless

  js.configs.recommended, // useless???

  // SEVERITY: 8 - adds TS strict type checks
  ts.configs.recommendedTypeChecked,
  ts.configs.stylisticTypeChecked,

  // react.configs.flat.recommended, // useless???
  // react.configs.flat['jsx-runtime'], //  useless???

  {
    // SEVERITY: 9 - adds 'scope', to do not lint config file itself.
    files: ['src/**/*.{ts,tsx}'],

    // SEVERITY: 9 - adds 'import' rules.
    extends: [
      importPlugIn.flatConfigs.recommended,
      importPlugIn.flatConfigs.typescript,
      importPlugIn.flatConfigs.react,
    ],

    linterOptions: { reportUnusedDisableDirectives: 'warn' }, // useless?

    languageOptions: {
      parser: ts.parser, //  useless?

      ecmaVersion: 'latest', // useless
      sourceType: 'module', // useless

      // SEVERITY: 8 - adds TS strict type checks
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },

      // useless?
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    // SEVERITY: 7 - remove squiggly lines on imports
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },

    rules: {
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'never' },
      ],

      '@typescript-eslint/consistent-type-imports': 'warn',

      '@typescript-eslint/no-empty-object-type': [
        'warn',
        { allowInterfaces: 'with-single-extends' },
      ],

      // personal
      'linebreak-style': ['error', 'unix'],
      'prefer-arrow-callback': ['error', { allowUnboundThis: false }],
      'no-shadow': 'error',
      'no-restricted-imports': 'error',
      'no-param-reassign': 'error',
      'object-shorthand': 'warn',

      'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],

      'import/no-default-export': 'error',
      'import/no-unresolved': 'error',
      'import/newline-after-import': 'error',
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

      // ahhh, bliss :D
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'unknown',
            'type',
          ],
          pathGroups: [
            { pattern: './globals.css', group: 'builtin', position: 'before' },
            { pattern: '@/**', group: 'internal' },
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      'no-warning-comments': [
        'error',
        {
          terms: [
            'eslint-disable',
            'eslint-disable-next-line',
            'eslint-enable',
            'eslint-enable-next-line',
          ],
          location: 'start',
        },
      ],
    },
  },

  // ignore next.js 'app router' page default export
  {
    files: [
      'src/**/{page,layout,not-found,error}.tsx',
      // 'next.config.ts',
      'prettier.config.mjs',
      // 'eslint.config.ts',
      'postcss.config.mjs',
    ],
    rules: { 'import/no-default-export': 'off' },
  },

  // SEVERITY: 10/10 - disable linting for the config file itself
  {
    files: ['eslint.config.ts'],
    extends: [ts.configs.disableTypeChecked],
  },

  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'next.config.ts',
    'eslint.config.ts',
  ]),
]);

export default eslintConfig;
