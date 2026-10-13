/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || false

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If building on GitHub Pages without custom domain, set basePath if needed
  basePath: process.env.BASE_PATH || '',
}

export default nextConfig