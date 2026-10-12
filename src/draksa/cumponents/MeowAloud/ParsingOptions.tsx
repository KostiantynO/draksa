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
    <fieldset className="container mx-auto max-w-3xl rounded-2xl bg-neutral-900/35 p-2">
      <Details
        className="grid gap-2"
        summary={
          <legend className="inline-flex px-2 text-lg font-bold">Text normalize:</legend>
        }
      >
        <ParsingOption
          checked={bast.parsing.silence.peek()}
          label="Silence"
          toggle={bast.parsing.toggleSilence}
        />
        <ParsingOption
          checked={bast.parsing.humanize.peek()}
          label="Humanize"
          toggle={bast.parsing.toggleHumanize}
        />
        <ParsingOption
          checked={bast.parsing.purrify.peek()}
          label="Purrify"
          toggle={bast.parsing.togglePurrify}
        />
        <ParsingOption
          checked={bast.parsing.whitespace.peek()}
          label="Whitespace"
          toggle={bast.parsing.toggleWhitespace}
        />
        <ParsingOption
          checked={bast.parsing.codify.peek()}
          label="Codify"
          toggle={bast.parsing.toggleCodify}
        />
      </Details>
    </fieldset>
  );
};
