<!-- study/code-style -->

# code-style

## I use VSCode, TS, Next.js, tailwind, pnpm, ES modules.

## I prefer:

I love

- ESM
- inferred TS
- named exports
- click-to-definition (blurring BE-FE boundaries)
- sorted imports
- arrow functions
- `as const`
- TS `interface`
- configs in `.ts`
- Destructuring props in a function signature
- consistent separate `import type`
- linebreak style `unix` `\n`
- Interweaving `<Client slot={<ServerComponent />} />`

## I find useful:

- type narrowing
- to find html tag by its UI `class` is the source code

## I tolerate:

- hand-written return types
- plain js
- configs in .js
- accessing variables using dot notation
- TS `type`
- tailwindcss

## I am strongly against:

- commonjs
- default import with renaming
- plain js dom manipulations in React projects
- `function` keyword (communicates that `this` is used)
- accessing function arguments using dot notation
- light mode on websites, maybe cause I am a vampire :D
- default export
- plain css
- writing repeating styles on buttons :D
- passing props and props drilling
- dilemma between `props drilling` vs `context` - obsoleted by `signals` 😂, thanks God!
- component props (`Bast` component is <Catgirl /> :3 - without props is best)
- recursive functions

## I would BAN entirely from existence:

- ts type assertions (misused `as` keyword), that a lie about runtime values.
- ts function overloads
- ts lies and incorrectly widened combinations of array tuple types (via pipe `|` symbol)
- leading underscores in names
- non-null assertion
- old commonjs code style - like `require()`
