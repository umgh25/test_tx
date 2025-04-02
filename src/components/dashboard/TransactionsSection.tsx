import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

const TransactionsSection: React.FC = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>

      <Tabs defaultValue="actifs" className="w-full">
        <TabsList className="bg-white border-b space-x-0 rounded-none p-0">
          <TabsTrigger
            value="actifs"
            disabled
            className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-500 rounded-none px-10 py-3"
          >
            Actifs
          </TabsTrigger>
          <TabsTrigger
            value="en-attente"
            disabled
            className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-500 rounded-none px-10 py-3"
          >
            En attente (1)
          </TabsTrigger>
          <TabsTrigger
            value="clos"
            disabled
            className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-500 rounded-none px-10 py-3"
          >
            Clos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="actifs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* État */}
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

            {/* Prêt Société */}
            <Card className="p-5 h-64 flex flex-col">
              <h3 className="font-medium text-gray-700 mb-3 self-start">
                Prêt Société
              </h3>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold mb-1">39 234€</div>
                <p className="text-sm text-gray-500 mb-4">
                  Montant du prêt en cours
                </p>

                <div className="flex items-center justify-center">
                  <CheckCircle size={20} className="text-green-500 mr-2" />
                  <span className="text-sm">Prêt validé</span>
                </div>
              </div>
            </Card>

            {/* En attente */}
            <Card className="p-5 h-64 flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-gray-700">En attente</h3>
                <span className="text-sm text-gray-500">Prêt HotDogs</span>
              </div>

              <div className="flex mt-2">
                {/* Left side - Circle progress */}
                <div className="flex-shrink-0 w-1/3">
                  <div className="relative w-24 h-24">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#f1f1f1"
                        strokeWidth="12"
                      />
                      <path
                        d="M50 10 A 40 40 0 0 1 85 37"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                      <path
                        d="M85 37 A 40 40 0 0 1 87 50"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                      <path
                        d="M87 50 A 40 40 0 0 1 50 90"
                        fill="none"
                        stroke="#0ea5e9"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray="126"
                        strokeDashoffset="120"
                      />
                    </svg>
                  </div>
                </div>

                {/* Right side - Checkmarks */}
                <div className="ml-3 w-2/3">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 13L10 16L17 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-sm">Accord ouverture</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-4 h-4 text-orange-500 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 13L10 16L17 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-sm">Accord demande</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 13L10 16L17 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-sm">Évaluation des risques</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto text-sm">
                <p className="text-gray-700 mb-2">
                  Pour déclencher la prochaine étape de validation, veuillez
                  nous joindre :
                </p>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-400 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 7L11.8845 5.76393C11.5634 5.41942 11.1261 5.23178 10.6715 5.25157L4 5.5M13 7L19 13L12.5 19.5L4 12.5V5.5M13 7L19 1M8 9.5C8 10.3284 7.32843 11 6.5 11C5.67157 11 5 10.3284 5 9.5C5 8.67157 5.67157 8 6.5 8C7.32843 8 8 8.67157 8 9.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-500">
                    Dossier super important.pdf
                  </span>
                </div>
              </div>
            </Card>

            {/* Clôturé */}
            <Card className="p-5 h-64 flex flex-col">
              <h3 className="font-medium text-gray-700 mb-3 self-start">
                Clôturé
              </h3>

              <div className="flex-1 flex justify-center items-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img
                    src="/winner.png"
                    alt="Trophy"
                    className="w-full h-full object-contain opacity-20"
                  />
                </div>
              </div>

              <div className="mt-auto text-left">
                <h4 className="text-sm font-medium">Prêt Société</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Estimation de clôture du dossier au : 13/06/2022
                </p>
              </div>
            </Card>
          </div>

          {/* Tables */}
          <div className="mt-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-xs text-blue-900">
                  <th className="text-left p-3 bg-gray-50 border-b">
                    Numéro de contrat
                  </th>
                  <th className="text-left p-3 bg-gray-50 border-b">
                    Identifiant emprunteur
                  </th>
                  <th className="text-left p-3 bg-gray-50 border-b">
                    Montant demandé
                  </th>
                  <th className="text-left p-3 bg-gray-50 border-b">
                    Montant du prêt
                  </th>
                  <th className="text-left p-3 bg-gray-50 border-b">
                    Mensualité
                  </th>
                  <th className="text-left p-3 bg-gray-50 border-b">
                    Durée souhaitée
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td className="p-3 border-b">13452789</td>
                  <td className="p-3 border-b">UK567UB</td>
                  <td className="p-3 border-b">39 234€</td>
                  <td className="p-3 border-b">39 234€</td>
                  <td className="p-3 border-b">700€</td>
                  <td className="p-3 border-b">18 mois</td>
                </tr>
                <tr className="text-sm">
                  <td className="p-3 border-b">67547800</td>
                  <td className="p-3 border-b">UK567UB</td>
                  <td className="p-3 border-b">12 300€</td>
                  <td className="p-3 border-b">En attente</td>
                  <td className="p-3 border-b">En attente</td>
                  <td className="p-3 border-b">14 mois</td>
                </tr>
              </tbody>
            </table>

            <table className="w-full border-collapse mt-8">
              <thead>
                <tr className="text-xs text-blue-900">
                  <th className="text-center p-3 bg-gray-50 border-b">
                    Taux d'intérêt
                  </th>
                  <th className="text-center p-3 bg-gray-50 border-b">
                    Commission
                  </th>
                  <th className="text-center p-3 bg-gray-50 border-b">
                    Taux Effet Global
                  </th>
                  <th className="text-center p-3 bg-gray-50 border-b">
                    Date de la demande
                  </th>
                  <th className="text-center p-3 bg-gray-50 border-b">
                    Date dernière échéance
                  </th>
                  <th className="text-center p-3 bg-gray-50 border-b">
                    Statut de la demande
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td className="p-3 border-b text-center">3%</td>
                  <td className="p-3 border-b text-center">Lorem Ipsum</td>
                  <td className="p-3 border-b text-center">3</td>
                  <td className="p-3 border-b text-center">01/11/2019</td>
                  <td className="p-3 border-b text-center">01/04/2022</td>
                  <td className="p-3 border-b text-center">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200 font-normal">
                      Validé
                    </Badge>
                  </td>
                </tr>
                <tr className="text-sm">
                  <td className="p-3 border-b text-center">8%</td>
                  <td className="p-3 border-b text-center">Lorem Ipsum</td>
                  <td className="p-3 border-b text-center">5</td>
                  <td className="p-3 border-b text-center">04/09/2021</td>
                  <td className="p-3 border-b text-center">En attente</td>
                  <td className="p-3 border-b text-center">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 font-normal">
                      En attente
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="en-attente">
          <div className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-500">
                  Vous avez 1 transaction en attente.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="clos">
          <div className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-500">
                  Vous n'avez pas de transactions closes.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TransactionsSection;
