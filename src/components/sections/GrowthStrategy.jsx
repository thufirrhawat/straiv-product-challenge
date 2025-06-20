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
  Linkedin
} from 'lucide-react';

const GrowthStrategy = ({ onSectionChange }) => {
  const [activeGrowthArea, setActiveGrowthArea] = useState('hotel-adoption');

  const growthAreas = [
    {
      id: 'hotel-adoption',
      title: 'Hotel Adoption Strategy',
      icon: <Building className="w-6 h-6" />,
      color: 'primary',
      description: 'Scale across more hotels through proven ROI demonstration',
      currentChallenge: 'Hotels need convincing evidence that guest apps deliver measurable business value',
      myApproach: 'ROI-first sales approach with data-driven value demonstration and risk-free pilots',
      strategies: [
        {
          title: 'ROI Demonstration Program',
          description: 'Free 30-day pilot with guaranteed metrics: 25% check-in adoption or full refund',
          tactics: ['Live dashboard showing real-time adoption metrics', 'Benchmark comparison against property size and type', 'Staff efficiency tracking and cost savings calculation'],
          impact: '+180% hotel trial-to-paid conversion'
        },
        {
          title: 'Reference Customer Program',
          description: 'Turn successful hotels into case study advocates with referral incentives',
          tactics: ['Video testimonials from hotel managers showing real results', 'Site visits for prospective customers to see live implementation', 'Co-marketing opportunities for early adopters'],
          impact: '+85% sales cycle acceleration'
        },
        {
          title: 'Channel Partner Network',
          description: 'Partner with PMS providers, hotel consultants, and industry associations',
          tactics: ['Integration partnerships with leading PMS systems', 'Consultant referral program with revenue sharing', 'Conference sponsorships and speaking opportunities'],
          impact: '+240% qualified lead generation'
        },
        {
          title: 'Vertical Market Focus',
          description: 'Target specific hotel segments with tailored value propositions',
          tactics: ['Boutique hotels: differentiation through personalization', 'Business hotels: efficiency and operational cost reduction', 'Resort properties: guest experience and ancillary revenue'],
          impact: '+120% conversion rates vs generic approach'
        }
      ]
    },
    {
      id: 'guest-engagement',
      title: 'Guest Engagement Growth',
      icon: <Users className="w-6 h-6" />,
      color: 'secondary',
      description: 'Drive active usage among guests through viral mechanics and value delivery',
      currentChallenge: '73% guest willingness vs 38% actual usage - activation and retention gaps',
      myApproach: 'Viral growth loops with immediate value delivery and habit-forming engagement',
      strategies: [
        {
          title: 'Viral Referral Engine',
          description: 'Guests refer friends through social sharing and achievement unlocks',
          tactics: ['Friend referral with mutual rewards (€10 credit each)', 'Social media sharing with automatic story generation', 'Achievement badges that unlock exclusive hotel perks'],
          impact: '+290% organic user acquisition'
        },
        {
          title: 'Cross-Property Network Effects',
          description: 'Leverage guest movement across hotel network for retention',
          tactics: ['Status and preferences sync across 3,400+ properties', 'Network-wide loyalty progression and recognition', 'Location-based friend discovery and recommendations'],
          impact: '+165% multi-property guest retention'
        },
        {
          title: 'Onboarding Optimization',
          description: 'First impression determines lifetime engagement - optimize ruthlessly',
          tactics: ['A/B testing onboarding flows by guest segment', 'Immediate value delivery: weather, check-in progress, local tips', 'Progressive feature discovery with achievement rewards'],
          impact: '+140% Day 1 retention rates'
        },
        {
          title: 'Engagement Habit Loops',
          description: 'Create daily engagement through valuable micro-interactions',
          tactics: ['Daily local discovery content with photo opportunities', 'Weather-based activity suggestions and booking prompts', 'Loyalty point earning through app engagement'],
          impact: '+220% weekly active user rates'
        }
      ]
    },
    {
      id: 'partnerships',
      title: 'Strategic Partnerships',
      icon: <HandHeart className="w-6 h-6" />,
      color: 'accent',
      description: 'Extend reach and value through ecosystem integrations',
      currentChallenge: 'Limited value proposition without broader travel and local ecosystem integration',
      myApproach: 'Revenue-sharing partnerships that enhance guest experience and create win-win scenarios',
      strategies: [
        {
          title: 'Local Experience Integration',
          description: 'Partner with local businesses for exclusive guest offers and experiences',
          tactics: ['Restaurant partnerships with reservation integration and exclusive discounts', 'Activity booking with local tour operators and experience providers', 'Transportation partnerships for seamless airport and city transfers'],
          impact: '+95% local engagement and €25 additional revenue per guest'
        },
        {
          title: 'Travel Platform Integration',
          description: 'Connect with major travel platforms for seamless booking and experience continuity',
          tactics: ['OTA integration for post-booking app activation', 'Flight delay notifications with proactive service offers', 'Car rental and transport app integration'],
          impact: '+65% pre-arrival app adoption through travel platform promotion'
        },
        {
          title: 'Technology Ecosystem',
          description: 'Partner with complementary tech providers for comprehensive solution',
          tactics: ['PMS deep integration for real-time data sync', 'Payment platform partnerships for one-click transactions', 'Smart room technology integration for voice and IoT control'],
          impact: '+185% hotel adoption through complete solution offering'
        },
        {
          title: 'Corporate Travel Programs',
          description: 'B2B partnerships with corporate travel managers and TMCs',
          tactics: ['Enterprise guest management with billing integration', 'Business traveler preference profiles and automatic perks', 'Corporate travel policy compliance and reporting'],
          impact: '+150% business traveler engagement and retention'
        }
      ]
    }
  ];

  const marketExpansion = {
    phases: [
      {
        title: 'Phase 1: DACH Dominance (0-12 months)',
        focus: 'Germany, Austria, Switzerland market penetration',
        targets: ['300+ hotels across DACH region', '150K+ active monthly users', '€2.5M ARR milestone'],
        strategies: ['German market cultural adaptation', 'Local partnership development', 'Reference customer cultivation']
      },
      {
        title: 'Phase 2: European Expansion (12-24 months)',
        focus: 'UK, France, Netherlands, Nordics expansion',
        targets: ['800+ hotels across Europe', '500K+ active monthly users', '€8M ARR milestone'],
        strategies: ['Multi-language platform scaling', 'European hotel chain partnerships', 'Cross-border guest experience optimization']
      },
      {
        title: 'Phase 3: Global Scale (24-36 months)',
        focus: 'North America and APAC market entry',
        targets: ['2000+ hotels globally', '1.5M+ active monthly users', '€25M ARR milestone'],
        strategies: ['Franchise and management company partnerships', 'Regional customization and localization', 'Global travel platform integrations']
      }
    ]
  };

  const salesStrategy = {
    channels: [
      {
        channel: 'Direct Sales',
        focus: 'Enterprise and chain accounts',
        approach: 'ROI-focused consultative selling with data-driven value demonstration',
        team: 'Senior sales executives with hospitality industry experience',
        target: '60% of revenue from enterprise accounts'
      },
      {
        channel: 'Partner Sales',
        focus: 'PMS and technology integrators',
        approach: 'Channel partner program with revenue sharing and co-marketing',
        team: 'Partner development managers with technical integration expertise',
        target: '25% of revenue through partner referrals'
      },
      {
        channel: 'Digital Marketing',
        focus: 'Independent hotels and small chains',
        approach: 'Content marketing, webinars, and self-service trial conversion',
        team: 'Digital marketing specialists with hospitality content expertise',
        target: '15% of revenue from digital acquisition'
      }
    ]
  };

  const successMetrics = {
    hotelAdoption: {
      current: '50 hotels',
      year1: '300 hotels',
      year2: '800 hotels',
      year3: '2000 hotels'
    },
    userBase: {
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
    marketShare: {
      current: '1% DACH',
      year1: '8% DACH',
      year2: '5% Europe',
      year3: '2% Global'
    }
  };

  const getActiveGrowthArea = () => {
    return growthAreas.find(area => area.id === activeGrowthArea);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="badge badge-success badge-lg mb-4">Part 2: Growth</div>
        <h1 className="text-4xl font-bold text-base-content mb-4">
          My Growth Strategy
        </h1>
        <h2 className="text-2xl font-semibold text-success mb-6">
          Scaling Hotel Adoption & Guest Engagement
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          My comprehensive growth strategy combines data-driven hotel acquisition, viral guest engagement mechanics, 
          and strategic partnerships to achieve 2000+ hotel adoption and 1.5M+ active users within 36 months.
        </p>
      </div>

      {/* Growth Strategy Framework */}
      <div className="card bg-gradient-to-br from-success/5 via-primary/5 to-accent/5 border border-success/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Growth Framework</h2>
          
          {/* Growth Area Selection */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {growthAreas.map((area) => (
              <button 
                key={area.id}
                className={`btn btn-sm sm:btn-md ${activeGrowthArea === area.id ? `btn-${area.color}` : 'btn-outline'} gap-2 flex-shrink-0`}
                onClick={() => setActiveGrowthArea(area.id)}
              >
                {area.icon}
                <span className="hidden sm:inline">{area.title}</span>
                <span className="sm:hidden">{area.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Growth Area Content */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{getActiveGrowthArea().title}</h3>
              <p className="text-lg text-base-content/70 mb-4">{getActiveGrowthArea().description}</p>
            </div>

            {/* Challenge vs Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 bg-error/5 border border-error/20 rounded-lg">
                <h4 className="font-bold text-error mb-3">Current Challenge:</h4>
                <p className="text-sm text-base-content/80">{getActiveGrowthArea().currentChallenge}</p>
              </div>
              <div className="p-6 bg-success/5 border border-success/20 rounded-lg">
                <h4 className="font-bold text-success mb-3">My Strategic Approach:</h4>
                <p className="text-sm text-base-content/80">{getActiveGrowthArea().myApproach}</p>
              </div>
            </div>

            {/* Growth Strategies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getActiveGrowthArea().strategies.map((strategy, index) => (
                <div key={index} className={`card bg-base-100 border border-${getActiveGrowthArea().color}/20`}>
                  <div className="card-body p-6">
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <h5 className="font-bold text-lg flex-1">{strategy.title}</h5>
                      <div className={`badge badge-${getActiveGrowthArea().color} badge-sm flex-shrink-0`}>{strategy.impact}</div>
                    </div>
                    <p className="text-sm text-base-content/80 mb-4">{strategy.description}</p>
                    <div className="space-y-2">
                      <h6 className="font-semibold text-xs">Key Tactics:</h6>
                      {strategy.tactics.map((tactic, tIndex) => (
                        <div key={tIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-success mt-1" />
                          <span className="text-xs text-base-content/70">{tactic}</span>
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

      {/* Market Expansion Roadmap */}
      <div className="card bg-primary/5 border border-primary/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Market Expansion Roadmap</h2>
          
          <div className="space-y-6">
            {marketExpansion.phases.map((phase, index) => (
              <div key={index} className="card bg-base-100 border border-primary/20">
                <div className="card-body">
                  <h3 className="text-xl font-bold text-primary mb-3">{phase.title}</h3>
                  <p className="text-base-content/80 mb-4">{phase.focus}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Growth Targets:</h4>
                      <div className="space-y-2">
                        {phase.targets.map((target, tIndex) => (
                          <div key={tIndex} className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            <span className="text-sm">{target}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Strategies:</h4>
                      <div className="space-y-2">
                        {phase.strategies.map((strategy, sIndex) => (
                          <div key={sIndex} className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-accent" />
                            <span className="text-sm">{strategy}</span>
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

      {/* Sales Strategy */}
      <div className="card bg-secondary/5 border border-secondary/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Sales Strategy & Channel Mix</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salesStrategy.channels.map((channel, index) => (
              <div key={index} className="card bg-base-100 border border-secondary/20">
                <div className="card-body p-6">
                  <h4 className="font-bold text-lg text-secondary mb-3">{channel.channel}</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-base-content/60">FOCUS</div>
                      <div className="text-sm">{channel.focus}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-base-content/60">APPROACH</div>
                      <div className="text-sm">{channel.approach}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-base-content/60">TEAM</div>
                      <div className="text-sm">{channel.team}</div>
                    </div>
                    <div className="text-center">
                      <div className="badge badge-secondary">{channel.target}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics Dashboard */}
      <div className="card bg-gradient-to-r from-success/10 to-primary/10 border border-success/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My 3-Year Growth Targets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(successMetrics).map(([metric, data]) => (
              <div key={metric} className="card bg-base-100 border border-success/20">
                <div className="card-body p-4 text-center">
                  <h4 className="font-bold text-success mb-3">{metric.replace(/([A-Z])/g, ' $1').trim()}</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-base-content/60">Current</div>
                      <div className="text-sm font-semibold">{data.current}</div>
                    </div>
                    <div>
                      <div className="text-xs text-base-content/60">Year 1</div>
                      <div className="text-lg font-bold text-primary">{data.year1}</div>
                    </div>
                    <div>
                      <div className="text-xs text-base-content/60">Year 2</div>
                      <div className="text-lg font-bold text-secondary">{data.year2}</div>
                    </div>
                    <div>
                      <div className="text-xs text-base-content/60">Year 3</div>
                      <div className="text-xl font-bold text-success">{data.year3}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center p-6 bg-success/10 rounded-lg border border-success/20">
            <h4 className="font-bold text-lg mb-2">Market Impact</h4>
            <div className="text-3xl font-bold text-success mb-2">€25M ARR</div>
            <p className="text-sm text-base-content/70">
              From 2000+ hotels and 1.5M+ users through data-driven growth strategies, 
              viral engagement mechanics, and strategic partnership ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation to Next Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button 
          className="card bg-gradient-to-r from-primary to-success text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('implementation-roadmap')}
        >
          <div className="card-body text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">Implementation Roadmap</h3>
            <p className="text-sm opacity-80">Detailed timeline and resource planning</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
          className="card bg-gradient-to-r from-success to-accent text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('prototype-demo')}
        >
          <div className="card-body text-center">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">Experience Growth Features</h3>
            <p className="text-sm opacity-80">Interactive demo of viral and engagement mechanics</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GrowthStrategy; 