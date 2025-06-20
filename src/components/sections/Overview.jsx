import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Users,
  Smartphone,
  Brain,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  DollarSign,
  Zap,
  Globe,
  Award,
  Clock,
  Shield,
  Lightbulb,
  ChevronRight,
  AlertTriangle,
  BookOpen
} from 'lucide-react';

const Overview = ({ onSectionChange, navigate }) => {
  const [animatedStats, setAnimatedStats] = useState({
    criticalIssues: 0,
    conversionGap: 0,
    revenueLoss: 0,
    timeToImpact: 0
  });

  const [showHoverBeacon, setShowHoverBeacon] = useState(true);
  const [showImpactBeacon, setShowImpactBeacon] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeKpiTooltip, setActiveKpiTooltip] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        criticalIssues: 18,
        conversionGap: 35,
        revenueLoss: 47,
        timeToImpact: 12
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handle first hover interaction
  const handleFirstHover = () => {
    if (showHoverBeacon) {
      setShowHoverBeacon(false);
      localStorage.setItem('straiv-hover-beacon-seen', 'true');
    }
  };

  // Handle first impact dashboard hover interaction
  const handleFirstImpactHover = () => {
    if (showImpactBeacon) {
      setShowImpactBeacon(false);
      localStorage.setItem('straiv-impact-beacon-seen', 'true');
    }
  };

  // Close tooltips when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.card')) {
        setActiveTooltip(null);
        setActiveKpiTooltip(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const keyFindings = [
    {
      category: "Critical Issues Identified",
      value: animatedStats.criticalIssues,
      unit: "",
      description: "Major UX/functionality problems requiring immediate attention",
      color: "text-error",
      bgColor: "bg-error/10",
      icon: <AlertTriangle className="w-6 h-6" />,
      details: "Search functionality broken, weather widget UX poor, redundant navigation, slow loading times, broken AI chatbot"
    },
    {
      category: "Conversion Opportunity Gap",
      value: animatedStats.conversionGap,
      unit: "%",
      description: "Point gap between guest willingness (73%) and current usage (38%)",
      color: "text-warning",
      bgColor: "bg-warning/10",
      icon: <Target className="w-6 h-6" />,
      details: "Research shows 73% guest willingness vs 38% actual usage - massive opportunity for companies that solve core experience issues"
    },
    {
      category: "Revenue Impact Potential",
      value: animatedStats.revenueLoss,
      unit: "%",
      description: "Potential revenue increase through optimized conversion and upselling",
      color: "text-success",
      bgColor: "bg-success/10",
      icon: <DollarSign className="w-6 h-6" />,
      details: "Based on industry benchmarks: 25% boost in ADR through upselling, 15-20% RevPAR increase, improved guest satisfaction scores"
    },
    {
      category: "Implementation Timeline",
      value: animatedStats.timeToImpact,
      unit: " weeks",
      description: "To implement quick wins and show measurable impact",
      color: "text-primary",
      bgColor: "bg-primary/10",
      icon: <Clock className="w-6 h-6" />,
      details: "Phase 1 quick wins: Fix broken functionality, optimize core flows, implement basic AI. Measurable ROI within 3 months"
    }
  ];

  const myRecommendations = [
    {
      priority: "Immediate (0-4 weeks)",
      title: "Fix Critical Issues",
      subtitle: "Address broken functionality and UX problems",
      description: "My analysis identified 18 critical issues including broken search, poor weather widget UX, redundant navigation, and non-functional AI chatbot. These must be fixed first to establish credibility.",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "error",
      actions: ["Fix search functionality", "Improve weather widget UX", "Remove redundant pages", "Repair AI chatbot", "Optimize loading times"]
    },
    {
      priority: "Phase 1 (1-3 months)",
      title: "Stickiness Strategy",
      subtitle: "Make app integral to guest journey",
      description: "My core recommendation: Journey-Stage Intelligence that adapts experiences based on pre-arrival, in-stay, and post-checkout phases. Create context-aware interactions that anticipate guest needs.",
      icon: <Zap className="w-8 h-8" />,
      color: "primary",
      actions: ["Journey-stage detection", "Contextual content", "Personalized recommendations", "Proactive service delivery", "Habit-forming features"]
    },
    {
      priority: "Phase 2 (3-6 months)",
      title: "Conversion Optimization",
      subtitle: "Optimize critical touchpoints for revenue impact",
      description: "My strategy focuses on onboarding streamlining, check-in/checkout optimization, and intelligent upselling. Target 28% → 60% onboarding conversion and 13% → 25% purchase conversion.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "secondary",
      actions: ["Streamlined onboarding", "Express check-in prominence", "Dynamic upselling", "Contextual offers", "Frictionless payments"]
    },
    {
      priority: "Phase 3 (6-12 months)",
      title: "Innovation & Growth",
      subtitle: "Competitive differentiation and market expansion",
      description: "My innovation approach: AI-powered guest intelligence, predictive service delivery, voice interfaces, and IoT integration. Focus on features that create viral moments and drive adoption.",
      icon: <Brain className="w-8 h-8" />,
      color: "accent",
      actions: ["AI guest intelligence", "Predictive services", "Voice interface", "IoT integration", "Viral features"]
    }
  ];

  const businessImpact = {
    current: {
      title: "Current State Issues",
      metrics: [
        { label: "Guest App Usage", value: "38%", trend: "Low" },
        { label: "Digital Check-in Rate", value: "4%", trend: "Very Low" },
        { label: "Purchase Conversion", value: "13%", trend: "Below Industry" },
        { label: "App Retention (Day 7)", value: "7.6%", trend: "Industry Average" }
      ]
    },
    target: {
      title: "Target State (12 months)",
      metrics: [
        { label: "Guest App Usage", value: "65%", trend: "+71%" },
        { label: "Digital Check-in Rate", value: "45%", trend: "+1025%" },
        { label: "Purchase Conversion", value: "25%", trend: "+92%" },
        { label: "App Retention (Day 7)", value: "15%", trend: "+97%" }
      ]
    }
  };

  return (
    <div className="space-y-12">
      {/* Executive Summary Header */}
      <div className="hero bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl border border-primary/10">
        <div className="hero-content text-center py-16 px-8">
          <div className="max-w-6xl">
            <div className="badge badge-primary badge-lg mb-4">Product Challenge Response</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-base-content">My Strategic Analysis:</span><br />
              <span className="text-primary">Transforming Straiv's</span><br />
              <span className="text-secondary">Guest App Experience</span>
            </h1>

            <p className="text-xl md:text-2xl text-base-content/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Based on comprehensive analysis of the current Guest App, I've identified 
              <span className="font-bold text-error"> 18 critical issues </span>
              and developed a strategic roadmap to capture the 
              <span className="font-bold text-primary"> 35% market opportunity gap </span>
              through Journey-Stage Intelligence and systematic UX optimization.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="stats shadow border border-primary/20">
                <div className="stat place-items-center">
                  <div className="stat-title text-primary">My Analysis Found</div>
                  <div className="stat-value text-error">18</div>
                  <div className="stat-desc">Critical Issues</div>
                </div>
              </div>
              <div className="stats shadow border border-secondary/20">
                <div className="stat place-items-center">
                  <div className="stat-title text-secondary">Market Opportunity</div>
                  <div className="stat-value text-success">€15B+</div>
                  <div className="stat-desc">Hospitality Tech Market</div>
                </div>
              </div>
              <div className="stats shadow border border-accent/20">
                <div className="stat place-items-center">
                  <div className="stat-title text-accent">Implementation</div>
                  <div className="stat-value text-primary">12</div>
                  <div className="stat-desc">Weeks to Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Findings */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">My Key Findings & Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {keyFindings.map((finding, index) => (
            <div key={index} className={`card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow cursor-pointer group`}>
              <div className="card-body p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${finding.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={finding.color}>
                    {finding.icon}
                  </div>
                </div>
                <h3 className="card-title text-lg justify-center mb-2">{finding.category}</h3>
                <div className="text-4xl font-bold mb-2">
                  <span className={finding.color}>{finding.value}</span>
                  <span className="text-base-content/60 text-xl">{finding.unit}</span>
                </div>
                <p className="text-sm text-base-content/70">{finding.description}</p>
                
                {/* Tooltip details */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-4 p-3 bg-base-200 rounded-lg text-xs">
                  {finding.details}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Strategic Recommendations */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">My Strategic Recommendations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {myRecommendations.map((rec, index) => (
            <div key={index} className={`card bg-base-100 border border-${rec.color}/20 hover:shadow-xl transition-all hover:border-${rec.color}/40`}>
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-${rec.color}/10 flex items-center justify-center`}>
                    <div className={`text-${rec.color}`}>
                      {rec.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className={`badge badge-${rec.color} badge-sm mb-2`}>{rec.priority}</div>
                    <h3 className="card-title text-xl mb-2">{rec.title}</h3>
                    <p className="text-base-content/80 text-sm mb-3">{rec.subtitle}</p>
                    <p className="text-base-content/70 text-sm mb-4">{rec.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Actions:</h4>
                      <div className="flex flex-wrap gap-1">
                        {rec.actions.map((action, aIndex) => (
                          <span key={aIndex} className={`badge badge-${rec.color} badge-outline badge-sm`}>
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Impact Comparison */}
      <div className="card bg-gradient-to-r from-base-100 to-base-200 border border-base-300">
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Projected Business Impact</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current State */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-error mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                {businessImpact.current.title}
              </h3>
              <div className="space-y-3">
                {businessImpact.current.metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-error/5 rounded-lg border border-error/20">
                    <span className="font-medium">{metric.label}</span>
                    <div className="text-right">
                      <div className="font-bold text-lg">{metric.value}</div>
                      <div className="text-xs text-error">{metric.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target State */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-success mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                {businessImpact.target.title}
              </h3>
              <div className="space-y-3">
                {businessImpact.target.metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-success/5 rounded-lg border border-success/20">
                    <span className="font-medium">{metric.label}</span>
                    <div className="text-right">
                      <div className="font-bold text-lg">{metric.value}</div>
                      <div className="text-xs text-success">{metric.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <h4 className="font-bold text-lg mb-2">Estimated ROI</h4>
            <p className="text-base-content/80">Based on industry benchmarks, these improvements could generate 
              <span className="font-bold text-primary"> €2.3M+ additional annual revenue </span>
              for a 200-room hotel through increased ADR, improved retention, and operational efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation to Detailed Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button 
          className="card bg-gradient-to-r from-error to-warning text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => navigate ? navigate('/current-analysis') : onSectionChange('current-analysis')}
        >
          <div className="card-body text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">Current App Analysis</h3>
            <p className="text-sm opacity-80">Deep dive into the 18 critical issues I identified</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
          className="card bg-gradient-to-r from-primary to-secondary text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => navigate ? navigate('/stickiness-strategy') : onSectionChange('stickiness-strategy')}
        >
          <div className="card-body text-center">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">My Stickiness Strategy</h3>
            <p className="text-sm opacity-80">Journey-Stage Intelligence and engagement framework</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
          className="card bg-gradient-to-r from-accent to-secondary text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => navigate ? navigate('/prototype-demo') : onSectionChange('prototype-demo')}
        >
          <div className="card-body text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">Interactive Prototypes</h3>
            <p className="text-sm opacity-80">See my recommendations in action</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
          className="card bg-gradient-to-r from-info to-success text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => navigate ? navigate('/sources') : onSectionChange('sources')}
        >
          <div className="card-body text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">Research Sources</h3>
            <p className="text-sm opacity-80">Industry data and studies supporting my analysis</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Overview; 