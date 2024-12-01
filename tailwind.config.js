/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#67B5A8',
				secondary: '#34415B'
			}
		}
	},
	plugins: []
};
