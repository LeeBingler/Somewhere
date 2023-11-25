import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Arapey': ['Arapey', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif'],
      'Bon-Voyage': ['MADE Bon Voyage', 'sans-serif'],
    }
  },
  plugins: [],
}
export default config
