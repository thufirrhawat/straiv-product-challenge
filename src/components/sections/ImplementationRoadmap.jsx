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
  Globe,
  Info,
  Wrench,
  Gauge,
  MousePointer,
  CreditCard,
  Mic,
  Eye,
  FileText,
  GitBranch,
  UserCheck,
  Layers,
  CheckSquare,
  AlertCircle,
  TrendingDown,
  Network,
  Building,
  HandHeart,
  Coffee
} from 'lucide-react';

const ImplementationRoadmap = ({ onSectionChange, navigate }) => {
  const [activePhase, setActivePhase] = useState(0);
  const [activeRisk, setActiveRisk] = useState(0);

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

  // Four strategic implementation phases
  const implementationPhases = [
    {
      id: 'foundation',
      title: 'Foundation Enhancement',
      duration: 'Weeks 1-6',
      color: 'primary',
      bgGradient: 'from-primary/5 to-info/5',
      borderColor: 'border-primary/20',
      icon: <Gauge className="w-8 h-8 text-primary" />,
      tooltip: "Foundation improvements address critical UX barriers preventing users from experiencing app value",
      priorityImprovements: [
        {
          improvement: "Performance Optimization",
          description: "Achieve sub-2 second loading (preventing 10% visitor loss)",
          icon: <Zap className="w-5 h-5 text-primary" />,
          target: "Sub-2 second loading time consistently"
        },
        {
          improvement: "Navigation Simplification", 
          description: "Reduce cognitive overload from 18 menu items",
          icon: <MousePointer className="w-5 h-5 text-primary" />,
          target: "Streamlined navigation with clear hierarchy"
        },
        {
          improvement: "Basic Onboarding Improvement",
          description: "Target 25-30% completion vs current 19.2% average",
          icon: <UserCheck className="w-5 h-5 text-primary" />,
          target: "25-30% onboarding completion rate"
        },
        {
          improvement: "Critical UX Fixes",
          description: "Resolve button overlaps, improve search functionality",
          icon: <Wrench className="w-5 h-5 text-primary" />,
          target: "Zero critical UX barriers"
        }
      ],
      successMetrics: [
        { metric: "Loading time", target: "Consistently under 2 seconds", current: "Current baseline" },
        { metric: "Onboarding completion", target: "Above 25% (hospitality benchmark)", current: "19.2% average" },
        { metric: "App abandonment", target: "Reduce from 80% first-use deletion rate", current: "80% abandonment" },
        { metric: "User experience", target: "Measurable improvement in navigation efficiency", current: "18 menu items" }
      ],
      resourceRequirements: "2 senior developers, 1 UX designer, 1 QA engineer",
      businessImpact: "Immediate improvement in user retention and engagement foundation"
    },
    {
      id: 'conversion',
      title: 'Conversion Optimization',
      duration: 'Months 2-3',
      color: 'secondary',
      bgGradient: 'from-secondary/5 to-accent/5',
      borderColor: 'border-secondary/20',
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      tooltip: "Conversion optimization targets the massive gap between consumer demand and actual digital service utilization",
      coreDeliverables: [
        {
          deliverable: "Digital Check-in Optimization",
          description: "Improve from 4% to 15-25% adoption rate",
          icon: <Smartphone className="w-5 h-5 text-secondary" />,
          target: "15-25% adoption rate"
        },
        {
          deliverable: "Journey-stage Detection",
          description: "Leverage PMS data for contextual interface adaptation",
          icon: <Eye className="w-5 h-5 text-secondary" />,
          target: "Contextual interface adaptation"
        },
        {
          deliverable: "Intelligent Feature Prioritization",
          description: "Address 54% consumer demand for digital services",
          icon: <Brain className="w-5 h-5 text-secondary" />,
          target: "54% demand satisfaction"
        },
        {
          deliverable: "Onboarding Personalization",
          description: "Achieve 25-30% completion target consistently",
          icon: <Target className="w-5 h-5 text-secondary" />,
          target: "25-30% completion consistently"
        }
      ],
      successMetrics: [
        { metric: "Digital check-in adoption", target: "15-25% (vs current 4%)", current: "4% current" },
        { metric: "Mobile conversion rates", target: "4-6% (closing gap with 7.6% desktop)", current: "Mobile vs desktop gap" },
        { metric: "Session engagement", target: "Significant increase in feature discovery and usage", current: "Baseline engagement" },
        { metric: "Operational efficiency", target: "Measurable reduction in front desk inquiries", current: "Current inquiry volume" }
      ],
      resourceRequirements: "3 developers, 1 data analyst, 1 UX designer",
      revenueImpact: "Direct improvement in hotel partner operational costs and guest satisfaction"
    },
    {
      id: 'revenue',
      title: 'Revenue Enhancement',
      duration: 'Months 3-4',
      color: 'success',
      bgGradient: 'from-success/5 to-warning/5',
      borderColor: 'border-success/20',
      icon: <DollarSign className="w-8 h-8 text-success" />,
      tooltip: "Revenue enhancement directly impacts hotel partner profitability through proven upselling optimization techniques",
      focusAreas: [
        {
          area: "Intelligent Upselling System",
          description: "Improve from 6.04% to 20%+ conversion rate",
          icon: <CreditCard className="w-5 h-5 text-success" />,
          target: "20%+ conversion rate"
        },
        {
          area: "Transaction Flow Optimization",
          description: "Capture more of 10-20% total guest charges opportunity",
          icon: <BarChart3 className="w-5 h-5 text-success" />,
          target: "10-20% guest charges capture"
        },
        {
          area: "Revenue Integration",
          description: "Connect upsells to hotel revenue systems for real-time tracking",
          icon: <Network className="w-5 h-5 text-success" />,
          target: "Real-time revenue tracking"
        },
        {
          area: "Personalization Engine",
          description: "Leverage 1,000,000+ digital check-ins data for targeting",
          icon: <Database className="w-5 h-5 text-success" />,
          target: "1M+ data points leveraged"
        }
      ],
      successMetrics: [
        { metric: "Upsell conversion", target: "20%+ rate (vs 6.04% industry average)", current: "6.04% industry average" },
        { metric: "Revenue per guest", target: "Measurable increase in ancillary service bookings", current: "Baseline revenue" },
        { metric: "Hotel partner satisfaction", target: "Demonstrated ROI through increased revenue capture", current: "Current satisfaction" },
        { metric: "Guest satisfaction", target: "Maintain 98.89% satisfaction while increasing monetization", current: "98.89% satisfaction" }
      ],
      resourceRequirements: "2 developers, 1 conversion specialist, 1 data analyst",
      businessImpact: "€2.5-3.2M annual revenue impact potential for 200-room hotels"
    },
    {
      id: 'intelligence',
      title: 'Advanced Intelligence',
      duration: 'Months 4-6',
      color: 'accent',
      bgGradient: 'from-accent/5 to-primary/5',
      borderColor: 'border-accent/20',
      icon: <Brain className="w-8 h-8 text-accent" />,
      tooltip: "Advanced intelligence phase establishes long-term competitive advantages through AI and voice technology integration",
      innovationImplementation: [
        {
          innovation: "Predictive Service Engine",
          description: "Leverage AI capabilities for guest need anticipation",
          icon: <Lightbulb className="w-5 h-5 text-accent" />,
          target: "AI-powered need anticipation"
        },
        {
          innovation: "Voice-first Interface",
          description: "Address 54% hotel adoption of voice-controlled features",
          icon: <Mic className="w-5 h-5 text-accent" />,
          target: "Voice-controlled features"
        },
        {
          innovation: "Advanced Analytics",
          description: "Provide hotels with operational insights and guest behavior data",
          icon: <BarChart3 className="w-5 h-5 text-accent" />,
          target: "Operational insights delivery"
        },
        {
          innovation: "Market Differentiation",
          description: "Establish clear competitive advantages through AI integration",
          icon: <Award className="w-5 h-5 text-accent" />,
          target: "Clear competitive advantages"
        }
      ],
      successMetrics: [
        { metric: "AI automation", target: "Achieve 85%+ guest inquiry automation rate", current: "Manual inquiry handling" },
        { metric: "Voice adoption", target: "Measurable usage rates for voice-activated services", current: "No voice features" },
        { metric: "Hotel partner satisfaction", target: "Above 90% satisfaction with advanced capabilities", current: "Current satisfaction" },
        { metric: "Market position", target: "Clear differentiation from competitors in European market", current: "Current position" }
      ],
      resourceRequirements: "4 developers, 1 AI specialist, 1 product manager, 1 data scientist",
      strategicImpact: "Market leadership in intelligent hotel guest technology"
    }
  ];

  // Risk mitigation strategies
  const riskMitigation = [
    {
      category: "Technical Risk Management",
      color: "error",
      icon: <AlertTriangle className="w-6 h-6 text-error" />,
      risks: [
        {
          risk: "Legacy System Integration",
          mitigation: "Phased rollout with proven PMS systems first",
          implementation: "Start with tested integrations, expand gradually"
        },
        {
          risk: "Performance Monitoring",
          mitigation: "Continuous optimization maintaining 98.89% satisfaction",
          implementation: "Real-time monitoring with automatic rollback capabilities"
        },
        {
          risk: "Data Privacy Compliance",
          mitigation: "European GDPR expertise throughout development",
          implementation: "Privacy-by-design approach with legal review at each phase"
        }
      ]
    },
    {
      category: "Market Risk Mitigation",
      color: "warning",
      icon: <TrendingDown className="w-6 h-6 text-warning" />,
      risks: [
        {
          risk: "Hotel Adoption Resistance",
          mitigation: "Pilot programs with guaranteed ROI demonstration",
          implementation: "Performance-based pricing with success guarantees"
        },
        {
          risk: "Competitive Response",
          mitigation: "Leverage PWA technology and 50+ partner advantages",
          implementation: "Accelerated development timeline with patent protection"
        },
        {
          risk: "Resource Constraints",
          mitigation: "Flexible timeline with priority feature focus",
          implementation: "Agile development with MVP approach for each phase"
        }
      ]
    },
    {
      category: "Success Dependencies",
      color: "info",
      icon: <CheckSquare className="w-6 h-6 text-info" />,
      dependencies: [
        {
          dependency: "Strong Hotel Relationships",
          requirement: "Build on current 3,000+ hotel network",
          implementation: "Leverage existing partnerships for pilot programs"
        },
        {
          dependency: "Continuous Feedback",
          requirement: "Leverage 59 features in 2023 development approach",
          implementation: "Regular stakeholder feedback loops and iterative development"
        },
        {
          dependency: "Technical Excellence",
          requirement: "Maintain proven 1,000,000+ digital check-ins reliability",
          implementation: "Rigorous testing and performance optimization"
        }
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">Strategic Implementation</span><br />
          <span className="text-secondary">14-Month ROI Roadmap</span>
        </h1>
        
        <p className="text-xl text-base-content/80 max-w-4xl mx-auto mb-8">
          Four-phase approach targeting critical performance gaps with proven market-validated improvements
        </p>

        {/* Key Timeline Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <div className="stats shadow border border-primary/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-primary text-lg">6</div>
              <div className="stat-desc text-xs">Months Total Timeline</div>
            </div>
          </div>
          <div className="stats shadow border border-success/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-success text-lg">€2.5-3.2M</div>
              <div className="stat-desc text-xs">Annual Revenue Impact</div>
            </div>
          </div>
          <div className="stats shadow border border-secondary/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-secondary text-lg">98.89%</div>
              <div className="stat-desc text-xs">Satisfaction Maintained</div>
            </div>
          </div>
          <div className="stats shadow border border-accent/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-accent text-lg">14</div>
              <div className="stat-desc text-xs">Month ROI Timeline</div>
            </div>
          </div>
        </div>

        {/* Timeline Validation */}
        <div className="alert alert-info max-w-4xl mx-auto">
          <Info className="w-4 h-4" />
          <div className="text-sm">
            <div className="font-semibold">Timeline Validation:</div>
            <div>14-month ROI based on documented industry case studies and proven implementation patterns</div>
          </div>
        </div>
      </div>

      {/* Four Implementation Phases */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Four Strategic Implementation Phases</h2>
        
        {/* Phase Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-12">
          {implementationPhases.map((phase, index) => (
            <button 
              key={phase.id}
              className={`btn ${activePhase === index ? `btn-${phase.color}` : 'btn-outline'} gap-2 flex-1 sm:flex-none`}
              onClick={() => setActivePhase(index)}
            >
              {React.cloneElement(phase.icon, { 
                className: `w-5 h-5 ${activePhase === index ? 'text-white' : `text-${phase.color}`}` 
              })}
              <span className="hidden sm:inline">Phase {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Active Phase Display */}
        <div className={`card bg-gradient-to-br ${implementationPhases[activePhase].bgGradient} border-2 ${implementationPhases[activePhase].borderColor} mb-8`}>
          <div className="card-body p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-20 h-20 rounded-xl bg-base-100 flex items-center justify-center border-2 ${implementationPhases[activePhase].borderColor}`}>
                {implementationPhases[activePhase].icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Phase {activePhase + 1}: {implementationPhases[activePhase].title}
                </h3>
                <div className="flex items-center gap-4 text-base-content/60 mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{implementationPhases[activePhase].duration}</span>
                  </div>
                </div>
                <Tooltip content={implementationPhases[activePhase].tooltip}>
                  <p className="text-base-content/80 cursor-help">
                    {implementationPhases[activePhase].tooltip}
                  </p>
                </Tooltip>
              </div>
            </div>

            {/* Phase Content */}
            <div className="space-y-6">
              {/* Phase-specific content */}
              {activePhase === 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5" />
                    Priority Improvements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {implementationPhases[activePhase].priorityImprovements.map((improvement, index) => (
                      <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                        <div className="flex items-start gap-3 mb-3">
                          {improvement.icon}
                          <div>
                            <h5 className="font-semibold text-sm">{improvement.improvement}</h5>
                            <p className="text-xs text-base-content/80 mt-1">{improvement.description}</p>
                          </div>
                        </div>
                        <div className="text-xs text-base-content/60 bg-base-200 rounded px-2 py-1">
                          <strong>Target:</strong> {improvement.target}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activePhase === 1 && (
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Core Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {implementationPhases[activePhase].coreDeliverables.map((deliverable, index) => (
                      <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                        <div className="flex items-start gap-3 mb-3">
                          {deliverable.icon}
                          <div>
                            <h5 className="font-semibold text-sm">{deliverable.deliverable}</h5>
                            <p className="text-xs text-base-content/80 mt-1">{deliverable.description}</p>
                          </div>
                        </div>
                        <div className="text-xs text-base-content/60 bg-base-200 rounded px-2 py-1">
                          <strong>Target:</strong> {deliverable.target}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activePhase === 2 && (
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Focus Areas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {implementationPhases[activePhase].focusAreas.map((area, index) => (
                      <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                        <div className="flex items-start gap-3 mb-3">
                          {area.icon}
                          <div>
                            <h5 className="font-semibold text-sm">{area.area}</h5>
                            <p className="text-xs text-base-content/80 mt-1">{area.description}</p>
                          </div>
                        </div>
                        <div className="text-xs text-base-content/60 bg-base-200 rounded px-2 py-1">
                          <strong>Target:</strong> {area.target}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activePhase === 3 && (
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Innovation Implementation
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {implementationPhases[activePhase].innovationImplementation.map((innovation, index) => (
                      <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                        <div className="flex items-start gap-3 mb-3">
                          {innovation.icon}
                          <div>
                            <h5 className="font-semibold text-sm">{innovation.innovation}</h5>
                            <p className="text-xs text-base-content/80 mt-1">{innovation.description}</p>
                          </div>
                        </div>
                        <div className="text-xs text-base-content/60 bg-base-200 rounded px-2 py-1">
                          <strong>Target:</strong> {innovation.target}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Success Metrics */}
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Success Metrics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {implementationPhases[activePhase].successMetrics.map((metric, index) => (
                    <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                      <h5 className="font-semibold text-sm mb-2">{metric.metric}</h5>
                      <div className="space-y-1">
                        <div className="text-xs text-success">
                          <strong>Target:</strong> {metric.target}
                        </div>
                        <div className="text-xs text-base-content/60">
                          <strong>Current:</strong> {metric.current}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resource Requirements & Impact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-base-100 rounded-lg border border-base-300">
                  <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Resource Requirements
                  </h5>
                  <p className="text-sm text-base-content/80">{implementationPhases[activePhase].resourceRequirements}</p>
                </div>
                <div className="p-4 bg-base-100 rounded-lg border border-base-300">
                  <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Business Impact
                  </h5>
                  <p className="text-sm text-base-content/80">
                    {implementationPhases[activePhase].businessImpact || 
                     implementationPhases[activePhase].revenueImpact || 
                     implementationPhases[activePhase].strategicImpact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Mitigation & Success Factors */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Risk Mitigation & Success Factors</h2>
          <Tooltip content="Risk management strategy based on proven implementation patterns and Straiv's existing market position">
            <p className="text-lg text-base-content/80 cursor-help">
              Comprehensive risk management ensuring successful implementation and ROI achievement
            </p>
          </Tooltip>
        </div>

        {/* Risk Category Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-8">
          {riskMitigation.map((category, index) => (
            <button 
              key={category.category}
              className={`btn ${activeRisk === index ? `btn-${category.color}` : 'btn-outline'} gap-2 flex-1 sm:flex-none`}
              onClick={() => setActiveRisk(index)}
            >
              {React.cloneElement(category.icon, { 
                className: `w-5 h-5 ${activeRisk === index ? 'text-white' : `text-${category.color}`}` 
              })}
              <span className="hidden sm:inline">{category.category.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Risk Category Display */}
        <div className={`card bg-gradient-to-br from-${riskMitigation[activeRisk].color}/5 to-base-100 border-2 border-${riskMitigation[activeRisk].color}/20`}>
          <div className="card-body p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-16 h-16 rounded-xl bg-base-100 flex items-center justify-center border-2 border-${riskMitigation[activeRisk].color}/20`}>
                {riskMitigation[activeRisk].icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{riskMitigation[activeRisk].category}</h3>
                <p className="text-base-content/80">
                  {activeRisk === 0 && "Proactive technical risk management ensuring system reliability and performance"}
                  {activeRisk === 1 && "Market risk mitigation strategies leveraging existing strengths and partnerships"}
                  {activeRisk === 2 && "Critical success dependencies and requirements for implementation success"}
                </p>
              </div>
            </div>

            {/* Risk/Dependency Content */}
            <div className="space-y-4">
              {(riskMitigation[activeRisk].risks || riskMitigation[activeRisk].dependencies || []).map((item, index) => (
                <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                  <h4 className="font-semibold text-sm mb-3">
                    {item.risk || item.dependency}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">
                        {item.risk ? 'MITIGATION' : 'REQUIREMENT'}
                      </div>
                      <div className="text-sm text-base-content/80">
                        {item.mitigation || item.requirement}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-base-content/60 mb-1">IMPLEMENTATION</div>
                      <div className="text-sm text-base-content/80">{item.implementation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Impact Summary */}
      <div className="card bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20">
        <div className="card-body text-center p-8">
          <h3 className="text-2xl font-bold mb-6">Implementation Impact Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary">25-30%</div>
              <div className="text-sm font-medium">Onboarding Completion</div>
              <div className="text-xs text-base-content/60">vs 19.2% current</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">15-25%</div>
              <div className="text-sm font-medium">Digital Check-in</div>
              <div className="text-xs text-base-content/60">vs 4% current</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success">20%+</div>
              <div className="text-sm font-medium">Upsell Conversion</div>
              <div className="text-xs text-base-content/60">vs 6.04% industry</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">85%+</div>
              <div className="text-sm font-medium">AI Automation</div>
              <div className="text-xs text-base-content/60">Guest inquiries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Navigation */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Complete Strategic Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <button 
            className="card bg-gradient-to-r from-info to-primary text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/prototype-demo') : onSectionChange('prototype-demo')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Prototype Demo</h3>
              <p className="text-sm opacity-80">Interactive demonstrations of key features</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-success to-secondary text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/sources') : onSectionChange('sources')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Research Sources</h3>
              <p className="text-sm opacity-80">Industry benchmarks and supporting studies</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/overview') : onSectionChange('overview')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Strategic Overview</h3>
              <p className="text-sm opacity-80">Complete strategy summary and framework</p>
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

export default ImplementationRoadmap; 