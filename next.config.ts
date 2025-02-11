/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'ghchart.rshah.org' },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'media.licdn.com' },
      { protocol: 'https', hostname: 'skillicons.dev' },
      { protocol: 'https', hostname: 'aceternity.com' },
      { protocol: 'https', hostname: 'via.placeholder.com' },
      { protocol: 'https', hostname: 'instagram.fccu19-1.fna.fbcdn.net' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'brandlogos.net' },
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'cdn.sstatic.net' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
    domains: [
      "api.microlink.io",
      "skillicons.dev",
      "instagram.fccu19-1.fna.fbcdn.net",
      "res.cloudinary.com",
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
