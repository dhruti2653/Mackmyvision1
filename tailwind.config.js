/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {     backgroundImage: {
      'hero-bg': "url('/public/images/hero-bg.png')",
    },
    keyframes: {
      expandOutward: {
        '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
        '50%': { transform: 'scale(1.5)', opacity: '0.6' },
      },
    },
    animation: {
      outward: 'expandOutward 6s ease-in-out infinite',
    },
   
  },

    
  },
  plugins: [],
}