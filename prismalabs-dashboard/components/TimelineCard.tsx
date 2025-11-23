import React from 'react';
import { Card } from './ui/Card';
import { TimelinePoint } from '../types';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface TimelineCardProps {
  data: TimelinePoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-lg rounded-lg">
        <p className="text-sm font-bold text-slate-800">{label}</p>
        <p className="text-sm text-violet-600 font-medium">Score: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export const TimelineCard: React.FC<TimelineCardProps> = ({ data }) => {
  return (
    <Card
      title="Sua evolução ao longo do tempo"
      subtitle="Resultados acompanhados ao longo dos anos em um único lugar para você enxergar cedo o que pode afetar sua saúde no futuro."
    >
      <div className="h-48 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              hide={false}
              domain={[60, 100]} 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="#7c3aed" 
              strokeWidth={3} 
              activeDot={{ r: 6, strokeWidth: 0 }} 
              dot={{ r: 4, fill: '#7c3aed', strokeWidth: 2, stroke: '#fff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        {data.map((point, index) => (
             <div key={index} className="flex items-center space-x-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                <span className="text-xs font-medium text-slate-500">{point.date}</span>
                <span className="text-xs font-bold text-violet-700">{point.score}</span>
             </div>
        ))}
      </div>
    </Card>
  );
};