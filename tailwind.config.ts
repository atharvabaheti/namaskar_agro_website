import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: "#FDFBF7",
                saffron: "#FF9933", // Indian Saffron
                clay: "#D27D2D", // Earthy clay
                mango: "#FFC300",
                leaf: "#4E9F3D",
                milk: "#FFFDD0",
                "brand-dark": "#2C2C2C",
                "brand-brown": "#5D4037",
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "sans-serif"],
            },
            animation: {
                "spin-slow": "spin 8s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
