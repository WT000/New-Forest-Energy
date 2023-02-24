const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		// screens: {
		// 	xs: "500px",
		// },
		extend: {},
		colors: {
			orange: "#F58800",
			yellow: "#F8BC24",
			green: {
				400: "#266867",
				500: "#1A4645",
			},
			black: {
				DEFAULT: "#051821",
				500: "#77767A",
			},
			white: {
				DEFAULT: "#FFFFFF",
				100: "#FAFAFA",
			},
		},
		extend: {
			fontFamily: {
				sans: ["Roboto", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
