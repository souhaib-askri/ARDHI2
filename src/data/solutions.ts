import {
  Tractor,
  Users,
  GraduationCap,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  metrics: {
    value: string;
    label: string;
  };
  cta: string;
  href: string;
}

export const solutions: Solution[] = [
  {
    id: "farmers",
    title: "For Farmers",
    subtitle: "Individual Farm Operations",
    description:
      "Whether you manage 5 or 500 hectares, get real-time visibility into your soil conditions, optimize irrigation schedules, and receive early warnings for climate stress events that threaten your crops.",
    icon: Tractor,
    benefits: [
      "Soil moisture and nutrient monitoring at multiple depths",
      "Automated irrigation recommendations based on crop needs",
      "Frost, drought, and heat stress early warning alerts",
      "Mobile app access for on-the-go farm management",
      "Simple SMS alerts for critical events",
      "Seasonal planning with historical data insights",
    ],
    metrics: {
      value: "35%",
      label: "Average water savings",
    },
    cta: "Start Free Trial",
    href: "/solutions/farmers",
  },
  {
    id: "cooperatives",
    title: "For Cooperatives & SMSA",
    subtitle: "Agricultural Cooperatives & Mutual Societies",
    description:
      "Manage hundreds of member farms from a single dashboard. Aggregate soil health data across your cooperative, coordinate irrigation schedules, and provide data-driven advisory services to your farmers.",
    icon: Users,
    benefits: [
      "Multi-farm dashboard with aggregated insights",
      "Member farm onboarding and sensor management",
      "Cooperative-wide soil health benchmarking",
      "Shared resource and equipment scheduling",
      "Bulk advisory messaging to member farmers",
      "Compliance reporting for certification programs",
    ],
    metrics: {
      value: "2,000+",
      label: "Farmers supported per cooperative",
    },
    cta: "Request Demo",
    href: "/solutions/cooperatives",
  },
  {
    id: "research",
    title: "For Research Institutes",
    subtitle: "Agronomic Research & Extension Services",
    description:
      "Access granular soil and climate data for agricultural research. Design field trials with precise environmental monitoring, validate new varieties under real conditions, and share findings with extension networks.",
    icon: GraduationCap,
    benefits: [
      "Research-grade sensor precision and calibration",
      "Experimental plot management and data export",
      "API access for integration with analysis tools",
      "Historical data archive for longitudinal studies",
      "Collaboration tools for multi-site trials",
      "Publication-ready data visualization and reports",
    ],
    metrics: {
      value: "15+",
      label: "Research institutions partnered",
    },
    cta: "Partner With Us",
    href: "/solutions/research",
  },
  {
    id: "programs",
    title: "For Agricultural Programs",
    subtitle: "International Development & NGO Programs",
    description:
      "Deploy precision agriculture at scale across development programs. Monitor project impact with verifiable data, support climate adaptation initiatives, and build local capacity in smart farming technologies.",
    icon: Globe,
    benefits: [
      "Program-wide deployment and monitoring tools",
      "Impact measurement with baseline comparisons",
      "Offline-capable mobile apps for remote areas",
      "Local language support and training materials",
      "Integration with M&E frameworks",
      "Carbon and water footprint tracking for reporting",
    ],
    metrics: {
      value: "12",
      label: "Countries with active programs",
    },
    cta: "Discuss Partnership",
    href: "/solutions/programs",
  },
];
