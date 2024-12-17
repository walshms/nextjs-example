// next.config.js
const withLitSSR = require('@lit-labs/nextjs')();
const { i18n } = require("./next-i18next.config");

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n,
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
    publicRuntimeConfig: {
        NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
        NEXT_PUBLIC_SFH_API_URL: process.env.NEXT_PUBLIC_SFH_API_URL,
        NEXT_PUBLIC_AG_GRID_LICENSE_KEY: process.env.NEXT_PUBLIC_AG_GRID_LICENSE_KEY,
        NEXT_PUBLIC_OM_CREATE_URL: process.env.NEXT_PUBLIC_OM_CREATE_URL,
    },
};

module.exports = withLitSSR(nextConfig);