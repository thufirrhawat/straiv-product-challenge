import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Target, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Star,
  ShoppingBag,
  Wifi,
  Coffee,
  Car,
  Utensils,
  Clock,
  BarChart3
} from 'lucide-react';

const BusinessImpact = ({ demoState, setDemoState, onSectionChange }) => {
  const [animatedMetrics, setAnimatedMetrics] = useState({
    currentUpselling: 0,
    targetUpselling: 0,
    revenuePerGuest: 0,
    revenuePerStay: 0,
    conversionLift: 0,
    totalImpact: 0
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
        
        // Handle decimals for specific metrics
        const value = key === 'revenuePerGuest' || key === 'revenuePerStay' ? 
          Math.round(current * 10) / 10 : Math.floor(current);
        
        setAnimatedMetrics(prev => ({ ...prev, [key]: value }));
      }, 50);
    };

    // Stagger animations for smooth effect
    setTimeout(() => animateValue('currentUpselling', 13), 200);
    setTimeout(() => animateValue('targetUpselling', 35), 400);
    setTimeout(() => animateValue('revenuePerGuest', 47.5), 600);
    setTimeout(() => animateValue('revenuePerStay', 142.8), 800);
    setTimeout(() => animateValue('conversionLift', 169), 1000);
    setTimeout(() => animateValue('totalImpact', 23.4), 1200);

    // Check if user has seen business impact hover beacon before
    const hasSeenBusinessBeacon = localStorage.getItem('straiv-business-beacon-seen');
    if (hasSeenBusinessBeacon) {
      setShowHoverBeacon(false);
    }
  }, []);

  // Handle first hover interaction
  const handleFirstHover = () => {
    if (showHoverBeacon) {
      setShowHoverBeacon(false);
      localStorage.setItem('straiv-business-beacon-seen', 'true');
    }
  };

  // Journey-Stage KPI Metrics
  const journeyKPIs = [
    {
      label: "Session Duration",
      value: animatedMetrics.currentUpselling,
      unit: " min",
      prefix: "",
      description: "Average app interaction time",
      color: "text-warning",
      bgColor: "bg-warning/10",
      icon: <Clock className="w-6 h-6" />,
      hoverDetails: {
        title: "Session Duration: 3.2 → 8+ Minutes",
        content: "Journey-stage intelligence creates more relevant, valuable interactions. Weather widgets, contextual suggestions, and real-time service integration keep users engaged significantly longer.",
        calculation: "Current: 3.2 minutes → Target: 8+ minutes (150% improvement)",
        impact: "Higher engagement leads to 75% increase in feature adoption and service bookings"
      }
    },
    {
      label: "Feature Adoption",
      value: animatedMetrics.targetUpselling,
      unit: "%",
      description: "Core features actively used",
      color: "text-success",
      bgColor: "bg-success/10",
      icon: <Target className="w-6 h-6" />,
      hoverDetails: {
        title: "Feature Adoption: <40% → 75%",
        content: "Context-aware feature discovery and progressive onboarding significantly improve adoption. Journey-stage logic shows relevant features at optimal moments.",
        calculation: "Current: <40% → Target: 75% of core features actively used",
        impact: "Better feature utilization drives engagement and service conversion"
      }
    },
    {
      label: "Daily Active Users",
      value: animatedMetrics.revenuePerGuest,
      unit: "%",
      description: "Of checked-in guests using app daily",
      color: "text-primary",
      bgColor: "bg-primary/10",
      icon: <Users className="w-6 h-6" />,
      hoverDetails: {
        title: "Daily Active Users: Target 35%",
        content: "Journey-stage awareness creates compelling daily use cases. Pre-arrival planning, in-stay services, and post-checkout engagement drive sustained usage.",
        calculation: "Target: 35% of checked-in guests use app daily",
        impact: "Consistent engagement creates multiple revenue opportunities per stay"
      }
    },
    {
      label: "Service Integration",
      value: animatedMetrics.revenuePerStay,
      unit: "%",
      description: "In-app vs front desk requests",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      icon: <Star className="w-6 h-6" />,
      hoverDetails: {
        title: "Service Integration Success Rate",
        content: "Real-time service tracking, Hermes AI integration, and seamless booking flows redirect guest requests from front desk to profitable in-app channels.",
        calculation: "Target: 60% reduction in front desk service inquiries",
        impact: "Staff efficiency gains and higher service conversion rates"
      }
    }
  ];

  // Practical Implementation Metrics
  const implementationMetrics = [
    {
      label: "Conversion Lift",
      value: animatedMetrics.conversionLift,
      unit: "%",
      description: "Relative improvement over baseline",
      color: "text-accent",
      bgColor: "bg-accent/10",
      icon: <TrendingUp className="w-6 h-6" />,
      hoverDetails: {
        title: "169% Conversion Improvement",
        content: "Moving from 13% to 35% represents a 169% relative improvement. This dramatic but achievable lift comes from AI personalization, optimal timing, and removing friction from the booking process.",
        calculation: "(35% - 13%) ÷ 13% × 100 = 169% improvement",
        impact: "Significant competitive advantage in hotel revenue optimization"
      }
    },
    {
      label: "Monthly Impact",
      value: animatedMetrics.totalImpact,
      unit: "K",
      prefix: "€",
      description: "Additional revenue per 1000 stays",
      color: "text-success",
      bgColor: "bg-success/10",
      icon: <DollarSign className="w-6 h-6" />,
      hoverDetails: {
        title: "€23.4K Monthly Revenue Boost",
        content: "For a hotel with 1,000 stays per month, the improved upselling generates an additional €23,400 in monthly revenue. This scales directly with hotel size and occupancy rates.",
        calculation: "€142.80 per stay × 1,000 stays × (35%-13%)/35% = €23,400",
        impact: "Scalable revenue increase that grows with hotel business"
      }
    }
  ];

  // Upselling Categories with Revenue Potential
  const upsellingCategories = [
    {
      service: "Room Upgrades",
      currentRate: "8%",
      targetRate: "25%",
      avgValue: "€35",
      icon: <Wifi className="w-6 h-6" />,
      color: "primary"
    },
    {
      service: "Dining Packages",
      currentRate: "12%",
      targetRate: "35%",
      avgValue: "€28",
      icon: <Utensils className="w-6 h-6" />,
      color: "secondary"
    },
    {
      service: "Spa & Wellness",
      currentRate: "5%",
      targetRate: "20%",
      avgValue: "€65",
      icon: <Star className="w-6 h-6" />,
      color: "accent"
    },
    {
      service: "Transportation",
      currentRate: "15%",
      targetRate: "40%",
      avgValue: "€22",
      icon: <Car className="w-6 h-6" />,
      color: "success"
    },
    {
      service: "Late Checkout",
      currentRate: "20%",
      targetRate: "60%",
      avgValue: "€15",
      icon: <Clock className="w-6 h-6" />,
      color: "warning"
    },
    {
      service: "Minibar & Room Service",
      currentRate: "18%",
      targetRate: "45%",
      avgValue: "€18",
      icon: <Coffee className="w-6 h-6" />,
      color: "info"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">

        <h1 className="text-4xl font-bold text-base-content mb-4">
          KPIs & Success Framework
        </h1>
        <h2 className="text-2xl font-semibold text-success mb-6">
          Comprehensive measurement framework for journey-stage intelligence
        </h2>
        <p className="text-lg text-base-content/70 max-w-4xl mx-auto">
          Track engagement across guest journey stages, measure conversion optimization impact, and monitor 
          business results through leading and supporting indicators with real-time dashboards.
        </p>
      </div>

      {/* Journey-Stage KPI Metrics */}
      <div className="card bg-gradient-to-br from-success/5 via-primary/5 to-secondary/5 border border-success/20">
        <div className="card-body p-8">
          <h3 className="card-title text-2xl mb-8 justify-center">
            <BarChart3 className="w-8 h-8 text-success" />
            Journey-Stage KPI Metrics
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyKPIs.map((metric, index) => (
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
                        <div className="w-4 h-4 bg-success rounded-full animate-ping"></div>
                        <div className="absolute top-0 left-0 w-4 h-4 bg-success rounded-full"></div>
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
                      <div className="bg-base-100 border border-success/20 rounded-lg shadow-xl p-4 w-80 max-w-sm">
                        <h4 className="font-bold text-success mb-2">{metric.hoverDetails.title}</h4>
                        <p className="text-sm text-base-content/80 mb-3 leading-relaxed">
                          {metric.hoverDetails.content}
                        </p>
                        <div className="bg-success/10 p-2 rounded text-xs mb-2">
                          <strong>Calculation:</strong> {metric.hoverDetails.calculation}
                        </div>
                        <div className="text-xs text-success font-medium">
                          💡 {metric.hoverDetails.impact}
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
        </div>
      </div>

      {/* Implementation Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {implementationMetrics.map((metric, index) => (
          <div
            key={index}
            className={`card ${metric.bgColor} border border-base-300 hover:border-primary/40 transition-all duration-300 cursor-help group relative`}
          >
            <div className="card-body text-center p-8 relative">
              <div className={`${metric.color} mb-4 flex justify-center`}>
                {metric.icon}
              </div>
              <div className="stat-value text-4xl mb-2">
                {metric.prefix}{metric.value}{metric.unit}
              </div>
              <div className="stat-title text-lg font-medium mb-2">{metric.label}</div>
              <div className="text-sm opacity-70">{metric.description}</div>

              {/* Hover Tooltip */}
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
                  <div className="bg-base-100 border border-primary/20 rounded-lg shadow-xl p-4 w-80 max-w-sm">
                    <h4 className="font-bold text-primary mb-2">{metric.hoverDetails.title}</h4>
                    <p className="text-sm text-base-content/80 mb-3 leading-relaxed">
                      {metric.hoverDetails.content}
                    </p>
                    <div className="bg-primary/10 p-2 rounded text-xs mb-2">
                      <strong>Calculation:</strong> {metric.hoverDetails.calculation}
                    </div>
                    <div className="text-xs text-primary font-medium">
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

      {/* Upselling Categories Breakdown */}
      <div className="card bg-gradient-to-r from-accent/5 to-warning/5 border border-accent/20">
        <div className="card-body p-8">
          <h3 className="card-title text-2xl mb-8 justify-center">
            <ShoppingBag className="w-8 h-8 text-accent" />
            Upselling Revenue Categories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upsellingCategories.map((category, index) => (
              <div key={index} className={`card bg-${category.color}/5 border border-${category.color}/20`}>
                <div className="card-body p-6">
                  <div className={`text-${category.color} mb-3 flex justify-center`}>
                    {category.icon}
                  </div>
                  <h4 className="font-bold text-center mb-3">{category.service}</h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Current:</span>
                      <span className="font-medium">{category.currentRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Target:</span>
                      <span className={`font-bold text-${category.color}`}>{category.targetRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg Value:</span>
                      <span className="font-medium">{category.avgValue}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-base-300">
                    <div className="text-center">
                      <div className={`text-lg font-bold text-${category.color}`}>
                        +{((parseInt(category.targetRate) - parseInt(category.currentRate)) / parseInt(category.currentRate) * 100).toFixed(0)}%
                      </div>
                      <div className="text-xs opacity-70">improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assignment Alignment Summary */}
      <div className="card bg-gradient-to-r from-primary/5 to-success/5 border border-primary/20">
        <div className="card-body p-8">
          <h3 className="card-title text-2xl mb-6 justify-center">
            <Award className="w-8 h-8 text-primary" />
            Assignment Objective Alignment
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">€47.50</div>
              <div className="text-sm font-medium mb-2">Per Guest Revenue</div>
              <div className="text-xs opacity-70">Measurable immediate impact</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">13% → 35%</div>
              <div className="text-sm font-medium mb-2">Realistic Improvement</div>
              <div className="text-xs opacity-70">Ambitious but achievable</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Day 1</div>
              <div className="text-sm font-medium mb-2">Implementation Impact</div>
              <div className="text-xs opacity-70">Immediate revenue tracking</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-center leading-relaxed">
              <strong>Practical Focus:</strong> This approach delivers measurable revenue impact from day one of implementation, 
              with realistic targets that hotels can track per guest and per stay. The 13% to 35% improvement is ambitious 
              but achievable through AI-driven personalization and optimal timing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessImpact; 