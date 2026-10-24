# Handy magic mirror:

## Logic:

- [x] `Play` button does not work, because `default lang` is not selected. Voice names
      labels differ widely between PC and mobile, cause they are translated into phone
      locale (`eng`,`cz`,`ukr`). Default lang on mobile should be `en_US`, not `en-US`,
      e.g. `English United States (en_US)`

## UX:

- [ ] voices load too slowly.

## UI:

- [ ] Center bg on Draksa eyes

- [ ] Background is squeezed on mobile when <320px, because of overflow (fix buttons
      width, and flex-wrap lists).

- [ ] make possible to see whole background image on scroll, while text stays centered.
  - [x] Make page normal static.
  - [ ] Add an overflow x-scroll to some bg-image container, and make it `w-full h-full`
  - [ ] Put image into a wrapper div with `overflow-hidden` and a fixed width (container).
