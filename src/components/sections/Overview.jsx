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
  Globe
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

  // Rich tooltip component for complex content
  const RichTooltip = ({ children, title, description, source, sourceUrl }) => {
    const tooltipContent = `${title}\n\n${description}\n\nSource: ${source}${sourceUrl.startsWith('http') ? '\n🔗 Click to view source' : ''}`;
    
    return (
      <div className="tooltip tooltip-info tooltip-top" data-tip={tooltipContent}>
        {children}
      </div>
    );
  };

  // Stats data for hero section with detailed tooltips
  const heroStats = [
    {
      value: "2.9x",
      label: "Improvement Potential",
      description: "Mobile vs Desktop Conversion Gap",
      color: "text-primary",
      tooltip: "Industry research shows mobile hotel apps convert at only 2.6% vs 7.6% for desktop, representing massive optimization opportunity for hotels investing in mobile experience improvements. Calculation: 7.6% ÷ 2.6% = 2.9x improvement potential.",
      source: "Statista - Travel websites conversion rate by device 2024",
      sourceUrl: "https://www.statista.com/statistics/1350599/conversion-rate-travel-tourism-websites-by-device-worldwide/"
    },
    {
      value: "37.8%",
      label: "Revenue Increase",
      description: "Documented Case Studies",
      color: "text-success",
      tooltip: "Penta Hotels achieved 37.8% conversion rate improvement through A/B testing, representing the high end of documented 15-37.8% revenue increases from mobile optimization. Additional cases: LuxStay Hotels (15% revenue increase), Heritage Grand Resorts (30% engagement increase).",
      source: "Hotel App Conversion Benchmarks - Proven Optimization Results",
      sourceUrl: "#case-studies"
    },
    {
      value: "€187.9B",
      label: "European Market",
      description: "Total Addressable Market",
      color: "text-secondary",
      tooltip: "Total European hotel market size representing the addressable opportunity for digital guest experience solutions, with 26.18% CAGR growth through 2029. This validates the massive scale of opportunity for hospitality technology improvements.",
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
    <div className="space-y-16">
      {/* Hero Section - Unlocking Revenue Potential */}
      <div className="hero bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl border border-primary/10">
        <div className="hero-content text-center py-16 px-8">
          <div className="max-w-7xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Unlocking Straiv's</span><br />
              <span className="text-secondary">Guest App Revenue Potential</span>
            </h1>

            <p className="text-xl md:text-2xl text-base-content/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Strategic improvements to transform current performance into industry-leading results
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {heroStats.map((stat, index) => (
                <RichTooltip 
                  key={index} 
                  title={`📊 ${stat.label} Analysis`}
                  description={stat.tooltip}
                  source={stat.source}
                  sourceUrl={stat.sourceUrl}
                >
                  <div className="stats shadow border border-base-300 hover:shadow-lg transition-shadow cursor-help">
                    <div className="stat place-items-center">
                      <div className={`stat-value ${stat.color} text-3xl md:text-4xl`}>{stat.value}</div>
                      <div className="stat-title font-semibold">{stat.label}</div>
                      <div className="stat-desc text-sm">{stat.description}</div>
                      <div className="stat-actions mt-2">
                        <Info className="w-4 h-4 text-base-content/50" />
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
          <Tooltip content="Industry research shows mobile apps are critical revenue drivers but significantly underperforming compared to desktop experiences">
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
          <Tooltip content="Phased approach targets verified industry benchmarks with proven ROI potential">
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

      {/* Navigation to Detailed Analysis */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Explore Detailed Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <button 
            className="card bg-gradient-to-r from-error to-warning text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/current-analysis') : onSectionChange('current-analysis')}
          >
            <div className="card-body text-center p-6">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Current App Analysis</h3>
              <p className="text-sm opacity-80">Systematic UX evaluation findings and critical improvement areas</p>
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
              <p className="text-sm opacity-80">Journey-Stage Intelligence for maximum engagement and retention</p>
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
              <p className="text-sm opacity-80">Transform onboarding and optimize critical revenue touchpoints</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-success to-info text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/sources') : onSectionChange('sources')}
          >
            <div className="card-body text-center p-6">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Research Sources</h3>
              <p className="text-sm opacity-80">Industry benchmarks and studies supporting strategic recommendations</p>
              <div className="card-actions justify-center mt-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Market Context Footer */}
      <div className="card bg-gradient-to-r from-base-200 to-base-300 border border-base-content/10">
        <div className="card-body text-center p-8">
          <h3 className="text-2xl font-bold mb-4">Market Opportunity Context</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="font-bold">€187.9 Billion</div>
              <div className="text-base-content/70">European Hotel Market</div>
            </div>
            <div>
              <BarChart3 className="w-8 h-8 mx-auto mb-2 text-success" />
              <div className="font-bold">26.18% CAGR</div>
              <div className="text-base-content/70">Smart Hospitality Growth</div>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-2 text-info" />
              <div className="font-bold">100%</div>
              <div className="text-base-content/70">Hoteliers Plan Tech Investment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview; 