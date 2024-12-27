
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        productImg1: "url('/src/assets/product-slide-1.jpg')"
      }
    },
  },
  plugins: [],
}

