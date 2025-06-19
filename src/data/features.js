export const coreFeatures = [
  {
    id: 'pwa',
    title: 'Progressive Web App',
    description: 'Native app experience without app store downloads',
    benefits: [
      'Instant access from any device',
      'Offline functionality',
      'Push notifications',
      'App-like interface'
    ],
    techSpecs: {
      performance: '90+ Lighthouse score',
      compatibility: 'iOS, Android, Desktop',
      caching: 'Service Worker optimized',
      updates: 'Automatic background updates'
    },
    icon: '📱'
  },
  {
    id: 'ai_suggestions',
    title: 'AI-Powered Smart Suggestions',
    description: 'Contextual recommendations based on guest preferences and behavior',
    benefits: [
      'Personalized experience',
      'Increased service utilization',
      'Proactive guest care',
      'Revenue optimization'
    ],
    techSpecs: {
      ml_models: 'TensorFlow.js integration',
      data_sources: 'PMS, weather, events, preferences',
      accuracy: '87% recommendation accuracy',
      realtime: 'Sub-100ms response time'
    },
    icon: '🤖'
  },
  {
    id: 'voice_control',
    title: 'Voice Interface',
    description: 'Natural language commands for service requests and information',
    benefits: [
      'Hands-free operation',
      'Accessibility enhanced',
      'Multilingual support',
      'Natural interaction'
    ],
    techSpecs: {
      recognition: 'Web Speech API',
      languages: '12 languages supported',
      accuracy: '92% voice recognition',
      privacy: 'Client-side processing'
    },
    icon: '🎤'
  },
  {
    id: 'real_time_sync',
    title: 'Real-time Data Synchronization',
    description: 'Instant updates across all hotel systems and guest touchpoints',
    benefits: [
      'Consistent experience',
      'Staff coordination',
      'Immediate updates',
      'Error reduction'
    ],
    techSpecs: {
      protocol: 'WebSocket connections',
      latency: '<50ms update time',
      reliability: '99.9% uptime SLA',
      scalability: 'Auto-scaling architecture'
    },
    icon: '🔄'
  }
];

export const integrationCapabilities = [
  {
    category: 'Property Management Systems',
    systems: [
      { name: 'Oracle OPERA Cloud', status: 'integrated', api: 'REST API v5' },
      { name: 'Protel hotello', status: 'integrated', api: 'XML API' },
      { name: 'Mews Commander', status: 'integrated', api: 'GraphQL API' },
      { name: 'Cloudbeds', status: 'ready', api: 'REST API v1' }
    ]
  },
  {
    category: 'Payment Systems',
    systems: [
      { name: 'Adyen', status: 'integrated', api: 'Checkout API v70' },
      { name: 'Stripe', status: 'integrated', api: 'Payment Intents API' },
      { name: 'Square', status: 'ready', api: 'Payments API v2' },
      { name: 'PayPal', status: 'ready', api: 'REST API v2' }
    ]
  },
  {
    category: 'Smart Lock Systems',
    systems: [
      { name: 'SALTO KS', status: 'integrated', api: 'SALTO API v3' },
      { name: 'Assa Abloy VingCard', status: 'integrated', api: 'Orion API' },
      { name: 'dormakaba', status: 'ready', api: 'Kaba API v2' },
      { name: 'RFID Solutions', status: 'ready', api: 'Custom API' }
    ]
  },
  {
    category: 'Communication Platforms',
    systems: [
      { name: 'WhatsApp Business', status: 'integrated', api: 'Cloud API' },
      { name: 'Twilio', status: 'integrated', api: 'Programmable SMS' },
      { name: 'SendGrid', status: 'integrated', api: 'Web API v3' },
      { name: 'Slack', status: 'ready', api: 'Web API' }
    ]
  }
];

export const securityFeatures = [
  {
    feature: 'End-to-End Encryption',
    description: 'All guest data encrypted in transit and at rest',
    compliance: ['GDPR', 'PCI DSS', 'SOC 2']
  },
  {
    feature: 'Multi-Factor Authentication',
    description: 'Secure staff access with multiple verification methods',
    compliance: ['ISO 27001', 'NIST Framework']
  },
  {
    feature: 'Audit Logging',
    description: 'Complete activity tracking for compliance and security',
    compliance: ['GDPR', 'HIPAA', 'SOX']
  },
  {
    feature: 'Role-Based Access Control',
    description: 'Granular permissions for different staff roles',
    compliance: ['ISO 27001', 'NIST Framework']
  }
];

export const performanceMetrics = {
  loadTime: {
    initial: '1.2s',
    subsequent: '0.3s',
    target: 'Sub-2s initial load'
  },
  availability: {
    uptime: '99.97%',
    target: '99.9% SLA',
    monitoring: '24/7 automated'
  },
  scalability: {
    concurrent_users: '10,000+',
    requests_per_second: '5,000+',
    auto_scaling: 'Cloud-native'
  },
  mobile_performance: {
    first_paint: '0.8s',
    interactive: '1.1s',
    lighthouse_score: '94/100'
  }
};

export const implementationRoadmap = [
  {
    phase: 'Phase 1: Foundation',
    duration: '4-6 weeks',
    deliverables: [
      'PWA setup and core infrastructure',
      'PMS integration and data sync',
      'Basic guest interface',
      'Staff dashboard v1'
    ],
    success_criteria: [
      'System integration verified',
      'Core features operational',
      'Staff training completed',
      'Security audit passed'
    ]
  },
  {
    phase: 'Phase 2: Intelligence',
    duration: '6-8 weeks',
    deliverables: [
      'AI recommendation engine',
      'Voice interface integration',
      'Advanced analytics dashboard',
      'Guest preference learning'
    ],
    success_criteria: [
      'AI accuracy >85%',
      'Voice recognition >90%',
      'User adoption >60%',
      'Performance benchmarks met'
    ]
  },
  {
    phase: 'Phase 3: Optimization',
    duration: '4-6 weeks',
    deliverables: [
      'Performance optimization',
      'Advanced integrations',
      'Custom feature development',
      'Full deployment'
    ],
    success_criteria: [
      'Target KPIs achieved',
      'Full system integration',
      'Guest satisfaction >4.5',
      'ROI targets met'
    ]
  }
];

export const competitiveAdvantages = [
  {
    advantage: 'PWA-First Approach',
    description: 'No app downloads required, instant access',
    impact: 'Eliminates installation friction, increases adoption by 40%'
  },
  {
    advantage: 'AI-Powered Personalization',
    description: 'Context-aware recommendations and proactive service',
    impact: 'Increases revenue per guest by 15%, satisfaction by 23%'
  },
  {
    advantage: 'Voice-First Interface',
    description: 'Natural language interaction for all functions',
    impact: 'Reduces service request time by 60%, improves accessibility'
  },
  {
    advantage: 'Real-time Synchronization',
    description: 'Instant updates across all systems and touchpoints',
    impact: 'Eliminates double bookings, improves staff efficiency by 30%'
  },
  {
    advantage: 'Comprehensive Integration',
    description: 'Works with existing hotel technology stack',
    impact: 'Reduces implementation time by 50%, maximizes ROI'
  }
]; 