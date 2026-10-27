// src\draksa\voice\purrify\humanize.test.ts

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { removeAnnoyance } from '@/draksa/voice/purrify/humanize';

describe('humanize - step by step - steppeSisAdmin by steppeSisAdmin :D', () => {
  it(removeAnnoyance.matterns.closingCurly.name, () => {
    const input = `const x = { a: 1}); const y = () => {}; const z = \`тейsty :D\`; `;
    const result = removeAnnoyance(input);

    assert.ok(!result.includes('})'));
    assert.ok(!result.includes(');'));
    assert.ok(!result.includes('};'));
  });
});
