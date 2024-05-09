/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
       center:true,
       screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },


    },


    extend: {/*
      fontFamily:{
        open:['Open Sans', 'sans-serif'],
       }
       ,
       colors:
       {
          'kirmizi':'#BC1A45'

       },
*/
       spacing:
       {
        128:'32rem'
       },

    },
  },
  plugins: [],
}

