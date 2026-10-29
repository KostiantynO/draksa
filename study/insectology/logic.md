<!-- study\insectology\logic.md -->

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
- [ ] read `down pointing arrow  ↓` as something shorter, like `down` or `then`, or let it
      be empty string `''`.

- Do not read aloud markdown escape chars:
  - [ ] back quote `` ` ``
  - [ ] asterisk `*`
  - [ ] underscore `_`
  - [ ] dash `-`
  - [ ] dot dot dot `...`
  - [ ] hash `#`
  - [ ] hash hash `##`
  - [ ] hash hash hash `###`

- [ ] after click on pause button, Draksa stops meowing. Then I write smth into input.
      Pause button should become 'play button', not stay frozen forever in 'continue'
      mode. Because I overwritten the old text already with my slight edits.

- [ ] Draksa sometimes stops speaking next chunk / refuses to speak next sentence.

  I heard there is some bug in chrome for 15sec?

  But my speech is not so long.

  I create a short sentences (split by `\n`).

  What affects this random stopping of the speech?

  And also, sometimes pause button does not work -> i press it -> and she continues to
  speak! (sometimes fully continues, sometimes - till the end of the current chunk.)
