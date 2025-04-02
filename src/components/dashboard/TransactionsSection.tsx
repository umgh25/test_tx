import type React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle } from 'lucide-react';

const TransactionsSection: React.FC = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>

      <Tabs defaultValue="actifs" className="w-full">
        <TabsList className="bg-white border-b space-x-0 rounded-none p-0">
          <TabsTrigger
            value="actifs"
            className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-500 rounded-none px-10 py-3"
          >
            Actifs
          </TabsTrigger>
          <TabsTrigger
            value="en-attente"
            className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-500 rounded-none px-10 py-3"
          >
            En attente (1)
          </TabsTrigger>
          <TabsTrigger
            value="clos"
            className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-500 rounded-none px-10 py-3"
          >
            Clos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="actifs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* État */}
            <Card className="p-5">
              <h3 className="font-medium text-gray-700 mb-3">État</h3>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-sm">Prêt Société</p>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 font-normal">Validé</Badge>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full rounded-full" style={{ width: '100%' }} />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="text-sm">Prêt HoldDogs</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 font-normal">En attente</Badge>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              <div className="mt-8">
                <button className="text-blue-600 text-sm hover:underline">
                  Créer un nouveau dossier
                </button>
              </div>
            </Card>

            {/* Prêt Société */}
            <Card className="p-5 flex flex-col items-center">
              <h3 className="font-medium text-gray-700 mb-3 self-start">Prêt Société</h3>
              <div className="text-4xl font-bold mt-2 mb-1">39 234€</div>
              <p className="text-sm text-gray-500 mb-6">Montant du prêt en cours</p>

              <div className="flex items-center justify-center mb-1">
                <CheckCircle size={20} className="text-green-500 mr-2" />
                <span className="text-sm">Prêt validé</span>
              </div>
            </Card>

            {/* En attente */}
            <Card className="p-5">
              <h3 className="font-medium text-gray-700 mb-3">En attente</h3>
              <h4 className="text-sm font-medium mb-1">Prêt HotDogs</h4>

              <div className="flex justify-center mt-4">
                <div className="relative w-36 h-36">
                  {/* Circle progress */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#f0f0f0"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="175"
                      transform="rotate(-90 50 50)"
                    />
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="225"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                  <span className="text-xs">Accord ouverture</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mr-2" />
                  <span className="text-xs">Accord demande</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
                  <span className="text-xs">Évaluation des risques</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded text-xs">
                <p>Pour déclencher la prochaine étape de validation, veuillez nous passer :</p>
                <div className="flex items-center mt-2">
                  <input type="checkbox" className="mr-2" />
                  <span>Dossier super important.pdf</span>
                </div>
              </div>
            </Card>

            {/* Clôturé */}
            <Card className="p-5 flex flex-col items-center">
              <h3 className="font-medium text-gray-700 mb-3 self-start">Clôturé</h3>

              <div className="flex-1 flex justify-center items-center">
                <div className="w-28 h-28 flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2529/2529532.png" alt="Trophy" className="w-full h-full object-contain opacity-20" />
                </div>
              </div>

              <div className="mt-2 text-center">
                <h4 className="text-sm font-medium">Prêt Société</h4>
                <p className="text-xs text-gray-500 mt-1">Estimation de clôture du dossier au : 13/05/2022</p>
              </div>
            </Card>
          </div>

          {/* Tables */}
          <div className="mt-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-xs text-blue-900">
                  <th className="text-left p-3 bg-gray-50 border-b">Numéro de contrat</th>
                  <th className="text-left p-3 bg-gray-50 border-b">Identifiant emprunteur</th>
                  <th className="text-left p-3 bg-gray-50 border-b">Montant demandé</th>
                  <th className="text-left p-3 bg-gray-50 border-b">Montant du prêt</th>
                  <th className="text-left p-3 bg-gray-50 border-b">Mensualité</th>
                  <th className="text-left p-3 bg-gray-50 border-b">Durée souhaitée</th>
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
                  <th className="text-center p-3 bg-gray-50 border-b">Taux d'intérêt</th>
                  <th className="text-center p-3 bg-gray-50 border-b">Commission</th>
                  <th className="text-center p-3 bg-gray-50 border-b">Taux Effet Global</th>
                  <th className="text-center p-3 bg-gray-50 border-b">Date de la demande</th>
                  <th className="text-center p-3 bg-gray-50 border-b">Date dernière échéance</th>
                  <th className="text-center p-3 bg-gray-50 border-b">Statut de la demande</th>
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
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200 font-normal">Validé</Badge>
                  </td>
                </tr>
                <tr className="text-sm">
                  <td className="p-3 border-b text-center">8%</td>
                  <td className="p-3 border-b text-center">Lorem Ipsum</td>
                  <td className="p-3 border-b text-center">5</td>
                  <td className="p-3 border-b text-center">04/09/2021</td>
                  <td className="p-3 border-b text-center">En attente</td>
                  <td className="p-3 border-b text-center">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 font-normal">En attente</Badge>
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
                <p className="text-gray-500">Vous avez 1 transaction en attente.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="clos">
          <div className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-500">Vous n'avez pas de transactions closes.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TransactionsSection;
