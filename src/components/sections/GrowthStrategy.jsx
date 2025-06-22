import React, { useState } from 'react';
import { 
  TrendingUp,
  Users,
  Building,
  Globe,
  Handshake,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  DollarSign,
  Award,
  Network,
  Briefcase,
  MapPin,
  Calendar,
  Phone,
  Mail,
  BarChart3,
  Percent,
  Clock,
  Rocket,
  Shield,
  Database,
  Layers,
  Settings,
  Info,
  Crown,
  Home,
  Building2,
  ChevronRight,
  Megaphone,
  LinkIcon,
  Gift,
  Euro,
  UserCheck,
  PiggyBank,
  Eye,
  Headphones
} from 'lucide-react';

const GrowthStrategy = ({ onSectionChange, navigate }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTier, setActiveTier] = useState(0);
  const [activeChannel, setActiveChannel] = useState(0);

  // Helper function to handle navigation with scroll-to-top
  const handleNavigation = (path) => {
    if (navigate) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Tooltip component for research data
  const Tooltip = ({ children, content }) => (
    <div className="tooltip tooltip-info" data-tip={content}>
      {children}
    </div>
  );

  // Market context data
  const marketContext = {
    europeanMarket: "€187.9B",
    independentHotels: "60%",
    growthRate: "26.18%",
    laborCosts: "$9-10",
    digitalDemand: "54%",
    thirdPartyRevenue: "58%",
    directBookingAOV: "62%"
  };

  // Main sections
  const sections = [
    { id: 'expansion', title: 'European Market Expansion', icon: <Globe className="w-6 h-6" /> },
    { id: 'adoption', title: 'Guest Adoption Acceleration', icon: <Users className="w-6 h-6" /> },
    { id: 'partnerships', title: 'Partnership Strategy', icon: <Handshake className="w-6 h-6" /> }
  ];

  // European Market Expansion - 3 Tiers
  const marketTiers = [
    {
      tier: "Tier 1",
      title: "Independent & Boutique Hotels",
      timeframe: "0-3 months",
      target: "50-200 room independent properties seeking technology parity with major chains",
      valueProposition: "Enterprise-level capabilities at accessible pricing",
      approach: "European boutique hotel associations, hospitality trade shows",
      successMetrics: "25 new partnerships, 60% implementation success rate",
      color: "success",
      bgGradient: "from-success/5 to-primary/5",
      borderColor: "border-success/20",
      icon: <Home className="w-5 h-5 text-success" />,
      details: {
        marketSize: "60% independent hotels in European market (underserved segment)",
        painPoints: ["Technology gap vs major chains", "Limited digital capabilities", "High operational costs"],
        solution: ["Straiv's enterprise-level features", "Accessible pricing model", "Quick implementation"],
        implementation: ["Trade show demonstrations", "Association partnerships", "Pilot program offers"]
      }
    },
    {
      tier: "Tier 2", 
      title: "Regional Hotel Chains",
      timeframe: "3-6 months",
      target: "Best Western Europe, Choice Hotels, regional chains",
      valueProposition: "Guest experience differentiation through proven 15-37.8% revenue increases",
      approach: "Performance-guaranteed pilot programs demonstrating ROI",
      successMetrics: "3-5 regional partnerships with scalability validation",
      color: "primary",
      bgGradient: "from-primary/5 to-secondary/5",
      borderColor: "border-primary/20",
      icon: <Building2 className="w-5 h-5 text-primary" />,
      details: {
        marketSize: "Regional chains seeking competitive differentiation",
        painPoints: ["Guest experience expectations", "Competition with major brands", "Operational efficiency"],
        solution: ["Proven revenue increases", "Performance guarantees", "Scalable implementation"],
        implementation: ["Pilot program design", "ROI demonstrations", "Success metric tracking"]
      }
    },
    {
      tier: "Tier 3",
      title: "Major European Chains", 
      timeframe: "6-12 months",
      target: "AccorHotels, NH Hotel Group, enterprise-scale operations",
      valueProposition: "15% operational cost reduction and 50% automation of front desk needs",
      approach: "White-label integration options leveraging 50+ technology partners",
      successMetrics: "1-2 major implementations establishing market leadership",
      color: "secondary",
      bgGradient: "from-secondary/5 to-accent/5",
      borderColor: "border-secondary/20",
      icon: <Crown className="w-5 h-5 text-secondary" />,
      details: {
        marketSize: "Major chains with complex operational requirements",
        painPoints: ["Operational cost pressures", "Front desk automation needs", "Scale requirements"],
        solution: ["White-label options", "50+ technology integrations", "Enterprise scalability"],
        implementation: ["Partnership negotiations", "Integration planning", "Phased rollout"]
      }
    }
  ];

  // Guest Adoption Acceleration - 3 Channels
  const adoptionChannels = [
    {
      channel: "Channel 1",
      title: "Hotel Partnership Marketing",
      color: "info",
      bgGradient: "from-info/5 to-success/5",
      borderColor: "border-info/20",
      icon: <Megaphone className="w-5 h-5 text-info" />,
      strategies: [
        {
          strategy: "Co-branded Campaigns",
          description: "Highlighting 85% shorter wait times and contactless benefits",
          implementation: "Joint marketing materials showcasing efficiency gains",
          impact: "Increased guest awareness and adoption"
        },
        {
          strategy: "Staff Training Programs",
          description: "Leveraging 98.89% customer satisfaction success stories",
          implementation: "Training modules with proven success metrics",
          impact: "Enhanced staff confidence and guest support"
        },
        {
          strategy: "Incentive Programs",
          description: "Addressing 54% consumer demand for digital check-in",
          implementation: "Guest rewards for digital service adoption",
          impact: "Accelerated digital service uptake"
        }
      ]
    },
    {
      channel: "Channel 2",
      title: "Travel Ecosystem Integration",
      color: "primary",
      bgGradient: "from-primary/5 to-info/5", 
      borderColor: "border-primary/20",
      icon: <LinkIcon className="w-5 h-5 text-primary" />,
      strategies: [
        {
          strategy: "Booking Platform Partnerships",
          description: "Addressing 58% European hotel revenues from third-party bookings",
          implementation: "Integration with major booking platforms",
          impact: "Expanded guest reach and seamless experience"
        },
        {
          strategy: "Corporate Travel Connections",
          description: "Business traveler system integration for enhanced reach",
          implementation: "Corporate travel management system integration",
          impact: "B2B segment penetration and loyalty"
        },
        {
          strategy: "Direct Booking Advantage",
          description: "Leverage 62% premium direct booking AOV advantage",
          implementation: "Enhanced direct booking incentives and features",
          impact: "Increased direct bookings and higher revenue per guest"
        }
      ]
    },
    {
      channel: "Channel 3",
      title: "Value-Added Service Expansion",
      color: "accent",
      bgGradient: "from-accent/5 to-warning/5",
      borderColor: "border-accent/20",
      icon: <Gift className="w-5 h-5 text-accent" />,
      strategies: [
        {
          strategy: "Local Experience Partnerships",
          description: "Capturing 10-20% upselling potential through local experiences",
          implementation: "Restaurant and activity booking integration",
          impact: "Additional revenue streams and enhanced guest value"
        },
        {
          strategy: "Transportation Integration", 
          description: "Comprehensive guest experience with seamless transportation",
          implementation: "Uber/taxi integration and booking capabilities",
          impact: "Complete guest journey optimization"
        },
        {
          strategy: "Loyalty Program Integration",
          description: "Maximizing repeat business value and guest retention",
          implementation: "Hotel loyalty program API integration",
          impact: "Increased guest retention and lifetime value"
        }
      ]
    }
  ];

  // Partnership Strategy
  const partnershipStrategy = {
    technologyPartners: {
      title: "Technology Integration Partners",
      description: "PMS vendors for deeper system integration (building on current 50+ partners)",
      icon: <Settings className="w-6 h-6 text-primary" />,
      partnerships: [
        "PMS vendors for deeper system integration",
        "Payment processors ensuring European compliance and local payment methods",
        "Voice and AI technology providers for advanced capabilities"
      ]
    },
    distributionPartners: {
      title: "Distribution Partners", 
      description: "Hotel management companies for portfolio-wide implementation",
      icon: <Network className="w-6 h-6 text-secondary" />,
      partnerships: [
        "Hotel management companies for portfolio-wide implementation",
        "European hospitality consultants for market credibility and implementation support",
        "Technology resellers for expanded market reach"
      ]
    },
    revenueModels: {
      title: "Revenue Models",
      description: "Multiple revenue streams optimizing partnership value",
      icon: <Euro className="w-6 h-6 text-success" />,
      models: [
        { model: "Commission partnerships", rate: "10-30% for booking platforms" },
        { model: "Technology partnerships", rate: "15-25% revenue sharing opportunities" },
        { model: "Subscription licensing", rate: "€50-200 monthly per property based on market research" }
      ]
    },
    successIndicators: {
      title: "Success Indicators",
      metrics: [
        "Partnership ecosystem offering 10-30% revenue sharing opportunities",
        "3-5 strategic partnerships across PMS, payments, and booking platforms", 
        "€1 million ARR target with 50+ customers by month 12"
      ]
    }
  };

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">Capturing the €187.9 Billion</span><br />
          <span className="text-secondary">European Hotel Market Opportunity</span>
        </h1>
        
        <p className="text-xl text-base-content/80 max-w-4xl mx-auto mb-8">
          Strategic growth approach targeting 60% independent hotel market with proven automation solutions
        </p>

        {/* Market Context Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          <div className="stats shadow border border-primary/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-primary text-lg">{marketContext.europeanMarket}</div>
              <div className="stat-desc text-xs">European Hotel Market</div>
            </div>
          </div>
          <div className="stats shadow border border-success/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-success text-lg">{marketContext.independentHotels}</div>
              <div className="stat-desc text-xs">Independent Hotels</div>
            </div>
          </div>
          <div className="stats shadow border border-secondary/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-secondary text-lg">{marketContext.growthRate}</div>
              <div className="stat-desc text-xs">CAGR Growth Rate</div>
            </div>
          </div>
          <div className="stats shadow border border-warning/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-warning text-lg">{marketContext.laborCosts}</div>
              <div className="stat-desc text-xs">Per Check-in Cost</div>
            </div>
          </div>
        </div>

        {/* Additional Context */}
        <div className="alert alert-info max-w-4xl mx-auto">
          <Info className="w-4 h-4" />
          <div className="text-sm">
            <div className="font-semibold">Market Context:</div>
            <div>Smart hospitality market growing at 26.18% CAGR through 2029 with labor cost pressures driving automation demand</div>
          </div>
        </div>
      </div>

      {/* Main Section Navigation */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Three-Pillar Growth Strategy</h2>
        
        {/* Section Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-12">
          {sections.map((section, index) => (
            <button 
              key={section.id}
              className={`btn ${activeSection === index ? 'btn-primary' : 'btn-outline'} gap-2 flex-1 sm:flex-none`}
              onClick={() => setActiveSection(index)}
            >
              {section.icon}
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>

        {/* European Market Expansion */}
        {activeSection === 0 && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">European Market Expansion</h3>
              <Tooltip content="Tiered approach allows proven success demonstration with smaller properties before major chain negotiations">
                <p className="text-lg text-base-content/80 cursor-help">
                  Three-tier market penetration strategy targeting 60% independent hotel segment
                </p>
              </Tooltip>
            </div>

            {/* Tier Navigation */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 mb-8">
              {marketTiers.map((tier, index) => (
                <button 
                  key={tier.tier}
                  className={`btn ${activeTier === index ? `btn-${tier.color}` : 'btn-outline'} gap-2 flex-1 sm:flex-none`}
                  onClick={() => setActiveTier(index)}
                >
                  <div className={activeTier === index ? 'text-white' : `text-${tier.color}`}>
                    {React.cloneElement(tier.icon, { className: 'w-5 h-5' })}
                  </div>
                  <span className="hidden sm:inline">{tier.tier}</span>
                </button>
              ))}
            </div>

            {/* Active Tier Display */}
            <div className={`card bg-gradient-to-br ${marketTiers[activeTier].bgGradient} border-2 ${marketTiers[activeTier].borderColor}`}>
              <div className="card-body p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-base-100 flex items-center justify-center border-2 ${marketTiers[activeTier].borderColor}`}>
                    <div className="w-8 h-8">
                      {React.cloneElement(marketTiers[activeTier].icon, { className: 'w-8 h-8' })}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-2">
                      {marketTiers[activeTier].tier}: {marketTiers[activeTier].title}
                    </h4>
                    <div className="flex items-center gap-2 text-base-content/60 mb-3">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">Timeline: {marketTiers[activeTier].timeframe}</span>
                    </div>
                    <p className="text-base-content/80">{marketTiers[activeTier].target}</p>
                  </div>
                </div>

                {/* Tier Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-base-100 rounded-lg border border-base-300">
                      <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Value Proposition
                      </h5>
                      <p className="text-sm text-base-content/80">{marketTiers[activeTier].valueProposition}</p>
                    </div>
                    <div className="p-4 bg-base-100 rounded-lg border border-base-300">
                      <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Rocket className="w-4 h-4" />
                        Approach
                      </h5>
                      <p className="text-sm text-base-content/80">{marketTiers[activeTier].approach}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-base-100 rounded-lg border border-base-300">
                    <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Success Metrics
                    </h5>
                    <p className="text-sm text-base-content/80 mb-3">{marketTiers[activeTier].successMetrics}</p>
                    <div className="text-xs text-base-content/60 bg-base-200 rounded px-2 py-1">
                      <strong>Market Context:</strong> {marketTiers[activeTier].details.marketSize}
                    </div>
                  </div>
                </div>

                {/* Implementation Strategy */}
                <div>
                  <h5 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Implementation Strategy
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-base-100 rounded-lg border border-base-300">
                      <h6 className="font-semibold text-sm mb-3 text-error">Pain Points</h6>
                      <div className="space-y-2">
                        {marketTiers[activeTier].details.painPoints.map((point, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-error rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs text-base-content/80">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-base-100 rounded-lg border border-base-300">
                      <h6 className="font-semibold text-sm mb-3 text-success">Solution</h6>
                      <div className="space-y-2">
                        {marketTiers[activeTier].details.solution.map((solution, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-base-content/80">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-base-100 rounded-lg border border-base-300">
                      <h6 className="font-semibold text-sm mb-3 text-info">Implementation</h6>
                      <div className="space-y-2">
                        {marketTiers[activeTier].details.implementation.map((impl, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ChevronRight className="w-3 h-3 text-info mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-base-content/80">{impl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guest Adoption Acceleration */}
        {activeSection === 1 && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Guest Adoption Acceleration</h3>
              <Tooltip content="Multi-channel approach increases guest touchpoints while providing additional value beyond basic hotel services">
                <p className="text-lg text-base-content/80 cursor-help">
                  Three-channel strategy maximizing guest engagement and adoption rates
                </p>
              </Tooltip>
            </div>

            {/* Channel Navigation */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 mb-8">
              {adoptionChannels.map((channel, index) => (
                <button 
                  key={channel.channel}
                  className={`btn ${activeChannel === index ? `btn-${channel.color}` : 'btn-outline'} gap-2 flex-1 sm:flex-none`}
                  onClick={() => setActiveChannel(index)}
                >
                  <div className={activeChannel === index ? 'text-white' : `text-${channel.color}`}>
                    {React.cloneElement(channel.icon, { className: 'w-5 h-5' })}
                  </div>
                  <span className="hidden sm:inline">{channel.channel}</span>
                </button>
              ))}
            </div>

            {/* Active Channel Display */}
            <div className={`card bg-gradient-to-br ${adoptionChannels[activeChannel].bgGradient} border-2 ${adoptionChannels[activeChannel].borderColor}`}>
              <div className="card-body p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-base-100 flex items-center justify-center border-2 ${adoptionChannels[activeChannel].borderColor}`}>
                    <div className="w-8 h-8">
                      {React.cloneElement(adoptionChannels[activeChannel].icon, { className: 'w-8 h-8' })}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-2">
                      {adoptionChannels[activeChannel].channel}: {adoptionChannels[activeChannel].title}
                    </h4>
                    <p className="text-base-content/80">Strategic guest engagement through targeted marketing and partnerships</p>
                  </div>
                </div>

                {/* Channel Strategies */}
                <div>
                  <h5 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Strategic Approaches
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {adoptionChannels[activeChannel].strategies.map((strategy, index) => (
                      <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                        <h6 className="font-semibold text-sm mb-3">{strategy.strategy}</h6>
                        <p className="text-xs text-base-content/80 mb-3">{strategy.description}</p>
                        <div className="space-y-2">
                          <div className="text-xs text-base-content/60 bg-base-200 rounded px-2 py-1">
                            <strong>Implementation:</strong> {strategy.implementation}
                          </div>
                          <div className="text-xs text-success bg-success/10 rounded px-2 py-1">
                            <strong>Impact:</strong> {strategy.impact}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue Models Highlight */}
                <div className="mt-6">
                  <div className="alert alert-warning py-3">
                    <Euro className="w-4 h-4" />
                    <div className="text-sm">
                      <div className="font-semibold">Revenue Models:</div>
                      <div>Commission partnerships: 10-30% for booking platforms | Technology partnerships: 15-25% revenue sharing | Subscription licensing: €50-200 monthly per property</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partnership Strategy */}
        {activeSection === 2 && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Partnership Strategy</h3>
              <Tooltip content="Partnership strategy leverages existing relationships while building new distribution channels for accelerated growth">
                <p className="text-lg text-base-content/80 cursor-help">
                  Strategic partnerships across technology, distribution, and experience ecosystem
                </p>
              </Tooltip>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Technology Integration Partners */}
              <div className="card bg-gradient-to-br from-primary/5 to-info/5 border border-primary/20">
                <div className="card-body p-8">
                  <h4 className="card-title text-2xl mb-6 flex items-center gap-3">
                    {partnershipStrategy.technologyPartners.icon}
                    {partnershipStrategy.technologyPartners.title}
                  </h4>
                  <p className="text-sm text-base-content/80 mb-6">{partnershipStrategy.technologyPartners.description}</p>
                  
                  <div className="space-y-4">
                    {partnershipStrategy.technologyPartners.partnerships.map((partnership, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{partnership}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Distribution Partners */}
              <div className="card bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20">
                <div className="card-body p-8">
                  <h4 className="card-title text-2xl mb-6 flex items-center gap-3">
                    {partnershipStrategy.distributionPartners.icon}
                    {partnershipStrategy.distributionPartners.title}
                  </h4>
                  <p className="text-sm text-base-content/80 mb-6">{partnershipStrategy.distributionPartners.description}</p>
                  
                  <div className="space-y-4">
                    {partnershipStrategy.distributionPartners.partnerships.map((partnership, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{partnership}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Models */}
            <div className="card bg-gradient-to-r from-success/10 to-warning/10 border border-success/20">
              <div className="card-body p-8">
                <h4 className="card-title text-2xl mb-6 flex items-center gap-3">
                  {partnershipStrategy.revenueModels.icon}
                  {partnershipStrategy.revenueModels.title}
                </h4>
                <p className="text-sm text-base-content/80 mb-6">{partnershipStrategy.revenueModels.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {partnershipStrategy.revenueModels.models.map((model, index) => (
                    <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300 text-center">
                      <div className="font-medium text-sm mb-1">{model.model}</div>
                      <div className="text-success font-bold">{model.rate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Success Indicators */}
            <div className="card bg-gradient-to-r from-accent/10 to-info/10 border border-accent/20">
              <div className="card-body text-center p-8">
                <h4 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
                  <Target className="w-8 h-8 text-accent" />
                  Success Indicators
                </h4>
                <div className="space-y-4">
                  {partnershipStrategy.successIndicators.metrics.map((metric, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-left">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Growth Impact Summary */}
      <div className="card bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20">
        <div className="card-body text-center p-8">
          <h3 className="text-2xl font-bold mb-6">Growth Strategy Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary">€1M</div>
              <div className="text-sm font-medium">ARR Target</div>
              <div className="text-xs text-base-content/60">By month 12</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success">50+</div>
              <div className="text-sm font-medium">Customer Target</div>
              <div className="text-xs text-base-content/60">European market penetration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">60%</div>
              <div className="text-sm font-medium">Implementation Success</div>
              <div className="text-xs text-base-content/60">Tier 1 target rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">15-25%</div>
              <div className="text-sm font-medium">Revenue Sharing</div>
              <div className="text-xs text-base-content/60">Partnership opportunities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Navigation */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Strategic Implementation Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <button 
            className="card bg-gradient-to-r from-success to-primary text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/implementation-roadmap') : onSectionChange('implementation-roadmap')}
          >
            <div className="card-body text-center p-6">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Implementation Roadmap</h3>
              <p className="text-sm opacity-80">Detailed timeline and execution plan</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-info to-secondary text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/prototype-demo') : onSectionChange('prototype-demo')}
          >
            <div className="card-body text-center p-6">
              <Eye className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Prototype Demo</h3>
              <p className="text-sm opacity-80">Interactive demonstrations of key features</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-primary to-accent text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/sources') : onSectionChange('sources')}
          >
            <div className="card-body text-center p-6">
              <Database className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Research Sources</h3>
              <p className="text-sm opacity-80">Industry benchmarks and supporting studies</p>
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

export default GrowthStrategy; 