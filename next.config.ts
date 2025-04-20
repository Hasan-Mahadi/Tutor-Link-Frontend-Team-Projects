const nextConfig = {
  images: {
    domains: [
      'img.freepik.com',
      'i.postimg.cc',
      'lh3.googleusercontent.com',
      'i.ibb.co',
      'i.ibb.co.com',
      'scontent.fdac14-1.fna.fbcdn.net',
      'tmssl.akamaized.net',
      'www.xyjybida.co.uk',
      'www.sizoq.org',
    ],
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
