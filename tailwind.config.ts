import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
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
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        informative: {
          DEFAULT: 'var(--informative)',
          foreground: 'var(--informative-foreground)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '.callout-contents > p': {
              margin: 0,
            },

            // Inline code only
            ':not(pre) > code': {
              fontWeight: 'inherit',
              position: 'relative',
              bottom: 1,
              color: '#eb5757',
              backgroundColor: 'rgba(135,131,120,0.15)',
              fontFamily: 'Consolas, Menlo, Monaco, "Courier New", monospace',
              borderRadius: 3,
              border: '1px solid #e0e0e0',
              padding: '2px 5px',
            },

            '.dark :not(pre) > code': {
              color: 'white',
              backgroundColor: 'red',
            },

            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            '[data-highlighted-line]': {
              backgroundColor: 'rgba(253, 224, 71, 0.2)',
            },
            pre: {
              paddingRight: 0,
              paddingLeft: 0,
            },
            'pre > code > span': {
              paddingLeft: '1rem',
              paddingRight: '1rem',
            },
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

export default config;
