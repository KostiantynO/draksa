// src\draksa\cumponents\MeowAloud\Humanity\SpeakLikeAHuman.tsx
'use client';

import { SayIt } from '@/draksa/cumponents/MeowAloud/Humanity/SayIt';
import { bast } from '@/draksa/heaven';

export const SpeakLikeAHuman = () => {
  return (
    <>
      <SayIt
        checked={bast.parsing.silence.peek()}
        label="Silence - remove json symbols"
        toggle={bast.parsing.toggleSilence}
      />
      <SayIt
        checked={bast.parsing.humanize.peek()}
        label="Humanize - remove annoying symbols, like brackets < > in HTML"
        toggle={bast.parsing.toggleHumanize}
      />
      <SayIt
        checked={bast.parsing.purrify.peek()}
        label="Purrify - say :3 as `happy cat` :D"
        toggle={bast.parsing.togglePurrify}
      />
      <SayIt
        checked={bast.parsing.codify.peek()}
        label="Codify - say `=>` as arrow function"
        toggle={bast.parsing.toggleCodify}
      />
      <SayIt
        checked={bast.parsing.whitespace.peek()}
        label="Whitespace - remove spaces"
        toggle={bast.parsing.toggleWhitespace}
      />
    </>
  );
};
