import type React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ChartDataPoint {
  name: string;
  greenLine: number;
  yellowLine: number;
  blueLine: number;
}

interface FinancialChartProps {
  data: ChartDataPoint[];
}

const FinancialChart: React.FC<FinancialChartProps> = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis
                domain={[0, 60]}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}K`}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="greenLine"
                stroke="#22c55e"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="yellowLine"
                stroke="#eab308"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="blueLine"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
            <span className="text-xs">Ligne verte</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
            <span className="text-xs">Ligne bleue</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
            <span className="text-xs">Ligne jaune</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialChart;