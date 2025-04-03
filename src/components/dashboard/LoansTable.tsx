import { FC, memo } from "react";

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

const tableHeaderClasses =
  "text-blue-900 text-center font-medium text-xs pb-6 w-1/6";
const tableCellClasses = "text-xs text-gray-700 text-center py-3";

const LoansTable: FC<LoansTableProps> = ({ data }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Détails des prêts</h2>

      {/* Premier tableau - informations sur le prêt */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className={tableHeaderClasses}>
                  Numéro de
                  <br />
                  contrat
                </th>
                <th className={tableHeaderClasses}>
                  Identifiant
                  <br />
                  emprunteur
                </th>
                <th className={tableHeaderClasses}>
                  Montant
                  <br />
                  demandé
                </th>
                <th className={tableHeaderClasses}>Montant du prêt</th>
                <th className={tableHeaderClasses}>Mensualité</th>
                <th className={tableHeaderClasses}>
                  Durée
                  <br />
                  souhaitée
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((loan) => (
                <tr key={loan.accountNumber}>
                  <td className={tableCellClasses}>
                    <div>{loan.type}</div>
                    <div className="text-gray-500">{loan.accountNumber}</div>
                  </td>
                  <td className={tableCellClasses}>
                    {loan.borrowerIdentifier}
                  </td>
                  <td className={tableCellClasses}>{loan.requestedAmount}</td>
                  <td className={tableCellClasses}>{loan.loanAmount}</td>
                  <td className={tableCellClasses}>{loan.monthlyPayment}</td>
                  <td className={tableCellClasses}>{loan.durationMonths}</td>
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
                <th className={tableHeaderClasses}>
                  Taux
                  <br />
                  d'intérêt
                </th>
                <th className={tableHeaderClasses}>Commission</th>
                <th className={tableHeaderClasses}>
                  Taux Effect
                  <br />
                  Global
                </th>
                <th className={tableHeaderClasses}>
                  Date de la
                  <br />
                  demande
                </th>
                <th className={tableHeaderClasses}>
                  Date dernière
                  <br />
                  échéance
                </th>
                <th className={tableHeaderClasses}>
                  Statut de la
                  <br />
                  demande
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((loan) => (
                <tr key={loan.accountNumber}>
                  <td className={tableCellClasses}>
                    <div>{loan.interestRate}</div>
                  </td>
                  <td className={tableCellClasses}>{loan.commission}</td>
                  <td className={tableCellClasses}>
                    {loan.globalEffectiveRate}
                  </td>
                  <td className={tableCellClasses}>{loan.requestDate}</td>
                  <td className={tableCellClasses}>{loan.lastPaymentDate}</td>
                  <td className={tableCellClasses}>
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

export default memo(LoansTable);
