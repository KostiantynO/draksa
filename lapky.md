<!-- lapky.md -->

<!-- Не залишати слідів! 🐾 -->

```bash
which pnpm

# pnpm add
ea -D \
  eslint \
  eslint-config-next \
  eslint-plugin-prefer-arrow-functions@3.4.2 \
  @eslint/js \
  typescript-eslint \
  prettier \
  prettier-plugin-tailwindcss \
  @types/eslint \
  eslint-plugin-import \
  eslint-import-resolver-typescript \
  eslint-plugin-react-hooks \
  @next/eslint-plugin-next \
  babel-plugin-react-compiler

# this is misleading
pnpm create @eslint/config@latest
# better to use next.js eslint flat config, than to init it yourself

ea @preact/signals-react
ea -D tsx

npm update -g pnpm

node -v
npm -v
pnpm -v
where.exe pnpm
pnpm store path
pnpm store status

e audit -i

ea next@latest react@latest react-dom@latest
ea -D @types/react@latest @types/react-dom@latest
pnpm dlx @next/codemod@canary upgrade latest
rm -rf .next
e i
en
ea -D babel-plugin-react-compiler@latest

pnpm dev --internal-trace

# unusable. Idea is good. Execution and insights lack any humanity. :D
pnpm next internal trace .next-profiles/trace-turbopack.bin

pnpm dlx @next/codemod@canary next-lint-to-eslint-cli .
ea -D @types/node@latest

ea -D eslint@latest

pnpm peers check

ea next@latest react@latest react-dom@latest

ea -D @typescript/native@npm:typescript@^7.0.2 typescript@npm:@typescript/typescript6@^6.0.2

pnpm list typescript @typescript/native @typescript/typescript6
# Legend: production dependency, optional only, dev only
#
# draksa@4.1.0 C:\top\draksa (PRIVATE)
# │
# │   devDependencies:
# └── typescript@5.9.3
#
# 1 package

pnpm why typescript
# typescript@5.9.3
# ├─┬ @typescript-eslint/eslint-plugin@8.71.1
# │ └─┬ typescript-eslint@8.71.1
# │   ├── draksa@4.1.0 (devDependencies)
# │   └─┬ eslint-config-next@16.4.0
# │     └── draksa@4.1.0 (devDependencies)
# ├─┬ @typescript-eslint/parser@8.71.1
# │ ├── @typescript-eslint/eslint-plugin@8.71.1 [deduped]
# │ ├─┬ eslint-module-utils@2.14.0
# │ │ └─┬ eslint-plugin-import@2.32.0
# │ │   ├── eslint-config-next@16.4.0 [deduped]
# │ │   ├─┬ eslint-import-resolver-typescript@3.10.1
# │ │   │ ├── eslint-config-next@16.4.0 [deduped]
# │ │   │ └── eslint-module-utils@2.14.0 [circular]
# │ │   └─┬ eslint-import-resolver-typescript@4.4.5
# │ │     └── draksa@4.1.0 (devDependencies)
# │ ├── eslint-plugin-import@2.32.0 [deduped]
# │ └── typescript-eslint@8.71.1 [deduped]
# ├─┬ @typescript-eslint/project-service@8.71.1
# │ └─┬ @typescript-eslint/typescript-estree@8.71.1
# │   ├── @typescript-eslint/parser@8.71.1 [deduped]
# │   ├─┬ @typescript-eslint/type-utils@8.71.1
# │   │ └── @typescript-eslint/eslint-plugin@8.71.1 [deduped]
# │   ├─┬ @typescript-eslint/utils@8.71.1
# │   │ ├── @typescript-eslint/eslint-plugin@8.71.1 [deduped]
# │   │ ├── @typescript-eslint/type-utils@8.71.1 [deduped]
# │   │ ├─┬ eslint-plugin-import-x@4.17.1
# │   │ │ ├── draksa@4.1.0 (devDependencies)
# │   │ │ ├── eslint-import-resolver-typescript@3.10.1 [deduped]
# │   │ │ └── eslint-import-resolver-typescript@4.4.5 [deduped]
# │   │ ├─┬ eslint-plugin-prefer-arrow-functions@3.10.2
# │   │ │ └── draksa@4.1.0 (devDependencies)
# │   │ └── typescript-eslint@8.71.1 [deduped]
# │   └── typescript-eslint@8.71.1 [deduped]
# ├─┬ @typescript-eslint/tsconfig-utils@8.71.1
# │ ├── @typescript-eslint/project-service@8.71.1 [deduped]
# │ └── @typescript-eslint/typescript-estree@8.71.1 [deduped]
# ├── @typescript-eslint/type-utils@8.71.1 [deduped]
# ├── @typescript-eslint/typescript-estree@8.71.1 [deduped]
# ├── @typescript-eslint/utils@8.71.1 [deduped]
# ├── draksa@4.1.0 (devDependencies)
# ├── eslint-config-next@16.4.0 [deduped]
# ├─┬ ts-api-utils@2.5.0
# │ ├── @typescript-eslint/eslint-plugin@8.71.1 [deduped]
# │ ├── @typescript-eslint/type-utils@8.71.1 [deduped]
# │ └── @typescript-eslint/typescript-estree@8.71.1 [deduped]
# └── typescript-eslint@8.71.1 [deduped]
#
# Found 1 version of typescript

pnpm why @typescript/native
pnpm why @typescript/typescript6

pnpm exec tsc --version # before: 5.9.3

pnpm exec tsc6 --version # before: Command "tsc6" not found

node --input-type=module -e "import ts from 'typescript'; console.log('TypeScript API:', ts.version); console.log('Resolved package:', import.meta.resolve('typescript'))"
# before:
# TypeScript API: 5.9.3
# Resolved package: file:///C:/top/draksa/node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/typescript.js

pnpm ts-check
# $ next typegen && tsc
# Generating route types...
# ✓ Types generated successfully

pnpm exec node ./node_modules/@typescript/native/bin/tsc --version
# node:internal/modules/cjs/loader:1424
#   throw err;
#   ^
#
# Error: Cannot find module 'C:\top\draksa\node_modules\@typescript\native\bin\tsc'
#     at Module._resolveFilename (node:internal/modules/cjs/loader:1421:15)
#     at defaultResolveImpl (node:internal/modules/cjs/loader:1059:19)
#     at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1064:22)
#     at Module._load (node:internal/modules/cjs/loader:1227:37)
#     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
#     at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
#     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
#     at node:internal/main/run_main_module:33:47 {
#   code: 'MODULE_NOT_FOUND',
#   requireStack: []
# }
#
# Node.js v24.13.0

"ts-check": "next typegen && node ./node_modules/@typescript/native/bin/tsc"

git mv <old>.tsx <new>.ts

```
