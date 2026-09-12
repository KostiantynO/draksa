# TODO

## UI (easy)

- [ ] Make `Play/FeedHer` buttons UI smaller, absolute positioned.
- [ ] remove network trip for `Geist`. Replace it with a local catgirl-smth-named font :)

## LOGIC (normal)

- [ ] improve text splitter:
  - [ ] Make new chunk if `any char below` FOLLOWED BY a `new line` `\n` - or `space` ` `:
    - [ ] split at new line `\n`
    - [ ] split at space ` `
    - [ ] split at comma `,`
    - [ ] split at dot `.`
    - [ ] split at semicolon `;`
    - [ ] split at exclamation `!`
    - [ ] split at question `?`
  - [ ] Detect code endings (like semicolon `;`), and do not speak them if possible :D

- [ ] Detect emojis and speak them correctly.
  - [ ] Do not confuse semicolon `;` with a winking smile ;D
  - [ ] a smiling face `:)` - is not a `colon   closing parenthesis`, but a `smiling face`
        or `smile` or `haha :)` or `I am friendly :)` or `I am nice` or
        `I am a good boy/girl` or `I am polite` :D

- [ ] bug - fix lint warning
      [`⚠ The Next.js plugin was not detected in your ESLint configuration.`](https://nextjs.org/docs/app/api-reference/config/eslint#migrating-existing-config)

## PERF (hard)

- [ ] Measure how long it takes for the algorithm to split a small, medium and big text,
      with tests.

- [ ] Find out which method of text splitting is better/faster -
      array.split('/n').map(magic).join('/n'), or regexp or node.js browser streams? Test
      on a `1GB json` (OBRC).

- [ ] Simplify splitting algo, because it is super redundant (there are two passes - first
      splitter, then regexp on each chunk).

- [ ] create js-app-shell and save it in cache, load it from service-worker.
  - [ ] add version control for cache invalidation
  - [ ] if version not match - download new app shell.
  - [ ] if match, use local app resources.
  - [ ] try to remove network trip on PC for browser voices. (pre-download them locally)

- [ ] offload main thread from everything:
  - [ ] add service worker (`Workie`) - async helper-thread is supa-cool! ;D
  - [ ] move text-splitting to the Workie (it totally can be async)
  - [ ] move all speech invoking to the Workie (it is sync, need to will find out if this
        is possible)
  - [ ] move paste from clipboard to the Workie (it is async anyway)

## VOICE (hardest)

- [ ] add custom dragon/naga/kitty :3 purring ancient language :D
- [ ] Add Language autodetect per word/or even character. For puns recognition. :D

- [ ] extract `text preparation logic` into a separate module folder.
  - [ ] So it can be used elsewhere, like in a local Chrome Extension.
  - [ ] MUST be LOCAL in browser tab.
  - [ ] NO server, NO network trip, unlike `ReadAloud`.
  - [ ] MUST BE FAST, not slow useless like built-in chrome `readaloud` on mobile.
