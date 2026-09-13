# Writer convenience:

- [ ] Make click to definition work correctly for `openWideAndPuuurrr`.
  - [ ] Either move debounced callbacks from `perf/club` to their place of use fo
        colocation of the code.
  - [ ] Or improve my VSCode settings. There is a difference and inconsistences between
        two clicks
    - [ ] If I click on the function name inside import statement
          `import { openWideAndPuuurrr }`, then VSCode opens up a file in editor mode
          correctly, where the const arrow function declaration is -
          `export const openWideAndPuuurrr = bounce(`
    - [ ] If I click directly on a function name inside a call site
      ```tsx
      // prettier-ignore
      openWideAndPuuurrr( );
      ```
      then it does not open a file, but shows some small modal below the function call and
      inside that modal it shows a wrapper const arrow function declaration -
      `export const bounce = (cb: () => unknown, ms: number)`. Which is useless to me,
      cause I wanna jump the definition of the openWideAndPuuurrr, not to the `bounce`
      definition.
