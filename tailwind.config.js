/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-marinho': '#03296C',
        'azul-ceu': '#0062FF',
        'cinza': {
          1: '#E3E8F2',
          2: '#ACCDDE',
          3: '#757F8D',
          4: '#1A1E23',
        },
      },
      
      fontFamily: {
        sans: ['var(--font-hanken-grotesk)'],
        display: ['var(--font-ranade)'],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          lg: '40px',
          md: '24px',
        },
      },

      backgroundImage: {
        'grafismo-gradiente-1': "url('/img/backgrounds/grafismo-gradiente-1.svg')",
        'grafismo-gradiente-2': "url('/img/backgrounds/grafismo-gradiente-2.svg')",
        'banner-hero': "url('/img/backgrounds/lindal-img-banner.webp')",
        'banner-hero-2': "url('/img/backgrounds/lindal-img-banner-2.webp')",
        'outline-2': "url('/img/backgrounds/grafismo-outline-2.svg')",
        'servico-coifas': "url('/img/lindal-coifas.webp')",
        'servico-fogoes': "url('/img/lindal-fogoes.webp')",
        'servico-caldeiras': "url('/img/lindal-caldeiras.webp')",
        'servico-fornos': "url('/img/lindal-fornos.webp')",
        'servico-refrigeracao': "url('/img/lindal-sistema-refrigeracao.webp')",
        'servico-chapeiras': "url('/img/lindal-chapeiras.webp')",
      }
    },
  },
  plugins: [],
}