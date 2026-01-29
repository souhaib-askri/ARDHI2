import React from 'react';
import { SensorNode } from '../types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Maximize2, Cpu } from 'lucide-react';

interface GroundsViewProps {
  nodes: SensorNode[];
}

export const GroundsView: React.FC<GroundsViewProps> = ({ nodes }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Gestion des Terrains</h2>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-lg shadow-emerald-600/20">
          <Plus className="mr-2 h-4 w-4" /> Nouveau Terrain
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden group">
          <div className="h-48 bg-[url('https://picsum.photos/seed/farm1/800/600')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800">Parcelle Nord (Béja)</h3>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 text-[10px] font-bold uppercase">
                Actif
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div className="flex items-center gap-2 text-slate-500">
                <Maximize2 className="h-4 w-4 text-emerald-500" /> 12.5 Hectares
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Cpu className="h-4 w-4 text-emerald-500" /> 4 Capteurs
              </div>
            </div>
            <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-sm font-bold">
              Voir Détails
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden group">
          <div className="h-48 bg-[url('https://picsum.photos/seed/farm2/800/600')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800">Verger Ouest</h3>
              <Badge variant="secondary" className="bg-slate-100 text-slate-500 hover:bg-slate-200 text-[10px] font-bold uppercase">
                Repos
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div className="flex items-center gap-2 text-slate-500">
                <Maximize2 className="h-4 w-4 text-emerald-500" /> 5.2 Hectares
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Cpu className="h-4 w-4 text-emerald-500" /> 2 Capteurs
              </div>
            </div>
            <Button variant="outline" disabled className="w-full text-sm font-bold cursor-not-allowed">
              Inactif
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
