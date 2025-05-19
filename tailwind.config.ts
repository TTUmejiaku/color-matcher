
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Design System Colors
				'corn-blue': {
					'base': '#173EB7',
					'active': '#2E5193',
					'disabled': '#C5CFE1',
					'hover': '#F6F7FA',
				},
				'gray': {
					'base': '#4B5563',
					'active': '#666E7A',
					'disabled': '#DBBDD0',
					'hover': '#F8F8F9',
				},
				'teal': {
					25: '#F6FDFB',
					50: '#DEFF7EF',
					75: '#C7F2E5',
					100: '#A6E9D5',
					200: '#63D9B6',
					300: '#36CEA1',
					400: '#20C997',
					500: '#1AA179',
					600: '#158362',
					700: '#10654B',
					800: '#0A3C2D',
					900: '#051E17',
				},
				'light-blue': {
					25: '#F9FBFE',
					50: '#DCE2ED',
					75: '#C5CFE1',
					100: '#A2B2CF',
					200: '#5D78AB',
					300: '#2E5193',
					400: '#173EB7',
					500: '#0E2856',
					600: '#0F2858',
					700: '#0B1F43',
					800: '#071329',
					900: '#030914',
				},
				'green': {
					'base': '#28A745',
					'active': '#3EB058',
					'disabled': '#C9E9D1',
					'hover': '#DFF2E3',
				},
				'amber': {
					50: '#FFF6DA',
					75: '#FFEFC1',
					100: '#FFE69C',
					200: '#FFD451',
					300: '#FFC720',
					400: '#FFC107',
					500: '#CC9A06',
					600: '#A67D05',
					700: '#806103',
					800: '#4D3A02',
					900: '#261D01',
				},
				'red': {
					'base': '#DC3545',
					'active': '#E04958',
					'disabled': '#F6CDD1',
					'hover': '#FAE1E3',
				},
				// Additional soft color variants
				'soft-green': {
					50: '#DFF2E3',
					75: '#C9E9D1',
					100: '#C9E9D1',
					200: '#68C17D',
					300: '#3EB058',
					400: '#28A745',
					500: '#208637',
					600: '#1A6D2D',
					700: '#145322',
					800: '#0C3215',
					900: '#06190A',
				},
				'soft-red': {
					50: '#FAE1E3',
					75: '#F6CDD1',
					100: '#F1AEB5',
					200: '#E7727D',
					300: '#E04958',
					400: '#DC3545',
					500: '#B02A37',
					600: '#8F222D',
					700: '#6E1A22',
					800: '#421015',
					900: '#21080A',
				},
				'neutral-white': {
					50: '#F8F9FA',
					75: '#F0F0F1',
					100: '#D9D9D9',
					200: '#CCCCCC',
				},
				'neutral-black': {
					300: '#CCCCCC',
					400: '#B3B3B3',
					500: '#999999',
				},
				'dark-cornflower-blue': {
					25: '#F6F7FA',
					50: '#DCE2ED',
					75: '#C5CFE1',
					100: '#A2B2CF',
					200: '#5D78AB',
					300: '#2E5193',
					400: '#173EB7',
					500: '#0E2856',
					600: '#0F2858',
					700: '#0B1F43',
					800: '#071329',
				},
				'steel-gray': {
					25: '#F8F8F9',
					50: '#E4E5E8',
					75: '#DBBDD0',
					100: '#C0C3C8',
					200: '#9CA1A9',
					300: '#666E7A',
					400: '#4B5563',
					500: '#404B54',
					600: '#343C45',
					700: '#252A31',
					800: '#161A1E',
				},
				'black': {
					400: '#010611',
				},
				'white': {
					400: '#FFFFFF',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
