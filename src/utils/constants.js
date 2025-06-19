// Application constants and configuration

export const APP_CONFIG = {
  name: 'Straiv Product Challenge',
  author: 'Nurettin Ünal',
  version: '2.0.0',
  description: 'Strategic Product Analysis & Recommendations for Guest App Enhancement',
  contact: {
    email: 'nurettin@example.com',
    linkedin: 'linkedin.com/in/nurettin-unal'
  }
};

export const PASSCODE = 'Straiv<>Nuri';

export const SECTIONS = {
  OVERVIEW: 'overview',
  CURRENT_ANALYSIS: 'current-analysis',
  STICKINESS_STRATEGY: 'stickiness-strategy',
  CONVERSION_STRATEGY: 'conversion-strategy',
  INNOVATION_STRATEGY: 'innovation-strategy',
  GROWTH_STRATEGY: 'growth-strategy',
  IMPLEMENTATION_ROADMAP: 'implementation-roadmap',
  PROTOTYPE_DEMO: 'prototype-demo'
};

export const SECTION_LABELS = {
  [SECTIONS.OVERVIEW]: 'Executive Summary',
  [SECTIONS.CURRENT_ANALYSIS]: 'Current App Analysis',
  [SECTIONS.STICKINESS_STRATEGY]: 'Stickiness Strategy',
  [SECTIONS.CONVERSION_STRATEGY]: 'Conversion Strategy', 
  [SECTIONS.INNOVATION_STRATEGY]: 'Innovation Strategy',
  [SECTIONS.GROWTH_STRATEGY]: 'Growth Strategy',
  [SECTIONS.IMPLEMENTATION_ROADMAP]: 'Implementation Roadmap',
  [SECTIONS.PROTOTYPE_DEMO]: 'Strategic Prototypes'
};

export const SECTION_DESCRIPTIONS = {
  [SECTIONS.OVERVIEW]: 'My strategic assessment and key recommendations',
  [SECTIONS.CURRENT_ANALYSIS]: 'Critical issues identified in the current Guest App',
  [SECTIONS.STICKINESS_STRATEGY]: 'My approach to making the app integral to guest journey',
  [SECTIONS.CONVERSION_STRATEGY]: 'My recommendations for onboarding, check-in, and transaction optimization',
  [SECTIONS.INNOVATION_STRATEGY]: 'My innovation approach for competitive differentiation',
  [SECTIONS.GROWTH_STRATEGY]: 'My plan for hotel adoption and guest engagement growth',
  [SECTIONS.IMPLEMENTATION_ROADMAP]: 'My prioritized roadmap with realistic timelines and KPIs',
  [SECTIONS.PROTOTYPE_DEMO]: 'Interactive demonstrations of my strategic recommendations'
};

export const DEMO_USERS = {
  GUEST: 'guest',
  STAFF: 'staff',
  MANAGER: 'manager'
};

export const LANGUAGES = {
  EN: 'en',
  DE: 'de',
  ES: 'es',
  FR: 'fr'
};

export const LANGUAGE_LABELS = {
  [LANGUAGES.EN]: 'English',
  [LANGUAGES.DE]: 'Deutsch',
  [LANGUAGES.ES]: 'Español',
  [LANGUAGES.FR]: 'Français'
};

export const THEMES = {
  STRAIV: 'straiv',
  LIGHT: 'light',
  DARK: 'dark',
  CORPORATE: 'corporate'
};

export const API_ENDPOINTS = {
  // Demo endpoints (would be real in production)
  GUESTS: '/api/guests',
  BOOKINGS: '/api/bookings',
  SERVICES: '/api/services',
  ANALYTICS: '/api/analytics',
  NOTIFICATIONS: '/api/notifications'
};

export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  EXTRA_SLOW: 800
};

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536
};

export const COLORS = {
  PRIMARY: '#1e40af',
  SECONDARY: '#06b6d4',
  ACCENT: '#3b82f6',
  SUCCESS: '#10b981',
  WARNING: '#f59e0b',
  ERROR: '#ef4444',
  INFO: '#0ea5e9'
};

export const FEATURE_FLAGS = {
  VOICE_INTERFACE: true,
  AI_SUGGESTIONS: true,
  REAL_TIME_SYNC: true,
  ANALYTICS_DASHBOARD: true,
  MOBILE_FIRST: true,
  OFFLINE_SUPPORT: true
};

export const DEMO_SCENARIOS = {
  BUSINESS_TRAVELER: 'business_traveler',
  LEISURE_GUEST: 'leisure_guest',
  RETURNING_GUEST: 'returning_guest',
  VIP_GUEST: 'vip_guest'
};

export const SERVICE_CATEGORIES = {
  ACCOMMODATION: 'accommodation',
  DINING: 'dining',
  WELLNESS: 'wellness',
  BUSINESS: 'business',
  ENTERTAINMENT: 'entertainment',
  TRANSPORT: 'transport'
};

export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

export const CHART_COLORS = [
  '#1e40af', // Primary
  '#06b6d4', // Secondary
  '#3b82f6', // Accent
  '#10b981', // Success
  '#f59e0b', // Warning
  '#ef4444', // Error
  '#0ea5e9', // Info
  '#8b5cf6', // Purple
  '#f97316', // Orange
  '#84cc16'  // Lime
];

export const COMPETITOR_COLORS = {
  STRAIV: '#1e40af',
  COMPETITOR_A: '#6b7280',
  COMPETITOR_B: '#9ca3af',
  TRADITIONAL: '#d1d5db'
};

export const SOCIAL_LINKS = {
  LINKEDIN: 'https://linkedin.com/in/nurettin-unal',
  GITHUB: 'https://github.com/nurettin',
  WEBSITE: 'https://nurettin.dev'
};

export const CONTACT_INFO = {
  EMAIL: 'nurettin@example.com',
  PHONE: '+49 xxx xxx xxxx',
  LOCATION: 'Munich, Germany'
}; 