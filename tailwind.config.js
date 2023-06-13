/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			"primary-body": "#393646",
			"secondary-shade": "#6D5D6E",
			"primary-beige": "#F4EEE0",
			"secondary-red": "#CD1818",
			"secondary-green": "#1E5128",
			white: "#fff",
		},
	},
	plugins: [],
};
