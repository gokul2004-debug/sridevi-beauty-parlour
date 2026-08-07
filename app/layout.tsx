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
    images: ["https://images.unsplash.com/photo-1588842867976-fd084ca2c87b?q=80&w=1200&h=630&fit=crop&auto=format"],
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
