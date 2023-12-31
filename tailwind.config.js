/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                'xs': '576px',
            },
            fontFamily: {
                Karla: ["Karla", "sans-serif"],
            },
            colors: {
                'coffee': {
                    50: "#e8d6d0",
                    200: "#c89f94",
                    400: "#a25f4b",
                    600: "#744838",
                }
            },
            keyframes: {
                slideDown: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(0)" },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                }
            },
            animation: {
                slideDown: "slideDown .5s ease-in-out",
                fadeIn: "fadeIn .5s ease-in-out",
            },
            backgroundImage: {
                "slider-bg": 'url("./img/slider-bg.jpg")',
            },
        },
    },
    plugins: [],
};
