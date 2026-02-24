// src\draksa\cumponents\Draksa.tsx
'use client';

import { ClearButton } from '@/draksa/cumponents/MeowAloud/ClearButton';
import { DraksaStory } from '@/draksa/cumponents/MeowAloud/DraksaStory';
import { Name } from '@/draksa/cumponents/MeowAloud/Name';
import { SelectVoice } from '@/draksa/cumponents/MeowAloud/SelectVoice/SelectVoice';
import { Settings } from '@/draksa/cumponents/MeowAloud/Settings/Settings';
import { Throat } from '@/draksa/cumponents/MeowAloud/Throat';
import { pleaseMakeMyMouthBusy } from '@/draksa/cumponents/pleaseMakeMyMouthBusy';

import type { ReactNode } from 'react';

pleaseMakeMyMouthBusy();

const Head = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex grow flex-col gap-4 rounded-2xl border p-4">
      <Name />
      {children}
      <DraksaStory />
    </div>
  );
};

const Lips = ({ children }: { children: ReactNode }) => {
  return <div className="relative pt-4">{children}</div>;
};

export const Draksa = () => {
  return (
    <Head>
      <Lips>
        <Throat />
        <ClearButton />
      </Lips>

      <Settings />

      <SelectVoice />
    </Head>
  );
};
