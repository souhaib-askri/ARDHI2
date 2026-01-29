"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Map,
  Filter,
  Download,
  Search,
  MoreVertical,
  Eye,
  Edit,
  Droplets,
  Thermometer,
  Sprout,
  Calendar,
  ArrowUpDown,
} from "lucide-react";

// Parcel Data
const parcels = [
  {
    id: "P-001",
    name: "Olivier Nord",
    surface: 45.2,
    culture: "Olivier",
    status: "active",
    irrigation: "Goutte-à-goutte",
    lastIrrigation: "2024-01-28",
    humidity: 68,
    health: 94,
    nextAction: "Traitement préventif",
    nextActionDate: "2024-02-05",
  },
  {
    id: "P-002",
    name: "Blé Zone A",
    surface: 120.5,
    culture: "Blé dur",
    status: "harvest",
    irrigation: "Aspersion",
    lastIrrigation: "2024-01-25",
    humidity: 42,
    health: 88,
    nextAction: "Récolte",
    nextActionDate: "2024-02-01",
  },
  {
    id: "P-003",
    name: "Tomates Serre 1",
    surface: 8.0,
    culture: "Tomates",
    status: "warning",
    irrigation: "Goutte-à-goutte",
    lastIrrigation: "2024-01-29",
    humidity: 55,
    health: 72,
    nextAction: "Augmenter irrigation",
    nextActionDate: "Immédiat",
  },
  {
    id: "P-004",
    name: "Agrumes Est",
    surface: 35.8,
    culture: "Agrumes",
    status: "active",
    irrigation: "Micro-aspersion",
    lastIrrigation: "2024-01-27",
    humidity: 71,
    health: 96,
    nextAction: "Fertilisation",
    nextActionDate: "2024-02-10",
  },
  {
    id: "P-005",
    name: "Olivier Sud",
    surface: 52.3,
    culture: "Olivier",
    status: "active",
    irrigation: "Goutte-à-goutte",
    lastIrrigation: "2024-01-28",
    humidity: 65,
    health: 91,
    nextAction: "Taille",
    nextActionDate: "2024-03-01",
  },
  {
    id: "P-006",
    name: "Blé Zone B",
    surface: 98.7,
    culture: "Blé dur",
    status: "active",
    irrigation: "Aspersion",
    lastIrrigation: "2024-01-26",
    humidity: 58,
    health: 85,
    nextAction: "Surveillance",
    nextActionDate: "Continue",
  },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  active: { label: "Actif", color: "bg-green-100 text-green-700 border-green-200" },
  harvest: { label: "Récolte", color: "bg-amber-100 text-amber-700 border-amber-200" },
  warning: { label: "Attention", color: "bg-red-100 text-red-700 border-red-200" },
  dormant: { label: "Dormant", color: "bg-gray-100 text-gray-700 border-gray-200" },
};

export function GestionParcels() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-blue-700 border-blue-300 bg-blue-50"
          >
            <Map className="w-4 h-4 mr-2" />
            Gestion des Parcelles
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Suivi Détaillé de Vos{" "}
            <span className="text-blue-600">Parcelles</span>
          </h2>
          <p className="text-lg text-gray-600">
            Visualisez, filtrez et gérez toutes vos parcelles depuis une
            interface centralisée avec données en temps réel.
          </p>
        </div>

        {/* Table Card */}
        <Card className="border-gray-200 shadow-lg">
          <CardHeader className="border-b border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Sprout className="w-5 h-5 text-green-600" />
                Inventaire des Parcelles
                <Badge variant="secondary" className="ml-2">
                  {parcels.length} parcelles
                </Badge>
              </CardTitle>

              {/* Table Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 w-48"
                  />
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filtrer
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Exporter
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider px-6 py-4">
                      <button className="flex items-center gap-1 hover:text-gray-900">
                        Parcelle
                        <ArrowUpDown className="w-3 h-3" />
                      </button>
                    </th>
                    <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider px-6 py-4">
                      <button className="flex items-center gap-1 hover:text-gray-900">
                        Surface
                        <ArrowUpDown className="w-3 h-3" />
                      </button>
                    </th>
                    <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider px-6 py-4">
                      Culture
                    </th>
                    <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider px-6 py-4">
                      Statut
                    </th>
                    <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Droplets className="w-3 h-3" />
                        Humidité
                      </div>
                    </th>
                    <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Thermometer className="w-3 h-3" />
                        Santé
                      </div>
                    </th>
                    <th className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider px-6 py-4">
                      Prochaine Action
                    </th>
                    <th className="text-right text-xs font-semibold text-gray-600 uppercase tracking-wider px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {parcels.map((parcel) => (
                    <tr
                      key={parcel.id}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      {/* Parcel Name */}
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">
                            {parcel.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {parcel.id} • {parcel.irrigation}
                          </div>
                        </div>
                      </td>

                      {/* Surface */}
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">
                          {parcel.surface}
                        </span>
                        <span className="text-gray-500 text-sm"> ha</span>
                      </td>

                      {/* Culture */}
                      <td className="px-6 py-4">
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200"
                        >
                          {parcel.culture}
                        </Badge>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        <Badge
                          variant="outline"
                          className={statusConfig[parcel.status].color}
                        >
                          {statusConfig[parcel.status].label}
                        </Badge>
                      </td>

                      {/* Humidity */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                parcel.humidity >= 60
                                  ? "bg-blue-500"
                                  : parcel.humidity >= 40
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                              }`}
                              style={{ width: `${parcel.humidity}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600">
                            {parcel.humidity}%
                          </span>
                        </div>
                      </td>

                      {/* Health */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                parcel.health >= 90
                                  ? "bg-green-500"
                                  : parcel.health >= 75
                                  ? "bg-yellow-500"
                                  : "bg-orange-500"
                              }`}
                              style={{ width: `${parcel.health}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600">
                            {parcel.health}%
                          </span>
                        </div>
                      </td>

                      {/* Next Action */}
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm text-gray-900">
                            {parcel.nextAction}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                            <Calendar className="w-3 h-3" />
                            {parcel.nextActionDate}
                          </div>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <Eye className="w-4 h-4 text-gray-500" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <Edit className="w-4 h-4 text-gray-500" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <MoreVertical className="w-4 h-4 text-gray-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/50">
              <p className="text-sm text-gray-600">
                Affichage de <span className="font-medium">1-6</span> sur{" "}
                <span className="font-medium">23</span> parcelles
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Précédent
                </Button>
                <Button variant="outline" size="sm">
                  Suivant
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="border-gray-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Map className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Cartographie GPS
              </h4>
              <p className="text-sm text-gray-600">
                Délimitez vos parcelles avec précision grâce à l'intégration GPS
                et imagerie satellite.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Irrigation Intelligente
              </h4>
              <p className="text-sm text-gray-600">
                Programmez l'irrigation par parcelle selon les besoins
                spécifiques de chaque culture.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Planification Avancée
              </h4>
              <p className="text-sm text-gray-600">
                Planifiez les interventions et recevez des rappels automatiques
                pour chaque parcelle.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
