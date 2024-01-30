import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            h1: {
              color: 'var(--foreground)',
              '&:hover': {
                // color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
