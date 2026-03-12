// src\draksa\magic\regexp.ts
export const legs = /(?<=[\n;.!?])\s+/;

export const onNewLines = /\n/g;
export const parenthesisSemicolonAndComma = /[{};],/;

export const max2Newlines = /\n{3,}/g;
export const collapseHorizontalWhitespace = /[ \t]+/g;
export const noSpaceBeforeNewline = / \n/g;

export const braces = /[{}]/g;

// TODO ME :D find out what that is? :D
export const magic = /[([,=;?:]\s*$/;

// TODO ME too :D
export const globalMagic = /!\s*/g;

/**
 * single ! only when it's logical not (approximate), we skip it when followed by = or letter immediately after (heuristic)
 * Don't ask what that is :D Cause IDK :D */
export const operators =
  /\(\(\) => |, \[\]\);|= \/|!==|!=|===|==|=>|>=|<=|>|<|\|\||&&|...args|!(?!=|\w)/g;

export const nekomancy =
  /(:3|;3|>:3|\^\^|\^_\^|\^\+_\+\^|uwu|UwU|owo|OwO|ᓚᘏᗢ|ლ\^•ᴥ•\^ლ|ฅ\^•ﻌ•\^ฅ|\^•ﻌ•\^|•ﻌ•|\^•w•\^|m\^•w•\^m|ฅ|\^|•|ﻌ)/g;
