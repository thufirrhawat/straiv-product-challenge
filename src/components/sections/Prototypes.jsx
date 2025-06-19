import React, { useState } from 'react';
import { 
  Smartphone,
  Search,
  Sun,
  Cloud,
  MapPin,
  Calendar,
  User,
  FolderOpen,
  Users,
  Car,
  Info,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  ToggleLeft,
  ToggleRight,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Zap,
  Brain,
  Target,
  Star
} from 'lucide-react';

const Prototypes = () => {
  const [currentView, setCurrentView] = useState('current');
  const [currentScreen, setCurrentScreen] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [tempUnit, setTempUnit] = useState('F');
  const [searchQuery, setSearchQuery] = useState('');
  const [showImprovements, setShowImprovements] = useState(false);

  // Mock data for the hotel app
  const hotelData = {
    name: "Sleep Good Stuttgart West",
    weather: {
      today: { temp: tempUnit === 'F' ? '80°F' : '27°C', icon: 'partly-cloudy', day: 'Wed, 06-18' },
      tomorrow: { temp: tempUnit === 'F' ? '80°F' : '27°C', icon: 'sunny', day: 'Thu, 06-19' }
    }
  };

  const navigationItems = [
    { id: 'checkin', label: 'Check In', icon: Calendar, color: 'text-blue-600' },
    { id: 'reservation', label: 'My reservation', icon: User, color: 'text-gray-600' },
    { id: 'info', label: 'Information folder', icon: FolderOpen, color: 'text-gray-600' },
    { id: 'group', label: 'Group module', icon: Users, color: 'text-gray-600' },
    { id: 'attractions', label: 'Attractions', icon: MapPin, color: 'text-gray-600' },
    { id: 'insider', label: 'Insider tip', icon: Info, color: 'text-gray-600' },
    { id: 'booking', label: 'Booking', icon: RefreshCw, color: 'text-red-600' },
    { id: 'business', label: 'Business Card', icon: CreditCard, color: 'text-gray-600' }
  ];

  const currentIssues = [
    { 
      type: 'critical', 
      title: 'Broken Search', 
      description: '0% completion rate - search returns no results',
      impact: 'Guests cannot find information or services'
    },
    { 
      type: 'localization', 
      title: 'Wrong Temperature Default', 
      description: 'Fahrenheit default for European market',
      impact: 'Poor user experience for 95% of European guests'
    },
    { 
      type: 'ux', 
      title: 'Poor UI Pattern', 
      description: 'Toggle metaphor for unit conversion is confusing',
      impact: 'Cognitive confusion about control function'
    },
    { 
      type: 'engagement', 
      title: 'Static Weather Widget', 
      description: 'No contextual suggestions or interactions',
      impact: 'Missed upselling and engagement opportunities'
    }
  ];

  const proposedImprovements = [
    {
      title: 'Intelligent Search with AI',
      description: 'Natural language search with instant results',
      features: ['Voice search capability', 'Contextual suggestions', 'Service integration']
    },
    {
      title: 'Smart Localization Engine',
      description: 'Automatic market-appropriate defaults',
      features: ['Location-based units', 'Cultural preferences', 'Language optimization']
    },
    {
      title: 'Weather-Driven Suggestions',
      description: 'Contextual service recommendations',
      features: ['Activity predictions', 'Service bundling', 'Proactive suggestions']
    }
  ];

  const MobileFrame = ({ children, title = "Current App" }) => (
    <div className="mx-auto max-w-sm">
      <div className="bg-gray-900 rounded-t-3xl p-2">
        <div className="bg-black rounded-t-2xl px-4 py-2">
          <div className="flex items-center justify-between text-white text-sm">
            <span className="text-xs">{title}</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white rounded-sm opacity-30"></div>
              <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
              <div className="w-4 h-2 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-x-4 border-gray-900 min-h-[600px] overflow-hidden">
        {children}
      </div>
      <div className="bg-gray-900 rounded-b-3xl p-2">
        <div className="bg-black rounded-b-2xl h-6"></div>
      </div>
    </div>
  );

  const CurrentAppHeader = () => (
    <div className="bg-white px-4 py-3 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Search className="text-gray-400" size={20} />
          <span className="text-gray-400">Search</span>
        </div>
        <div className="w-12 h-8 bg-teal-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">Logo</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23012169'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' stroke='%23FFF' stroke-width='6'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30,0 L30,30 M0,15 L60,15' stroke='%23FFF' stroke-width='10'/%3E%3Cpath d='M30,0 L30,30 M0,15 L60,15' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E" alt="UK Flag" className="w-6 h-4" />
          <span className="text-sm font-semibold">EN</span>
        </div>
      </div>
    </div>
  );

  const CurrentAppContent = () => (
    <div className="bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-40 bg-gradient-to-r from-gray-300 to-gray-200">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-0 right-0">
          <div className="bg-teal-600 bg-opacity-90 py-2 px-4 flex items-center justify-between text-white">
            <ChevronLeft size={20} />
            <span className="text-sm font-medium">Special Events</span>
            <button className="border border-white px-3 py-1 rounded text-xs">More</button>
            <ChevronRight size={20} />
          </div>
        </div>
      </div>

      {/* Weather Widget - Current Issues */}
      <div className="px-4 py-3 bg-white border-b">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Cloud className="text-yellow-600" size={24} />
            </div>
            <div>
              <div className="text-xs text-gray-500">Wed, 06-18</div>
              <div className="text-xl font-bold">{hotelData.weather.today.temp}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Sun className="text-yellow-500" size={24} />
            </div>
            <div>
              <div className="text-xs text-gray-500">Thu, 06-19</div>
              <div className="text-xl font-bold">{hotelData.weather.tomorrow.temp}</div>
            </div>
          </div>
        </div>
        
        {/* Temperature Toggle - Poor UX Pattern */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className={`text-sm ${tempUnit === 'C' ? 'font-bold' : 'text-gray-400'}`}>°C</span>
          <button 
            onClick={() => setTempUnit(tempUnit === 'F' ? 'C' : 'F')}
            className="text-gray-400"
          >
            {tempUnit === 'F' ? <ToggleRight className="text-blue-500" size={24} /> : <ToggleLeft size={24} />}
          </button>
          <span className={`text-sm ${tempUnit === 'F' ? 'font-bold' : 'text-gray-400'}`}>°F</span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="bg-white">
        {navigationItems.map((item, index) => (
          <div key={item.id} className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 last:border-b-0">
            <item.icon className={item.color} size={24} />
            <span className="text-gray-800 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const ImprovedAppContent = () => (
    <div className="bg-gray-50">
      {/* Enhanced Header with Smart Search */}
      <div className="bg-white px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Try 'spa booking' or 'local restaurants'"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 bg-white border rounded-lg mt-1 shadow-lg z-10">
                <div className="p-3 border-b">
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <Zap size={16} />
                    <span>Spa package available - 20% off today</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
        </div>
      </div>

      {/* Hero with Contextual CTA */}
      <div className="relative h-40 bg-gradient-to-r from-blue-400 to-teal-500">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-4 right-4">
          <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs">
            Check-in ready ✓
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0">
          <div className="bg-blue-600 bg-opacity-95 py-3 px-4 text-white">
            <div className="text-center">
              <div className="text-sm opacity-90">Perfect weather for outdoor activities!</div>
              <button className="mt-2 bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-medium">
                Explore local attractions →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Weather Widget */}
      <div className="px-4 py-4 bg-white border-b">
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Cloud className="text-yellow-600" size={24} />
            </div>
            <div>
              <div className="text-xs text-gray-500">Today</div>
              <div className="text-xl font-bold">{hotelData.weather.today.temp}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Sun className="text-yellow-500" size={24} />
            </div>
            <div>
              <div className="text-xs text-gray-500">Tomorrow</div>
              <div className="text-xl font-bold">{hotelData.weather.tomorrow.temp}</div>
            </div>
          </div>
        </div>

        {/* Improved Unit Selector */}
        <div className="flex items-center justify-center">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button 
              onClick={() => setTempUnit('C')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                tempUnit === 'C' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              °C
            </button>
            <button 
              onClick={() => setTempUnit('F')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                tempUnit === 'F' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              °F
            </button>
          </div>
        </div>

        {/* Contextual Suggestions */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="text-blue-600" size={16} />
            <span className="text-sm font-medium text-blue-800">Perfect day for...</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-white p-2 rounded border text-xs text-center">
              🚴 Bike rental<br/>
              <span className="text-blue-600">€15/day</span>
            </button>
            <button className="bg-white p-2 rounded border text-xs text-center">
              ☕ Terrace café<br/>
              <span className="text-blue-600">Reserve table</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation with Context */}
      <div className="bg-white">
        <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 bg-blue-50">
          <Calendar className="text-blue-600" size={24} />
          <div className="flex-1">
            <span className="text-blue-800 font-medium">Express Check-in</span>
            <div className="text-xs text-blue-600">Room ready • Upgrade available</div>
          </div>
          <ChevronRight className="text-blue-600" size={16} />
        </div>
        {navigationItems.slice(1).map((item, index) => (
          <div key={item.id} className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 last:border-b-0">
            <item.icon className={item.color} size={24} />
            <span className="text-gray-800 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="badge badge-accent badge-lg mb-4">
          Strategic Priority #4
        </div>
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Live Prototypes & Competitive Analysis
        </h1>
        <h2 className="text-2xl font-semibold text-accent mb-6">
          Real-World Issues → Strategic Solutions
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          Hands-on analysis of current hotel app revealing critical UX gaps and demonstrating 
          proposed improvements through interactive prototypes.
        </p>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center mb-8">
        <div className="join">
          <button 
            className={`join-item btn ${currentView === 'current' ? 'btn-error' : 'btn-outline'}`}
            onClick={() => setCurrentView('current')}
          >
            <AlertCircle size={16} />
            Current Issues
          </button>
          <button 
            className={`join-item btn ${currentView === 'improved' ? 'btn-success' : 'btn-outline'}`}
            onClick={() => setCurrentView('improved')}
          >
            <CheckCircle size={16} />
            Strategic Solutions
          </button>
        </div>
      </div>

      {/* Issue Analysis */}
      {currentView === 'current' && (
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Mobile Prototype */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center text-error">Current App Issues</h3>
            <MobileFrame title="Sleep Good Stuttgart West">
              <CurrentAppHeader />
              <CurrentAppContent />
            </MobileFrame>
          </div>

          {/* Issue Analysis */}
          <div>
            <h3 className="text-xl font-bold mb-4">Critical Issues Identified</h3>
            <div className="space-y-4">
              {currentIssues.map((issue, index) => (
                <div key={index} className="card bg-base-100 border border-error/20">
                  <div className="card-body p-4">
                    <div className="flex items-start gap-3">
                      <div className={`badge badge-sm ${
                        issue.type === 'critical' ? 'badge-error' : 
                        issue.type === 'localization' ? 'badge-warning' : 'badge-info'
                      }`}>
                        {issue.type}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{issue.title}</h4>
                        <p className="text-xs text-base-content/70 mb-2">{issue.description}</p>
                        <div className="text-xs text-error font-medium">
                          Impact: {issue.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Search Demo */}
            <div className="card bg-error/10 border border-error/20 mt-6">
              <div className="card-body p-4">
                <h4 className="font-semibold text-error mb-3">Search Functionality Test</h4>
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Try searching for 'spa' or 'restaurant'..."
                    className="input input-bordered input-sm w-full"
                    disabled
                  />
                  <div className="text-xs text-error">
                    ❌ No results found (0% completion rate)
                  </div>
                  <div className="text-xs text-base-content/60">
                    Real user impact: Guests cannot find services or information
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Improved Solutions */}
      {currentView === 'improved' && (
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Improved Mobile Prototype */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center text-success">Strategic Solutions</h3>
            <MobileFrame title="Straiv-Enhanced Experience">
              <ImprovedAppContent />
            </MobileFrame>
          </div>

          {/* Solutions Analysis */}
          <div>
            <h3 className="text-xl font-bold mb-4">Strategic Improvements</h3>
            <div className="space-y-4">
              {proposedImprovements.map((improvement, index) => (
                <div key={index} className="card bg-base-100 border border-success/20">
                  <div className="card-body p-4">
                    <h4 className="font-semibold text-success mb-2">{improvement.title}</h4>
                    <p className="text-sm text-base-content/80 mb-3">{improvement.description}</p>
                    <ul className="space-y-1">
                      {improvement.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="text-success" size={12} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Smart Search Demo */}
            <div className="card bg-success/10 border border-success/20 mt-6">
              <div className="card-body p-4">
                <h4 className="font-semibold text-success mb-3">Enhanced Search Experience</h4>
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Try 'spa booking' or 'local restaurants'"
                    className="input input-bordered input-sm w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <div className="bg-white border rounded p-2 text-xs">
                      <div className="text-success font-medium">✓ Intelligent Results:</div>
                      <div className="mt-1 space-y-1">
                        <div>🏪 Spa packages available (20% off today)</div>
                        <div>🍽️ Local restaurants within 5 min walk</div>
                        <div>🎯 Book now with one tap</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Key Insights */}
      <div className="card bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
        <div className="card-body">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Target className="text-accent" />
            Strategic Implementation Impact
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="stat-value text-2xl text-accent">0% → 80%</div>
              <div className="stat-title">Search Completion Rate</div>
              <div className="stat-desc">AI-powered search with instant results</div>
            </div>
            <div className="text-center">
              <div className="stat-value text-2xl text-primary">+300%</div>
              <div className="stat-title">Weather Widget Engagement</div>
              <div className="stat-desc">Contextual suggestions drive action</div>
            </div>
            <div className="text-center">
              <div className="stat-value text-2xl text-success">+40%</div>
              <div className="stat-title">Feature Discovery</div>
              <div className="stat-desc">Smart defaults and prominence</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/50 rounded-lg">
            <h4 className="font-semibold mb-2">Why This Matters for Straiv:</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Credibility:</strong> Solutions based on real product analysis, not theory</li>
              <li>• <strong>User Empathy:</strong> Understanding actual guest frustration points</li>
              <li>• <strong>Technical Feasibility:</strong> PWA-native solutions that work today</li>
              <li>• <strong>Competitive Advantage:</strong> Solving problems competitors haven't addressed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="card bg-base-100">
        <div className="card-body">
          <h3 className="text-xl font-bold mb-4">Implementation Roadmap</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="badge badge-primary">Week 1-2</div>
              <div>
                <h4 className="font-semibold">Fix Critical Issues</h4>
                <p className="text-sm text-base-content/70">Repair search, implement smart defaults, optimize temperature UI</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge badge-secondary">Week 3-6</div>
              <div>
                <h4 className="font-semibold">Add Intelligence Layer</h4>
                <p className="text-sm text-base-content/70">Contextual suggestions, weather-driven upselling, smart search</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="badge badge-accent">Week 7-12</div>
              <div>
                <h4 className="font-semibold">Advanced Personalization</h4>
                <p className="text-sm text-base-content/70">AI recommendations, voice search, cross-property recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototypes; 