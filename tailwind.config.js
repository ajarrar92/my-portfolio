module.exports = {
	darkMode: 'dark',
	content: ['./src/**/*.{js,jsx,css}', './public/index.html'],
	theme: {
		extend: {
			fontFamily: {
				signika: ['Signika', 'monospace'],
				graduate: ['Graduate', 'monospace'],
				jetBrains: ['JetBrains Mono', 'monospace'],
			},
		},
	},
	plugins: [],
};
