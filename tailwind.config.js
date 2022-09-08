/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        lightBlue:'#F2F4F7',
        skyBlue:"#00BAF2",
        darkBlue:'#002970',
        lightGray:"#F5F5F6",
        darkShadeBlue:"#0F4A8A",
        lightGrey:"#ccc",
        shadeBlue:"#0d3e80",
        lightGrayishBlue:"#f5f7fa"
      }
    },
  },
  plugins: [],
}
