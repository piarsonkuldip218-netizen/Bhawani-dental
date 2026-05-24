/**
 * GitHub Pages-aware asset path helper.
 *
 * On GitHub Pages without a custom domain, the site is served at /<repo-name>/.
 * Components like next/image (with images.unoptimized) and metadata.icons do not
 * automatically apply Next.js basePath, so we prefix manually using this helper.
 *
 * Usage:
 *   <img src={asset('/logo.png')} alt="logo" />
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  if (!path) return path;
  // External URL — don't touch it
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
