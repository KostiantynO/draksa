// src\app\layout.tsx
import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-y-scroll antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default GoonLayout;
