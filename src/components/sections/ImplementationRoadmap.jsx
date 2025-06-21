import React, { useState } from 'react';
import { 
  Calendar,
  Clock,
  Target,
  Users,
  Code,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  Zap,
  Star,
  DollarSign,
  Settings,
  Database,
  Smartphone,
  Brain,
  Award,
  BarChart3,
  Lightbulb,
  Shield,
  Globe
} from 'lucide-react';

const ImplementationRoadmap = ({ onSectionChange }) => {
  const [activePhase, setActivePhase] = useState('phase1');

  const implementationPhases = [
    {
      id: 'phase1',
      title: 'Phase 1: Quick Wins & Analysis',
      duration: 'Weeks 1-4',
      objective: 'Audit current app, identify pain points, and implement immediate improvements',
      color: 'primary',
      priority: 'Critical',
      businessFocus: 'Understand current state and deliver immediate value',
      weeks: [
        {
          week: 'Week 1-2',
          focus: 'Current App Audit & Quick Fixes',
          deliverables: [
            'Comprehensive app audit with guest feedback analysis and usage data review',
            'Fix critical UX issues: navigation confusion, loading bottlenecks, broken features',
            'Implement 3-5 quick wins based on most common guest complaints',
            'Establish baseline metrics: retention, engagement, conversion rates'
          ],
          resources: ['1 Product Manager', '2 Developers', '1 UX Designer', '1 Data Analyst'],
          kpis: ['Guest satisfaction +15%', 'PWA install rate >20%', 'Critical bug fixes 100%', 'Baseline metrics established'],
          hotelImpact: 'Immediate guest satisfaction improvement, reduced support tickets'
        },
        {
          week: 'Week 3-4',
          focus: 'Conversion Funnel Optimization',
          deliverables: [
            'Optimize check-in flow reducing steps from 8 to 4 with progress indicators',
            'Implement smart upselling at optimal journey moments (pre-arrival, check-in)',
            'Add one-tap reordering for returning guests and service favorites',
            'Launch A/B testing framework for continuous conversion optimization'
          ],
          resources: ['1 Conversion Specialist', '2 Developers', '1 UX Designer'],
          kpis: ['Check-in completion +25%', 'Upselling conversion +40%', 'Reorder rate +60%', 'A/B testing live'],
          hotelImpact: 'Higher digital adoption, increased ancillary revenue per guest'
        }
      ],
      successCriteria: [
        'Guest app satisfaction score >4.2/5 (from current baseline)',
        'Digital check-in adoption +25% from current rate',
        'Service booking conversion +40% improvement',
        'Hotel partner satisfaction with guest experience improvements'
      ],
      expectedROI: '€50K investment → €150K additional revenue (3:1 ROI in 4 weeks)'
    },
    {
      id: 'phase2',
      title: 'Phase 2: Stickiness & Engagement',
      duration: 'Weeks 5-8',
      objective: 'Implement engagement features that create habit formation and repeat usage',
      color: 'secondary',
      priority: 'High',
      businessFocus: 'Increase guest retention and daily active usage',
      weeks: [
        {
          week: 'Week 5-6',
          focus: 'Journey-Stage Intelligence',
          deliverables: [
            'Deploy contextual dashboard adapting to guest stage (pre-arrival, in-stay, post-checkout)',
            'Implement weather-aware local recommendations with booking integration',
            'Create personalized service suggestions based on guest preferences and behavior',
            'Launch proactive notifications for relevant services and local events'
          ],
          resources: ['1 Data Scientist', '2 Developers', '1 Content Manager'],
          kpis: ['Session duration +50%', 'Local booking conversion 15%', 'Notification engagement 35%', 'Return usage +30%'],
          hotelImpact: 'Guests discover more services, higher satisfaction, extended stays'
        },
        {
          week: 'Week 7-8',
          focus: 'Habit-Forming Features',
          deliverables: [
            'Implement daily local discovery with photo opportunities and social sharing',
            'Create service tracking with real-time updates and gamified progress',
            'Launch loyalty point earning through app engagement and local exploration',
            'Deploy achievement system with Stuttgart-specific location badges'
          ],
          resources: ['1 Engagement Specialist', '2 Developers', '1 UX Designer'],
          kpis: ['Daily active users +40%', 'Social sharing +200%', 'Loyalty engagement 60%', 'Achievement completion 45%'],
          hotelImpact: 'Guests become advocates, organic marketing, longer engagement periods'
        }
      ],
      successCriteria: [
        'Day 7 retention rate >45% (industry benchmark: 30%)',
        'Average session time >6 minutes (vs. current baseline)',
        'Weekly active users +60% increase',
        'Guest lifetime value +35% improvement'
      ],
      expectedROI: '€75K investment → €300K additional revenue (4:1 ROI through retention)'
    },
    {
      id: 'phase3',
      title: 'Phase 3: Innovation & Differentiation',
      duration: 'Weeks 9-12',
      objective: 'Launch unique features that competitors don\'t offer and create market differentiation',
      color: 'accent',
      priority: 'Strategic',
      businessFocus: 'Create competitive moats and premium positioning',
      weeks: [
        {
          week: 'Week 9-10',
          focus: 'Local Experience Integration',
          deliverables: [
            'Deep integration with Stuttgart local businesses (restaurants, activities, transport)',
            'Exclusive guest discounts and experiences not available elsewhere',
            'Seamless booking and payment for local experiences through app',
            'Real-time availability and dynamic pricing for local services'
          ],
          resources: ['1 Partnership Manager', '2 Developers', '1 Business Development'],
          kpis: ['Local experience bookings 25%', 'Exclusive partnership revenue €50K/month', 'Guest exploration rate 70%'],
          hotelImpact: 'Unique value proposition, guest satisfaction, partnership revenue sharing'
        },
        {
          week: 'Week 11-12',
          focus: 'Predictive Service Engine',
          deliverables: [
            'AI-powered service suggestions based on guest behavior and environmental context',
            'Dynamic pricing for services based on demand, weather, and guest value',
            'Predictive issue prevention (delays, capacity issues, weather disruptions)',
            'Cross-property preference learning for repeat guests'
          ],
          resources: ['1 ML Engineer', '2 Developers', '1 Data Scientist'],
          kpis: ['AI suggestion acceptance 45%', 'Revenue per guest +20%', 'Issue prevention 60%', 'Cross-property retention +50%'],
          hotelImpact: 'Operational efficiency, revenue optimization, guest satisfaction'
        }
      ],
      successCriteria: [
        'Unique local integration drives 25% of app revenue',
        'AI features increase revenue per guest by 20%+',
        'Guest satisfaction >4.5/5 (premium positioning)',
        'Competitive differentiation in 3 key areas vs. major competitors'
      ],
      expectedROI: '€100K investment → €500K additional revenue (5:1 ROI through premium features)'
    },
    {
      id: 'phase4',
      title: 'Phase 4: Growth & Scale',
      duration: 'Weeks 13-16',
      objective: 'Scale successful features across hotel network and accelerate adoption',
      color: 'success',
      priority: 'Growth',
      businessFocus: 'Expand to more hotels and increase market penetration',
      weeks: [
        {
          week: 'Week 13-14',
          focus: 'Hotel Network Expansion',
          deliverables: [
            'Streamlined hotel onboarding process reducing setup time to 2 weeks',
            'White-label customization options for hotel branding and local services',
            'Cross-property guest data sync and preference sharing',
            'Hotel dashboard with ROI metrics and guest satisfaction analytics'
          ],
          resources: ['1 Enterprise Solutions Manager', '2 Developers', '1 Implementation Specialist'],
          kpis: ['Hotel onboarding time <2 weeks', 'Hotel satisfaction >4.5/5', 'Cross-property usage 40%', 'New hotel pipeline +50%'],
          hotelImpact: 'Faster implementation, clear ROI demonstration, network effects'
        },
        {
          week: 'Week 15-16',
          focus: 'Viral Growth & Referrals',
          deliverables: [
            'Guest referral program with mutual rewards and tracking',
            'Social sharing integration with automatic travel story generation',
            'Corporate travel integration for business guest acquisition',
            'Hotel partner referral program with revenue sharing incentives'
          ],
          resources: ['1 Growth Marketing Manager', '2 Developers', '1 Partnership Manager'],
          kpis: ['Referral conversion 12%', 'Viral coefficient 0.15', 'Corporate bookings +30%', 'Hotel referrals +25%'],
          hotelImpact: 'Organic growth, reduced acquisition costs, network expansion'
        }
      ],
      successCriteria: [
        'Hotel network growth +40% in 4 weeks',
        'Guest acquisition cost reduced by 30%',
        'Network effect drives 25% of new user acquisition',
        'Platform ready for European expansion'
      ],
      expectedROI: '€125K investment → €800K additional revenue (6.4:1 ROI through scale)'
    }
  ];

  const competitiveDifferentiation = [
    {
      competitor: 'HiJiffy & Canary',
      theirStrength: 'AI chatbots and basic automation',
      ourAdvantage: 'Local experience integration + predictive intelligence',
      implementation: 'Deep Stuttgart partnerships + behavioral AI'
    },
    {
      competitor: 'Traditional Hotel Apps',
      theirStrength: 'Basic hotel services and information',
      ourAdvantage: 'Journey-stage intelligence + habit formation',
      implementation: 'Contextual features + gamification + social elements'
    },
    {
      competitor: 'Booking Platforms',
      theirStrength: 'Wide hotel selection and booking',
      ourAdvantage: 'In-stay experience optimization + loyalty building',
      implementation: 'Post-booking engagement + cross-property benefits'
    }
  ];

  const resourceAllocation = {
    team: [
      { role: 'Product Manager', allocation: '1 FTE', responsibility: 'Strategy, roadmap, hotel relationships' },
      { role: 'Senior Developers', allocation: '3 FTE', responsibility: 'Feature development and integrations' },
      { role: 'UX/UI Designer', allocation: '1 FTE', responsibility: 'User experience optimization' },
      { role: 'Data Scientist', allocation: '0.5 FTE', responsibility: 'AI features and analytics' },
      { role: 'Growth Marketing', allocation: '0.5 FTE', responsibility: 'Conversion and viral features' },
      { role: 'QA Engineer', allocation: '1 FTE', responsibility: 'Quality assurance and testing' }
    ],
    budget: {
      development: '€200K (16 weeks × €12.5K/week)',
      partnerships: '€50K (local business integrations)',
      infrastructure: '€25K (AI/ML tools, analytics)',
      marketing: '€25K (pilot hotel programs)',
      total: '€300K for 4-month enhancement program'
    }
  };

  const kpiDashboard = {
    guest: [
      { metric: 'PWA Install Rate', current: '15%', target: '45%', impact: 'Better user retention' },
      { metric: 'Day 7 Retention', current: '25%', target: '45%', impact: 'Sticky user base' },
      { metric: 'Session Duration', current: '4.2 min', target: '6+ min', impact: 'Higher engagement' },
      { metric: 'Service Conversion', current: '18%', target: '35%', impact: 'More revenue per guest' }
    ],
    hotel: [
      { metric: 'Hotel Satisfaction', current: '3.9/5', target: '4.5/5', impact: 'Partner retention' },
      { metric: 'Implementation Time', current: '6 weeks', target: '2 weeks', impact: 'Faster scaling' },
      { metric: 'Revenue per Guest', current: '€47', target: '€65', impact: 'Hotel ROI demonstration' },
      { metric: 'Digital Adoption', current: '35%', target: '60%', impact: 'Operational efficiency' }
    ],
    business: [
      { metric: 'Monthly Active Hotels', current: '50', target: '120', impact: 'Market expansion' },
      { metric: 'Guest Lifetime Value', current: '€89', target: '€135', impact: 'Business sustainability' },
      { metric: 'Viral Coefficient', current: '0.05', target: '0.15', impact: 'Organic growth' },
      { metric: 'Net Revenue Retention', current: '85%', target: '120%', impact: 'Expansion revenue' }
    ]
  };

  const pilotProgram = {
    approach: 'Test with 3-5 hotels per phase before full rollout',
    duration: '2 weeks pilot + 2 weeks optimization per phase',
    hotels: [
      { name: 'Boutique Hotel Stuttgart', type: 'Independent', rooms: 45, focus: 'Local experience integration' },
      { name: 'Business Hotel Mitte', type: 'Chain', rooms: 120, focus: 'Corporate guest features' },
      { name: 'Heritage Grand Hotel', type: 'Luxury', rooms: 200, focus: 'Premium service optimization' }
    ],
    successCriteria: [
      'Guest satisfaction improvement >20%',
      'Hotel staff satisfaction >4/5',
      'Revenue per guest increase >15%',
      'Implementation time <2 weeks'
    ]
  };

  const riskMitigation = [
    {
      risk: 'Hotel Partner Resistance to Change',
      probability: 'Medium',
      impact: 'High',
      mitigation: 'Start with pilot program, demonstrate ROI quickly, provide extensive training',
      contingency: 'Focus on early adopter hotels, build case studies for skeptical partners'
    },
    {
      risk: 'Guest Adoption Slower Than Expected',
      probability: 'Medium',
      impact: 'Medium',
      mitigation: 'A/B testing, user feedback loops, incentivized adoption program',
      contingency: 'Extended onboarding optimization, additional UX improvements'
    },
    {
      risk: 'Local Partnership Integration Complexity',
      probability: 'Low',
      impact: 'Medium',
      mitigation: 'Start with proven partners, simple API integrations, phased rollout',
      contingency: 'Manual booking processes initially, gradual automation'
    },
    {
      risk: 'Competitive Response from Major Players',
      probability: 'High',
      impact: 'Medium',
      mitigation: 'Focus on unique local advantages, build switching costs, rapid iteration',
      contingency: 'Accelerate differentiation features, deepen hotel relationships'
    }
  ];

  const getActivePhase = () => {
    return implementationPhases.find(phase => phase.id === activePhase);
  };

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Header */}
      <div className="hero bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl border border-primary/10">
        <div className="hero-content text-center py-8 lg:py-12 px-4 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              <span className="text-base-content">Implementation Roadmap:</span><br />
              <span className="text-primary">16-Week Enhancement Strategy</span>
            </h1>
            <h2 className="text-lg lg:text-xl font-semibold text-success mb-4 lg:mb-6">
              Improving Straiv's Existing Guest App for Maximum Business Impact
            </h2>
            <p className="text-sm lg:text-base text-base-content/80 mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed">
              My focused enhancement strategy improves Straiv's current guest app through 4 phases: quick wins & analysis, 
              stickiness optimization, competitive differentiation, and growth scaling - with pilot testing and measurable ROI at each stage.
            </p>
            
            {/* Key Metrics Preview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-4xl mx-auto">
              <div className="stat bg-primary/10 border border-primary/20 rounded-lg p-3 lg:p-4">
                <div className="stat-title text-primary text-xs lg:text-sm">Timeline</div>
                <div className="stat-value text-primary text-lg lg:text-2xl">16 Weeks</div>
                <div className="stat-desc text-xs">Enhancement focused</div>
              </div>
              <div className="stat bg-secondary/10 border border-secondary/20 rounded-lg p-3 lg:p-4">
                <div className="stat-title text-secondary text-xs lg:text-sm">Investment</div>
                <div className="stat-value text-secondary text-lg lg:text-2xl">€300K</div>
                <div className="stat-desc text-xs">Realistic budget</div>
              </div>
              <div className="stat bg-accent/10 border border-accent/20 rounded-lg p-3 lg:p-4">
                <div className="stat-title text-accent text-xs lg:text-sm">Team Size</div>
                <div className="stat-value text-accent text-lg lg:text-2xl">7 People</div>
                <div className="stat-desc text-xs">Lean & focused</div>
              </div>
              <div className="stat bg-success/10 border border-success/20 rounded-lg p-3 lg:p-4">
                <div className="stat-title text-success text-xs lg:text-sm">Expected ROI</div>
                <div className="stat-value text-success text-lg lg:text-2xl">5:1</div>
                <div className="stat-desc text-xs">Business impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phase Selection and Overview */}
      <div className="card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20">
        <div className="card-body p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">4-Phase Enhancement Strategy</h2>
          
          {/* Phase Navigation */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 mb-6 lg:mb-8">
            {implementationPhases.map((phase) => (
              <button 
                key={phase.id}
                className={`btn btn-sm lg:btn-md ${activePhase === phase.id ? `btn-${phase.color}` : 'btn-outline'} gap-2 flex-shrink-0 w-full sm:w-auto`}
                onClick={() => setActivePhase(phase.id)}
              >
                <span className="hidden lg:inline">{phase.title}</span>
                <span className="lg:hidden text-xs">{phase.title.replace('Phase ', 'P')}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Details */}
          <div className="space-y-6 lg:space-y-8">
            <div className="text-center">
              <h3 className="text-lg lg:text-xl font-bold mb-2">{getActivePhase().title}</h3>
              <p className="text-sm lg:text-base text-base-content/70 mb-2">{getActivePhase().duration}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <div className={`badge badge-${getActivePhase().color}`}>{getActivePhase().priority} Priority</div>
                <div className="badge badge-neutral">{getActivePhase().businessFocus}</div>
              </div>
              <p className="text-sm lg:text-base text-base-content/80 max-w-3xl mx-auto">{getActivePhase().objective}</p>
            </div>

            {/* Weekly Breakdown */}
            <div className="space-y-4 lg:space-y-6">
              {getActivePhase().weeks.map((week, index) => (
                <div key={index} className={`card bg-base-100 border border-${getActivePhase().color}/20`}>
                  <div className="card-body p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-2">
                      <h4 className="text-base lg:text-lg font-bold">{week.week}</h4>
                      <div className={`badge badge-${getActivePhase().color} badge-sm lg:badge-md`}>{week.focus}</div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <h5 className="font-semibold mb-3 text-sm lg:text-base">Key Deliverables:</h5>
                        <div className="space-y-2">
                          {week.deliverables.map((deliverable, dIndex) => (
                            <div key={dIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-success mt-0.5 flex-shrink-0" />
                              <span className="text-xs lg:text-sm text-base-content/80 break-words">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3 text-sm lg:text-base">Success KPIs:</h5>
                        <div className="space-y-2">
                          {week.kpis.map((kpi, kIndex) => (
                            <div key={kIndex} className="flex items-start gap-2">
                              <Target className="w-3 h-3 lg:w-4 lg:h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs lg:text-sm font-medium break-words">{kpi}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 p-2 lg:p-3 bg-accent/10 rounded-lg">
                          <div className="text-xs font-semibold mb-1">Hotel Impact:</div>
                          <div className="text-xs text-base-content/70 break-words">{week.hotelImpact}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Phase Success Criteria & ROI */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div className={`p-4 lg:p-6 bg-${getActivePhase().color}/10 rounded-lg border border-${getActivePhase().color}/20`}>
                <h4 className="font-bold text-sm lg:text-base mb-3">Phase Success Criteria:</h4>
                <div className="space-y-2">
                  {getActivePhase().successCriteria.map((criteria, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Star className={`w-3 h-3 lg:w-4 lg:h-4 text-${getActivePhase().color} mt-0.5 flex-shrink-0`} />
                      <span className="text-xs lg:text-sm font-medium break-words">{criteria}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 lg:p-6 bg-success/10 rounded-lg border border-success/20">
                <h4 className="font-bold text-sm lg:text-base mb-3">Expected ROI:</h4>
                <div className="text-lg lg:text-xl font-bold text-success mb-2">{getActivePhase().expectedROI}</div>
                <div className="text-xs lg:text-sm text-base-content/70">
                  Business impact through {getActivePhase().priority.toLowerCase()} improvements
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Differentiation */}
      <div className="card bg-accent/5 border border-accent/20">
        <div className="card-body p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center flex items-center justify-center gap-3">
            <Lightbulb className="w-5 h-5 lg:w-6 lg:h-6" />
            Competitive Differentiation Strategy
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {competitiveDifferentiation.map((comp, index) => (
              <div key={index} className="card bg-base-100 border border-accent/20">
                <div className="card-body p-4 lg:p-6">
                  <h3 className="font-bold text-sm lg:text-base mb-3">{comp.competitor}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">THEIR STRENGTH</div>
                      <div className="text-xs lg:text-sm text-base-content/80 break-words">{comp.theirStrength}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">OUR ADVANTAGE</div>
                      <div className="text-xs lg:text-sm text-accent font-medium break-words">{comp.ourAdvantage}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">IMPLEMENTATION</div>
                      <div className="text-xs lg:text-sm text-success break-words">{comp.implementation}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KPI Dashboard */}
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">Business Impact KPI Dashboard</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {Object.entries(kpiDashboard).map(([category, metrics]) => (
              <div key={category} className="space-y-3 lg:space-y-4">
                <h4 className="font-bold text-base lg:text-lg capitalize text-center">{category} Metrics</h4>
                {metrics.map((metric, index) => (
                  <div key={index} className="card bg-base-200">
                    <div className="card-body p-3 lg:p-4 text-center">
                      <div className="text-xs lg:text-sm font-semibold">{metric.metric}</div>
                      <div className="flex items-center justify-center gap-2 my-2">
                        <div className="text-sm lg:text-base font-bold text-error">{metric.current}</div>
                        <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-base-content/40" />
                        <div className="text-sm lg:text-base font-bold text-success">{metric.target}</div>
                      </div>
                      <div className="text-xs text-primary break-words">{metric.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pilot Program Strategy */}
      <div className="card bg-info/5 border border-info/20">
        <div className="card-body p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center flex items-center justify-center gap-3">
            <Shield className="w-5 h-5 lg:w-6 lg:h-6" />
            Pilot Program Strategy
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <h3 className="font-bold text-sm lg:text-base mb-3">Approach & Timeline:</h3>
              <div className="space-y-2 mb-4">
                <div className="text-xs lg:text-sm"><strong>Method:</strong> {pilotProgram.approach}</div>
                <div className="text-xs lg:text-sm"><strong>Duration:</strong> {pilotProgram.duration}</div>
              </div>
              
              <h4 className="font-semibold text-sm mb-2">Success Criteria:</h4>
              <div className="space-y-1">
                {pilotProgram.successCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-xs lg:text-sm break-words">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-sm lg:text-base mb-3">Pilot Hotels:</h3>
              <div className="space-y-3">
                {pilotProgram.hotels.map((hotel, index) => (
                  <div key={index} className="p-3 bg-base-100 rounded-lg border border-info/20">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-xs lg:text-sm">{hotel.name}</h4>
                      <div className="badge badge-info badge-xs">{hotel.rooms} rooms</div>
                    </div>
                    <div className="text-xs text-base-content/70 mb-1">{hotel.type}</div>
                    <div className="text-xs text-info break-words">{hotel.focus}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="card bg-secondary/5 border border-secondary/20">
          <div className="card-body p-4 lg:p-6">
            <h3 className="text-base lg:text-lg font-bold mb-4">Lean Team Structure</h3>
            <div className="space-y-3">
              {resourceAllocation.team.map((member, index) => (
                <div key={index} className="flex justify-between items-start p-3 bg-base-100 rounded gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-xs lg:text-sm">{member.role}</div>
                    <div className="text-xs text-base-content/70 break-words">{member.responsibility}</div>
                  </div>
                  <div className="badge badge-secondary badge-sm flex-shrink-0">{member.allocation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card bg-success/5 border border-success/20">
          <div className="card-body p-4 lg:p-6">
            <h3 className="text-base lg:text-lg font-bold mb-4">Realistic Budget</h3>
            <div className="space-y-3">
              {Object.entries(resourceAllocation.budget).filter(([key]) => key !== 'total').map(([category, amount]) => (
                <div key={category} className="flex justify-between items-center p-3 bg-base-100 rounded">
                  <span className="capitalize font-semibold text-xs lg:text-sm">{category}</span>
                  <span className="badge badge-success badge-sm">{amount}</span>
                </div>
              ))}
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between items-center text-sm lg:text-base font-bold">
                  <span>Total Investment</span>
                  <span className="text-success">{resourceAllocation.budget.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Management */}
      <div className="card bg-warning/5 border border-warning/20">
        <div className="card-body p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">Risk Mitigation Strategy</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {riskMitigation.map((risk, index) => (
              <div key={index} className="card bg-base-100 border border-base-300">
                <div className="card-body p-4">
                  <h3 className="font-bold text-sm lg:text-base mb-3">{risk.risk}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-base-content/60">PROBABILITY:</span>
                      <div className={`badge badge-xs ${risk.probability === 'High' ? 'badge-error' : risk.probability === 'Medium' ? 'badge-warning' : 'badge-success'}`}>
                        {risk.probability}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-base-content/60">IMPACT:</span>
                      <div className={`badge badge-xs ${risk.impact === 'High' ? 'badge-error' : risk.impact === 'Medium' ? 'badge-warning' : 'badge-success'}`}>
                        {risk.impact}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">MITIGATION</div>
                      <div className="text-xs text-base-content/80 break-words">{risk.mitigation}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">CONTINGENCY</div>
                      <div className="text-xs text-warning break-words">{risk.contingency}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation to Next Sections */}
      <div className="text-center">
        <h2 className="text-xl lg:text-2xl font-bold mb-6">What's Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            className="card bg-gradient-to-r from-primary to-secondary text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => onSectionChange('prototype-demo')}
          >
            <div className="card-body text-center">
              <Smartphone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center">Interactive Demo</h3>
              <p className="text-sm opacity-80">Experience enhanced features from the roadmap in action</p>
              <div className="card-actions justify-center">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-info to-success text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => onSectionChange('sources')}
          >
            <div className="card-body text-center">
              <Database className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center">Research Sources</h3>
              <p className="text-sm opacity-80">Industry data and studies supporting this roadmap</p>
              <div className="card-actions justify-center">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImplementationRoadmap; 