/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}', './index.html'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'DM Serif Display',
      secondary: 'Jost', 
    },
    backgroundImage: {
      hero: 'url(/assets/hero/Background.png)',
    },
    extend: {
      colors: {
        first: { 
        primary: '#40B750',
        primaryLight: 'rgba(249, 238, 216, 0.3)',
        onPrimary: '#EFD59E',
        primaryContainer: '#85D08F',
        onPrimaryContainer: '#F9EED8',
        customGradient: 'linear-gradient(to right, #85D08F 17%, #85D08F 31%, #EFD59E 46%)',
        hover: '#E0E0E0',
      },
        second: {
          secondary: '#0E0E0E',
          onSecondary: '#FEFEFE',
          secondaryContainer: '#CDE1CF',
          onSecondaryContainer: '#D9D9D9',
        },
      accent: {
        default: '#FF5733',  // Default accent color
        secondary: '#33CFFF', // Secondary accent color
        hover: '#E0E0E0',
      }
    
      }
    },
  },
  plugins: [
   
  ],
}

