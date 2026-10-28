# ~~[print] TODO~~ [wavy]😻Drak\~sin😈\~y ho.t🔥elki🌲 ≽^•⩊•^≼

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

- [x] whitespace - combined humanize and whitespace with silence later.

## UI (hard)

### feat: Where am I? :D

Note: Draksa started as a simple page. One input and one button. The she grown up, and now
has textarea and a button :D But each SEEMINGLY simple addition I want to add to her - is
an extremely intense engineering task, that provides a real challenge for my mind. And for
app's performance. This SO funny :D I just want a bunny :D Hopping around the text.

Simpler said than done :D

- IRL u need to:
- consider unicode.
- know the place where text splits
- understand, that after humanizing the text, it will have different length then
  original - need to map pre-to-post processing chunks.
- translate initial text -> parsed text -> current word position -> bunny hop x-y
  coordinates :D

Me-Human: I want a small bunny (1rem = 22x24px box) following the currently spoken
line/word (exact or coarse following - change in settings).

Machine: And how i must do that? :D

Me-Programmer: I am the answer :D

Me-Developer: I am here just to translate human needs into machine-understandable
instructions. Also I don't know why i split programmer from developer. They should be in
the same sentence :D

AI-agent: I am taught on the whole world codies without attribution. I can do any task you
throw at me.

Me: Ok. Then do that :D But explain and teach me how to do that.

- Also me: Why am doing this task for 2 years? It is a simple input and a button. :D
  - Answer:
    - Me: I also want to KNOW how to implement each feature. And I want a lot of features.
    - And I want performance. And I need to upgrade next from 15 to 16. And eslint is
      hell, and it is hard to upgrade it from 8 to 9 with custom rules.
    - And I want her to speak in CHUNKS, not in a single long line.
    - And I want her to speak in different languages.
    - And I want her to not to start from the beginning of the text, but continue to speak
      after language changed.
    - And I want a debounced input.
    - And I want to see what's inside `HerMind`.
    - And I want custom made - reinvent the wheel MY OWN `RippleButton` :D Which is not a
      button, but a `Ripples` wrapper that provides on click `span` creation with css
      `transform` expanding. And setTimeout management for `span` cleanup.

---

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
- [ ] split initial text into chunks by \n. Then, if line is longer that the 80/100 (I
      actually don't want to set hard boundary - i just want text to split in the exact
      places, where it is wrapped inside the textarea. So, it must look the same as in
      textarea, but be splitted into chunks - by sentence - in memory. But it may just be
      easier and more practical to set hard limit for 80 symbols - as recommended reading
      length by prettier or idk what :D) symbols - split it again by dot or comma or
      exclamation mark. Assign a `single group number` - an `initial text line number` to
      a splited e.g. ~3-5 senteses. And make bunny-hop :D on each of them correctly
      following the order of senteses of initial text and a suborder of a splitted long
      line. This whole task may be simplified signifiCAnTly if bunny knows the x-y
      coordinates of the text that is currently being read aloud by Draksa. Which would
      require either to highlight a span of initial text. Or provide each word it's own
      dom-element to take coordinates from - like `.getBoundingClientRect()` or smth other
      more performant solution, that spamming page with tons of dom elements.

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

## PERF (easy)

- [ ] use `FOR` component from `preact` to render `lists` of `languages` and
      `debounce delay`.
- [ ] Use signals `Model` as a replacement for a God object. To me it is the same thing,
      don't know if it will improve any perf.
- [ ] Use `computed` to buffer updates -> react diff only if `computed` value changes. But
      for react
      [computed](https://github.com/preactjs/signals/blob/main/packages/core/README.md#computedfn)

## PERF (normal)

- [ ] Check compatibility, if all my packages will play nice if I upgrade to
      [Next.js v16](https://nextjs.org/blog/next-16) specifically SWC and react-compiler.
- [ ] `add Next.js 16 + SWC`/rust
- [ ] Read and check if turbopack is working with SWC in dev, or is it separate thing?
- [ ] Check why next.js v16 recommends the `babel plugin` for `react compiler`.
- [ ] Try to add `SWC plugin` for `react compiler` `instead` of `babel` one and see if it
      works, because build time is annoyingly long with babel in dev (on cold start
      sometimes it is ~5,~10,~20s). After that ~1.5s and below, usually below 0.2s
- [ ] perf-6 try to set `ids` on initial chunks, when `.split(legs)` called for chunking
      by `\n` and loop over real `ids` in `WhatsInside` to reduce rerenders of each
      paragraph if possible. (only adding a space in the textarea to one initial paragraph
      = only one paragraph rerenders in the output.)

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
