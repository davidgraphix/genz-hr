import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gen Z HR — HR for the Next Generation",
  description:
    "Gen Z HR is a culture-forward HR brand building conversations, culture, and career clarity for modern professionals. People-first. Tech-aware. Future-driven.",
  keywords: [
    "Gen Z HR",
    "workplace culture",
    "career clarity",
    "HR education",
    "modern workforce",
    "career conversations",
    "professional growth",
  ],
  authors: [{ name: "Gen Z HR" }],
  openGraph: {
    title: "Gen Z HR — HR for the Next Generation",
    description:
      "Building conversations, culture, and career clarity for modern professionals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen Z HR — HR for the Next Generation",
    description:
      "Building conversations, culture, and career clarity for modern professionals.",
  },
};

export const viewport: Viewport = {
  themeColor: "#06060E",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bricolage.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}