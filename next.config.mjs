/** @type {import('next').NextConfig} */
const nextConfig = {
  // A static site: `npm run build` writes plain HTML, CSS and JS to /out,
  // ready for any static host (Netlify, Vercel, GitHub Pages, S3)
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
