import type React from 'react';
import { Button } from '@/components/ui/button';

const LoansTab: React.FC = () => {
  return (
    <div className="space-y-6 mt-2">
      <div className="flex space-x-2">
        <Button className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded font-normal" variant="ghost">
          Mes prêts
        </Button>
        <Button className="text-gray-500 hover:text-gray-700 rounded font-normal" variant="ghost">
          Mes factures
        </Button>
      </div>
    </div>
  );
};

export default LoansTab;
