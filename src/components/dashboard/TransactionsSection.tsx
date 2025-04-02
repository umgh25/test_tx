import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const EtatPretSociete: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* État */}
      <Card className="p-5 h-64 flex flex-col">
        <h3 className="font-medium text-gray-700 mb-3">État</h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm">Prêt Société</p>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 font-normal">
            Validé
          </Badge>
        </div>
        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-full rounded-full"
            style={{ width: "100%" }}
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm">Prêt HoldDogs</p>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 font-normal">
              En attente
            </Badge>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-full rounded-full"
              style={{ width: "30%" }}
            />
          </div>
        </div>
        <div className="mt-auto">
          <button className="text-blue-600 text-sm hover:underline">
            Créer un nouveau dossier
          </button>
        </div>
      </Card>

      {/* Prêt Société */}
      <Card className="p-5 h-64 flex flex-col">
        <h3 className="font-medium text-gray-700 mb-3 self-start">
          Prêt Société
        </h3>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-4xl font-bold mb-1">39 234€</div>
          <p className="text-sm text-gray-500 mb-4">Montant du prêt en cours</p>
          <div className="flex items-center justify-center">
            <CheckCircle size={20} className="text-green-500 mr-2" />
            <span className="text-sm">Prêt validé</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EtatPretSociete;
