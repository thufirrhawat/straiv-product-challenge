import React, { useState } from 'react';
import { 
  Brain,
  Mic,
  Zap,
  Star,
  Calendar,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Users,
  Target,
  Bot,
  Sparkles,
  Shield,
  Settings,
  DollarSign,
  BarChart3,
  Clock,
  Database,
  Info,
  AlertTriangle,
  Globe,
  Wifi,
  Coffee,
  Bell,
  MessageCircle,
  Headphones,
  Languages,
  Accessibility,
  Wrench,
  Award
} from 'lucide-react';

const InnovationStrategy = ({ onSectionChange, navigate }) => {
  const [activeInnovation, setActiveInnovation] = useState(0);

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

  // Market context data
  const marketContext = {
    aiAdoption: "80%",
    revenueIncrease: "10-15%",
    voiceFeatures: "54%",
    dailyUsage: "76.8%",
    guestPreference: "47%",
    aiImprovement: "58%",
    techInvestment: "100%"
  };

  // Two main innovation strategies
  const innovations = [
    {
      id: 'predictive-engine',
      title: "Predictive Guest Service Engine",
      subtitle: "AI-powered anticipation of guest needs using integrated hotel operational data",
      color: "primary",
      bgGradient: "from-primary/5 to-info/5",
      borderColor: "border-primary/20",
      icon: <Brain className="w-5 h-5" />,
      marketContext: "80% of hotels use AI chatbots, 10-15% revenue increases through AI pricing optimization",
      coreCapability: "AI-powered anticipation of guest needs using integrated hotel operational data",
      uniqueAdvantage: "Leverages Straiv's 50+ technology partner integrations unavailable to competitors",
      guestValue: "Anticipatory service that exceeds expectations before needs are expressed",
      implementation: "4-6 months leveraging existing PMS integration data",
      tooltip: "Research shows 80% hotel AI adoption with proven 10-15% revenue increases through intelligent automation",
      functionalityExamples: [
        {
          feature: "Automatic Restaurant Reservations",
          description: "AI suggests optimal dining times based on guest patterns and availability",
          icon: <Coffee className="w-6 h-6 text-primary" />,
          implementation: "Leverage behavioral analytics from 1,000,000+ digital check-ins"
        },
        {
          feature: "Proactive Housekeeping Optimization",
          description: "Smart scheduling based on room usage data and guest preferences",
          icon: <Settings className="w-6 h-6 text-primary" />,
          implementation: "Deep PMS integration across multiple hotel brands"
        },
        {
          feature: "Intelligent Wake-up & Breakfast Timing",
          description: "Personalized recommendations based on guest behavior patterns",
          icon: <Bell className="w-6 h-6 text-primary" />,
          implementation: "Build on 98.89% customer satisfaction foundation"
        },
        {
          feature: "Predictive Maintenance Identification",
          description: "Identify potential issues before guest complaints occur",
          icon: <Wrench className="w-6 h-6 text-primary" />,
          implementation: "50+ technology partner integrations for comprehensive monitoring"
        }
      ],
      businessValue: {
        costReduction: "10-30% cost reductions in customer service operations",
        automation: "85%+ automation of guest inquiries through AI systems",
        efficiency: "Proactive service delivery without additional staff overhead"
      }
    },
    {
      id: 'voice-services',
      title: "Voice-First Guest Services",
      subtitle: "GDPR-compliant natural language processing for guest requests",
      color: "secondary",
      bgGradient: "from-secondary/5 to-accent/5",
      borderColor: "border-secondary/20", 
      icon: <Mic className="w-5 h-5" />,
      marketContext: "54% of hotels offer or plan voice-controlled features, 76.8% daily usage rates",
      coreCapability: "GDPR-compliant natural language processing for guest requests",
      uniqueAdvantage: "European privacy-first voice technology that US competitors cannot easily replicate",
      guestValue: "Natural voice interaction with privacy protection and multi-language support",
      implementation: "3-4 months for core capabilities with European compliance",
      tooltip: "Voice technology addresses the 47% guest preference for technology over phone calls while maintaining human oversight for complex issues",
      useCases: [
        {
          useCase: "Voice Service Requests",
          example: "\"Book wake-up call for 7 AM and order coffee for 7:15\"",
          icon: <MessageCircle className="w-6 h-6 text-secondary" />,
          implementation: "Natural language processing with PMS integration"
        },
        {
          useCase: "Hands-free Hotel Information",
          example: "\"What time does the spa close today?\"",
          icon: <Info className="w-6 h-6 text-secondary" />,
          implementation: "Real-time data integration with hotel systems"
        },
        {
          useCase: "Accessibility Enhancement",
          example: "Support for guests with visual or mobility limitations",
          icon: <Accessibility className="w-6 h-6 text-secondary" />,
          implementation: "Inclusive design with accessibility standards compliance"
        },
        {
          useCase: "Multi-language Support",
          example: "European market diversity with native language support",
          icon: <Languages className="w-6 h-6 text-secondary" />,
          implementation: "GDPR-compliant voice processing for European languages"
        }
      ],
      businessImpact: {
        preference: "47% prefer technology over phone calls for room service",
        reduction: "Target significant reduction in concierge and front desk call volume",
        helpfulness: "70% find chatbots helpful for simple inquiries (voice extends this capability)"
      },
      guestPreferences: "70% prefer human interaction for complex requests (voice handles simple ones)"
    }
  ];

  // Technical feasibility assessment
  const technicalFeasibility = {
    existingAdvantages: [
      "Progressive Web App (PWA) foundation with offline capabilities",
      "50+ technology partner integrations across PMS, payment, and door systems",
      "1,000,000+ digital check-ins annually providing rich behavioral data",
      "European GDPR compliance expertise built into platform"
    ],
    innovationRequirements: [
      "Voice processing with European privacy compliance",
      "Enhanced behavioral analytics using existing data streams",
      "Predictive modeling leveraging current 98.89% customer satisfaction baseline",
      "AI capabilities building on proven 59 features added in 2023 development pace"
    ],
    marketValidation: {
      guestBelief: "58% believe AI can improve their stay experience",
      hotelierInvestment: "100% of hoteliers plan technology investment increases"
    }
  };

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">AI-Powered Innovation</span><br />
          <span className="text-secondary">for Competitive Advantage</span>
        </h1>
        
        <p className="text-xl text-base-content/80 max-w-4xl mx-auto mb-8">
          Next-generation features leveraging proven technology foundations for market differentiation
        </p>
        
        {/* Market Context Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <div className="stats shadow border border-primary/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-primary text-lg">{marketContext.aiAdoption}</div>
              <div className="stat-desc text-xs">Hotels Use AI Chatbots</div>
            </div>
          </div>
          <div className="stats shadow border border-success/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-success text-lg">{marketContext.revenueIncrease}</div>
              <div className="stat-desc text-xs">Revenue Increase via AI</div>
            </div>
          </div>
          <div className="stats shadow border border-secondary/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-secondary text-lg">{marketContext.voiceFeatures}</div>
              <div className="stat-desc text-xs">Hotels Plan Voice Features</div>
            </div>
          </div>
          <div className="stats shadow border border-info/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-info text-lg">{marketContext.dailyUsage}</div>
              <div className="stat-desc text-xs">Daily Voice Usage Rates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Strategic Innovations */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Two Strategic Innovation Pillars</h2>
        
        {/* Innovation Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-8">
          {innovations.map((innovation, index) => (
              <button 
              key={innovation.id}
              className={`btn ${activeInnovation === index ? `btn-${innovation.color}` : 'btn-outline'} gap-2 flex-1 sm:flex-none`}
              onClick={() => setActiveInnovation(index)}
            >
              {React.cloneElement(innovation.icon, { 
                className: `w-5 h-5 ${activeInnovation === index ? 'text-white' : `text-${innovation.color}`}` 
              })}
              <span className="hidden sm:inline">{innovation.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

        {/* Active Innovation Display */}
        <div className={`card bg-gradient-to-br ${innovations[activeInnovation].bgGradient} border-2 ${innovations[activeInnovation].borderColor} mb-8`}>
          <div className="card-body p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-16 h-16 rounded-xl bg-base-100 flex items-center justify-center border-2 ${innovations[activeInnovation].borderColor}`}>
                <div className={`text-${innovations[activeInnovation].color}`}>
                  <div className="w-8 h-8">
                    {React.cloneElement(innovations[activeInnovation].icon, { className: 'w-8 h-8' })}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{innovations[activeInnovation].title}</h3>
                <p className="text-lg text-base-content/80 mb-3">{innovations[activeInnovation].subtitle}</p>
                <div className="flex items-center gap-2 text-base-content/60">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Implementation: {innovations[activeInnovation].implementation}</span>
                </div>
              </div>
            </div>

            {/* Market Context */}
            <div className="mb-6">
              <div className="alert alert-info py-3">
                <BarChart3 className="w-4 h-4" />
                <div className="text-sm">
                  <div className="font-semibold">Market Context:</div>
                  <div>{innovations[activeInnovation].marketContext}</div>
                </div>
              </div>
            </div>

            {/* Core Capability & Unique Advantage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-base-100 rounded-lg border border-base-300">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Core Capability
                </h4>
                <p className="text-sm text-base-content/80">{innovations[activeInnovation].coreCapability}</p>
              </div>
              <div className="p-4 bg-base-100 rounded-lg border border-base-300">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Unique Advantage
                </h4>
                <p className="text-sm text-base-content/80">{innovations[activeInnovation].uniqueAdvantage}</p>
              </div>
            </div>

            {/* Innovation-specific content */}
            {activeInnovation === 0 && (
              <div className="space-y-6">
                {/* Functionality Examples */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Functionality Examples
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {innovations[activeInnovation].functionalityExamples.map((example, index) => (
                      <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                        <div className="flex items-start gap-3 mb-3">
                          {example.icon}
                          <div>
                            <h5 className="font-semibold text-sm">{example.feature}</h5>
                            <p className="text-xs text-base-content/80 mt-1">{example.description}</p>
                      </div>
                    </div>
                        <div className="text-xs text-base-content/60 bg-base-200 rounded px-2 py-1">
                          <strong>Implementation:</strong> {example.implementation}
                      </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Value */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Business Value
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(innovations[activeInnovation].businessValue).map(([key, value]) => (
                      <div key={key} className="p-4 bg-base-100 rounded-lg border border-base-300 text-center">
                        <div className="font-medium text-sm capitalize mb-1">{key.replace(/([A-Z])/g, ' $1')}</div>
                        <div className="text-sm text-base-content/80">{value}</div>
                </div>
              ))}
            </div>
          </div>
              </div>
            )}

            {activeInnovation === 1 && (
              <div className="space-y-6">
                {/* Use Cases */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Use Cases
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {innovations[activeInnovation].useCases.map((useCase, index) => (
                      <div key={index} className="p-4 bg-base-100 rounded-lg border border-base-300">
                        <div className="flex items-start gap-3 mb-3">
                          {useCase.icon}
                          <div>
                            <h5 className="font-semibold text-sm">{useCase.useCase}</h5>
                            <p className="text-xs text-base-content/80 mt-1 italic">"{useCase.example}"</p>
        </div>
      </div>
                        <div className="text-xs text-base-content/60 bg-base-200 rounded px-2 py-1">
                          <strong>Implementation:</strong> {useCase.implementation}
                      </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Impact */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Business Impact
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(innovations[activeInnovation].businessImpact).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guest Preferences */}
                <div className="alert alert-warning py-3">
                  <Users className="w-4 h-4" />
                  <div className="text-sm">
                    <div className="font-semibold">Guest Preferences:</div>
                    <div>{innovations[activeInnovation].guestPreferences}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Guest Value */}
            <div className="mt-6">
              <div className="alert alert-success py-3">
                <Award className="w-4 h-4" />
                <div className="text-sm">
                  <div className="font-semibold">Guest Value:</div>
                  <div>{innovations[activeInnovation].guestValue}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Tooltip */}
        <div className="text-center">
          <div className="tooltip tooltip-info tooltip-top" data-tip={innovations[activeInnovation].tooltip}>
            <div className="inline-flex items-center gap-2 text-base-content/60 cursor-help">
              <Info className="w-4 h-4" />
              <span className="text-sm">Research Insight Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Feasibility Assessment */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Technical Feasibility Assessment</h2>
          <div className="tooltip tooltip-info tooltip-top" data-tip="Innovation builds on Straiv's proven technical foundation while addressing verified market demand for AI and voice capabilities">
            <p className="text-lg text-base-content/80 max-w-3xl mx-auto cursor-help">
              Strategic innovation approach leveraging existing infrastructure and proven capabilities
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Existing Infrastructure Advantages */}
          <div className="card bg-gradient-to-br from-success/5 to-info/5 border border-success/20">
            <div className="card-body p-8">
              <h3 className="card-title text-2xl mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-success" />
                Existing Infrastructure Advantages
              </h3>
              
              <div className="space-y-4">
                {technicalFeasibility.existingAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{advantage}</span>
                          </div>
                        ))}
                      </div>
                      </div>
                    </div>

          {/* Innovation Requirements */}
          <div className="card bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
            <div className="card-body p-8">
              <h3 className="card-title text-2xl mb-6 flex items-center gap-3">
                <Wrench className="w-8 h-8 text-primary" />
                Innovation Requirements
              </h3>
              
              <div className="space-y-4">
                {technicalFeasibility.innovationRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Market Validation */}
        <div className="mt-8">
          <div className="card bg-gradient-to-r from-accent/10 to-success/10 border border-accent/20">
            <div className="card-body text-center p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <BarChart3 className="w-8 h-8 text-success" />
                Market Validation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                  <div className="text-3xl font-bold text-accent">{technicalFeasibility.marketValidation.guestBelief}</div>
                  <div className="text-sm font-medium">Guest Belief in AI</div>
                  <div className="text-xs text-base-content/60">Believe AI can improve their stay experience</div>
                    </div>
                    <div>
                  <div className="text-3xl font-bold text-success">{technicalFeasibility.marketValidation.hotelierInvestment}</div>
                  <div className="text-sm font-medium">Hotelier Investment</div>
                  <div className="text-xs text-base-content/60">Plan technology investment increases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Impact Summary */}
      <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
        <div className="card-body text-center p-8">
          <h3 className="text-2xl font-bold mb-6">Innovation Impact Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary">10-15%</div>
              <div className="text-sm font-medium">Revenue Increase</div>
              <div className="text-xs text-base-content/60">Through AI optimization</div>
              </div>
            <div>
              <div className="text-3xl font-bold text-secondary">85%+</div>
              <div className="text-sm font-medium">Query Automation</div>
              <div className="text-xs text-base-content/60">Guest inquiry automation rate</div>
          </div>
            <div>
              <div className="text-3xl font-bold text-success">30%</div>
              <div className="text-sm font-medium">Cost Reduction</div>
              <div className="text-xs text-base-content/60">Customer service operations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Navigation */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Strategic Implementation Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
        <button 
          className="card bg-gradient-to-r from-success to-primary text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/implementation-roadmap') : onSectionChange('implementation-roadmap')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Implementation Roadmap</h3>
              <p className="text-sm opacity-80">Detailed timeline and resource requirements</p>
              <div className="card-actions justify-center mt-4">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
            className="card bg-gradient-to-r from-info to-success text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/growth-strategy') : onSectionChange('growth-strategy')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Growth Strategy</h3>
              <p className="text-sm opacity-80">European market expansion and scaling approach</p>
              <div className="card-actions justify-center mt-4">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

          <button 
            className="card bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/sources') : onSectionChange('sources')}
          >
            <div className="card-body text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="card-title justify-center text-base">Research Sources</h3>
              <p className="text-sm opacity-80">Industry benchmarks and supporting studies</p>
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

export default InnovationStrategy; 