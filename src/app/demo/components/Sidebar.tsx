import React from 'react';
import { ViewType } from '../types';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LayoutDashboard, Sprout, Cpu, X, LogOut } from 'lucide-react';

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: ViewType.DASHBOARD, label: 'Tableau de bord', icon: LayoutDashboard },
    { id: ViewType.GROUNDS, label: 'Mes Terrains', icon: Sprout },
    { id: ViewType.AI_ANALYSIS, label: 'Analyses IA', icon: Cpu },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`fixed top-0 left-0 h-full bg-emerald-900 text-white w-64 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className=" p-4  bg-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-400/20">
                <img src="/logo.png" alt="Ardhi Logo"  />
              </div>

            </div>
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="md:hidden text-emerald-300 hover:text-white hover:bg-emerald-800"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "default" : "ghost"}
                  onClick={() => setView(item.id)}
                  className={`w-full justify-start gap-4 h-12 rounded-xl transition-all duration-200 ${
                    currentView === item.id 
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600' 
                      : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Button>
              );
            })}
          </nav>

          <div className="mt-auto pt-6">
            <Separator className="mb-6 bg-emerald-800" />
            <div className="p-4 bg-emerald-800/50 rounded-2xl mb-6">
              <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">Statut Système</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-sm font-medium">Capteurs : 100% Online</span>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-4 h-12 rounded-xl text-emerald-100 hover:bg-emerald-800 hover:text-white"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Déconnexion</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};
