'use client';
import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { DashboardView } from "./views/DashboardView";
import { GroundsView } from "./views/GroundsView";
import { AIAnalysisView } from "./views/AIAnalysisView";
import { ViewType, RealTimeData, SensorNode, AIRecommendation } from "./types";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu, Bell, MapPin } from "lucide-react";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Mock initial data based on prompt
  const initialData: RealTimeData = {
    humidity: "42%",
    temperature: "24°C",
    nitrogen: "140 mg/kg",
    luminosity: "12,400 Lux",
    soil_ph: "6.5",
    water_consumption: "120L/jour",
  };

  const initialRecommendations: AIRecommendation[] = [
    {
      id: 1,
      type: "Irrigation",
      message:
        "Le sol est sec. Activation de l'irrigation conseillée pour 15 min.",
      priority: "Haute",
    },
    {
      id: 2,
      type: "Santé",
      message:
        "Risque de mildiou détecté via satellite. Surveillez la parcelle Nord.",
      priority: "Moyenne",
    },
  ];

  const initialNodes: SensorNode[] = [
    { id: "SN-01", lat: 36.72, lng: 9.18, status: "Online" },
    { id: "SN-02", lat: 36.73, lng: 9.19, status: "Online" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar
        currentView={currentView}
        setView={setCurrentView}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}
      >
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(true)}
                className="text-emerald-600 hover:bg-slate-100"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Bonjour, Mohamed
              </h1>
              <p className="text-sm text-slate-500 flex items-center gap-1">
                <MapPin className="h-4 w-4 text-emerald-500" />
                Béja, Tunisie • 14 Mars 2025
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-slate-500 hover:bg-slate-100 rounded-full"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </Button>
            <Avatar className="h-10 w-10 border border-emerald-200">
              <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold">
                M
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {currentView === ViewType.DASHBOARD && (
            <DashboardView
              data={initialData}
              recommendations={initialRecommendations}
              nodes={initialNodes}
            />
          )}
          {currentView === ViewType.GROUNDS && (
            <GroundsView nodes={initialNodes} />
          )}
          {currentView === ViewType.AI_ANALYSIS && (
            <AIAnalysisView data={initialData} />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
