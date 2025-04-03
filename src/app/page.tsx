import Layout from "@/components/layout/Layout";
import Hero from "@/components/layout/Hero";
import { ServiceList } from "@/components/layout/ServiceList";
import { FeatureGrid } from "@/components/layout/FeatureGrid";

/**
 * Composant principal de la page d'accueil.
 *
 * Ce composant sert de structure principale de la page d'accueil,
 * affichant les différentes sections telles que l'en-tête, les services et les fonctionnalités.
 *
 * @returns {JSX.Element} Le rendu de la page d'accueil avec tous les éléments nécessaires.
 */
export default function Home() {
  return (
    <Layout>
      {/* Affiche le composant Hero avec un message principal */}
      <Hero />

      {/* Affiche la liste des services proposés par l'application */}
      <ServiceList />

      {/* Affiche une grille de fonctionnalités proposées */}
      <FeatureGrid />
    </Layout>
  );
}
