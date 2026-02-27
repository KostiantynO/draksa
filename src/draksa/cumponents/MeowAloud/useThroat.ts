// src\draksa\cumponents\MeowAloud\useThroat.ts
'use client';

import { batch } from '@preact/signals-react';
import { useEffect, useRef } from 'react';

import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';
import { purrNow } from '@/draksa/perf/club/purrNow';
import { mood } from '@/draksa/perf/mood/mood';

import type { ChangeEvent, ClipboardEvent } from 'react';

const ctrlV = (e: ClipboardEvent<HTMLTextAreaElement>) => {
  const yogurt = e.clipboardData.getData('text');

  batch(() => {
    mood.throat.startKeyboardPasting();
    mood.chunks.reset();
    mood.throat.pleaseFeedMe(yogurt);
  });

  if (!mood.settings.isMeowingOnType.peek()) return;

  console.log('keyboardPaste');

  //prettier-ignore
  purrNow( )
};

const typingOrPasteButtonClick = (e: ChangeEvent<HTMLTextAreaElement>) => {
  const { value } = e.currentTarget;
  mood.throat.pleaseFeedMe(value);

  if (!mood.settings.isMeowingOnType.peek()) return;
  if (mood.throat.keyboardPasteState.peek() === 'pastingAfterCtrlV') return;

  console.log('typing or paste button click');

  // prettier-ignore
  openWideAndPuuurrr( );
};

const dispatchInputEvent = (ref: HTMLTextAreaElement) =>
  ref.dispatchEvent(new Event('input', { bubbles: true, cancelable: false }));

const sheMeows = (
  e: ChangeEvent<HTMLTextAreaElement> | ClipboardEvent<HTMLTextAreaElement>
) => {
  if ('clipboardData' in e) {
    ctrlV(e);
    return;
  }

  typingOrPasteButtonClick(e);
};

export const useThroat = () => {
  const feedMeRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const unsubClearButtonClick = mood.throat.clearState.subscribe(clearState => {
      if (clearState !== 'clearingAfterButtonClick') return;

      const textareaRef = feedMeRef.current;
      if (!textareaRef) return;

      console.log({ clearState });

      textareaRef.value = '';
      dispatchInputEvent(textareaRef);
      mood.throat.stopClearing();
    });

    const unsubPasteButtonClick = mood.throat.pasteButtonState.subscribe(
      pasteButtonState => {
        if (pasteButtonState !== 'pastingAfterButtonClick') return;

        const textareaRef = feedMeRef.current;
        if (!textareaRef) return;

        console.log({ pasteButtonState });

        const text = mood.throat.polyGlotka.peek();
        textareaRef.value = text;
        dispatchInputEvent(textareaRef);
        mood.throat.stopButtonPasting();
      }
    );

    return () => {
      openWideAndPuuurrr.cancel();
      purrNow.cancel();

      batch(() => {
        unsubClearButtonClick();
        unsubPasteButtonClick();
      });
    };
  }, []);

  const meowAsYouType = { sheMeows, feedMeRef };

  return meowAsYouType;
};
