export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  detailedProcess: string[];
  techStack: string[];
  image?: string;
  estPrice: number;
}

export interface ProcessStep {
  id: string;
  numberString: string;
  title: string;
  description: string;
  image: string;
  detailedNotes: string;
  timeframe: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  challenge: string;
  solutions: string[];
  outcomes: {
    label: string;
    value: string;
  }[];
  image: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  reviewer: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ProposalState {
  services: string[];
  timeline: string;
  budget: number;
  contactName: string;
  contactEmail: string;
  contactCompany: string;
  notes: string;
}
