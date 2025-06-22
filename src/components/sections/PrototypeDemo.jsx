import React, { useState } from 'react';
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Coffee,
  Mic,
  Brain,
  ExternalLink,
  FileText,
  BookOpen,
  Award,
  Phone,
  Bell,
  Home,
  User,
  Menu,
  X,
  Wifi,
  Car,
  Utensils,
  ArrowLeft,
  ChevronLeft,
  Zap,
  MessageCircle
} from 'lucide-react';

const PrototypeDemo = ({ onSectionChange, navigate }) => {
  const [activeScreen, setActiveScreen] = useState('home');

  // Helper function to handle navigation with scroll-to-top
  const handleNavigation = (path) => {
    if (navigate) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Simple prototype screens
  const screens = {
    home: {
      title: 'Smart Guest Experience',
      subtitle: 'Journey-stage intelligence with contextual interface',
      content: (
        <div className="h-full bg-gradient-to-b from-blue-50 to-white flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 text-center">
            <div className="text-lg font-bold">Welcome to Stuttgart Grand Hotel!</div>
            </div>

          {/* Content */}
          <div className="flex-1 p-6 space-y-4">
            {/* Quick Check-in */}
            <div 
              className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-green-500 cursor-pointer hover:shadow-xl transition-all hover:scale-105"
              onClick={() => setActiveScreen('checkin')}
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="font-bold text-gray-900 text-lg">Room Ready - Check In Now</span>
              </div>
              <div className="text-sm text-gray-700 font-medium mb-3">Digital key activated • Skip the front desk</div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Complete Check-in (1 tap)
                  </button>
                </div>

            {/* AI Recommendations */}
            <div 
              className="bg-white rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-all hover:scale-105"
              onClick={() => setActiveScreen('ai')}
            >
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-gray-900 text-lg">Perfect for Today ☀️ 22°C</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-gray-700" />
                    <span className="text-sm text-gray-800 font-medium">Morning coffee delivery</span>
              </div>
                  <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors">€8</button>
            </div>
              <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-gray-700" />
                    <span className="text-sm text-gray-800 font-medium">Mercedes Museum tickets</span>
                </div>
                  <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors">€12</button>
                </div>
              </div>
            </div>

            {/* Voice Assistant */}
            <div 
              className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
              onClick={() => setActiveScreen('voice')}
            >
              <div className="flex items-center justify-center gap-3">
                <Mic className="w-8 h-8 text-purple-600" />
                <div className="text-center">
                  <div className="font-bold text-purple-800">Voice Assistant</div>
                  <div className="text-sm text-purple-600">Tap to speak</div>
                  </div>
                </div>
            </div>

            {/* Innovation Showcase */}
            <div 
              className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
              onClick={() => setActiveScreen('innovation')}
            >
              <div className="flex items-center justify-center gap-3">
                <Zap className="w-6 h-6 text-orange-600" />
                <div className="text-center">
                  <div className="font-bold text-orange-800">Innovation Features</div>
                  <div className="text-sm text-orange-600">Explore new capabilities</div>
            </div>
          </div>
              </div>
              </div>
            </div>
      )
    },

    checkin: {
      title: 'Express Check-in',
      subtitle: '15-25% adoption target - One-tap completion',
      content: (
        <div className="min-h-full bg-gradient-to-b from-green-50 to-white flex flex-col">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveScreen('home')}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                    </button>
              <div className="flex-1 text-center">
                <div className="text-lg font-bold">Express Check-in</div>
                <div className="text-sm opacity-90">95% complete • 1 tap remaining</div>
                  </div>
                </div>
            </div>

          <div className="flex-1 p-6 space-y-6 pb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <div className="text-lg font-bold text-gray-900 mb-4">✅ Ready to Complete</div>
              <div className="space-y-3 text-gray-800">
                <div className="flex justify-between">
                  <span className="font-medium">Room:</span>
                  <span className="font-bold text-gray-900">413 - Deluxe King</span>
            </div>
                <div className="flex justify-between">
                  <span className="font-medium">Digital key:</span>
                  <span className="text-green-600 font-bold">✓ Activated</span>
          </div>
                <div className="flex justify-between">
                  <span className="font-medium">WiFi:</span>
                  <span className="text-green-600 font-bold">✓ Auto-connected</span>
                  </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-sm text-green-700 font-medium mb-2">🎯 Improvement Impact</div>
              <div className="text-xs text-green-600 space-y-1">
                <div>• Target: 15-25% digital adoption (vs current 4%)</div>
                <div>• 85% shorter wait times</div>
                <div>• Skip front desk entirely</div>
              </div>
            </div>

            <button 
              className="w-full bg-green-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-green-700 transition-all transform hover:scale-105"
              onClick={() => setActiveScreen('success')}
            >
              🔑 Complete Check-in & Unlock Room
                  </button>
              </div>
            </div>
      )
    },

    ai: {
      title: 'AI Recommendations',
      subtitle: 'Journey-stage intelligence with contextual suggestions',
      content: (
        <div className="min-h-full bg-gradient-to-b from-blue-50 to-white flex flex-col">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveScreen('home')}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                </button>
              <div className="flex-1 text-center">
                <div className="text-lg font-bold">Smart Recommendations</div>
                <div className="text-sm opacity-90">Personalized for your stay</div>
            </div>
            </div>
            </div>

          <div className="flex-1 p-6 space-y-4 pb-8">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-gray-900 text-lg">Based on Your Preferences</span>
          </div>
          <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-amber-700" />
            <div>
                      <div className="font-bold text-gray-900">Room Service Coffee</div>
                      <div className="text-sm text-gray-700 font-medium">Perfect morning start</div>
              </div>
              </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Order €8</button>
            </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-gray-700" />
                    <div>
                      <div className="font-bold text-gray-900">Museum Tickets</div>
                      <div className="text-sm text-gray-700 font-medium">Perfect for cloudy weather</div>
            </div>
                    </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Book €12</button>
            </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Utensils className="w-5 h-5 text-orange-600" />
                      <div>
                      <div className="font-bold text-gray-900">Restaurant Reservation</div>
                      <div className="text-sm text-gray-700 font-medium">Highly rated nearby</div>
                        </div>
                      </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Reserve</button>
                    </div>
                  </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="text-sm text-blue-700 font-medium mb-2">🧠 AI Intelligence</div>
              <div className="text-xs text-blue-600 space-y-1">
                <div>• Contextual recommendations based on journey stage</div>
                <div>• Weather-aware suggestions</div>
                <div>• 20%+ upsell conversion target (vs 6.04% industry avg)</div>
          </div>
              </div>
              </div>
            </div>
      )
    },

    voice: {
      title: 'Voice Assistant',
      subtitle: '85% query automation through intelligent voice interface',
      content: (
        <div className="min-h-full bg-gradient-to-b from-purple-50 to-white flex flex-col">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveScreen('home')}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                    </button>
              <div className="flex-1 text-center">
                <div className="text-lg font-bold">Voice Assistant Active</div>
                <div className="text-sm opacity-90">Listening... Tap to speak</div>
                  </div>
                </div>
            </div>

          <div className="flex-1 p-6 space-y-6 pb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
              <div className="text-lg font-bold text-gray-900 mb-3">🎤 Voice Command</div>
              <div className="text-gray-800 font-medium mb-4">"Order coffee to room 413"</div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-bold text-purple-800 text-lg">✅ Understood!</div>
                <div className="text-purple-700 font-medium mt-1">Ordering room service coffee for room 413. ETA: 15 minutes. Total: €8.50</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 text-center">
              <Mic className="w-16 h-16 mx-auto text-purple-600 mb-4 animate-pulse" />
              <div className="text-xl font-bold text-purple-800 mb-2">Tap & Hold to Speak</div>
              <div className="text-purple-600">85% of queries automated</div>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <div className="text-sm text-purple-700 font-medium mb-2">🗣️ Voice Innovation</div>
              <div className="text-xs text-purple-600 space-y-1">
                <div>• 54% of hotels planning voice features</div>
                <div>• GDPR-compliant European voice technology</div>
                <div>• Multi-language support</div>
          </div>
              </div>
              </div>
            </div>
      )
    },

    innovation: {
      title: 'Innovation Showcase',
      subtitle: 'Advanced features for market differentiation',
      content: (
        <div className="h-full bg-gradient-to-b from-orange-50 to-white flex flex-col">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveScreen('home')}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                </button>
              <div className="flex-1 text-center">
                <div className="text-lg font-bold">Innovation Features</div>
                <div className="text-sm opacity-90">Market-leading capabilities</div>
            </div>
              </div>
            </div>

          <div className="flex-1 p-6 space-y-4">
            <div 
              className="bg-white rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-all"
              onClick={() => setActiveScreen('predictive')}
            >
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-gray-900 text-lg">Predictive Service Engine</span>
              </div>
              <div className="text-sm text-gray-700 font-medium mb-2">AI-powered anticipation of guest needs</div>
              <div className="text-xs text-blue-600 font-medium">Tap to explore →</div>
              </div>

            <div 
              className="bg-white rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-all"
              onClick={() => setActiveScreen('voice')}
            >
              <div className="flex items-center gap-3 mb-2">
                <Mic className="w-6 h-6 text-purple-500" />
                <span className="font-bold text-gray-900 text-lg">Voice-First Interface</span>
              </div>
              <div className="text-sm text-gray-700 font-medium mb-2">Natural language processing for guest requests</div>
              <div className="text-xs text-purple-600 font-medium">Tap to explore →</div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                <span className="font-bold text-gray-900 text-lg">Smart Automation</span>
                </div>
              <div className="text-sm text-gray-700 font-medium mb-3">85%+ automation of guest inquiries</div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <div className="text-xs text-yellow-700 space-y-1">
                  <div>• Automatic housekeeping optimization</div>
                  <div>• Predictive maintenance alerts</div>
                  <div>• Dynamic pricing recommendations</div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
              <div className="text-sm text-orange-700 font-medium mb-2">🚀 Innovation Impact</div>
              <div className="text-xs text-orange-600 space-y-1">
                <div>• 80% hotel AI adoption with 10-15% revenue increases</div>
                <div>• European market differentiation advantage</div>
                <div>• 4-6 month implementation timeline</div>
                      </div>
                    </div>
                  </div>
                </div>
      )
    },

    predictive: {
      title: 'Predictive Service Engine',
      subtitle: 'AI-powered anticipation using integrated hotel data',
      content: (
        <div className="h-full bg-gradient-to-b from-indigo-50 to-white flex flex-col">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveScreen('innovation')}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                    </button>
              <div className="flex-1 text-center">
                <div className="text-lg font-bold">Predictive Engine</div>
                <div className="text-sm opacity-90">Anticipating guest needs</div>
                  </div>
                </div>
            </div>
          
          <div className="flex-1 p-6 space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-indigo-500">
              <div className="text-lg font-bold mb-3">🔮 Predictive Insights</div>
              <div className="space-y-3">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <div className="font-medium text-indigo-800">Guest likely to order breakfast</div>
                  <div className="text-sm text-indigo-600">Based on previous patterns • 87% confidence</div>
                  </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="font-medium text-green-800">Room service optimal time: 8:30 AM</div>
                  <div className="text-sm text-green-600">Aligned with guest schedule</div>
              </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="font-medium text-yellow-800">Housekeeping window: 11:00-13:00</div>
                  <div className="text-sm text-yellow-600">Guest typically out during this time</div>
            </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-lg font-bold mb-3">🎯 Proactive Actions</div>
            <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Pre-order breakfast suggestion</span>
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded text-xs">Send</button>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Spa appointment availability</span>
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded text-xs">Notify</button>
            </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Weather alert + umbrella offer</span>
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded text-xs">Alert</button>
                  </div>
            </div>
          </div>

            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <div className="text-sm text-indigo-700 font-medium mb-2">🧠 Technical Advantage</div>
              <div className="text-xs text-indigo-600 space-y-1">
                <div>• Leverages 50+ technology partner integrations</div>
                <div>• 1M+ digital check-ins behavioral data</div>
                <div>• 10-30% cost reduction in customer service</div>
              </div>
              </div>
            </div>
              </div>
      )
    },

    success: {
      title: 'Check-in Complete',
      subtitle: 'Digital transformation success',
      content: (
        <div className="h-full bg-gradient-to-b from-green-50 to-white flex flex-col">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 text-center">
            <div className="text-lg font-bold">Check-in Complete! 🎉</div>
            <div className="text-sm opacity-90">Welcome to Stuttgart Grand</div>
            </div>

          <div className="flex-1 p-6 space-y-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <CheckCircle className="w-20 h-20 mx-auto text-green-500 mb-4 animate-bounce" />
              <div className="text-2xl font-bold text-green-800 mb-2">Success!</div>
              <div className="text-gray-600 mb-4">Your room is ready and digital key is active</div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-bold text-green-800">Room 413 - Deluxe King</div>
                <div className="text-green-700">4th Floor • Use your phone to unlock</div>
                  </div>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-sm text-green-700 font-medium mb-2">📊 Impact Achieved</div>
              <div className="text-xs text-green-600 space-y-1">
                <div>• 85% faster than traditional check-in</div>
                <div>• Zero front desk interaction required</div>
                <div>• Contributing to 15-25% digital adoption target</div>
            </div>
          </div>

            <div className="space-y-3">
              <button 
                className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
                onClick={() => setActiveScreen('home')}
              >
                Continue to Guest Services
              </button>
              <button 
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setActiveScreen('ai')}
              >
                Explore AI Recommendations
              </button>
                    </div>
                  </div>
                </div>
      )
    }
  };

  const currentScreen = screens[activeScreen];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Interactive Prototype</span><br />
            <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">Experience the Innovation</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A clickable prototype showcasing what I want to improve in the innovation and stickiness strategies
          </p>
        </div>

        {/* Main Prototype Display */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            {/* Mobile Frame - Made Larger */}
            <div className="w-96 h-[700px] bg-black rounded-3xl p-4 shadow-2xl">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                <div className="h-full overflow-y-auto scrollbar-hide">
                  {currentScreen.content}
                </div>
              </div>
            </div>
            
            {/* Screen Info */}
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                {currentScreen.title}
              </h3>
              <p className="text-sm text-gray-300">
                {currentScreen.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30">
            <h3 className="text-lg font-bold text-white mb-4 text-center">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button 
                onClick={() => setActiveScreen('home')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeScreen === 'home' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white/30 text-white hover:bg-white/40'
                }`}
              >
                🏠 Home
              </button>
              <button 
                onClick={() => setActiveScreen('checkin')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeScreen === 'checkin' 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'bg-white/30 text-white hover:bg-white/40'
                }`}
              >
                ✅ Check-in
              </button>
              <button 
                onClick={() => setActiveScreen('ai')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeScreen === 'ai' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white/30 text-white hover:bg-white/40'
                }`}
              >
                🧠 AI
              </button>
              <button 
                onClick={() => setActiveScreen('voice')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeScreen === 'voice' 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'bg-white/30 text-white hover:bg-white/40'
                }`}
              >
                🎤 Voice
              </button>
            </div>
          </div>
        </div>

        {/* Key Improvements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30">
            <CheckCircle className="w-12 h-12 mx-auto text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">Express Check-in</h3>
            <p className="text-gray-200">From 4% to 15-25% digital adoption through one-tap completion</p>
          </div>
          
          <div className="text-center p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30">
            <Brain className="w-12 h-12 mx-auto text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">AI Recommendations</h3>
            <p className="text-gray-200">Journey-stage intelligence with contextual suggestions</p>
          </div>
          
          <div className="text-center p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30">
            <Mic className="w-12 h-12 mx-auto text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">Voice Assistant</h3>
            <p className="text-gray-200">85% query automation through intelligent voice interface</p>
          </div>
        </div>

        {/* Strategic Framework Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            onClick={() => navigate ? handleNavigation('/overview') : onSectionChange('overview')}
          >
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold">Strategic Overview</h3>
              <p className="text-sm opacity-90">Complete framework analysis</p>
            </div>
          </button>

          <button 
            className="group bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            onClick={() => navigate ? handleNavigation('/innovation-strategy') : onSectionChange('innovation-strategy')}
          >
            <div className="text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold">Innovation Strategy</h3>
              <p className="text-sm opacity-90">AI & voice capabilities</p>
            </div>
          </button>

          <button 
            className="group bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            onClick={() => navigate ? handleNavigation('/stickiness-strategy') : onSectionChange('stickiness-strategy')}
          >
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold">Stickiness Strategy</h3>
              <p className="text-sm opacity-90">Journey-stage intelligence</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrototypeDemo; 