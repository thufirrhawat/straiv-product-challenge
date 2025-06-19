export const guestProfiles = [
  {
    id: 'guest_001',
    name: 'Sarah Chen',
    type: 'business',
    avatar: 'SC',
    preferences: {
      temperature: 21,
      pillows: 'firm',
      dietary: 'vegetarian',
      language: 'en'
    },
    bookingHistory: [
      {
        hotel: 'Grand Central Munich',
        date: '2024-12-15',
        satisfaction: 4.8,
        services_used: ['spa', 'room_service', 'late_checkout']
      }
    ],
    currentStay: {
      hotel: 'Grand Central Munich',
      room: '412',
      checkIn: '2025-01-20T15:30:00Z',
      checkOut: '2025-01-22T11:00:00Z'
    }
  },
  {
    id: 'guest_002', 
    name: 'Marcus Weber',
    type: 'leisure',
    avatar: 'MW',
    preferences: {
      temperature: 23,
      pillows: 'soft',
      dietary: 'none',
      language: 'de'
    },
    bookingHistory: [
      {
        hotel: 'Grand Central Munich',
        date: '2024-11-22',
        satisfaction: 4.5,
        services_used: ['restaurant', 'gym', 'concierge']
      }
    ],
    currentStay: {
      hotel: 'Grand Central Munich',
      room: '208',
      checkIn: '2025-01-21T16:00:00Z',
      checkOut: '2025-01-24T12:00:00Z'
    }
  },
  {
    id: 'guest_003',
    name: 'Elena Rodriguez',
    type: 'leisure',
    avatar: 'ER',
    preferences: {
      temperature: 22,
      pillows: 'medium',
      dietary: 'gluten-free',
      language: 'es'
    },
    bookingHistory: [
      {
        hotel: 'Grand Central Munich',
        date: '2024-10-05',
        satisfaction: 4.9,
        services_used: ['spa', 'restaurant', 'room_service']
      }
    ],
    currentStay: {
      hotel: 'Grand Central Munich',
      room: '315',
      checkIn: '2025-01-19T14:00:00Z',
      checkOut: '2025-01-21T10:00:00Z'
    }
  }
];

export const hotelData = {
  id: 'hotel_demo',
  name: 'Grand Central Munich', 
  location: 'Munich, Germany',
  services: [
    { id: 'spa', name: 'Spa & Wellness', available: true, waitTime: '15 min', icon: '🧘' },
    { id: 'restaurant', name: 'Restaurant', available: true, waitTime: '25 min', icon: '🍽️' },
    { id: 'gym', name: 'Fitness Center', available: true, waitTime: 'Open', icon: '💪' },
    { id: 'concierge', name: 'Concierge', available: true, waitTime: 'Immediate', icon: '🛎️' },
    { id: 'room_service', name: 'Room Service', available: true, waitTime: '30 min', icon: '🛎️' },
    { id: 'late_checkout', name: 'Late Checkout', available: true, waitTime: 'On Request', icon: '🕐' }
  ],
  integrations: {
    pms: 'Oracle OPERA Cloud',
    locks: 'SALTO KS',
    payments: 'Adyen',
    analytics: 'Straiv Analytics'
  },
  metrics: {
    digitalAdoption: 78,
    guestSatisfaction: 4.6,
    staffEfficiency: 23,
    revenue_increase: 12,
    totalGuests: 1247,
    repeatGuests: 312,
    avgStayDuration: 2.4
  }
};

export const weatherData = {
  munich: {
    current: 'rainy',
    temperature: 8,
    forecast: 'Light rain throughout the day',
    icon: '🌧️',
    humidity: 82,
    windSpeed: 12
  }
};

export const localEvents = [
  {
    id: 'event_001',
    name: 'Oktoberfest Museum Tour',
    distance: '1.2 km',
    time: '19:00',
    category: 'culture',
    price: '€15',
    rating: 4.7,
    description: 'Explore the history of Munich\'s famous festival'
  },
  {
    id: 'event_002', 
    name: 'Maximilianstrasse Shopping',
    distance: '0.8 km',
    time: 'All day',
    category: 'shopping',
    price: 'Free',
    rating: 4.4,
    description: 'Luxury shopping district with designer boutiques'
  },
  {
    id: 'event_003',
    name: 'English Garden Walk',
    distance: '2.1 km',
    time: '10:00-18:00',
    category: 'nature',
    price: 'Free',
    rating: 4.8,
    description: 'Beautiful park perfect for morning walks'
  },
  {
    id: 'event_004',
    name: 'Viktualienmarkt Food Tour',
    distance: '1.5 km',
    time: '14:00',
    category: 'food',
    price: '€35',
    rating: 4.9,
    description: 'Traditional Bavarian market with local delicacies'
  }
];

export const aiSuggestions = [
  {
    type: 'weather',
    title: 'Rainy Day Activities',
    suggestions: [
      'Visit the Deutsches Museum (indoor)',
      'Explore Maximilianstrasse shopping',
      'Enjoy spa treatments at hotel',
      'Try traditional Bavarian cuisine'
    ]
  },
  {
    type: 'preference',
    title: 'Based on Your Profile',
    suggestions: [
      'Book vegetarian restaurant options',
      'Schedule spa appointment',
      'Late checkout available',
      'Business center access'
    ]
  },
  {
    type: 'location',
    title: 'Nearby Recommendations',
    suggestions: [
      'Marienplatz (historic center)',
      'BMW Museum & Welt',
      'Neuschwanstein Castle day trip',
      'Traditional beer gardens'
    ]
  }
];

export const competitorData = [
  {
    company: 'Straiv',
    digitalAdoption: 78,
    guestSatisfaction: 4.6,
    staffEfficiency: '+23%',
    revenueGrowth: '+12%',
    features: ['AI-powered', 'PWA', 'Voice control', 'Real-time sync']
  },
  {
    company: 'Competitor A',
    digitalAdoption: 45,
    guestSatisfaction: 4.1,
    staffEfficiency: '+8%',
    revenueGrowth: '+3%',
    features: ['Mobile app', 'Basic booking', 'Email notifications']
  },
  {
    company: 'Competitor B',
    digitalAdoption: 52,
    guestSatisfaction: 4.3,
    staffEfficiency: '+12%',
    revenueGrowth: '+7%',
    features: ['Web portal', 'SMS alerts', 'Loyalty program']
  },
  {
    company: 'Traditional System',
    digitalAdoption: 23,
    guestSatisfaction: 3.8,
    staffEfficiency: '0%',
    revenueGrowth: '-2%',
    features: ['Phone calls', 'Paper forms', 'Manual processes']
  }
]; 