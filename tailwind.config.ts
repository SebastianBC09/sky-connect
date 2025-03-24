import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        gothamBlack: ['var(--font-gotham-black)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
