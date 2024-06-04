import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  // Your Next.js configuration options here
};

export default withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})(nextConfig);
