import type { Metadata, Viewport } from "next";
import { Great_Vibes, Aref_Ruqaa, Tajawal } from "next/font/google";
import "./globals.css";
import { WEDDING } from "@/lib/constants";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://yazan-muna-wedding.vercel.app");

const previewImage = "/opengraph-image.png";

const scriptFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const arabicDisplay = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

const bodyFont = Tajawal({
  weight: ["300", "400", "500", "700"],
  subsets: ["arabic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `دعوة زفاف ${WEDDING.groomName} و${WEDDING.brideName}`,
  description: `دعوة زفاف ${WEDDING.groomName} و${WEDDING.brideName} يوم ${WEDDING.dateLabel}، ${WEDDING.timeLabel}`,
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: siteUrl,
    siteName: `دعوة زفاف ${WEDDING.groomName} و${WEDDING.brideName}`,
    title: `دعوة زفاف ${WEDDING.groomName} و${WEDDING.brideName}`,
    description: `نتشرف بدعوتكم لمشاركتنا فرحتنا يوم ${WEDDING.dateLabel} في ${WEDDING.venue}، ${WEDDING.city}`,
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: `دعوة زفاف ${WEDDING.groomName} و${WEDDING.brideName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `دعوة زفاف ${WEDDING.groomName} و${WEDDING.brideName}`,
    description: `نتشرف بدعوتكم لمشاركتنا فرحتنا يوم ${WEDDING.dateLabel}`,
    images: [previewImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#F7E9DE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${scriptFont.variable} ${arabicDisplay.variable} ${bodyFont.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
