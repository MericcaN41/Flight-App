/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F6F4F8",
                backgroundDark: "#E6E0EB",
                backgroundHover: "#EDE9F2",
                primary: "#4B0097"
            },
            screens: {
                "maxmd": { "max": "768px" },
            }
        },
        fontFamily: {
            noto: ["Noto Sans", "sans-serif"],
        }
    },
    plugins: [],
}

