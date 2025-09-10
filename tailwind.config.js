/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta formal orgánica para Mi Vida Keto ALMA CREATIVA
        brand: {
          forest: '#1e3a3a',      // Verde bosque formal
          sage: '#4a5d23',        // Salvia elegante  
          moss: '#2d5016',        // Musgo profundo
          earth: '#8b4513',       // Tierra rica
          clay: '#a0522d',        // Arcilla cálida
          cream: '#f5f5dc',       // Crema natural
          sand: '#c19a6b',        // Arena dorada
          stone: '#696969',       // Gris piedra
          mint: '#98fb98',        // Verde menta suave
          coral: '#ff7f50',       // Coral elegante
          amber: '#ffbf00',       // Ámbar dorado
          olive: '#556b2f',       // Oliva sofisticado
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}