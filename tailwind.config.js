/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shooting: {
          '0%': {
            transform: 'translate(150vw, -50vh) scale(1)', // Start off-screen
            opacity: 1,
          },
          '100%': {
            transform: 'translate(-50vw, 150vh) scale(0.5)', // End off-screen
            opacity: 0,
          },
        },
      },
      animation: {
        shooting: 'shooting 5s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

