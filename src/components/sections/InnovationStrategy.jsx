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
  Wrench
} from 'lucide-react';

const InnovationStrategy = ({ onSectionChange }) => {
  const [activeInnovation, setActiveInnovation] = useState('ai-assistant');

  const innovationAreas = [
    {
      id: 'ai-assistant',
      title: 'AI Guest Intelligence',
      icon: <Brain className="w-6 h-6" />,
      color: 'primary',
      tagline: 'Hermes AI Rebuilt with Context Awareness',
      currentState: 'Broken chatbot that throws errors on every interaction',
      visionState: 'Intelligent assistant that understands guest context, journey stage, and preferences',
      wowFactor: 'Predictive service delivery before guests ask',
      features: [
        {
          title: 'Context-Aware Conversations',
          description: 'AI knows guest arrival date, weather, previous preferences, and journey stage',
          impact: 'Target 85% first-contact resolution',
          differentiator: 'Unlike generic chatbots, understands full guest context'
        },
        {
          title: 'Predictive Service Suggestions',
          description: 'Proactively suggests services: "Rain expected tomorrow, book spa now for 20% off"',
          impact: 'Target 45% proactive booking rate',
          differentiator: 'Anticipates needs instead of reactive responses'
        },
        {
          title: 'Multi-Language Intelligence',
          description: 'Seamless German/English switching with cultural context understanding',
          impact: 'Target 90% international satisfaction',
          differentiator: 'Cultural nuance awareness beyond basic translation'
        },
        {
          title: 'Learning Guest Preferences',
          description: 'Remembers preferences across stays: room temp, dining choices, activity interests',
          impact: 'Target 70% personalization accuracy',
          differentiator: 'Cross-stay memory creates VIP treatment feeling'
        }
      ]
    },
    {
      id: 'voice-interface',
      title: 'Voice-First Experience',
      icon: <Mic className="w-6 h-6" />,
      color: 'secondary',
      tagline: 'Hands-Free Hotel Experience',
      currentState: 'No voice interaction capability, text-only interface',
      visionState: 'Natural voice commands integrated throughout guest journey',
      wowFactor: 'Voice-controlled room service, concierge, and smart room features',
      features: [
        {
          title: 'Natural Voice Commands',
          description: '"Order coffee to room 13" or "Book spa for 3 PM" - natural conversation flow',
          impact: 'Target 60% voice adoption rate',
          differentiator: 'Most hotel apps still text-only, voice creates luxury feeling'
        },
        {
          title: 'Smart Room Integration',
          description: 'Voice control lights, temperature, TV, blinds through app integration',
          impact: 'Target 30% smart room usage',
          differentiator: 'Unified voice interface vs fragmented device controls'
        },
        {
          title: 'Offline Voice Processing',
          description: 'Basic voice commands work without internet for reliability',
          impact: 'Target 95% command reliability',
          differentiator: 'Reliability when hotel WiFi is poor'
        },
        {
          title: 'Voice-Activated Check-in',
          description: '"Complete my check-in" triggers full digital check-in flow hands-free',
          impact: 'Target 25% voice check-in adoption',
          differentiator: 'Ultimate convenience for busy travelers'
        }
      ]
    },
    {
      id: 'predictive-intelligence',
      title: 'Predictive Service Engine',
      icon: <Eye className="w-6 h-6" />,
      color: 'accent',
      tagline: 'Anticipate Needs Before Guests Ask',
      currentState: 'Reactive service model - guests must discover and request everything',
      visionState: 'AI predicts guest needs based on patterns, context, and behavior',
      wowFactor: 'Services appear before guests know they want them',
      features: [
        {
          title: 'Behavioral Pattern Recognition',
          description: 'Analyze guest timeline patterns: business vs leisure, solo vs group behavior',
          impact: 'Target 65% service relevance',
          differentiator: 'Deep behavioral understanding vs demographic assumptions'
        },
        {
          title: 'Environmental Context Integration',
          description: 'Weather, local events, hotel occupancy, and time context for suggestions',
          impact: 'Target 40% contextual offer acceptance',
          differentiator: 'Multi-layered context vs single-factor recommendations'
        },
        {
          title: 'Proactive Problem Solving',
          description: 'Detect potential issues: delayed flights, weather disruptions, overbooked services',
          impact: 'Target 80% issue prevention rate',
          differentiator: 'Problem prevention vs problem reaction'
        },
        {
          title: 'Dynamic Pricing Optimization',
          description: 'Real-time pricing for upgrades and services based on demand and guest value',
          impact: 'Target 20% revenue increase',
          differentiator: 'Intelligent pricing vs static rate cards'
        }
      ]
    },
    {
      id: 'social-viral',
      title: 'Social & Viral Features',
      icon: <Users className="w-6 h-6" />,
      color: 'success',
      tagline: 'Create Shareable Moments That Drive Organic Growth',
      currentState: 'No social features, zero viral mechanisms or sharing incentives',
      visionState: 'Built-in social features that create organic marketing and referral growth',
      wowFactor: 'Guests become brand ambassadors through gamified experiences',
      features: [
        {
          title: 'Journey Story Creation',
          description: 'Auto-generate beautiful travel stories with photos, moments, and achievements',
          impact: 'Target 25% social sharing rate',
          differentiator: 'Automated storytelling vs manual posting'
        },
        {
          title: 'Achievement & Badge System',
          description: 'Unlock location badges, service achievements, loyalty milestones with sharing rewards',
          impact: 'Target 35% repeat engagement',
          differentiator: 'Gaming mechanics in hospitality apps are rare'
        },
        {
          title: 'Friend Referral Engine',
          description: '"Your friend Alex stayed here and earned Stuttgart Explorer badge - book now for bonus"',
          impact: 'Target 15% referral conversion',
          differentiator: 'Personal recommendations vs generic marketing'
        },
        {
          title: 'Live Social Proof',
          description: 'Show real-time guest activities: "12 guests just checked in", "Sarah loves the spa"',
          impact: 'Target 20% booking confidence boost',
          differentiator: 'Real-time social validation vs static reviews'
        }
      ]
    }
  ];

  const competitiveDifferentiation = [
    {
      competitor: 'Traditional Hotel Apps',
      theirApproach: 'Static information portals with basic booking',
      myAdvantage: 'AI-powered predictive service delivery with voice interface',
      marketGap: '85% of hotel apps lack intelligent personalization'
    },
    {
      competitor: 'Marriott Mobile',
      theirApproach: 'Digital key + mobile check-in + basic chat',
      myAdvantage: 'Journey-stage intelligence + predictive AI + social features',
      marketGap: 'No contextual awareness or behavioral prediction'
    },
    {
      competitor: 'Hilton Honors',
      theirApproach: 'Loyalty program integration + room selection',
      myAdvantage: 'Voice-first experience + real-time social proof + viral mechanics',
      marketGap: 'Limited engagement beyond transactions'
    },
    {
      competitor: 'Independent Hotel Solutions',
      theirApproach: 'Basic PWA with menu and contact information',
      myAdvantage: 'Full AI ecosystem with cross-property learning',
      marketGap: '90% lack any intelligent features or personalization'
    }
  ];

  const implementationRoadmap = [
    {
      phase: 'Phase 0: Foundation (Weeks 1-6)',
      innovations: [
        'Fix current broken chatbot with basic error handling',
        'Implement simple voice commands for core functions (room service, concierge)',
        'Establish guest data collection and consent framework',
        'Create basic achievement system with local exploration badges'
      ],
      wowMoment: 'AI that actually works and basic voice-activated services',
      priority: 'Critical foundation - must work before advancing'
    },
    {
      phase: 'Phase 1: Intelligence (Weeks 7-12)',
      innovations: [
        'Deploy predictive service suggestion engine with basic patterns',
        'Integrate multi-language processing (German/English focus)',
        'Launch journey story creation with manual photo selection',
        'Implement basic dynamic pricing for select services'
      ],
      wowMoment: 'App begins to predict and suggest relevant services',
      priority: 'Core differentiation - predictive intelligence'
    },
    {
      phase: 'Phase 2: Ecosystem (Weeks 13-18)',
      innovations: [
        'Cross-property learning and preference synchronization',
        'Advanced environmental context integration',
        'Friend referral engine with personalized recommendations',
        'Real-time social proof and live activity feeds'
      ],
      wowMoment: 'Guests become brand advocates through viral social features',
      priority: 'Advanced features - network effects and growth'
    }
  ];

  const prerequisites = [
    {
      category: 'Technical Infrastructure',
      requirements: [
        'PMS integration capabilities assessment',
        'Guest data privacy and consent management system',
        'Cloud infrastructure for AI processing and voice recognition',
        'API frameworks for third-party service integrations'
      ],
      complexity: 'High',
      timeline: '8-12 weeks preparation'
    },
    {
      category: 'Hotel Operations',
      requirements: [
        'Staff training program for AI-assisted guest services',
        'Service provider network integration (spa, restaurant, activities)',
        'Revenue management system integration for dynamic pricing',
        'Guest communication protocol updates'
      ],
      complexity: 'Medium',
      timeline: '4-6 weeks preparation'
    },
    {
      category: 'Guest Experience',
      requirements: [
        'Onboarding flow for voice permissions and preferences',
        'Multilingual content management system',
        'Feedback collection and AI training data pipeline',
        'Privacy-compliant behavioral tracking system'
      ],
      complexity: 'Medium',
      timeline: '6-8 weeks preparation'
    },
    {
      category: 'Business Model',
      requirements: [
        'Revenue sharing agreements with service providers',
        'AI training data licensing and usage agreements',
        'Social media integration and content rights management',
        'Performance metrics and ROI tracking systems'
      ],
      complexity: 'Medium',
      timeline: '4-6 weeks preparation'
    }
  ];

  const successMetrics = {
    engagement: { current: '3.2 min/session', target: '8+ min/session', improvement: '+150%' },
    satisfaction: { current: '67% CSAT', target: '85% CSAT', improvement: '+27%' },
    retention: { current: '7.6% (Day 7)', target: '18% (Day 7)', improvement: '+137%' },
    referrals: { current: '0% referral rate', target: '12% referral rate', improvement: 'New metric' }
  };

  const getActiveInnovation = () => {
    return innovationAreas.find(area => area.id === activeInnovation);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Innovation North Star
        </h1>
        <h2 className="text-2xl font-semibold text-accent mb-6">
          Strategic Innovation Roadmap: From Foundation to AI Excellence
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          My innovation vision creates a compelling future state that differentiates Straiv, while acknowledging 
          the practical steps needed to get there. This roadmap balances ambitious AI capabilities with 
          realistic hotel constraints and guest adoption patterns.
        </p>
      </div>

      {/* Reality Check Alert */}
      <div className="alert alert-info">
        <AlertTriangle className="w-5 h-5" />
        <div>
          <h3 className="font-bold">Strategic Positioning</h3>
          <div className="text-sm">
            This innovation framework serves as our north star while acknowledging current hotel technology constraints. 
            We start with foundation fixes, then build toward AI differentiation as infrastructure and adoption mature.
          </div>
        </div>
      </div>

      {/* Innovation Showcase */}
      <div className="card bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 border border-accent/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Innovation Framework</h2>
          
          {/* Innovation Area Selection */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 mb-8">
            {innovationAreas.map((area) => (
              <button 
                key={area.id}
                className={`btn btn-sm sm:btn-md ${activeInnovation === area.id ? `btn-${area.color}` : 'btn-outline'} gap-2 flex-shrink-0 w-full sm:w-auto`}
                onClick={() => setActiveInnovation(area.id)}
              >
                {area.icon}
                <span className="hidden sm:inline">{area.title}</span>
                <span className="sm:hidden">{area.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Innovation Deep Dive */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{getActiveInnovation().title}</h3>
              <p className="text-lg text-accent font-semibold mb-4">{getActiveInnovation().tagline}</p>
              <p className="text-base-content/80 max-w-2xl mx-auto">{getActiveInnovation().wowFactor}</p>
            </div>

            {/* Current vs Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 bg-error/5 border border-error/20 rounded-lg">
                <h4 className="font-bold text-error mb-3">Current State Reality:</h4>
                <p className="text-sm text-base-content/80">{getActiveInnovation().currentState}</p>
              </div>
              <div className="p-6 bg-success/5 border border-success/20 rounded-lg">
                <h4 className="font-bold text-success mb-3">Innovation Vision:</h4>
                <p className="text-sm text-base-content/80">{getActiveInnovation().visionState}</p>
              </div>
            </div>

            {/* Innovation Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getActiveInnovation().features.map((feature, index) => (
                <div key={index} className={`card bg-base-100 border border-${getActiveInnovation().color}/20`}>
                  <div className="card-body p-6">
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <h5 className="font-bold text-lg flex-1">{feature.title}</h5>
                      <div className={`badge badge-${getActiveInnovation().color} badge-sm flex-shrink-0`}>{feature.impact}</div>
                    </div>
                    <p className="text-sm text-base-content/80 mb-4">{feature.description}</p>
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <div className="text-xs font-semibold mb-1">Competitive Edge:</div>
                      <div className="text-xs text-base-content/70">{feature.differentiator}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites for Success */}
      <div className="card bg-warning/5 border border-warning/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Settings className="w-6 h-6" />
            Prerequisites for Success
          </h2>
          <p className="text-center text-base-content/80 mb-8 max-w-3xl mx-auto">
            Before implementing advanced AI features, these foundational elements must be in place. 
            This realistic assessment acknowledges hotel technology constraints and operational realities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prerequisites.map((prereq, index) => (
              <div key={index} className="card bg-base-100 border border-warning/20">
                <div className="card-body">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">{prereq.category}</h3>
                    <div className="flex items-center gap-2">
                      <div className={`badge ${prereq.complexity === 'High' ? 'badge-error' : 'badge-warning'} badge-sm`}>
                        {prereq.complexity}
                      </div>
                      <div className="badge badge-neutral badge-sm">{prereq.timeline}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {prereq.requirements.map((req, rIndex) => (
                      <div key={rIndex} className="flex items-start gap-2">
                        <Wrench className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-base-content/80">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Roadmap */}
      <div className="card bg-primary/5 border border-primary/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Realistic Implementation Roadmap</h2>
          
          <div className="space-y-6">
            {implementationRoadmap.map((phase, index) => (
              <div key={index} className="card bg-base-100 border border-primary/20">
                <div className="card-body">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary">{phase.phase}</h3>
                    <div className="badge badge-primary badge-sm">{phase.priority}</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Implementation Focus:</h4>
                      <div className="space-y-2">
                        {phase.innovations.map((innovation, iIndex) => (
                          <div key={iIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                            <span className="text-sm text-base-content/80">{innovation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 w-full">
                        <div className="flex items-center gap-3">
                          <Sparkles className="w-6 h-6 text-accent" />
                          <div>
                            <div className="font-semibold text-accent">Guest Experience:</div>
                            <div className="text-sm text-base-content/80 mb-2">{phase.wowMoment}</div>
                            <div className="text-xs text-base-content/60 italic">{phase.priority}</div>
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

      {/* Competitive Differentiation Analysis */}
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Competitive Differentiation Analysis</h2>
          
          <div className="space-y-4">
            {competitiveDifferentiation.map((comp, index) => (
              <div key={index} className="card bg-base-200 border border-base-300">
                <div className="card-body p-4">
                  <h3 className="font-bold text-lg mb-3">{comp.competitor}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">THEIR APPROACH</div>
                      <div className="text-sm text-base-content/70">{comp.theirApproach}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">MY ADVANTAGE</div>
                      <div className="text-sm text-success font-medium">{comp.myAdvantage}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">MARKET GAP</div>
                      <div className="text-sm text-accent">{comp.marketGap}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Realistic Success Metrics */}
      <div className="card bg-gradient-to-r from-success/10 to-accent/10 border border-success/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Realistic Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
            <div className="text-3xl font-bold text-accent mb-2">€1.8M+</div>
            <p className="text-sm text-base-content/70">
              Conservative annual value estimate from improved AI efficiency, voice interface adoption, 
              predictive service upselling, and viral growth reducing customer acquisition costs by 35%.
            </p>
            <div className="mt-4 text-xs text-base-content/60">
              <em>Based on realistic adoption rates and hotel industry benchmarks</em>
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
            <h3 className="card-title justify-center">My Growth Strategy</h3>
            <p className="text-sm opacity-80">Hotel adoption and guest engagement scaling</p>
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
            <h3 className="card-title justify-center">Interactive Mockups</h3>
            <p className="text-sm opacity-80">See my recommendations in action</p>
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