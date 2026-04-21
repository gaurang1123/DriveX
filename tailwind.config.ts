import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design system colors from the Kinetic Noir design
        'on-secondary-container': '#d9ae75',
        'surface-container-lowest': '#0e0e0e',
        'secondary-container': '#5f4112',
        'on-secondary-fixed': '#291800',
        'on-surface-variant': '#d7c3ae',
        'surface-container-low': '#1c1b1b',
        'on-primary-fixed': '#291800',
        'on-tertiary-container': '#004d6a',
        'on-error-container': '#ffdad6',
        'surface-container-high': '#2a2a2a',
        'surface-dim': '#131313',
        'on-error': '#690005',
        'inverse-on-surface': '#313030',
        'tertiary-fixed-dim': '#7cd0ff',
        'background': '#131313',
        'on-primary-container': '#644000',
        'on-primary-fixed-variant': '#633f00',
        'tertiary-fixed': '#c4e7ff',
        'secondary-fixed-dim': '#ecbf85',
        'outline-variant': '#524534',
        'error-container': '#93000a',
        'on-tertiary-fixed-variant': '#004c69',
        'inverse-surface': '#e5e2e1',
        'primary-fixed': '#ffddb4',
        'tertiary': '#9bd9ff',
        'on-secondary': '#452b00',
        'primary': '#ffc880',
        'surface-container': '#201f1f',
        'tertiary-container': '#3ac2ff',
        'secondary': '#ecbf85',
        'on-background': '#e5e2e1',
        'error': '#ffb4ab',
        'inverse-primary': '#835500',
        'on-tertiary': '#00344a',
        'primary-container': '#f5a623',
        'on-secondary-fixed-variant': '#5f4112',
        'surface-tint': '#ffb955',
        'surface-bright': '#3a3939',
        'surface': '#131313',
        'on-primary': '#452b00',
        'primary-fixed-dim': '#ffb955',
        'on-tertiary-fixed': '#001e2c',
        'surface-container-highest': '#353534',
        'outline': '#9f8e7a',
        'surface-variant': '#353534',
        'secondary-fixed': '#ffddb4',
        'on-surface': '#e5e2e1',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '1.5rem',
        'full': '9999px',
      },
      fontFamily: {
        'headline': ['Space Grotesk', 'sans-serif'],
        'body': ['Manrope', 'sans-serif'],
        'label': ['Manrope', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config