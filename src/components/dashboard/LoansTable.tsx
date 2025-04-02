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

      {/* Premier tableau - informations sur le prêt */}
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
              {data.map((loan, index) => (
                <tr key={`loan-details-${index}`}>
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
                    {loan.durationMonths}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deuxième tableau - informations sur les taux et statuts */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Taux
                  <br />
                  d'intérêt
                </th>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Commission
                </th>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Taux Effect
                  <br />
                  Global
                </th>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Date de la
                  <br />
                  demande
                </th>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Date dernière
                  <br />
                  échéance
                </th>
                <th className="text-blue-900 text-center font-medium text-xs pb-6 w-1/6">
                  Statut de la
                  <br />
                  demande
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((loan, index) => (
                <tr key={`loan-status-${index}`}>
                  <td className="text-xs text-gray-700 text-center py-3">
                    <div className="text-xs text-center">{loan.type}</div>
                    <div className="text-xs text-center text-gray-500">
                      {loan.interestRate}
                    </div>
                  </td>
                  <td className="text-xs text-center py-3">
                    {loan.commission}
                  </td>
                  <td className="text-xs text-center py-3">
                    {loan.globalEffectiveRate}
                  </td>
                  <td className="text-xs text-center py-3">
                    {loan.requestDate}
                  </td>
                  <td className="text-xs text-center py-3">
                    {loan.lastPaymentDate}
                  </td>
                  <td className="text-xs text-center py-3">
                    <span
                      className={
                        loan.status === "validé"
                          ? "text-green-500 font-medium"
                          : "text-gray-400 font-medium"
                      }
                    >
                      {loan.status === "validé" ? "Validé" : "En attente"}
                    </span>
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
