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
  Shield
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
      myVision: 'Intelligent assistant that understands guest context, journey stage, and preferences',
      wowFactor: 'Predictive service delivery before guests ask',
      features: [
        {
          title: 'Context-Aware Conversations',
          description: 'AI knows guest arrival date, weather, previous preferences, and journey stage',
          impact: '+340% query resolution rate',
          differentiator: 'Unlike generic chatbots, understands full guest context'
        },
        {
          title: 'Predictive Service Suggestions',
          description: 'Proactively suggests services: "Rain expected tomorrow, book spa now for 20% off"',
          impact: '+180% proactive booking conversion',
          differentiator: 'Anticipates needs instead of reactive responses'
        },
        {
          title: 'Multi-Language Intelligence',
          description: 'Seamless German/English switching with cultural context understanding',
          impact: '+95% international guest satisfaction',
          differentiator: 'Cultural nuance awareness beyond basic translation'
        },
        {
          title: 'Learning Guest Preferences',
          description: 'Remembers preferences across stays: room temp, dining choices, activity interests',
          impact: '+250% personalization accuracy',
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
      myVision: 'Natural voice commands integrated throughout guest journey',
      wowFactor: 'Voice-controlled room service, concierge, and smart room features',
      features: [
        {
          title: 'Natural Voice Commands',
          description: '"Order coffee to room 13" or "Book spa for 3 PM" - natural conversation flow',
          impact: '+420% accessibility and convenience',
          differentiator: 'Most hotel apps still text-only, voice creates luxury feeling'
        },
        {
          title: 'Smart Room Integration',
          description: 'Voice control lights, temperature, TV, blinds through app integration',
          impact: '+280% smart room adoption',
          differentiator: 'Unified voice interface vs fragmented device controls'
        },
        {
          title: 'Offline Voice Processing',
          description: 'Basic voice commands work without internet for reliability',
          impact: '+150% usage in poor connectivity areas',
          differentiator: 'Reliability when hotel WiFi is poor'
        },
        {
          title: 'Voice-Activated Check-in',
          description: '"Complete my check-in" triggers full digital check-in flow hands-free',
          impact: '+190% check-in completion rate',
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
      myVision: 'AI predicts guest needs based on patterns, context, and behavior',
      wowFactor: 'Services appear before guests know they want them',
      features: [
        {
          title: 'Behavioral Pattern Recognition',
          description: 'Analyze guest timeline patterns: business vs leisure, solo vs group behavior',
          impact: '+220% service relevance accuracy',
          differentiator: 'Deep behavioral understanding vs demographic assumptions'
        },
        {
          title: 'Environmental Context Integration',
          description: 'Weather, local events, hotel occupancy, and time context for suggestions',
          impact: '+165% contextual offer acceptance',
          differentiator: 'Multi-layered context vs single-factor recommendations'
        },
        {
          title: 'Preemptive Problem Solving',
          description: 'Detect potential issues: delayed flights, weather disruptions, overbooked services',
          impact: '+290% guest satisfaction through problem prevention',
          differentiator: 'Problem prevention vs problem reaction'
        },
        {
          title: 'Dynamic Pricing Optimization',
          description: 'Real-time pricing for upgrades and services based on demand and guest value',
          impact: '+185% revenue per available service',
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
      myVision: 'Built-in social features that create organic marketing and referral growth',
      wowFactor: 'Guests become brand ambassadors through gamified experiences',
      features: [
        {
          title: 'Journey Story Creation',
          description: 'Auto-generate beautiful travel stories with photos, moments, and achievements',
          impact: '+450% social media sharing',
          differentiator: 'Automated storytelling vs manual posting'
        },
        {
          title: 'Achievement & Badge System',
          description: 'Unlock location badges, service achievements, loyalty milestones with sharing rewards',
          impact: '+320% repeat engagement',
          differentiator: 'Gaming mechanics in hospitality apps are rare'
        },
        {
          title: 'Friend Referral Engine',
          description: '"Your friend Alex stayed here and earned Stuttgart Explorer badge - book now for bonus"',
          impact: '+280% referral conversion rates',
          differentiator: 'Personal recommendations vs generic marketing'
        },
        {
          title: 'Live Social Proof',
          description: 'Show real-time guest activities: "12 guests just checked in", "Sarah loves the spa"',
          impact: '+125% booking confidence',
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
      phase: 'Phase 1: Foundation (Weeks 1-6)',
      innovations: [
        'Rebuild Hermes AI with OpenAI integration and error handling',
        'Implement basic voice command recognition for key actions',
        'Create guest behavioral pattern tracking system',
        'Launch achievement system with local exploration badges'
      ],
      wowMoment: 'AI that actually works and voice-activated room service'
    },
    {
      phase: 'Phase 2: Intelligence (Weeks 7-12)',
      innovations: [
        'Deploy predictive service suggestion engine',
        'Integrate multi-language voice processing with cultural context',
        'Launch journey story auto-generation with social sharing',
        'Implement dynamic pricing optimization for services'
      ],
      wowMoment: 'App predicts and suggests services before guests ask'
    },
    {
      phase: 'Phase 3: Ecosystem (Weeks 13-18)',
      innovations: [
        'Cross-property learning and preference synchronization',
        'Advanced environmental context integration (weather, events, occupancy)',
        'Friend referral engine with personalized recommendations',
        'Real-time social proof and live activity feeds'
      ],
      wowMoment: 'Guests become brand advocates through viral social features'
    }
  ];

  const successMetrics = {
    engagement: { current: '3.2 min/session', target: '12+ min/session', improvement: '+275%' },
    satisfaction: { current: '67% CSAT', target: '92% CSAT', improvement: '+37%' },
    retention: { current: '7.6% (Day 7)', target: '24% (Day 7)', improvement: '+216%' },
    virality: { current: '0% referral rate', target: '15% referral rate', improvement: '+∞' }
  };

  const getActiveInnovation = () => {
    return innovationAreas.find(area => area.id === activeInnovation);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4">
          My Innovation Strategy
        </h1>
        <h2 className="text-2xl font-semibold text-accent mb-6">
          AI-Powered Competitive Differentiation
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          My innovation approach focuses on creating "wow factor" experiences that differentiate Straiv through 
          AI intelligence, voice interfaces, predictive services, and viral social features that competitors can't match.
        </p>
      </div>

      {/* Innovation Showcase */}
      <div className="card bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 border border-accent/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Innovation Framework</h2>
          
          {/* Innovation Area Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {innovationAreas.map((area) => (
              <button 
                key={area.id}
                className={`btn ${activeInnovation === area.id ? `btn-${area.color}` : 'btn-outline'} h-auto py-4`}
                onClick={() => setActiveInnovation(area.id)}
              >
                <div className="text-center">
                  {area.icon}
                  <div className="text-sm font-bold mt-2">{area.title}</div>
                </div>
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
                <h4 className="font-bold text-error mb-3">Current State Problem:</h4>
                <p className="text-sm text-base-content/80">{getActiveInnovation().currentState}</p>
              </div>
              <div className="p-6 bg-success/5 border border-success/20 rounded-lg">
                <h4 className="font-bold text-success mb-3">My Innovation Vision:</h4>
                <p className="text-sm text-base-content/80">{getActiveInnovation().myVision}</p>
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

      {/* Competitive Differentiation Analysis */}
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Competitive Differentiation Analysis</h2>
          
          {/* Mobile-friendly card layout */}
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

      {/* Implementation Roadmap */}
      <div className="card bg-primary/5 border border-primary/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Innovation Implementation Roadmap</h2>
          
          <div className="space-y-6">
            {implementationRoadmap.map((phase, index) => (
              <div key={index} className="card bg-base-100 border border-primary/20">
                <div className="card-body">
                  <h3 className="text-xl font-bold text-primary mb-3">{phase.phase}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Innovation Deliverables:</h4>
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
                            <div className="font-semibold text-accent">Wow Moment:</div>
                            <div className="text-sm text-base-content/80">{phase.wowMoment}</div>
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

      {/* Success Metrics */}
      <div className="card bg-gradient-to-r from-success/10 to-accent/10 border border-success/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Innovation Impact Metrics</h2>
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
            <h4 className="font-bold text-lg mb-2">Innovation ROI</h4>
            <div className="text-3xl font-bold text-accent mb-2">€3.2M+</div>
            <p className="text-sm text-base-content/70">
              Annual value from AI efficiency, voice interface adoption, predictive service upselling, 
              and viral growth reducing customer acquisition costs by 60%.
            </p>
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
            <h3 className="card-title justify-center">Experience Innovation</h3>
            <p className="text-sm opacity-80">Interactive demo of AI and voice features</p>
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