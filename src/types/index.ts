// TypeScript interfaces for Uber-like landing page

export interface RideOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  estimatedTime: string;
  priceMultiplier: number;
  capacity: number;
  features: string[];
}

export interface Location {
  id: string;
  name: string;
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface BookingForm {
  pickupLocation: string;
  destination: string;
  rideType: string;
  scheduledTime?: string;
  passengers: number;
}

export interface SafetyFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  location: string;
  avatar?: string;
}

export interface DriverBenefit {
  id: string;
  title: string;
  description: string;
  amount?: string;
}

export interface City {
  id: string;
  name: string;
  country: string;
  isAvailable: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  basePrice: number;
  perMileRate: number;
  perMinuteRate: number;
  description: string;
}