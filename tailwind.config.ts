import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'WillyWonka': "url('/Pictures/CharlieNTheChocolateFactory.jpg')"
            }
        },
        fontFamily: {
            Arapey: ['Arapey', 'sans-serif'],
            'Arapey-regular': ['Merriweather', 'serif'],
            Poppins: ['Poppins', 'sans-serif'],
            'Bon-Voyage': ['MADE Bon Voyage', 'sans-serif']
        }
    },
    plugins: []
};
export default config;
