// src\app\layout.tsx
import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Draksa',
  description: 'MeowAloud',
};

const GoonLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="overflow-y-scroll antialiased">{children}</body>
    </html>
  );
};

export default GoonLayout;
