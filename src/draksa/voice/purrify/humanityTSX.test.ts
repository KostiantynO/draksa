// src\draksa\voice\purrify\humanityTSX.test.ts
export const humanityTSX = `
export const Humanity = () => {
  const a = 1 < 2;
  return (
    <fieldset>
      <Details
        className="container mx-auto max-w-3xl p-2"
        summary={<legend>Humanity</legend>}
        className2={10 >= 700 ? 'container mx-auto max-w-3xl p-2' : ''}
        className3={
          10 > 700 ? (10 > 700 ? '' : 'container mx-auto max-w-3xl p-2') : (() => '')()
        }
        className4={10 <700 ? 'container mx-auto max-w-3xl p-2' : ''}
        className5={10 <= 700 ? 'container mx-auto max-w-3xl p-2' : ''}
        onStart={() => {
          const b = 10 <= 700 ? 'container mx-auto max-w-3xl p-2' : '';
          return b;
        }}
      >
        {1 < 2 ? a : null}
        {1 > 2
          ? a
          : 10 > 700
            ? 10 > 700
              ? ''
              : 'container mx-auto max-w-3xl p-2'
            : (() => '')()}
        <>
          {1 < 2 ? a : null}
          {1 >= 2
            ? 10 <= 700
              ? 10 >= 700
                ? ''
                : 'container mx-auto max-w-3xl p-2'
              : (() => '')()
            : null}
          <DontGoHollow />
        </>

    <Details>ฅ^•ﻌ•^ฅ
      <CatฅOﻌOฅᓚᘏᗢლoᴥoლ>
        <CatฅOﻌOฅᓚᘏᗢლoᴥoლ>
          <ฅ^•ﻌ•^ฅ
          >ฅ^•ﻌ•^ฅ
        </CatฅOﻌOฅᓚᘏᗢლoᴥoლ>
	    </CatฅOﻌOฅᓚᘏᗢლoᴥoლ>
    </Details>

        <DontGoHollow />
      </Details>
    </fieldset>
  );
};
`;
