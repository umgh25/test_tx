import type React from "react";

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
  status: "validé" | "en attente";
}

interface LoansTableProps {
  data: LoanData[];
}

const LoansTable: React.FC<LoansTableProps> = ({ data }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Détails des prêts</h2>

      {/* Premier tableau */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Numéro de
                  <br />
                  contrat
                </th>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Identifiant
                  <br />
                  emprunteur
                </th>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Montant
                  <br />
                  demandé
                </th>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Montant du prêt
                </th>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Mensualité
                </th>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Durée
                  <br />
                  souhaitée
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((loan) => (
                <tr key={loan.accountNumber}>
                  <td className="text-xs text-gray-700 text-center py-3">
                    <div className="text-xs text-center">{loan.type}</div>
                    <div className="text-xs text-center text-gray-500">
                      {loan.accountNumber}
                    </div>
                  </td>
                  <td className="text-xs text-center py-3">
                    {loan.borrowerIdentifier}
                  </td>
                  <td className="text-xs text-center py-3">
                    {loan.requestedAmount}
                  </td>
                  <td className="text-xs text-center py-3">
                    {loan.loanAmount}
                  </td>
                  <td className="text-xs text-center py-3">
                    {loan.monthlyPayment}
                  </td>
                  <td className="text-xs text-center py-3">
                    {loan.durationMonths} mois
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoansTable;
