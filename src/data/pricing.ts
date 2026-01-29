export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  unit: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Smallholder",
    description: "Perfect for small farms up to 10 hectares getting started with precision agriculture.",
    price: {
      monthly: 29,
      yearly: 290,
    },
    unit: "per month",
    features: [
      "Up to 10 hectares coverage",
      "5 IoT sensor connections",
      "Basic soil moisture monitoring",
      "Weekly satellite imagery",
      "7-day weather forecasts",
      "Email alerts",
      "Mobile app access",
      "Community support",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "professional",
    name: "Commercial Farm",
    description: "Comprehensive monitoring for medium-sized commercial operations up to 100 hectares.",
    price: {
      monthly: 149,
      yearly: 1490,
    },
    unit: "per month",
    features: [
      "Up to 100 hectares coverage",
      "25 IoT sensor connections",
      "Advanced soil & weather stations",
      "Bi-weekly satellite imagery",
      "14-day weather intelligence",
      "AI irrigation recommendations",
      "SMS & push notifications",
      "API access",
      "Priority email support",
      "Quarterly farm reports",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Agricultural Enterprise",
    description: "Full-scale solution for large agricultural operations and cooperatives.",
    price: {
      monthly: 499,
      yearly: 4990,
    },
    unit: "per month",
    features: [
      "Unlimited hectares",
      "Unlimited sensor connections",
      "Custom hardware integration",
      "Daily satellite imagery",
      "AI agronomist assistant",
      "Yield prediction models",
      "Multi-farm management",
      "White-label options",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "On-site training",
    ],
    cta: "Contact Sales",
  },
];
