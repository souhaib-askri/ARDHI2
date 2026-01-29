
export interface SensorNode {
  id: string;
  lat: number;
  lng: number;
  status: 'Online' | 'Offline' | 'Alert';
}

export interface AIRecommendation {
  id: number;
  type: string;
  message: string;
  priority: 'Haute' | 'Moyenne' | 'Basse';
}

export interface RealTimeData {
  humidity: string;
  temperature: string;
  nitrogen: string;
  luminosity: string;
  soil_ph: string;
  water_consumption: string;
}

export enum ViewType {
  DASHBOARD = 'DASHBOARD',
  GROUNDS = 'GROUNDS',
  AI_ANALYSIS = 'AI_ANALYSIS'
}
