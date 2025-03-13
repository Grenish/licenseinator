import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const Mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Licenseinator - Find Your Ideal Open Source License",
  description:
    "Helps you find your ideal license for your next project. Compare open source licenses, understand copyleft strength, and make informed decisions.",
  keywords:
    "open source, license, MIT, GPL, Apache, BSD, Mozilla, copyleft, permissive, software license",
  authors: [{ name: "Licenseinator Team" }],
  openGraph: {
    title: "Licenseinator - Find Your Ideal Open Source License",
    description:
      "Compare open source licenses, understand copyleft strength, and make informed decisions for your project.",
    url: "https://licenseinator.vercel.app",
    siteName: "Licenseinator",
    images: [
      {
        url: "https://licenseinator/og-image.png",
        width: 1200,
        height: 630,
        alt: "Licenseinator - Open Source License Explorer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenseinator - Find Your Ideal Open Source License",
    description:
      "Compare open source licenses, understand copyleft strength, and make informed decisions for your project.",
    images: ["/og-image-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Mont.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
