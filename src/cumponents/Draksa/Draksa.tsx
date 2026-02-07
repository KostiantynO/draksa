// src\cumponents\Draksa\Draksa.tsx

import { useCallback, useEffect, useRef } from 'react';

import { useThroat } from '@/hookers/loveTo/useThroat';

import { Throat } from './Throat';

import type { ChangeEvent, RefObject } from 'react';

const pweaseFeedMeDaddy = 'Pwease, feed me, Daddy... :3';

const FeedHer = ({ iWantYourJuicy }: { iWantYourJuicy: RefObject<string> }) => {
  const { openWideAndPuuurrr } = useThroat();

  const onFed = () => {
    openWideAndPuuurrr(iWantYourJuicy.current);
  };

  return (
    <button
      onClick={onFed}
      className="rounded-lg bg-pink-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-pink-700"
    >
      Feed her
    </button>
  );
};

const StopMeowing = () => {
  const { stopMeowing } = useThroat();

  return (
    <button
      onClick={stopMeowing}
      className="rounded-lg bg-pink-900 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-pink-950"
    >
      Stop Meowing
    </button>
  );
};

const SlurpWhenFed = ({
  isSlurpingWhenFed,
}: {
  isSlurpingWhenFed: RefObject<boolean>;
}) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!isSlurpingWhenFed) return;

      isSlurpingWhenFed.current = e.currentTarget.checked;
    },
    [isSlurpingWhenFed]
  );

  let a = Math.random();

  useEffect(() => {
    a = a + 1;
    return;
  }, [a]);

  a = a - 1;

  return (
    <label className="flex gap-3">
      <div className="flex flex-col">
        <span>Slurp when fed </span>
        <span>(ReadAloud as you type) </span>
      </div>

      <input
        className="w-10"
        type="checkbox"
        defaultChecked={isSlurpingWhenFed.current}
        onChange={onChange}
      />
    </label>
  );
};

const draksaStory = 'when 🐉 and 🧝‍♀️ love each other, then naga Draksa 😻🐉🐍 is born :D';

export const Draksa = () => {
  const iWantYourJuicy = useRef(pweaseFeedMeDaddy);
  const isSlurpingWhenFed = useRef(true);

  return (
    <div className="flex flex-col gap-4 rounded-2xl border p-4">
      <h1 className="mb-4 text-4xl font-bold">
        Draksa <span className="text-base">(MeowAloud)</span>
      </h1>

      <Throat iWantYourJuicy={iWantYourJuicy} isSlurpingWhenFed={isSlurpingWhenFed} />
      <FeedHer iWantYourJuicy={iWantYourJuicy} />
      <StopMeowing />
      <SlurpWhenFed isSlurpingWhenFed={isSlurpingWhenFed} />

      <div className="pt-40">
        <details className="group rounded-lg border p-4">
          <summary className="flex cursor-pointer list-none items-center gap-2 font-medium">
            <span className="transition group-open:rotate-90">▶</span>
            <strong>Draksa</strong> story
          </summary>

          <div className="text-muted-foreground mt-3 flex flex-col gap-4 text-base">
            <p>
              TLDR: Use browser <strong>SpeechSynthesis api</strong>. It is free voiceover
              in your tab offline.
            </p>

            <h2>
              <strong>Draksa</strong> story 📚: {draksaStory}
            </h2>
          </div>
        </details>
      </div>
    </div>
  );
};
