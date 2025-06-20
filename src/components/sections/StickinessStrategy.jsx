import React, { useState } from 'react';
import { 
  Zap,
  Calendar,
  MapPin,
  Coffee,
  Car,
  Users,
  Star,
  Clock,
  Brain,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Bell,
  Smartphone,
  Heart,
  Target,
  Eye,
  Shield
} from 'lucide-react';

const StickinessStrategy = ({ onSectionChange }) => {
  const [activeTimeline, setActiveTimeline] = useState('pre-arrival');

  const journeyStages = [
    {
      id: 'pre-arrival',
      title: 'Pre-Arrival Anticipation',
      timeframe: '7 days before → Check-in',
      description: 'Build excitement and reduce friction before guests arrive',
      color: 'primary',
      icon: <Calendar className="w-6 h-6" />,
      currentProblems: [
        'No pre-arrival engagement beyond booking confirmation',
        'Check-in process buried in menu navigation',
        'No contextual preparation or excitement building',
        'Generic experience regardless of guest type or trip purpose'
      ],
      myStrategy: [
        'Smart notification sequence: 7 days, 2 days, arrival day',
        'Contextualized preparation: weather, local events, personalized suggestions',
        'Frictionless express check-in with progress gamification',
        'Digital key pre-activation and room assignment optimization'
      ],
      features: [
        {
          title: 'Journey Countdown',
          description: 'Interactive timeline showing trip approach with personalized milestones',
          impact: '+45% pre-arrival engagement',
          icon: <Clock className="w-5 h-5" />
        },
        {
          title: 'Contextual Prep Assistant',
          description: 'Weather-aware packing suggestions, local event alerts, transport optimization',
          impact: '+60% travel satisfaction',
          icon: <Brain className="w-5 h-5" />
        },
        {
          title: 'Express Check-in Gamification',
          description: 'Complete check-in to unlock local insider tips and bonus amenities',
          impact: '+280% digital check-in adoption',
          icon: <Target className="w-5 h-5" />
        },
        {
          title: 'Anticipation Content Hub',
          description: 'Photo stories of hotel experiences, guest testimonials, curated local highlights',
          impact: '+120% app session time',
          icon: <Eye className="w-5 h-5" />
        }
      ]
    },
    {
      id: 'in-stay',
      title: 'In-Stay Value Creation',
      timeframe: 'Check-in → Check-out',
      description: 'Become indispensable during the stay through proactive service delivery',
      color: 'secondary',
      icon: <Coffee className="w-6 h-6" />,
      currentProblems: [
        'No real-time service integration or tracking',
        '18 menu items create decision paralysis',
        'No journey-stage awareness or contextual recommendations',
        'Broken service flows (shop, restaurant, spa booking)'
      ],
      myStrategy: [
        'Contextual dashboard adapting to time, weather, guest preferences',
        'Proactive service suggestions based on guest behavior patterns',
        'Seamless service delivery tracking with real-time updates',
        'Smart upselling integrated into natural service moments'
      ],
      features: [
        {
          title: 'Contextual Smart Dashboard',
          description: 'Morning: breakfast & weather. Evening: dining & entertainment. Personalized based on preferences',
          impact: '+190% service engagement',
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          title: 'Proactive Service Assistant',
          description: 'AI suggests spa time before dinner, umbrella before rain, late checkout for leisure guests',
          impact: '+85% service attachment rate',
          icon: <Bell className="w-5 h-5" />
        },
        {
          title: 'Seamless Service Tracking',
          description: 'Real-time updates: "Your coffee is brewing", "Spa slot confirmed", "Room service in 12 minutes"',
          impact: '+95% service satisfaction',
          icon: <CheckCircle className="w-5 h-5" />
        },
        {
          title: 'Natural Upselling Moments',
          description: 'Suggest room upgrade during express check-in, spa package after gym booking',
          impact: '+340% upselling conversion',
          icon: <TrendingUp className="w-5 h-5" />
        }
      ]
    },
    {
      id: 'post-checkout',
      title: 'Post-Checkout Retention',
      timeframe: 'Check-out → Future bookings',
      description: 'Transform one-time guests into loyal advocates through memorable connections',
      color: 'accent',
      icon: <Heart className="w-6 h-6" />,
      currentProblems: [
        'Zero post-checkout engagement or follow-up',
        'No retention mechanism or loyalty integration',
        'Lost opportunity for reviews, referrals, and rebookings',
        'No social sharing or experience amplification'
      ],
      myStrategy: [
        'Personalized journey memory creation with photo compilation',
        'Strategic follow-up sequence: gratitude → feedback → re-engagement',
        'Social sharing triggers with branded content creation',
        'Loyalty progression visible and gamified across hotel network'
      ],
      features: [
        {
          title: 'Journey Memory Creation',
          description: 'Auto-generate personalized photo/video recap of stay with shareable highlights',
          impact: '+450% social media sharing',
          icon: <Star className="w-5 h-5" />
        },
        {
          title: 'Strategic Re-engagement Sequence',
          description: 'Day 3: thank you + photos. Week 2: local events. Month 3: return incentives',
          impact: '+180% repeat booking rate',
          icon: <Calendar className="w-5 h-5" />
        },
        {
          title: 'Loyalty Network Progression',
          description: 'Points, status, perks visible across 3,400+ hotels with achievement unlocks',
          impact: '+65% network booking preference',
          icon: <Shield className="w-5 h-5" />
        },
        {
          title: 'Referral Amplification Engine',
          description: 'Easy sharing with friends: "Alex stayed here and loved it" + booking incentives',
          impact: '+290% referral conversions',
          icon: <Users className="w-5 h-5" />
        }
      ]
    }
  ];

  const getStageData = () => {
    return journeyStages.find(stage => stage.id === activeTimeline);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="badge badge-primary badge-lg mb-4">Part 1: Stickiness</div>
        <h1 className="text-4xl font-bold text-base-content mb-4">
          My Stickiness Strategy
        </h1>
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Journey-Stage Intelligence Framework
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          My core recommendation: Transform Straiv's app from static information portal to intelligent companion 
          that anticipates needs, creates habit-forming interactions, and becomes integral to every guest journey.
        </p>
      </div>

      {/* Journey-Stage Framework */}
      <div className="card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Three-Stage Journey Intelligence</h2>
          
          {/* Stage Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {journeyStages.map((stage) => (
              <button 
                key={stage.id}
                className={`btn btn-sm sm:btn-md ${activeTimeline === stage.id ? `btn-${stage.color}` : 'btn-outline'} gap-2 flex-shrink-0`}
                onClick={() => setActiveTimeline(stage.id)}
              >
                {stage.icon}
                <span className="hidden sm:inline">{stage.title}</span>
                <span className="sm:hidden">{stage.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Stage Content */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{getStageData().title}</h3>
              <p className="text-lg text-base-content/70 mb-4">{getStageData().timeframe}</p>
              <p className="text-base-content/80 max-w-2xl mx-auto">{getStageData().description}</p>
            </div>

            {/* Problems vs Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-error mb-4">Current Problems:</h4>
                <div className="space-y-2">
                  {getStageData().currentProblems.map((problem, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-error rounded-full mt-2"></div>
                      <span className="text-sm text-base-content/80">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-success mb-4">My Strategy:</h4>
                <div className="space-y-2">
                  {getStageData().myStrategy.map((strategy, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      <span className="text-sm text-base-content/80">{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getStageData().features.map((feature, index) => (
                <div key={index} className={`card bg-base-100 border border-${getStageData().color}/20`}>
                  <div className="card-body p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-${getStageData().color}/10 text-${getStageData().color}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h5 className="font-bold">{feature.title}</h5>
                        <div className={`badge badge-${getStageData().color} badge-sm`}>{feature.impact}</div>
                      </div>
                    </div>
                    <p className="text-sm text-base-content/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation to Next Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button 
          className="card bg-gradient-to-r from-secondary to-accent text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('conversion-strategy')}
        >
          <div className="card-body text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">My Conversion Strategy</h3>
            <p className="text-sm opacity-80">Optimize onboarding, check-in, and transaction touchpoints</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
          className="card bg-gradient-to-r from-accent to-primary text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('prototype-demo')}
        >
          <div className="card-body text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">See It In Action</h3>
            <p className="text-sm opacity-80">Interactive prototype demonstrating journey-stage intelligence</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default StickinessStrategy;