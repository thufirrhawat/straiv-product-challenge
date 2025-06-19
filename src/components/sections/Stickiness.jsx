import React, { useState } from 'react';
import { 
  Brain, 
  Smartphone, 
  MapPin, 
  ShoppingBag, 
  MessageCircle, 
  TrendingUp,
  Users,
  Calendar,
  Sun,
  Umbrella,
  Coffee,
  Utensils,
  Wifi,
  Car,
  Camera,
  Mic,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const Stickiness = () => {
  const [selectedFeature, setSelectedFeature] = useState('intelligence');
  const [activeTimeline, setActiveTimeline] = useState('pre-arrival');

  const features = {
    intelligence: {
      title: "Smart Local Intelligence Hub",
      description: "Transform static weather widgets into activity prediction engines",
      icon: Brain,
      color: "primary",
      examples: [
        "Rainy afternoon detected → Spa availability → One-tap booking",
        "Sunny forecast → Bike rentals & terrace dining suggestions",
        "Business hours detected → Meeting room availability"
      ]
    },
    navigation: {
      title: "Contextual Navigation",
      description: "Dynamic menu adapts to guest profile and current needs",
      icon: MapPin,
      color: "secondary", 
      examples: [
        "Business traveler → Work amenities (WiFi, meeting rooms)",
        "Family guest → Recreation (pool, kids club, local attractions)",
        "Late arrival → Express services & 24/7 amenities"
      ]
    },
    shopping: {
      title: "Intelligent Shop Experience",
      description: "Transform generic e-commerce into curated guest journey accelerator",
      icon: ShoppingBag,
      color: "accent",
      examples: [
        "Pre-arrival: 'Pack light, premium toiletries waiting'",
        "During stay: 'Rainy day? Browse cozy reading collection'",
        "Departure: 'Take Munich home with local artisan souvenirs'"
      ]
    },
    engagement: {
      title: "Progressive Engagement Timeline",
      description: "Contextual features unlock throughout the guest journey",
      icon: Calendar,
      color: "info",
      examples: [
        "Pre-arrival: Local prep, early check-in, suggested purchases",
        "During stay: Real-time suggestions, service optimization",
        "Post-checkout: Loyalty points, return incentives, delivery"
      ]
    }
  };

  const timeline = {
    'pre-arrival': {
      title: "Pre-Arrival Intelligence",
      timeframe: "24-48 hours before",
      features: [
        { icon: Sun, title: "Weather-Activity Prediction", desc: "Sunny weekend → Bike rental suggestions" },
        { icon: ShoppingBag, title: "Smart Packing Assistant", desc: "Pack light, we have premium essentials ready" },
        { icon: MapPin, title: "Local Prep Intelligence", desc: "Museum tickets + restaurant reservations" },
        { icon: Smartphone, title: "Early Check-in Optimization", desc: "Room ready early? Instant notification + upgrade options" }
      ]
    },
    'during-stay': {
      title: "During Stay Optimization", 
      timeframe: "Real-time contextual",
      features: [
        { icon: Umbrella, title: "Weather-Responsive Services", desc: "Rain detected → Spa packages, in-room dining" },
        { icon: Coffee, title: "Time-Based Suggestions", desc: "Morning → Breakfast delivery, Afternoon → Local cafés" },
        { icon: MessageCircle, title: "Proactive Concierge", desc: "Massage ends 4pm → Perfect café nearby suggestion" },
        { icon: Camera, title: "Visual Room Intelligence", desc: "Point at amenities for instant information & booking" }
      ]
    },
    'post-checkout': {
      title: "Post-Checkout Connection",
      timeframe: "Ongoing relationship",
      features: [
        { icon: TrendingUp, title: "Loyalty Progression", desc: "Network-wide points across 3,400+ hotels" },
        { icon: Car, title: "Regional Product Delivery", desc: "Local souvenirs shipped to your home" },
        { icon: Users, title: "Social Proof Engine", desc: "Guests from your city also loved..." },
        { icon: Calendar, title: "Return Journey Incentives", desc: "Seasonal offers based on previous preferences" }
      ]
    }
  };

  const currentPhase = timeline[activeTimeline];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="badge badge-primary badge-lg mb-4">
          Strategic Priority #1
        </div>
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Product Stickiness Strategy
        </h1>
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Personal Guest Intelligence Engine
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          Transform Straiv's PWA from a static information portal into an intelligent guest companion 
          that anticipates needs, personalizes experiences, and creates habit-forming interactions throughout the journey.
        </p>
      </div>

      {/* Current vs Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card bg-error/10 border border-error/20">
          <div className="card-body">
            <h3 className="card-title text-error flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              Current State Reality
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Non-functional search (0% completion rate)</li>
              <li>• Hidden valuable features (unclear interactions)</li>
              <li>• Generic promotions with low engagement</li>
              <li>• Buried primary actions</li>
              <li>• Broken AI chatbot "Hermes"</li>
            </ul>
          </div>
        </div>

        <div className="card bg-success/10 border border-success/20">
          <div className="card-body">
            <h3 className="card-title text-success flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success"></div>
              Strategic Vision
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• AI-powered personal concierge that learns</li>
              <li>• Contextual intelligence throughout journey</li>
              <li>• Proactive service suggestions</li>
              <li>• Cross-property guest recognition</li>
              <li>• Voice-first intelligent interactions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Core Stickiness Features</h3>
        
        {/* Feature Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(features).map(([key, feature]) => {
            const IconComponent = feature.icon;
            return (
              <button
                key={key}
                className={`btn ${selectedFeature === key ? `btn-${feature.color}` : 'btn-outline'} btn-sm`}
                onClick={() => setSelectedFeature(key)}
              >
                <IconComponent size={16} />
                {feature.title}
              </button>
            );
          })}
        </div>

        {/* Selected Feature Details */}
        <div className="card bg-base-200">
          <div className="card-body">
            <div className="flex items-start gap-4">
              <div className={`avatar placeholder`}>
                <div className={`bg-${features[selectedFeature].color} text-${features[selectedFeature].color}-content rounded-xl w-16 h-16`}>
                  {React.createElement(features[selectedFeature].icon, { size: 24 })}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">{features[selectedFeature].title}</h4>
                <p className="text-base-content/80 mb-4">{features[selectedFeature].description}</p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold">Implementation Examples:</h5>
                  {features[selectedFeature].examples.map((example, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-success mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progressive Engagement Timeline */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Progressive Engagement Timeline</h3>
        
        {/* Timeline Navigation */}
        <div className="flex justify-center mb-8">
          <div className="join">
            {Object.entries(timeline).map(([key, phase]) => (
              <button
                key={key}
                className={`join-item btn ${activeTimeline === key ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setActiveTimeline(key)}
              >
                {phase.title}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-bold">{currentPhase.title}</h4>
              <div className="badge badge-primary">{currentPhase.timeframe}</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {currentPhase.features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="card bg-base-200">
                    <div className="card-body p-4">
                      <div className="flex items-start gap-3">
                        <div className="avatar placeholder">
                          <div className="bg-primary text-primary-content rounded-lg w-10 h-10">
                            <IconComponent size={20} />
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-1">{feature.title}</h5>
                          <p className="text-xs text-base-content/70">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Expected Impact */}
      <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
        <div className="card-body">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="text-primary" />
            Expected Stickiness Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="stat">
              <div className="stat-title">Session Duration</div>
              <div className="stat-value text-2xl text-primary">+25%</div>
              <div className="stat-desc">Through contextual engagement</div>
            </div>
            <div className="stat">
              <div className="stat-title">Feature Adoption</div>
              <div className="stat-value text-2xl text-secondary">60%</div>
              <div className="stat-desc">Homepage check-in usage</div>
            </div>
            <div className="stat">
              <div className="stat-title">Cross-Property</div>
              <div className="stat-value text-2xl text-accent">30%</div>
              <div className="stat-desc">Network bookings from repeats</div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Phases */}
      <div className="card bg-base-100">
        <div className="card-body">
          <h3 className="text-xl font-bold mb-6">Implementation Roadmap</h3>
          
          <div className="space-y-4">
            <div className="timeline-item flex gap-4">
              <div className="badge badge-primary">Phase 1</div>
              <div>
                <h4 className="font-semibold">Foundation (Weeks 1-4) - Quick Wins</h4>
                <p className="text-sm text-base-content/70">Fix search, add temperature toggle, move check-in to prominence, optimize loading</p>
              </div>
            </div>
            
            <div className="timeline-item flex gap-4">
              <div className="badge badge-secondary">Phase 2</div>
              <div>
                <h4 className="font-semibold">Intelligence (Weeks 5-12) - Smart Features</h4>
                <p className="text-sm text-base-content/70">Weather-driven suggestions, dynamic personalization, voice search, guest behavior tracking</p>
              </div>
            </div>
            
            <div className="timeline-item flex gap-4">
              <div className="badge badge-accent">Phase 3</div>
              <div>
                <h4 className="font-semibold">Innovation (Weeks 13-24) - Competitive Edge</h4>
                <p className="text-sm text-base-content/70">Computer vision, advanced AI concierge, real-time events, partner marketplace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stickiness; 