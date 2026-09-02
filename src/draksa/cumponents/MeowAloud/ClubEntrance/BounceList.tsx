// src\draksa\cumponents\MeowAloud\ClubEntrance\BounceList.tsx
'use client';

import { BounceOption } from '@/draksa/cumponents/MeowAloud/ClubEntrance/BounceOption';

const makeBounceOption = (num: number) => {
  return <BounceOption key={num} label={num} />;
};

const Placeholder = () => (
  <div className="text-sm opacity-60">woading bouncef, meow :3</div>
);

const bounceTimeoutsMs = [50, 100, 200, 300, 400, 500, 600, 1000];

export const BounceList = () => {
  if (!bounceTimeoutsMs.length) return <Placeholder />;

  const arr = bounceTimeoutsMs.map(makeBounceOption);

  return <ul className="flex px-1">{arr}</ul>;
};
