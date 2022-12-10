/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  purge: ['*.html'],
  corePlugins: {
    preflight: false
  },
  prefix:'tw-',
  important: true,
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        sm:'737px',
        md:'841px',
        lg:'961px',
        xl:'1281px',
        '2xl':'1681px',
      },
      colors:{
        mainfont: '#603F8B',
        textfont:'#747474',
        mainpink: '#FD49A0',
        mainblue:'#B4FEE7'
      }
    },
  },
  plugins: [],
}
