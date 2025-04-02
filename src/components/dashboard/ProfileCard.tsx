import type React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProfileCardProps {
  name: string;
  address: string;
  city: string;
  segment?: string;
  riskEvaluation?: {
    label: string;
    value: string;
  };
  score?: {
    label: string;
    value: string;
    range: {
      min: string;
      max: string;
      current: number;
    }
  };
  lastTransaction?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  address,
  city,
  segment,
  riskEvaluation,
  score,
  lastTransaction
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Info carte */}
      <Card className="p-4 md:col-span-1">
        <div className="flex items-center justify-between mb-3">
          <div className="bg-slate-100 p-1 rounded-full">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-xs text-slate-500">Segment</div>
        </div>
        <div>
          <h3 className="font-medium text-sm">{name}</h3>
          <p className="text-xs text-slate-500">{address}</p>
          <p className="text-xs text-slate-500">{city}</p>
        </div>
      </Card>

      {/* Score risque */}
      <Card className="p-4 flex flex-col items-center justify-center bg-white md:col-span-1">
        <div className="text-center">
          <div className="text-6xl font-bold text-indigo-800">{riskEvaluation?.value || 'RET'}</div>
          <div className="text-sm text-slate-500 mt-1">Évaluation des risques</div>
          {riskEvaluation?.label && (
            <div className="mt-2">
              <Badge className="bg-green-100 text-green-800 font-normal">{riskEvaluation.label}</Badge>
            </div>
          )}
        </div>
      </Card>

      {/* Note */}
      <Card className="p-4 flex flex-col items-center justify-center bg-white md:col-span-1">
        <div className="text-center">
          <div className="text-6xl font-bold text-green-500">{score?.value || 'B'}</div>
          <div className="text-sm text-slate-500 mt-1">{score?.label || 'Score risque'}</div>
          {score?.range && (
            <div className="w-full mt-2 px-2">
              <div className="flex justify-between text-xs mb-1">
                <span>{score.range.min}</span>
                <span>{score.range.max}</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-yellow-500"
                  style={{ width: `${score.range.current}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Transaction */}
      <Card className="p-4 flex items-center justify-center bg-white md:col-span-1">
        <div className="text-center flex flex-col items-center">
          <div className="text-3xl font-bold">{lastTransaction || '80K'}</div>
          <div className="text-sm text-slate-500 mt-1">Montant dernière transaction</div>
          <div className="mt-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#FCD34D" />
                <path d="M12 6C8.68 6 6 8.68 6 12C6 15.32 8.68 18 12 18C15.32 18 18 15.32 18 12C18 8.68 15.32 6 12 6ZM11 16V14H13V16H11ZM11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V13H11V12Z" fill="#F59E0B" />
              </svg>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
