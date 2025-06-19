import React, { useState } from 'react';
import { 
  TrendingUp, 
  Target, 
  ShoppingCart, 
  CreditCard, 
  UserCheck, 
  Calendar,
  MapPin,
  Smartphone,
  Sun,
  Umbrella,
  Coffee,
  Utensils,
  Heart,
  Car,
  Gift,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Users,
  Clock,
  Star
} from 'lucide-react';

const Conversion = () => {
  const [selectedTouchpoint, setSelectedTouchpoint] = useState('onboarding');
  const [activeStrategy, setActiveStrategy] = useState('weather-driven');

  const touchpoints = {
    onboarding: {
      title: "Intelligent Onboarding Flow",
      description: "Transform generic welcome into personalized journey initiation",
      icon: UserCheck,
      color: "primary",
      currentIssues: [
        "Generic welcome without context",
        "Buried check-in functionality", 
        "No guest profile awareness",
        "Standard app store downloads only"
      ],
      solutions: [
        "24hrs before: Check-in reminder with upgrade options",
        "Day of arrival: Express check-in with contextual add-ons",
        "Real-time: 'Room ready early' instant notifications",
        "PWA advantage: No download barriers, instant access"
      ],
      kpis: [
        { metric: "Onboarding Completion", current: "45%", target: "78%", improvement: "+73%" },
        { metric: "Feature Discovery", current: "23%", target: "65%", improvement: "+183%" },
        { metric: "Time to First Value", current: "4.2min", target: "1.8min", improvement: "-57%" }
      ]
    },
    checkin: {
      title: "Express Check-in/Checkout",
      description: "Streamline critical touchpoints with intelligent assistance",
      icon: Calendar,
      color: "secondary",
      currentIssues: [
        "Hidden check-in functionality",
        "No upgrade prompts during process",
        "Generic checkout without personalization",
        "Missed late checkout opportunities"
      ],
      solutions: [
        "Homepage prominence for check-in access",
        "Dynamic upgrade suggestions based on availability",
        "Weather-based checkout timing optimization",
        "Smart late checkout offers for loyalty members"
      ],
      kpis: [
        { metric: "Digital Check-in Rate", current: "34%", target: "72%", improvement: "+112%" },
        { metric: "Upgrade Conversion", current: "8%", target: "23%", improvement: "+188%" },
        { metric: "Process Completion Time", current: "3.1min", target: "1.4min", improvement: "-55%" }
      ]
    },
    transactions: {
      title: "In-App Transaction Optimization",
      description: "Contextual upselling and seamless purchase experiences",
      icon: ShoppingCart,
      color: "accent",
      currentIssues: [
        "Generic shop with no guest context",
        "Lengthy checkout for known guests",
        "No service bundling opportunities",
        "Missed weather-based suggestions"
      ],
      solutions: [
        "One-tap checkout with saved guest preferences",
        "Contextual product curation by journey stage",
        "Smart service bundling (spa + products)",
        "Weather-responsive upselling engine"
      ],
      kpis: [
        { metric: "Transaction Conversion", current: "12%", target: "18%", improvement: "+50%" },
        { metric: "Average Order Value", current: "€47", target: "€69", improvement: "+47%" },
        { metric: "Service Attachment Rate", current: "15%", target: "35%", improvement: "+133%" }
      ]
    }
  };

  const strategies = {
    'weather-driven': {
      title: "Weather-Driven Upselling",
      icon: Sun,
      examples: [
        { weather: "Sunny", suggestion: "Bike rental + terrace dining", revenue: "€35-65" },
        { weather: "Rainy", suggestion: "Spa packages + in-room dining", revenue: "€85-120" },
        { weather: "Evening", suggestion: "Restaurant reservations + late checkout", revenue: "€45-80" }
      ]
    },
    'journey-stage': {
      title: "Journey-Stage Optimization",
      icon: MapPin,
      examples: [
        { stage: "Pre-arrival", suggestion: "Early check-in + room upgrade", revenue: "€25-75" },
        { stage: "During stay", suggestion: "Experience packages + local tours", revenue: "€60-150" },
        { stage: "Checkout", suggestion: "Late checkout + departure services", revenue: "€20-45" }
      ]
    },
    'contextual-bundling': {
      title: "Smart Service Bundling",
      icon: Gift,
      examples: [
        { bundle: "Business Package", services: "WiFi boost + quiet workspace + coffee", revenue: "€35" },
        { bundle: "Wellness Package", services: "Spa treatment + aromatherapy products", revenue: "€95" },
        { bundle: "Explorer Package", services: "City tour + local guidebook + café voucher", revenue: "€65" }
      ]
    }
  };

  const currentTouchpoint = touchpoints[selectedTouchpoint];
  const currentStrategy = strategies[activeStrategy];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="badge badge-secondary badge-lg mb-4">
          Strategic Priority #2
        </div>
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Conversion Optimization Strategy
        </h1>
        <h2 className="text-2xl font-semibold text-secondary mb-6">
          Contextual Revenue Optimization
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          Transform critical touchpoints from generic experiences into intelligent revenue-driving moments 
          through contextual understanding and proactive service suggestions.
        </p>
      </div>

      {/* Revenue Impact Overview */}
      <div className="card bg-gradient-to-r from-success/10 to-primary/10 border border-success/20 mb-12">
        <div className="card-body">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="text-success" />
            Projected Revenue Impact
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="stat">
              <div className="stat-title">Upsell Conversion</div>
              <div className="stat-value text-2xl text-success">18%</div>
              <div className="stat-desc">vs industry 12%</div>
            </div>
            <div className="stat">
              <div className="stat-title">Average Order Value</div>
              <div className="stat-value text-2xl text-primary">+47%</div>
              <div className="stat-desc">Through smart bundling</div>
            </div>
            <div className="stat">
              <div className="stat-title">Service Attachment</div>
              <div className="stat-value text-2xl text-secondary">35%</div>
              <div className="stat-desc">Shop + service combos</div>
            </div>
            <div className="stat">
              <div className="stat-title">Revenue per Room</div>
              <div className="stat-value text-2xl text-accent">+€18</div>
              <div className="stat-desc">Daily incremental</div>
            </div>
          </div>
        </div>
      </div>

      {/* Critical Touchpoints */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Critical Conversion Touchpoints</h3>
        
        {/* Touchpoint Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(touchpoints).map(([key, touchpoint]) => {
            const IconComponent = touchpoint.icon;
            return (
              <button
                key={key}
                className={`btn ${selectedTouchpoint === key ? `btn-${touchpoint.color}` : 'btn-outline'} btn-sm`}
                onClick={() => setSelectedTouchpoint(key)}
              >
                <IconComponent size={16} />
                {touchpoint.title}
              </button>
            );
          })}
        </div>

        {/* Touchpoint Analysis */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-6">
              <div className={`avatar placeholder`}>
                <div className={`bg-${currentTouchpoint.color} text-${currentTouchpoint.color}-content rounded-xl w-16 h-16`}>
                  {React.createElement(currentTouchpoint.icon, { size: 24 })}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold">{currentTouchpoint.title}</h4>
                <p className="text-base-content/70">{currentTouchpoint.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Current Issues */}
              <div className="card bg-error/10 border border-error/20">
                <div className="card-body p-4">
                  <h5 className="font-semibold text-error mb-3">Current Issues</h5>
                  <ul className="space-y-2">
                    {currentTouchpoint.currentIssues.map((issue, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-error mt-2 flex-shrink-0"></div>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Solutions */}
              <div className="card bg-success/10 border border-success/20">
                <div className="card-body p-4">
                  <h5 className="font-semibold text-success mb-3">Strategic Solutions</h5>
                  <ul className="space-y-2">
                    {currentTouchpoint.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="text-success mt-0.5 flex-shrink-0" size={14} />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* KPIs */}
            <div className="card bg-base-200">
              <div className="card-body p-4">
                <h5 className="font-semibold mb-4">Success Metrics</h5>
                <div className="grid md:grid-cols-3 gap-4">
                  {currentTouchpoint.kpis.map((kpi, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs text-base-content/60">{kpi.metric}</div>
                      <div className="text-sm">
                        <span className="text-error">{kpi.current}</span>
                        <ArrowRight className="inline mx-1" size={12} />
                        <span className="text-success font-bold">{kpi.target}</span>
                      </div>
                      <div className="text-xs text-primary font-bold">{kpi.improvement}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Strategies */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Contextual Conversion Strategies</h3>
        
        {/* Strategy Selection */}
        <div className="flex justify-center mb-8">
          <div className="join">
            {Object.entries(strategies).map(([key, strategy]) => {
              const IconComponent = strategy.icon;
              return (
                <button
                  key={key}
                  className={`join-item btn ${activeStrategy === key ? 'btn-accent' : 'btn-outline'}`}
                  onClick={() => setActiveStrategy(key)}
                >
                  <IconComponent size={16} />
                  {strategy.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Strategy Examples */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-6">
              {React.createElement(currentStrategy.icon, { className: "text-accent", size: 24 })}
              <h4 className="text-xl font-bold">{currentStrategy.title}</h4>
            </div>
            
            <div className="grid gap-4">
              {currentStrategy.examples.map((example, index) => (
                <div key={index} className="card bg-base-200">
                  <div className="card-body p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="badge badge-accent badge-sm">
                            {example.weather || example.stage || example.bundle}
                          </div>
                        </div>
                        <p className="text-sm">{example.suggestion || example.services}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-base-content/60">Revenue</div>
                        <div className="font-bold text-success">{example.revenue}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Shop Transformation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Shop Module Transformation</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="card bg-base-100 border border-error/20">
            <div className="card-body">
              <h4 className="card-title text-error">Current Shop Issues</h4>
              <ul className="space-y-2 text-sm">
                <li>• Zero guest context integration</li>
                <li>• Generic product categories (Souvenirs, Bags, Toys)</li>
                <li>• Lengthy checkout for known guests</li>
                <li>• No service integration opportunities</li>
                <li>• Static inventory regardless of weather/timing</li>
                <li>• Missed cross-selling with hotel services</li>
              </ul>
            </div>
          </div>

          {/* After */}
          <div className="card bg-base-100 border border-success/20">
            <div className="card-body">
              <h4 className="card-title text-success">Intelligent Shop Vision</h4>
              <ul className="space-y-2 text-sm">
                <li>• Journey-aware product curation</li>
                <li>• Weather-responsive inventory highlights</li>
                <li>• One-tap checkout for guest profiles</li>
                <li>• Smart service bundling suggestions</li>
                <li>• Real-time room delivery integration</li>
                <li>• Experience packages with local partners</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="card bg-base-100">
        <div className="card-body">
          <h3 className="text-xl font-bold mb-6">Conversion Optimization Roadmap</h3>
          
          <div className="space-y-6">
            <div className="timeline-item">
              <div className="flex gap-4">
                <div className="badge badge-primary">Week 1-2</div>
                <div className="flex-1">
                  <h4 className="font-semibold">Quick Wins - Foundation</h4>
                  <p className="text-sm text-base-content/70 mb-2">
                    Move check-in to homepage prominence, guest profile checkout integration
                  </p>
                  <div className="text-xs text-success">Expected: +15% check-in conversion, +25% shop completion</div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="flex gap-4">
                <div className="badge badge-secondary">Week 3-8</div>
                <div className="flex-1">
                  <h4 className="font-semibold">Smart Features - Context Integration</h4>
                  <p className="text-sm text-base-content/70 mb-2">
                    Weather-driven suggestions, journey-stage awareness, basic bundling
                  </p>
                  <div className="text-xs text-success">Expected: +35% upsell conversion, +40% AOV</div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="flex gap-4">
                <div className="badge badge-accent">Week 9-16</div>
                <div className="flex-1">
                  <h4 className="font-semibold">Advanced Optimization - AI-Driven</h4>
                  <p className="text-sm text-base-content/70 mb-2">
                    Predictive upselling, dynamic pricing, partner integration
                  </p>
                  <div className="text-xs text-success">Expected: +50% service attachment, +60% cross-property</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversion; 