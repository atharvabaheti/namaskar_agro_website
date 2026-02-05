/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/namaskar_agro_website' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
