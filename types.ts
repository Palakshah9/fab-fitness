
export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
