import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thala For A Reason',
  description: 'A Next.js website that generates Dhoni-themed responses for inputs related to MS Dhoni or the number 7 — anything else gets "Not Thala for a reason".',
  /* 
    icons: {
      icon: [
        {
          url: '/light-icon.png', // path in /public directory
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/dark-icon.png', // path in /public directory
          media: '(prefers-color-scheme: dark)',
        },
      ],
    }, 
  */
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="script" href="page.js"/>
        <link rel="preload" as="style" href="page.module.css"/>
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
