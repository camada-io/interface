import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'whiteAlpha': {
          100: '#FFFFFF0F',
          300: '#FFFFFF29',
          500: '#FFFFFF5C',
          1000: '#FFFFFF',
        },
        'brandBlue': {
          100: '#81DFE4',
          200: '#15BBC6',
        },
        'gray': {
          300: '#999999',
          400: '#676767',
          500: '#3C4150',
          600: '#303544',
          650: '#30354480',
          700: '#272C39',
          900: '#222631',
        }
      }
    },
  },
  plugins: [],
}
export default config
