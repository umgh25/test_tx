import type React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface LoanData {
  type: string;
  accountNumber: string;
  borrowerIdentifier: string;
  requestedAmount: string;
  loanAmount: string;
  monthlyPayment: string;
  durationMonths: string;
  interestRate: string;
  commission: string;
  globalEffectiveRate: string;
  requestDate: string;
  lastPaymentDate: string;
  status: 'validé' | 'en attente';
}

interface LoansTableProps {
  data: LoanData[];
}

const LoansTable: React.FC<LoansTableProps> = ({ data }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Détails des prêts</h2>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="font-medium text-xs">Nombre de contrat</TableHead>
              <TableHead className="font-medium text-xs">Identifiant emprunteur</TableHead>
              <TableHead className="font-medium text-xs">Montant demandé</TableHead>
              <TableHead className="font-medium text-xs">Montant du prêt</TableHead>
              <TableHead className="font-medium text-xs">Mensualité</TableHead>
              <TableHead className="font-medium text-xs">Durée résiduelle</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((loan) => (
              <TableRow key={loan.accountNumber}>
                <TableCell className="text-xs">{loan.accountNumber}</TableCell>
                <TableCell className="text-xs">{loan.borrowerIdentifier}</TableCell>
                <TableCell className="text-xs">{loan.requestedAmount}</TableCell>
                <TableCell className="text-xs">{loan.loanAmount}</TableCell>
                <TableCell className="text-xs">
                  {loan.status === 'validé' ? loan.monthlyPayment : 'En attente'}
                </TableCell>
                <TableCell className="text-xs">
                  {loan.status === 'validé' ? `${loan.durationMonths} mois` : 'En attente'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h3 className="text-lg font-medium mt-8 mb-4">Informations complémentaires</h3>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="font-medium text-xs">Type</TableHead>
              <TableHead className="font-medium text-xs">Taux d'intérêt</TableHead>
              <TableHead className="font-medium text-xs">Commission</TableHead>
              <TableHead className="font-medium text-xs">Taux Effectif Global</TableHead>
              <TableHead className="font-medium text-xs">Date de la demande</TableHead>
              <TableHead className="font-medium text-xs">Date dernière échéance</TableHead>
              <TableHead className="font-medium text-xs">Status de la demande</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((loan) => (
              <TableRow key={loan.accountNumber}>
                <TableCell className="text-xs">{loan.type}</TableCell>
                <TableCell className="text-xs">{loan.interestRate}</TableCell>
                <TableCell className="text-xs">{loan.commission}</TableCell>
                <TableCell className="text-xs">{loan.globalEffectiveRate}</TableCell>
                <TableCell className="text-xs">{loan.requestDate}</TableCell>
                <TableCell className="text-xs">
                  {loan.status === 'validé' ? loan.lastPaymentDate : 'En attente'}
                </TableCell>
                <TableCell>
                  <Badge
                    className={loan.status === 'validé'
                      ? "bg-green-100 text-green-800 hover:bg-green-200"
                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                    }
                  >
                    {loan.status === 'validé' ? 'Validé' : 'En attente'}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LoansTable;
