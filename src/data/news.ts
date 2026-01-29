export type NewsCategory = 
  | "mvp-updates" 
  | "field-tests" 
  | "partnerships" 
  | "drone-development" 
  | "agritech-innovation";

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: NewsCategory;
  categoryLabel: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  featured?: boolean;
}

export const newsCategories: { id: NewsCategory; label: string; color: string }[] = [
  { id: "mvp-updates", label: "Mises à jour MVP", color: "bg-blue-100 text-blue-700" },
  { id: "field-tests", label: "Tests Terrain Béja", color: "bg-green-100 text-green-700" },
  { id: "partnerships", label: "Partenariats", color: "bg-purple-100 text-purple-700" },
  { id: "drone-development", label: "Développement Drone", color: "bg-amber-100 text-amber-700" },
  { id: "agritech-innovation", label: "Innovation AgriTech", color: "bg-teal-100 text-teal-700" },
];

export const getCategoryInfo = (categoryId: NewsCategory) => {
  return newsCategories.find((c) => c.id === categoryId) || newsCategories[0];
};

export const newsArticles: NewsArticle[] = [
  // Featured Article
  {
    id: "1",
    slug: "lancement-beta-ardhi-plateforme",
    title: "ARDHI lance sa version bêta : La révolution AgriTech tunisienne commence",
    excerpt: "Après 18 mois de développement intensif, la plateforme ARDHI ouvre ses portes aux premiers agriculteurs pilotes. Découvrez les fonctionnalités clés de cette première version.",
    category: "mvp-updates",
    categoryLabel: "Mises à jour MVP",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    author: {
      name: "Ahmed Ben Salah",
      role: "CEO & Fondateur",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    publishedAt: "2026-01-25",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    slug: "premiers-tests-terrain-beja-cereales",
    title: "Premiers tests terrain à Béja : 500 hectares de céréales sous surveillance ARDHI",
    excerpt: "Notre équipe a déployé 15 stations IoT sur les exploitations partenaires du gouvernorat de Béja. Les premiers résultats sont prometteurs avec une détection précoce du stress hydrique.",
    category: "field-tests",
    categoryLabel: "Tests Terrain Béja",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    author: {
      name: "Fatma Khelifi",
      role: "Responsable Terrain",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    publishedAt: "2026-01-20",
    readTime: 6,
  },
  {
    id: "3",
    slug: "partenariat-inat-recherche-agricole",
    title: "Partenariat stratégique avec l'INAT pour la recherche agricole",
    excerpt: "ARDHI signe un accord de collaboration avec l'Institut National Agronomique de Tunisie pour développer des modèles IA adaptés aux cultures méditerranéennes.",
    category: "partnerships",
    categoryLabel: "Partenariats",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    author: {
      name: "Dr. Mohamed Trabelsi",
      role: "Directeur R&D",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    publishedAt: "2026-01-15",
    readTime: 5,
  },
  {
    id: "4",
    slug: "prototype-drone-fertilisation-tests-laboratoire",
    title: "Notre prototype de drone de fertilisation passe les tests en laboratoire",
    excerpt: "Le premier prototype du drone ARDHI-D1 a réussi ses tests de stabilité et de précision d'épandage en conditions contrôlées. Prochaine étape : les essais en plein champ.",
    category: "drone-development",
    categoryLabel: "Développement Drone",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
    author: {
      name: "Youssef Mejri",
      role: "Ingénieur Drones",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    publishedAt: "2026-01-12",
    readTime: 7,
  },
  {
    id: "5",
    slug: "intelligence-artificielle-prediction-recoltes",
    title: "Notre IA prédit les rendements avec 92% de précision",
    excerpt: "Les algorithmes de machine learning d'ARDHI atteignent un nouveau record de précision dans la prédiction des rendements céréaliers, grâce aux données satellites Sentinel-2.",
    category: "agritech-innovation",
    categoryLabel: "Innovation AgriTech",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    author: {
      name: "Sana Hammami",
      role: "Data Scientist",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    publishedAt: "2026-01-08",
    readTime: 6,
  },
  {
    id: "6",
    slug: "dashboard-agriculteur-nouvelle-interface",
    title: "Nouvelle interface dashboard : plus intuitive, plus puissante",
    excerpt: "La version 2.0 du tableau de bord ARDHI arrive avec une refonte complète de l'expérience utilisateur, des visualisations améliorées et un mode hors-ligne.",
    category: "mvp-updates",
    categoryLabel: "Mises à jour MVP",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    author: {
      name: "Ines Bouazizi",
      role: "Lead UX Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    },
    publishedAt: "2026-01-05",
    readTime: 4,
  },
  {
    id: "7",
    slug: "station-meteo-iot-beja-installation",
    title: "Installation de 10 stations météo IoT dans la région de Béja",
    excerpt: "Notre réseau de capteurs s'étend avec l'installation de nouvelles stations météorologiques connectées, offrant des données hyperlocales aux agriculteurs partenaires.",
    category: "field-tests",
    categoryLabel: "Tests Terrain Béja",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    author: {
      name: "Fatma Khelifi",
      role: "Responsable Terrain",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    publishedAt: "2025-12-28",
    readTime: 5,
  },
  {
    id: "8",
    slug: "smsa-beja-premier-partenaire-cooperatif",
    title: "La SMSA de Béja devient notre premier partenaire coopératif",
    excerpt: "Un accord historique avec la plus grande coopérative agricole de la région, ouvrant la voie à la digitalisation de 2000 agriculteurs membres.",
    category: "partnerships",
    categoryLabel: "Partenariats",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80",
    author: {
      name: "Ahmed Ben Salah",
      role: "CEO & Fondateur",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    publishedAt: "2025-12-20",
    readTime: 6,
  },
  {
    id: "9",
    slug: "drone-ardhi-d1-conception-finalisee",
    title: "Conception du drone ARDHI-D1 finalisée : les specs dévoilées",
    excerpt: "30 minutes d'autonomie, 15kg de charge utile, précision GPS RTK de ±10cm. Découvrez les spécifications techniques de notre drone de fertilisation Made in Tunisia.",
    category: "drone-development",
    categoryLabel: "Développement Drone",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    author: {
      name: "Youssef Mejri",
      role: "Ingénieur Drones",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    publishedAt: "2025-12-15",
    readTime: 8,
  },
  {
    id: "10",
    slug: "analyse-satellite-ndvi-cultures-tunisie",
    title: "L'analyse satellite NDVI révolutionne le suivi des cultures en Tunisie",
    excerpt: "Comment ARDHI utilise les images Sentinel-2 pour cartographier la santé végétale de milliers d'hectares en temps quasi-réel.",
    category: "agritech-innovation",
    categoryLabel: "Innovation AgriTech",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    author: {
      name: "Dr. Mohamed Trabelsi",
      role: "Directeur R&D",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    publishedAt: "2025-12-10",
    readTime: 7,
  },
  {
    id: "11",
    slug: "api-ouverte-developpeurs-agritech",
    title: "ARDHI ouvre son API aux développeurs AgriTech",
    excerpt: "Notre API REST permet désormais aux développeurs tiers d'intégrer les données ARDHI dans leurs applications. Documentation complète disponible.",
    category: "mvp-updates",
    categoryLabel: "Mises à jour MVP",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    author: {
      name: "Karim Jendoubi",
      role: "Lead Developer",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    publishedAt: "2025-12-05",
    readTime: 5,
  },
  {
    id: "12",
    slug: "resultats-pilote-irrigation-intelligente-beja",
    title: "Résultats du pilote irrigation intelligente : -35% de consommation d'eau",
    excerpt: "Les 5 exploitations pilotes de Béja équipées de notre système d'irrigation intelligente affichent des économies d'eau spectaculaires sans impact sur les rendements.",
    category: "field-tests",
    categoryLabel: "Tests Terrain Béja",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    author: {
      name: "Fatma Khelifi",
      role: "Responsable Terrain",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    publishedAt: "2025-11-28",
    readTime: 6,
  },
];

export const ARTICLES_PER_PAGE = 6;
