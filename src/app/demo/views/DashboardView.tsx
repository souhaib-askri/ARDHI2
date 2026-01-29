import React from 'react';
import { StatusCard } from '../components/StatusCard';
import { FarmMap } from '../components/FarmMap';
import { HumidityChart } from '../components/HumidityChart';
import { AIRecommendations } from '../components/AIRecommendations';
import { RealTimeData, SensorNode, AIRecommendation } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplet, Thermometer, FlaskConical, Sun } from 'lucide-react';

interface DashboardViewProps {
  data: RealTimeData;
  recommendations: AIRecommendation[];
  nodes: SensorNode[];
}

export const DashboardView: React.FC<DashboardViewProps> = ({ data, recommendations, nodes }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatusCard 
          label="Humidité" 
          value={data.humidity} 
          icon={Droplet} 
          color="bg-blue-500" 
          trend="-2%" 
        />
        <StatusCard 
          label="Température" 
          value={data.temperature} 
          icon={Thermometer} 
          color="bg-orange-500" 
          trend="+1.2°C" 
        />
        <StatusCard 
          label="Azote (N)" 
          value={data.nitrogen} 
          icon={FlaskConical} 
          color="bg-emerald-500" 
        />
        <StatusCard 
          label="Luminosité" 
          value={data.luminosity} 
          icon={Sun} 
          color="bg-yellow-500" 
          trend="+5%" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Center: Map & Chart */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-2 rounded-[32px] shadow-sm border-slate-100 overflow-hidden">
            <FarmMap nodes={nodes} />
          </Card>

          <Card className="rounded-[32px] shadow-sm border-slate-100">
            <CardHeader className="p-8 pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-slate-800">Niveau d'humidité hebdomadaire</CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold h-7 rounded-full">
                    7 Jours
                  </Button>
                  <Button size="sm" variant="ghost" className="text-slate-400 hover:text-slate-600 text-xs font-bold h-7 rounded-full">
                    30 Jours
                  </Button>
                </div>
              </div>
              <p className="text-sm text-slate-400">Suivi précis par capteurs au sol</p>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <HumidityChart />
            </CardContent>
          </Card>
        </div>

        {/* Right: AI Panel */}
        <div className="lg:col-span-1">
          <Card className="rounded-[32px] shadow-sm border-slate-100 h-full sticky top-24">
            <CardContent className="p-6 md:p-8">
              <AIRecommendations recommendations={recommendations} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
