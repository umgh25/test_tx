import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EtatCard: React.FC = () => {
  return (
    <Card className="p-5 h-64 flex flex-col">
      <h3 className="font-medium text-gray-700 mb-3">État</h3>
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-sm">Prêt Société</p>
        </div>
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
          <div>
            <p className="text-sm">Prêt HoldDogs</p>
          </div>
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
  );
};

export default EtatCard;
