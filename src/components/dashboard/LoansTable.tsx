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
              <tr>
                <td className="text-xs text-gray-700 text-center py-3">
                  <div className="text-xs text-center">Prêt Société</div>
                  <div className="text-xs text-center text-gray-500">
                    13452789
                  </div>
                </td>
                <td className="text-xs text-center py-3">UK567UI8</td>
                <td className="text-xs text-center py-3">39 234€</td>
                <td className="text-xs text-center py-3">39 234€</td>
                <td className="text-xs text-center py-3">700€</td>
                <td className="text-xs text-center py-3">18 mois</td>
              </tr>
              <tr>
                <td className="text-xs text-gray-700 text-center py-3">
                  <div className="text-xs text-center">Prêt HotDoggs</div>
                  <div className="text-xs text-center text-gray-500">
                    67547800
                  </div>
                </td>
                <td className="text-xs text-center py-3">UK567UI8</td>
                <td className="text-xs text-center py-3">12 300€</td>
                <td className="text-xs text-center py-3">En attente</td>
                <td className="text-xs text-center py-3">En attente</td>
                <td className="text-xs text-center py-3">14 mois</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Deuxième tableau */}
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
              <tr>
                <td className="text-xs text-gray-700 text-center py-3">
                  <div className="text-xs text-center">Prêt Société</div>
                  <div className="text-xs text-center text-gray-500">3%</div>
                </td>
                <td className="text-xs text-center py-3">Lorem Ipsum</td>
                <td className="text-xs text-center py-3">3</td>
                <td className="text-xs text-center py-3">01/11/2019</td>
                <td className="text-xs text-center py-3">01/04/2022</td>
                <td className="text-xs text-center py-3">
                  <span className="text-green-500 font-medium">Validé</span>
                </td>
              </tr>
              <tr>
                <td className="text-xs text-gray-700 text-center py-3">
                  <div className="text-xs text-center">Prêt HotDoggs</div>
                  <div className="text-xs text-center text-gray-500">8%</div>
                </td>
                <td className="text-xs text-center py-3">Lorem Ipsum</td>
                <td className="text-xs text-center py-3">5</td>
                <td className="text-xs text-center py-3">04/09/2021</td>
                <td className="text-xs text-center py-3">En attente</td>
                <td className="text-xs text-center py-3">
                  <span className="text-gray-400 font-medium">En attente</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoansTable;
