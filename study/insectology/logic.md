# Logic:

- [ ] `!` - reads wrongly as `not`. Perform exclamation `!` detection only for code like
      `!==` or none at all.
- [ ] Replace `less than <` and `greater than >` with silent `empty string ''` in
      html/JSX/TSX code
- [ ] When typing into a `Throat` textarea, compare input and signals storage by length,
      NOT by content. Is it more performant to compare two numbers?

  Instead of 2 big texts letter by letter?

  I want to know for sure if it is.

  Instead of `polyGlotka.value`,

  compare `polyGlotka.value.length === textarea.value.length`

- [ ] Do not read useless characters, that annoy the human:
- [ ] do not announce the beginning and end of the 'quote' blocks, like catGPT's `TTS`
      does.
- [ ] read `right pointing arrow →` as `is`

- Do not read aloud markdown escape chars:
  - [ ] back quote `` ` ``
  - [ ] asterisk `*`
  - [ ] underscore `_`
