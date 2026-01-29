import React from 'react';
import { AIRecommendation } from '../types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Droplet, Shield } from 'lucide-react';

interface AIRecommendationsProps {
  recommendations: AIRecommendation[];
}

export const AIRecommendations: React.FC<AIRecommendationsProps> = ({ recommendations }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-emerald-500" />
          Alertes Intelligentes
        </h3>
        <Button variant="link" className="text-xs font-bold text-emerald-600 h-auto p-0">
          Tout voir
        </Button>
      </div>

      {recommendations.map((rec) => (
        <Card key={rec.id} className="border-slate-100 rounded-2xl hover:border-emerald-200 transition-colors shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${
                rec.priority === 'Haute' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'
              }`}>
                {rec.type === 'Irrigation' ? (
                  <Droplet className="h-4 w-4" />
                ) : (
                  <Shield className="h-4 w-4" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black uppercase text-slate-400">{rec.type}</span>
                  <Badge 
                    variant={rec.priority === 'Haute' ? 'destructive' : 'default'}
                    className={`text-[10px] font-bold rounded-full ${
                      rec.priority === 'Haute' 
                        ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                        : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                    }`}
                  >
                    {rec.priority}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 leading-snug">{rec.message}</p>
                <div className="mt-3 flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-xs font-bold h-8"
                  >
                    Appliquer
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="px-3 text-slate-400 border-slate-200 hover:bg-slate-50 text-xs font-bold h-8"
                  >
                    Ignorer
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="mt-6 bg-emerald-50 border-emerald-100 rounded-2xl">
        <CardContent className="p-4">
          <p className="text-xs font-bold text-emerald-800 mb-2 italic">Aperçu IA</p>
          <p className="text-sm text-emerald-700/80">
            Les conditions météo prévoient des précipitations demain à 14h. Économisez 20L d'eau en reportant l'irrigation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
