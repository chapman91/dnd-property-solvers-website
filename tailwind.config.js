/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
}

// `**/*` glob pattern that matches zero or more directories ans subdirectories
// {js,ts,jsx,tsx} is a brace expansion pattern that matches any listed file extensions
// import css two tailwind css plugins