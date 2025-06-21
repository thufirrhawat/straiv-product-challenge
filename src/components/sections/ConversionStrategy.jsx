import React, { useState } from 'react';
import { 
  TrendingUp,
  UserPlus,
  Calendar,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  DollarSign,
  Zap,
  Star,
  Smartphone,
  Brain,
  Award,
  BarChart3,
  Users,
  CreditCard
} from 'lucide-react';

const ConversionStrategy = ({ onSectionChange }) => {
  const [activeConversionArea, setActiveConversionArea] = useState('onboarding');

  const conversionAreas = [
    {
      id: 'onboarding',
      title: 'Onboarding Optimization',
      icon: <UserPlus className="w-6 h-6" />,
      color: 'primary',
      currentMetrics: { rate: '19%', time: '~3-4 min', abandonment: '81%' },
      targetMetrics: { rate: '25-30%', time: '~2 min', abandonment: '70-75%' },
      currentProblems: [
        'No differentiation between guest types (business vs leisure)',
        'Generic welcome flow overwhelming users with too many options',
        'No immediate value demonstration or quick wins',
        'Poor mobile experience with complex form fields'
      ],
      myStrategy: [
        'Progressive onboarding targeting 25-30% completion (vs current 19% industry benchmark)',
        'Immediate value delivery: weather, local events, express check-in',
        'Guest type detection for personalized first experience',
        'Single-tap registration with hotel booking data pre-fill'
      ],
      improvements: [
        {
          title: 'Journey-Aware Welcome',
          description: 'Detect guest type and journey stage to show relevant onboarding flow',
          impact: '2x completion improvement',
          technique: 'Conditional logic based on booking data, arrival date, stay duration'
        },
        {
          title: 'Immediate Value Delivery',
          description: 'Show weather, express check-in progress, and one personalized suggestion',
          impact: 'Significantly higher engagement',
          technique: 'Pre-load contextual data: weather API, local events, guest preferences'
        },
        {
          title: 'Progressive Feature Discovery',
          description: 'Unlock features gradually as guests use app, creating achievement moments',
          impact: 'Improved feature discovery',
          technique: 'Gamified feature unlocks tied to usage milestones and journey progression'
        },
        {
          title: 'Social Proof Integration',
          description: 'Show recent guest activities: "12 guests checked in today", "Sarah loved the spa"',
          impact: 'Enhanced trust & credibility',
          technique: 'Anonymous activity feed + curated guest testimonials with photo verification'
        }
      ]
    },
    {
      id: 'checkin-checkout',
      title: 'Check-in/Checkout Flow',
      icon: <Calendar className="w-6 h-6" />,
      color: 'secondary',
      currentMetrics: { rate: '4%', time: '~3-4 min', satisfaction: '~65-70%' },
      targetMetrics: { rate: '15-25%', time: '~1-2 min', satisfaction: '90%+' },
      currentProblems: [
        'Check-in buried in menu instead of homepage prominence',
        'No upselling integration during check-in process',
        'Generic checkout with no personalization or late checkout offers',
        'No real-time room status or digital key activation'
      ],
      myStrategy: [
        'Homepage hero section targeting 15-25% adoption (vs current 4% despite 54% consumer demand)',
        'Smart upselling integrated at optimal decision moments',
        'Weather-aware checkout timing and contextual late checkout offers',
        'Seamless digital key activation with room readiness notifications'
      ],
      improvements: [
        {
          title: 'Homepage Check-in Hero',
          description: 'Prominent check-in card with progress bar, room status, and arrival countdown',
          impact: '10x+ adoption improvement',
          technique: 'Dynamic hero section based on guest journey stage and arrival proximity'
        },
        {
          title: 'Contextual Upgrade Offers',
          description: 'Show room upgrades during check-in based on availability and guest profile',
          impact: 'Substantial upgrade uptake',
          technique: 'Real-time PMS integration with dynamic pricing and availability triggers'
        },
        {
          title: 'Intelligent Checkout Timing',
          description: 'Weather-aware late checkout suggestions: "Rainy morning? Extend to 1 PM for €15"',
          impact: 'Higher late checkout rates',
          technique: 'Weather API + guest behavior analysis + dynamic pricing optimization'
        },
        {
          title: 'Seamless Digital Key Flow',
          description: 'Automatic key activation post check-in with room location and access instructions',
          impact: 'Near-universal adoption',
          technique: 'PMS integration + lock system API + augmented reality room finding'
        }
      ]
    },
    {
      id: 'transactions',
      title: 'In-App Transactions',
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'accent',
      currentMetrics: { rate: '2.6%', value: '~€40-50', attachment: '~6%' },
      targetMetrics: { rate: '4-6%', value: '€80-100', attachment: '15-20%' },
      currentProblems: [
        'Generic product catalog with no guest context or weather awareness',
        'Broken ordering flows with no tracking or delivery updates',
        'No service bundling or cross-selling opportunities',
        'Complex checkout process for returning guests'
      ],
      myStrategy: [
        'Context-aware product curation targeting 4-6% conversion (vs current 2.6% mobile rate)',
        'One-tap checkout for returning guests with payment method storage',
        'Smart service bundling targeting 15-20% upsell rates (vs current 6% industry average)',
        'Real-time order tracking with gamified delivery experience'
      ],
      improvements: [
        {
          title: 'Context-Aware Product Curation',
          description: 'Rainy day: spa packages + cozy amenities. Sunny: outdoor dining + activity gear',
          impact: 'Higher relevance & conversion',
          technique: 'Weather API + time-of-day logic + guest preference machine learning'
        },
        {
          title: 'One-Tap Checkout Experience',
          description: 'Stored payment methods, delivery preferences, and room information for instant purchases',
          impact: 'Dramatically reduced abandonment',
          technique: 'Secure payment tokenization + guest profile optimization + delivery automation'
        },
        {
          title: 'Smart Service Bundling Engine',
          description: 'Suggest complementary services: "Add wine pairing to dinner reservation for 20% off"',
          impact: 'Significant AOV increase',
          technique: 'Machine learning recommendation engine + dynamic pricing + cross-category analysis'
        },
        {
          title: 'Gamified Order Tracking',
          description: 'Progress visualization: "Your coffee is brewing ☕ Delivery in 8 minutes" with rewards',
          impact: 'Higher repeat usage',
          technique: 'Real-time POS integration + delivery tracking + achievement system with loyalty points'
        }
      ]
    }
  ];

  const overallImpactMetrics = {
    conversionFunnel: {
      current: {
        awareness: '100%',
        onboarding: '19%',
        checkin: '4%',
        transaction: '2.6%',
        loyalty: '4.5%'
      },
      target: {
        awareness: '100%',
        onboarding: '25-30%',
        checkin: '15-25%',
        transaction: '4-6%',
        loyalty: '8-12%'
      }
    },
    revenueImpact: {
      conversionGains: { current: '2.6%', target: '4-6%', improvement: '+130-150%' },
      upsellRevenue: { current: '6%', target: '15-20%', improvement: '+150-230%' },
      operationalSavings: { current: '€0', target: '15%', improvement: '15% cost reduction' },
      totalHotelValue: { current: 'Baseline', target: '€2.5-3.2M', improvement: 'Annual impact' }
    }
  };

  const implementationStrategy = [
    {
      phase: 'Week 1-2',
      title: 'Quick Wins',
      color: 'error',
      tasks: [
        'Promote check-in to homepage hero section',
        'Fix broken ordering flows and add basic tracking',
        'Implement one-tap payment for returning guests',
        'Add weather context to product recommendations'
      ]
    },
    {
      phase: 'Week 3-6',
      title: 'Optimization',
      color: 'warning', 
      tasks: [
        'Progressive onboarding with guest type detection',
        'Dynamic upgrade offers during check-in process',
        'Smart service bundling engine',
        'Real-time order tracking with notifications'
      ]
    },
    {
      phase: 'Week 7-12',
      title: 'Intelligence',
      color: 'success',
      tasks: [
        'AI-powered personalization across all touchpoints',
        'Predictive upselling based on guest behavior',
        'Gamified loyalty integration with achievement system',
        'Advanced analytics and conversion optimization'
      ]
    }
  ];

  const getActiveArea = () => {
    return conversionAreas.find(area => area.id === activeConversionArea);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4">
          My Conversion Strategy
        </h1>
        <h2 className="text-2xl font-semibold text-secondary mb-6">
          Optimizing Critical Touchpoints for Revenue Impact
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          My systematic approach to transforming onboarding, check-in/checkout, and transaction flows 
          through context-aware optimization, intelligent upselling, and frictionless user experiences.
        </p>
        <p className="text-sm text-base-content/60 max-w-3xl mx-auto mt-4 italic">
          *Performance benchmarks based on 2024 hospitality industry research from Userpilot, Canary Technologies, and Statista
        </p>
      </div>

      {/* Current vs Target Metrics Overview */}
      <div className="card bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 border border-secondary/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Conversion Funnel Transformation</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Funnel */}
            <div>
              <h3 className="text-lg font-bold text-error mb-4">Current Performance</h3>
              <div className="space-y-3">
                {Object.entries(overallImpactMetrics.conversionFunnel.current).map(([stage, rate]) => (
                  <div key={stage} className="flex items-center justify-between p-3 bg-error/10 rounded border border-error/20">
                    <span className="capitalize font-medium">{stage}</span>
                    <span className="font-bold text-error">{rate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Funnel */}
            <div>
              <h3 className="text-lg font-bold text-success mb-4">My Target Performance</h3>
              <div className="space-y-3">
                {Object.entries(overallImpactMetrics.conversionFunnel.target).map(([stage, rate]) => (
                  <div key={stage} className="flex items-center justify-between p-3 bg-success/10 rounded border border-success/20">
                    <span className="capitalize font-medium">{stage}</span>
                    <div className="text-right">
                      <span className="font-bold text-success">{rate}</span>
                      <div className="text-xs text-success/70">
                        {stage !== 'awareness' && stage !== 'loyalty' && 'Target improvement'}
                        {stage === 'loyalty' && 'Target improvement'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Area Deep Dive */}
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Optimization Framework</h2>
          
          {/* Area Selection */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 mb-8">
            {conversionAreas.map((area) => (
              <button 
                key={area.id}
                className={`btn btn-sm sm:btn-md ${activeConversionArea === area.id ? `btn-${area.color}` : 'btn-outline'} gap-2 flex-shrink-0 w-full sm:w-auto`}
                onClick={() => setActiveConversionArea(area.id)}
              >
                {area.icon}
                <span className="hidden sm:inline">{area.title}</span>
                <span className="sm:hidden">{area.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Area Content */}
          <div className="space-y-8">
            {/* Metrics Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(getActiveArea().currentMetrics).map(([metric, value]) => (
                <div key={metric} className="text-center">
                  <div className="text-2xl font-bold text-error mb-1">{value}</div>
                  <div className="text-sm text-base-content/70 mb-2">Current {metric}</div>
                  <div className="text-lg font-bold text-success">{getActiveArea().targetMetrics[metric]}</div>
                  <div className="text-xs text-success">Target</div>
                </div>
              ))}
            </div>

            {/* Problems vs Strategy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-error mb-4">Current Problems:</h4>
                <div className="space-y-3">
                  {getActiveArea().currentProblems.map((problem, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-error/5 rounded border border-error/20">
                      <div className="w-2 h-2 bg-error rounded-full mt-2"></div>
                      <span className="text-sm text-base-content/80">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-success mb-4">My Strategy:</h4>
                <div className="space-y-3">
                  {getActiveArea().myStrategy.map((strategy, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-success/5 rounded border border-success/20">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      <span className="text-sm text-base-content/80">{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Improvement Tactics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getActiveArea().improvements.map((improvement, index) => (
                <div key={index} className={`card bg-base-100 border border-${getActiveArea().color}/20`}>
                  <div className="card-body p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h5 className="font-bold text-lg">{improvement.title}</h5>
                      <div className={`badge badge-${getActiveArea().color} badge-sm`}>{improvement.impact}</div>
                    </div>
                    <p className="text-sm text-base-content/80 mb-4">{improvement.description}</p>
                    <div className="p-3 bg-base-200 rounded-lg">
                      <div className="text-xs font-semibold mb-1">Implementation:</div>
                      <div className="text-xs text-base-content/70">{improvement.technique}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Impact Analysis */}
      <div className="card bg-gradient-to-r from-success/10 to-primary/10 border border-success/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Projected Revenue Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(overallImpactMetrics.revenueImpact).map(([category, data]) => (
              <div key={category} className="text-center">
                <div className="text-2xl font-bold text-success mb-1">{data.target}</div>
                <div className="text-sm text-base-content/70 mb-1">{category.replace(/([A-Z])/g, ' $1').trim()}</div>
                <div className="text-xs text-base-content/50 mb-2">vs {data.current}</div>
                <div className="badge badge-success badge-sm">{data.improvement}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center p-6 bg-primary/10 rounded-lg border border-primary/20">
            <h4 className="font-bold text-lg mb-2">Annual Revenue Impact per Hotel</h4>
            <div className="text-3xl font-bold text-primary mb-2">€2.5-3.2M</div>
            <p className="text-sm text-base-content/70">
              Annual value creation per hotel based on documented case studies: Penta Hotels (37.8% conversion improvement), 
              revenue management systems (26% RevPAR increases), and digital transformation (15-20% operational savings).
            </p>
          </div>
        </div>
      </div>

      {/* Implementation Roadmap */}
      <div className="card bg-info/5 border border-info/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Implementation Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {implementationStrategy.map((phase, index) => (
              <div key={index} className="space-y-4">
                <h3 className={`font-bold text-${phase.color} flex items-center gap-2`}>
                  <Clock className="w-5 h-5" />
                  {phase.phase}: {phase.title}
                </h3>
                <div className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className={`p-3 border border-${phase.color}/20 rounded bg-${phase.color}/5`}>
                      <div className="text-sm font-medium">{task}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Measurement Framework */}
      <div className="card bg-accent/5 border border-accent/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Success Measurement Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-accent mb-4">Leading Indicators</h4>
              <div className="space-y-2">
                <div className="p-3 border border-accent/20 rounded">
                  <div className="font-medium text-sm">Onboarding completion rate</div>
                  <div className="text-xs text-base-content/70">Daily tracking with cohort analysis</div>
                </div>
                <div className="p-3 border border-accent/20 rounded">
                  <div className="font-medium text-sm">Feature discovery rate</div>
                  <div className="text-xs text-base-content/70">Progressive unlock achievements</div>
                </div>
                <div className="p-3 border border-accent/20 rounded">
                  <div className="font-medium text-sm">Upselling offer visibility</div>
                  <div className="text-xs text-base-content/70">Contextual offer impression rates</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-4">Conversion Metrics</h4>
              <div className="space-y-2">
                <div className="p-3 border border-secondary/20 rounded">
                  <div className="font-medium text-sm">Digital check-in adoption</div>
                  <div className="text-xs text-base-content/70">Target: 4% → 45% in 12 weeks</div>
                </div>
                <div className="p-3 border border-secondary/20 rounded">
                  <div className="font-medium text-sm">Transaction conversion rate</div>
                  <div className="text-xs text-base-content/70">Target: 13% → 25% with bundling</div>
                </div>
                <div className="p-3 border border-secondary/20 rounded">
                  <div className="font-medium text-sm">Average order value</div>
                  <div className="text-xs text-base-content/70">Target: €47 → €89 through context</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Business Impact</h4>
              <div className="space-y-2">
                <div className="p-3 border border-primary/20 rounded">
                  <div className="font-medium text-sm">Revenue per user</div>
                  <div className="text-xs text-base-content/70">Monthly cohort revenue tracking</div>
                </div>
                <div className="p-3 border border-primary/20 rounded">
                  <div className="font-medium text-sm">Guest satisfaction scores</div>
                  <div className="text-xs text-base-content/70">Post-stay NPS and experience ratings</div>
                </div>
                <div className="p-3 border border-primary/20 rounded">
                  <div className="font-medium text-sm">Operational efficiency</div>
                  <div className="text-xs text-base-content/70">Staff time saved through digital adoption</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Sources */}
      <div className="card bg-base-200 border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Research Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-primary mb-3">Industry Benchmarks</h4>
              <div className="space-y-2 text-sm">
                <div>• <strong>Userpilot 2024:</strong> 19.2% onboarding completion rate (hospitality)</div>
                <div>• <strong>Canary Technologies:</strong> 4% digital check-in adoption vs 54% demand</div>
                <div>• <strong>Statista 2024:</strong> 2.6% mobile vs 7.6% desktop conversion rates</div>
                <div>• <strong>UXCam:</strong> Mobile app conversion benchmarks by industry</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-3">Case Study Performance</h4>
              <div className="space-y-2 text-sm">
                <div>• <strong>Penta Hotels:</strong> 37.8% conversion rate improvement via A/B testing</div>
                <div>• <strong>Revenue Management Systems:</strong> 26% RevPAR increases within 3 months</div>
                <div>• <strong>Digital Transformation:</strong> 15-20% operational cost reduction</div>
                <div>• <strong>Nor1 CheckIn:</strong> Up to 750% monthly upsell revenue increases</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation to Next Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button 
          className="card bg-gradient-to-r from-accent to-primary text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('innovation-strategy')}
        >
          <div className="card-body text-center">
            <Brain className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">My Innovation Strategy</h3>
            <p className="text-sm opacity-80">AI-powered features and competitive differentiation</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
          className="card bg-gradient-to-r from-primary to-secondary text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('prototype-demo')}
        >
          <div className="card-body text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">Interactive Demo</h3>
            <p className="text-sm opacity-80">Experience optimized conversion flows in action</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ConversionStrategy; 