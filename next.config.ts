import type { NextConfig } from "next";

module.exports = {
    images: {
        domains: ['cdn.discordapp.com'],
    },
	async rewrites() {
        return [
            {
                source: '/.well-known/discord',
                destination: '/api/.well-known/discord',
            },
        ];
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
