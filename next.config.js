/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
    images: {
        domains: ['www.nifafinearts.com'],
    },
}

module.exports = withContentlayer(nextConfig);