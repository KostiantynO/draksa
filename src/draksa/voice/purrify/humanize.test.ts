// src\draksa\voice\purrify\humanize.test.ts

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { matterns, removeAnnoyance } from '@/draksa/voice/purrify/humanize';

const {
  closingCurly: { name: closingCurly },
  // dotsAndHash: { name: dotsAndHash },
  // greaterThan: { name: greaterThan },
  // gtClosingTag: { name: gtClosingTag },
  // hyphenInLinks: { name: hyphenInLinks },
  jsxFragment: { name: jsxFragment },
  jsxTag: { name: jsxTag },
  lessThan: { name: lessThan },
  // markdown: { name: markdown },
} = matterns;

describe('hUwUmanize - step by step - steppeSisAdmin by steppeSisAdmin :D', () => {
  it(closingCurly, () => {
    const i = `ლ^•ᴥ•^ლ}); () => {}; \`teйstї :D\`; `;
    const r = removeAnnoyance(i);
    assert.ok(!r.includes('})'));
    assert.ok(!r.includes(');'));
    assert.ok(!r.includes('};'));
  });

  it(jsxFragment, () => {
    const i = `<>ᓚᘏᗢ</>`;
    const r = removeAnnoyance(i);
    assert.equal(r, ' ᓚᘏᗢ ');
  });

  it(jsxTag, () => {
    const i = `
    <Details>ฅ^•ﻌ•^ฅ
      <CatฅOﻌOฅᓚᘏᗢლoᴥoლ>
        <CatฅOﻌOฅᓚᘏᗢლoᴥoლ>
          <ฅ^•ﻌ•^ฅ
          >ฅ^•ﻌ•^ฅ
        </CatฅOﻌOฅᓚᘏᗢლoᴥoლ>
	    </CatฅOﻌOฅᓚᘏᗢლoᴥoლ>
    </Details>
    `;
    const r = removeAnnoyance(i);
    console.log(jsxTag, r);

    assert.ok(r.includes('Details'));
    assert.ok(!r.includes('<Details>'));
    assert.ok(!r.includes('</Details'));
    assert.ok(!r.includes('ლ>'));
    assert.ok(!r.includes('</Cat'));
  });

  // TODO: passing test.
  it(lessThan, () => {
    const i = `const a = 1 < 2; const b = 10 <700; return (<div />)`;
    const r = removeAnnoyance(i);
    assert.ok(r.includes('1 < 2'));
    assert.ok(r.includes('10 <700'));
    assert.ok(r.includes('div'));
    assert.ok(!r.includes('<div'));
    assert.ok(!r.includes('/>'));
  });
});

// 'Hello ლაშა! This is a ```code``` block with a word-hyphen.'
