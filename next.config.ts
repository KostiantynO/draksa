// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },

  reactCompiler: { compilationMode: 'infer' },

  cacheComponents: true,
  partialPrefetching: true,

  experimental: {
    // swcPlugins: [['@preact-signals/safe-react/swc', { mode: 'auto' }]],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  headers: async () => [
    {
      source: '/llms.md',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }],
    },
    {
      source: '/llms.txt',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }],
    },
  ],

  rewrites: async () => ({
    beforeFiles: [{ source: '/llms.txt', destination: '/llms.md' }],
  }),
};

export default nextConfig;
