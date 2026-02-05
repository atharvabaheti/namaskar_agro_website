// Utility to get the correct base path for assets
// In production (GitHub Pages), assets need the repository name prefix
// In development, they use the root path

export function getBasePath(): string {
    // next.config.mjs sets basePath only in production
    return process.env.NODE_ENV === 'production' ? '/namaskar_agro_website' : '';
}

export function getAssetPath(path: string): string {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${getBasePath()}/${cleanPath}`;
}
