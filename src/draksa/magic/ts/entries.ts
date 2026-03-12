type ExactEntries<Obj> = {
  [K in keyof Obj]-?: readonly [K, Obj[K]];
}[keyof Obj][];

/** @example if (isOwnKey(object, key)) { } */
const isOwnKey = <Obj extends object>(obj: Obj, key: PropertyKey): key is keyof Obj =>
  Object.prototype.hasOwnProperty.call(obj, key);

/** @example const pairs = entries({ a: 'a', b: 'b' as const }); */
export const entries = <Obj extends object>(obj: Obj): ExactEntries<Obj> => {
  const result: ExactEntries<Obj> = [];

  for (const key in obj) {
    if (!isOwnKey(obj, key)) continue;

    result.push([key, obj[key]]);
  }

  return result;
};
