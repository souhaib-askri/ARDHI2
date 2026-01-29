export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
  quote: string;
  metrics?: {
    label: string;
    value: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "James Mwangi",
    role: "Farm Manager",
    company: "Greenfield Horticulture",
    location: "Nakuru, Kenya",
    image: "/testimonials/james.jpg",
    quote:
      "Before Ardhi, we were irrigating on a fixed schedule regardless of conditions. Now our water bills have dropped by 35% while our tomato yields increased by 20%. The soil sensors pay for themselves within the first season.",
    metrics: {
      label: "Water Savings",
      value: "35%",
    },
  },
  {
    id: "2",
    name: "Sarah Ochieng",
    role: "Operations Director",
    company: "Lake Region Cooperative",
    location: "Kisumu, Kenya",
    image: "/testimonials/sarah.jpg",
    quote:
      "Managing 2,000 smallholder farmers was chaotic until Ardhi. The satellite imagery alerts us to pest outbreaks before they spread, and farmers get SMS recommendations in their local language. We've reduced crop losses by 45%.",
    metrics: {
      label: "Reduced Crop Loss",
      value: "45%",
    },
  },
  {
    id: "3",
    name: "David Kimani",
    role: "Owner",
    company: "Highland Coffee Estate",
    location: "Nyeri, Kenya",
    image: "/testimonials/david.jpg",
    quote:
      "Coffee quality depends on precise irrigation during flowering. Ardhi's AI predicted the exact water needs during our critical growth phases. Our specialty grade beans increased from 60% to 82% of our harvest.",
    metrics: {
      label: "Premium Grade Increase",
      value: "+22%",
    },
  },
  {
    id: "4",
    name: "Grace Wanjiku",
    role: "Agricultural Consultant",
    company: "FarmTech Advisors",
    location: "Nairobi, Kenya",
    image: "/testimonials/grace.jpg",
    quote:
      "I recommend Ardhi to all my commercial farming clients. The ROI analysis and resource tracking features make it easy to demonstrate the value of precision agriculture investments to farm owners and lenders.",
    metrics: {
      label: "Client Farms Onboarded",
      value: "47",
    },
  },
  {
    id: "5",
    name: "Peter Otieno",
    role: "Irrigation Specialist",
    company: "Tana River Farms",
    location: "Tana River, Kenya",
    image: "/testimonials/peter.jpg",
    quote:
      "In our semi-arid region, every drop of water counts. Ardhi's evapotranspiration calculations combined with soil moisture data have helped us grow rice with 40% less water than traditional flood irrigation.",
    metrics: {
      label: "Water Efficiency",
      value: "40%",
    },
  },
  {
    id: "6",
    name: "Mary Akinyi",
    role: "CEO",
    company: "Fresh Produce Exports Ltd",
    location: "Naivasha, Kenya",
    image: "/testimonials/mary.jpg",
    quote:
      "Export markets demand traceability and sustainability documentation. Ardhi's reports automatically generate the data our European buyers need to verify our water stewardship and sustainable farming practices.",
    metrics: {
      label: "Export Compliance",
      value: "100%",
    },
  },
];
