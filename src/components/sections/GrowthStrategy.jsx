import React, { useState } from 'react';
import { 
  TrendingUp,
  Users,
  Building,
  Globe,
  HandHeart,
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
  Linkedin,
  BarChart3,
  Percent,
  Clock,
  Rocket,
  Shield,
  Database,
  Layers,
  Settings
} from 'lucide-react';

const GrowthStrategy = ({ onSectionChange }) => {
  const [activeGrowthPillar, setActiveGrowthPillar] = useState('hotel-acquisition');

  // Market opportunity data from the report
  const marketOpportunity = {
    europeanMarket: "€187.9B",
    growthRate: "26.18% CAGR",
    digitalAcceleration: "3x more digital interactions",
    guestPreference: "50% prefer mobile check-in",
    contactlessPreference: "53.6% demand contactless procedures",
    independentHotels: "60% of European market"
  };

  // Two-pillar growth approach
  const growthPillars = [
    {
      id: 'hotel-acquisition',
      title: 'Hotel Acquisition Strategy',
      icon: <Building className="w-6 h-6" />,
      color: 'primary',
      description: 'Target independent hotels (60% of European market) in DACH region with 40%+ branded penetration growth',
      marketFocus: 'Independent hotels (60% of European market) in DACH region',
      strategies: [
        {
          title: 'DACH Market Penetration',
          description: 'Germany, Austria, Switzerland with 40%+ branded hotel growth opportunity',
          tactics: [
            'Germany: 40%+ branded hotel growth, 20,000 new rooms annually',
            'Austria: 7.7% capacity growth, approaching 20% chain penetration', 
            'Switzerland: 30%+ branded rooms, consolidation acceleration'
          ],
          impact: '15% market penetration via Mews partnership (5,500+ customers)',
          timeline: '0-12 months'
        },
        {
          title: 'Pilot Program Strategy',
          description: '5-10 properties, 3-6 months, heavily discounted pricing with success metrics',
          tactics: [
            'Target 10-22% RevPAR improvement demonstrations',
            'Reference customer development with case studies',
            'Local partnership establishment (3-5 strategic integrations)'
          ],
          impact: '90%+ customer retention, sub-90-day implementation',
          timeline: '3-6 months per pilot'
        },
        {
          title: 'European Sales Optimization',
          description: 'Adapt to 6-18 month European sales cycles vs. US 3-6 months',
          tactics: [
            'Multi-language platform scaling with GDPR compliance',
            'Country-specific data residency and tax integration',
            'Channel partner development (10-15% referral, 20-25% reseller revenue)'
          ],
          impact: '80%+ feature utilization, 5:1 LTV/CAC ratio',
          timeline: '12-24 months'
        }
      ]
    },
    {
      id: 'guest-engagement',
      title: 'Guest Engagement Growth',
      icon: <Users className="w-6 h-6" />,
      color: 'secondary', 
      description: 'Transform from 25K MAU to 1.5M+ through viral guest experience mechanics and strategic integrations',
      marketFocus: 'Engagement multiplication through viral mechanics and network effects',
      strategies: [
        {
          title: 'Viral Experience Mechanics',
          description: 'Social sharing integration and guest-to-guest hotel recommendations',
          tactics: [
            'Guest experience highlights with automatic story generation',
            'Cross-hotel benefits and accumulated rewards system',
            'Referral incentives for guest-to-guest recommendations'
          ],
          impact: '35% increase in social media mentions, 45% repeat engagement',
          timeline: '3-6 months'
        },
        {
          title: 'Partnership Integration Growth',
          description: 'Revenue-sharing partnerships enhancing guest experience',
          tactics: [
            'OpenTable partnership: restaurant reservations + commission',
            'GetYourGuide API: local experiences + 15-20% revenue share',
            'Uber/Bolt integration: transportation + partnership revenue'
          ],
          impact: '€25 additional revenue per guest, 65% pre-arrival adoption',
          timeline: '6-12 months'
        },
        {
          title: 'Cross-Property Network Effects',
          description: 'Leverage guest movement across hotel network for retention',
          tactics: [
            'Status and preferences sync across properties',
            'Network-wide loyalty progression and recognition',
            'Location-based friend discovery and recommendations'
          ],
          impact: '165% multi-property guest retention increase',
          timeline: '12-18 months'
        }
      ]
    }
  ];

  // Strategic partnerships framework
  const partnershipFramework = [
    {
      category: 'Technology Integration Partnerships',
      revenue: '15-25% revenue sharing + customer stickiness',
      partnerships: [
        {
          name: 'Mews Partnership',
          description: 'Immediate DACH access (15% market penetration, 5,500+ customers)',
          value: 'Joint go-to-market investment, shared customer success'
        },
        {
          name: 'Oracle OHIP Integration', 
          description: 'Enterprise scalability (2,000+ pre-built integrations)',
          value: 'Technology development cost sharing'
        },
        {
          name: 'Payment Gateway Integration',
          description: 'Adyen (40+ European countries), Checkout.com (triple-digit UK growth)',
          value: 'Transaction revenue + European payment method support'
        }
      ]
    },
    {
      category: 'Distribution Channel Partnerships',
      revenue: '10-30% commission on bookings + customer acquisition',
      partnerships: [
        {
          name: 'Booking.com Integration',
          description: '15-18% commission, 58% European hotel revenue share',
          value: 'Marketing co-investment, customer acquisition sharing'
        },
        {
          name: 'Expedia Rapid API',
          description: '10-30% commission, white-label solutions',
          value: 'Distribution reach with enhanced guest experience'
        },
        {
          name: 'Corporate Travel Management',
          description: 'BCD Travel, American Express GBT partnerships',
          value: '7-12% commission rates on B2B segment'
        }
      ]
    },
    {
      category: 'Local Experience Ecosystem',
      revenue: 'Revenue-sharing partnerships + guest upselling opportunities',
      partnerships: [
        {
          name: 'Restaurant & Activity Integration',
          description: 'OpenTable, GetYourGuide partnerships with exclusive guest offers',
          value: '15-20% revenue share + seamless booking integration'
        },
        {
          name: 'Transportation Integration',
          description: 'Uber/Bolt partnerships for seamless transfers',
          value: 'Partnership revenue + enhanced guest convenience'
        },
        {
          name: 'Local Business Networks',
          description: 'Regional tourism boards, hotel consortiums',
          value: 'Co-marketing opportunities + bulk deployment'
        }
      ]
    }
  ];

  // Market expansion roadmap
  const expansionRoadmap = [
    {
      phase: 'Phase 1: DACH Dominance (0-12 months)',
      markets: 'Germany, Austria, Switzerland',
      targets: {
        hotels: '300 hotels',
        users: '150K MAU',
        revenue: '€2.5M ARR'
      },
      strategies: [
        'German market cultural adaptation and localization',
        'Mews partnership for immediate market access',
        'Reference customer development with success metrics',
        'Local partnership establishment (3-5 strategic integrations)'
      ],
      investment: '€2-3M for market entry and product development',
      keyMetrics: '8% DACH market share, 90%+ customer retention'
    },
    {
      phase: 'Phase 2: European Expansion (12-24 months)',
      markets: 'UK (€6.2B investment), France (€2B+), Netherlands',
      targets: {
        hotels: '800 hotels',
        users: '500K MAU', 
        revenue: '€8M ARR'
      },
      strategies: [
        'Multi-language platform scaling with GDPR compliance',
        'European hotel chain partnerships and integrations',
        'Channel partner development (10-15% referral programs)',
        'Country-specific data residency and payment integration'
      ],
      investment: 'Partnership capital leverage for market expansion',
      keyMetrics: '5% European market penetration, 75% gross margin'
    },
    {
      phase: 'Phase 3: Global Scale (24-36 months)',
      markets: 'Nordic, CEE, North America entry',
      targets: {
        hotels: '2000 hotels',
        users: '1.5M MAU',
        revenue: '€25M ARR'
      },
      strategies: [
        'Franchise and management company partnerships',
        'Strategic acquisitions of complementary European technologies',
        'Global travel platform integrations and marketplace presence',
        'Platform evolution toward comprehensive guest experience management'
      ],
      investment: 'Strategic acquisition opportunities in fragmented market',
      keyMetrics: '2% global market leadership position, 80% gross margin'
    }
  ];

  // Pricing strategy from the report
  const pricingStrategy = [
    {
      package: 'Starter Package',
      target: '10-50 room properties',
      pricing: '€50-100 per room/month',
      features: ['Basic guest messaging', 'Mobile check-in', 'Local recommendations'],
      marketSegment: 'Independent boutique hotels'
    },
    {
      package: 'Professional Package', 
      target: '50-200 rooms with volume discounts',
      pricing: '€30-60 per room/month',
      features: ['AI concierge', 'Voice integration', 'Upselling automation', 'Analytics dashboard'],
      marketSegment: 'Mid-market hotels and small chains'
    },
    {
      package: 'Enterprise Package',
      target: '200+ room operations',
      pricing: '€20-40 per room/month',
      features: ['Full platform access', 'Custom integrations', 'Dedicated support', 'Multi-property management'],
      marketSegment: 'Large hotels and management companies'
    }
  ];

  // Success metrics and KPIs
  const successMetrics = {
    hotelAdoption: {
      current: '50 hotels',
      year1: '300 hotels (DACH)',
      year2: '800 hotels (Europe)', 
      year3: '2000 hotels (Global)'
    },
    userEngagement: {
      current: '25K MAU',
      year1: '150K MAU',
      year2: '500K MAU',
      year3: '1.5M MAU'
    },
    revenue: {
      current: '€500K ARR',
      year1: '€2.5M ARR',
      year2: '€8M ARR',
      year3: '€25M ARR'
    },
    marketPenetration: {
      current: '1% DACH',
      year1: '8% DACH',
      year2: '5% Europe',
      year3: '2% Global'
    }
  };

  const getActiveGrowthPillar = () => {
    return growthPillars.find(pillar => pillar.id === activeGrowthPillar);
  };

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Header with Market Opportunity */}
      <div className="hero bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl border border-primary/10">
        <div className="hero-content text-center py-8 lg:py-12 px-4 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              <span className="text-base-content">Growth Strategy:</span><br />
              <span className="text-primary">Scaling Hotel Adoption & Guest Engagement</span>
            </h1>
            <h2 className="text-lg lg:text-xl font-semibold text-success mb-4 lg:mb-6">
              Data-Driven Market Opportunity: €187.9B European Hotel Market
            </h2>
            <p className="text-sm lg:text-base text-base-content/80 mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed">
              Post-COVID acceleration has generated 3x more digital interactions, with 50% of guests preferring mobile check-in 
              and 53.6% demanding contactless procedures. The DACH region's 40%+ branded hotel penetration and underserved 
              independent hotel segment (60% of European market) create ideal conditions for Straiv's expansion.
            </p>
            
            {/* Market Opportunity Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 max-w-4xl mx-auto">
              <div className="stat bg-primary/10 border border-primary/20 rounded-lg p-3 lg:p-4">
                <div className="stat-title text-primary text-xs lg:text-sm">European Market</div>
                <div className="stat-value text-primary text-lg lg:text-2xl">{marketOpportunity.europeanMarket}</div>
                <div className="stat-desc text-xs">Hotel market size</div>
              </div>
              <div className="stat bg-secondary/10 border border-secondary/20 rounded-lg p-3 lg:p-4">
                <div className="stat-title text-secondary text-xs lg:text-sm">Growth Rate</div>
                <div className="stat-value text-secondary text-lg lg:text-2xl">{marketOpportunity.growthRate}</div>
                <div className="stat-desc text-xs">Smart hospitality</div>
              </div>
              <div className="stat bg-accent/10 border border-accent/20 rounded-lg p-3 lg:p-4 col-span-2 lg:col-span-1">
                <div className="stat-title text-accent text-xs lg:text-sm">Digital Acceleration</div>
                <div className="stat-value text-accent text-lg lg:text-2xl">3x</div>
                <div className="stat-desc text-xs">More digital interactions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Pillar Growth Approach */}
      <div className="card bg-gradient-to-br from-success/5 via-primary/5 to-secondary/5 border border-success/20">
        <div className="card-body p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">Two-Pillar Growth Approach</h2>
          
          {/* Growth Pillar Selection */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 mb-6 lg:mb-8">
            {growthPillars.map((pillar) => (
              <button 
                key={pillar.id}
                className={`btn btn-sm lg:btn-md ${activeGrowthPillar === pillar.id ? `btn-${pillar.color}` : 'btn-outline'} gap-2 flex-shrink-0 w-full sm:w-auto`}
                onClick={() => setActiveGrowthPillar(pillar.id)}
              >
                {pillar.icon}
                <span className="hidden lg:inline">{pillar.title}</span>
                <span className="lg:hidden text-xs">{pillar.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Growth Pillar Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="text-center">
              <h3 className="text-lg lg:text-xl font-bold mb-2">{getActiveGrowthPillar().title}</h3>
              <p className="text-sm lg:text-base text-base-content/70 mb-2">{getActiveGrowthPillar().description}</p>
              <div className="badge badge-neutral badge-sm">{getActiveGrowthPillar().marketFocus}</div>
            </div>

            {/* Growth Strategies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              {getActiveGrowthPillar().strategies.map((strategy, index) => (
                <div key={index} className={`card bg-base-100 border border-${getActiveGrowthPillar().color}/20`}>
                  <div className="card-body p-4 lg:p-6">
                    <div className="flex flex-col gap-2 mb-3">
                      <h5 className="font-bold text-sm lg:text-base">{strategy.title}</h5>
                      <div className="flex flex-wrap gap-1">
                        <div className={`badge badge-${getActiveGrowthPillar().color} badge-xs`}>
                          {strategy.timeline}
                        </div>
                        <div className="badge badge-success badge-xs text-xs">
                          {strategy.impact.split(',')[0]}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs lg:text-sm text-base-content/80 mb-4">{strategy.description}</p>
                    
                    <div className="space-y-2">
                      <h6 className="font-semibold text-xs">Key Tactics:</h6>
                      {strategy.tactics.map((tactic, tIndex) => (
                        <div key={tIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-base-content/70 break-words">{tactic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Partnerships Framework */}
      <div className="card bg-accent/5 border border-accent/20">
        <div className="card-body p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center flex items-center justify-center gap-3">
            <HandHeart className="w-5 h-5 lg:w-6 lg:h-6" />
            Strategic Partnerships Framework
          </h2>
          
          <div className="space-y-6">
            {partnershipFramework.map((category, index) => (
              <div key={index} className="card bg-base-100 border border-accent/20">
                <div className="card-body p-4 lg:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-2">
                    <h3 className="font-bold text-base lg:text-lg">{category.category}</h3>
                    <div className="badge badge-accent badge-sm">{category.revenue}</div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {category.partnerships.map((partnership, pIndex) => (
                      <div key={pIndex} className="p-3 lg:p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <h4 className="font-semibold text-sm mb-2">{partnership.name}</h4>
                        <p className="text-xs text-base-content/80 mb-2 break-words">{partnership.description}</p>
                        <div className="text-xs text-accent font-medium break-words">{partnership.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Expansion Roadmap */}
      <div className="card bg-primary/5 border border-primary/20">
        <div className="card-body p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center flex items-center justify-center gap-3">
            <Globe className="w-5 h-5 lg:w-6 lg:h-6" />
            Market Expansion Roadmap
          </h2>
          
          <div className="space-y-4 lg:space-y-6">
            {expansionRoadmap.map((phase, index) => (
              <div key={index} className="card bg-base-100 border border-primary/20">
                <div className="card-body p-4 lg:p-6">
                  <div className="flex flex-col gap-3 mb-4">
                    <h3 className="text-base lg:text-lg font-bold text-primary">{phase.phase}</h3>
                    <div className="flex flex-wrap gap-1">
                      <div className="badge badge-primary badge-xs">{phase.targets.hotels}</div>
                      <div className="badge badge-secondary badge-xs">{phase.targets.users}</div>
                      <div className="badge badge-success badge-xs">{phase.targets.revenue}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Target Markets & Investment:</h4>
                      <div className="space-y-2 mb-4">
                        <div className="text-sm font-medium text-primary">{phase.markets}</div>
                        <div className="text-xs text-base-content/70">{phase.investment}</div>
                        <div className="text-xs text-success font-medium">{phase.keyMetrics}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Key Strategies:</h4>
                      <div className="space-y-2">
                        {phase.strategies.map((strategy, sIndex) => (
                          <div key={sIndex} className="flex items-start gap-2">
                            <Zap className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-xs break-words">{strategy}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Strategy */}
      <div className="card bg-warning/5 border border-warning/20">
        <div className="card-body p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center flex items-center justify-center gap-3">
            <DollarSign className="w-5 h-5 lg:w-6 lg:h-6" />
            European Market Pricing Strategy
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {pricingStrategy.map((package_, index) => (
              <div key={index} className="card bg-base-100 border border-warning/20">
                <div className="card-body p-4 lg:p-6">
                  <h3 className="font-bold text-warning text-sm lg:text-base mb-2">{package_.package}</h3>
                  <div className="text-xl lg:text-2xl font-bold text-primary mb-2">{package_.pricing}</div>
                  <div className="text-xs text-base-content/70 mb-4">{package_.target}</div>
                  
                  <div className="space-y-2 mb-4">
                    {package_.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="badge badge-neutral badge-sm w-full text-xs">{package_.marketSegment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics Dashboard */}
      <div className="card bg-gradient-to-r from-success/10 to-primary/10 border border-success/20">
        <div className="card-body p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">3-Year Growth Trajectory</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
            {Object.entries(successMetrics).map(([metric, data]) => (
              <div key={metric} className="card bg-base-100 border border-success/20">
                <div className="card-body p-3 lg:p-4 text-center">
                  <h4 className="font-bold text-success mb-3 text-sm">{metric.replace(/([A-Z])/g, ' $1').trim()}</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-base-content/60">Current</div>
                      <div className="text-sm font-semibold">{data.current}</div>
                    </div>
                    <div>
                      <div className="text-xs text-base-content/60">Year 1</div>
                      <div className="text-base lg:text-lg font-bold text-primary">{data.year1}</div>
                    </div>
                    <div>
                      <div className="text-xs text-base-content/60">Year 2</div>
                      <div className="text-base lg:text-lg font-bold text-secondary">{data.year2}</div>
                    </div>
                    <div>
                      <div className="text-xs text-base-content/60">Year 3</div>
                      <div className="text-lg lg:text-xl font-bold text-success">{data.year3}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 lg:mt-8 text-center p-4 lg:p-6 bg-success/10 rounded-lg border border-success/20">
            <h4 className="font-bold text-base lg:text-lg mb-2">Market Impact Projection</h4>
            <div className="text-2xl lg:text-3xl font-bold text-success mb-2">€25M ARR</div>
            <p className="text-xs lg:text-sm text-base-content/70 mb-4">
              Conservative annual value from 2000+ hotels and 1.5M+ users through data-driven growth strategies, 
              viral engagement mechanics, and strategic partnership ecosystem in the €187.9B European market.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
              <div className="p-2 lg:p-3 bg-primary/10 rounded-lg">
                <div className="text-sm lg:text-base font-bold text-primary">12-18 Months</div>
                <div className="text-xs text-base-content/60">Payback Period</div>
              </div>
              <div className="p-2 lg:p-3 bg-secondary/10 rounded-lg">
                <div className="text-sm lg:text-base font-bold text-secondary">€2-3M</div>
                <div className="text-xs text-base-content/60">Year 1 Investment</div>
              </div>
              <div className="p-2 lg:p-3 bg-accent/10 rounded-lg">
                <div className="text-sm lg:text-base font-bold text-accent">80% Margin</div>
                <div className="text-xs text-base-content/60">Year 3 Target</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation to Next Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <button 
          className="card bg-gradient-to-r from-primary to-success text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('conversion-strategy')}
        >
          <div className="card-body text-center p-4 lg:p-6">
            <TrendingUp className="w-8 h-8 lg:w-12 lg:h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center text-sm lg:text-base">Conversion Strategy</h3>
            <p className="text-xs opacity-80">Optimize hotel adoption and guest engagement conversion</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </div>
          </div>
        </button>

        <button 
          className="card bg-gradient-to-r from-success to-accent text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('implementation-roadmap')}
        >
          <div className="card-body text-center p-4 lg:p-6">
            <Calendar className="w-8 h-8 lg:w-12 lg:h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center text-sm lg:text-base">Implementation Roadmap</h3>
            <p className="text-xs opacity-80">Detailed timeline and resource planning</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GrowthStrategy; 