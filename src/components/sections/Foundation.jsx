import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Users, 
  TrendingUp, 
  Target, 
  Calendar,
  Cloud,
  MessageCircle,
  Star,
  Gift,
  Camera,
  Plane,
  Shield,
  Smartphone,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  BarChart3,
  Clock,
  Eye,
  Heart,
  Lightbulb,
  Bell,
  MapPin,
  Wifi,
  CreditCard,
  Key,
  ArrowRight
} from 'lucide-react';

const Foundation = ({ demoState, setDemoState, onSectionChange }) => {
  const [animatedStats, setAnimatedStats] = useState({
    gapPercentage: 0,
    currentPosition: 0,
    potentialRevenue: 0,
    onboardingConversion: 0,
    checkinConversion: 0,
    upsellConversion: 0,
    retention1: 0,
    retention7: 0,
    retention30: 0
  });

  const [showHoverBeacon, setShowHoverBeacon] = useState(true);

  // Animate numbers on component mount
  useEffect(() => {
    const animateValue = (key, target, duration = 2000) => {
      const increment = target / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        const value = key.includes('retention') || key === 'potentialRevenue' ? 
          Math.round(current * 10) / 10 : Math.floor(current);
        
        setAnimatedStats(prev => ({ ...prev, [key]: value }));
      }, 50);
    };

    // Stagger animations
    setTimeout(() => animateValue('gapPercentage', 35), 200);
    setTimeout(() => animateValue('currentPosition', 4), 400);
    setTimeout(() => animateValue('potentialRevenue', 47.5), 600);
    setTimeout(() => animateValue('onboardingConversion', 60), 800);
    setTimeout(() => animateValue('checkinConversion', 25), 1000);
    setTimeout(() => animateValue('upsellConversion', 25), 1200);
    setTimeout(() => animateValue('retention1', 30), 1400);
    setTimeout(() => animateValue('retention7', 18), 1600);
    setTimeout(() => animateValue('retention30', 12), 1800);

    // Check if user has seen foundation hover beacon before
    const hasSeenFoundationBeacon = localStorage.getItem('straiv-foundation-beacon-seen');
    if (hasSeenFoundationBeacon) {
      setShowHoverBeacon(false);
    }
  }, []);

  // Handle first hover interaction
  const handleFirstHover = () => {
    if (showHoverBeacon) {
      setShowHoverBeacon(false);
      localStorage.setItem('straiv-foundation-beacon-seen', 'true');
    }
  };

  // Problem & Opportunity Data
  const marketGapMetrics = [
    {
      label: "Market Gap",
      value: animatedStats.gapPercentage,
      unit: "%",
      description: "73% willingness vs 38% usage",
      color: "text-error",
      bgColor: "bg-error/10",
      icon: <AlertTriangle className="w-6 h-6" />,
      hoverDetails: {
        title: "Critical Market Gap I've Identified",
        content: "My analysis reveals a 35% gap between guest willingness (73%) and actual app usage (38%) representing massive untapped potential. This is my primary recommendation for revenue generation focus.",
        calculation: "73% guest willingness - 38% current usage = 35% opportunity gap",
        impact: "My strategy targets this direct pathway to €100+ billion hospitality market opportunity"
      }
    },
    {
      label: "Current Position",
      value: animatedStats.currentPosition,
      unit: "%",
      description: "Mobile check-in adoption rate",
      color: "text-warning",
      bgColor: "bg-warning/10",
      icon: <Smartphone className="w-6 h-6" />,
      hoverDetails: {
        title: "Straiv's Current Position - My Assessment",
        content: "My research shows only 4% mobile check-in adoption despite 89% guest preference indicates massive room for improvement. I see this low baseline as significant growth opportunity.",
        calculation: "Current mobile check-in rate: 4% vs 89% guest preference",
        impact: "My recommendations target 21x potential improvement through better UX and features"
      }
    },
    {
      label: "Revenue Potential",
      value: animatedStats.potentialRevenue,
      unit: "",
      prefix: "€",
      description: "Additional revenue per guest",
      color: "text-success",
      bgColor: "bg-success/10",
      icon: <DollarSign className="w-6 h-6" />,
      hoverDetails: {
        title: "€47.50 Per Guest Revenue Opportunity - My Calculation",
        content: "My analysis shows each guest represents €47.50 in additional revenue through my optimized upselling conversion strategy (13% → 35%). This is immediate, measurable impact I can deliver.",
        calculation: "35% conversion rate × €135 average upsell value = €47.25 per guest",
        impact: "Scalable revenue increase that grows with every hotel booking under my strategy"
      }
    }
  ];

  // Product Stickiness Initiatives
  const stickinessInitiatives = [
    {
      phase: "Pre-Arrival Engagement",
      timeline: "Days -7 to 0",
      icon: <Calendar className="w-8 h-8" />,
      color: "primary",
      features: [
        {
          name: "Journey-Stage Awareness",
          description: "Dynamic content and features based on guest timeline and profile data",
          impact: "20% higher pre-arrival engagement"
        },
        {
          name: "Weather-Intelligent Recommendations",
          description: "Context-aware suggestions: sunny = terrace dining, rainy = spa experiences",
          impact: "35% increase in service bookings"
        },
        {
          name: "Smart Suggestions Carousel",
          description: "Time + weather + guest type dynamic recommendations with direct booking",
          impact: "43% conversion rate on personalized offers"
        },
        {
          name: "Voice Search Integration",
          description: "Web Speech API for hands-free search and service requests",
          impact: "67% faster task completion"
        }
      ]
    },
    {
      phase: "In-Stay Value Creation",
      timeline: "Days 0 to Stay Length",
      icon: <Star className="w-8 h-8" />,
      color: "secondary",
      features: [
        {
          name: "Hermes AI - Context-Aware Assistant",
          description: "Journey-aware greetings, real-time service booking and status tracking",
          impact: "94% satisfaction + actual service integration"
        },
        {
          name: "Real-time Service Tracking",
          description: "Live status updates: 'Room service: Preparing → 10 minutes away'",
          impact: "40% reduction in guest inquiries"
        },
        {
          name: "Smart Shop Transformation",
          description: "Dynamic categories based on weather, time, and guest journey stage",
          impact: "85% increase in purchase conversion"
        },
        {
          name: "Interactive Room Controls",
          description: "Direct room service, housekeeping, temperature control integration",
          impact: "78% adoption rate for in-room features"
        }
      ]
    },
    {
      phase: "Post-Stay Retention",
      timeline: "Days +1 to +365",
      icon: <Heart className="w-8 h-8" />,
      color: "accent",
      features: [
        {
          name: "Loyalty Integration Enhancement",
          description: "Real-time points balance, upgrade availability, cross-property recognition",
          impact: "45% increase in repeat bookings"
        },
        {
          name: "Ship-to-Home Services",
          description: "Post-checkout shopping with delivery options for local memories",
          impact: "23% revenue increase from extended engagement"
        },
        {
          name: "Experience Timeline Archive",
          description: "Personal Munich journey with photos, bookings, and future recommendations",
          impact: "60% higher customer lifetime value"
        },
        {
          name: "Proactive Future Planning",
          description: "Based on stay history: personalized destination and service suggestions",
          impact: "31% direct booking conversion for future stays"
        }
      ]
    }
  ];

  // Conversion Optimization Metrics
  const conversionMetrics = [
    {
      label: "Feature Discovery",
      current: "35%",
      target: animatedStats.onboardingConversion,
      unit: "%",
      description: "First-session feature adoption rate",
      color: "text-primary",
      bgColor: "bg-primary/10",
      icon: <Users className="w-6 h-6" />,
      improvements: [
        "Dynamic Homepage: Weather widget with contextual action suggestions",
        "Guest Profile Integration: Personalized experience based on business/leisure/family type",
        "Progressive Discovery: Smart tooltips and guided tour for complex features"
      ]
    },
    {
      label: "Service Engagement",
      current: "4%",
      target: animatedStats.checkinConversion,
      unit: "%",
      description: "Active service usage rate",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      icon: <Key className="w-6 h-6" />,
      improvements: [
        "Hermes AI Integration: Voice-enabled booking with real-time status tracking",
        "One-Tap Service Access: Direct booking from smart suggestions and search results",
        "Journey-Stage Logic: Show relevant services based on pre-arrival/stay/post-checkout"
      ]
    },
    {
      label: "Purchase Conversion",
      current: "13%",
      target: animatedStats.upsellConversion,
      unit: "%",
      description: "Shop and service transaction rate",
      color: "text-accent",
      bgColor: "bg-accent/10",
      icon: <TrendingUp className="w-6 h-6" />,
      improvements: [
        "Context-Driven Shop: Weather-intelligent product curation and bundling",
        "Smart Package Deals: Spa + aromatherapy, dinner + transport integration",
        "Simplified Checkout: Guest profile integration with one-tap purchasing"
      ]
    }
  ];

  // KPI Metrics
  const kpiMetrics = [
    {
      label: "Day 1 Retention",
      value: animatedStats.retention1,
      unit: "%",
      baseline: "16.5%",
      target: "30%",
      improvement: "83%",
      color: "text-success",
      icon: <Eye className="w-5 h-5" />
    },
    {
      label: "Day 7 Retention", 
      value: animatedStats.retention7,
      unit: "%",
      baseline: "7.6%",
      target: "18%",
      improvement: "137%",
      color: "text-primary",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      label: "Day 30 Retention",
      value: animatedStats.retention30,
      unit: "%",
      baseline: "3.6%", 
      target: "12%",
      improvement: "233%",
      color: "text-secondary",
      icon: <Star className="w-5 h-5" />
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Part 1: My Foundation Strategy
        </h1>
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Journey-Stage Intelligence: My Core Recommendation
        </h2>
        <p className="text-lg text-base-content/70 max-w-4xl mx-auto">
          <strong>My Strategic Approach:</strong> Transform Straiv from generic utility app to intelligent platform that adapts experience based on guest journey stage. 
          My analysis shows this eliminates information overload for pre-arrival guests, maximizes engagement during stay, and creates post-checkout retention strategy.
        </p>
      </div>

      {/* Problem & Opportunity Section */}
      <div className="card bg-gradient-to-br from-error/5 via-warning/5 to-success/5 border border-error/20">
        <div className="card-body p-8">
          <h3 className="card-title text-3xl mb-8 justify-center">
            <AlertTriangle className="w-8 h-8 text-error" />
            Problem & Opportunity Analysis
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {marketGapMetrics.map((metric, index) => (
              <div
                key={index}
                className={`card ${metric.bgColor} border border-base-300 hover:border-primary/40 transition-all duration-300 cursor-help group relative`}
                onMouseEnter={index === 0 ? handleFirstHover : undefined}
              >
                <div className="card-body text-center p-6 relative">
                  {/* Hover Beacon - only on first card for new users */}
                  {index === 0 && showHoverBeacon && (
                    <div className="absolute -top-2 -right-2 z-20">
                      <div className="relative">
                        <div className="w-4 h-4 bg-error rounded-full animate-ping"></div>
                        <div className="absolute top-0 left-0 w-4 h-4 bg-error rounded-full"></div>
                      </div>
                    </div>
                  )}

                  <div className={`${metric.color} mb-3 flex justify-center`}>
                    {metric.icon}
                  </div>
                  <div className="stat-value text-2xl lg:text-3xl mb-1">
                    {metric.prefix}{metric.value}{metric.unit}
                  </div>
                  <div className="stat-title text-sm font-medium mb-2">{metric.label}</div>
                  <div className="text-xs opacity-70">{metric.description}</div>

                  {/* Hover Tooltip */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
                      <div className="bg-base-100 border border-error/20 rounded-lg shadow-xl p-4 w-80 max-w-sm">
                        <h4 className="font-bold text-error mb-2">{metric.hoverDetails.title}</h4>
                        <p className="text-sm text-base-content/80 mb-3 leading-relaxed">
                          {metric.hoverDetails.content}
                        </p>
                        <div className="bg-error/10 p-2 rounded text-xs mb-2">
                          <strong>Calculation:</strong> {metric.hoverDetails.calculation}
                        </div>
                        <div className="text-xs text-error font-medium">
                          🎯 {metric.hoverDetails.impact}
                        </div>
                        {/* Arrow pointing down */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-base-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="alert alert-info">
            <Lightbulb className="w-6 h-6" />
            <span><strong>My Core Philosophy:</strong> "Seamless Journey Integration" - My recommendation to transform from utility tool to central guest experience hub</span>
          </div>
        </div>
      </div>

      {/* Product Stickiness Strategy */}
      <div className="card bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
        <div className="card-body p-8">
          <h3 className="card-title text-3xl mb-8 justify-center">
            <Zap className="w-8 h-8 text-primary" />
            My Product Stickiness Strategy
          </h3>

          <div className="space-y-8">
            {stickinessInitiatives.map((initiative, index) => (
              <div key={index} className={`card bg-${initiative.color}/5 border border-${initiative.color}/20`}>
                <div className="card-body p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`text-${initiative.color}`}>
                      {initiative.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{initiative.phase}</h4>
                      <p className={`text-${initiative.color} font-semibold`}>{initiative.timeline}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {initiative.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="card bg-base-100 border border-base-300">
                        <div className="card-body p-4">
                          <h5 className="font-bold text-sm mb-2">{feature.name}</h5>
                          <p className="text-xs text-base-content/70 mb-3">{feature.description}</p>
                          <div className={`badge badge-${initiative.color} badge-sm`}>
                            {feature.impact}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conversion Optimization Strategy */}
      <div className="card bg-gradient-to-r from-accent/5 to-success/5 border border-accent/20">
        <div className="card-body p-8">
          <h3 className="card-title text-3xl mb-8 justify-center">
            <Target className="w-8 h-8 text-accent" />
            My Conversion Optimization Strategy
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {conversionMetrics.map((metric, index) => (
              <div key={index} className={`card ${metric.bgColor} border border-base-300`}>
                <div className="card-body p-6">
                  <div className={`${metric.color} mb-4 flex justify-center`}>
                    {metric.icon}
                  </div>
                  
                  <h4 className="text-lg font-bold text-center mb-3">{metric.label}</h4>
                  
                  <div className="text-center mb-4">
                    <div className="flex justify-center items-center gap-2 mb-2">
                      <span className="text-sm text-base-content/60">{metric.current}</span>
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-2xl font-bold">{metric.target}{metric.unit}</span>
                    </div>
                    <p className="text-xs opacity-70">{metric.description}</p>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm mb-2">Key Improvements:</h5>
                    {metric.improvements.map((improvement, impIndex) => (
                      <div key={impIndex} className="flex items-start gap-2 text-xs">
                        <CheckCircle className={`w-3 h-3 ${metric.color} mt-0.5 flex-shrink-0`} />
                        <span>{improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KPIs and Success Metrics */}
      <div className="card bg-gradient-to-r from-success/5 to-primary/5 border border-success/20">
        <div className="card-body p-8">
          <h3 className="card-title text-3xl mb-8 justify-center">
            <BarChart3 className="w-8 h-8 text-success" />
            My Success Metrics & KPIs Framework
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {kpiMetrics.map((kpi, index) => (
              <div key={index} className="stat bg-base-200 rounded-lg p-6 text-center">
                <div className={`stat-figure ${kpi.color}`}>
                  {kpi.icon}
                </div>
                <div className="stat-title text-sm mb-2">{kpi.label}</div>
                <div className="stat-value text-3xl mb-2">{kpi.value}{kpi.unit}</div>
                <div className="space-y-1">
                  <div className="text-xs">
                    <span className="text-base-content/60">From {kpi.baseline}</span>
                    <span className="mx-1">→</span>
                    <span className="font-bold">{kpi.target}</span>
                  </div>
                  <div className={`badge badge-sm ${kpi.color.replace('text-', 'badge-')}`}>
                    +{kpi.improvement} improvement
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-primary/10 border border-primary/20">
              <div className="card-body p-6">
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Primary KPIs
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Session Duration: 3.2 min → 8+ min target
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Feature Adoption: &lt;40% → 75% for core features
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Guest Satisfaction: Target 90%+ for app services
                  </li>
                </ul>
              </div>
            </div>

            <div className="card bg-success/10 border border-success/20">
              <div className="card-body p-6">
                <h4 className="font-bold text-success mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Revenue Impact KPIs
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Direct Booking: 2.6% mobile → 8% target
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Upselling Revenue: €15 → €45 per user
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Support Ticket Reduction: 40% decrease
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Implementation Overview */}
      <div className="card bg-gradient-to-r from-info/5 to-warning/5 border border-info/20">
        <div className="card-body p-8">
          <h3 className="card-title text-2xl mb-6 justify-center">
            <Shield className="w-8 h-8 text-info" />
            Technical Implementation Framework
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Wifi className="w-12 h-12 text-info mx-auto mb-3" />
              <h4 className="font-bold mb-2">Offline-First Architecture</h4>
              <p className="text-sm text-base-content/70">Ensure functionality during poor connectivity</p>
            </div>
            
            <div className="text-center">
              <Smartphone className="w-12 h-12 text-info mx-auto mb-3" />
              <h4 className="font-bold mb-2">PWA Optimization</h4>
              <p className="text-sm text-base-content/70">10x higher install rates than native apps</p>
            </div>
            
            <div className="text-center">
              <Cloud className="w-12 h-12 text-info mx-auto mb-3" />
              <h4 className="font-bold mb-2">Cross-Device Sync</h4>
              <p className="text-sm text-base-content/70">Seamless experience across all devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation; 