/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        CF_SPACE: process.env.NEXT_PUBLIC_CF_SPACE,
        CF_ACCESS_TOKEN: process.env.NEXT_PUBLIC_CF_ACCESS_TOKEN

    }
}

module.exports = nextConfig
