/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            padding: '1rem',
            center: true,
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        },
        extend: {
            screens: {
                xl: '1280px',
            },
        },
    },
    plugins: [],
};
