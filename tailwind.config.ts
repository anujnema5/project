import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'class-banner': "url('https://www.nifafinearts.com/images/appbg.jpg')",
        'courses-banner': "url('https://www.nifafinearts.com/images/artboard2.png')",
        'student-banner': "url('https://www.nifafinearts.com/images/student-talk.jpg')",
        'footer-banner': "url('https://www.nifafinearts.com/images/fotbg2.jpeg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
