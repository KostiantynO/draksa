// src\draksa\voice\purrify\codeHeuristic.ts
import { onNewLines, parenthesisSemicolonAndComma } from '@/draksa/magic/regexp';
import { codify } from '@/draksa/voice/purrify/codify';

const looksLikeCode = (text: string): boolean => {
  const lines = text.split(onNewLines);
  let score = 0;

  if (
    text.includes('=>') ||
    text.includes('const ') ||
    text.includes('import ') ||
    text.includes('export ') ||
    text.includes('if (!')
  )
    score += 4;
  if (parenthesisSemicolonAndComma.test(text)) score += 2;
  if (lines.length > 3 && lines.filter(l => l.trim().startsWith('//')).length > 1)
    score += 1;

  const codeish = lines.filter(l => {
    const t = l.trim();
    return (
      t && !t.startsWith('//') && (t.endsWith(';') || t.endsWith('{') || t.endsWith('}'))
    );
  }).length;

  return score >= 4 || codeish / Math.max(1, lines.length) > 0.4;
};

export const smartCodify = (raw: string): string => {
  if (!looksLikeCode(raw)) return raw; // prose → pronounce ! normally

  return codify(raw);
};
