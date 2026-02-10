// src\draksa\context\DraksaContext.ts
'use client';

import { createContext } from 'react';

import type { DraksaContextType } from '../mood/mood';

export const DraksaContext = createContext<DraksaContextType | undefined>(undefined);
