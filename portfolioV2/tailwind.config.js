/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            // poppins: ["Poppins", "sans-serif"],
        },
        container: {
            padding: "2rem",
            center: true,
        },
        extend: {
            animation: {
                "spin-slow": "spin 8s linear infinite",
            },
            screens: {
                xl: "1140px",
            },
        },
    },
    plugins: [],
};
