import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * Métadonnées globales de la page, définissant le titre et la description pour l'optimisation SEO.
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: "LiqTrade - Financement professionnel à court terme",
  description:
    "LiqTrade offre des solutions de financement professionnel à court terme, sans garantie personnelle. Prêt et affacturage pour les entreprises.",
};

/**
 * Layout principal de l'application. Ce composant enveloppe l'ensemble du contenu de la page et applique la police Inter à tout le corps de la page.
 *
 * @param {React.ReactNode} children - Contenu de la page qui sera rendu à l'intérieur du layout.
 * @returns {JSX.Element} - Structure HTML de la page, incluant le contenu passé dans `children`.
 */
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="fr" dir="ltr">
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
