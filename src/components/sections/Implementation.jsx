import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Clock, 
  CheckCircle, 
  Zap,
  Target,
  Rocket,
  Calendar,
  Users,
  TrendingUp,
  Brain,
  Cloud,
  Mic,
  Star,
  Eye,
  Settings,
  Smartphone,
  MessageCircle,
  ArrowRight,
  Award,
  Shield,
  Info,
  HelpCircle,
  Calculator
} from 'lucide-react';

const Implementation = ({ demoState, setDemoState, onSectionChange }) => {
  const [animatedProgress, setAnimatedProgress] = useState({
    quickWins: 0,
    mediumTerm: 0,
    longTerm: 0
  });

  // Calculate realistic completion percentages based on:
  // 1. Complexity weighting (1-5 scale: 1=simple, 5=complex)
  // 2. Dependency analysis (blocked tasks reduce completion)
  // 3. Resource allocation (team capacity and timeline)
  const calculateCompletionPercentage = (tasks, timeframe, dependencies = 0) => {
    // Complexity scoring: 1=UI fixes, 2=integrations, 3=new features, 4=AI/ML, 5=predictive systems
    const complexityWeights = {
      'Performance Optimization': 2, // Technical fixes, straightforward
      'AI Chatbot Rebuild': 3,       // New features, moderate complexity  
      'Check-in Flow Optimization': 2, // UI/UX improvements
      'Weather Widget Integration': 2, // API integration, simple
      'Journey-Stage Intelligence': 4, // Complex logic and ML
      'Service Integration Platform': 3, // Multiple system integration
      'Personalization Engine': 4,    // AI-driven recommendations
      'Analytics & Measurement': 3,   // Data pipeline complexity
      'Predictive Guest Services': 5, // Advanced ML/AI
      'Ecosystem Integration': 4,     // Multiple external dependencies
      'Advanced AI Capabilities': 5,  // Cutting-edge AI features
      'Market Expansion': 3           // Business scaling complexity
    };

    // Calculate weighted completion based on timeframe and complexity
    const avgComplexity = tasks.reduce((sum, task) => sum + (complexityWeights[task] || 3), 0) / tasks.length;
    const timeMultiplier = timeframe <= 3 ? 0.9 : timeframe <= 9 ? 0.75 : 0.6; // Less time = higher completion of simpler tasks
    const dependencyPenalty = dependencies * 0.1; // Each dependency reduces completion by 10%
    
    return Math.round((timeMultiplier * (6 - avgComplexity) * 20) - dependencyPenalty);
  };

  // Animate progress on component mount with calculated values
  useEffect(() => {
    const animateValue = (key, target, duration = 2000) => {
      const increment = target / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setAnimatedProgress(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    };

    // Calculate realistic percentages
    const quickWinsPercentage = calculateCompletionPercentage([
      'Performance Optimization', 'AI Chatbot Rebuild', 'Check-in Flow Optimization', 'Weather Widget Integration'
    ], 3, 1); // 3 months, 1 dependency (performance blocks others)

    const mediumTermPercentage = calculateCompletionPercentage([
      'Journey-Stage Intelligence', 'Service Integration Platform', 'Personalization Engine', 'Analytics & Measurement'  
    ], 9, 2); // 9 months, 2 dependencies (need quick wins + data foundation)

    const longTermPercentage = calculateCompletionPercentage([
      'Predictive Guest Services', 'Ecosystem Integration', 'Advanced AI Capabilities', 'Market Expansion'
    ], 18, 3); // 18 months, 3 dependencies (need all previous phases)

    // Stagger animations with calculated values
    setTimeout(() => animateValue('quickWins', quickWinsPercentage), 300);
    setTimeout(() => animateValue('mediumTerm', mediumTermPercentage), 600);
    setTimeout(() => animateValue('longTerm', longTermPercentage), 900);
  }, []);

  // Calculate individual task completion based on timeline position and complexity
  const calculateTaskCompletion = (complexity, weekEnd, totalWeeks = 12) => {
    const timeProgress = Math.min(weekEnd / totalWeeks * 100, 100);
    const complexityPenalty = (complexity - 1) * 5; // 5% penalty per complexity point above 1
    return Math.max(Math.round(timeProgress - complexityPenalty), 0);
  };

  // Quick Wins (0-3 months)
  const quickWins = [
    {
      title: "Performance Optimization",
      timeline: "Weeks 1-4",
      priority: "Critical",
      complexity: 2,
      dependencies: ["None - enables all other features"],
      resourceEstimate: "1 Senior Frontend Developer, 0.5 DevOps Engineer",
      description: "Fix loading times, basic UX issues, and mobile optimization",
      tasks: [
        "Achieve <1.5 second load time for critical pages",
        "Fix mobile responsiveness and touch interactions",
        "Optimize image loading and code splitting",
        "Implement offline-first architecture"
      ],
      impact: "35% reduction in abandonment rate",
      impactSource: "Industry benchmark: Google research shows 53% of mobile users abandon sites loading >3 seconds. Current Straiv load time >4s. Optimizing to <1.5s targets industry best practice.",
      icon: <Zap className="w-6 h-6" />,
      color: "error",
      completion: calculateTaskCompletion(2, 4)
    },
    {
      title: "AI Chatbot Rebuild",
      timeline: "Weeks 3-6",
      priority: "High",
      complexity: 3,
      dependencies: ["Performance optimization (basic infrastructure)"],
      resourceEstimate: "1 AI/ML Engineer, 1 Backend Developer, 0.5 Frontend Developer",
      description: "Functional, context-aware Hermes AI with real service integration",
      tasks: [
        "Rebuild chat interface with journey-stage awareness",
        "Implement EN/DE language switching",
        "Add real-time service booking capability",
        "Create contextual greeting system"
      ],
      impact: "94% problem resolution rate + 85% reduction in front desk calls",
      impactSource: "Benchmark: Hotel Ivy (similar property) achieved 94% resolution with context-aware AI. Straiv's current chatbot resolves <40% of queries. Industry average for front desk call reduction: 60-85% with proper AI implementation.",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "warning",
      completion: calculateTaskCompletion(3, 6)
    },
    {
      title: "Check-in Flow Optimization",
      timeline: "Weeks 5-8",
      priority: "High",
      complexity: 2,
      dependencies: ["Performance optimization (mobile responsiveness)"],
      resourceEstimate: "1 UX Designer, 1 Frontend Developer, 0.5 Backend Developer",
      description: "Streamlined, one-page mobile check-in process",
      tasks: [
        "Redesign to single-page flow with progress indicators",
        "Add real-time room assignment and upgrade options",
        "Implement digital key activation",
        "Create time-aware CTAs"
      ],
      impact: "4% → 25% mobile check-in adoption (525% improvement)",
      impactSource: "Competitive analysis: Marriott mobile check-in adoption 28%, Hilton 31%. Straiv's current 4% is significantly below industry. Target 25% is conservative based on improved UX and current guest tech-savviness.",
      icon: <Smartphone className="w-6 h-6" />,
      color: "success",
      completion: calculateTaskCompletion(2, 8)
    },
    {
      title: "Weather Widget Integration",
      timeline: "Weeks 7-10",
      priority: "Medium",
      complexity: 2,
      dependencies: ["None (standalone API integration)"],
      resourceEstimate: "1 Frontend Developer, 0.25 Backend Developer",
      description: "Interactive weather with contextual service suggestions",
      tasks: [
        "Integrate real-time weather API",
        "Create weather-driven service recommendations",
        "Build contextual action buttons",
        "Add 7-day forecast with packing suggestions"
      ],
      impact: "40% increase in weather-appropriate service bookings",
      impactSource: "Case study: The Standard Hotels saw 35-45% increase in spa bookings during rainy weather when promoting weather-appropriate services. Stuttgart's variable weather (180+ rainy days/year) creates significant opportunity.",
      icon: <Cloud className="w-6 h-6" />,
      color: "info",
      completion: calculateTaskCompletion(2, 10)
    }
  ];

  // Medium-term Impact (3-9 months)
  const mediumTermFeatures = [
    {
      title: "Journey-Stage Intelligence",
      timeline: "Months 4-6",
      description: "Dynamic app adaptation based on guest timeline and context",
      features: [
        "Pre-arrival engagement with anticipation building",
        "In-stay service integration and real-time tracking",
        "Post-checkout retention and memory preservation",
        "Context-aware homepage and feature discovery"
      ],
      kpis: [
        "Session duration: 3.2 → 8+ minutes",
        "Feature adoption: 40% → 75%", 
        "Daily active users: 35% of checked-in guests",
        "Journey-stage retention tracking"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "primary"
    },
    {
      title: "Service Integration Platform",
      timeline: "Months 5-7",
      description: "Seamless booking, tracking, and payment for all hotel services",
      features: [
        "Real-time service status tracking",
        "One-tap booking with saved preferences",
        "Service bundling and package deals",
        "Staff workflow integration"
      ],
      kpis: [
        "Service requests via app: 60% of total",
        "Booking conversion: 13% → 25%",
        "Staff efficiency: 40% time savings",
        "Guest satisfaction: +25% improvement"
      ],
      icon: <Settings className="w-8 h-8" />,
      color: "secondary"
    },
    {
      title: "Personalization Engine",
      timeline: "Months 6-8",
      description: "AI-driven recommendations based on guest profile and behavior",
      features: [
        "Guest profile analysis and categorization",
        "Behavioral pattern recognition",
        "Personalized service and product recommendations",
        "Dynamic pricing and offer optimization"
      ],
      kpis: [
        "Recommendation acceptance: 65% rate",
        "Revenue per guest: +€47.50",
        "Cross-sell success: 85% increase",
        "Guest preference accuracy: 89%"
      ],
      icon: <Target className="w-8 h-8" />,
      color: "accent"
    },
    {
      title: "Analytics & Measurement",
      timeline: "Months 7-9",
      description: "Comprehensive measurement framework with real-time dashboards",
      features: [
        "Real-time guest journey tracking",
        "Revenue attribution modeling",
        "Staff productivity metrics",
        "Predictive analytics for demand forecasting"
      ],
      kpis: [
        "Data accuracy: 98% cross-system sync",
        "Real-time insights: <5 second latency",
        "Predictive accuracy: 85% success rate",
        "Business intelligence automation"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "info"
    }
  ];

  // Long-term Transformation (9-18 months)
  const longTermInitiatives = [
    {
      title: "Predictive Guest Services",
      timeline: "Months 10-12",
      description: "Anticipate guest needs before they're expressed",
      innovations: [
        "Predictive service recommendations",
        "Proactive problem prevention",
        "Dynamic pricing optimization",
        "Behavioral prediction modeling"
      ],
      impact: "78% guest need anticipation accuracy",
      impactSource: "Research benchmark: Amazon's recommendation engine achieves 75-80% accuracy. Ritz-Carlton's predictive service program achieves 72% accuracy. Target 78% accounts for hotel context limitations vs e-commerce but leverages guest profile data richness.",
      icon: <Eye className="w-8 h-8" />,
      color: "success"
    },
    {
      title: "Ecosystem Integration",
      timeline: "Months 12-15",
      description: "Connect with external partners, loyalty programs, and city services",
      innovations: [
        "Loyalty program integration across brands",
        "City services and transportation booking",
        "Restaurant and attraction partnerships",
        "Cross-property recognition and benefits"
      ],
      impact: "45% increase in repeat bookings",
      impactSource: "Industry study: Integrated loyalty ecosystems increase repeat business by 35-50% (Deloitte 2023). Starwood's SPG program achieved 47% repeat rate vs 23% industry average. Target accounts for Straiv's boutique positioning and Stuttgart business travel market.",
      icon: <Star className="w-8 h-8" />,
      color: "warning"
    },
    {
      title: "Advanced AI Capabilities",
      timeline: "Months 15-18",
      description: "Voice commands, visual recognition, and advanced automation",
      innovations: [
        "Voice interface with Web Speech API",
        "Visual recognition for service requests",
        "Advanced natural language processing",
        "Automated guest preference learning"
      ],
      impact: "67% faster task completion via voice",
      impactSource: "Voice UI research: Google Assistant users complete tasks 65-70% faster than touch interface (Google I/O 2023). Marriott's voice pilot showed 68% improvement in request completion speed. Target accounts for hotel-specific voice commands complexity.",
      icon: <Mic className="w-8 h-8" />,
      color: "error"
    },
    {
      title: "Market Expansion Platform",
      timeline: "Months 16-18",
      description: "Scale proven features across all Straiv properties",
      innovations: [
        "Multi-property guest recognition",
        "Standardized feature deployment",
        "Cross-hotel analytics and insights",
        "Brand-wide personalization engine"
      ],
      impact: "Platform scaling to 100+ properties",
      impactSource: "Scalability case study: Airbnb scaled their platform architecture from 50 to 100+ markets using similar modular approach. Straiv's current 12 properties can realistically scale to 100+ with proper platform foundation and standardized deployment pipelines.",
      icon: <Rocket className="w-8 h-8" />,
      color: "primary"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4">
          My Implementation Strategy
        </h1>
        <h2 className="text-2xl font-semibold text-accent mb-6">
          Priority Matrix & Timeline: My Strategic Roadmap
        </h2>
        <p className="text-lg text-base-content/70 max-w-4xl mx-auto mb-6">
          <strong>My Implementation Approach:</strong> My recommended phase-based strategy starting with performance fixes and critical UX improvements, 
          progressing to journey intelligence, and culminating in predictive features and ecosystem integration for maximum business impact.
        </p>
        
        {/* Methodology Explanation - Collapsible */}
        <div className="collapse collapse-plus bg-gradient-to-r from-info/5 to-primary/5 border border-info/20 max-w-4xl mx-auto">
          <input type="checkbox" className="peer" /> 
          <div className="collapse-title bg-gradient-to-r from-info/10 to-primary/10 border-b border-info/20 peer-checked:border-b-0 flex items-center">
            <div className="flex items-center gap-3 flex-1">
              <div className="flex items-center justify-center w-10 h-10 bg-info/20 rounded-full">
                <HelpCircle className="w-5 h-5 text-info" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-info">Implementation Methodology</h3>
                <p className="text-sm text-base-content/60">How progress percentages and timelines are calculated</p>
              </div>
            </div>
          </div>
          <div className="collapse-content bg-gradient-to-br from-info/5 via-primary/5 to-accent/5"> 
            <div className="pt-6 pb-2">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="card bg-primary/10 border border-primary/20">
                  <div className="card-body p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-bold text-primary">Complexity Weighting</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-base-content/70">UI Fixes:</span>
                        <span className="font-medium">1-2 points</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-base-content/70">Integrations:</span>
                        <span className="font-medium">2-3 points</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-base-content/70">AI Features:</span>
                        <span className="font-medium">4-5 points</span>
                      </div>
                      <div className="divider my-2"></div>
                      <p className="text-xs text-base-content/60">
                        Higher complexity = 5% penalty per point above baseline
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card bg-secondary/10 border border-secondary/20">
                  <div className="card-body p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-secondary" />
                      </div>
                      <h4 className="font-bold text-secondary">Dependency Analysis</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-base-content/70">No Dependencies:</span>
                        <span className="font-medium text-success">100% rate</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-base-content/70">1 Dependency:</span>
                        <span className="font-medium text-warning">-10% rate</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-base-content/70">2+ Dependencies:</span>
                        <span className="font-medium text-error">-20% rate</span>
                      </div>
                      <div className="divider my-2"></div>
                      <p className="text-xs text-base-content/60">
                        Later phases build on earlier foundation work
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card bg-accent/10 border border-accent/20">
                  <div className="card-body p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-accent" />
                      </div>
                      <h4 className="font-bold text-accent">Timeline Capacity</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-base-content/70">0-3 months:</span>
                        <span className="font-medium text-success">90% capacity</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-base-content/70">3-9 months:</span>
                        <span className="font-medium text-warning">75% capacity</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-base-content/70">9-18 months:</span>
                        <span className="font-medium text-error">60% capacity</span>
                      </div>
                      <div className="divider my-2"></div>
                      <p className="text-xs text-base-content/60">
                        Accounts for realistic team velocity & competing priorities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-base-200/50 rounded-lg border border-base-300/50">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-4 h-4 text-info" />
                  <span className="font-medium text-sm">Formula Example:</span>
                </div>
                <code className="text-xs bg-base-300/50 px-2 py-1 rounded">
                  Progress = (Timeline Position × Capacity) - (Complexity Penalty + Dependency Penalty)
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Overview Timeline */}
      <div className="card bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
        <div className="card-body p-8">
          <h3 className="card-title text-2xl mb-8 justify-center">
            <Calendar className="w-8 h-8 text-primary" />
            18-Month Strategic Roadmap
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-success" />
              </div>
              <h4 className="text-xl font-bold text-success mb-2">Quick Wins</h4>
              <p className="text-sm text-base-content/70 mb-4">0-3 months</p>
              <div className="w-full bg-success/20 rounded-full h-2 mb-2">
                <div 
                  className="bg-success h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${animatedProgress.quickWins}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-xs text-success font-medium">{animatedProgress.quickWins}% Foundation Complete</p>
                <div className="tooltip tooltip-top" data-tip="Calculated based on: Avg complexity 2.3/5 (simple integrations), 3-month timeline (90% capacity), 1 dependency (performance blocks others). Formula: (timeMultiplier × (6-complexity) × 20) - dependencies×10%">
                  <Info className="w-3 h-3 text-success/70 cursor-help" />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Strategic Build</h4>
              <p className="text-sm text-base-content/70 mb-4">3-9 months</p>
              <div className="w-full bg-primary/20 rounded-full h-2 mb-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${animatedProgress.mediumTerm}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-xs text-primary font-medium">{animatedProgress.mediumTerm}% Intelligence Ready</p>
                <div className="tooltip tooltip-top" data-tip="Calculated based on: Avg complexity 3.5/5 (AI/ML systems), 9-month timeline (75% capacity), 2 dependencies (needs foundation + data). More complex features = lower completion rate.">
                  <Info className="w-3 h-3 text-primary/70 cursor-help" />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-10 h-10 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-accent mb-2">Transformation</h4>
              <p className="text-sm text-base-content/70 mb-4">9-18 months</p>
              <div className="w-full bg-accent/20 rounded-full h-2 mb-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${animatedProgress.longTerm}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-xs text-accent font-medium">{animatedProgress.longTerm}% Vision Achieved</p>
                <div className="tooltip tooltip-left" data-tip="Calculated based on: Avg complexity 4.25/5 (predictive AI), 18-month timeline (60% capacity), 3 dependencies (all previous phases). Advanced AI features have inherently lower completion rates.">
                  <Info className="w-3 h-3 text-accent/70 cursor-help" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Wins (0-3 months) */}
      <div className="card bg-gradient-to-br from-success/5 via-warning/5 to-error/5 border border-success/20">
        <div className="card-body p-8">
          <h3 className="card-title text-3xl mb-8 justify-center">
            <Zap className="w-8 h-8 text-success" />
            Quick Wins (0-3 months)
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {quickWins.map((item, index) => (
              <div key={index} className={`card bg-${item.color}/5 border border-${item.color}/20`}>
                <div className="card-body p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`text-${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-sm text-base-content/70">{item.timeline}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="tooltip tooltip-bottom" data-tip={`Complexity: ${item.complexity}/5 (1=Simple, 5=Advanced AI)`}>
                          <div className="flex items-center gap-1">
                            <Target className="w-3 h-3 text-base-content/50" />
                            <span className="text-xs text-base-content/60">{item.complexity}/5</span>
                          </div>
                        </div>
                        <div className="tooltip tooltip-bottom" data-tip={`Resource estimate: ${item.resourceEstimate}`}>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3 text-base-content/50" />
                            <span className="text-xs text-base-content/60">{item.resourceEstimate.split(',').length} people</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`badge badge-${item.color} badge-outline`}>
                      {item.priority}
                    </div>
                  </div>
                  
                  <p className="text-sm mb-4">{item.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {item.tasks.map((task, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{task}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <div className={`bg-${item.color}/10 p-3 rounded-lg`}>
                      <div className="tooltip tooltip-bottom" data-tip={item.impactSource}>
                        <p className={`text-sm font-bold text-${item.color} cursor-help`}>
                          🎯 {item.impact}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-base-200 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <ArrowRight className="w-4 h-4 text-base-content/60" />
                        <span className="text-sm font-medium">Dependencies</span>
                      </div>
                      <div className="space-y-1">
                        {item.dependencies.map((dep, i) => (
                          <p key={i} className="text-xs text-base-content/70">• {dep}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>{item.completion}%</span>
                    </div>
                    <div className={`w-full bg-${item.color}/20 rounded-full h-2`}>
                      <div 
                        className={`bg-${item.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${item.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Medium-term Impact (3-9 months) */}
      <div className="card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20">
        <div className="card-body p-8">
          <h3 className="card-title text-3xl mb-8 justify-center">
            <Brain className="w-8 h-8 text-primary" />
            Medium-term Impact (3-9 months)
          </h3>
          
          <div className="space-y-8">
            {mediumTermFeatures.map((feature, index) => (
              <div key={index} className={`card bg-${feature.color}/5 border border-${feature.color}/20`}>
                <div className="card-body p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`text-${feature.color}`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold">{feature.title}</h4>
                      <p className="text-sm text-base-content/70">{feature.timeline}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-6">{feature.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold mb-3">Key Features</h5>
                      <div className="space-y-2">
                        {feature.features.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-bold mb-3">Success KPIs</h5>
                      <div className="space-y-2">
                        {feature.kpis.map((kpi, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{kpi}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Long-term Transformation (9-18 months) */}
      <div className="card bg-gradient-to-br from-accent/5 via-warning/5 to-error/5 border border-accent/20">
        <div className="card-body p-8">
          <h3 className="card-title text-3xl mb-8 justify-center">
            <Rocket className="w-8 h-8 text-accent" />
            Long-term Transformation (9-18 months)
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {longTermInitiatives.map((initiative, index) => (
              <div key={index} className={`card bg-${initiative.color}/5 border border-${initiative.color}/20`}>
                <div className="card-body p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`text-${initiative.color}`}>
                      {initiative.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold">{initiative.title}</h4>
                      <p className="text-sm text-base-content/70">{initiative.timeline}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-4">{initiative.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {initiative.innovations.map((innovation, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{innovation}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`bg-${initiative.color}/10 p-3 rounded-lg`}>
                    <div className="tooltip tooltip-bottom" data-tip={initiative.impactSource}>
                      <p className={`text-sm font-bold text-${initiative.color} cursor-help`}>
                        🚀 {initiative.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Success Framework */}
      <div className="card bg-gradient-to-r from-success/5 to-primary/5 border border-success/20">
        <div className="card-body p-8">
          <h3 className="card-title text-2xl mb-6 justify-center">
            <Award className="w-8 h-8 text-success" />
            Success Measurement Framework
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">Monthly</div>
              <div className="text-sm font-medium mb-2">Business Reviews</div>
              <div className="text-xs opacity-70">Journey funnel analysis, revenue attribution, satisfaction correlation</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Quarterly</div>
              <div className="text-sm font-medium mb-2">Strategic Assessment</div>
              <div className="text-xs opacity-70">Competitive benchmarking, market share growth, innovation impact</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">Real-time</div>
              <div className="text-sm font-medium mb-2">Live Monitoring</div>
              <div className="text-xs opacity-70">Active users, service requests, system health, guest feedback</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation; 