import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', 
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a202c',
        darkText: '#ffffff',
      },
      boxShadow: {
        mw : '0px 25px 32px 0px rgba(40,186,145,0.2)'
      }
    },
  },
  plugins: [],
}
export default config
