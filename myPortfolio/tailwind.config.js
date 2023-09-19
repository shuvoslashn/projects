/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        container: {
            padding: "2rem",
            center: true,
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            unbounded: ["Unbounded", "sans-serif"],
        },
        extend: {},
    },
    plugins: [require("daisyui")],
};
