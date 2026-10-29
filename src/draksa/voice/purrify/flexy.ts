// src\draksa\voice\purrify\flexy.ts
import { humanityTSX } from '@/draksa/voice/purrify/humanityTSX.test';

// (Unicode-safe)
const isLetter = (char: string) => char && /\p{L}/u.test(char);

const trash = [
  'TRIPLE_BACKTICK',
  'TRIPLE_DASH',
  'CLOSE_PAREN_BRACE',
  'SEMI_PAREN',
  'SEMI_BRACE',
  'TAG_CLOSE_START',
  'SELF_CLOSE_END',
  'WORD_HYPHEN',
  'SPECIAL_LESS_THAN',
  'BRACE_GREATER_THAN',
  'MARKDOWN_CHAR',
  'ELLIPSIS',
];

/* OwO(N) */
const flexy = (text: string) => {
  const tokens = [];
  let i = 0;
  const len = text.length;

  while (i < len) {
    const char = text[i];
    const nextChar = text[i + 1];
    const nextNextChar = text[i + 2];

    // 1. Triple backticks (```)
    if (char === '`' && nextChar === '`' && nextNextChar === '`') {
      tokens.push({ type: 'TRIPLE_BACKTICK', value: '```' });
      i += 3;
      continue;
    }

    // 2. Triple dash (---)
    if (char === '-' && nextChar === '-' && nextNextChar === '-') {
      tokens.push({ type: 'TRIPLE_DASH', value: '---' });
      i += 3;
      continue;
    }

    // 3. Multi-character syntax: }), );, };, </, />
    if (char === '}' && nextChar === ')') {
      tokens.push({ type: 'CLOSE_PAREN_BRACE', value: '})' });
      i += 2;
      continue;
    }
    if (char === ')' && nextChar === ';') {
      tokens.push({ type: 'SEMI_PAREN', value: ');' });
      i += 2;
      continue;
    }
    if (char === '}' && nextChar === ';') {
      tokens.push({ type: 'SEMI_BRACE', value: '};' });
      i += 2;
      continue;
    }
    if (char === '<' && nextChar === '/') {
      tokens.push({ type: 'TAG_CLOSE_START', value: '</' });
      i += 2;
      continue;
    }
    if (char === '/' && nextChar === '>') {
      tokens.push({ type: 'SELF_CLOSE_END', value: '/>' });
      i += 2;
      continue;
    }

    // 4. Unicode Letter Hyphen Letter Matcher (replacing (?<=\p{L})-(?=\p{L}))
    if (char === '-') {
      const prevChar = text[i - 1];
      if (isLetter(prevChar) && isLetter(nextChar)) {
        tokens.push({ type: 'WORD_HYPHEN', value: '-' });
        i += 1;
        continue;
      }
    }

    // 5. Lookbehind/Lookahead boundaries (replacing your custom \b logic)
    if (char === '<') {
      const prevChar = text[i - 1];
      // Old boundary check: (?<=(?:[^\p{L}\d]|^))<(?={)
      if ((!prevChar || !/[\p{L}\d]/u.test(prevChar)) && nextChar === '{') {
        tokens.push({ type: 'SPECIAL_LESS_THAN', value: '<' });
        i += 1;
        continue;
      }
    }

    if (char === '>') {
      const prevChar = text[i - 1];
      // Old boundary check: (?<=})>
      if (prevChar === '}') {
        tokens.push({ type: 'BRACE_GREATER_THAN', value: '>' });
        i += 1;
        continue;
      }
    }

    // 6. Single character fallbacks
    if (char === '`' || char === '*' || char === '_' || char === '#') {
      tokens.push({ type: 'MARKDOWN_CHAR', value: char });
      i += 1;
      continue;
    }

    // 7. Ellipsis (...)
    if (char === '.' && nextChar === '.' && nextNextChar === '.') {
      tokens.push({ type: 'ELLIPSIS', value: '...' });
      i += 3;
      continue;
    }

    // 8. Consume regular text (skip ahead to keep it fast)
    let value = char;
    i += 1;
    while (
      i < len &&
      !['}', ')', ';', '<', '>', '/', '`', '-', '*', '_', '.', '#'].includes(text[i])
    ) {
      value += text[i];
      i += 1;
    }
    tokens.push({ type: 'TEXT', value });
  }

  return tokens
    .map(token =>
      trash.find(annoying => annoying === token.type) === undefined ? token.value : ''
    )
    .join('');
};

const input = humanityTSX;
console.log(flexy(input));
