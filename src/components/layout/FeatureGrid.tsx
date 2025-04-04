import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Définition des types pour les propriétés de la carte
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card className="h-full border border-gray-100 shadow-lg feature-card bg-white rounded-lg">
      <CardHeader className="flex items-start space-y-0 pb-2 pt-6 px-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 icon-container">
          <div className="text-primary">{icon}</div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 px-6 pb-6">
        <h3 className="font-medium text-base">{title}</h3>
        <p className="text-sm text-gray-500 leading-normal">{description}</p>
      </CardContent>
    </Card>
  );
};

export function FeatureGrid() {
  return (
    <div className="bg-white py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Carte 1: Évaluation du profil de risque */}
        <div className="h-64">
          <FeatureCard
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Evaluation du profil de risque de votre client"
            description="Plus de mauvaises surprises lors de la facturation de votre client. Chez Liztrade, nous évaluons son risque débiteur afin de permettre la valorisation et l'acceptation rapide de votre facture."
          />
        </div>

        {/* Carte 2: Meilleur prix de cession */}
        <div className="h-64">
          <FeatureCard
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Meilleur prix de cession de votre créance"
            description="Nos algorithmes trouvent pour vous la meilleure offre de financement en termes de prix et de taux de commission. En moyenne, nos clients perçoivent jusqu'à 97 % de la valeur nominale de leur facture."
          />
        </div>

        {/* Carte 3: Paiement rapide */}
        <div className="h-64">
          <FeatureCard
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Paiement en un temps record pour vos factures"
            description="Après validation et financement de votre facture, votre paiement est transféré en seulement quelques minutes. Grâce à notre plateforme de paiement, bénéficiez de nouvelles fonctionnalités de paiement instantané."
          />
        </div>

        {/* Carte 4: Financement en temps réel */}
        <div className="h-64">
          <FeatureCard
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Financez vos besoins de trésorerie en temps réel"
            description="Faites une demande de financement en ligne via l'envoi électronique de facture et obtenez plus rapidement vos fonds via un traitement automatisé de vos demandes."
          />
        </div>
      </div>
    </div>
  );
}
