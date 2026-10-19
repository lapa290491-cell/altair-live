import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/altair-live" : "",
  assetPrefix: isGithubPages ? "/altair-live/" : "",
  // Disable features that don't work with static export if needed
};

export default nextConfig;
