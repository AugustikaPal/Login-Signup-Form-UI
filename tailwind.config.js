/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor :{
        'richblack': '#010b13',
        'richBlack':'#2a2a2b'
       },
       text : {
        'richblack':'#010b13'
       }
    },
  },
  plugins: [],
}

