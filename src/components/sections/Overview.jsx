import React from 'react';
import {
  TrendingUp,
  Smartphone,
  Brain,
  Target,
  ArrowRight,
  Zap,
  AlertTriangle,
  BookOpen
} from 'lucide-react';

const Overview = ({ onSectionChange, navigate }) => {
  
  // Helper function to handle navigation with scroll-to-top
  const handleNavigation = (path) => {
    if (navigate) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  const currentAppAnalysis = {
    performance: {
      title: "Performance & Technical",
      icon: <Zap className="w-6 h-6" />,
      color: "text-error",
      bgColor: "bg-error/10",
      summary: "Loading times exceed industry standards, PWA installation missing, affecting user retention"
    },
    functionality: {
      title: "Core Functionality",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "text-error",
      bgColor: "bg-error/10",
      summary: "Non-functional search, navigation inconsistencies, and button overlaps impact user experience"
    },
    design: {
      title: "User Interface & Design",
      icon: <Smartphone className="w-6 h-6" />,
      color: "text-warning",
      bgColor: "bg-warning/10",
      summary: "Weather widget UX issues, feature sprawl, and external redirects reduce engagement"
    },
    conversion: {
      title: "Conversion Barriers",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-error",
      bgColor: "bg-error/10",
      summary: "Check-in process buried, incomplete transaction feedback, and digital concierge limitations"
    }
  };

  const myRecommendations = [
    {
      priority: "Immediate (0-6 weeks)",
      title: "Foundation Enhancement",
      subtitle: "Optimize core functionality and user experience",
      description: "My analysis identified 18 strategic opportunities including search UX enhancement, weather widget redesign, navigation optimization, and digital concierge improvement. Establishing strong foundation builds user trust and engagement.",
      icon: <Target className="w-8 h-8" />,
      color: "neutral",
      actions: ["Enhance search experience", "Redesign weather widget", "Streamline navigation", "Improve digital concierge", "Optimize performance"]
    },
    {
      priority: "Phase 1 (1-3 months)",
      title: "Stickiness Strategy",
      subtitle: "Make app integral to guest journey",
      description: "My core recommendation: Journey-Stage Intelligence that adapts experiences based on pre-arrival, in-stay, and post-checkout phases. Create context-aware interactions that anticipate guest needs.",
      icon: <Zap className="w-8 h-8" />,
      color: "info",
      actions: ["Journey-stage detection", "Contextual content", "Personalized recommendations", "Proactive service delivery", "Habit-forming features"]
    },
    {
      priority: "Phase 2 (Weeks 5-8)",
      title: "Conversion Optimization",
      subtitle: "Optimize critical touchpoints for revenue impact",
      description: "My strategy focuses on onboarding streamlining, check-in/checkout optimization, and intelligent upselling. Target 28% → 60% onboarding conversion and 13% → 25% purchase conversion.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "info",
      actions: ["Streamlined onboarding", "Express check-in prominence", "Dynamic upselling", "Contextual offers", "Frictionless payments"]
    },
    {
      priority: "Phase 3 (Weeks 9-16)",
      title: "Innovation & Growth",
      subtitle: "Competitive differentiation and market expansion",
      description: "My innovation approach: AI-powered guest intelligence, predictive service delivery, voice interfaces, and IoT integration. Focus on features that create viral moments and drive adoption.",
      icon: <Brain className="w-8 h-8" />,
      color: "info",
      actions: ["AI guest intelligence", "Predictive services", "Voice interface", "IoT integration", "Viral features"]
    }
  ];



  return (
    <div className="space-y-12">
      {/* Executive Summary Header */}
      <div className="hero bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl border border-primary/10">
        <div className="hero-content text-center py-16 px-8">
          <div className="max-w-6xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-base-content">My Strategic Analysis:</span><br />
              <span className="text-primary">Elevating Straiv's</span><br />
              <span className="text-secondary">Guest App Excellence</span>
            </h1>

            <p className="text-xl md:text-2xl text-base-content/80 mb-6 max-w-4xl mx-auto leading-relaxed">
              Based on industry analysis, competitive research, and guest journey mapping, I've identified 
              <span className="font-bold text-primary"> 18 systematic improvements </span>
              to bridge the 
              <span className="font-bold text-warning"> 35% guest adoption gap </span>
              (73% willingness vs 38% usage) through Journey-Stage Intelligence and optimized guest experience.
            </p>

            {/* Methodology Statement */}
            <div className="max-w-3xl mx-auto mb-8 p-4 bg-base-200/50 rounded-lg border border-base-300">
              <h3 className="font-semibold text-sm text-base-content mb-2">Analysis Methodology</h3>
              <p className="text-sm text-base-content/80">
                My approach combines <strong>heuristic UX evaluation</strong> of Straiv's current guest app, <strong>comprehensive industry research</strong> across 50+ hospitality technology sources, and <strong>competitive intelligence</strong> from published case studies of leading hotel brands including Marriott, Hilton, and IHG.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="stats shadow border border-primary/20">
                <div className="stat place-items-center">
                  <div className="stat-title text-primary">Improvement Areas</div>
                  <div className="stat-value text-primary">18</div>
                  <div className="stat-desc">Identified Opportunities</div>
                </div>
              </div>
              <div className="stats shadow border border-secondary/20">
                <div className="stat place-items-center">
                  <div className="stat-title text-secondary">Market Gap</div>
                  <div className="stat-value text-warning">35%</div>
                  <div className="stat-desc">Adoption Bridge Potential</div>
                </div>
              </div>
              <div className="stats shadow border border-accent/20">
                <div className="stat place-items-center">
                  <div className="stat-title text-accent">Implementation</div>
                  <div className="stat-value text-primary">16</div>
                  <div className="stat-desc">Weeks to Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current App Analysis */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Key Findings: Critical Improvement Areas</h2>
        <p className="text-lg text-center text-base-content/80 mb-8 max-w-4xl mx-auto">
          Based on systematic evaluation of Straiv's guest app, I've identified four critical areas 
          requiring immediate attention to bridge the 35% adoption gap.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(currentAppAnalysis).map(([key, category]) => (
            <div key={key} className="card bg-base-100 border border-base-300 hover:shadow-lg transition-all">
              <div className="card-body p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <div className={category.color}>
                      {category.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-3">{category.title}</h3>
                    <p className="text-sm text-base-content/80 leading-relaxed">{category.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Level Solution Preview */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">My Strategic Approach</h2>
        <p className="text-lg text-center text-base-content/80 mb-8 max-w-3xl mx-auto">
          Four-phase implementation strategy to systematically address issues and unlock growth potential.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {myRecommendations.map((rec, index) => (
            <div key={index} className="card bg-base-100 border border-base-300 hover:shadow-xl transition-all hover:border-base-400">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-base-200 flex items-center justify-center border border-base-300">
                    <div className="text-base-content">
                      {rec.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="badge badge-outline badge-sm mb-2 text-base-content border-base-content/30">{rec.priority}</div>
                    <h3 className="card-title text-xl mb-2 text-base-content">{rec.title}</h3>
                    <p className="text-base-content/80 text-sm mb-3 font-medium">{rec.subtitle}</p>
                    <p className="text-base-content/70 text-sm">{rec.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation to Detailed Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button 
          className="card bg-gradient-to-r from-error to-warning text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => navigate ? handleNavigation('/current-analysis') : onSectionChange('current-analysis')}
        >
          <div className="card-body text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">Current App Analysis</h3>
            <p className="text-sm opacity-80">Deep dive into the 18 strategic opportunities I identified</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
          className="card bg-gradient-to-r from-primary to-secondary text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => navigate ? handleNavigation('/stickiness-strategy') : onSectionChange('stickiness-strategy')}
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
          onClick={() => navigate ? handleNavigation('/prototype-demo') : onSectionChange('prototype-demo')}
        >
          <div className="card-body text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">Interactive Mockups</h3>
            <p className="text-sm opacity-80">See my recommendations in action</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
          className="card bg-gradient-to-r from-info to-success text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => navigate ? handleNavigation('/sources') : onSectionChange('sources')}
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