# Handy magic mirror:

- [ ] Center bg on Draksa eyes
- [ ] Background is squeezed on mobile when <320px, because of overflow (fix buttons
      width, and flex-wrap lists).
- [ ] voices load too slowly.
- [ ] when pressing `Play`, nothing happens, because default voice is not selected. Cause
      in mobile default voice name depends on locale (eng,cz,ukr,etc.). And it differs
      widely from PC voice names. Need to select default lang, when it has a `en_US`
      string in its name.
- [ ] make possible to see whole background image on scroll, while text stays centered.
  - [x] Make page normal static.
  - [ ] Add an overflow x-scroll to some bg-image container, and make it `w-full h-full`
  - [ ] Put image into a wrapper div with `overflow-hidden` and a fixed width (container).
