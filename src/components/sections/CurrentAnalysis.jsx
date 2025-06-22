import React, { useState } from 'react';
import { 
  AlertTriangle,
  Search,
  Clock,
  Navigation,
  Bot,
  Smartphone,
  MapPin,
  ShoppingCart,
  Calendar,
  Star,
  WifiOff,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  X,
  TrendingUp,
  Users,
  Target,
  Info,
  Zap,
  DollarSign,
  BarChart3,
  Globe,
  Brain,
  Settings
} from 'lucide-react';

const CurrentAnalysis = ({ onSectionChange, navigate }) => {
  const [expandedPriority, setExpandedPriority] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);

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

  // Critical issues data structure
  const criticalIssues = [
    {
      priority: "Priority 1",
      title: "Performance & Loading Issues",
      severity: "critical",
      color: "border-error",
      bgColor: "bg-error/5",
      icon: <Clock className="w-8 h-8" />,
      description: "Critical performance gaps preventing optimal user experience",
      researchContext: "Studies show acceptable launch time is 2-3 seconds maximum",
      businessImpact: "One-second delay can lose nearly 10% of total visitors",
      issues: [
        {
          finding: "Loading Time Performance Gap",
          impact: "72% of users expect app onboarding to take 60 seconds or less",
          currentGap: "Loading times exceed industry standards",
          solution: "Performance optimization, code splitting, lazy loading implementation"
        },
        {
          finding: "User Expectation Mismatch", 
          impact: "70% of users may abandon app due to prolonged loading times",
          currentGap: "Current performance fails benchmark expectations",
          solution: "Mobile-first optimization and progressive loading strategies"
        }
      ],
      tooltip: "Performance issues directly correlate with user abandonment and prevent users from experiencing app value"
    },
    {
      priority: "Priority 2", 
      title: "Cognitive Overload & Navigation",
      severity: "critical",
      color: "border-warning",
      bgColor: "bg-warning/5",
      icon: <Navigation className="w-8 h-8" />,
      description: "Navigation complexity creating user confusion and abandonment",
      researchContext: "18 menu items in pre-check-in stage creates cognitive overload", 
      businessImpact: "80% of users delete an app after first use due to bad design and poor UX",
      issues: [
        {
          finding: "Menu Item Overload",
          impact: "Decision paralysis reduces engagement and stickiness", 
          currentGap: "Too many options presented simultaneously",
          solution: "Journey-stage intelligence to show relevant actions only"
        },
        {
          finding: "Navigation Problems",
          impact: "Users get trapped in flows leading to abandonment",
          currentGap: "Bottom navigation disappears in detailed views, button overlaps with AI chat",
          solution: "Consistent navigation architecture with proper layout management"
        }
      ],
      tooltip: "Navigation complexity prevents users from completing desired actions and reduces overall app effectiveness"
    },
    {
      priority: "Priority 3",
      title: "Onboarding & Conversion Barriers", 
      severity: "high",
      color: "border-info",
      bgColor: "bg-info/5",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Barriers preventing successful user onboarding and conversion",
      researchContext: "Current performance below 19.2% industry average for onboarding completion",
      businessImpact: "Each improvement in onboarding completion affects overall guest engagement",
      issues: [
        {
          finding: "Below Industry Benchmarks",
          impact: "Poor onboarding completion reduces lifetime value",
          currentGap: "19.2% average completion rate vs 25-30% target",
          solution: "Streamlined value-first onboarding with clear benefit preview"
        },
        {
          finding: "Transaction Issues",
          impact: "Incomplete feedback systems reduce service quality perception",
          currentGap: "Unclear next steps for upsells and service confirmations", 
          solution: "Complete transaction flow with confirmation tracking and clear next steps"
        }
      ],
      tooltip: "Onboarding optimization directly impacts user lifetime value and revenue generation potential"
    },
    {
      priority: "Priority 4",
      title: "Journey Stage Misalignment",
      severity: "high", 
      color: "border-secondary",
      bgColor: "bg-secondary/5",
      icon: <Target className="w-8 h-8" />,
      description: "Interface inconsistency across different guest journey phases",
      researchContext: "Same interface regardless of guest journey phase",
      businessImpact: "54% consumer demand for digital check-in vs only 4% utilization",
      issues: [
        {
          finding: "Context-Agnostic Design",
          impact: "Wrong features at wrong moments drive abandonment",
          currentGap: "No differentiation between pre-arrival, in-stay, and post-checkout needs",
          solution: "Journey-stage detection with contextual interface adaptation"
        },
        {
          finding: "Digital Check-in Gap",
          impact: "Massive opportunity gap between demand and utilization",
          currentGap: "Only 4% utilization despite 54% consumer demand",
          solution: "Proactive digital check-in promotion with seamless user experience"
        }
      ],
      tooltip: "Journey stage misalignment represents the largest opportunity for immediate conversion improvement"
    }
  ];

  // Competitive context data
  const competitiveContext = {
    marketSize: "€187.9 Billion",
    growth: "26.18% CAGR",
    investment: "100%",
    automation: "50%"
  };

  const strativAdvantages = [
    {
      title: "PWA Technology Advantage",
      description: "Eliminates app download requirements (key differentiator)",
      icon: <Smartphone className="w-6 h-6 text-primary" />
    },
    {
      title: "Deep PMS Integration",
      description: "Across multiple hotel brands with 50+ technology partners",
      icon: <Settings className="w-6 h-6 text-info" />
    },
    {
      title: "European Market Focus", 
      description: "GDPR compliance built-in with local market expertise",
      icon: <Globe className="w-6 h-6 text-success" />
    },
    {
      title: "Customer-Driven Development",
      description: "59 new features added in 2023 based on customer feedback", 
      icon: <Users className="w-6 h-6 text-secondary" />
    }
  ];

  const opportunityAreas = [
    {
      title: "Mobile Check-in Automation",
      impact: "Can reduce front desk needs by 50%",
      value: "50% Cost Reduction"
    },
    {
      title: "AI-Powered Concierge",
      impact: "Handle 85%+ of guest inquiries automatically", 
      value: "85% Automation"
    },
    {
      title: "Digital Transformation",
      impact: "Enable 15% operational cost reduction",
      value: "15% Cost Savings"
    }
  ];

  const overallStats = {
    totalIssues: criticalIssues.reduce((sum, cat) => sum + cat.issues.length, 0),
    criticalIssues: criticalIssues.filter(cat => cat.severity === 'critical').reduce((sum, cat) => sum + cat.issues.length, 0),
    estimatedRevenueLoss: "35% Gap",
    fixTimeframe: "12 weeks"
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'error';
      case 'high': return 'warning'; 
      case 'medium': return 'info';
      case 'low': return 'success';
      default: return 'neutral';
    }
  };

  const getSeverityBadge = (severity) => {
    const color = getSeverityColor(severity);
    return <span className={`badge badge-${color} badge-sm`}>{severity.toUpperCase()}</span>;
  };

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">Systematic UX</span><br />
          <span className="text-secondary">Evaluation Findings</span>
        </h1>
        
        <Tooltip content="These issues prevent Straiv from achieving industry-standard conversion rates and revenue optimization">
          <p className="text-xl text-base-content/80 max-w-4xl mx-auto mb-8 cursor-help">
            Critical Issues Requiring Immediate Attention to Bridge the 
            <span className="font-bold text-warning"> Performance Gap </span>
            and Unlock Revenue Potential
          </p>
        </Tooltip>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="stats shadow border border-error/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-error text-2xl">10%</div>
              <div className="stat-desc text-xs">Visitor Loss Per Second Delay</div>
            </div>
          </div>
          <div className="stats shadow border border-warning/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-warning text-2xl">80%</div>
              <div className="stat-desc text-xs">Delete App After First Use</div>
            </div>
          </div>
          <div className="stats shadow border border-info/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-info text-2xl">19.2%</div>
              <div className="stat-desc text-xs">Industry Onboarding Average</div>
            </div>
          </div>
          <div className="stats shadow border border-secondary/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-secondary text-2xl">54%</div>
              <div className="stat-desc text-xs">Digital Check-in Demand</div>
            </div>
          </div>
        </div>
      </div>

      {/* Critical Issues Analysis */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Priority-Based Issue Analysis</h2>
        
        <div className="space-y-6">
          {criticalIssues.map((priority, index) => (
            <div key={index} className={`card bg-base-100 border-2 ${priority.color} hover:shadow-xl transition-all`}>
              <div className="card-body p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl ${priority.bgColor} flex items-center justify-center border ${priority.color}`}>
                      <div className="text-base-content">
                        {priority.icon}
                      </div>
                    </div>
                    <div>
                      <div className="badge badge-outline mb-2">{priority.priority}</div>
                      <h3 className="card-title text-xl mb-2">{priority.title}</h3>
                      <p className="text-base-content/80 text-sm mb-3">{priority.description}</p>
                    </div>
                  </div>
                  <button 
                    className="btn btn-ghost btn-sm"
                    onClick={() => setExpandedPriority(expandedPriority === index ? null : index)}
                  >
                    {expandedPriority === index ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>

                {/* Research Context */}
                <div className="mb-4">
                  <div className="alert alert-info py-3">
                    <Info className="w-4 h-4" />
                    <div className="text-sm">
                      <div className="font-semibold">App Benchmark Finding:</div>
                      <div>{priority.researchContext}</div>
                    </div>
                  </div>
                </div>

                {/* Business Impact */}
                <div className="mb-4">
                  <div className="alert alert-warning py-3">
                    <AlertTriangle className="w-4 h-4" />
                    <div className="text-sm">
                      <div className="font-semibold">Business Impact:</div>
                      <div>{priority.businessImpact}</div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedPriority === index && (
                  <div className="mt-4 space-y-4">
                    <div className="divider text-sm">Detailed Analysis</div>
                    {priority.issues.map((issue, issueIndex) => (
                      <div key={issueIndex} className="bg-base-200 rounded-lg p-4">
                        <h4 className="font-semibold text-base mb-2">{issue.finding}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="font-medium text-error mb-1">Impact:</div>
                            <div className="text-base-content/80">{issue.impact}</div>
                          </div>
                          <div>
                            <div className="font-medium text-warning mb-1">Current Gap:</div>
                            <div className="text-base-content/80">{issue.currentGap}</div>
                          </div>
                          <div>
                            <div className="font-medium text-success mb-1">Solution:</div>
                            <div className="text-base-content/80">{issue.solution}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Context */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Straiv's Position in €187.9 Billion European Hotel Market
          </h2>
          <Tooltip content="Market conditions and Straiv's technical foundation create ideal conditions for significant improvement">
            <p className="text-lg text-base-content/80 max-w-3xl mx-auto cursor-help">
              Understanding market dynamics and competitive positioning to optimize strategic approach
            </p>
          </Tooltip>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Market Dynamics */}
          <div className="card bg-gradient-to-br from-primary/5 to-info/5 border border-primary/20">
            <div className="card-body p-8">
              <h3 className="card-title text-2xl mb-6 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-primary" />
                Market Dynamics
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                  <span className="text-base-content/80">European Hotel Market Size</span>
                  <span className="font-bold text-primary">{competitiveContext.marketSize}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                  <span className="text-base-content/80">Smart Hospitality Growth (CAGR)</span>
                  <span className="font-bold text-success">{competitiveContext.growth}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                  <span className="text-base-content/80">Hoteliers Plan Tech Investment</span>
                  <span className="font-bold text-info">{competitiveContext.investment}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                  <span className="text-base-content/80">Automation Demand ($9-10 per check-in)</span>
                  <span className="font-bold text-warning">{competitiveContext.automation}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Straiv's Advantages */}
          <div className="card bg-gradient-to-br from-success/5 to-secondary/5 border border-success/20">
            <div className="card-body p-8">
              <h3 className="card-title text-2xl mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-success" />
                Straiv's Advantages
              </h3>
              
              <div className="space-y-4">
                {strativAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-base-100 rounded-lg">
                    {advantage.icon}
                    <div>
                      <h4 className="font-semibold text-sm">{advantage.title}</h4>
                      <p className="text-xs text-base-content/70">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Opportunity Areas */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center mb-6">Key Opportunity Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunityAreas.map((opportunity, index) => (
              <div key={index} className="card bg-base-100 border border-base-300 hover:shadow-lg transition-all">
                <div className="card-body text-center p-4 sm:p-6">
                  <h4 className="card-title justify-center text-sm sm:text-base mb-3 leading-tight">{opportunity.title}</h4>
                  <p className="text-xs sm:text-sm text-base-content/80 mb-4 leading-relaxed">{opportunity.impact}</p>
                  <div className="flex justify-center">
                    <div className="badge badge-primary text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-3 font-semibold whitespace-nowrap">
                      {opportunity.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps Navigation */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Strategic Response Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <button 
            className="card bg-gradient-to-r from-primary to-secondary text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/stickiness-strategy') : onSectionChange('stickiness-strategy')}
          >
            <div className="card-body text-center p-6">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Stickiness Strategy</h3>
              <p className="text-sm opacity-80">Journey-Stage Intelligence to address user flow issues</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-accent to-info text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/conversion-strategy') : onSectionChange('conversion-strategy')}
          >
            <div className="card-body text-center p-6">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Conversion Strategy</h3>
              <p className="text-sm opacity-80">Transform onboarding and optimize revenue touchpoints</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

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
        </div>
      </div>
    </div>
  );
};

export default CurrentAnalysis; 