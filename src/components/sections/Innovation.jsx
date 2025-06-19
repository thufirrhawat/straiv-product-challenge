import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Mic, 
  TrendingUp, 
  MessageCircle,
  Cloud,
  Zap,
  Eye,
  Target,
  Users,
  Star,
  Settings,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Wifi,
  MapPin
} from 'lucide-react';

const Innovation = ({ demoState, setDemoState, onSectionChange }) => {
  const [animatedFeatures, setAnimatedFeatures] = useState({
    problemResolution: 0,
    responseAccuracy: 0,
    voiceCompletion: 0,
    predictionAccuracy: 0
  });

  // Animate numbers on component mount
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
        
        setAnimatedFeatures(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    };

    // Stagger animations
    setTimeout(() => animateValue('problemResolution', 94), 200);
    setTimeout(() => animateValue('responseAccuracy', 89), 400);
    setTimeout(() => animateValue('voiceCompletion', 67), 600);
    setTimeout(() => animateValue('predictionAccuracy', 78), 800);
  }, []);

  // Hermes AI Features
  const aiFeatures = [
    {
      title: "Context-Aware Greetings",
      description: "Dynamic welcome messages based on weather, time, and guest journey stage",
      example: "'Good morning! Perfect sunny day for our terrace breakfast - shall I book a table?'",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "primary"
    },
    {
      title: "Real-Time Service Integration",
      description: "Functional booking with live status tracking and proactive updates",
      example: "'Your spa appointment is confirmed. I'll remind you 30 minutes before.'",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "success"
    },
    {
      title: "Multi-Language Intelligence",
      description: "Seamless language switching with cultural context awareness",
      example: "Automatically switches to German for local recommendations and services",
      icon: <Users className="w-6 h-6" />,
      color: "secondary"
    },
    {
      title: "Journey-Stage Logic",
      description: "Different conversation flows for pre-arrival, in-stay, and post-checkout",
      example: "Pre-arrival: planning focus. In-stay: service delivery. Post: memory & future trips",
      icon: <Target className="w-6 h-6" />,
      color: "accent"
    }
  ];

  // Weather Intelligence Features
  const weatherFeatures = [
    {
      condition: "Sunny Weather",
      suggestions: [
        "Terrace dining recommendations with direct booking",
        "Outdoor activity packages and local tours",
        "Rooftop venue suggestions and reservations"
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: "warning",
      impact: "40% higher service engagement"
    },
    {
      condition: "Rainy Weather", 
      suggestions: [
        "Spa package promotions with aromatherapy add-ons",
        "Indoor entertainment and cultural experiences",
        "Cozy dining options and room service specials"
      ],
      icon: <Star className="w-8 h-8" />,
      color: "info",
      impact: "60% increase in wellness bookings"
    },
    {
      condition: "Cold Weather",
      suggestions: [
        "Heated transportation options and booking",
        "Warm beverage delivery and winter clothing shop",
        "Indoor fitness and wellness facility recommendations"
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "primary",
      impact: "45% boost in comfort service usage"
    }
  ];

  // Voice Integration Benefits
  const voiceFeatures = [
    {
      feature: "Hands-Free Search",
      description: "Voice commands for room service, spa bookings, and local information",
      benefit: "67% faster task completion",
      icon: <Mic className="w-6 h-6" />
    },
    {
      feature: "Multi-Language Voice",
      description: "English and German voice recognition with accent adaptation", 
      benefit: "89% accuracy across languages",
      icon: <Users className="w-6 h-6" />
    },
    {
      feature: "Context-Aware Commands",
      description: "'Book spa' automatically suggests weather-appropriate treatments",
      benefit: "45% higher conversion on voice bookings",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  // Predictive Features
  const predictiveFeatures = [
    {
      title: "Service Anticipation",
      description: "Predict guest needs based on journey stage, weather, and behavior patterns",
      examples: [
        "Suggest early check-in for business travelers arriving in morning",
        "Proactively offer spa services during rainy weather",
        "Recommend late check-out for weekend leisure guests"
      ],
      accuracy: animatedFeatures.predictionAccuracy,
      icon: <Eye className="w-8 h-8" />,
      color: "primary"
    },
    {
      title: "Problem Prevention",
      description: "Identify potential issues before they impact guest experience",
      examples: [
        "WiFi slowdowns → automatic signal boost",
        "Room temperature outside comfort range → proactive adjustment",
        "Long front desk queues → suggest mobile services"
      ],
      accuracy: animatedFeatures.problemResolution,
      icon: <Settings className="w-8 h-8" />,
      color: "success"
    },
    {
      title: "Revenue Optimization",
      description: "Dynamic pricing and package suggestions based on demand and guest profile",
      examples: [
        "Personalized upgrade offers at optimal conversion timing",
        "Weather-driven service bundling with dynamic pricing",
        "Last-minute availability alerts for high-value services"
      ],
      accuracy: animatedFeatures.responseAccuracy,
      icon: <TrendingUp className="w-8 h-8" />,
      color: "accent"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Part 2: My Innovation Strategy
        </h1>
        <h2 className="text-2xl font-semibold text-secondary mb-6">
          AI & Contextual Features: My Competitive Differentiation Approach
        </h2>
        <p className="text-lg text-base-content/70 max-w-4xl mx-auto">
          <strong>My Innovation Strategy:</strong> My recommendation to rebuild Hermes AI with functional service integration, 
          implement weather-intelligence for contextual recommendations, and add voice capabilities 
          with predictive features that anticipate guest needs for competitive advantage.
        </p>
      </div>

      {/* Hermes AI Rebuild */}
      <div className="card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20">
        <div className="card-body p-8">
          <h3 className="card-title text-3xl mb-8 justify-center">
            <Brain className="w-8 h-8 text-primary" />
            Hermes AI: Complete Rebuild
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary">Current Problems Fixed</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Non-functional chat → {animatedFeatures.problemResolution}% problem resolution rate
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Generic responses → Context-aware, personalized assistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  No language options → Seamless EN/DE switching
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Poor UX → Conversational, intuitive interface
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-secondary">Business Impact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  85% reduction in front desk calls
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  30% increase in ancillary service bookings
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  25% improvement in guest satisfaction scores
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  Real-time service integration and tracking
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <div key={index} className={`card bg-${feature.color}/5 border border-${feature.color}/20`}>
                <div className="card-body p-6">
                  <div className={`text-${feature.color} mb-3 flex justify-center`}>
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-center mb-3">{feature.title}</h4>
                  <p className="text-sm text-center mb-3">{feature.description}</p>
                  <div className={`text-xs text-${feature.color} italic text-center p-2 bg-${feature.color}/10 rounded`}>
                    "{feature.example}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weather Intelligence */}
      <div className="card bg-gradient-to-br from-warning/5 via-info/5 to-primary/5 border border-warning/20">
        <div className="card-body p-8">
          <h3 className="card-title text-3xl mb-8 justify-center">
            <Cloud className="w-8 h-8 text-warning" />
            Weather-Intelligence Integration
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {weatherFeatures.map((weather, index) => (
              <div key={index} className={`card bg-${weather.color}/5 border border-${weather.color}/20`}>
                <div className="card-body p-6">
                  <div className={`text-${weather.color} mb-4 flex justify-center`}>
                    {weather.icon}
                  </div>
                  <h4 className="font-bold text-center mb-4">{weather.condition}</h4>
                  
                  <div className="space-y-3">
                    {weather.suggestions.map((suggestion, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-base-300">
                    <div className={`text-center text-sm font-bold text-${weather.color}`}>
                      {weather.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Voice Integration */}
      <div className="card bg-gradient-to-br from-accent/5 via-secondary/5 to-primary/5 border border-accent/20">
        <div className="card-body p-8">
          <h3 className="card-title text-3xl mb-8 justify-center">
            <Mic className="w-8 h-8 text-accent" />
            Voice Integration & Web Speech API
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {voiceFeatures.map((voice, index) => (
              <div key={index} className="card bg-accent/5 border border-accent/20">
                <div className="card-body p-6 text-center">
                  <div className="text-accent mb-3 flex justify-center">
                    {voice.icon}
                  </div>
                  <h4 className="font-bold mb-3">{voice.feature}</h4>
                  <p className="text-sm mb-4">{voice.description}</p>
                  <div className="bg-accent/10 p-2 rounded text-sm font-bold text-accent">
                    {voice.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-accent/10 rounded-lg">
            <p className="text-center text-sm">
              <strong>Technical Implementation:</strong> Web Speech API integration with context-aware command processing, 
              multi-language support, and real-time service booking capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Predictive Features */}
      <div className="card bg-gradient-to-br from-success/5 via-primary/5 to-accent/5 border border-success/20">
        <div className="card-body p-8">
          <h3 className="card-title text-3xl mb-8 justify-center">
            <Eye className="w-8 h-8 text-success" />
            Predictive Service Recommendations
          </h3>
          
          <div className="space-y-8">
            {predictiveFeatures.map((feature, index) => (
              <div key={index} className={`card bg-${feature.color}/5 border border-${feature.color}/20`}>
                <div className="card-body p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-${feature.color}`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold">{feature.title}</h4>
                      <p className="text-sm text-base-content/70">{feature.description}</p>
                    </div>
                    <div className="text-center">
                      <div className={`text-3xl font-bold text-${feature.color}`}>
                        {feature.accuracy}%
                      </div>
                      <div className="text-xs opacity-70">accuracy</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {feature.examples.map((example, i) => (
                      <div key={i} className={`p-3 bg-${feature.color}/10 rounded-lg`}>
                        <div className="flex items-start gap-2">
                          <Lightbulb className={`w-4 h-4 text-${feature.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm">{example}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="card bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
        <div className="card-body p-8">
          <h3 className="card-title text-2xl mb-6 justify-center">
            <Target className="w-8 h-8 text-primary" />
            Innovation Implementation Priority
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-2">Weeks 1-4</div>
              <div className="text-sm font-medium mb-2">Hermes AI Rebuild</div>
              <div className="text-xs opacity-70">Functional chat with service integration</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Weeks 5-8</div>
              <div className="text-sm font-medium mb-2">Weather Intelligence</div>
              <div className="text-xs opacity-70">Contextual recommendations and booking</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">Weeks 9-12</div>
              <div className="text-sm font-medium mb-2">Voice & Predictive</div>
              <div className="text-xs opacity-70">Advanced AI features and anticipation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;