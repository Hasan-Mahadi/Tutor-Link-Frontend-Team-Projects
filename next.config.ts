const nextConfig = {
  images: {

    domains: ['img.freepik.com', 'i.postimg.cc',  'lh3.googleusercontent.com','i.ibb.co','i.ibb.co.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
    ],

},

  
  };


export default nextConfig;
