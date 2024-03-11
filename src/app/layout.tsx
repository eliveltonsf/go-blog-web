import { AppProvider } from "@/providers";
import "@/styles/globals.css";

import localFont from "next/font/local";

import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const wotfard = localFont({
  src: [
    {
      path: "../fonts/wotfard-regular-webfont.woff2",
      weight: "400",
      style: "regular",
    },
  ],
});

export const metadata = {
  title: "Go Blog",
  description: "Go Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(wotfard.className, "overflow-x-hidden style-scrollbar-h")}
      >
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
