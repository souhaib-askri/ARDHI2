import React, { useState, useEffect } from 'react';
import { getAIAnalysis } from '../services/geminiService';
import { RealTimeData } from '../types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { RefreshCw, Cpu, Loader2, Send } from 'lucide-react';

interface AIAnalysisViewProps {
  data: RealTimeData;
}

export const AIAnalysisView: React.FC<AIAnalysisViewProps> = ({ data }) => {
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const fetchInitialAnalysis = async () => {
    setLoading(true);
    const result = await getAIAnalysis(data);
    setAnalysis(result || '');
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialAnalysis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCustomQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const result = await getAIAnalysis(data, query);
    setAnalysis(result || '');
    setLoading(false);
    setQuery('');
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Analyses Avancées par IA</h2>
          <p className="text-slate-500">Rapports générés en temps réel par Gemini Engine</p>
        </div>
        <Button 
          variant="outline"
          onClick={fetchInitialAnalysis}
          className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-sm font-bold"
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Actualiser l'Analyse
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="rounded-[32px] border-slate-100 shadow-sm min-h-125">
            <CardHeader className="p-8 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Diagnostic de la Parcelle</h3>
                  <span className="text-xs text-emerald-500 font-bold uppercase tracking-widest">IA Active</span>
                </div>
              </div>
            </CardHeader>
            <Separator className="mx-8" />
            <CardContent className="p-8 pt-6">
              <div className="prose prose-emerald max-w-none">
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-75 space-y-4">
                    <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
                    <p className="text-slate-400 font-medium">L'intelligence artificielle analyse vos capteurs...</p>
                  </div>
                ) : (
                  <div className="text-slate-700 leading-relaxed whitespace-pre-line text-lg">
                    {analysis}
                  </div>
                )}
              </div>

              <form onSubmit={handleCustomQuery} className="mt-8 pt-6">
                <Separator className="mb-6" />
                <div className="relative">
                  <Input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Posez une question spécifique sur vos cultures..."
                    className="w-full h-14 pl-6 pr-24 bg-slate-50 rounded-2xl border-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                  <Button 
                    type="submit"
                    disabled={loading}
                    className="absolute right-2 top-2 bottom-2 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-600/20"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-emerald-900 text-white rounded-[32px] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800 rounded-full -mr-16 -mt-16 blur-3xl opacity-50"></div>
            <CardContent className="p-8 relative z-10">
              <h3 className="text-xl font-bold mb-4">Résumé pour Investisseur</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-emerald-300 text-xs font-bold uppercase mb-1">Efficience Hydrique</p>
                  <div className="h-2 w-full bg-emerald-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[85%]"></div>
                  </div>
                  <p className="text-right text-xs mt-1 font-bold">85%</p>
                </div>
                <div>
                  <p className="text-emerald-300 text-xs font-bold uppercase mb-1">Santé des Sols</p>
                  <div className="h-2 w-full bg-emerald-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[92%]"></div>
                  </div>
                  <p className="text-right text-xs mt-1 font-bold">92%</p>
                </div>
                <Separator className="bg-emerald-800" />
                <div>
                  <p className="text-2xl font-black">+14.2%</p>
                  <p className="text-xs text-emerald-300">Estimation de hausse de rendement vs 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="rounded-[32px] border-slate-100 shadow-sm">
            <CardContent className="p-6">
              <h4 className="font-bold text-slate-800 mb-4">Questions Fréquentes</h4>
              <div className="space-y-2">
                <Button 
                  variant="ghost"
                  onClick={() => setQuery("Quelle est la meilleure période pour semer le blé cette année ?")}
                  className="w-full justify-start h-auto py-3 px-4 rounded-xl hover:bg-emerald-50 text-sm text-slate-600 font-normal border border-transparent hover:border-emerald-100"
                >
                  Période de semis idéale ?
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => setQuery("Comment optimiser le pH de mon sol ?")}
                  className="w-full justify-start h-auto py-3 px-4 rounded-xl hover:bg-emerald-50 text-sm text-slate-600 font-normal border border-transparent hover:border-emerald-100"
                >
                  Optimisation du pH ?
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
