/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',  
          },
        ],
      },
    compiler:{
      styledComponents: true,
    }
};

export default nextConfig;
