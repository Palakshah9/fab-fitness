
import React from 'react';
import { MembershipPlan, Program, Testimonial } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'weight',
    title: 'Weight Training',
    description: 'Fully equipped strength training area for muscle building and fat loss with professional guidance.',
    image: 'https://picsum.photos/id/445/800/600',
    icon: '💪'
  },
  {
    id: 'yoga',
    title: 'Yoga',
    description: 'Guided sessions focused on flexibility, balance, and mental well-being in a serene environment.',
    image: 'https://picsum.photos/id/678/800/600',
    icon: '🧘'
  },
  {
    id: 'zumba',
    title: 'Zumba',
    description: 'High-energy dance workouts for fun and effective cardio, perfect for all fitness levels.',
    image: 'https://picsum.photos/id/325/800/600',
    icon: '💃'
  },
  {
    id: 'personal',
    title: 'Personal Training',
    description: 'One-on-one customized fitness programs for faster and safer results tailored to your goals.',
    image: 'https://picsum.photos/id/225/800/600',
    icon: '🏆'
  }
];

export const PRICING: MembershipPlan[] = [
  {
    id: 'monthly',
    name: 'Starter Monthly',
    price: '₹2,499',
    duration: 'Month',
    features: ['Access to Gym Floor', 'Locker Room Access', '1 Free Trainer Consult', 'Free Wi-Fi']
  },
  {
    id: 'quarterly',
    name: 'Pro Quarterly',
    price: '₹6,499',
    duration: '3 Months',
    features: ['All Starter Features', 'Group Yoga Classes', 'Monthly Fitness Review', 'Guest Pass (1/Month)'],
    isPopular: true
  },
  {
    id: 'yearly',
    name: 'Elite Annual',
    price: '₹19,999',
    duration: 'Year',
    features: ['All Pro Features', 'Personal Trainer (4 Sessions)', 'Diet Consultation', 'Fab Fitness Merch Kit', 'Priority Booking']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    role: 'Tech Lead',
    content: 'Fab Fitness completely changed my perspective on working out. The atmosphere is energetic and the facilities are world-class.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=aarav'
  },
  {
    id: '2',
    name: 'Priya Verma',
    role: 'Entrepreneur',
    content: 'The Yoga sessions are my sanctuary. Premium feel, friendly trainers, and an inclusive community. Highly recommended!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    id: '3',
    name: 'Rohan Gupta',
    role: 'Student',
    content: 'Best gym in Varanasi. The strength area is top-notch and the neon aesthetics really pump you up for heavy lifts.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=rohan'
  }
];
