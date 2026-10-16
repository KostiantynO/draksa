// src\app\layout.tsx
import './globals.css';

import family from '@/draksa/art/family.webp';
import { Footer } from '@/draksa/cumponents/MeowAloud/Footer/Footer';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://draksa.vercel.app';

const description = 'MeowAloud to read your text :D';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Draksa', template: '%s | Draksa' },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Draksa',
    title: 'Draksa',
    description,
    url: '/',
    images: [{ url: family.src, alt: "Draksa's family" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Draksa',
    description,
    images: [family.src],
  },
};

const GoonLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="relative overflow-y-scroll antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default GoonLayout;
