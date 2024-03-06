import { AppProvider } from '@/providers';
import '@/styles/globals.css';

import localFont from 'next/font/local';

const wotfard = localFont({
  src: [
    {
      path: '../fonts/wotfard-regular-webfont.woff2',
      weight: '400',
      style: 'regular'
    },
  ]
});

export const metadata = {
  title: 'Go Blog',
  description: 'Go Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={wotfard.className}><AppProvider>{children}</AppProvider></body>
    </html>
  )
}
