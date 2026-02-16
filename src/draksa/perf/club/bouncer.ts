// src\draksa\perf\club\bouncer.ts

/**
 * @param cb callback function
 * @param ms calls callback not earlier than a `ms` delay in milliseconds
 * @returns
 * Every call to debounce will create a new function -> will force a rerender
 * Is there a function pulling?
 * Currying - may be gc problem if used carelessly.
 * It may break react compiler automatic memoization, if used without understanding
 *
 * Actual usage -> create a debounced callback ONCE per desired `cb` function outside the component.
 * Call debounced callback as much as you like.
 * It will only create new timeouts
 * No new functions created. Chill :D
 *
 * But if used in useCallback, it may rerun cause of unstable deps.
 */
export const bounce = (cb: () => unknown, ms: number) => {
  let id: undefined | ReturnType<typeof setTimeout>; // browser timeout

  const curried = () => {
    console.log(id);
    if (id) clearTimeout(id);

    id = setTimeout(() => {
      try {
        cb();
      } catch (error) {
        console.error(error);
        id = void 0;
      } finally {
        id = void 0;
      }
    }, ms);
  };

  curried.cancel = () => {
    if (!id) return;
    clearTimeout(id);
    console.log({ cute: `:3 ${String(id)}` });

    id = void 0;
  };

  return curried;
};
