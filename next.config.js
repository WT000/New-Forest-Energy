/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "th.bing.com",
        port: '',
        pathname: "/th/id/**"
      }
    ]
  }
}

module.exports = nextConfig
