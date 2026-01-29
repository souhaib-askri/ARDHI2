export interface Partner {
  id: string;
  name: string;
  type: "research" | "cooperative" | "program" | "government";
  logo?: string;
}

export const partners: Partner[] = [
  { id: "1", name: "KALRO", type: "research" },
  { id: "2", name: "ICRISAT", type: "research" },
  { id: "3", name: "CIMMYT", type: "research" },
  { id: "4", name: "IITA", type: "research" },
  { id: "5", name: "Kenya Agricultural Research Institute", type: "research" },
  { id: "6", name: "One Acre Fund", type: "program" },
  { id: "7", name: "AGRA", type: "program" },
  { id: "8", name: "FAO", type: "program" },
  { id: "9", name: "World Food Programme", type: "program" },
  { id: "10", name: "GIZ", type: "program" },
  { id: "11", name: "USAID Feed the Future", type: "program" },
  { id: "12", name: "Ministry of Agriculture Kenya", type: "government" },
];

export const partnerStats = [
  { value: "500+", label: "Active Farms" },
  { value: "15+", label: "Research Partners" },
  { value: "12", label: "Countries" },
  { value: "50K+", label: "Hectares Monitored" },
];
