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
				green1: '#143c39',
				green2: '#0e2a28',
				light1: '#f5ffff',
				light2: '#d5fffc',
				dark1: '#3c2314',
				dark2: '#2a180e',
			},
		},
	},
	plugins: [],
};
export default config;
