import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
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
	darkMode: 'class',
	plugins: [nextui()],
};
export default config;
