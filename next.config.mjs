/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === "true";
const hasCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const repoName = "Bhawani-dental";

// On GH Pages without a custom domain, the site is served at /<repo-name>/.
// When deploying to Vercel or local dev (or a custom domain), keep paths clean.
const basePath = isGithubPages && !hasCustomDomain ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
