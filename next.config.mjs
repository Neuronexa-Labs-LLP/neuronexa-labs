/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export', // Add this line for static export
  trailingSlash: true, // Optional: Ensures URLs include a trailing slash (e.g., /about/)
};

export default nextConfig;