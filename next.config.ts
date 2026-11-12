import type {NextConfig} from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isCloudflareOrCI = Boolean(process.env.CF_PAGES || process.env.OPENNEXT || process.env.CF_BUILD || process.env.CI);
const isStaticExport = isGithubActions || process.env.STATIC_EXPORT === 'true';
const useStandardDistDir = isStaticExport || isCloudflareOrCI;
const repoName = 'Eprs2.0';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? `/${repoName}` : '');

const nextConfig: NextConfig = {
  // During static export, CI, or Cloudflare / OpenNext builds, do NOT use a custom distDir like '.next_build'
  // because OpenNext and Next.js workers require standard '.next' to locate manifest files (e.g. middleware-manifest.json).
  ...(useStandardDistDir ? {} : { distDir: process.env.NODE_ENV === 'production' ? '.next_build' : '.next' }),
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: isStaticExport ? 'export' : 'standalone',
  ...(basePath ? { basePath } : {}),
  trailingSlash: Boolean(basePath || isStaticExport),

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
