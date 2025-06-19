// Application constants and configuration

export const APP_CONFIG = {
  name: 'Straiv Product Challenge',
  author: 'Nurettin Ünal',
  version: '1.0.0',
  description: 'Interactive product strategy demonstration for hotel technology',
  contact: {
    email: 'nurettin@example.com',
    linkedin: 'linkedin.com/in/nurettin-unal'
  }
};

export const PASSCODE = 'Straiv<>Nuri';

export const SECTIONS = {
  OVERVIEW: 'overview',
  FOUNDATION: 'foundation',
  INNOVATION: 'innovation',
  IMPLEMENTATION: 'implementation',
  BUSINESS_IMPACT: 'business-impact',
  LIVE_PROTOTYPE: 'live-prototype'
};

export const SECTION_LABELS = {
  [SECTIONS.OVERVIEW]: 'Strategic Overview',
  [SECTIONS.FOUNDATION]: 'Part 1: Foundation',
  [SECTIONS.INNOVATION]: 'Part 2: Innovation',
  [SECTIONS.IMPLEMENTATION]: 'Implementation',
  [SECTIONS.BUSINESS_IMPACT]: 'Business Impact',
  [SECTIONS.LIVE_PROTOTYPE]: 'Live Prototype'
};

export const SECTION_DESCRIPTIONS = {
  [SECTIONS.OVERVIEW]: 'Product vision and strategic positioning',
  [SECTIONS.FOUNDATION]: 'Journey-Stage Intelligence & Stickiness Strategy',
  [SECTIONS.INNOVATION]: 'AI & Contextual Features',
  [SECTIONS.IMPLEMENTATION]: 'Priority Matrix & Timeline',
  [SECTIONS.BUSINESS_IMPACT]: 'KPIs & Success Framework',
  [SECTIONS.LIVE_PROTOTYPE]: 'Interactive demo of journey-stage intelligence'
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