/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {


    colors:{
      primary: '#161A1D',
      accent:'#990B0D',
      secondary:'#F5F3F4',
        },
    extend: {
      fontFamily: {
        'strippy':['strippyregular','sans-serif'],
        
        'quattro':['Quattrocento Sans', 'sans-serif;'],},
        spacing:{
  tenpercent: '10%',
},
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

