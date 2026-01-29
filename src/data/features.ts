import {
  Droplets,
  Satellite,
  Cloud,
  Brain,
  Gauge,
  Sprout,
  Bell,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

export const features: Feature[] = [
  {
    id: "soil-monitoring",
    title: "Real-Time Soil Monitoring",
    description:
      "Deploy IoT sensors across your fields to continuously monitor soil moisture, temperature, pH levels, and nutrient content at multiple depths.",
    icon: Gauge,
    benefits: [
      "Monitor moisture at 10cm, 30cm, and 60cm depths",
      "Track soil temperature fluctuations",
      "Measure electrical conductivity for salinity",
      "Real-time data sync every 15 minutes",
    ],
  },
  {
    id: "smart-irrigation",
    title: "AI-Powered Irrigation",
    description:
      "Automatically optimize water usage with machine learning algorithms that analyze soil data, weather forecasts, and crop water requirements.",
    icon: Droplets,
    benefits: [
      "Reduce water consumption by up to 40%",
      "Automated irrigation scheduling",
      "Zone-based watering control",
      "Integration with existing drip systems",
    ],
  },
  {
    id: "satellite-imagery",
    title: "Satellite Crop Analysis",
    description:
      "Access high-resolution satellite imagery with NDVI and other vegetation indices to monitor crop health across your entire farm.",
    icon: Satellite,
    benefits: [
      "Weekly satellite passes for updated imagery",
      "NDVI, NDWI, and EVI index calculations",
      "Early stress detection before visible symptoms",
      "Historical comparison and trend analysis",
    ],
  },
  {
    id: "weather-intelligence",
    title: "Hyperlocal Weather Data",
    description:
      "Integrate on-farm weather stations with regional forecasts for accurate microclimate data and 14-day agricultural forecasts.",
    icon: Cloud,
    benefits: [
      "On-site weather station integration",
      "14-day hyper-local forecasts",
      "Frost and heat wave alerts",
      "Evapotranspiration calculations",
    ],
  },
  {
    id: "ai-recommendations",
    title: "AI Agronomist Assistant",
    description:
      "Receive personalized recommendations for fertilization, pest management, and harvest timing based on your specific conditions and crop type.",
    icon: Brain,
    benefits: [
      "Crop-specific nutrient recommendations",
      "Pest and disease risk predictions",
      "Optimal planting and harvest windows",
      "Yield optimization strategies",
    ],
  },
  {
    id: "crop-management",
    title: "Complete Crop Lifecycle",
    description:
      "Track every stage of your crop from planting to harvest with detailed growth monitoring, input tracking, and yield predictions.",
    icon: Sprout,
    benefits: [
      "Growth stage tracking and milestones",
      "Input and cost management",
      "Labor and equipment scheduling",
      "Harvest planning and logistics",
    ],
  },
  {
    id: "alerts-notifications",
    title: "Smart Alert System",
    description:
      "Never miss critical events with customizable alerts for irrigation needs, weather threats, pest risks, and equipment issues.",
    icon: Bell,
    benefits: [
      "SMS, email, and push notifications",
      "Customizable alert thresholds",
      "Escalation protocols for emergencies",
      "Weekly summary reports",
    ],
  },
  {
    id: "analytics-reporting",
    title: "Farm Analytics Dashboard",
    description:
      "Gain insights from comprehensive analytics on crop performance, resource usage, and ROI across seasons and fields.",
    icon: BarChart3,
    benefits: [
      "Multi-season performance comparison",
      "Resource efficiency metrics",
      "Cost per hectare analysis",
      "Export reports for stakeholders",
    ],
  },
];

export const featuredFeatures = features.slice(0, 6);
