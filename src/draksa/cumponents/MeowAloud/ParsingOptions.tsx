// src\draksa\cumponents\MeowAloud\ParsingOptions.tsx
'use client';

import { Details } from '@/draksa/cumponents/ui/Details';
import { bast } from '@/draksa/heaven';

interface ParsingOptionProps {
  checked: boolean;
  label: string;
  toggle: () => void;
}

const ParsingOption = ({ checked, label, toggle }: ParsingOptionProps) => {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-xl bg-neutral-950/40 px-3 py-2">
      <input
        defaultChecked={checked}
        className="size-5 accent-amber-500"
        onChange={toggle}
        type="checkbox"
      />
      <span>{label}</span>
    </label>
  );
};

export const ParsingOptions = () => {
  return (
    <fieldset>
      <Details
        className="container mx-auto max-w-3xl p-2"
        summary={<legend>Text normalize</legend>}
      >
        <ParsingOption
          checked={bast.parsing.silence.peek()}
          label="Silence - remove json symbols"
          toggle={bast.parsing.toggleSilence}
        />
        <ParsingOption
          checked={bast.parsing.humanize.peek()}
          label="Humanize - remove annoying symbols, like brackets < > in HTML"
          toggle={bast.parsing.toggleHumanize}
        />
        <ParsingOption
          checked={bast.parsing.purrify.peek()}
          label="Purrify - say :3 as `happy cat` :D"
          toggle={bast.parsing.togglePurrify}
        />
        <ParsingOption
          checked={bast.parsing.codify.peek()}
          label="Codify - say `=>` as arrow function"
          toggle={bast.parsing.toggleCodify}
        />
        <ParsingOption
          checked={bast.parsing.whitespace.peek()}
          label="Whitespace - remove spaces"
          toggle={bast.parsing.toggleWhitespace}
        />
      </Details>
    </fieldset>
  );
};
