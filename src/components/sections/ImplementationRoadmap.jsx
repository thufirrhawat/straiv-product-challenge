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
  Award
} from 'lucide-react';

const ImplementationRoadmap = ({ onSectionChange }) => {
  const [activePhase, setActivePhase] = useState('phase1');

  const implementationPhases = [
    {
      id: 'phase1',
      title: 'Phase 1: Critical Foundation',
      duration: 'Weeks 1-6',
      objective: 'Fix broken fundamentals and establish reliable base functionality',
      color: 'error',
      priority: 'Critical',
      weeks: [
        {
          week: 'Week 1-2',
          focus: 'Core Infrastructure Fixes',
          deliverables: [
            'Fix Hermes AI chatbot with proper error handling and OpenAI integration',
            'Implement working search functionality with proper indexing',
            'Optimize app loading time from 3+ seconds to under 1 second',
            'Enable PWA installation with proper service worker implementation'
          ],
          resources: ['2 Senior Full-Stack Developers', '1 DevOps Engineer', '1 QA Engineer'],
          kpis: ['AI chatbot 95% uptime', 'Search response time <200ms', 'App load time <1s', 'PWA install rate >15%']
        },
        {
          week: 'Week 3-4',
          focus: 'Navigation & UX Overhaul',
          deliverables: [
            'Redesign navigation reducing 18 menu items to 8 contextual categories',
            'Fix weather widget with proper location detection and unit preferences',
            'Implement persistent bottom navigation across all flows',
            'Create mobile-responsive design with touch-optimized interactions'
          ],
          resources: ['2 UX/UI Designers', '3 Frontend Developers', '1 Mobile Developer'],
          kpis: ['Navigation task completion >90%', 'Weather interaction rate +150%', 'Mobile usability score >85%']
        },
        {
          week: 'Week 5-6',
          focus: 'Service Flow Reconstruction',
          deliverables: [
            'Rebuild ordering system with real-time tracking and notifications',
            'Implement secure payment processing with stored payment methods',
            'Create service delivery tracking with push notifications',
            'Launch basic analytics dashboard for hotel managers'
          ],
          resources: ['2 Backend Developers', '1 Payment Integration Specialist', '1 Analytics Engineer'],
          kpis: ['Order completion rate >85%', 'Payment success rate >98%', 'Service satisfaction >4.2/5']
        }
      ],
      successCriteria: [
        'App stability >99.5% uptime',
        'Core functionality working across all features',
        'User task completion rate >80%',
        'App store rating improved to >4.0/5'
      ]
    },
    {
      id: 'phase2',
      title: 'Phase 2: Smart Optimization',
      duration: 'Weeks 7-12',
      objective: 'Implement journey-stage intelligence and conversion optimization',
      color: 'warning',
      priority: 'High',
      weeks: [
        {
          week: 'Week 7-8',
          focus: 'Journey-Stage Intelligence',
          deliverables: [
            'Implement guest journey tracking with pre-arrival, in-stay, post-checkout stages',
            'Create contextual dashboard adapting to guest stage and preferences',
            'Deploy weather-aware content and service recommendations',
            'Launch progressive onboarding with guest-type detection'
          ],
          resources: ['1 Data Scientist', '2 Full-Stack Developers', '1 UX Designer'],
          kpis: ['Journey stage detection accuracy >92%', 'Contextual recommendations CTR +180%', 'Onboarding completion >75%']
        },
        {
          week: 'Week 9-10',
          focus: 'Conversion Optimization',
          deliverables: [
            'Implement express check-in with gamification and progress tracking',
            'Deploy smart upselling engine for check-in and service booking flows',
            'Create one-tap checkout for returning guests with payment tokenization',
            'Launch A/B testing framework for conversion flow optimization'
          ],
          resources: ['2 Conversion Specialists', '1 Backend Developer', '1 Analytics Engineer'],
          kpis: ['Digital check-in adoption >45%', 'Upselling conversion rate +340%', 'Checkout completion >90%']
        },
        {
          week: 'Week 11-12',
          focus: 'Engagement & Retention',
          deliverables: [
            'Deploy proactive notification system with contextual triggers',
            'Implement service tracking with real-time updates and ETA',
            'Create habit-forming micro-interactions and daily engagement prompts',
            'Launch basic achievement system with local exploration badges'
          ],
          resources: ['1 Engagement Specialist', '2 Mobile Developers', '1 Content Manager'],
          kpis: ['Daily active users +85%', 'Session duration +120%', 'Week 1 retention >60%']
        }
      ],
      successCriteria: [
        'Digital check-in adoption >40%',
        'Average session time >8 minutes',
        'Day 7 retention rate >50%',
        'Service attachment rate >35%'
      ]
    },
    {
      id: 'phase3',
      title: 'Phase 3: Innovation Launch',
      duration: 'Weeks 13-18',
      objective: 'Deploy AI features, voice interface, and social capabilities',
      color: 'info',
      priority: 'Medium',
      weeks: [
        {
          week: 'Week 13-14',
          focus: 'AI Enhancement',
          deliverables: [
            'Deploy predictive service suggestion engine with machine learning',
            'Implement multi-language AI with German/English cultural context',
            'Create behavioral pattern recognition for guest preference learning',
            'Launch AI-powered dynamic pricing for services and upgrades'
          ],
          resources: ['1 ML Engineer', '1 AI Specialist', '2 Backend Developers'],
          kpis: ['AI suggestion acceptance rate >65%', 'Multi-language accuracy >95%', 'Revenue per guest +25%']
        },
        {
          week: 'Week 15-16',
          focus: 'Voice Interface',
          deliverables: [
            'Implement voice command recognition for key app functions',
            'Deploy voice-activated room service and concierge requests',
            'Create offline voice processing for basic commands',
            'Launch voice-controlled check-in flow with hands-free operation'
          ],
          resources: ['1 Voice Tech Specialist', '2 Mobile Developers', '1 UX Designer'],
          kpis: ['Voice command success rate >85%', 'Voice check-in adoption >25%', 'Voice accessibility score >90%']
        },
        {
          week: 'Week 17-18',
          focus: 'Social & Viral Features',
          deliverables: [
            'Launch journey story auto-generation with photo compilation',
            'Implement friend referral system with mutual rewards',
            'Create achievement and badge system with social sharing',
            'Deploy real-time social proof with live guest activity feeds'
          ],
          resources: ['1 Social Media Specialist', '2 Frontend Developers', '1 Content Creator'],
          kpis: ['Social sharing rate +450%', 'Referral conversion >15%', 'Badge engagement >40%']
        }
      ],
      successCriteria: [
        'AI features drive >20% additional service bookings',
        'Voice interface adoption >20% of active users',
        'Social sharing increases brand mentions by >300%',
        'Viral coefficient >0.15 (15% of users refer others)'
      ]
    },
    {
      id: 'phase4',
      title: 'Phase 4: Scale & Growth',
      duration: 'Weeks 19-24',
      objective: 'Optimize for scale, multi-property sync, and growth acceleration',
      color: 'success',
      priority: 'Strategic',
      weeks: [
        {
          week: 'Week 19-20',
          focus: 'Cross-Property Intelligence',
          deliverables: [
            'Implement guest preference sync across hotel network',
            'Deploy cross-property loyalty progression and status recognition',
            'Create network-wide analytics and performance benchmarking',
            'Launch multi-property guest journey tracking and optimization'
          ],
          resources: ['1 Systems Architect', '2 Backend Developers', '1 Data Engineer'],
          kpis: ['Cross-property data sync >99%', 'Network retention +65%', 'Multi-stay guest value +40%']
        },
        {
          week: 'Week 21-22',
          focus: 'Growth Engine Optimization',
          deliverables: [
            'Deploy advanced referral tracking with attribution modeling',
            'Implement viral loop optimization with A/B testing',
            'Create automated onboarding personalization by guest segment',
            'Launch growth hacking experiments and rapid iteration framework'
          ],
          resources: ['1 Growth Marketing Manager', '1 Data Analyst', '2 Full-Stack Developers'],
          kpis: ['Viral coefficient >0.25', 'Organic growth rate +200%', 'CAC reduction -40%']
        },
        {
          week: 'Week 23-24',
          focus: 'Enterprise & Partner Integration',
          deliverables: [
            'Complete PMS integration with real-time data synchronization',
            'Deploy enterprise dashboard for hotel chains and management companies',
            'Launch partner API for third-party integrations and white-label solutions',
            'Create automated reporting and business intelligence suite'
          ],
          resources: ['1 Enterprise Solutions Architect', '2 Integration Specialists', '1 BI Developer'],
          kpis: ['PMS integration success >95%', 'Enterprise customer satisfaction >4.5/5', 'Partner API adoption >25 integrations']
        }
      ],
      successCriteria: [
        'Network effect drives >50% of new user acquisition',
        'Multi-property guests have 3x higher lifetime value',
        'Enterprise features enable 10x faster hotel onboarding',
        'Platform ready for international expansion'
      ]
    }
  ];

  const resourceAllocation = {
    team: [
      { role: 'Product Manager', allocation: '100%', responsibility: 'Strategic direction and stakeholder alignment' },
      { role: 'Engineering Lead', allocation: '100%', responsibility: 'Technical architecture and team coordination' },
      { role: 'Senior Full-Stack Developers', allocation: '4 FTE', responsibility: 'Core platform development and integrations' },
      { role: 'Mobile Developers', allocation: '2 FTE', responsibility: 'iOS/Android optimization and voice features' },
      { role: 'UX/UI Designers', allocation: '2 FTE', responsibility: 'User experience design and conversion optimization' },
      { role: 'Data Scientist/ML Engineer', allocation: '1 FTE', responsibility: 'AI features and predictive analytics' },
      { role: 'DevOps/Infrastructure', allocation: '1 FTE', responsibility: 'Scalability, security, and deployment automation' },
      { role: 'QA Engineers', allocation: '2 FTE', responsibility: 'Quality assurance and testing automation' }
    ],
    budget: {
      development: '€450K (18 weeks × €25K/week)',
      infrastructure: '€75K (AWS, tools, licenses)',
      design: '€50K (user research, testing, assets)',
      marketing: '€25K (early user acquisition)',
      total: '€600K for 6-month implementation'
    }
  };

  const kpiDashboard = {
    technical: [
      { metric: 'App Stability', current: '87%', target: '99.5%', phase: 'Phase 1' },
      { metric: 'Loading Time', current: '3.2s', target: '<1s', phase: 'Phase 1' },
      { metric: 'Search Performance', current: 'Broken', target: '<200ms', phase: 'Phase 1' },
      { metric: 'PWA Install Rate', current: '0%', target: '15%+', phase: 'Phase 1' }
    ],
    engagement: [
      { metric: 'Daily Active Users', current: '12%', target: '35%+', phase: 'Phase 2' },
      { metric: 'Session Duration', current: '3.2 min', target: '8+ min', phase: 'Phase 2' },
      { metric: 'Day 7 Retention', current: '7.6%', target: '50%+', phase: 'Phase 2' },
      { metric: 'Feature Adoption', current: '15%', target: '60%+', phase: 'Phase 2' }
    ],
    business: [
      { metric: 'Digital Check-in', current: '4%', target: '45%+', phase: 'Phase 2' },
      { metric: 'Service Attachment', current: '15%', target: '35%+', phase: 'Phase 2' },
      { metric: 'Revenue per Guest', current: '€47', target: '€89+', phase: 'Phase 3' },
      { metric: 'Guest Satisfaction', current: '67%', target: '92%+', phase: 'Phase 3' }
    ],
    growth: [
      { metric: 'Viral Coefficient', current: '0.02', target: '0.25+', phase: 'Phase 4' },
      { metric: 'Referral Rate', current: '0%', target: '15%+', phase: 'Phase 3' },
      { metric: 'Cross-Property Retention', current: '12%', target: '65%+', phase: 'Phase 4' },
      { metric: 'Network Effect', current: '0%', target: '50%+', phase: 'Phase 4' }
    ]
  };

  const riskMitigation = [
    {
      risk: 'Technical Integration Complexity',
      probability: 'High',
      impact: 'High',
      mitigation: 'Start PMS integration early, dedicated integration team, fallback APIs',
      contingency: 'Extend Phase 1 by 2 weeks if needed for stable foundation'
    },
    {
      risk: 'User Adoption Slower Than Expected',
      probability: 'Medium',
      impact: 'High',
      mitigation: 'A/B testing, user feedback loops, incentivized early adoption program',
      contingency: 'Additional UX optimization sprint in Phase 2'
    },
    {
      risk: 'AI/Voice Technology Limitations',
      probability: 'Medium',
      impact: 'Medium',
      mitigation: 'Proof of concept validation, multiple vendor options, gradual rollout',
      contingency: 'Focus on core AI features first, voice features as Phase 4 addition'
    },
    {
      risk: 'Hotel Stakeholder Resistance',
      probability: 'Medium',
      impact: 'High',
      mitigation: 'Early stakeholder engagement, ROI demonstration, change management',
      contingency: 'Extended pilot program with success metrics demonstration'
    }
  ];

  const getActivePhase = () => {
    return implementationPhases.find(phase => phase.id === activePhase);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4">
          My Implementation Roadmap
        </h1>
        <h2 className="text-2xl font-semibold text-primary mb-6">
          24-Week Execution Plan with KPIs & Risk Management
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          My detailed execution strategy transforms Straiv's app through 4 phases: fixing critical issues, 
          optimizing conversions, launching innovations, and scaling for growth - with measurable KPIs at each stage.
        </p>
      </div>

      {/* Phase Selection and Overview */}
      <div className="card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My 4-Phase Implementation Strategy</h2>
          
          {/* Phase Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {implementationPhases.map((phase) => (
              <button 
                key={phase.id}
                className={`btn ${activePhase === phase.id ? `btn-${phase.color}` : 'btn-outline'} h-auto py-4`}
                onClick={() => setActivePhase(phase.id)}
              >
                <div className="text-center">
                  <div className="text-sm font-bold">{phase.title}</div>
                  <div className="text-xs mt-1">{phase.duration}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Details */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{getActivePhase().title}</h3>
              <p className="text-lg text-base-content/70 mb-2">{getActivePhase().duration}</p>
              <div className={`badge badge-${getActivePhase().color} mb-4`}>{getActivePhase().priority} Priority</div>
              <p className="text-base-content/80 max-w-2xl mx-auto">{getActivePhase().objective}</p>
            </div>

            {/* Weekly Breakdown */}
            <div className="space-y-6">
              {getActivePhase().weeks.map((week, index) => (
                <div key={index} className={`card bg-base-100 border border-${getActivePhase().color}/20`}>
                  <div className="card-body">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold">{week.week}</h4>
                      <div className={`badge badge-${getActivePhase().color}`}>{week.focus}</div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3">Key Deliverables:</h5>
                        <div className="space-y-2">
                          {week.deliverables.map((deliverable, dIndex) => (
                            <div key={dIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                              <span className="text-sm text-base-content/80">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3">Success KPIs:</h5>
                        <div className="space-y-2">
                          {week.kpis.map((kpi, kIndex) => (
                            <div key={kIndex} className="flex items-center gap-2">
                              <Target className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">{kpi}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4">
                          <div className="text-xs font-semibold mb-1">Resources Required:</div>
                          <div className="text-xs text-base-content/70">{week.resources.join(', ')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Phase Success Criteria */}
            <div className={`p-6 bg-${getActivePhase().color}/10 rounded-lg border border-${getActivePhase().color}/20`}>
              <h4 className="font-bold text-lg mb-3">Phase Success Criteria:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getActivePhase().successCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className={`w-4 h-4 text-${getActivePhase().color}`} />
                    <span className="text-sm font-medium">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Dashboard */}
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My KPI Tracking Dashboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(kpiDashboard).map(([category, metrics]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-bold text-lg capitalize text-center">{category} KPIs</h4>
                {metrics.map((metric, index) => (
                  <div key={index} className="card bg-base-200">
                    <div className="card-body p-4 text-center">
                      <div className="text-sm font-semibold">{metric.metric}</div>
                      <div className="text-lg font-bold text-error">{metric.current}</div>
                      <ArrowRight className="w-4 h-4 mx-auto text-base-content/40" />
                      <div className="text-lg font-bold text-success">{metric.target}</div>
                      <div className="text-xs text-primary">{metric.phase}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-secondary/5 border border-secondary/20">
          <div className="card-body">
            <h3 className="text-xl font-bold mb-4">My Team & Resource Plan</h3>
            <div className="space-y-3">
              {resourceAllocation.team.map((member, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-base-100 rounded">
                  <div>
                    <div className="font-semibold">{member.role}</div>
                    <div className="text-xs text-base-content/70">{member.responsibility}</div>
                  </div>
                  <div className="badge badge-secondary">{member.allocation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card bg-success/5 border border-success/20">
          <div className="card-body">
            <h3 className="text-xl font-bold mb-4">My Budget Allocation</h3>
            <div className="space-y-3">
              {Object.entries(resourceAllocation.budget).filter(([key]) => key !== 'total').map(([category, amount]) => (
                <div key={category} className="flex justify-between items-center p-3 bg-base-100 rounded">
                  <span className="capitalize font-semibold">{category}</span>
                  <span className="badge badge-success">{amount}</span>
                </div>
              ))}
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between items-center text-lg font-bold">
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
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Risk Mitigation Strategy</h2>
          
          {/* Mobile-friendly card layout */}
          <div className="space-y-4">
            {riskMitigation.map((risk, index) => (
              <div key={index} className="card bg-base-100 border border-base-300">
                <div className="card-body p-4">
                  <h3 className="font-bold text-lg mb-3">{risk.risk}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-base-content/60">PROBABILITY:</span>
                      <div className={`badge badge-sm ${risk.probability === 'High' ? 'badge-error' : risk.probability === 'Medium' ? 'badge-warning' : 'badge-success'}`}>
                        {risk.probability}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-base-content/60">IMPACT:</span>
                      <div className={`badge badge-sm ${risk.impact === 'High' ? 'badge-error' : risk.impact === 'Medium' ? 'badge-warning' : 'badge-success'}`}>
                        {risk.impact}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">MITIGATION STRATEGY</div>
                      <div className="text-sm text-base-content/80">{risk.mitigation}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">CONTINGENCY PLAN</div>
                      <div className="text-sm text-warning">{risk.contingency}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation to Demo */}
      <div className="text-center">
        <button 
          className="btn btn-lg btn-primary"
          onClick={() => onSectionChange('prototype-demo')}
        >
          <Smartphone className="w-6 h-6 mr-2" />
          Experience My Implementation in Action
          <ArrowRight className="w-6 h-6 ml-2" />
        </button>
        <p className="text-sm text-base-content/70 mt-2">
          See interactive prototypes demonstrating key features from each implementation phase
        </p>
      </div>
    </div>
  );
};

export default ImplementationRoadmap; 