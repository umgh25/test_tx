import type React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProfileCardProps {
  name?: string;
  address?: string;
  city?: string;
  segment?: string;
  riskEvaluation?: {
    value?: string;
    label?: string;
  };
  score?: {
    value?: string;
    label?: string;
    range?: {
      min: string;
      max: string;
      current: number;
    };
  };
  lastTransaction?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  address,
  city,
  riskEvaluation,
  score,
  lastTransaction
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Info carte */}
      <Card className="p-4 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-3">
          
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            </svg>
          
          <div className="text-xs text-slate-500">
            <img src="segment.png" alt="Segment" />
          </div>
        </div>
        <div>
          <h3 className="font-medium text-sm">{name || "Paul Dumartin"}</h3>
          <p className="text-xs text-slate-500">{address || "14 rue du Louvre"}</p>
          <p className="text-xs text-slate-500">{city || "PARIS 75001"}</p>
        </div>
      </Card>

      {/* Segment Card */}
      <Card className="p-4 flex flex-col items-center justify-center h-full relative">
        <div className="text-xs text-slate-500 w-full text-left mb-2">Segment</div>
        <div className="text-center flex-grow flex items-center justify-center"></div>
        {/* Placer 'RET' dans le coin inférieur droit */}
        <div className="absolute bottom-0 right-0 mb-2 mr-2 text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-800">
          RET
        </div>
      </Card>

      {/* Risk Evaluation Card */}
      <Card className="p-4 flex flex-col h-full relative">
        <div className="text-xs text-slate-500 mb-1">Évaluation des risques</div>
        <div className="text-sm text-green-500 font-medium mb-2">{riskEvaluation?.label || "Risques faible"}</div>
        <div className="flex-grow flex items-center justify-center">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500">
            <div className="absolute bottom-0 right-0 mb-2 mr-2">
              {riskEvaluation?.value || "B"}
            </div>
          </div>
        </div>
      </Card>

      {/* Score Card */}
      <Card className="p-4 flex flex-col h-full">
        <div className="text-xs text-slate-500 mb-1">Score risque</div>
        <div className="text-sm font-medium mb-2">Lorem Ipsum</div>
        <div className="mt-auto">
          <div className="flex justify-between text-xs mb-1">
            <span>A</span>
            <span>C</span>
          </div>
          <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green-500 to-yellow-500"
              style={{ width: `60%` }}
            >
              <div className="relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Transaction Card */}
      <Card className="p-4 flex flex-col h-full">
        <div className="text-xs text-slate-500 mb-1">Montant dernière transaction</div>
        <div className="flex-grow flex flex-col items-center justify-center">
          <div className="text-4xl sm:text-5xl font-bold text-indigo-800">{lastTransaction || "80K"}</div>
          <div className="mt-4">
            <img src="/coin.png" alt="Coin" className="w-16 h-16 ml-auto" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
