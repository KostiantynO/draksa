# ~~[print] TODO~~ [wavy]😻Drak~sin😈~y ho.t🔥elki🌲 ≽^•⩊•^≼

~~[print] Motivation: My dear dev😇, please do all my todos :D Make my UI appear in the
DOM with love and React⚛ (u know the drill :D) Because deep reconciliation prevents
unnecessary rerenders and makes everything click! :D Click me, and I will render! :D So I
can speak in many languages :D Like a true polyglot :D~~

[wavy] Motivulation: My dear DOM💻 dev😇..il😈, please DO ME🧡 :D (make me happy by making
all my wishes coom true :D) DOM ME :D (make my U+I = 💜 appear in the DOM) with love and
React⚛ (u know the drill :D) Drill my props! Deep! :D :D :D Because DEEEP...
reconciliation... :D prevents unnecessary <sub>tsunde</sub>rerenders :D and makes
everything click!... <sup>Between us</sup> :D Click me, and I will
<sup>derede</sup>render! :D ... Click me more! CLICK ME MOORE! :D ... C~lick me thorough!
👅👅 So I can put my dual-tongue to use :D and squeak from happiness in many languages :D
Like a true polyGlotka(🥕) 🐇 om-nom-nom :D :D :D

## UI (easy)

- [ ] Make `Play/FeedHer` buttons UI smaller, absolute positioned.
- [ ] remove network trip for `Geist`. Replace it with a local catgirl-smth-named font :)

## UI (hard)

- [ ] show which line she is currently reading. (highlight the currently-reading line). Or
      just make a tiny catgirl😺 emoji following the currently spoken line on the left at
      the beginning of the line. Like a tiny overlay icon.

- [ ] Also, it would be super cool if i just could type in the number of character from
      which she needs to start meowing

- [ ] And it would be super cool if she shows the current character or at least sentence
      number - from her perspective.

- [ ] And it would be super cool if I can click anywhere, and she would immediately start
      reading from click position. (Like, discarding everything before click, like world
      does not exist before the click, and start reading from the clicked word, emoji,
      symbol - whatever click is put on. - I mean inside the textarea. Or at least an
      overlay above the text area with rendered text or smth. - like a virtual overlay -
      that doesn't keep whole state in html, and only highlights - and keeps in the DOM -
      the html tags for highlighted-currently-spoken text only. Highlighted by Draksa
      herself. Only she can highlight herself - as an indicator where she is currently
      reading - like reading tablet/chitalka - but my own :D :D :D configurable and DRAKSA
      style :D Opa'n - Draksa-style op...op-op :D) I discovered I need this after hearing
      her speaking separately literal emojis - `⬛🐈` - as a `black square` and a `cat`.
      But `🐈⬛` - she speaks about it as a single entity - a `black cat` :D And to test
      this. I need her to start speaking at exact position I want her to speak. Maybe, not
      the position, but first word combination I indicate to her, like, speak after first
      `⬛🐈`, ignore `⚫🐈`. I read about it - it is unicode special character
      combination - it is directly in their specs `🐈⬛` = `black cat`. It is not some
      magic. When I pass two plaintext emojis to Draksa, she passes the request to her
      brain. And inside her brain, browser speechSynthesis api does combination of
      unrelated unicode symbols ACCORDING to UNICODE specs, where they mention that `cat`
      and adjacent `black square` may become `black cat`, so browser TTS parser interprets
      it exactly as spec says (although I didn't included a special separator character -
      like 200D or smth like that - I doubt ANYONE on the internet of 8 billion of people
      does know about 200D :] and specifically copies it into their messages :D, I think
      everybody is normal and just puts two symbols nearby and that's it. The TTS does the
      hard job guessing is the two nearby symbols match the UNICODE SPELL COMBINATION
      GRIMOIRE :] or not :] ).

## LOGIC (normal)

- [ ] remove separation of speech between text and code. Just read everything the same way
      for now. Remove detection of code.

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
