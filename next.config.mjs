/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Ignore ESLint errors during build (optional)
      },
      images:{
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com'
          }
        ]
      }
};

export default nextConfig;
