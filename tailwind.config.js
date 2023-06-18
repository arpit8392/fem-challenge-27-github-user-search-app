/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				blueSparkle: '#0079FF',
				searchingBlue: '#697C9A',
				sanMarino: '#4B6A9B',
				anchorsAweigh: '#2B3442',
				ghostWhite: '#F6F8FF',
				offWhite: '#FEFEFE',
				offBlack: '#141D2F',
				faintingLight: '#1E2A47',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
