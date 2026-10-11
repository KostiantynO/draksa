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
Issues with peer dependencies found

✕ unmet peer eslint
  Installed: 10.12.0
  Wanted:
    "^9":
      eslint-plugin-import@2.32.0
    "^9":
      eslint-plugin-jsx-a11y@6.10.2
    "^9.7":
      eslint-plugin-react@7.37.5

2026-10-10 09:50:40.701 [info] ESLint server is starting.
2026-10-10 09:50:41.125 [info] ESLint server running in node v24.21.0
2026-10-10 09:50:42.623 [info] ESLint server is running.
2026-10-10 09:50:43.455 [error] (node:12884) [DEP0190] DeprecationWarning: Passing args to a child process with shell option true can lead to security vulnerabilities, as the arguments are not escaped, only concatenated.
2026-10-10 09:50:43.455 [error] (Use `Code --trace-deprecation ...` to show where the warning was created)
2026-10-10 09:50:46.989 [info] ESLint library loaded from: C:\top\draksa\node_modules\.pnpm\eslint@9.39.5_jiti@2.7.0_supports-color@7.2.0\node_modules\eslint\lib\api.js
2026-10-10 09:51:23.466 [error] Linting file file:///c%3A/top/draksa/src/draksa/cumponents/Draksa.tsx took 36473ms. Please check the ESLint rules for performance issues.
```
