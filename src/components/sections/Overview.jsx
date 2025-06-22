import React from 'react';
import {
  TrendingUp,
  Smartphone,
  Brain,
  Target,
  ArrowRight,
  Zap,
  AlertTriangle,
  BookOpen,
  Info,
  DollarSign,
  Users,
  CheckCircle,
  BarChart3,
  Clock,
  Globe,
  FileText,
  Calendar,
  Eye,
  Layers
} from 'lucide-react';

const Overview = ({ onSectionChange, navigate }) => {
  
  // Helper function to handle navigation with scroll-to-top
  const handleNavigation = (path) => {
    if (navigate) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Simple tooltip component for research data
  const Tooltip = ({ children, content }) => (
    <div className="tooltip tooltip-info" data-tip={content}>
      {children}
    </div>
  );

  // Rich tooltip component for concise content
  const RichTooltip = ({ children, description }) => {
    return (
      <div className="tooltip tooltip-info tooltip-top" data-tip={description}>
        {children}
      </div>
    );
  };

  // Stats data for hero section with concise tooltips
  const heroStats = [
    {
      value: "2.9x",
      label: "Improvement Potential",
      description: "Mobile vs Desktop Conversion Gap",
      color: "text-primary",
      tooltip: "Mobile hotel apps convert at 2.6% vs 7.6% for desktop, showing significant optimization opportunity.",
      source: "Statista - Travel websites conversion rate by device 2024",
      sourceUrl: "https://www.statista.com/statistics/1350599/conversion-rate-travel-tourism-websites-by-device-worldwide/"
    },
    {
      value: "37.8%",
      label: "Revenue Increase",
      description: "Documented Case Studies",
      color: "text-success",
      tooltip: "Proven revenue increases from mobile optimization range from 15-37.8% based on hotel industry case studies.",
      source: "Hotel App Conversion Benchmarks - Proven Optimization Results",
      sourceUrl: "#case-studies"
    },
    {
      value: "€187.9B",
      label: "European Market",
      description: "Total Addressable Market",
      color: "text-secondary",
      tooltip: "European hotel market size with 26.18% CAGR growth through 2029 in digital guest solutions.",
      source: "Statista - Global market size of hospitality industry 2023",
      sourceUrl: "https://www.statista.com/statistics/1247012/global-market-size-of-the-hospitality-industry/"
    }
  ];

  // Strategic phases data
  const strategicPhases = [
    {
      phase: "Phase 1",
      title: "Foundation Enhancement",
      timeline: "Weeks 1-6",
      impact: "Prevent 10% visitor loss from loading delays",
      targets: ["Sub-2 second loading times", "Reduced cognitive overload", "Critical UX fixes"],
      color: "border-error"
    },
    {
      phase: "Phase 2", 
      title: "Conversion Optimization",
      timeline: "Months 2-3",
      impact: "Close mobile-desktop conversion gap",
      targets: ["25-30% onboarding completion", "15-25% digital check-in adoption", "Improved mobile conversion"],
      color: "border-warning"
    },
    {
      phase: "Phase 3",
      title: "Revenue Enhancement", 
      timeline: "Months 3-4",
      impact: "Increase ancillary revenue per guest",
      targets: ["20%+ upselling conversion", "10-20% of total guest charges", "Intelligent revenue optimization"],
      color: "border-info"
    },
    {
      phase: "Phase 4",
      title: "Advanced Intelligence",
      timeline: "Months 4-6", 
      impact: "Market differentiation and operational efficiency",
      targets: ["AI-powered features", "Voice interface capabilities", "Predictive service delivery"],
      color: "border-success"
    }
  ];

  return (
    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
      {/* Hero Section - Unlocking Revenue Potential */}
      <div className="hero bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl sm:rounded-3xl border border-primary/10">
        <div className="hero-content text-center py-8 px-4 sm:py-12 md:py-16 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-primary">Unlocking Straiv's</span><br />
              <span className="text-secondary">Guest App Revenue<br className="sm:hidden" /> Potential</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-base-content/80 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
              Strategic improvements to transform current performance into industry-leading results
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mb-6 sm:mb-8 max-w-6xl mx-auto">
              {heroStats.map((stat, index) => (
                <RichTooltip 
                  key={index} 
                  description={stat.tooltip}
                >
                  <div className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-help">
                    <div className="card-body text-center p-4 sm:p-6 lg:p-8">
                      <div className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold ${stat.color} mb-2 sm:mb-3`}>
                        {stat.value}
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg font-semibold text-base-content mb-1 sm:mb-2">
                        {stat.label}
                      </div>
                      <div className="text-xs sm:text-sm lg:text-base text-base-content/70 mb-3 sm:mb-4 leading-tight">
                        {stat.description}
                      </div>
                      <div className="flex justify-center">
                        <Info className="w-4 h-4 sm:w-5 sm:h-5 text-base-content/40" />
                      </div>
                    </div>
                  </div>
                </RichTooltip>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The Opportunity Section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Massive Mobile Optimization Gap in Hospitality
          </h2>
          <Tooltip content="Industry research shows mobile solutions are critical revenue drivers but significantly underperforming compared to desktop experiences">
            <div className="inline-flex items-center gap-2 text-lg text-base-content/80 cursor-help">
              <Info className="w-5 h-5" />
              Research-Backed Market Opportunity
            </div>
          </Tooltip>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Market Context */}
          <div className="card bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
            <div className="card-body p-8">
              <h3 className="card-title text-2xl mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                Revenue Optimization Potential
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                  <span className="text-base-content/80">Mobile App Revenue Share</span>
                  <span className="font-bold text-primary">36-50%</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                  <span className="text-base-content/80">Mobile vs Desktop Conversion</span>
                  <span className="font-bold text-error">2.6% vs 7.6%</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                  <span className="text-base-content/80">Revenue Growth Potential</span>
                  <span className="font-bold text-success">1.8x Higher</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-base-100 rounded-lg">
                  <span className="text-base-content/80">Documented Revenue Increases</span>
                  <span className="font-bold text-info">15-37.8%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Current Straiv Position */}
          <div className="card bg-gradient-to-br from-success/5 to-info/5 border border-success/20">
            <div className="card-body p-8">
              <h3 className="card-title text-2xl mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-success" />
                Strong Foundation, Clear Path
              </h3>
              
              <Tooltip content="Straiv has excellent infrastructure and customer satisfaction but significant opportunity to improve conversion metrics">
                <div className="space-y-4 cursor-help">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-info" />
                    <span className="text-sm">3,000+ hotels across 29 countries</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-info" />
                    <span className="text-sm">1,000,000+ digital check-ins annually</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-success" />
                    <span className="text-sm">98.89% customer satisfaction rating</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm">Progressive Web App advantage</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-secondary" />
                    <span className="text-sm">50+ technology partners integrated</span>
                  </div>
                </div>
              </Tooltip>

              <div className="divider"></div>

              <div className="space-y-3">
                <h4 className="font-semibold text-warning">Performance Gaps Identified:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Onboarding completion:</span>
                    <span className="text-error">19.2% (target: 25-30%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Digital check-in adoption:</span>
                    <span className="text-error">4% (demand: 54%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Day 30 retention:</span>
                    <span className="text-error">2.8-4.5% (target: 8-12%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Implementation */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Four-Phase Revenue Optimization Approach
          </h2>
          <Tooltip content="Phased approach targets verified industry benchmarks with ROI potential">
            <p className="text-lg text-base-content/80 max-w-3xl mx-auto cursor-help">
              Systematic implementation strategy designed to achieve measurable revenue impact 
              through proven optimization techniques
            </p>
          </Tooltip>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {strategicPhases.map((phase, index) => (
            <div key={index} className={`card bg-base-100 border-2 ${phase.color} hover:shadow-xl transition-all`}>
              <div className="card-body p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="badge badge-outline mb-2">{phase.phase}</div>
                    <h3 className="card-title text-xl">{phase.title}</h3>
                    <div className="flex items-center gap-2 text-base-content/60 mt-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{phase.timeline}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="alert alert-info py-2">
                    <Info className="w-4 h-4" />
                    <span className="text-sm font-medium">Impact: {phase.impact}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Targets:</h4>
                  <ul className="space-y-1">
                    {phase.targets.map((target, targetIndex) => (
                      <li key={targetIndex} className="text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation to All Pages */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Complete Strategic Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <button 
            className="card bg-gradient-to-r from-error to-warning text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/current-analysis') : onSectionChange('current-analysis')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Current Analysis</h3>
              <p className="text-sm opacity-80">UX evaluation findings</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/stickiness-strategy') : onSectionChange('stickiness-strategy')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Stickiness Strategy</h3>
              <p className="text-sm opacity-80">Journey-stage intelligence</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-accent to-info text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/conversion-strategy') : onSectionChange('conversion-strategy')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Conversion Strategy</h3>
              <p className="text-sm opacity-80">Revenue optimization</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-success to-info text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/innovation-strategy') : onSectionChange('innovation-strategy')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Innovation Strategy</h3>
              <p className="text-sm opacity-80">AI & voice capabilities</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-warning to-error text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/growth-strategy') : onSectionChange('growth-strategy')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Growth Strategy</h3>
              <p className="text-sm opacity-80">European expansion</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-info to-primary text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/implementation-roadmap') : onSectionChange('implementation-roadmap')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Implementation</h3>
              <p className="text-sm opacity-80">Detailed roadmap</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-secondary to-accent text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/prototype-demo') : onSectionChange('prototype-demo')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Prototype Demo</h3>
              <p className="text-sm opacity-80">Interactive showcase</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-success to-info text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/sources') : onSectionChange('sources')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Research Sources</h3>
              <p className="text-sm opacity-80">Industry benchmarks</p>
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

export default Overview; 