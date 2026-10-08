// src\draksa\magic\regexp.ts
export const legs = /(?<=[\n;.!?])\s+/g;

export const max2Newlines = /\n{3,}/g;
export const collapseHorizontalWhitespace = /[ \t]+/g;
export const noSpaceBeforeNewline = / \n/g;

export const curlyBraces = /[{}]/g;

// TODO ME too :D
export const globalMagic = /!\s*/g;

export const jsOperators =
  /\(\(\) => |, \[\]\);|= \/|!==|!=|===|==|=>|>=|<=|\|\||&&|\.\.\.args|''|""|(?<!`)``(?!`)|\?\?|>|<|'!'|"!"|`!`|\/g/g;

export const nekomancy =
  /(:3|83|;3|>:3|\^\^|\^_\^|\^\+_\+\^|uwu|UwU|owo|OwO|ᓚᘏᗢ|ლ\^•ᴥ•\^ლ|ฅ\^•ﻌ•\^ฅ|\^•ﻌ•\^|•ﻌ•|\^•w•\^|m\^•w•\^m|ฅ|\^|•|ﻌ)/g;
