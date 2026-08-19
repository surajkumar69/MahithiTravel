import { MapPin, Navigation, Plane, Users, Briefcase, Bus } from 'lucide-react';

export const services = [
  {
    id: 'local-taxi',
    title: 'Local Taxi',
    subtitle: 'City Travel & Hourly Rental',
    description: 'Comfortable and reliable taxis for local city travel, shopping, business meetings, and daily commutes.',
    icon: MapPin,
    badge: 'Popular',
    highlights: ['Hourly Packages', 'Multiple Stops', 'Clean Vehicles', 'Instant Pickup']
  },
  {
    id: 'outstation-taxi',
    title: 'Outstation Taxi',
    subtitle: 'Long Distance & Intercity',
    description: 'Convenient and dependable vehicles for long-distance journeys, family vacations, and pilgrimage tours.',
    icon: Navigation,
    badge: 'Best Value',
    highlights: ['One-Way & Round Trips', 'No Hidden Charges', 'Highway Trained Drivers', '24/7 Assistance']
  },
  {
    id: 'airport-transfer',
    title: 'Airport Transfer',
    subtitle: 'Punctual Pickup & Drop',
    description: 'Comfortable pickup and drop-off service with strict time precision so you never miss a flight.',
    icon: Plane,
    badge: '24/7 Express',
    highlights: ['On-time Guarantee', 'Flight Tracking', 'Flight Delay Support', 'Luggage Assistance']
  },
  {
    id: 'family-travel',
    title: 'Family Travel',
    subtitle: 'Spacious & Comfortable',
    description: 'Spacious MUVs & SUVs tailored for hassle-free family vacations, picnics, and pilgrimage trips.',
    icon: Users,
    badge: 'Comfort First',
    highlights: ['Child Friendly Seats', 'Extra Storage Space', 'Custom Sightseeing Stops', 'Hygienic Cabins']
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    subtitle: 'Professional Executive Rides',
    description: 'Professional transportation solution for business trips, client pick-ups, and corporate delegations.',
    icon: Briefcase,
    badge: 'Executive',
    highlights: ['Billing Invoices', 'Punctual Chauffeurs', 'Premium Fleet', 'Priority Support']
  },
  {
    id: 'group-travel',
    title: 'Group Travel',
    subtitle: 'Tempo Travellers & Buses',
    description: 'Tempo travellers and 22-28 seater luxury buses equipped for large family events, tours, and excursions.',
    icon: Bus,
    badge: 'Large Capacity',
    highlights: ['Force Urbania & Buses', 'Reclining Luxury Seats', 'Pushback Comfort', 'Custom Tour Packages']
  }
];
