import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const gothamBlack = localFont({
  src: [
    {
      path: '../public/fonts/GothamBlack.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-gotham-black',
  display: 'swap',
})
