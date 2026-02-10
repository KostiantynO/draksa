// src\context\DraksaContext.ts
'use client';

import { createContext } from 'react';

import type { DraksaContextType } from '@/types/context';

export const DraksaContext = createContext<DraksaContextType | undefined>(undefined);
