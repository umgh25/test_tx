import React from "react";
import { Button } from "@/components/ui/button";

type ServiceItem = {
  id: string;
  title: string;
};

const serviceItems: ServiceItem[] = [
  { id: "refinancer", title: "Refinancer son entreprise" },
  { id: "ouvrir", title: "Ouvrir une nouvelle agence" },
  { id: "connaitre", title: "Faire connaître son entreprise" },
  { id: "international", title: "Se lancer à l'international" },
  { id: "digitaliser", title: "Digitaliser son entreprise" },
  { id: "acquerir", title: "Acquérir une entreprise" },
  { id: "transformer", title: "Transformer son entreprise" },
  { id: "financer", title: "Financer des projets de développements durables" },
];

export function ServiceList() {
  return (
    <section className="bg-gray-50 py-12 px-8">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/4 md:pl-12 space-y-5 ml-auto">
          <div className="space-y-2">
            <Button
              variant="link"
              className="text-emerald-500 font-medium flex items-center gap-2 pl-0 text-lg no-underline hover:no-underline"
            >
              Prêts{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>

          <div className="space-y-2">
            <Button
              variant="link"
              className="text-gray-300 font-medium flex items-center gap-2 pl-0 text-lg no-underline hover:no-underline"
            >
              Affacturage{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="md:w-3/4 md:pr-16 space-y-6 ml-auto">
          <div className="space-y-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              Des taux compétitifs en quelques clics.
              <br />
              Quel que soit votre projet, nous vous accompagnons de manière bienveillante avec les meilleurs
              outils en ligne. Oubliez le parcours du combattant, à vous le financement professionnel à court
              terme. Chez Liztrade nous vous aidons à évoluer à travers des solutions de financement simples,
              efficaces et compétitives en seulement quelques clics.
            </p>

            <div className="space-y-2">
              <p className="font-medium text-gray-700">TPE/PME, comptez sur nous pour vous aider à :</p>

              <ul className="list-none space-y-1 text-sm text-gray-600 ml-1">
                {serviceItems.map((item) => (
                  <li key={item.id} className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4">
            <Button
              variant="default"
              className="bg-zinc-800 hover:bg-zinc-700 rounded px-5 py-2 text-sm font-medium"
            >
              Vidéo de présentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}