import type React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface RiskData {
  tenor: string;
  marketPlaceRate: string;
  marketRiskFreeRate: string;
  marketRiskFreeSpread: string;
  change: string;
  variation: string;
}

interface MarketRiskTableProps {
  data: RiskData[];
}

const MarketRiskTable: React.FC<MarketRiskTableProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader className="p-3">
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 rounded bg-blue-100 text-blue-700 text-xs">Euribor1w</button>
          <button className="px-3 py-1 rounded text-gray-500 text-xs">Euribor2w</button>
          <button className="px-3 py-1 rounded text-gray-500 text-xs">Euribor3w</button>
          <button className="px-3 py-1 rounded text-gray-500 text-xs">Average Sector Spread</button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="font-medium text-xs py-2">Tenor</TableHead>
                <TableHead className="font-medium text-xs py-2">Market Place</TableHead>
                <TableHead className="font-medium text-xs py-2">Market Risk Free Date</TableHead>
                <TableHead className="font-medium text-xs py-2">Market Risk Free Premium</TableHead>
                <TableHead className="font-medium text-xs py-2">Change %</TableHead>
                <TableHead className="font-medium text-xs py-2">Variation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.tenor}>
                  <TableCell className="text-xs py-2">{row.tenor}</TableCell>
                  <TableCell className="text-xs py-2">{row.marketPlaceRate}</TableCell>
                  <TableCell className="text-xs py-2">{row.marketRiskFreeRate}</TableCell>
                  <TableCell className="text-xs py-2">{row.marketRiskFreeSpread}</TableCell>
                  <TableCell className="text-xs py-2">{row.change}</TableCell>
                  <TableCell className="text-xs py-2">{row.variation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketRiskTable;