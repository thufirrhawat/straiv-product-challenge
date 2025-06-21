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
        'Automated push notifications at key intervals: booking confirmation, 7 days out, day before, arrival day',
        'Weather API integration for location-specific packing suggestions and local event feeds',
        'Progressive check-in completion with clear steps and immediate room assignment',
        'Express check-in preparation 4 hours before arrival (room assignment, digital key setup when available)'
      ],
      features: [
        {
          title: 'Pre-Arrival Timeline Dashboard',
          description: 'Visual countdown with actionable steps: complete check-in (day 7), get weather forecast (day 2), activate digital key (arrival day)',
          impact: 'Clear next actions',
          icon: <Clock className="w-5 h-5" />
        },
        {
          title: 'Smart Pre-Arrival Checklist',
          description: 'Weather-based packing tips, local event alerts from city APIs, transport options with real-time data',
          impact: 'Practical preparation',
          icon: <Brain className="w-5 h-5" />
        },
        {
          title: 'Progressive Check-in Flow',
          description: 'Complete profile → select preferences → get room assignment → prepare digital access. Each step unlocks next feature',
          impact: 'Higher completion rates',
          icon: <Target className="w-5 h-5" />
        },
        {
          title: 'Hotel Preview Gallery',
          description: 'Real guest photos by room type, facility walkthroughs, staff introductions, and recent guest testimonials',
          impact: 'Builds anticipation',
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
        'Time-based dashboard: breakfast/weather (6-10am), activities (10am-5pm), dining/entertainment (5-10pm)',
        'Service suggestions based on booking patterns and time-of-day preferences: morning gym bookings → spa offers, dining reservations → late checkout options',
        'Real-time service status updates with PMS integration and staff notification system',
        'Context-aware upselling: check-in → room upgrade, spa booking → package deals, dining → wine pairings'
      ],
      features: [
        {
          title: 'Time-Adaptive Dashboard',
          description: 'Homepage changes by time: Morning shows breakfast hours + weather. Evening shows restaurant availability + events',
          impact: 'Relevant content always',
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          title: 'Predictive Service Alerts',
          description: 'Monitor wait times, suggest optimal spa/dining slots, track service requests. Based on booking history and time-of-day patterns',
          impact: 'Reduced wait times',
          icon: <Bell className="w-5 h-5" />
        },
        {
          title: 'Live Service Status Tracking',
          description: 'PMS integration shows real updates: "Housekeeping notified", "Kitchen received order", "Spa confirms 3pm slot"',
          impact: 'Eliminates uncertainty',
          icon: <CheckCircle className="w-5 h-5" />
        },
        {
          title: 'Contextual Revenue Opportunities',
          description: 'Room upgrade during check-in, spa packages after gym visits, wine recommendations during restaurant bookings',
          impact: 'Natural upselling',
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
        'Automated photo compilation from hotel galleries, guest uploads, and location check-ins during stay',
        'Timed follow-up sequence: immediate thank you, 3-day photo delivery, 2-week local updates, 3-month return offers',
        'One-tap social sharing with branded templates and automatic friend tagging capabilities',
        'Existing loyalty program integration with visible progress tracking and cross-property benefits'
      ],
      features: [
        {
          title: 'Automated Photo Compilation',
          description: 'Generate shareable stay highlights with hotel branding, guest photos, and location memories for social media',
          impact: 'Increases social sharing',
          icon: <Star className="w-5 h-5" />
        },
        {
          title: 'Timed Re-engagement Campaign',
          description: 'Day 3: Thank you + photo compilation. Week 2: Local events happening now. Month 3: Return incentives',
          impact: 'Maintains connection',
          icon: <Calendar className="w-5 h-5" />
        },
        {
          title: 'Loyalty Program Integration',
          description: 'Connect with existing Straiv loyalty system. Show points earned, status progress, and available perks across network',
          impact: 'Leverages existing system',
          icon: <Shield className="w-5 h-5" />
        },
        {
          title: 'Friend Referral System',
          description: 'Share stay experience with contacts, automatic booking links, referral tracking, and mutual incentives',
          impact: 'Drives new bookings',
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
        <h1 className="text-4xl font-bold text-base-content mb-4">
          My Stickiness Strategy
        </h1>
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Journey-Stage Intelligence Framework
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          My core recommendation: Transform Straiv's app from static information portal to journey-aware service platform 
          that adapts content by time and context, integrates with hotel operations, and maintains guest relationships beyond checkout.
        </p>
      </div>

      {/* Journey-Stage Framework */}
      <div className="card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Journey-Aware Service Platform Strategy</h2>
          
          {/* Stage Navigation */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 mb-8">
            {journeyStages.map((stage) => (
              <button 
                key={stage.id}
                className={`btn btn-sm sm:btn-md ${activeTimeline === stage.id ? `btn-${stage.color}` : 'btn-outline'} gap-2 flex-shrink-0 w-full sm:w-auto`}
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