import type {NextConfig} from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isStaticExport = process.env.STATIC_EXPORT === 'true' || isGithubActions;
const repoName = 'Eprs2.0';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? `/${repoName}` : '');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: isStaticExport ? ('export' as const) : ('standalone' as const),
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  trailingSlash: Boolean(basePath || isGithubActions),

  // Allow access to remote image placeholder.
  images: {
    unoptimized: isStaticExport,
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
  experimental: {
    devtoolSegmentExplorer: false,
  },
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
