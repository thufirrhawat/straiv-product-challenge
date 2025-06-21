import React, { useState } from 'react';
import { 
  Brain,
  Mic,
  Cloud,
  Zap,
  Star,
  Eye,
  Calendar,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Users,
  Target,
  Award,
  Bot,
  Sparkles,
  Lightbulb,
  Shield,
  AlertTriangle,
  Settings,
  BookOpen,
  Wrench,
  DollarSign,
  BarChart3,
  Clock,
  Database
} from 'lucide-react';

const InnovationStrategy = ({ onSectionChange }) => {
  const [activeInnovation, setActiveInnovation] = useState('ai-assistant');

  // Updated with research data
  const marketContext = {
    budgetGrowth: "40% increase in hotel IT budgets (2021-2023)",
    marketSize: "$24.2B → $75.3B by 2033 (Smart Hospitality Market)",
    hotelCommitment: "100% of hoteliers plan to maintain/increase tech spending in 2024",
    guestDemand: "80% of guests would download hotel apps for check-in services"
  };

  const innovationAreas = [
    {
      id: 'ai-assistant',
      title: 'AI Guest Intelligence',
      icon: <Brain className="w-6 h-6" />,
      color: 'primary',
      tagline: 'Enhanced Digital Concierge Intelligence',
      currentState: 'Basic digital concierge with limited functionality - opportunity to join the 80% with AI implementation',
      visionState: 'Context-aware AI assistant achieving 94% customer satisfaction (Hilton benchmark)',
      marketData: '80% of hotels use AI chatbots; 58% of guests believe AI improves stays',
      roiProjection: '10-15% revenue increase through AI optimization',
      implementationCost: '$500-2,000 monthly for comprehensive platform',
      features: [
        {
          title: 'Context-Aware Conversations',
          description: 'AI understands guest arrival, preferences, and journey stage for personalized responses',
          impact: '94% customer satisfaction (Hilton AI benchmark)',
          differentiator: 'Most hotel digital assistants only handle 70% of simple inquiries effectively',
          timeframe: '3-6 months implementation'
        },
        {
          title: 'Predictive Service Suggestions',
          description: 'Proactive recommendations based on behavioral patterns and environmental context',
          impact: '17% revenue growth vs non-AI adopters',
          differentiator: 'Move beyond reactive responses to predictive engagement',
          timeframe: '6-12 months with full data integration'
        },
        {
          title: 'Multi-Language Intelligence',
          description: 'Seamless German/English with cultural context (addressing 70% guest preference for native language)',
          impact: '85%+ query automation rates (HiJiffy benchmark)',
          differentiator: 'Cultural nuance awareness beyond basic translation',
          timeframe: '2-4 months for core languages'
        },
        {
          title: 'Human-AI Hybrid Model',
          description: 'AI handles simple requests, seamless handoff for complex needs (70% guest preference)',
          impact: '10-30% cost reduction in customer service',
          differentiator: 'Balance automation efficiency with luxury service expectations',
          timeframe: '4-8 months for complete workflow'
        }
      ]
    },
    {
      id: 'voice-interface',
      title: 'Voice-First Experience',
      icon: <Mic className="w-6 h-6" />,
      color: 'secondary',
      tagline: 'Join the 54% of Hotels Implementing Voice Technology',
      currentState: 'No voice capability - missing the 76.8% daily usage opportunity',
      visionState: 'Natural voice commands with 83% weekend guest engagement',
      marketData: '54% of hotels offer/plan voice features; 47% prefer tech over phone calls',
      roiProjection: '30% operational efficiency improvement',
      implementationCost: '$150-500 monthly for mid-market solutions',
      features: [
        {
          title: 'Natural Voice Commands',
          description: '"Order coffee to room 13" - natural conversation matching 76.8% daily usage rates',
          impact: '47% guest preference for voice over phone service',
          differentiator: 'Most hotel apps still text-only; voice creates luxury feeling',
          timeframe: '4-6 months for core voice features'
        },
        {
          title: 'Smart Room Integration',
          description: 'Voice control of lights, temperature, TV through unified interface',
          impact: '83% weekend guest engagement rates',
          differentiator: 'Unified voice vs fragmented device controls',
          timeframe: '6-9 months with IoT integration'
        },
        {
          title: 'Offline Capability',
          description: 'Basic commands work without internet for reliability',
          impact: '95% command reliability target',
          differentiator: 'Reliability when hotel WiFi quality varies',
          timeframe: '3-4 months for essential functions'
        },
        {
          title: 'Contactless Service Flow',
          description: 'Voice-activated check-in and service requests (80% guest demand)',
          impact: '30% operational efficiency improvement',
          differentiator: 'Ultimate convenience addressing contactless preferences',
          timeframe: '5-8 months for full integration'
        }
      ]
    },
    {
      id: 'predictive-intelligence',
      title: 'Predictive Service Engine',
      icon: <Eye className="w-6 h-6" />,
      color: 'accent',
      tagline: 'Achieve 10-15% RevPAR Increases Through Predictive Analytics',
      currentState: 'Reactive service model - missing predictive revenue opportunities',
      visionState: 'AI predicts guest needs achieving 20% conversion rates for at-risk bookings',
      marketData: '80% of properties use AI for personalization; 17% revenue growth potential',
      roiProjection: '10-15% RevPAR increase with 12-18 month payback',
      implementationCost: '$1,000-3,000 monthly for comprehensive analytics',
      features: [
        {
          title: 'Behavioral Pattern Recognition',
          description: 'Analyze guest patterns for business vs leisure, solo vs group optimization',
          impact: '20% conversion rates for at-risk bookings',
          differentiator: 'Deep behavioral understanding vs demographic assumptions',
          timeframe: '6-12 months for pattern recognition'
        },
        {
          title: 'Environmental Context Integration',
          description: 'Weather, events, occupancy context for dynamic recommendations',
          impact: '10-15% revenue increases through optimization',
          differentiator: 'Multi-layered context vs single-factor recommendations',
          timeframe: '8-12 months for full context integration'
        },
        {
          title: 'Dynamic Pricing Optimization',
          description: 'Real-time pricing based on demand, guest value, and market conditions',
          impact: '5-20% RevPAR increases industry benchmark',
          differentiator: 'Intelligent pricing vs static rate cards',
          timeframe: '9-15 months for comprehensive system'
        },
        {
          title: 'Proactive Issue Prevention',
          description: 'Detect potential problems: delays, weather disruptions, capacity issues',
          impact: '40% reduction in guest complaints',
          differentiator: 'Problem prevention vs reactive problem solving',
          timeframe: '12-18 months for full predictive capability'
        }
      ]
    },
    {
      id: 'social-viral',
      title: 'Social & Viral Growth Engine',
      icon: <Users className="w-6 h-6" />,
      color: 'success',
      tagline: 'Create Organic Growth Through Guest Advocacy',
      currentState: 'No social features - missing viral growth opportunities',
      visionState: 'Built-in social features creating organic marketing and referral growth',
      marketData: 'Social media influence drives 35% of travel decisions',
      roiProjection: '25% reduction in customer acquisition costs',
      implementationCost: '$300-800 monthly for social integration platform',
      features: [
        {
          title: 'Journey Story Creation',
          description: 'Auto-generate shareable travel stories with photos and achievements',
          impact: '35% increase in social media mentions',
          differentiator: 'Automated storytelling vs manual social posting',
          timeframe: '3-6 months for story generation'
        },
        {
          title: 'Achievement System',
          description: 'Location badges, service milestones with sharing rewards',
          impact: '45% increase in repeat engagement',
          differentiator: 'Gaming mechanics rare in hospitality apps',
          timeframe: '4-8 months for comprehensive system'
        },
        {
          title: 'Friend Referral Engine',
          description: 'Personal recommendations with Stuttgart Explorer badges and bonuses',
          impact: '25% reduction in customer acquisition costs',
          differentiator: 'Personal recommendations vs generic marketing',
          timeframe: '6-10 months for referral ecosystem'
        },
        {
          title: 'Live Social Proof',
          description: 'Real-time guest activities and authentic experience sharing',
          impact: '30% increase in booking confidence',
          differentiator: 'Real-time validation vs static reviews',
          timeframe: '5-8 months for live integration'
        }
      ]
    }
  ];

  // Research-based competitive analysis
  const competitiveLandscape = [
    {
      competitor: 'Canary Technologies',
      marketPosition: '20,000+ hotels, $80M Series D funding',
      theirApproach: 'Comprehensive guest messaging and upselling platform',
      myAdvantage: 'Voice-first experience + predictive intelligence + social viral features',
      marketGap: 'Limited voice interface and social engagement features'
    },
    {
      competitor: 'Kipsu (Hilton Partnership)',
      marketPosition: '7,000+ properties, exclusive major chain partnership',
      theirApproach: 'Guest messaging with staff workflow integration',
      myAdvantage: 'Independent hotel focus + AI-powered personalization + viral growth',
      marketGap: 'Lacks predictive analytics and social sharing mechanisms'
    },
    {
      competitor: 'HiJiffy',
      marketPosition: '85%+ query automation rates',
      theirApproach: 'AI assistant focused on query automation',
      myAdvantage: 'Holistic experience platform with voice, social, and predictive features',
      marketGap: 'Limited to chat automation without broader guest experience integration'
    },
    {
      competitor: 'Traditional Hotel Apps',
      marketPosition: 'Basic functionality, limited intelligence',
      theirApproach: 'Static information portals with basic booking',
      myAdvantage: 'Full AI ecosystem with cross-property learning and viral mechanics',
      marketGap: '90% lack intelligent features or predictive capabilities'
    }
  ];

  // Research-informed implementation roadmap
  const implementationRoadmap = [
    {
      phase: 'Phase 1: Foundation & Quick Wins (Months 1-6)',
      budget: '$15,000-30,000 setup + $2,000-4,000 monthly',
      innovations: [
        'Enhance current digital concierge with AI (join the 80% with working AI)',
        'Implement core voice commands for room service and concierge',
        'Mobile check-in optimization (80% guest demand)',
        'Basic achievement system with local Stuttgart badges'
      ],
      wowMoment: 'Functional AI assistant and voice-activated services',
      priority: 'Critical foundation - 70% resource allocation to integration and training',
      successMetrics: 'Target 70% guest satisfaction, 25% check-in adoption'
    },
    {
      phase: 'Phase 2: Intelligence & Differentiation (Months 7-12)',
      budget: '$25,000-50,000 expansion + $4,000-8,000 monthly',
      innovations: [
        'Deploy predictive service engine (targeting 10-15% revenue increase)',
        'Advanced multilingual processing (German/English focus)',
        'Journey story creation with photo integration',
        'Dynamic pricing for services (5-20% RevPAR potential)'
      ],
      wowMoment: 'App predicts needs and suggests relevant services proactively',
      priority: 'Revenue generation - targeting industry benchmark performance',
      successMetrics: 'Target 85% guest satisfaction, 12% revenue increase'
    },
    {
      phase: 'Phase 3: Ecosystem & Viral Growth (Months 13-18)',
      budget: '$35,000-70,000 advanced features + $6,000-12,000 monthly',
      innovations: [
        'Cross-property learning and preference synchronization',
        'Advanced environmental context and behavioral prediction',
        'Friend referral engine with personalized Stuttgart recommendations',
        'Real-time social proof and live activity feeds'
      ],
      wowMoment: 'Guests become brand advocates through viral social features',
      priority: 'Market differentiation - network effects and organic growth',
      successMetrics: 'Target 94% satisfaction (Hilton benchmark), 25% referral rate'
    }
  ];

  // Research-based prerequisites with actual data
  const prerequisites = [
    {
      category: 'Technical Infrastructure',
      requirements: [
        'PMS integration (69% cite as primary obstacle)',
        'Cloud infrastructure for AI processing ($100-5,000 monthly)',
        'Data management systems (50% struggle with data quality)',
        'Voice recognition API integration'
      ],
      complexity: 'High',
      timeline: '3-6 months preparation',
      criticalSuccess: 'Integration quality more important than feature breadth'
    },
    {
      category: 'Operational Readiness',
      requirements: [
        'Staff training program (70% resource allocation needed)',
        'Change management for AI-human workflow',
        'Service provider network integration',
        'Revenue management system updates'
      ],
      complexity: 'Medium-High',
      timeline: '4-6 months preparation',
      criticalSuccess: 'Human oversight essential for luxury properties'
    },
    {
      category: 'Compliance & Privacy',
      requirements: [
        'GDPR compliance (€20M or 4% revenue fines)',
        'Guest data consent management',
        'Privacy-compliant behavioral tracking',
        'AI training data licensing agreements'
      ],
      complexity: 'High',
      timeline: '2-4 months legal review',
      criticalSuccess: 'Privacy compliance critical for EU market'
    },
    {
      category: 'Budget & Resources',
      requirements: [
        'Initial investment: $75,000-150,000 (18-month program)',
        'Monthly operational costs: $12,000-24,000',
        'Skilled data science resources (market scarcity)',
        'ROI tracking and performance measurement systems'
      ],
      complexity: 'Medium',
      timeline: '2-3 months financial planning',
      criticalSuccess: '12-18 month payback period industry standard'
    }
  ];

  // Updated success metrics based on research
  const successMetrics = {
    satisfaction: { current: '67% CSAT', target: '94% CSAT (Hilton AI benchmark)', improvement: '+40%' },
    revenue: { current: 'Baseline RevPAR', target: '10-15% RevPAR increase', improvement: '+€250K annually' },
    efficiency: { current: 'Manual processes', target: '30% operational efficiency', improvement: '+€150K savings' },
    adoption: { current: '4% digital check-in', target: '60% digital adoption', improvement: '+1,400% usage' }
  };

  const getActiveInnovation = () => {
    return innovationAreas.find(area => area.id === activeInnovation);
  };

  return (
    <div className="space-y-12">
      {/* Header with Market Context */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Innovation Strategy 2024
        </h1>
        <h2 className="text-2xl font-semibold text-accent mb-6">
          Data-Driven Innovation Roadmap: From Industry Research to Implementation
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto mb-8">
          Based on comprehensive 2024 hospitality technology research, this strategy positions Straiv 
          within the $75.3B smart hospitality market while delivering realistic ROI and guest satisfaction improvements.
        </p>
        
        {/* Market Context Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="stat bg-primary/5 border border-primary/20 rounded-lg">
            <div className="stat-title text-primary">Budget Growth</div>
            <div className="stat-value text-primary">+40%</div>
            <div className="stat-desc">Hotel IT budgets (2021-2023)</div>
          </div>
          <div className="stat bg-secondary/5 border border-secondary/20 rounded-lg">
            <div className="stat-title text-secondary">Market Size</div>
            <div className="stat-value text-secondary">$75.3B</div>
            <div className="stat-desc">Smart hospitality by 2033</div>
          </div>
          <div className="stat bg-accent/5 border border-accent/20 rounded-lg">
            <div className="stat-title text-accent">Hotel Commitment</div>
            <div className="stat-value text-accent">100%</div>
            <div className="stat-desc">Plan tech investment increase</div>
          </div>
          <div className="stat bg-success/5 border border-success/20 rounded-lg">
            <div className="stat-title text-success">Guest Demand</div>
            <div className="stat-value text-success">80%</div>
            <div className="stat-desc">Would download hotel apps</div>
          </div>
        </div>
      </div>

      {/* Innovation Showcase */}
      <div className="card bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 border border-accent/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Innovation Framework</h2>
          
          {/* Innovation Area Selection */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {innovationAreas.map((area) => (
              <button 
                key={area.id}
                className={`btn btn-sm ${activeInnovation === area.id ? `btn-${area.color}` : 'btn-outline'} gap-2 flex-shrink-0 min-w-0`}
                onClick={() => setActiveInnovation(area.id)}
              >
                {area.icon}
                <span className="hidden lg:inline truncate">{area.title}</span>
                <span className="lg:hidden truncate">{area.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Innovation Deep Dive */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">{getActiveInnovation().title}</h3>
              <p className="text-base lg:text-lg text-accent font-semibold mb-4">{getActiveInnovation().tagline}</p>
              
              {/* Market Data & ROI */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
                <div className="p-3 lg:p-4 bg-info/10 rounded-lg border border-info/20">
                  <div className="text-xs font-semibold text-info mb-1">Market Data</div>
                  <div className="text-xs text-base-content/80 break-words">{getActiveInnovation().marketData}</div>
                </div>
                <div className="p-3 lg:p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="text-xs font-semibold text-success mb-1">ROI Projection</div>
                  <div className="text-xs text-base-content/80 break-words">{getActiveInnovation().roiProjection}</div>
                </div>
                <div className="p-3 lg:p-4 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="text-xs font-semibold text-warning mb-1">Investment</div>
                  <div className="text-xs text-base-content/80 break-words">{getActiveInnovation().implementationCost}</div>
                </div>
              </div>
            </div>

            {/* Current vs Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div className="p-4 lg:p-6 bg-error/5 border border-error/20 rounded-lg">
                <h4 className="font-bold text-error mb-3">Current State:</h4>
                <p className="text-xs lg:text-sm text-base-content/80">{getActiveInnovation().currentState}</p>
              </div>
              <div className="p-4 lg:p-6 bg-success/5 border border-success/20 rounded-lg">
                <h4 className="font-bold text-success mb-3">Research-Based Vision:</h4>
                <p className="text-xs lg:text-sm text-base-content/80">{getActiveInnovation().visionState}</p>
              </div>
            </div>

            {/* Innovation Features */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {getActiveInnovation().features.map((feature, index) => (
                <div key={index} className={`card bg-base-100 border border-${getActiveInnovation().color}/20`}>
                  <div className="card-body p-4 lg:p-6">
                    <div className="flex flex-col gap-2 mb-3">
                      <h5 className="font-bold text-base lg:text-lg">{feature.title}</h5>
                      <div className={`badge badge-${getActiveInnovation().color} badge-xs w-fit`}>
                        {feature.timeframe
                          .replace('3-6 months implementation', '3-6mo')
                          .replace('6-12 months with full data integration', '6-12mo')
                          .replace('2-4 months for core languages', '2-4mo')
                          .replace('4-8 months for complete workflow', '4-8mo')
                          .replace('4-6 months for core voice features', '4-6mo')
                          .replace('6-9 months with IoT integration', '6-9mo')
                          .replace('3-4 months for essential functions', '3-4mo')
                          .replace('5-8 months for full integration', '5-8mo')
                          .replace('6-12 months for pattern recognition', '6-12mo')
                          .replace('8-12 months for full context integration', '8-12mo')
                          .replace('9-15 months for comprehensive system', '9-15mo')
                          .replace('12-18 months for full predictive capability', '12-18mo')
                          .replace('3-6 months for story generation', '3-6mo')
                          .replace('4-8 months for comprehensive system', '4-8mo')
                          .replace('6-10 months for referral ecosystem', '6-10mo')
                          .replace('5-8 months for live integration', '5-8mo')
                        }
                      </div>
                    </div>
                    <p className="text-xs lg:text-sm text-base-content/80 mb-4">{feature.description}</p>
                    
                    <div className="space-y-2 lg:space-y-3">
                      <div className="p-2 lg:p-3 bg-success/10 rounded-lg">
                        <div className="text-xs font-semibold mb-1 text-success">Impact:</div>
                        <div className="text-xs text-base-content/70 break-words">{feature.impact}</div>
                      </div>
                      <div className="p-2 lg:p-3 bg-accent/10 rounded-lg">
                        <div className="text-xs font-semibold mb-1 text-accent">Edge:</div>
                        <div className="text-xs text-base-content/70 break-words">{feature.differentiator}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Research-Based Prerequisites */}
      <div className="card bg-warning/5 border border-warning/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Database className="w-6 h-6" />
            Research-Informed Prerequisites
          </h2>
          <p className="text-center text-base-content/80 mb-8 max-w-3xl mx-auto">
            Based on industry research showing 69% cite legacy integration as the primary obstacle 
            and 40% face post-implementation issues. Critical success factors identified from market analysis.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prerequisites.map((prereq, index) => (
              <div key={index} className="card bg-base-100 border border-warning/20">
                <div className="card-body p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <h3 className="font-bold text-base lg:text-lg flex-1">{prereq.category}</h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                      <div className={`badge ${prereq.complexity === 'High' ? 'badge-error' : 'badge-warning'} badge-xs`}>
                        {prereq.complexity}
                      </div>
                      <div className="badge badge-neutral badge-xs text-xs whitespace-nowrap">
                        {prereq.timeline.replace('months', 'mo').replace('preparation', 'prep')}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {prereq.requirements.map((req, rIndex) => (
                      <div key={rIndex} className="flex items-start gap-2">
                        <Wrench className="w-3 h-3 lg:w-4 lg:h-4 text-warning mt-0.5 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-base-content/80 break-words">{req}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 lg:p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="text-xs font-semibold text-accent mb-1">Critical Success:</div>
                    <div className="text-xs text-base-content/70 break-words">{prereq.criticalSuccess}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research-Based Implementation Roadmap */}
      <div className="card bg-primary/5 border border-primary/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Calendar className="w-6 h-6" />
            Data-Driven Implementation Roadmap
          </h2>
          
          <div className="space-y-6">
            {implementationRoadmap.map((phase, index) => (
              <div key={index} className="card bg-base-100 border border-primary/20">
                <div className="card-body p-4 lg:p-6">
                  <div className="flex flex-col gap-3 mb-4">
                    <h3 className="text-lg lg:text-xl font-bold text-primary">{phase.phase}</h3>
                    <div className="flex flex-wrap gap-1">
                      <div className="badge badge-primary badge-xs">
                        {phase.priority.includes('Critical') ? 'Critical' : 
                         phase.priority.includes('Revenue') ? 'Revenue' : 
                         'Growth'}
                      </div>
                      <div className="badge badge-info badge-xs">
                        {phase.budget.includes('15,000-30,000') ? '€15-30K' :
                         phase.budget.includes('25,000-50,000') ? '€25-50K' :
                         '€35-70K'}
                      </div>
                      <div className="badge badge-neutral badge-xs">
                        {phase.phase.includes('1-6') ? '6mo' :
                         phase.phase.includes('7-12') ? '6mo' :
                         '6mo'}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <h4 className="font-semibold text-sm lg:text-base mb-3">Implementation Focus:</h4>
                      <div className="space-y-2">
                        {phase.innovations.map((innovation, iIndex) => (
                          <div key={iIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-xs lg:text-sm text-base-content/80 break-words">{innovation}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-2 lg:p-3 bg-warning/10 rounded-lg border border-warning/20">
                        <div className="text-xs font-semibold text-warning mb-1">Success Metrics:</div>
                        <div className="text-xs text-base-content/70 break-words">{phase.successMetrics}</div>
                      </div>
                    </div>
                    <div className="flex items-start lg:items-center">
                      <div className="p-3 lg:p-4 bg-accent/10 rounded-lg border border-accent/20 w-full">
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-accent flex-shrink-0 mt-0.5" />
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-accent text-sm">Guest Experience:</div>
                            <div className="text-xs lg:text-sm text-base-content/80 mb-2 break-words">{phase.wowMoment}</div>
                            <div className="text-xs text-base-content/60 italic break-words">{phase.priority}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitive Landscape Analysis */}
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Competitive Landscape Analysis</h2>
          <p className="text-center text-base-content/70 mb-8">
            Analysis based on 2024 market leaders and their $80M+ funding rounds
          </p>
          
          <div className="space-y-4">
            {competitiveLandscape.map((comp, index) => (
              <div key={index} className="card bg-base-200 border border-base-300">
                <div className="card-body p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <h3 className="font-bold text-base lg:text-lg flex-1">{comp.competitor}</h3>
                    <div className="badge badge-neutral badge-xs text-xs break-all sm:whitespace-nowrap flex-shrink-0">
                      {comp.marketPosition.length > 30 ? 
                        comp.marketPosition.split(',')[0] + '...' : 
                        comp.marketPosition
                      }
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">THEIR APPROACH</div>
                      <div className="text-xs lg:text-sm text-base-content/70 break-words">{comp.theirApproach}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">STRAIV ADVANTAGE</div>
                      <div className="text-xs lg:text-sm text-success font-medium break-words">{comp.myAdvantage}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">MARKET GAP</div>
                      <div className="text-xs lg:text-sm text-accent break-words">{comp.marketGap}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research-Based Success Metrics */}
      <div className="card bg-gradient-to-r from-success/10 to-accent/10 border border-success/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Industry Benchmark Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(successMetrics).map(([metric, data]) => (
              <div key={metric} className="text-center">
                <div className="text-2xl font-bold text-success mb-1">{data.target}</div>
                <div className="text-sm text-base-content/70 mb-1">{metric.charAt(0).toUpperCase() + metric.slice(1)}</div>
                <div className="text-xs text-base-content/50 mb-2">vs {data.current}</div>
                <div className="badge badge-accent badge-sm">{data.improvement}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center p-6 bg-accent/10 rounded-lg border border-accent/20">
            <h4 className="font-bold text-lg mb-2">Projected Innovation ROI</h4>
            <div className="text-3xl font-bold text-accent mb-2">€2.1M+</div>
            <p className="text-sm text-base-content/70 mb-4">
              Conservative annual value estimate based on industry benchmarks: 10-15% revenue increase, 
              30% operational efficiency improvement, and 25% reduction in customer acquisition costs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <div className="text-base font-bold text-success">12-18 Months</div>
                <div className="text-xs text-base-content/60">Industry Standard Payback</div>
              </div>
              <div className="p-3 bg-info/10 rounded-lg">
                <div className="text-base font-bold text-info">€150K-300K</div>
                <div className="text-xs text-base-content/60">Total Investment Range</div>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg">
                <div className="text-base font-bold text-warning">94% CSAT</div>
                <div className="text-xs text-base-content/60">Target (Hilton AI Benchmark)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation to Next Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button 
          className="card bg-gradient-to-r from-success to-primary text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('growth-strategy')}
        >
          <div className="card-body text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">Growth Strategy</h3>
            <p className="text-sm opacity-80">Hotel adoption and scaling roadmap</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
          className="card bg-gradient-to-r from-accent to-secondary text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('prototype-demo')}
        >
          <div className="card-body text-center">
            <Eye className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">Interactive Demos</h3>
            <p className="text-sm opacity-80">See innovations in action</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default InnovationStrategy; 