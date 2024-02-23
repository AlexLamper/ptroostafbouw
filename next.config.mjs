/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/(.*)/',
          destination: '/',
          permanent: true,
        },        
        {
            source: '/home',
            destination: '/',
            permanent: true,
        },
        {
            source: '/index',
            destination: '/',
            permanent: true,
        },
        {
            source: '/project',
            destination: '/projecten',
            permanent: true,
        }
      ];
    },
  };
  
  export default nextConfig;
  