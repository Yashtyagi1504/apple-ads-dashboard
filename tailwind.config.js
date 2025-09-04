module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B00',
        secondary: '#FFFFFF', 
        background: '#F8F9FA',
        card: '#FFFFFF',
        text: {
          primary: '#333333',
          secondary: '#666666',
          light: '#999999',
        },
      },
    },
  },
  plugins: [],
}

