import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				darker: '#00948b',
				dark: '#00AA9D',
				light: '#E7FEFB',
				neutral: '#E7FEFB',
			},
		},
	},
	plugins: [],
};
export default config;
