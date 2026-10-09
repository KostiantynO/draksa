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

```
