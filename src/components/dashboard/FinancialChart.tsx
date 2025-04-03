import { FC, memo, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartDataPoint {
  name: string;
  greenLine: number;
  yellowLine: number;
  blueLine: number;
}

interface FinancialChartProps {
  data: ChartDataPoint[];
}

const FinancialChart: FC<FinancialChartProps> = ({ data }) => {
  const tickFormatter = useMemo(() => (value: number) => `${value}K`, []);

  const legendItems = [
    { color: "bg-green-500", label: "Ligne verte" },
    { color: "bg-blue-500", label: "Ligne bleue" },
    { color: "bg-yellow-500", label: "Ligne jaune" },
  ];

  return (
    <Card>
      <CardContent>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f0f0f0"
                vertical={false}
              />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis
                domain={[0, 60]}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
                tickLine={false}
                axisLine={false}
                tickFormatter={tickFormatter}
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
          {legendItems.map(({ color, label }) => (
            <div key={label} className="flex items-center">
              <div
                className={`w-3 h-3 rounded-full ${color} mr-2`}
                title={label}
              />
              <span className="text-xs">{label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(FinancialChart);
