import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                surface: "#171717",
                primary: "#ffffff",
                secondary: "#a3a3a3",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
