import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LiqTrade - Financement professionnel à court terme",
  description:
    "LiqTrade offre des solutions de financement professionnel à court terme, sans garantie personnelle. Prêt et affacturage pour les entreprises.",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="fr" dir="ltr">
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
