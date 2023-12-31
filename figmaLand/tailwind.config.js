/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            space: ["Space Grotesk", "sans-serif"],
        },
        container: {
            padding: "2rem",
            center: true,
        },
        extend: {
            screens: {
                xl: "1140px",
            },
            colors: {
                primary: "#4452FE",
            },
        },
    },
    plugins: [],
};
