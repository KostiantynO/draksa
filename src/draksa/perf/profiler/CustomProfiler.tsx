// src\draksa\perf\profiler\CustomProfiler.tsx
'use client';

import { Profiler } from 'react';

import { Draksa } from '@/draksa/cumponents/Draksa';

type Phase = 'mount' | 'update' | 'nested-update';

interface RenderRow {
  rendered: number;
  phase: Phase;
  id?: string;
  actualDuration: number;
  baseDuration: number;
  startTime?: number;
  commitTime?: number;

  actualDelta: string;
  baseDelta: string;
}

const history: RenderRow[] = [];

const values: Record<Phase, { actual: number; base: number }> = {
  mount: { actual: 0, base: 0 },
  update: { actual: 0, base: 0 },
  'nested-update': { actual: 0, base: 0 },
};

let rendered = 0;

const makeIndicator = (newVal: number, oldVal: number): string => {
  if (newVal === oldVal) return '→ 0 ms';
  const diff = (newVal - oldVal).toFixed(2);

  return `${rendered === 1 ? 'init' : newVal > oldVal ? '↑' : '↓'} ${diff} ms`;
};

const onRender = (
  id: string,
  phase: 'mount' | 'update' | 'nested-update',
  actualDuration: number,
  baseDuration: number
) => {
  rendered++;
  const arrowActual = makeIndicator(actualDuration, values[phase].actual);
  const arrowBase = makeIndicator(baseDuration, values[phase].base);

  values[phase] = { actual: actualDuration, base: baseDuration };

  const row: RenderRow = {
    rendered,
    phase,

    actualDuration: Number(actualDuration.toFixed(2)),
    baseDuration: Number(baseDuration.toFixed(2)),

    actualDelta: arrowActual,
    baseDelta: arrowBase,
  };

  history.push(row);

  console.log(`🐱 GHOST-BUSTER PROFILER — ${history.length} renders captured`);
  console.table(history);
};

export const Measurements = () => {
  return (
    <div>
      <Profiler id="draksa" onRender={onRender}>
        <Draksa />
      </Profiler>
    </div>
  );
};
