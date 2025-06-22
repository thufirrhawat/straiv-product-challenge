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
  CreditCard,
  Info,
  AlertTriangle,
  Settings,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Shield,
  Banknote,
  Gift,
  MapPin,
  Bell
} from 'lucide-react';

const ConversionStrategy = ({ onSectionChange, navigate }) => {
  const [activeStrategy, setActiveStrategy] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  // Helper function to handle navigation with scroll-to-top
  const handleNavigation = (path) => {
    if (navigate) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Tooltip component for research data
  const Tooltip = ({ children, content }) => (
    <div className="tooltip tooltip-info tooltip-top sm:tooltip-right" data-tip={content}>
      {children}
    </div>
  );

  // Current challenge data
  const currentChallenge = {
    industryAverage: "19.2%",
    userExpectation: "72% expect onboarding to take 60 seconds or less",
    abandonmentImpact: "80% delete app after first use due to poor experience"
  };

  // Three main conversion strategies
  const conversionStrategies = [
    {
      id: 'onboarding',
      title: "Onboarding Transformation",
      subtitle: "From Industry Average to Top Performer",
      color: "primary",
      bgGradient: "from-primary/5 to-info/5",
      borderColor: "border-primary/20",
      icon: <UserPlus className="w-5 h-5" />,
      currentChallenge: {
        average: "19.2% onboarding completion (hospitality-specific)",
        expectation: "72% expect onboarding to take 60 seconds or less",
        impact: "80% delete app after first use due to poor experience"
      },
      targetOutcome: "25-30% completion rate (exceeding industry benchmarks)",
      revenueImpact: "Each percentage point improvement affects overall engagement and conversion",
      tooltip: "Research shows 25-30% onboarding completion is achievable with streamlined, value-focused approach",
      strategicSolution: {
        approach: "Streamlined Value-First Onboarding",
        steps: [
        {
            step: "Step 1",
            title: "Immediate Recognition & Value",
            description: "Instant hotel identification and arrival date confirmation",
            features: [
              "Clear digital key availability timeline",
              "Immediate benefit preview rather than feature explanation"
            ],
            icon: <Zap className="w-6 h-6 text-primary" />
          },
          {
            step: "Step 2", 
            title: "Essential Permissions with Context",
            description: "Single-tap notification setup with clear guest benefits",
            features: [
              "Location access for relevant hotel and local services",
              "Contactless preference selection (addressing 53.6% preference)"
            ],
            icon: <Shield className="w-6 h-6 text-primary" />
        },
        {
            step: "Step 3",
            title: "Personalization Quick Setup", 
            description: "Guest journey stage identification (business/leisure, solo/family)",
            features: [
              "Service interest indication for relevant upsell targeting",
              "Accessibility requirements and preferences"
            ],
            icon: <Users className="w-6 h-6 text-primary" />
        }
      ]
      }
    },
    {
      id: 'touchpoints',
      title: "Critical Touchpoint Enhancement",
      subtitle: "Optimize Digital Check-in and Checkout Processes",
      color: "secondary", 
      bgGradient: "from-secondary/5 to-accent/5",
      borderColor: "border-secondary/20",
      icon: <Calendar className="w-5 h-5" />,
      currentChallenge: {
        checkIn: "4% digital check-in adoption vs 54% consumer demand",
        process: "Poor checkout experience with no personalization",
        impact: "Massive opportunity gap in digital service utilization"
      },
      businessImpact: {
        waitTime: "85% shorter wait times through digital automation",
        costReduction: "15% operational cost reduction in check-in processes", 
        bookingAdvantage: "$519 vs $320 direct booking AOV advantage over OTAs"
      },
      tooltip: "Optimized touchpoints address the massive digital check-in adoption gap while improving operational efficiency",
      optimizations: [
        {
          process: "Check-In Flow Optimization",
          improvements: [
            "Automatic arrival detection and interface preparation",
            "One-tap digital key activation (addressing 54% consumer demand)",
            "Immediate room location, WiFi details, and essential information",
            "Target: Improve from 4% to 15-25% digital check-in adoption"
          ],
          icon: <MapPin className="w-6 h-6 text-secondary" />
        },
        {
          process: "Check-Out Process Improvement",
          improvements: [
            "Bill preview and review 12 hours before departure",
            "Express checkout with instant receipt delivery", 
            "Loyalty program status and earned benefits summary",
            "Future booking incentives leveraging 62% premium for direct bookings vs OTAs"
          ],
          icon: <CreditCard className="w-6 h-6 text-secondary" />
        }
      ]
    },
    {
      id: 'revenue',
      title: "Intelligent Revenue Optimization",
      subtitle: "Context-Aware Upselling System",
      color: "accent",
      bgGradient: "from-accent/5 to-success/5", 
      borderColor: "border-accent/20",
      icon: <TrendingUp className="w-5 h-5" />,
      currentOpportunity: {
        industry: "6.04% upsell conversion rate",
        topPerformers: "Achieve 20%+ conversion rates",
        potential: "10-20% of total guest charges, representing significant revenue opportunity"
      },
      revenueProjection: "€2.5-3.2M annual revenue impact potential for 200-room hotels",
      tooltip: "Industry research shows properly timed, contextual offers can achieve 20%+ conversion rates vs 6.04% average",
      smartApproach: {
        timingBased: [
          {
            timing: "Late arrivals",
            recommendation: "Room service and express services",
            icon: <Clock className="w-6 h-6 text-accent" />
          },
          {
            timing: "Family bookings",
            recommendation: "Children's activities and family amenities", 
            icon: <Users className="w-6 h-6 text-accent" />
          },
          {
            timing: "Business travelers",
            recommendation: "Meeting rooms and business center access",
            icon: <Banknote className="w-6 h-6 text-accent" />
          },
          {
            timing: "Extended stays",
            recommendation: "Spa services and local experience packages",
            icon: <Sparkles className="w-6 h-6 text-accent" />
        }
        ],
        contextualIntelligence: [
          "Leverage guest behavior patterns from 1,000,000+ digital check-ins annually",
          "Present offers when guests most likely to accept (not random timing)",
          "Balance revenue optimization with 98.89% customer satisfaction maintenance"
        ],
        performanceTargets: [
          "Improve from 6.04% to 20%+ upsell conversion rate",
          "Capture more of 10-20% total guest charges opportunity", 
          "Increase current 5-10% guest booking rate for additional services"
      ]
      }
    }
  ];

  // Success metrics and benchmarks
  const successMetrics = {
    onboarding: {
      current: "19.2%",
      target: "25-30%",
      benchmark: "Industry hospitality average"
    },
    digitalCheckIn: {
      current: "4%", 
      target: "15-25%",
      demand: "54% consumer demand"
    },
    upsellConversion: {
      current: "6.04%",
      target: "20%+", 
      opportunity: "€2.5-3.2M annual potential"
    }
  };

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">From Industry Average</span><br />
          <span className="text-secondary">to Top Performer</span>
        </h1>
        
        <p className="text-xl text-base-content/80 max-w-4xl mx-auto mb-8">
          Transform onboarding and optimize critical touchpoints for maximum revenue impact
        </p>

        {/* Current Challenge Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          <div className="stats shadow border border-error/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-error text-lg">{currentChallenge.industryAverage}</div>
              <div className="stat-desc text-xs">Industry Onboarding Average</div>
                      </div>
                    </div>
          <div className="stats shadow border border-warning/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-warning text-lg">60s</div>
              <div className="stat-desc text-xs">User Expectation Limit</div>
                  </div>
              </div>
          <div className="stats shadow border border-info/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-info text-lg">80%</div>
              <div className="stat-desc text-xs">Delete After First Use</div>
            </div>
                      </div>
                    </div>
                  </div>

      {/* Current Challenge Context */}
      <div className="card bg-gradient-to-r from-error/5 to-warning/5 border border-error/20">
        <div className="card-body p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-error" />
            Current Challenge Context
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-error mb-2">{currentChallenge.industryAverage}</div>
              <div className="text-sm font-medium mb-1">Industry Average</div>
              <div className="text-xs text-base-content/60">Hospitality-specific onboarding completion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">72%</div>
              <div className="text-sm font-medium mb-1">User Expectation</div>
              <div className="text-xs text-base-content/60">Expect onboarding under 60 seconds</div>
              </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-info mb-2">80%</div>
              <div className="text-sm font-medium mb-1">Abandonment Impact</div>
              <div className="text-xs text-base-content/60">Delete app after first use due to poor experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Conversion Strategies */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Three-Phase Conversion Optimization</h2>
          
        {/* Strategy Navigation */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 mb-8">
          {conversionStrategies.map((strategy, index) => (
              <button 
              key={strategy.id}
              className={`btn ${activeStrategy === index ? `btn-${strategy.color}` : 'btn-outline'} gap-2 flex-1 sm:flex-none`}
              onClick={() => setActiveStrategy(index)}
              >
              {strategy.icon}
              <span className="hidden sm:inline">{strategy.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

        {/* Active Strategy Display */}
        <div className={`card bg-gradient-to-br ${conversionStrategies[activeStrategy].bgGradient} border-2 ${conversionStrategies[activeStrategy].borderColor} mb-8`}>
          <div className="card-body p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-16 h-16 rounded-xl bg-base-100 flex items-center justify-center border-2 ${conversionStrategies[activeStrategy].borderColor}`}>
                <div className={`text-${conversionStrategies[activeStrategy].color}`}>
                  <div className="w-8 h-8">
                    {React.cloneElement(conversionStrategies[activeStrategy].icon, { className: 'w-8 h-8' })}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{conversionStrategies[activeStrategy].title}</h3>
                <p className="text-lg text-base-content/80 mb-3">{conversionStrategies[activeStrategy].subtitle}</p>
              </div>
            </div>

            {/* Strategy-specific content */}
            {activeStrategy === 0 && (
              <div className="space-y-6">
                {/* Current Challenge */}
                <div className="card bg-gradient-to-r from-warning/10 to-error/10 border border-warning/20">
                  <div className="card-body p-6">
                    <h4 className="card-title text-lg mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-warning" />
                      Current Challenge
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg border border-base-300">
                        <BarChart3 className="w-5 h-5 text-error flex-shrink-0" />
                        <div>
                          <div className="text-xs text-base-content/60 font-medium">Completion Rate</div>
                          <div className="text-sm font-semibold text-error">{conversionStrategies[activeStrategy].currentChallenge.average}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg border border-base-300">
                        <Clock className="w-5 h-5 text-warning flex-shrink-0" />
                        <div>
                          <div className="text-xs text-base-content/60 font-medium">User Expectation</div>
                          <div className="text-sm font-semibold text-warning">{conversionStrategies[activeStrategy].currentChallenge.expectation}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg border border-base-300">
                        <Users className="w-5 h-5 text-error flex-shrink-0" />
                        <div>
                          <div className="text-xs text-base-content/60 font-medium">Abandonment Risk</div>
                          <div className="text-sm font-semibold text-error">{conversionStrategies[activeStrategy].currentChallenge.impact}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategic Solution */}
              <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    {conversionStrategies[activeStrategy].strategicSolution.approach}
                  </h4>
                  
                  <div className="space-y-4">
                    {conversionStrategies[activeStrategy].strategicSolution.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="p-4 bg-base-100 rounded-lg border border-base-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="badge badge-primary">{step.step}</span>
                              <h5 className="font-semibold">{step.title}</h5>
                            </div>
                            <p className="text-sm text-base-content/80 mb-3">{step.description}</p>
                            <ul className="space-y-1">
                              {step.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="text-xs text-base-content/70 flex items-start gap-2">
                                  <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                    </div>
                  ))}
                  </div>
                </div>

                {/* Target Outcome */}
                <div className="alert alert-success py-3">
                  <Target className="w-4 h-4" />
                  <div className="text-sm">
                    <div className="font-semibold">Target Outcome:</div>
                    <div>{conversionStrategies[activeStrategy].targetOutcome}</div>
                  </div>
                </div>
              </div>
            )}

            {activeStrategy === 1 && (
              <div className="space-y-6">
                {/* Business Impact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(conversionStrategies[activeStrategy].businessImpact).map(([key, value]) => (
                    <div key={key} className="p-4 bg-base-100 rounded-lg border border-base-300 text-center">
                      <div className="font-medium text-sm capitalize mb-1">{key.replace(/([A-Z])/g, ' $1')}</div>
                      <div className="text-sm text-base-content/80">{value}</div>
                    </div>
                  ))}
            </div>

                {/* Optimizations */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Process Optimizations</h4>
                  <div className="space-y-4">
                    {conversionStrategies[activeStrategy].optimizations.map((optimization, index) => (
                      <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            {optimization.icon}
                    </div>
                          <div className="flex-1">
                            <h5 className="font-semibold mb-3">{optimization.process}</h5>
                            <ul className="space-y-2">
                              {optimization.improvements.map((improvement, improvementIndex) => (
                                <li key={improvementIndex} className="text-sm flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                  <span>{improvement}</span>
                                </li>
                              ))}
                            </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
            )}

            {activeStrategy === 2 && (
              <div className="space-y-6">
                {/* Current Opportunity */}
                <div className="card bg-gradient-to-r from-info/10 to-primary/10 border border-info/20">
                  <div className="card-body p-6">
                    <h4 className="card-title text-lg mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-info" />
                      Current Opportunity
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg border border-base-300">
                        <BarChart3 className="w-5 h-5 text-error flex-shrink-0" />
                        <div>
                          <div className="text-xs text-base-content/60 font-medium">Industry Average</div>
                          <div className="text-sm font-semibold text-error">{conversionStrategies[activeStrategy].currentOpportunity.industry}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg border border-base-300">
                        <Star className="w-5 h-5 text-success flex-shrink-0" />
                        <div>
                          <div className="text-xs text-base-content/60 font-medium">Top Performers</div>
                          <div className="text-sm font-semibold text-success">{conversionStrategies[activeStrategy].currentOpportunity.topPerformers}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg border border-base-300">
                        <DollarSign className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <div className="text-xs text-base-content/60 font-medium">Revenue Potential</div>
                          <div className="text-sm font-semibold text-primary">{conversionStrategies[activeStrategy].currentOpportunity.potential}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Smart Approach */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Timing-Based Recommendations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {conversionStrategies[activeStrategy].smartApproach.timingBased.map((timing, index) => (
                      <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                        <div className="flex items-start gap-3">
                          {timing.icon}
                          <div>
                            <div className="font-semibold text-sm">{timing.timing}</div>
                            <div className="text-xs text-base-content/70">→ {timing.recommendation}</div>
                          </div>
                        </div>
                      </div>
                    ))}
      </div>

                  <h4 className="font-semibold text-lg mb-4">Contextual Intelligence</h4>
                  <div className="space-y-2 mb-6">
                    {conversionStrategies[activeStrategy].smartApproach.contextualIntelligence.map((intel, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{intel}</span>
              </div>
            ))}
          </div>
          
                  <h4 className="font-semibold text-lg mb-4">Performance Targets</h4>
                  <div className="space-y-2">
                    {conversionStrategies[activeStrategy].smartApproach.performanceTargets.map((target, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{target}</span>
          </div>
                    ))}
        </div>
      </div>

                {/* Revenue Projection */}
                <div className="alert alert-success py-3">
                  <DollarSign className="w-4 h-4" />
                  <div className="text-sm">
                    <div className="font-semibold">Revenue Projection:</div>
                    <div>{conversionStrategies[activeStrategy].revenueProjection}</div>
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Strategy Tooltip */}
        <div className="text-center">
          <div className="tooltip tooltip-info tooltip-top" data-tip={conversionStrategies[activeStrategy].tooltip}>
            <div className="inline-flex items-center gap-2 text-base-content/60 cursor-help">
              <Info className="w-4 h-4" />
              <span className="text-sm">Research Insight Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics Dashboard */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Success Metrics & Benchmarks</h2>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-gradient-to-br from-primary/5 to-info/5 border border-primary/20">
            <div className="card-body text-center p-6">
              <UserPlus className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Onboarding Completion</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Current:</span>
                  <span className="text-error font-bold">{successMetrics.onboarding.current}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Target:</span>
                  <span className="text-success font-bold">{successMetrics.onboarding.target}</span>
                </div>
                <div className="text-xs text-base-content/60">{successMetrics.onboarding.benchmark}</div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20">
            <div className="card-body text-center p-6">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-secondary" />
              <h3 className="font-bold text-lg mb-2">Digital Check-in Adoption</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Current:</span>
                  <span className="text-error font-bold">{successMetrics.digitalCheckIn.current}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Target:</span>
                  <span className="text-success font-bold">{successMetrics.digitalCheckIn.target}</span>
                </div>
                <div className="text-xs text-base-content/60">{successMetrics.digitalCheckIn.demand}</div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-accent/5 to-success/5 border border-accent/20">
            <div className="card-body text-center p-6">
              <TrendingUp className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-bold text-lg mb-2">Upsell Conversion</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Current:</span>
                  <span className="text-error font-bold">{successMetrics.upsellConversion.current}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Target:</span>
                  <span className="text-success font-bold">{successMetrics.upsellConversion.target}</span>
                </div>
                <div className="text-xs text-base-content/60">{successMetrics.upsellConversion.opportunity}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Navigation */}
            <div>
        <h2 className="text-3xl font-bold text-center mb-8">Strategic Implementation Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
        <button 
            className="card bg-gradient-to-r from-info to-success text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/innovation-strategy') : onSectionChange('innovation-strategy')}
        >
            <div className="card-body text-center p-6">
            <Brain className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Innovation Strategy</h3>
              <p className="text-sm opacity-80">AI and voice technology for competitive advantage</p>
              <div className="card-actions justify-center mt-4">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
            className="card bg-gradient-to-r from-success to-primary text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/implementation-roadmap') : onSectionChange('implementation-roadmap')}
        >
            <div className="card-body text-center p-6">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Implementation Roadmap</h3>
              <p className="text-sm opacity-80">Detailed timeline and resource requirements</p>
              <div className="card-actions justify-center mt-4">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

          <button 
            className="card bg-gradient-to-r from-primary to-secondary text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/stickiness-strategy') : onSectionChange('stickiness-strategy')}
          >
            <div className="card-body text-center p-6">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Stickiness Strategy</h3>
              <p className="text-sm opacity-80">Journey-Stage Intelligence for user retention</p>
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

export default ConversionStrategy; 