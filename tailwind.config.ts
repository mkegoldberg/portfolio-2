import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Source Sans Pro',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        '10xl': '8rem',
      },
      colors: {
        salmon: '#ff735c',
        blueish: {
          100: '#a9bccd',
          200: '#6cb2eb',
          500: '#a9bccd',
        },
        gray: {
          700: '#606f7b',
          900: '#343841',
        },
        charcoal: '#343841',
      },
    },
  },
} satisfies Config
