// eslint.config.ts

import atEslint_Js from '@eslint/js';
import eslintConfigNext_CoreWebVitals from 'eslint-config-next/core-web-vitals';
import eslintConfigNext_Typescript from 'eslint-config-next/typescript';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import typescriptEslint from 'typescript-eslint';

// @ts-expect-error Lib does not export types
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';

const eslintConfig = defineConfig([
  atEslint_Js.configs.recommended, // useless???

  ...eslintConfigNext_CoreWebVitals,
  ...eslintConfigNext_Typescript,

  // SEVERITY: 8 - adds TS strict type checks
  typescriptEslint.configs.recommendedTypeChecked,
  typescriptEslint.configs.stylisticTypeChecked,

  eslintPluginReactHooks.configs.flat['recommended-latest'],

  {
    // SEVERITY: 9 - adds 'scope', to do not lint config file itself.
    files: ['src/**/*.{ts,tsx}'],

    plugins: {
      'prefer-arrow-functions': preferArrowFunctions,
    },

    languageOptions: {
      // SEVERITY: 8 - adds TS strict type checks
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
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
      'func-style': 'error',

      'prefer-arrow-functions/prefer-arrow-functions': [
        'error',
        {
          classPropertiesAllowed: false, // No arrows in class properties?
          // Set true if you use classes
          disallowPrototype: true, // Block functions on prototypes (anti-this)
          singleReturnOnly: false,
        },
      ],
      'no-shadow': 'error',
      'no-restricted-imports': 'error',
      'no-param-reassign': 'error',
      'object-shorthand': 'warn',

      // for now I will keep it disabled.
      // 'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],

      // VSCode settings sort better in my humble opinion.
      // Cause i discover them by accident :D :D :D
      // in my editor today ...
      // I may change my mind later,
      // but for now, i will use those settings in order to format my code:
      //
      //  settings.json
      // {
      //       "[typescript][typescriptreact][javascript][javascriptreact]": {
      //   "editor.formatOnPaste": false,
      //   "editor.formatOnType": false,
      //   "editor.formatOnSave": false,
      //   "editor.codeActionsOnSave": {
      //     "source.formatDocument": "explicit", // Prettier -> ESLint
      //     "source.organizeImports": "explicit", // Real Magic
      //     "source.sortImports": "explicit", // magic
      //     "source.removeUnusedImports": "explicit", // trick
      //     "source.fixAll.eslint": "explicit", // MUST HAVE for separate type imports.
      //   },
      // },

      'import/no-default-export': 'error',
      'import/no-unresolved': 'error',
      'import/newline-after-import': 'error',

      // this is *magic*
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
    extends: [typescriptEslint.configs.disableTypeChecked],
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
