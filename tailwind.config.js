/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        Primary: "#40B750",
        OnPrimary: "#EFD59E",
        PrimaryContainer: "#85D08F",
        OnPrimaryContainer: "#F9EED8",
        Secondary: "#0E0E0E",
        SecondaryContainer: "#CDE1CF"
      }
    },
  },
  plugins: [require('daisyui')],
}

