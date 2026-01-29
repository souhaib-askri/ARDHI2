import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface StatusCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  trend?: string;
}

export const StatusCard: React.FC<StatusCardProps> = ({ label, value, icon: Icon, color, trend }) => {
  return (
    <Card className="rounded-3xl border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${color} shadow-lg shadow-current/10`}>
            <Icon className="h-6 w-6" />
          </div>
          {trend && (
            <Badge 
              variant={trend.startsWith('+') ? 'default' : 'destructive'}
              className={`text-xs font-bold rounded-full ${
                trend.startsWith('+') 
                  ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' 
                  : 'bg-red-50 text-red-600 hover:bg-red-100'
              }`}
            >
              {trend}
            </Badge>
          )}
        </div>
        <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">{value}</h3>
      </CardContent>
    </Card>
  );
};
