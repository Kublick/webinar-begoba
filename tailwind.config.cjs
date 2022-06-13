module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'rgb(231, 64, 123)',
				},
				whats: {
					DEFAULT: '#25d366',
				},
				telegram: {
					DEFAULT: '#229ED9',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
