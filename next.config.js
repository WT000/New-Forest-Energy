/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "th.bing.com",
        port: '',
        pathname: "/th/id/**"
      },
      {
        protocol:"https",
        hostname: "upload.wikimedia.org",
        port: '',
        pathname: "/wikipedia/commons/thumb/**"
      }
    ]
  }
}

module.exports = nextConfig
