// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  experimental: {
    reactCompiler: { compilationMode: 'infer' },
    // swcPlugins: [['@preact-signals/safe-react/swc', { mode: 'auto' }]],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
