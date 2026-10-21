import coreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

// eslint-config-next 16 ships native flat configs. The FlatCompat wrapper the Payload
// template generates is for the v15 eslintrc format and throws on load here.
const eslintConfig = [
  ...coreWebVitals,
  ...nextTypescript,
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^(_|ignore)',
        },
      ],
    },
  },
  {
    ignores: [
      '.next/',
      '.shots/',
      // Build output from `vercel build`.
      '.vercel/',
      'src/app/(payload)/admin/importMap.js',
      'src/payload-types.ts',
      'src/payload-generated-schema.ts',
      // Written by `payload migrate:create`, edited only by Payload.
      'src/migrations/',
    ],
  },
]

export default eslintConfig
