import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Users,
  Smartphone,
  Brain,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  DollarSign,
  Zap,
  Globe,
  Award,
  Clock,
  Shield,
  Lightbulb
} from 'lucide-react';

const Overview = ({ demoState, setDemoState, onSectionChange }) => {
  const [animatedStats, setAnimatedStats] = useState({
    willingness: 0,
    usage: 0,
    gap: 0,
    market: 0,
    retention: 0
  });

  const [showHoverBeacon, setShowHoverBeacon] = useState(true);
  const [showImpactBeacon, setShowImpactBeacon] = useState(true);

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
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    };

    // Stagger animations
    setTimeout(() => animateValue('willingness', 73), 200);
    setTimeout(() => animateValue('usage', 38), 400);
    setTimeout(() => animateValue('gap', 35), 600);
    setTimeout(() => animateValue('market', 100), 800);
    setTimeout(() => animateValue('retention', 3.6), 1000);

    // Check if user has seen hover beacon before
    const hasSeenHoverBeacon = localStorage.getItem('straiv-hover-beacon-seen');
    if (hasSeenHoverBeacon) {
      setShowHoverBeacon(false);
    }

    // Check if user has seen impact dashboard beacon before
    const hasSeenImpactBeacon = localStorage.getItem('straiv-impact-beacon-seen');
    if (hasSeenImpactBeacon) {
      setShowImpactBeacon(false);
    }
  }, []);

  // Handle first hover interaction
  const handleFirstHover = () => {
    if (showHoverBeacon) {
      setShowHoverBeacon(false);
      localStorage.setItem('straiv-hover-beacon-seen', 'true');
    }
  };

  // Handle first impact dashboard hover interaction
  const handleFirstImpactHover = () => {
    if (showImpactBeacon) {
      setShowImpactBeacon(false);
      localStorage.setItem('straiv-impact-beacon-seen', 'true');
    }
  };

  const executiveSummary = {
    challenge: "My analysis shows that Straiv currently treats all users the same regardless of journey stage, causing information overload for pre-arrival guests, missed engagement opportunities during stay, and zero post-checkout retention strategy.",
    opportunity: "I've identified a €100+ billion hospitality app market opportunity through Journey-Stage Intelligence approach. My recommendation: transform from basic utility to intelligent platform that adapts experience based on guest context and timeline.",
    approach: "I propose implementing Journey-Stage Intelligence that dynamically adapts the entire app experience: pre-arrival anticipation building, in-stay service integration, and post-checkout memory preservation driving future bookings."
  };

  const keyMetrics = [
    {
      label: "Guest Willingness",
      value: animatedStats.willingness,
      unit: "%",
      description: "of guests express willingness to download hotel apps",
      color: "text-success",
      bgColor: "bg-success/10",
      icon: <Users className="w-6 h-6" />,
      hoverDetails: {
        title: "Guest Willingness Explained",
        content: "Research shows that 73% of hotel guests express willingness to download and use hotel apps when they provide clear value. This represents significant demand for quality digital hotel experiences.",
        source: "Industry research data from hospitality surveys"
      }
    },
    {
      label: "Current Usage",
      value: animatedStats.usage,
      unit: "%",
      description: "of guests currently use hotel apps",
      color: "text-warning",
      bgColor: "bg-warning/10",
      icon: <Smartphone className="w-6 h-6" />,
      hoverDetails: {
        title: "Current Usage Reality",
        content: "Despite high willingness, only 38% of guests actually use hotel apps today. This low adoption is due to poor user experiences, broken functionality, and lack of meaningful value delivery.",
        source: "Current market usage statistics from hotel industry reports"
      }
    },
    {
      label: "Opportunity Gap",
      value: animatedStats.gap,
      unit: "%",
      description: "point gap representing untapped potential",
      color: "text-error",
      bgColor: "bg-error/10",
      icon: <Target className="w-6 h-6" />,
      hoverDetails: {
        title: "The 35% Opportunity Gap",
        content: "The difference (73% - 38% = 35%) represents massive untapped potential. These are guests who WANT to use hotel apps but currently don't due to poor experiences, friction, or lack of value.",
        source: "Calculated from willingness vs. usage gap analysis"
      }
    },
    {
      label: "Market Size",
      value: animatedStats.market,
      unit: "B+",
      prefix: "€",
      description: "billion hospitality app market opportunity",
      color: "text-primary",
      bgColor: "bg-primary/10",
      icon: <DollarSign className="w-6 h-6" />,
      hoverDetails: {
        title: "€100+ Billion Market Opportunity",
        content: "The global hospitality app market represents over €100 billion in opportunity with only 11% hotel penetration currently. This creates massive growth potential for innovative technology platforms.",
        source: "Hospitality technology market analysis and industry forecasts"
      }
    }
  ];

  const strategicPillars = [
    {
      title: "Part 1: Foundation",
      subtitle: "Journey-Stage Intelligence",
      description: "My core recommendation: Context-aware experience design that adapts to guest timeline with pre-arrival anticipation, in-stay service integration, and post-checkout retention strategies",
      icon: <Zap className="w-8 h-8" />,
      color: "primary",
      items: ["Pre-Arrival Engagement", "In-Stay Value Creation", "Post-Checkout Retention"]
    },
    {
      title: "Part 2: Innovation",
      subtitle: "AI & Contextual Features", 
      description: "My innovation strategy: Hermes AI rebuild, weather-intelligence integration, voice interface, and predictive service recommendations for competitive differentiation",
      icon: <Brain className="w-8 h-8" />,
      color: "secondary",
      items: ["Intelligent Assistant", "Context Awareness", "Predictive Features"]
    },
    {
      title: "Implementation",
      subtitle: "Priority Matrix & Timeline",
      description: "My recommended implementation roadmap: Quick wins (0-3 months), medium-term impact (3-9 months), and long-term transformation (9-18 months) for maximum business value",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "accent",
      items: ["Performance Fixes", "Journey Intelligence", "Ecosystem Integration"]
    },
    {
      title: "Business Impact",
      subtitle: "KPIs & Success Framework",
      description: "My measurement approach: Journey-stage specific metrics, conversion optimization tracking, and comprehensive success framework with clear revenue attribution",
      icon: <Award className="w-8 h-8" />,
      color: "success",
      items: ["Engagement Metrics", "Conversion Tracking", "Revenue Attribution"]
    }
  ];

  const liveKPIs = [
    {
      metric: "28% → 60%",
      label: "Onboarding Conversion",
      description: "Journey-stage intelligent engagement",
      trend: "+114%",
      icon: <Target className="w-5 h-5" />,
      hoverDetails: {
        title: "Journey-Stage Intelligence Impact",
        content: "Transform onboarding from generic flow to context-aware experience. Speed optimization, progressive onboarding, and immediate value delivery based on guest timeline and profile.",
        calculation: "(60% - 28%) ÷ 28% × 100 = 114% improvement",
        impact: "2x faster registration completion with 35% reduced abandonment"
      }
    },
    {
      metric: "4% → 25%",
      label: "Check-in Adoption",
      description: "Frictionless mobile check-in",
      trend: "+525%",
      icon: <DollarSign className="w-5 h-5" />,
      hoverDetails: {
        title: "Mobile Check-in Transformation",
        content: "One-page check-in process with real-time room assignment, digital key activation, and time-aware CTA optimization. Skip front desk entirely with immediate room access.",
        calculation: "(25% - 4%) ÷ 4% × 100 = 525% improvement",
        impact: "60% reduction in front desk inquiries and 8min → 2min processing time"
      }
    },
    {
      metric: "13% → 25%",
      label: "Purchase Conversion",
      description: "Context-aware product curation",
      trend: "+92%",
      icon: <Users className="w-5 h-5" />,
      hoverDetails: {
        title: "Smart Commerce Integration",
        content: "Weather-intelligent product curation, service-product bundling, and one-tap purchasing. Dynamic categories based on journey stage, weather, and guest profile.",
        calculation: "(25% - 13%) ÷ 13% × 100 = 92% improvement",
        impact: "€15 → €45 revenue per user through contextual recommendations"
      }
    },
    {
      metric: "3.2 → 8+",
      label: "Session Duration",
      description: "Minutes per app interaction",
      trend: "+150%",
      icon: <TrendingUp className="w-5 h-5" />,
      hoverDetails: {
        title: "Deep Engagement Through Context",
        content: "Journey-stage awareness creates relevant, valuable interactions. Weather widgets, Hermes AI integration, and real-time service tracking keep users engaged longer.",
        calculation: "(8 - 3.2) ÷ 3.2 × 100 = 150% improvement",
        impact: "Higher feature adoption and 75% increase in ancillary service bookings"
      }
    }
  ];

  const competitiveAdvantages = [
    "PWA-first approach: 10x higher install rates",
    "AI-driven personalization: 85% automation",
    "Voice interface: 12 languages supported",
    "Real-time sync: <50ms latency"
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section - Executive Summary */}
      <div className="hero bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl border border-primary/10">
        <div className="hero-content text-center py-16 px-8">
          <div className="max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-primary">Product Challenge:</span><br />
              <span className="text-secondary">Bridging the</span><br />
              <span className="text-accent">73% → 38% Gap</span>
            </h1>

            <p className="text-xl md:text-2xl text-base-content/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              My strategic analysis and recommendations for transforming Straiv's Guest App through Journey-Stage Intelligence, targeting
              <span className="font-bold text-primary"> €100+ billion market opportunity </span>
               in underutilized hospitality technology.
            </p>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {keyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`card ${metric.bgColor} border border-base-300 hover:border-primary/40 transition-all duration-300 cursor-help group relative`}
                  data-tip=""
                  onMouseEnter={index === 0 ? handleFirstHover : undefined}
                >
                  <div className="card-body text-center p-6 relative">
                    {/* Hover Beacon - only on first card for new users */}
                    {index === 0 && showHoverBeacon && (
                      <div className="absolute -top-2 -right-2 z-20">
                        <div className="relative">
                          <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
                          <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
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
                        <div className="bg-base-100 border border-primary/20 rounded-lg shadow-xl p-4 w-80 max-w-sm">
                          <h4 className="font-bold text-primary mb-2">{metric.hoverDetails.title}</h4>
                          <p className="text-sm text-base-content/80 mb-3 leading-relaxed">
                            {metric.hoverDetails.content}
                          </p>
                          <div className="text-xs text-base-content/60 italic">
                            Source: {metric.hoverDetails.source}
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

            {/* CTA Buttons */}
            <div className="flex justify-center">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  // Navigate to the Foundation section
                  if (onSectionChange) {
                    onSectionChange('foundation');
                  } else {
                    // Fallback: scroll to strategic pillars section
                    document.querySelector('#strategic-pillars')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Target className="w-6 h-6" />
                Start Exploring Strategy
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Challenge */}
        <div className="card bg-error/5 border border-error/20">
          <div className="card-body">
            <h3 className="card-title text-error mb-4">
              <Target className="w-6 h-6" />
              The Challenge
            </h3>
            <p className="text-sm leading-relaxed">{executiveSummary.challenge}</p>

            <div className="mt-4 p-3 bg-error/10 rounded-lg">
              <div className="text-center">
                <div className="stat-value text-2xl text-error mb-1">13%</div>
                <div className="text-xs">Current Upselling Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Opportunity */}
        <div className="card bg-success/5 border border-success/20">
          <div className="card-body">
            <h3 className="card-title text-success mb-4">
              <DollarSign className="w-6 h-6" />
              The Opportunity
            </h3>
            <p className="text-sm leading-relaxed">{executiveSummary.opportunity}</p>

            <div className="mt-4 p-3 bg-success/10 rounded-lg">
              <div className="text-center">
                <div className="stat-value text-2xl text-success mb-1">€100B+</div>
                <div className="text-xs">Market Opportunity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="card bg-primary/5 border border-primary/20">
          <div className="card-body">
            <h3 className="card-title text-primary mb-4">
              <Brain className="w-6 h-6" />
              Implementation Approach
            </h3>
            <p className="text-sm leading-relaxed">{executiveSummary.approach}</p>

            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <div className="text-center">
                <div className="stat-value text-2xl text-primary mb-1">PWA-First</div>
                <div className="text-xs">Technology Platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Structure - Strategic Pillars */}
      <div id="strategic-pillars" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {strategicPillars.map((pillar, index) => (
          <div key={index} className="card bg-base-100 hover:bg-base-200 border border-base-300 hover:border-primary/20 transition-all duration-300 cursor-pointer group">
            <div className="card-body">
              <div className={`text-${pillar.color} mb-4 group-hover:scale-110 transition-transform`}>
                {pillar.icon}
              </div>

              <h3 className="card-title text-lg mb-2">{pillar.title}</h3>
              <h4 className={`text-${pillar.color} font-semibold mb-3`}>{pillar.subtitle}</h4>
              <p className="text-sm text-base-content/70 mb-4">{pillar.description}</p>

              <ul className="space-y-1">
                {pillar.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 text-xs">
                    <CheckCircle className={`w-3 h-3 text-${pillar.color}`} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="card-actions justify-end mt-4">
                <button
                  className={`btn btn-${pillar.color} btn-sm`}
                  onClick={() => {
                    if (onSectionChange) {
                      // Map each pillar to its corresponding section
                      const sectionMapping = {
                        'Part 1: Foundation': 'foundation',
                        'Part 2: Innovation': 'innovation',
                        'Implementation': 'implementation',
                        'Business Impact': 'business-impact'
                      };
                      const targetSection = sectionMapping[pillar.title];
                      if (targetSection) {
                        onSectionChange(targetSection);
                      }
                    }
                  }}
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live Metrics Dashboard */}
      <div className="card bg-base-100 border border-primary/20">
        <div className="card-body">
          <div className="flex items-center justify-between mb-8">
            <h2 className="card-title text-3xl">
              <BarChart3 className="w-8 h-8 text-primary" />
              Impact Dashboard
            </h2> 
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {liveKPIs.map((kpi, index) => (
              <div 
                key={index} 
                className="stat bg-base-200 rounded-lg p-4 hover:bg-base-300 transition-all duration-300 cursor-help group relative"
                onMouseEnter={index === 0 ? handleFirstImpactHover : undefined}
              >
                {/* Hover Beacon - only on first card for new users */}
                {index === 0 && showImpactBeacon && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <div className="relative">
                      <div className="w-4 h-4 bg-accent rounded-full animate-ping"></div>
                      <div className="absolute top-0 left-0 w-4 h-4 bg-accent rounded-full"></div>
                    </div>
                  </div>
                )}

                <div className="stat-figure text-primary">
                  {kpi.icon}
                </div>
                <div className="stat-title text-xs">{kpi.label}</div>
                <div className="stat-value text-lg text-primary">{kpi.metric}</div>
                <div className="stat-desc text-success font-semibold">{kpi.trend}</div>
                <div className="stat-desc text-xs mt-1">{kpi.description}</div>

                {/* Hover Tooltip */}
                {kpi.hoverDetails && (
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
                      <div className="bg-base-100 border border-accent/20 rounded-lg shadow-xl p-4 w-80 max-w-sm">
                        <h4 className="font-bold text-accent mb-2">{kpi.hoverDetails.title}</h4>
                        <p className="text-sm text-base-content/80 mb-3 leading-relaxed">
                          {kpi.hoverDetails.content}
                        </p>
                        <div className="bg-accent/10 p-2 rounded text-xs mb-2">
                          <strong>Calculation:</strong> {kpi.hoverDetails.calculation}
                        </div>
                        <div className="text-xs text-accent font-medium">
                          💰 {kpi.hoverDetails.impact}
                        </div>
                        {/* Arrow pointing down */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-base-100"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Competitive Advantages */}
          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Competitive Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps CTA */}
      <div className="card bg-gradient-to-r from-success to-warning text-base-content">
        <div className="card-body text-center py-12">
          <h2 className="card-title text-3xl justify-center mb-4 text-base-content">
            Ready to Transform Hotel Guest Experience?
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto text-base-content">
            Dive deep into our strategic analysis, interactive prototypes, and implementation roadmap
            to see how Straiv can capture the €100+ billion market opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn btn-neutral btn-lg"
              onClick={() => {
                if (onSectionChange) {
                  onSectionChange('foundation');
                } else {
                  console.log('Navigation function not available');
                }
              }}
            >
              <Lightbulb className="w-6 h-6" />
              Start with Strategy
            </button>
            <button 
              className="btn btn-outline btn-lg text-base-content border-base-content hover:bg-base-content hover:text-base-100"
              onClick={() => {
                if (onSectionChange) {
                  onSectionChange('live-prototype');
                } else {
                  console.log('Navigation function not available');
                }
              }}
            >
              <Smartphone className="w-6 h-6" />
              Try Live Prototype
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview; 