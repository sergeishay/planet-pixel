/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1560px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        lightBlue: '#00C2FF',
        myblue: '#00C2FF',
        
      },
      backgroundImage: {
        halfpanda: 'url("/half-panda.png")',
        pandamobile: 'url("/pandamobile2.webp")',
        panda: 'url("/pandahero.png")',
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
        backgroundHome: 'url("/background-desctop.webp")',
        backgroundDescNew: 'url("/newBackground-desc.jpg")',
        backgroundDescNewPande: 'url("/newPanda.jpg")',
        servicebackground: 'url("/project-bg.webp")',
        heroPanda: 'url("/heropandamob3.webp")',
        whyBackground: 'url("/whyBackground.png")',
        whyBackgroundMobile: 'url("/whyBackgroundMobile.png")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
        myfont : [`var(--font-myfont)`, 'sans-serif'],
        montserrat : [`var(--font-montserrat)`, 'sans-serif'],
        pirulen : [`var(--font-pirulen)`, 'sans-serif'],
      },
      inset: {
        '10': '2.5rem',
        '20': '5rem',
        '30': '7.5rem',
        '40': '10rem',
        '50': '12.5rem',
        '1/2': '50%',
        '1/8': '12.5%',
        '3/8': '37.5%',
      },
      spacing: {
        '10': '2.5rem',
      },
      backdropInvert: {
        25: '.25',
        50: '.5',
        75: '.75',

      }
    },
  },
  container: {
    padding: {
      DEFAULT: '10px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
