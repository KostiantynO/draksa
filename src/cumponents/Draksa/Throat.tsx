import { useCallback, useRef } from 'react';

import { useThroat } from '@/hookers/loveTo/useThroat';

import type { ChangeEvent, RefObject } from 'react';

const pweaseFeedMeDaddy = 'Pwease, feed me, Daddy... :3';

export const Throat = ({
  iWantYourJuicy,
  isSlurpingWhenFed,
}: {
  iWantYourJuicy: RefObject<string>;
  isSlurpingWhenFed: RefObject<boolean>;
}) => {
  const { openWideAndPuuurrr } = useThroat();

  const foodRef = useRef<HTMLTextAreaElement | null>(null);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (!iWantYourJuicy) return;

      iWantYourJuicy.current = e.currentTarget.value;

      if (!isSlurpingWhenFed.current) return;

      openWideAndPuuurrr(iWantYourJuicy.current);
    },
    [iWantYourJuicy, isSlurpingWhenFed, openWideAndPuuurrr]
  );

  return (
    <div className="flex flex-col">
      <textarea
        className="text-foreground placeholder:text-secondary-foreground/60 w-full min-w-0 resize-none bg-transparent text-base leading-6 outline-none disabled:opacity-0"
        placeholder={pweaseFeedMeDaddy}
        onChange={onChange}
        ref={foodRef}
      />
    </div>
  );
};
