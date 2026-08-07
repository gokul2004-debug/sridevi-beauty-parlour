import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Sri Devi Beauty Parlour | Bridal Makeup & Beauty Salon",
  description:
    "Sri Devi Beauty Parlour in Vanapuram, Tiruvannamalai. 25+ years of trusted beauty services including Bridal Makeup, Hair Care, Skin Care, Mehendi, Facials, Hair Spa and more.",

  keywords: [
    "Beauty Parlour",
    "Bridal Makeup",
    "Hair Spa",
    "Hair Cut",
    "Facial",
    "Hydra Facial",
    "Mehendi",
    "Beauty Salon",
    "Vanapuram",
    "Tiruvannamalai",
    "Sri Devi Beauty Parlour",
  ],

  authors: [{ name: "Sri Devi Beauty Parlour" }],

  openGraph: {
    title: "Sri Devi Beauty Parlour",
    description: "Luxury Bridal Makeup & Beauty Services",
    images: ["https://picsum.photos/seed/beauty-parlour-og/1200/630"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}