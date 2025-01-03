import type { NextConfig } from "next";

module.exports = {
    images: {
        domains: ['cdn.discordapp.com'],
    },
};

const nextConfig: NextConfig = {
	images: {
		remotePatterns: discordRemotePatterns(["avatars", "icons"]),
	},
};

export default nextConfig;
function discordRemotePatterns(pathnames: string[]) {
	return pathnames.map((pathname) => ({
		pathname: `/${pathname}/**`,
		hostname: "cdn.discordapp.com",
	}));
}
