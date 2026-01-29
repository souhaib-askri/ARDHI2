import React from 'react';
import { SensorNode } from '../types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';

interface FarmMapProps {
  nodes: SensorNode[];
}

export const FarmMap: React.FC<FarmMapProps> = ({ nodes }) => {
  return (
    <div className="relative h-100 w-full bg-emerald-50/50 rounded-3xl overflow-hidden border border-slate-100 border-dashed group">
      {/* Mock satellite/topographic pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      {/* Mock Farm Terrain Shapes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <path d="M100,100 L500,50 L900,150 L850,550 L150,500 Z" fill="#d1fae5" stroke="#10b981" strokeWidth="2" strokeOpacity="0.3" />
        <path d="M200,150 L450,120 L480,450 L180,480 Z" fill="#a7f3d0" stroke="#059669" strokeWidth="2" strokeOpacity="0.4" />
      </svg>

      {/* Sensor Markers */}
      {nodes.map((node, idx) => (
        <div 
          key={node.id}
          className="absolute cursor-pointer transition-transform hover:scale-125 z-10"
          style={{ 
            left: `${30 + idx * 30}%`, 
            top: `${40 + idx * 10}%` 
          }}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-emerald-500/20 rounded-full animate-ping"></div>
            <div className="relative w-4 h-4 bg-emerald-600 border-2 border-white rounded-full shadow-lg"></div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded text-[10px] font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {node.id} • OK
            </div>
          </div>
        </div>
      ))}

      {/* Map Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <Button 
          size="icon" 
          variant="secondary"
          className="w-10 h-10 rounded-xl shadow-lg bg-white border border-slate-100 text-slate-600 hover:text-emerald-600"
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button 
          size="icon" 
          variant="secondary"
          className="w-10 h-10 rounded-xl shadow-lg bg-white border border-slate-100 text-slate-600 hover:text-emerald-600"
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-6 left-6">
        <Card className="bg-white/90 backdrop-blur border-white/50 rounded-2xl shadow-lg">
          <div className="px-4 py-2">
            <p className="text-xs font-bold text-slate-400 uppercase">Vue Terrain</p>
            <p className="text-sm font-bold text-emerald-800">Parcelle Nord (Béja)</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
