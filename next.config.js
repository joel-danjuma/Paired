/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    //     serverComponentsExternalPackages: ["mongoose"],
    //     serverActions: true,
    // },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "unsplash.com",
                port: "",
                pathname: "photos",
            },
        ],
        domains: ["lh3.googleusercontent.com"],
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "unsplash.com",
                port: "",
            },
        ],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    },
}

module.exports = nextConfig
