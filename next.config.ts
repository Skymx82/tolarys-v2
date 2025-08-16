import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisation des images
  images: {
    domains: ['tolarys.fr'],
    formats: ['image/avif', 'image/webp'],
  },
  // Compression et optimisation
  compress: true,
  // Redirections SEO
  async redirects() {
    return [
      {
        source: '/accessibilite',
        destination: '/conformite-reglementaire',
        permanent: true,
      },
      {
        source: '/rgaa',
        destination: '/conformite-reglementaire',
        permanent: true,
      },
      {
        source: '/en-301-549',
        destination: '/conformite-reglementaire',
        permanent: true,
      },
    ];
  },
  // Headers pour la sécurité et le SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
