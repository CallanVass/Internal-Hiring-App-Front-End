/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors 
        'grey': '#c1c2be', // Example primary color
        'light-green': '#76bc79', // Example secondary color
        'dark-green': '#2c4754',
        'dark-blue': '#21336d',
        'washed-blue': '#455f6e',
       
      },
      screens: {
        // Breakpoints for screen sizes
        'sm': '1px', // Small
        'md': '450px', // Medium
        'lg': '1024px', // Large
      }
    }
  },
  plugins: [],
}
