import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // Naming conventions: camelCase for variables/functions, PascalCase for types/classes
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
      ],

      // Cyclomatic complexity: warn on functions with complexity > 15
      complexity: ['warn', { max: 15 }],

      // Large file detection: warn on files with > 500 lines
      'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],

      // Tech debt tracking: warn on TODO/FIXME comments
      'no-warning-comments': [
        'warn',
        { terms: ['todo', 'fixme', 'hack', 'xxx'], location: 'start' },
      ],
    },
    settings: {
      react: {
        version: '19.1',
      },
    },
  },
  {
    // Guardrail: runtime code (pages + components) must never import the seed
    // corpora under src/seed/data. Those are authoring blobs written into Payload
    // by the seeder; reading them at runtime creates a second, drifting source of
    // truth (this is exactly how the homepage "In Production" section silently
    // diverged from /case-studies). Read published data via src/lib/payload.ts.
    files: ['src/app/**/*.{ts,tsx}', 'src/components/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/seed/data', '@/seed/data/*', '@/seed/data/**', '**/seed/data/*'],
              message:
                'Do not import seed corpora into runtime code. Seed data lives in src/seed/data and is written into Payload by the seeder — read published records through src/lib/payload.ts instead.',
            },
          ],
        },
      ],
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '.open-next/**',
      // apps/demo lints itself (apps/demo/eslint.config.mjs); its build
      // artifacts (.open-next) must not be swept by the root config.
      'apps/demo/**',
      '.wrangler/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.mjs',
      'src/payload-types.ts',
      'src/migrations/**',
    ],
  },
  prettierConfig
)
