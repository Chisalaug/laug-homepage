import type { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { SITE } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "laug" }],
  keywords: [
    "LAUG的小屋",
    "laug",
    "千咲酱",
    "动漫区UP主",
    "旅行摄影",
    "科技数码",
  ],
  icons: {
    icon: "/images/icon.svg",
    shortcut: "/images/icon.svg",
    apple: "/images/icon.svg",
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
    locale: "zh_CN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff7fb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-[100svh] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
