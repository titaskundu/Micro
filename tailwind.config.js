/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/about.jpg')",
        'home-bg':"url('./assets/home.jpg')",
        
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Oswald: ['Oswald', 'sans-serif'],  
       },
    },
  },
  plugins: [],
}