import { Cpu, Wifi, CloudCog, LineChart, type LucideIcon } from "lucide-react";

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export const steps: Step[] = [
  {
    id: "deploy",
    number: "01",
    title: "Deploy Sensors",
    description:
      "Install wireless IoT sensors across your fields. Our team helps you determine optimal placement for soil moisture, weather, and environmental monitoring.",
    icon: Cpu,
    details: [
      "Professional site assessment",
      "Solar-powered, maintenance-free sensors",
      "Cellular or LoRaWAN connectivity options",
      "Installation completed in 1-2 days",
    ],
  },
  {
    id: "connect",
    number: "02",
    title: "Connect Your Farm",
    description:
      "All your sensor data, satellite imagery, and weather forecasts flow into one unified platform. Map your fields, define zones, and set up crop profiles.",
    icon: Wifi,
    details: [
      "Automatic sensor pairing and calibration",
      "Field boundary mapping with GPS",
      "Crop type and variety configuration",
      "Integration with existing equipment",
    ],
  },
  {
    id: "analyze",
    number: "03",
    title: "AI Analysis",
    description:
      "Our machine learning models continuously analyze your data, combining local conditions with agronomic research to generate actionable insights.",
    icon: CloudCog,
    details: [
      "Pattern recognition across data sources",
      "Crop-specific growth models",
      "Predictive analytics for yields",
      "Anomaly detection and alerts",
    ],
  },
  {
    id: "optimize",
    number: "04",
    title: "Optimize & Grow",
    description:
      "Receive daily recommendations for irrigation, fertilization, and crop management. Track improvements season over season with comprehensive analytics.",
    icon: LineChart,
    details: [
      "Daily action recommendations",
      "Automated irrigation control",
      "Performance benchmarking",
      "Continuous model improvement",
    ],
  },
];
