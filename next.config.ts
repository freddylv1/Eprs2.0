import type {NextConfig} from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'Eprs2.0';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? `/${repoName}` : '');

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === 'production' ? '.next_build' : '.next',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: isGithubActions ? 'export' : 'standalone',
  ...(basePath ? { basePath } : {}),
  trailingSlash: Boolean(basePath || isGithubActions),

  // Allow access to remote image placeholder.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  transpilePackages: ['motion'],
  devIndicators: false,
  webpack: (config, {dev}) => {
    if (dev) {
      config.watchOptions = {
        ignored: ['**/dist/**', '**/out/**', '**/.next_build/**', '**/node_modules/**'],
      };
    }
    return config;
  },
};

export default nextConfig;
