import { AppProvider } from '@/providers';
import '@/styles/globals.css';

import localFont from 'next/font/local';

import {cn} from '@/lib/utils'
import Header from '@/components/Header';

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
      <body className={cn(wotfard.className, "mx-[8rem]")}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
