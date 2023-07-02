/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxs: "450px",
      xs: "550px",
      // nav_logo: "550px",
      sm: "640px",
      md: "768px",
      base: "870px",
      md_link: "980px",
      lg: "1024px",
      lg1: "1180px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1650px",
      "4xl": "1850px",
      "5xl": "2140px",
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    backgroundImage:{
      card1:`url(/card1.jpg)`,
      card2:`url(/card2.jpg)`,
      card3:`url(/card3.jpg)`,
      card4:`url(/card4.jpg)`,

    },
    boxShadow: {
      resale_shadow:
        "-2px -2px 9px rgba(0, 0, 0, 0.25), inset 6px 4px 9px #9B700A",
      nav: "0px -5px 50px 2px rgba(0,0,0,0.3)",
      dropdown_shadow: "inset -1px -4px 4px 0 rgb(0 0 0 / 0.3)",
      formInputShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
      formShadow: "0 0 0.2rem 0.2rem #FEFEFEE8",
      testimonial_shadow :"inset 1px 4px 10px  rgb(0 0 0 / 0.3)",
    },

  },
  plugins: [],
}
