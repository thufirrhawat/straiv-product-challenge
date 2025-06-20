import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone,
  Eye,
  Mic,
  Brain,
  Users,
  Calendar,
  Star,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  MessageCircle,
  CheckCircle,
  MapPin,
  Coffee,
  Clock,
  Heart,
  Share2,
  Award,
  TrendingUp,
  Zap,
  Settings
} from 'lucide-react';

const PrototypeDemo = ({ onSectionChange }) => {
  const [activeDemo, setActiveDemo] = useState('journey-intelligence');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef(null);

  const demoCategories = [
    {
      id: 'journey-intelligence',
      title: 'Journey-Stage Intelligence',
      subtitle: 'Pre-arrival → In-stay → Post-checkout',
      icon: <Brain className="w-6 h-6" />,
      color: 'primary',
      description: 'Experience how the app adapts to guest journey stages with contextual content and smart suggestions'
    },
    {
      id: 'conversion-optimization',
      title: 'Conversion Optimization',
      subtitle: 'Onboarding → Check-in → Transactions',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'secondary',
      description: 'See optimized flows that transform user touchpoints into high-converting experiences'
    },
    {
      id: 'ai-voice-features',
      title: 'AI & Voice Features',
      subtitle: 'Intelligent assistant + Voice commands',
      icon: <Mic className="w-6 h-6" />,
      color: 'accent',
      description: 'Interact with rebuilt Hermes AI and voice-controlled hotel services'
    },
    {
      id: 'social-viral',
      title: 'Social & Viral Growth',
      subtitle: 'Referrals → Stories → Achievements',
      icon: <Users className="w-6 h-6" />,
      color: 'success',
      description: 'Experience viral mechanisms that turn guests into brand ambassadors and drive organic growth'
    }
  ];

  const journeySteps = {
    'journey-intelligence': [
      {
        stage: 'Pre-Arrival (7 days before)',
        screen: 'Welcome & Countdown',
        mockup: {
          type: 'countdown',
          title: 'Your Stuttgart Adventure',
          subtitle: '7 days to go! ✈️',
          weather: { temp: '22°C', condition: 'Sunny', icon: '☀️' },
          countdown: { days: 7, hours: 14, minutes: 32 },
          suggestions: [
            { icon: '🎭', title: 'Stuttgart Opera', desc: 'Book tickets for Dec 15th', action: 'Book Now' },
            { icon: '🍷', title: 'Wine Tasting', desc: 'Local vineyard tour available', action: 'Learn More' },
            { icon: '📱', title: 'Express Check-in', desc: 'Complete now to skip lines', action: 'Start' }
          ]
        },
        interaction: 'Tap any suggestion to see personalized recommendations',
        impact: '+60% pre-arrival engagement'
      },
      {
        stage: 'Pre-Arrival (Arrival day)',
        screen: 'Express Check-in',
        mockup: {
          type: 'checkin',
          progress: 85,
          roomStatus: 'Ready for early check-in',
          roomNumber: '413',
          keyStatus: 'Digital key activated',
          weather: { temp: '19°C', condition: 'Light rain', icon: '🌧️' },
          suggestions: [
            { icon: '☂️', title: 'Umbrella Service', desc: 'Complimentary at front desk', urgent: true },
            { icon: '🚗', title: 'Airport Transfer', desc: 'Arriving in 25 minutes', status: 'tracking' }
          ],
          actions: [
            { text: 'Complete Check-in', primary: true },
            { text: 'Room Preferences', secondary: true }
          ]
        },
        interaction: 'Tap "Complete Check-in" to finish in one tap',
        impact: '+280% digital check-in adoption'
      },
      {
        stage: 'In-Stay (Morning)',
        screen: 'Smart Dashboard',
        mockup: {
          type: 'dashboard',
          time: '8:30 AM',
          weather: { temp: '16°C', condition: 'Cloudy', icon: '☁️' },
          greeting: 'Good morning, Alex!',
          contextualCards: [
            { 
              icon: '☕', 
              title: 'Perfect Coffee Weather', 
              desc: 'Room service coffee + pastries?', 
              action: 'Order Now',
              highlight: true,
              price: '€12'
            },
            { 
              icon: '🏛️', 
              title: 'Mercedes-Benz Museum', 
              desc: 'Indoor activity for cloudy day', 
              action: 'Get Tickets',
              price: '€10 (Guest discount)'
            },
            { 
              icon: '💆', 
              title: 'Spa Relaxation', 
              desc: 'Cozy day spa package', 
              action: 'Book Now',
              price: '€85'
            }
          ],
          quickActions: ['🗣️ Voice Assistant', '🔑 Room Controls', '📞 Concierge']
        },
        interaction: 'Say "Order coffee to room 413" or tap the coffee card',
        impact: '+190% service engagement'
      },
      {
        stage: 'Post-Checkout',
        screen: 'Journey Memory',
        mockup: {
          type: 'memory',
          title: 'Your Stuttgart Story',
          photos: ['🏨', '🍷', '🎭', '🏛️'],
          achievements: [
            { badge: '🏆', title: 'Stuttgart Explorer', desc: 'Visited 5 local attractions' },
            { badge: '🍷', title: 'Wine Connoisseur', desc: 'Tried 3 regional wines' },
            { badge: '⭐', title: 'VIP Guest', desc: 'Perfect stay rating' }
          ],
          stats: { nights: 3, services: 8, savings: '€45' },
          sharing: {
            platforms: ['📱 Instagram', '📘 Facebook', '🐦 Twitter'],
            friends: ['👤 Sarah', '👤 Mike', '👤 Lisa']
          }
        },
        interaction: 'Share your story and invite friends for 20% off',
        impact: '+450% social sharing'
      }
    ],
    'conversion-optimization': [
      {
        stage: 'Onboarding Flow',
        screen: 'Smart Registration',
        mockup: {
          type: 'onboarding',
          step: 1,
          totalSteps: 3,
          title: 'Welcome to Hotel Straiv',
          subtitle: 'Let\'s personalize your stay',
          form: {
            fields: [
              { label: 'First Name', value: 'Alex', type: 'text' },
              { label: 'Email', value: 'alex@email.com', type: 'email' },
              { label: 'Phone', value: '+49 123 456 789', type: 'tel' }
            ],
            socialOptions: ['🔗 Continue with Google', '📘 Continue with Facebook'],
            benefits: [
              { icon: '⚡', text: 'Express check-in ready' },
              { icon: '🎯', text: 'Personalized recommendations' },
              { icon: '🏆', text: 'Loyalty points & rewards' }
            ]
          }
        },
        interaction: 'Tap "Continue with Google" for 1-tap registration',
        impact: '+340% registration completion'
      },
      {
        stage: 'Check-in Optimization',
        screen: 'Frictionless Check-in',
        mockup: {
          type: 'checkin-flow',
          progress: 95,
          title: 'Almost Ready!',
          currentStep: 'Room Preferences',
          preferences: [
            { icon: '🛏️', label: 'Bed Type', selected: 'King Size', options: ['King Size', 'Twin Beds'] },
            { icon: '🌡️', label: 'Temperature', selected: '22°C', slider: true },
            { icon: '☕', label: 'Welcome Amenity', selected: 'Coffee & Pastries', options: ['Coffee & Pastries', 'Wine & Cheese', 'Fresh Fruit'] }
          ],
          upsells: [
            { 
              icon: '🏨', 
              title: 'Room Upgrade', 
              desc: 'City view suite for €25/night', 
              originalPrice: '€45', 
              discountPrice: '€25',
              highlight: true 
            },
            { 
              icon: '🍳', 
              title: 'Breakfast Package', 
              desc: 'Daily breakfast for two', 
              price: '€18/day' 
            }
          ]
        },
        interaction: 'Accept the room upgrade offer with one tap',
        impact: '+180% upsell conversion'
      },
      {
        stage: 'In-App Transactions',
        screen: 'Smart Ordering',
        mockup: {
          type: 'ordering',
          category: 'Room Service',
          time: '2:30 PM',
          weather: { temp: '24°C', condition: 'Sunny', icon: '☀️' },
          recommendations: [
            {
              icon: '🥗',
              title: 'Light Summer Salad',
              desc: 'Perfect for sunny weather',
              price: '€14',
              time: '15 min',
              rating: 4.8,
              highlight: true,
              weatherMatch: true
            },
            {
              icon: '🍹',
              title: 'Refreshing Smoothie',
              desc: 'Mango & passion fruit',
              price: '€8',
              time: '5 min',
              rating: 4.9,
              popular: true
            }
          ],
          cart: {
            items: 1,
            total: '€14',
            delivery: 'Free to room 413',
            time: '15 minutes'
          },
          paymentMethods: ['💳 Room Charge', '📱 Apple Pay', '💰 Loyalty Points (1,200 pts)']
        },
        interaction: 'Order with loyalty points for instant gratification',
        impact: '+220% transaction frequency'
             }
     ],
    'ai-voice-features': [
      {
        stage: 'AI Chat Assistant',
        screen: 'Hermes AI',
        mockup: {
          type: 'ai-chat',
          conversation: [
            { sender: 'user', message: 'I need restaurant recommendations for tonight', time: '2:15 PM' },
            { 
              sender: 'ai', 
              message: 'Based on your preferences and the weather (sunny, 24°C), I recommend these options:', 
              time: '2:15 PM',
              suggestions: [
                { name: 'Zirbelstube', type: 'Traditional German', rating: 4.8, distance: '5 min walk', weather: 'Outdoor seating available' },
                { name: 'Cube Restaurant', type: 'Modern European', rating: 4.9, distance: '10 min walk', weather: 'Rooftop terrace' }
              ]
            }
          ],
          typing: true,
          quickReplies: ['Book a table', 'More options', 'Directions', 'Call restaurant']
        },
        interaction: 'AI knows your preferences, weather, and location context',
        impact: '+340% query resolution'
      },
      {
        stage: 'Voice Commands',
        screen: 'Voice Control',
        mockup: {
          type: 'voice',
          status: 'listening',
          waveform: [3, 7, 4, 8, 2, 9, 5, 6, 3, 7],
          lastCommand: 'Set room temperature to 22 degrees',
          response: 'Temperature set to 22°C. Adjusting climate control now.',
          suggestions: [
            '🗣️ "Order room service"',
            '🗣️ "Book spa appointment"',
            '🗣️ "Call housekeeping"',
            '🗣️ "Dim the lights"'
          ]
        },
        interaction: 'Say "Set room temperature to 22 degrees" for instant control',
        impact: '+420% accessibility'
      },
      {
        stage: 'Predictive Intelligence',
        screen: 'Smart Predictions',
        mockup: {
          type: 'predictions',
          weather: { current: '24°C Sunny', forecast: 'Rain at 6 PM' },
          predictions: [
            { 
              icon: '☂️', 
              title: 'Rain Alert', 
              desc: 'Rain expected at 6 PM. Umbrella available at front desk.', 
              action: 'Reserve Umbrella',
              confidence: 95,
              urgent: true
            },
            { 
              icon: '🍽️', 
              title: 'Dinner Suggestion', 
              desc: 'Based on weather, indoor dining recommended.', 
              action: 'View Restaurants',
              confidence: 87
            },
            { 
              icon: '🚗', 
              title: 'Transport Tip', 
              desc: 'Book taxi 30 min early due to rain.', 
              action: 'Book Taxi',
              confidence: 92
            }
          ]
        },
        interaction: 'App proactively suggests umbrella before rain',
        impact: '+220% service relevance'
      }
    ],
    'social-viral': [
      {
        stage: 'Achievement System',
        screen: 'Badge Collection',
        mockup: {
          type: 'achievements',
          newBadge: { name: 'Stuttgart Explorer', icon: '🏆', desc: 'Visited 5 local attractions' },
          progress: { current: 5, target: 5, complete: true },
          badges: [
            { name: 'Early Bird', icon: '🌅', desc: 'Checked in before 2 PM', earned: true },
            { name: 'Foodie', icon: '🍽️', desc: 'Tried 3 local restaurants', earned: true },
            { name: 'Culture Buff', icon: '🎭', desc: 'Visited museum & opera', earned: true },
            { name: 'Social Butterfly', icon: '🦋', desc: 'Share 3 experiences', progress: '2/3' }
          ],
          rewards: [
            { title: '20% off next stay', desc: 'For earning 5 badges', available: true },
            { title: 'Free room upgrade', desc: 'For sharing your story', locked: true }
          ]
        },
        interaction: 'Unlock "Stuttgart Explorer" badge and get 20% off next stay',
        impact: '+320% repeat engagement'
      },
      {
        stage: 'Story Generation',
        screen: 'Journey Story',
        mockup: {
          type: 'story',
          title: 'My Stuttgart Adventure',
          photos: [
            { src: '🏨', caption: 'Arrived at beautiful Hotel Straiv' },
            { src: '🍷', caption: 'Wine tasting in local vineyard' },
            { src: '🎭', caption: 'Amazing opera performance' },
            { src: '🏛️', caption: 'Mercedes-Benz Museum visit' }
          ],
          stats: { days: 3, activities: 8, newPlaces: 12 },
          highlights: [
            '🏆 Earned Stuttgart Explorer badge',
            '🍷 Discovered amazing local wines',
            '⭐ Perfect 5-star stay experience'
          ],
          shareOptions: [
            { platform: 'Instagram', followers: 1200 },
            { platform: 'Facebook', friends: 350 },
            { platform: 'Twitter', followers: 800 }
          ]
        },
        interaction: 'Share your auto-generated story to unlock rewards',
        impact: '+450% social media sharing'
      },
      {
        stage: 'Friend Referrals',
        screen: 'Invite Friends',
        mockup: {
          type: 'referrals',
          yourRewards: { earned: '€150', pending: '€75' },
          friendsRewards: { discount: '25%', bonusPoints: 500 },
          inviteMessage: 'Just had an amazing stay in Stuttgart! 🏆 Earned the Explorer badge. Book through my link for 25% off + bonus points!',
          contacts: [
            { name: 'Sarah M.', status: 'invited', reward: '€25 pending' },
            { name: 'Mike K.', status: 'booked', reward: '€50 earned' },
            { name: 'Lisa T.', status: 'stayed', reward: '€75 earned' }
          ],
          shareChannels: ['📱 WhatsApp', '📧 Email', '📋 Copy Link', '📱 SMS']
        },
        interaction: 'Invite friends with your Stuttgart Explorer achievement',
        impact: '+280% referral conversion'
      },
      {
        stage: 'Social Proof',
        screen: 'Live Activity',
        mockup: {
          type: 'social-feed',
          liveStats: { guestsToday: 23, checkinsNow: 3, activitiesBooked: 47 },
          activities: [
            { 
              user: 'Sarah K.', 
              action: 'earned Wine Connoisseur badge', 
              time: '2 min ago', 
              location: 'Stuttgart',
              reaction: '🍷'
            },
            { 
              user: 'Mike R.', 
              action: 'shared their Stuttgart story', 
              time: '5 min ago', 
              likes: 12,
              reaction: '📸'
            },
            { 
              user: 'Anonymous', 
              action: 'rated spa experience 5 stars', 
              time: '8 min ago', 
              reaction: '⭐'
            }
          ],
          trending: [
            { activity: 'Mercedes-Benz Museum', bookings: 8, rating: 4.9 },
            { activity: 'Local Wine Tasting', bookings: 6, rating: 4.8 },
            { activity: 'Spa Package', bookings: 12, rating: 4.9 }
          ]
        },
        interaction: 'See what other guests are experiencing right now',
        impact: '+125% booking confidence'
      }
    ]
  };

  const getActiveSteps = () => {
    return journeySteps[activeDemo] || [];
  };

  const getCurrentStep = () => {
    return getActiveSteps()[currentStep];
  };

  const nextStep = () => {
    const steps = getActiveSteps();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Clean up interval when component unmounts or demo changes
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle auto-progression when playing
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentStep(prev => {
          const steps = getActiveSteps();
          if (prev < steps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, activeDemo]);

  const renderMockup = (mockup) => {
    if (!mockup) return null;

    switch (mockup.type) {
      case 'countdown':
        return (
          <div className="space-y-4">
            {/* Header with weather */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{mockup.title}</h3>
                <p className="text-sm text-gray-600">{mockup.subtitle}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl">{mockup.weather.icon}</div>
                <div className="text-sm font-medium">{mockup.weather.temp}</div>
              </div>
            </div>

            {/* Countdown */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg text-center">
              <div className="flex justify-center space-x-4">
                <div><div className="text-2xl font-bold">{mockup.countdown.days}</div><div className="text-xs">DAYS</div></div>
                <div><div className="text-2xl font-bold">{mockup.countdown.hours}</div><div className="text-xs">HRS</div></div>
                <div><div className="text-2xl font-bold">{mockup.countdown.minutes}</div><div className="text-xs">MIN</div></div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="space-y-3">
              {mockup.suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{suggestion.icon}</span>
                    <div>
                      <div className="font-medium text-gray-900">{suggestion.title}</div>
                      <div className="text-sm text-gray-600">{suggestion.desc}</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                    {suggestion.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'checkin':
        return (
          <div className="space-y-4">
            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Check-in Progress</span>
                <span className="text-blue-600 font-medium">{mockup.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: `${mockup.progress}%`}}></div>
              </div>
            </div>

            {/* Room info */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Room {mockup.roomNumber}</div>
                  <div className="text-sm text-green-700">{mockup.roomStatus}</div>
                  <div className="text-xs text-gray-600 mt-1">{mockup.keyStatus}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg">{mockup.weather.icon}</div>
                  <div className="text-sm">{mockup.weather.temp}</div>
                </div>
              </div>
            </div>

            {/* Contextual suggestions */}
            <div className="space-y-2">
              {mockup.suggestions.map((suggestion, index) => (
                <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${suggestion.urgent ? 'bg-amber-50 border border-amber-200' : 'bg-gray-50'}`}>
                  <span className="text-xl">{suggestion.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{suggestion.title}</div>
                    <div className="text-sm text-gray-600">{suggestion.desc}</div>
                  </div>
                  {suggestion.status && <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Live</div>}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2">
              {mockup.actions.map((action, index) => (
                <button key={index} className={`w-full py-3 rounded-lg font-medium ${action.primary ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
                  {action.text}
                </button>
              ))}
            </div>
          </div>
        );

      case 'dashboard':
        return (
          <div className="space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-bold text-gray-900">{mockup.greeting}</div>
                <div className="text-sm text-gray-600">{mockup.time}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl">{mockup.weather.icon}</div>
                <div className="text-sm">{mockup.weather.temp}</div>
              </div>
            </div>

            {/* Contextual cards */}
            <div className="space-y-3">
              {mockup.contextualCards.map((card, index) => (
                <div key={index} className={`p-4 rounded-lg border ${card.highlight ? 'bg-blue-50 border-blue-200 ring-2 ring-blue-100' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{card.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900">{card.title}</div>
                        <div className="text-sm text-gray-600">{card.desc}</div>
                        {card.price && <div className="text-sm font-medium text-green-600 mt-1">{card.price}</div>}
                      </div>
                    </div>
                    <button className={`px-3 py-1 text-xs rounded-full ${card.highlight ? 'bg-blue-600 text-white' : 'bg-gray-600 text-white'}`}>
                      {card.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {mockup.quickActions.map((action, index) => (
                <button key={index} className="p-3 bg-gray-100 rounded-lg text-center text-sm">
                  {action}
                </button>
              ))}
            </div>
          </div>
        );

      case 'memory':
        return (
          <div className="space-y-4">
            {/* Header */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900">{mockup.title}</h3>
              <div className="flex justify-center space-x-2 mt-2">
                {mockup.photos.map((photo, index) => (
                  <div key={index} className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xl">
                    {photo}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{mockup.stats.nights}</div>
                <div className="text-xs text-gray-600">Nights</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{mockup.stats.services}</div>
                <div className="text-xs text-gray-600">Services</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{mockup.stats.savings}</div>
                <div className="text-xs text-gray-600">Saved</div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              {mockup.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <span className="text-2xl">{achievement.badge}</span>
                  <div>
                    <div className="font-medium text-gray-900">{achievement.title}</div>
                    <div className="text-sm text-gray-600">{achievement.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sharing */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-900">Share your story:</div>
              <div className="grid grid-cols-3 gap-2">
                {mockup.sharing.platforms.map((platform, index) => (
                  <button key={index} className="p-2 bg-gray-100 rounded-lg text-center text-xs">
                    {platform}
                  </button>
                ))}
              </div>
              <div className="text-sm text-gray-600">Invite friends: {mockup.sharing.friends.join(', ')}</div>
            </div>
          </div>
        );

      case 'onboarding':
        return (
          <div className="space-y-4">
            {/* Progress */}
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Step {mockup.step} of {mockup.totalSteps}</div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-blue-600 h-1 rounded-full" style={{width: `${(mockup.step/mockup.totalSteps)*100}%`}}></div>
              </div>
            </div>

            {/* Header */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900">{mockup.title}</h3>
              <p className="text-sm text-gray-600">{mockup.subtitle}</p>
            </div>

            {/* Benefits */}
            <div className="space-y-2">
              {mockup.form.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                  <span className="text-lg">{benefit.icon}</span>
                  <span className="text-sm text-gray-800">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Social Login */}
            <div className="space-y-2">
              {mockup.form.socialOptions.map((option, index) => (
                <button key={index} className="w-full py-3 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200">
                  {option}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-xs text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Form Fields */}
            <div className="space-y-3">
              {mockup.form.fields.map((field, index) => (
                <div key={index}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">{field.label}</label>
                  <input 
                    type={field.type} 
                    value={field.value} 
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-gray-50"
                    readOnly
                  />
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium">
              Continue
            </button>
          </div>
        );

      case 'checkin-flow':
        return (
          <div className="space-y-4">
            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">{mockup.title}</span>
                <span className="text-blue-600 font-medium">{mockup.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: `${mockup.progress}%`}}></div>
              </div>
            </div>

            {/* Current Step */}
            <div className="text-center">
              <h3 className="font-bold text-gray-900">{mockup.currentStep}</h3>
            </div>

            {/* Preferences */}
            <div className="space-y-3">
              {mockup.preferences.map((pref, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{pref.icon}</span>
                      <span className="text-sm font-medium text-gray-900">{pref.label}</span>
                    </div>
                    <div className="text-sm text-blue-600 font-medium">{pref.selected}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Upsells */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-900">Special Offers</div>
              {mockup.upsells.map((upsell, index) => (
                <div key={index} className={`p-3 rounded-lg border ${upsell.highlight ? 'bg-yellow-50 border-yellow-200 ring-2 ring-yellow-100' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <span className="text-xl">{upsell.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900">{upsell.title}</div>
                        <div className="text-sm text-gray-600">{upsell.desc}</div>
                        <div className="flex items-center space-x-2 mt-1">
                          {upsell.originalPrice && <span className="text-sm text-gray-500 line-through">{upsell.originalPrice}</span>}
                          <span className="text-sm font-medium text-green-600">{upsell.discountPrice || upsell.price}</span>
                        </div>
                      </div>
                    </div>
                    <button className={`px-3 py-1 text-xs rounded-full ${upsell.highlight ? 'bg-yellow-600 text-white' : 'bg-gray-600 text-white'}`}>
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium">
              Complete Check-in
            </button>
          </div>
        );

      case 'ordering':
        return (
          <div className="space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-gray-900">{mockup.category}</h3>
                <p className="text-sm text-gray-600">{mockup.time}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl">{mockup.weather.icon}</div>
                <div className="text-sm">{mockup.weather.temp}</div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-900">Recommended for you</div>
              {mockup.recommendations.map((item, index) => (
                <div key={index} className={`p-3 rounded-lg border ${item.highlight ? 'bg-blue-50 border-blue-200 ring-2 ring-blue-100' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{item.title}</span>
                          {item.weatherMatch && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Weather Match</span>}
                          {item.popular && <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Popular</span>}
                        </div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm font-medium text-green-600">{item.price}</span>
                          <span className="text-xs text-gray-500">{item.time}</span>
                          <span className="text-xs text-yellow-600">★ {item.rating}</span>
                        </div>
                      </div>
                    </div>
                    <button className={`px-3 py-1 text-xs rounded-full ${item.highlight ? 'bg-blue-600 text-white' : 'bg-gray-600 text-white'}`}>
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart */}
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900">Cart ({mockup.cart.items} item)</span>
                <span className="text-lg font-bold text-green-600">{mockup.cart.total}</span>
              </div>
              <div className="text-xs text-gray-600">{mockup.cart.delivery}</div>
              <div className="text-xs text-gray-600">Estimated: {mockup.cart.time}</div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900">Payment Method</div>
              {mockup.paymentMethods.map((method, index) => (
                <button key={index} className="w-full p-2 bg-gray-100 rounded-lg text-left text-sm">
                  {method}
                </button>
              ))}
            </div>

            <button className="w-full py-3 bg-green-600 text-white rounded-lg font-medium">
              Place Order
            </button>
          </div>
        );

      case 'ai-chat':
        return (
          <div className="space-y-4">
            {/* Chat Header */}
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border-b">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">AI</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Hermes Assistant</div>
                <div className="text-xs text-green-600">● Online</div>
              </div>
            </div>

            {/* Conversation */}
            <div className="space-y-3">
              {mockup.conversation.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                    <div className="text-sm">{msg.message}</div>
                    <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}

              {/* AI Suggestions */}
              {mockup.conversation[1]?.suggestions && (
                <div className="space-y-2">
                  {mockup.conversation[1].suggestions.map((suggestion, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-gray-900">{suggestion.name}</div>
                          <div className="text-sm text-gray-600">{suggestion.type}</div>
                          <div className="text-xs text-gray-500 mt-1">{suggestion.distance} • ★ {suggestion.rating}</div>
                          <div className="text-xs text-green-600">{suggestion.weather}</div>
                        </div>
                        <button className="px-2 py-1 bg-blue-600 text-white text-xs rounded">Book</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Typing indicator */}
              {mockup.typing && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            <div className="grid grid-cols-2 gap-2">
              {mockup.quickReplies.map((reply, index) => (
                <button key={index} className="p-2 bg-gray-100 rounded-lg text-sm text-center">
                  {reply}
                </button>
              ))}
            </div>
          </div>
        );

      case 'voice':
        return (
          <div className="space-y-4">
            {/* Voice Status */}
            <div className="text-center">
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${mockup.status === 'listening' ? 'bg-red-100 animate-pulse' : 'bg-gray-100'}`}>
                <span className="text-2xl">🎤</span>
              </div>
              <div className="mt-2 text-sm font-medium text-gray-900">
                {mockup.status === 'listening' ? 'Listening...' : 'Tap to speak'}
              </div>
            </div>

            {/* Waveform */}
            {mockup.waveform && (
              <div className="flex justify-center items-end space-x-1 h-12">
                {mockup.waveform.map((height, index) => (
                  <div 
                    key={index} 
                    className="w-1 bg-blue-600 rounded animate-pulse" 
                    style={{height: `${height * 4}px`}}
                  ></div>
                ))}
              </div>
            )}

            {/* Last Command */}
            {mockup.lastCommand && (
              <div className="p-3 bg-blue-50 rounded-lg border">
                <div className="text-xs text-gray-600 mb-1">You said:</div>
                <div className="text-sm font-medium text-gray-900">"{mockup.lastCommand}"</div>
              </div>
            )}

            {/* Response */}
            {mockup.response && (
              <div className="p-3 bg-green-50 rounded-lg border">
                <div className="text-xs text-gray-600 mb-1">Assistant:</div>
                <div className="text-sm text-gray-900">{mockup.response}</div>
              </div>
            )}

            {/* Voice Suggestions */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900">Try saying:</div>
              {mockup.suggestions.map((suggestion, index) => (
                <button key={index} className="w-full p-2 bg-gray-100 rounded-lg text-left text-sm">
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        );

      case 'predictions':
        return (
          <div className="space-y-4">
            {/* Weather Context */}
            <div className="p-3 bg-blue-50 rounded-lg border">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium text-gray-900">Current Weather</div>
                  <div className="text-xs text-gray-600">{mockup.weather.current}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">Forecast</div>
                  <div className="text-xs text-gray-600">{mockup.weather.forecast}</div>
                </div>
              </div>
            </div>

            {/* Predictions */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-900">Smart Predictions</div>
              {mockup.predictions.map((prediction, index) => (
                <div key={index} className={`p-3 rounded-lg border ${prediction.urgent ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <span className="text-xl">{prediction.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900">{prediction.title}</div>
                        <div className="text-sm text-gray-600">{prediction.desc}</div>
                        <div className="text-xs text-gray-500 mt-1">{prediction.confidence}% confidence</div>
                      </div>
                    </div>
                    <button className={`px-3 py-1 text-xs rounded-full ${prediction.urgent ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'}`}>
                      {prediction.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-4">
            {/* New Badge Celebration */}
            {mockup.newBadge && (
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-4xl mb-2">{mockup.newBadge.icon}</div>
                <div className="font-bold text-gray-900">Congratulations!</div>
                <div className="text-sm text-gray-600">You earned: {mockup.newBadge.name}</div>
                <div className="text-xs text-gray-500 mt-1">{mockup.newBadge.desc}</div>
              </div>
            )}

            {/* Progress */}
            <div className="p-3 bg-green-50 rounded-lg border">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900">Achievement Progress</span>
                <span className="text-sm text-green-600">{mockup.progress.current}/{mockup.progress.target}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>

            {/* Badge Collection */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900">Your Badges</div>
              {mockup.badges.map((badge, index) => (
                <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg border ${badge.earned ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}>
                  <span className={`text-2xl ${!badge.earned ? 'grayscale opacity-50' : ''}`}>{badge.icon}</span>
                  <div className="flex-1">
                    <div className={`font-medium ${badge.earned ? 'text-gray-900' : 'text-gray-500'}`}>{badge.name}</div>
                    <div className="text-sm text-gray-600">{badge.desc}</div>
                    {badge.progress && <div className="text-xs text-blue-600 mt-1">Progress: {badge.progress}</div>}
                  </div>
                  {badge.earned && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Earned</span>}
                </div>
              ))}
            </div>

            {/* Rewards */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900">Available Rewards</div>
              {mockup.rewards.map((reward, index) => (
                <div key={index} className={`p-3 rounded-lg border ${reward.available ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className={`font-medium ${reward.available ? 'text-gray-900' : 'text-gray-500'}`}>{reward.title}</div>
                      <div className="text-sm text-gray-600">{reward.desc}</div>
                    </div>
                    <button className={`px-3 py-1 text-xs rounded-full ${reward.available ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-500'}`} disabled={!reward.available}>
                      {reward.available ? 'Claim' : 'Locked'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'story':
        return (
          <div className="space-y-4">
            {/* Story Header */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900">{mockup.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                {mockup.photos.map((photo, index) => (
                  <div key={index} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-2xl">
                    {photo.src}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{mockup.stats.days}</div>
                <div className="text-xs text-gray-600">Days</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{mockup.stats.activities}</div>
                <div className="text-xs text-gray-600">Activities</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{mockup.stats.newPlaces}</div>
                <div className="text-xs text-gray-600">New Places</div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900">Story Highlights</div>
              {mockup.highlights.map((highlight, index) => (
                <div key={index} className="p-2 bg-yellow-50 rounded-lg text-sm text-gray-800">
                  {highlight}
                </div>
              ))}
            </div>

            {/* Share Options */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-900">Share your story:</div>
              {mockup.shareOptions.map((option, index) => (
                <button key={index} className="w-full p-3 bg-gray-100 rounded-lg text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{option.platform}</span>
                    <span className="text-xs text-gray-500">{option.followers || option.friends} {option.followers ? 'followers' : 'friends'}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'referrals':
        return (
          <div className="space-y-4">
            {/* Rewards Summary */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">{mockup.yourRewards.earned}</div>
                <div className="text-xs text-gray-600">Earned</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{mockup.yourRewards.pending}</div>
                <div className="text-xs text-gray-600">Pending</div>
              </div>
            </div>

            {/* Friend Benefits */}
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="text-sm font-medium text-gray-900 mb-2">Your friends get:</div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">{mockup.friendsRewards.discount} off first stay</span>
                <span className="text-sm text-gray-700">{mockup.friendsRewards.bonusPoints} bonus points</span>
              </div>
            </div>

            {/* Invite Message */}
            <div className="p-3 bg-gray-50 rounded-lg border">
              <div className="text-xs text-gray-600 mb-2">Your invite message:</div>
              <div className="text-sm text-gray-900">{mockup.inviteMessage}</div>
            </div>

            {/* Contact Status */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900">Invitation Status</div>
              {mockup.contacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                  <div>
                    <div className="font-medium text-gray-900">{contact.name}</div>
                    <div className="text-xs text-gray-500 capitalize">{contact.status}</div>
                  </div>
                  <div className="text-sm text-green-600">{contact.reward}</div>
                </div>
              ))}
            </div>

            {/* Share Channels */}
            <div className="grid grid-cols-2 gap-2">
              {mockup.shareChannels.map((channel, index) => (
                <button key={index} className="p-2 bg-blue-600 text-white rounded-lg text-sm text-center">
                  {channel}
                </button>
              ))}
            </div>
          </div>
        );

      case 'social-feed':
        return (
          <div className="space-y-4">
            {/* Live Stats */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-600">{mockup.liveStats.guestsToday}</div>
                <div className="text-xs text-gray-600">Guests Today</div>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <div className="text-lg font-bold text-green-600">{mockup.liveStats.checkinsNow}</div>
                <div className="text-xs text-gray-600">Checking In</div>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <div className="text-lg font-bold text-purple-600">{mockup.liveStats.activitiesBooked}</div>
                <div className="text-xs text-gray-600">Activities</div>
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-900">Live Activity</div>
              {mockup.activities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border">
                  <span className="text-xl">{activity.reaction}</span>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                    {activity.likes && <div className="text-xs text-blue-600 mt-1">❤️ {activity.likes} likes</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* Trending Activities */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900">Trending Now</div>
              {mockup.trending.map((trend, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div>
                    <div className="font-medium text-gray-900">{trend.activity}</div>
                    <div className="text-xs text-gray-600">{trend.bookings} bookings today</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-yellow-600">★ {trend.rating}</div>
                    <button className="text-xs bg-yellow-600 text-white px-2 py-1 rounded mt-1">Book</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div className="text-center text-gray-500">Mockup type not found</div>;
    }
  };

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
  };

  const stopDemo = () => {
    setIsPlaying(false);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="badge badge-accent badge-lg mb-4">Interactive Demo</div>
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Experience My Strategy in Action
        </h1>
        <h2 className="text-2xl font-semibold text-accent mb-6">
          Interactive Prototypes Demonstrating Key Features
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          Step through interactive demonstrations of journey-stage intelligence, conversion optimization, 
          AI features, and viral growth mechanics. See exactly how each strategy transforms the guest experience.
        </p>
      </div>

      {/* Demo Category Selection */}
      <div className="card bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 border border-accent/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {demoCategories.map((category) => (
              <button 
                key={category.id}
                className={`btn ${activeDemo === category.id ? `btn-${category.color}` : 'btn-outline'} h-auto py-4`}
                onClick={() => {
                  setActiveDemo(category.id);
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
              >
                <div className="text-center">
                  {category.icon}
                  <div className="text-sm font-bold mt-2">{category.title}</div>
                  <div className="text-xs mt-1 opacity-70">{category.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Demo Description */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">
              {demoCategories.find(cat => cat.id === activeDemo)?.title}
            </h3>
            <p className="text-base-content/70">
              {demoCategories.find(cat => cat.id === activeDemo)?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Demo Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mobile Mockup */}
        <div className="lg:col-span-2">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Mobile Experience</h3>
                <div className="text-sm text-base-content/60">
                  {getCurrentStep() ? getCurrentStep().screen : 'Select a demo to begin'}
                </div>
              </div>

              {/* Phone Mockup - Larger Fixed Size */}
              <div className="mx-auto" style={{width: '400px', height: '800px'}}>
                <div className="relative bg-gray-800 rounded-3xl p-3 shadow-2xl w-full h-full">
                  <div className="bg-white rounded-2xl overflow-hidden text-gray-900 w-full h-full flex flex-col">
                    {/* Phone Header - Fixed Height */}
                    <div className="bg-primary text-white text-center flex-shrink-0" style={{height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <div className="text-base font-semibold">Straiv Guest App</div>
                      <div className="text-sm opacity-80">Hotel Stuttgart ★★★★</div>
                    </div>

                    {/* Content Area - Fixed Height */}
                    <div className="flex-1 flex flex-col" style={{height: 'calc(100% - 80px)'}}>
                      {/* Current Step Content */}
                      {getCurrentStep() && (
                        <div key={`${activeDemo}-${currentStep}`} className="flex-1 flex flex-col p-4 bg-white" style={{height: '100%'}}>
                          {/* Header - Fixed Height */}
                          <div className="text-center animate-fade-in flex-shrink-0" style={{height: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <div className="badge badge-primary mb-2 text-white text-sm">{getCurrentStep().stage}</div>
                            <h4 className="text-base font-bold text-gray-900">{getCurrentStep().screen}</h4>
                          </div>

                          {/* Scrollable Content - Fixed Height with Hidden Scrollbar */}
                          <div 
                            className="animate-fade-in scrollbar-hide" 
                            style={{
                              height: 'calc(100% - 180px)', 
                              overflowY: 'auto',
                              scrollbarWidth: 'none',
                              msOverflowStyle: 'none'
                            }}
                          >
                            {renderMockup(getCurrentStep().mockup)}
                          </div>

                          {/* Footer - Fixed Height */}
                          <div className="flex-shrink-0" style={{height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            {/* Interaction Prompt */}
                            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="flex items-center gap-2 mb-1">
                                <Eye className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-semibold text-blue-900">Try This:</span>
                              </div>
                              <p className="text-sm text-blue-800">{getCurrentStep().interaction}</p>
                            </div>

                            {/* Impact Metric */}
                            <div className="text-center">
                              <div className="badge badge-success text-white font-semibold text-sm">{getCurrentStep().impact}</div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Default state when no step is selected */}
                      {!getCurrentStep() && (
                        <div className="flex-1 flex flex-col p-4 bg-white" style={{height: '100%'}}>
                          {/* Main Content - Fixed Height */}
                          <div className="flex items-center justify-center" style={{height: 'calc(100% - 120px)'}}>
                            <div className="text-center">
                              <Smartphone className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                              <h4 className="text-xl font-bold text-gray-900 mb-3">Select a Demo</h4>
                              <p className="text-base text-gray-600">Choose a strategy category above to see the mobile app flow</p>
                            </div>
                          </div>
                          
                          {/* Footer - Fixed Height */}
                          <div className="flex-shrink-0" style={{height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 opacity-50">
                              <div className="flex items-center gap-2 mb-1">
                                <Eye className="w-4 h-4 text-gray-400" />
                                <span className="text-sm font-semibold text-gray-500">Interaction:</span>
                              </div>
                              <p className="text-sm text-gray-500">Select a category to see interactive demo</p>
                            </div>

                            <div className="text-center">
                              <div className="badge badge-ghost text-gray-500 font-semibold text-sm">Ready to explore</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Controls & Info */}
        <div className="space-y-6">
          {/* Navigation Controls */}
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h4 className="font-bold mb-4">Flow Navigation</h4>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <button 
                    className="btn btn-sm btn-outline flex-1"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                  >
                    ← Previous
                  </button>
                  <button 
                    className="btn btn-sm btn-outline flex-1"
                    onClick={nextStep}
                    disabled={currentStep === getActiveSteps().length - 1}
                  >
                    Next →
                  </button>
                </div>

                {getActiveSteps().length > 0 && (
                  <div className="flex gap-2">
                    {!isPlaying ? (
                      <button 
                        className="btn btn-sm btn-primary flex-1"
                        onClick={startDemo}
                      >
                        <Play className="w-3 h-3 mr-1" />
                        Auto-Play
                      </button>
                    ) : (
                      <button 
                        className="btn btn-sm btn-warning flex-1"
                        onClick={stopDemo}
                      >
                        <Pause className="w-3 h-3 mr-1" />
                        Stop
                      </button>
                    )}
                    <button 
                      className="btn btn-sm btn-ghost flex-1"
                      onClick={() => setCurrentStep(0)}
                    >
                      Reset
                    </button>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="text-sm text-base-content/70 mb-2">
                    Step {currentStep + 1} of {getActiveSteps().length}
                    {isPlaying && <span className="ml-2 text-primary animate-pulse">● Auto</span>}
                  </div>
                  <progress 
                    className={`progress w-full ${isPlaying ? 'progress-primary' : 'progress-secondary'}`}
                    value={currentStep + 1} 
                    max={getActiveSteps().length}
                  ></progress>
                </div>
              </div>
            </div>
          </div>

          {/* Step Information */}
          {getCurrentStep() && (
            <div className="card bg-primary/5 border border-primary/20">
              <div className="card-body">
                <h4 className="font-bold mb-3">Current Focus</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-primary">STAGE</div>
                    <div className="text-sm">{getCurrentStep().stage}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-primary">SCREEN</div>
                    <div className="text-sm">{getCurrentStep().screen}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-primary">BUSINESS IMPACT</div>
                    <div className="text-sm font-semibold text-success">{getCurrentStep().impact}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Steps Overview */}
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h4 className="font-bold mb-4">Demo Journey</h4>
              <div className="space-y-2">
                {getActiveSteps().map((step, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm w-full justify-start ${currentStep === index ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => setCurrentStep(index)}
                  >
                    <span className="text-xs mr-2">{index + 1}</span>
                    <span className="text-left flex-1">{step.screen}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="card bg-success/5 border border-success/20">
            <div className="card-body">
              <h4 className="font-bold mb-4">Key Insights</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-success mt-0.5" />
                  <span>Context-aware personalization increases relevance by 180%</span>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-success mt-0.5" />
                  <span>Voice interface creates luxury feeling and 420% better accessibility</span>
                </div>
                <div className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-success mt-0.5" />
                  <span>Social features turn 15% of guests into brand ambassadors</span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5" />
                  <span>Journey-stage intelligence drives 340% higher conversion rates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary & Next Steps */}
      <div className="card bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Straiv's Guest Experience?</h2>
          <p className="text-lg text-base-content/80 mb-6 max-w-3xl mx-auto">
            These interactive demos showcase my strategic approach to fixing critical issues, optimizing conversions, 
            and creating viral growth through AI-powered personalization and social engagement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">€2.3M+</div>
              <div className="text-sm text-base-content/70">Annual Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">12 Weeks</div>
              <div className="text-sm text-base-content/70">Full Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">340%+</div>
              <div className="text-sm text-base-content/70">Conversion Improvement</div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => onSectionChange('overview')}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Review Full Strategy
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => onSectionChange('implementation-roadmap')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Implementation Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypeDemo; 