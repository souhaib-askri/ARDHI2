
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

const data = [
  { name: 'Lun', level: 38 },
  { name: 'Mar', level: 45 },
  { name: 'Mer', level: 42 },
  { name: 'Jeu', level: 48 },
  { name: 'Ven', level: 41 },
  { name: 'Sam', level: 44 },
  { name: 'Dim', level: 42 },
];

export const HumidityChart: React.FC = () => {
  return (
    <div className="h-70 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            hide 
            domain={[0, 100]}
          />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '16px', 
              border: 'none', 
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
              padding: '12px'
            }}
            labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
          />
          <Area 
            type="monotone" 
            dataKey="level" 
            stroke="#10b981" 
            strokeWidth={3} 
            fillOpacity={1} 
            fill="url(#colorLevel)" 
            name="Humidité (%)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
