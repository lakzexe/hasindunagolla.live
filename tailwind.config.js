/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                sans: ["Inter", "sans-serif"]
            },
            animation: {
                spin_slow: 'spin 6s linear infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F',
                brand: {
                  primary: '#3B82F6', // Vibrant Blue
                  secondary: '#EC4899', // Striking Pink
                  dark: '#0F172A', // Slate-900 (Deep Charcoal)
                  surface: '#F9FAFB', // Gray-50
                  'surface-light': '#FFFFFF',
                },
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        },
    },
    plugins: [],
}