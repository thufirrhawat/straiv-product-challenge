import React, { useState } from 'react';
import { 
  Zap,
  Calendar,
  MapPin,
  Clock,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Bell,
  Smartphone,
  Brain,
  Settings,
  BarChart3,
  Info,
  DollarSign,
  Shield,
  Star,
  Globe,
  Wifi,
  Key,
  Coffee,
  Car,
  ShoppingBag,
  Utensils,
  Sparkles
} from 'lucide-react';

const StickinessStrategy = ({ onSectionChange, navigate }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  // Helper function to handle navigation with scroll-to-top
  const handleNavigation = (path) => {
    if (navigate) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Tooltip component for research data
  const Tooltip = ({ children, content }) => (
    <div className="tooltip tooltip-info tooltip-top sm:tooltip-right" data-tip={content}>
      {children}
    </div>
  );

  // Industry context data
  const industryContext = {
    day1Retention: "16.5-20.9%",
    day7Retention: "7.6%", 
    day30Retention: "2.8-4.5%",
    targetRetention: "8-12%",
    mobileCheckInPreference: "50%",
    contactlessPreference: "53.6%"
  };

  // Three strategic stickiness features
  const stickinessFeatures = [
    {
      id: 'pre-arrival',
      title: "Pre-Arrival Preparation Intelligence",
      subtitle: "Proactive Service Delivery Starting Before Departure",
      timing: "2 weeks to 24 hours before arrival",
      color: "primary",
      bgGradient: "from-primary/5 to-info/5",
      borderColor: "border-primary/20",
      icon: <Calendar className="w-5 h-5" />,
      businessImpact: {
        costReduction: "$9-10 per check-in front desk operational costs",
        automation: "85%+ AI automation capability for guest inquiries", 
        demand: "54% consumer demand for digital check-in proactively addressed"
      },
      guestValue: "Personalized arrival experience starting before departure",
      tooltip: "Shifts guest services from reactive to proactive, reducing hotel operational overhead while improving satisfaction",
      functionality: [
        {
          feature: "Automatic Room Preference Collection",
          description: "Intelligent pre-arrival surveys adapting based on guest profile and booking type",
          icon: <Settings className="w-6 h-6 text-primary" />,
          implementation: "Leverage existing 1,000,000+ digital check-ins data for pattern recognition"
        },
        {
          feature: "Local Area Recommendations",
          description: "Context-aware suggestions based on guest profile, weather, and local events",
          icon: <MapPin className="w-6 h-6 text-primary" />,
          implementation: "Build on 98.89% customer satisfaction foundation with personalized content"
        },
        {
          feature: "Proactive Check-in Process Preparation",
          description: "Digital key setup and room assignment optimization before arrival",
          icon: <Key className="w-6 h-6 text-primary" />,
          implementation: "Address 54% consumer demand for digital check-in proactively"
        }
      ]
    },
    {
      id: 'arrival',
      title: "Smart Arrival Optimization", 
      subtitle: "Seamless Arrival Without Front Desk Dependency",
      timing: "Day of arrival (6 hours before to 2 hours after check-in)",
      color: "secondary",
      bgGradient: "from-secondary/5 to-accent/5", 
      borderColor: "border-secondary/20",
      icon: <Smartphone className="w-5 h-5" />,
      businessImpact: {
        waitTime: "85% shorter wait times through digital check-in automation",
        costReduction: "15% operational cost reduction in check-in processes",
        adoption: "Improve from 4% to 15-25% digital check-in adoption target"
      },
      guestValue: "Seamless arrival without front desk dependency",
      tooltip: "Addresses the massive gap between 54% consumer demand and 4% actual digital check-in utilization",
      functionality: [
        {
          feature: "Digital Key Activation",
          description: "Immediate room access upon arrival with seamless key management",
          icon: <Key className="w-6 h-6 text-secondary" />,
          implementation: "PWA technology advantage with offline capabilities"
        },
        {
          feature: "Real-time Parking Availability",
          description: "Live parking status and navigation to available spots",
          icon: <Car className="w-6 h-6 text-secondary" />,
          implementation: "50+ technology partner integrations for parking systems"
        },
        {
          feature: "Instant WiFi Credentials",
          description: "Automatic WiFi connection and essential hotel information delivery",
          icon: <Wifi className="w-6 h-6 text-secondary" />,
          implementation: "European GDPR compliance with privacy-first approach"
        }
      ]
    },
    {
      id: 'in-stay',
      title: "In-Stay Revenue Orchestration",
      subtitle: "Contextual Service Delivery Throughout Guest Journey",
      timing: "Throughout guest stay",
      color: "accent",
      bgGradient: "from-accent/5 to-success/5",
      borderColor: "border-accent/20", 
      icon: <TrendingUp className="w-5 h-5" />,
      businessImpact: {
        upselling: "Target 10-20% upselling potential of total guest charges",
        conversion: "Improve from 6.04% industry average to 20%+ top performer upsell rates",
        booking: "Leverage current 5-10% guest booking rate for additional services"
      },
      guestValue: "Effortless access to relevant hotel and local services",
      tooltip: "Research shows €2.5-3.2M annual revenue impact potential for 200-room hotels through optimized digital services",
      functionality: [
        {
          feature: "Contextual Housekeeping Requests",
          description: "Smart service requests based on guest behavior and timing patterns",
          icon: <Settings className="w-6 h-6 text-accent" />,
          implementation: "Deep PMS integration across multiple hotel brands"
        },
        {
          feature: "Intelligent Restaurant Booking",
          description: "Optimal dining slot recommendations with real-time availability",
          icon: <Utensils className="w-6 h-6 text-accent" />,
          implementation: "Customer-driven development approach with 59 features added in 2023"
        },
        {
          feature: "Smart Upsell Recommendations",
          description: "Context-aware offers based on guest behavior patterns and preferences",
          icon: <Sparkles className="w-6 h-6 text-accent" />,
          implementation: "Leverage behavioral analytics from existing digital check-ins"
        }
      ]
    }
  ];

  // Implementation framework data
  const implementationFramework = {
    technicalIntegration: [
      "Leverage existing 50+ technology partner integrations",
      "Use current 1,000,000+ digital check-ins data for pattern recognition", 
      "Build on 98.89% customer satisfaction foundation"
    ],
    successMetrics: [
      "Achieve 25-30% onboarding completion (vs current 19.2% average)",
      "Reach 15-25% digital check-in adoption (vs current 4%)",
      "Improve to 8-12% Day 30 retention (vs current 4.5% average)"
    ]
  };

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">Journey-Stage Intelligence</span><br />
          <span className="text-secondary">for Maximum Engagement</span>
        </h1>
        
        <p className="text-xl text-base-content/80 max-w-4xl mx-auto mb-8">
          Adaptive features that reduce abandonment and increase hotel operational efficiency
        </p>

        {/* Industry Context Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <div className="stats shadow border border-error/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-error text-lg">{industryContext.day30Retention}</div>
              <div className="stat-desc text-xs">Current Day 30 Retention</div>
            </div>
          </div>
          <div className="stats shadow border border-success/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-success text-lg">{industryContext.targetRetention}</div>
              <div className="stat-desc text-xs">Target Retention Rate</div>
            </div>
          </div>
          <div className="stats shadow border border-primary/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-primary text-lg">{industryContext.mobileCheckInPreference}</div>
              <div className="stat-desc text-xs">Prefer Mobile Check-in</div>
            </div>
          </div>
          <div className="stats shadow border border-info/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-info text-lg">{industryContext.contactlessPreference}</div>
              <div className="stat-desc text-xs">Prefer Contactless</div>
            </div>
          </div>
        </div>
      </div>

      {/* Research-Backed Approach */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Research-Backed Strategic Approach</h2>
          <p className="text-lg text-base-content/80 max-w-3xl mx-auto">
            Three strategic features designed to address mobile app retention challenges through contextual intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card bg-base-100 border border-error/20">
            <div className="card-body text-center p-6">
              <Clock className="w-8 h-8 mx-auto mb-2 text-error" />
              <div className="font-bold text-error">Day 1: {industryContext.day1Retention}</div>
              <div className="text-sm text-base-content/70">Industry retention baseline</div>
            </div>
          </div>
          <div className="card bg-base-100 border border-warning/20">
            <div className="card-body text-center p-6">
              <BarChart3 className="w-8 h-8 mx-auto mb-2 text-warning" />
              <div className="font-bold text-warning">Day 7: {industryContext.day7Retention}</div>
              <div className="text-sm text-base-content/70">Weekly engagement drop</div>
            </div>
          </div>
          <div className="card bg-base-100 border border-info/20">
            <div className="card-body text-center p-6">
              <Target className="w-8 h-8 mx-auto mb-2 text-info" />
              <div className="font-bold text-info">Target: {industryContext.targetRetention}</div>
              <div className="text-sm text-base-content/70">Day 30 improvement goal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Strategic Stickiness Features */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Three Strategic Stickiness Features</h2>
        
        {/* Feature Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-8">
          {stickinessFeatures.map((feature, index) => (
            <button 
              key={feature.id}
              className={`btn ${activeFeature === index ? `btn-${feature.color}` : 'btn-outline'} gap-2 flex-1 sm:flex-none`}
              onClick={() => setActiveFeature(index)}
            >
              {feature.icon}
              <span className="hidden sm:inline">{feature.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Feature Display */}
        <div className={`card bg-gradient-to-br ${stickinessFeatures[activeFeature].bgGradient} border-2 ${stickinessFeatures[activeFeature].borderColor} mb-8`}>
          <div className="card-body p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-16 h-16 rounded-xl bg-base-100 flex items-center justify-center border-2 ${stickinessFeatures[activeFeature].borderColor}`}>
                <div className={`text-${stickinessFeatures[activeFeature].color}`}>
                  <div className="w-8 h-8">
                    {React.cloneElement(stickinessFeatures[activeFeature].icon, { className: 'w-8 h-8' })}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{stickinessFeatures[activeFeature].title}</h3>
                <p className="text-lg text-base-content/80 mb-3">{stickinessFeatures[activeFeature].subtitle}</p>
                <div className="flex items-center gap-2 text-base-content/60">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{stickinessFeatures[activeFeature].timing}</span>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Business Impact
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(stickinessFeatures[activeFeature].businessImpact).map(([key, value]) => (
                  <div key={key} className="p-4 bg-base-100 rounded-lg border border-base-300">
                    <div className="font-medium text-sm capitalize mb-1">{key.replace(/([A-Z])/g, ' $1')}</div>
                    <div className="text-sm text-base-content/80">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guest Value */}
            <div className="mb-6">
              <div className="alert alert-success py-3">
                <Users className="w-4 h-4" />
                <div className="text-sm">
                  <div className="font-semibold">Guest Value:</div>
                  <div>{stickinessFeatures[activeFeature].guestValue}</div>
                </div>
              </div>
            </div>

            {/* Functionality Details */}
            <div>
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Core Functionality
              </h4>
              <div className="space-y-4">
                {stickinessFeatures[activeFeature].functionality.map((func, index) => (
                  <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {func.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-base mb-2">{func.feature}</h5>
                        <p className="text-sm text-base-content/80 mb-3">{func.description}</p>
                        <div className="text-xs text-base-content/60 bg-base-200 rounded px-2 py-1">
                          <strong>Implementation:</strong> {func.implementation}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Tooltip */}
        <div className="text-center">
          <div className="tooltip tooltip-info tooltip-top" data-tip={stickinessFeatures[activeFeature].tooltip}>
            <div className="inline-flex items-center gap-2 text-base-content/60 cursor-help">
              <Info className="w-4 h-4" />
              <span className="text-sm">Research Insight Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Framework */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Implementation Framework</h2>
          <div className="tooltip tooltip-info tooltip-top" data-tip="Builds strategically on Straiv's existing technical infrastructure and proven customer satisfaction">
            <p className="text-lg text-base-content/80 max-w-3xl mx-auto cursor-help">
              Strategic approach leveraging Straiv's existing technical advantages and market position
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Integration */}
          <div className="card bg-gradient-to-br from-info/5 to-primary/5 border border-info/20">
            <div className="card-body p-8">
              <h3 className="card-title text-2xl mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-info" />
                Technical Integration
              </h3>
              
              <div className="space-y-4">
                {implementationFramework.technicalIntegration.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="card bg-gradient-to-br from-success/5 to-accent/5 border border-success/20">
            <div className="card-body p-8">
              <h3 className="card-title text-2xl mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-success" />
                Success Metrics
              </h3>
              
              <div className="space-y-4">
                {implementationFramework.successMetrics.map((metric, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Impact Projection */}
      <div className="card bg-gradient-to-r from-accent/10 to-success/10 border border-accent/20">
        <div className="card-body text-center p-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
            <TrendingUp className="w-8 h-8 text-success" />
            Revenue Impact Projection
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary">€2.5-3.2M</div>
              <div className="text-sm font-medium">Annual Revenue Impact</div>
              <div className="text-xs text-base-content/60">200-room hotel potential</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success">20%+</div>
              <div className="text-sm font-medium">Upsell Conversion Rate</div>
              <div className="text-xs text-base-content/60">vs 6.04% industry average</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-info">15-25%</div>
              <div className="text-sm font-medium">Digital Check-in Adoption</div>
              <div className="text-xs text-base-content/60">vs current 4% utilization</div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Navigation */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Strategic Implementation Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <button 
            className="card bg-gradient-to-r from-accent to-info text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/conversion-strategy') : onSectionChange('conversion-strategy')}
          >
            <div className="card-body text-center p-6">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Conversion Strategy</h3>
              <p className="text-sm opacity-80">Optimize onboarding and critical revenue touchpoints</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-info to-success text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/innovation-strategy') : onSectionChange('innovation-strategy')}
          >
            <div className="card-body text-center p-6">
              <Brain className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Innovation Strategy</h3>
              <p className="text-sm opacity-80">AI and voice technology for market differentiation</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-success to-primary text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/implementation-roadmap') : onSectionChange('implementation-roadmap')}
          >
            <div className="card-body text-center p-6">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Implementation Roadmap</h3>
              <p className="text-sm opacity-80">Detailed timeline and resource requirements</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickinessStrategy;