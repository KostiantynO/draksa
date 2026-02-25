2026-02-10:

---

---

|-----------------------------------------------------------|

|-----------------------------------------------------------|

|------------------- ⛔ ⚠ WARNING! ⚠ ⛔ -------------------|

|-----------------------------------------------------------|

|--------------- ⚠ THIS IS A WORK OF ART! ⚠ ---------------|

|-----------------------------------------------------------|

|-------------- 🛑 LEAVE WHILE YOU CAN!!! 🛑 --------------|

|--------------------- NOW! :D :D :D -----------------------|

|-----------------------------------------------------------|

---

---

Genres:

- semantic vandalism - playful :D
- aggressive minimalism - codeChuck 💻🪓
- chaotic good

---

`OnlyAdults` and catgirls ARE ALLOWED :D

---

If `you` `need` to `do your homework`, then `GO`!!!

Be cool, like Naruto! He studied at least 3 years! :D

---

Shooe!

---

Hush! :)

---

Kysh-kysh! :D

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

Are you still here??? :)

OKEEEYy, honey :D You have been warned :D

---

---

---

# What: Draksa (MeowAloud)

`Draksa`: Heyyy! I aaamm онлааааа-`Ain`!

## Why:

If your `ReadAloud` doesn't wrok, unlike Skyrim :D

and the world is in chaos and js-diss-array...

```ts
const a: Diss[] = ['M 2 the 🐝']; // ;D
```

Browser and sister will save the day!

YIN! YANG! YO!...oh,... that is the wrong intro :D

---

---

---

`Draksa's story`:

When 🐉 and 🧝‍♀️ love each other, then naga Draksa 😻🐉🐍 is born :D

### Plan:

#### Normal

- [ ] add paste button (from clipboard)
- [ ] add custom dragon/naga/kitty purring ancient language :D
- [ ] remove network trip for `Geist`. Replace it with a local catgirl-smth-named font :D
- [ ] bug - fix lint warning
      [`⚠ The Next.js plugin was not detected in your ESLint configuration.`](https://nextjs.org/docs/app/api-reference/config/eslint#migrating-existing-config)
- [ ] use 1s debounce timer onKeyUp, so it will not fire speech/text parse so many times -
      fans will be more silent.
- [ ] use 50ms debounce timer onPaste
- [ ] make her speak new added information, after you type smth at the end.
  - if old textarea.value.length is bigger than the its length from the previous call of
    `openWideAndPurr`.
    - and it is usually almost always bigger then before
    - because `openWideAndPurr` is only called when you type/paste into a Throat textarea
    - only sometimes you may delete smth... - this case is too hard...
    - so i will implement only the speaking of newly added text for now.
  - call text parser
    - then split new textarea.value into chucks and proceed as usual -> call
      `speakCurrentChunk`
- [ ] improve text splitter:
  - [ ] split at new line `\n`
  - [ ] split at space ` `
  - [ ] split at comma `,`
  - [ ] split at dot `.`
  - [ ] split at semicolon `;`
  - [ ] split at exclamation `!`
  - [ ] split at question `?`
  - [ ] if anything of the above is found in the text - AND FOLLOWED BY a new line `\n` -
        or space ` ` char - make a new chunk.
- [ ] Do this:
  - pass children as a slot into parent jsx <Parent>{children}</Parent> (very relevant)
    especially with smaller `Server Components` passed as `{slots}` into
    `Client Components`, but only when `imported` and called `inside` the big wrapping
    `Server Component parent` like below:

    ```tsx
    import { ServerRenderedContent } from '@/draksa/ServerRenderedContent';
    import { ServerHTML } from '@/draksa/ServerHTML';
    import { ClientModal } from '@/draksa/ClientModal';

    const Page = () => {
      return (
        <ServerHTML>
          <ClientModal mySlot={<ServerRenderedContent />} />
        </ServerHTML>
      );
    };

    export default Page;
    ```

#### What I learned from this project

- React отдаляєт нас от дома.
- Но вещи происходят в доме.
- Нужно думать про структуру и простоту разметки.
- Нам нужна одна кнопка
- One input
- done.
- but in reality i continue to spend tons of time in Chrome + React DevTools with enabled
  rerenders highlight.
- so I end up chucking code into components and chunks, using my @codeChuck superpowers :D
  - As Dan Abramov showed on his blog:
    - move state up to a shared parent (outdated by `signals`), or
    - pass children as a slot into a parent jsx (very relevant, even more so for
      `Server Components`)
    ```tsx
    return <Parent>{children}</Parent>;
    ```
