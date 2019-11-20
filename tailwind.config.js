module.exports = {
	separator: '--',
	prefix: '',
	theme: {
		colors: {
			'transparent': 'transparent',
			'black': '#000',
			'white': '#fff',
			'ubc-blue': '#002145',
			'ubc-alert': '#ff7c7c',
			'ubc-warning': '#f8e605',
			'ubc-success': '#57edae',
			'unit-primary': 'var(--color-primary)',
			'unit-secondary': 'var(--color-secondary)',
			grey: {
				50: '#fafafa',
				100: '#f5f5f5',
				300: '#e0e0e0',
				500: '#9e9e9e',
				700: '#616161',
				900: '#212121',
			},
		},
		screens: {
			sm: '640px',
			md: '960px',
			lg: '1280px',
			xl: '1720px',
			xxl: '2400px',
			xxxl: '3200px',
		},
		fontFamily: {
			sans: [
				'Open Sans',
				'Arial',
				'sans-serif',
			],
			serif: [
				'Merriweather',
				'Georgia',
				'Cambria',
				'"Times New Roman"',
				'Times',
				'serif',
			],
			mono: [
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace',
			],
		},
		fontSize: {
			'xs': '.75rem', //12px
			'sm': '.875rem', //14px
			'base': '1rem', //16px
			'lg': '1.125rem', //18px
			'xl': '1.25rem', //20px
			'2xl': '1.5rem', //24px
			'3xl': '1.75rem', //28px
			'4xl': '2.25rem', //36px
			'5xl': '3.375rem', //54px
			'6xl': '5.0625rem', //81px
			'7xl': '7.625rem', //122px
		},
		fontWeight: {
			normal: 400,
			semibold: 600,
			bold: 700,
		},
		borderColor: theme => {
			return global.Object.assign({
				default: theme('colors.grey.300', 'currentColor')
			}, theme('colors'))
		},
		width: theme => ({
			auto: 'auto',
			...theme('spacing'),
			'half': '50%',
			'one-third': '33.33333%',
			'two-thirds': '66.66667%',
			'one-quarter': '25%',
			'three-quarters': '75%',
			'one-fifth': '20%',
			'two-fifths': '40%',
			'three-fifths': '60%',
			'four-fifths': '80%',
			'one-sixth': '16.66667%',
			'five-sixths': '83.33333%',
			'one-twelfth': '8.33333%',
			'five-twelfths': '41.66666%',
			'seven-twelfths': '58.33333%',
			'eleven-twelfths': '91.66666%',
			full: '100%',
			screen: '100vw',
		}),
		order: {
			first: '-100',
			last: '100',
			none: '0',
			'1': '1',
			'2': '2',
			'3': '3',
			'4': '4',
		},
		extend: {},
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
		boxShadow: ['responsive', 'hover', 'group-hover'],
		cursor: [],
		fill: [],
		fontFamily: [],
		fontWeight: ['responsive'],
		outline: ['focus'],
		pointerEvents: [],
		resize: [],
		stroke: [],
		textColor: ['responsive', 'hover', 'focus', 'group-hover'],
	},
	plugins: [],
}
