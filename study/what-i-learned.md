# What I learned from this project:

- React отдаляєт нас от дома 🏡.
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

---

Software has so much to do to improve itself :D

```txt
In March 2026,
there is still no single magical button
in VS Code / Node / React / Next.js
that spits out exactly
that pretty numbered list automatically
for millions-of-calls scenarios...
but we can get very close
using tools that lean toward
"summaries + tables + sorted hot spots"
instead of pure flamegraph hypnosis.
```

I mean `sorted perf stats in numbers`,

The same as in `TASK MANAGER`:

- `call stack` of functions,
- `time` inside function,
- `RAM`/`CPU` used.

flamegraphs - are useless and unactionable for a normie-human's! Cause you need to dig
manually into the most called function YOURSELF.

And if you are a rackushka 🦀, with a nice rack 🍒 and pointy 🐈👂 ushka, then GL HF :D

Software in dev mode should warn you, what part of it runs slow!

And it should ask you, if that is intentional!

Not YOU going around, like a Snoop Dow, with a mag-glass🔍🕵️‍♂️, looking for troublesome slow
code! And still smashing it with Dr. Dre beats until it behaves!

While others already make millions on their buggy, but working software...
