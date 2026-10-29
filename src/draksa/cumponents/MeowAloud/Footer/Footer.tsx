// src\draksa\cumponents\MeowAloud\Footer\Footer.tsx
import { GithubLink } from '@/draksa/cumponents/MeowAloud/Footer/GithubIcon';

import type { JSX } from 'react';

const Nav = () => {
  return (
    <nav>
      <GithubLink />
    </nav>
  );
};

export const Footer = (): JSX.Element => {
  return (
    <div className="absolute right-0 bottom-0 left-0 container mx-auto flex max-w-3xl justify-end-safe p-2">
      <Nav />
    </div>
  );
};
