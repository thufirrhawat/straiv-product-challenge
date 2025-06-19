import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  ArrowLeft, 
  Home,
  MessageCircle,
  User,
  Calendar,
  Cloud,
  Sun,
  CloudRain,
  MapPin,
  Star,
  Coffee,
  Utensils,
  Car,
  Wifi,
  Key,
  Phone,
  Clock,
  CheckCircle,
  Bell,
  Mic,
  Search,
  ShoppingBag,
  CreditCard,
  Camera,
  Heart,
  Settings,
  Menu,
  X,
  Send,
  Plus,
  Pause,
  Brain,
  Crown,
  Gift,
  Building,
  HelpCircle,
  Shield
} from 'lucide-react';

const LivePrototype = ({ demoState, setDemoState, onSectionChange }) => {
  // Add CSS to hide scrollbars in webkit browsers
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  const [currentFlow, setCurrentFlow] = useState('home');
  const [guestStage, setGuestStage] = useState('pre-arrival'); // pre-arrival, in-stay, post-checkout
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [weather, setWeather] = useState('sunny');
  const [timeOfDay, setTimeOfDay] = useState('morning');
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(true);

  // Initialize prototype with realistic data
  useEffect(() => {
    // Check if notifications for this stage have been dismissed before
    const dismissedKey = `straiv-dismissed-notifications-${guestStage}`;
    const wasDismissed = localStorage.getItem(dismissedKey) === 'true';
    
    // Set initial notifications based on journey stage (only if not previously dismissed)
    if (!wasDismissed) {
      if (guestStage === 'pre-arrival') {
        setNotifications([
          { id: 1, type: 'info', message: 'Weather forecast: Sunny 24°C', time: '2m ago' },
          { id: 2, type: 'success', message: 'Mobile check-in available in 6 hours', time: '1h ago' }
        ]);
        setShowNotifications(true);
      } else if (guestStage === 'in-stay') {
        setNotifications([
          { id: 3, type: 'success', message: 'Digital key activated for Room 13', time: '5m ago' },
          { id: 4, type: 'info', message: 'Breakfast served until 10:30 AM', time: '15m ago' }
        ]);
        setShowNotifications(true);
      } else if (guestStage === 'post-checkout') {
        setNotifications([
          { id: 5, type: 'success', message: 'Thank you! 450 loyalty points earned', time: '2m ago' },
          { id: 6, type: 'info', message: 'Rate your stay to get 10% off next visit', time: '5m ago' }
        ]);
        setShowNotifications(true);
      } else {
        setNotifications([]);
        setShowNotifications(false);
      }
    } else {
      // Notifications were previously dismissed for this stage
      setNotifications([]);
      setShowNotifications(false);
    }
  }, [guestStage]);

  // Auto-hide notifications after 5 seconds
  useEffect(() => {
    if (notifications.length > 0 && showNotifications) {
      const timer = setTimeout(() => {
        setShowNotifications(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notifications, showNotifications]);

  // Function to dismiss notifications
  const dismissNotifications = () => {
    setShowNotifications(false);
    // Save dismissed state to localStorage for this journey stage
    const dismissedKey = `straiv-dismissed-notifications-${guestStage}`;
    localStorage.setItem(dismissedKey, 'true');
    console.log(`Notifications dismissed for ${guestStage} stage - saved to localStorage`);
  };

  // Function to dismiss individual notification
  const dismissNotification = (notificationId) => {
    const updatedNotifications = notifications.filter(notif => notif.id !== notificationId);
    setNotifications(updatedNotifications);
    
    // If all notifications are dismissed, save state to localStorage
    if (updatedNotifications.length === 0) {
      const dismissedKey = `straiv-dismissed-notifications-${guestStage}`;
      localStorage.setItem(dismissedKey, 'true');
      setShowNotifications(false);
      console.log(`All notifications dismissed for ${guestStage} stage - saved to localStorage`);
    }
  };

  // Function to reset all dismissed notifications (for demo purposes)
  const resetDismissedNotifications = () => {
    localStorage.removeItem('straiv-dismissed-notifications-pre-arrival');
    localStorage.removeItem('straiv-dismissed-notifications-in-stay');
    localStorage.removeItem('straiv-dismissed-notifications-post-checkout');
    console.log('All dismissed notification states reset');
    // Trigger re-initialization by temporarily changing and restoring guest stage
    const currentStage = guestStage;
    setGuestStage('temp');
    setTimeout(() => setGuestStage(currentStage), 10);
  };

  // Mock guest data based on journey stage
  const guestData = {
    name: 'Alex Thompson',
    room: '13',
    checkIn: 'Today, 3:00 PM',
    checkOut: 'Tomorrow, 11:00 AM',
    days: guestStage === 'pre-arrival' ? -1 : guestStage === 'in-stay' ? 0 : 1
  };

  // Dynamic weather-based recommendations
  const getWeatherRecommendations = () => {
    if (weather === 'sunny') {
      return [
        { icon: <Utensils className="w-5 h-5" />, title: 'Terrace Breakfast', subtitle: 'Perfect weather for outdoor dining', action: 'Book Table' },
        { icon: <MapPin className="w-5 h-5" />, title: 'City Walking Tour', subtitle: 'Explore Stuttgart in sunshine', action: 'View Tours' },
        { icon: <Coffee className="w-5 h-5" />, title: 'Rooftop Coffee', subtitle: 'Best views with your morning coffee', action: 'Order Now' }
      ];
    } else if (weather === 'rainy') {
      return [
        { icon: <Star className="w-5 h-5" />, title: 'Spa & Wellness', subtitle: 'Perfect rainy day relaxation', action: 'Book Spa' },
        { icon: <Coffee className="w-5 h-5" />, title: 'Cozy Lounge', subtitle: 'Warm drinks by the fireplace', action: 'Reserve Spot' },
        { icon: <Camera className="w-5 h-5" />, title: 'Indoor Attractions', subtitle: 'Museums and galleries nearby', action: 'Get Tickets' }
      ];
    }
    return [];
  };

  // Journey-stage specific content
  const getJourneyContent = () => {
    switch (guestStage) {
      case 'pre-arrival':
        return {
          title: 'Welcome to Hotel Adina!',
          subtitle: 'Arriving tomorrow · Stuttgart · Room 13',
          primaryAction: 'Complete Check-in',
          secondaryAction: 'Plan Your Stay',
          features: [
            { icon: <Calendar className="w-5 h-5" />, title: 'Express Check-in', subtitle: 'Skip the front desk', available: true },
            { icon: <MapPin className="w-5 h-5" />, title: 'Local Guide', subtitle: 'Curated Munich experiences', available: true },
            { icon: <Car className="w-5 h-5" />, title: 'Airport Transfer', subtitle: 'Book your ride', available: true }
          ]
        };
      case 'in-stay':
        return {
          title: 'Good morning, Alex!',
          subtitle: 'Hotel Adina · Room 13 · Checked in',
          primaryAction: 'Room Service',
          secondaryAction: 'Explore Services',
          features: [
            { icon: <Coffee className="w-5 h-5" />, title: 'Room Service', subtitle: 'Order to room 13', available: true },
            { icon: <Key className="w-5 h-5" />, title: 'Digital Key', subtitle: 'Active', available: true },
            { icon: <Bell className="w-5 h-5" />, title: 'Concierge', subtitle: 'Available 24/7', available: true }
          ]
        };
      case 'post-checkout':
        return {
          title: 'Thank you, Alex!',
          subtitle: 'Hope you enjoyed Hotel Adina Stuttgart',
          primaryAction: 'Rate Your Stay',
          secondaryAction: 'Plan Next Visit',
          features: [
            { icon: <Heart className="w-5 h-5" />, title: 'Your Photos', subtitle: '12 memories captured', available: true },
            { icon: <Star className="w-5 h-5" />, title: 'Loyalty Points', subtitle: '450 points earned', available: true },
            { icon: <Calendar className="w-5 h-5" />, title: 'Book Again', subtitle: 'Special return guest offers', available: true }
          ]
        };
      default:
        return {};
    }
  };

  // Hermes AI Chat simulation
  const sendMessage = async (message) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), sender: 'user', text: message, time: new Date() };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);

    // Simulate AI response based on context
    setTimeout(() => {
      let aiResponse = '';
      const lowerMessage = message.toLowerCase();

      if (lowerMessage.includes('weather')) {
        aiResponse = weather === 'sunny' 
          ? "Perfect sunny day in Stuttgart! 24°C and clear skies. Would you like me to book a table on our terrace for breakfast?"
          : "It's a bit rainy today. How about a relaxing spa session? I can book you a treatment with 20% off.";
      } else if (lowerMessage.includes('restaurant') || lowerMessage.includes('food')) {
        aiResponse = "I'd recommend our terrace restaurant for the beautiful weather today. Shall I make a reservation for you?";
      } else if (lowerMessage.includes('spa') || lowerMessage.includes('relax')) {
        aiResponse = "Our spa is perfect for this weather! I can book you a massage or suggest our wellness package. What interests you?";
      } else if (lowerMessage.includes('room') || lowerMessage.includes('service')) {
        aiResponse = "Room service is available until 11 PM. Would you like to see our menu or order something specific?";
      } else {
        aiResponse = `I understand you're asking about "${message}". Based on your stay and today's weather, I can help you with recommendations or bookings. What would you like to explore?`;
      }

      const aiMessage = { id: Date.now() + 1, sender: 'ai', text: aiResponse, time: new Date() };
      setChatMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Navigation flows
  const flows = {
    home: () => (
      <div className="p-4 space-y-6 pb-20 max-w-full overflow-x-hidden">
        {/* Header with journey context */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className={`w-3 h-3 rounded-full ${
              guestStage === 'pre-arrival' ? 'bg-warning' : 
              guestStage === 'in-stay' ? 'bg-success' : 'bg-info'
            }`}></div>
            <span className="text-sm font-medium capitalize">{guestStage.replace('-', ' ')}</span>
          </div>
          <h1 className="text-xl font-bold text-base-content">{getJourneyContent().title}</h1>
          <p className="text-sm text-base-content/70">{getJourneyContent().subtitle}</p>
        </div>

        {/* Weather Widget */}
        <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <div className="card-body p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {weather === 'sunny' ? <Sun className="w-6 h-6 text-warning" /> : <CloudRain className="w-6 h-6 text-info" />}
                <div>
                  <div className="font-bold">{weather === 'sunny' ? '24°C Sunny' : '18°C Rainy'}</div>
                  <div className="text-xs text-base-content/70">Stuttgart, Germany</div>
                </div>
              </div>
              <button 
                className="btn btn-xs btn-outline"
                onClick={() => setWeather(weather === 'sunny' ? 'rainy' : 'sunny')}
              >
                Change Weather
              </button>
            </div>

            {/* Weather-based recommendations */}
            <div className="space-y-2">
              {getWeatherRecommendations().slice(0, 2).map((rec, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-base-100/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    {rec.icon}
                    <div>
                      <div className="text-sm font-medium">{rec.title}</div>
                      <div className="text-xs text-base-content/70">{rec.subtitle}</div>
                    </div>
                  </div>
                  <button className="btn btn-xs btn-primary">{rec.action}</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            className="btn btn-primary h-16 flex-col"
            onClick={() => setCurrentFlow('checkin')}
          >
            <Key className="w-5 h-5" />
            <span className="text-xs">{getJourneyContent().primaryAction}</span>
          </button>
          <button 
            className="btn btn-outline h-16 flex-col"
            onClick={() => setCurrentFlow('services')}
          >
            <Star className="w-5 h-5" />
            <span className="text-xs">{getJourneyContent().secondaryAction}</span>
          </button>
        </div>

        {/* Journey-specific features */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm">Available for You</h3>
          {getJourneyContent().features?.map((feature, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-base-300 rounded-lg">
              <div className="flex items-center gap-3">
                {feature.icon}
                <div>
                  <div className="font-medium text-sm">{feature.title}</div>
                  <div className="text-xs text-base-content/70">{feature.subtitle}</div>
                </div>
              </div>
              <div className={`w-2 h-2 rounded-full ${feature.available ? 'bg-success' : 'bg-base-300'}`}></div>
            </div>
          ))}
        </div>

        {/* Smart suggestions carousel */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm">Smart Suggestions</h3>
          <div className="w-full overflow-hidden">
            <div className="carousel carousel-center p-3 space-x-3 bg-base-200 rounded-box w-full overflow-x-auto">
              {getWeatherRecommendations().map((rec, index) => (
                <div key={index} className="carousel-item flex-shrink-0">
                  <div className="card card-compact w-32 bg-base-300 shadow-sm border border-base-300">
                    <div className="card-body p-3">
                      <div className="text-primary mb-1 text-center">{rec.icon}</div>
                      <h4 className="card-title text-xs text-center">{rec.title}</h4>
                      <p className="text-xs text-base-content/70 text-center leading-tight">{rec.subtitle}</p>
                      <div className="card-actions justify-center mt-2">
                        <button className="btn btn-primary btn-xs text-xs">{rec.action}</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),

    checkin: () => (
      <div className="p-4 space-y-6 pb-20 max-w-full overflow-x-hidden">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => setCurrentFlow('home')} className="btn btn-ghost btn-sm btn-circle">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h2 className="text-lg font-bold">Express Check-in</h2>
            <p className="text-xs text-base-content/70">Hotel Adina Stuttgart</p>
          </div>
        </div>

        {guestStage === 'pre-arrival' ? (
          <>
            {/* Room Status */}
            <div className="card bg-success/10 border border-success/20">
              <div className="card-body p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-bold text-success">Room 13 Ready!</span>
                </div>
                <p className="text-sm">Your Room is prepared and ready for early check-in.</p>
                <div className="flex gap-2 mt-3">
                  <div className="badge badge-success badge-sm">King Bed</div>
                  <div className="badge badge-success badge-sm">City View</div>
                  <div className="badge badge-success badge-sm">35m²</div>
                </div>
              </div>
            </div>

            {/* Guest Information */}
            <div className="card bg-base-200">
              <div className="card-body p-4">
                <h3 className="font-bold text-sm mb-3">Guest Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-base-content/70">Primary Guest</span>
                    <span>Alex Thompson</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-base-content/70">Check-in</span>
                    <span>Today, 3:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-base-content/70">Check-out</span>
                    <span>Tomorrow, 11:00 AM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-base-content/70">Guests</span>
                    <span>2 Adults</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrival Information */}
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Estimated Arrival</span>
                </label>
                <div className="input input-bordered flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Today, 1:30 PM (Early arrival)</span>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Transportation</span>
                </label>
                <select className="select select-bordered">
                  <option>Private car</option>
                  <option>Taxi</option>
                  <option>Public transport</option>
                  <option>Hotel shuttle</option>
                </select>
              </div>
            </div>

            {/* Room Preferences */}
            <div className="card bg-base-200">
              <div className="card-body p-4">
                <h3 className="font-bold text-sm mb-3">Room Preparation</h3>
                <div className="space-y-3">
                  <label className="label cursor-pointer">
                    <span className="label-text">Room temperature: 22°C</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Welcome amenities & drinks</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Express housekeeping</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Dietary preferences setup</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                  </label>
                </div>
              </div>
            </div>

            {/* Digital Services */}
            <div className="card bg-primary/5 border border-primary/20">
              <div className="card-body p-4">
                <h3 className="font-bold text-sm mb-3">Digital Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-primary" />
                      <span className="text-sm">Digital room key</span>
                    </div>
                    <div className="badge badge-primary">Ready</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-primary" />
                      <span className="text-sm">WiFi credentials</span>
                    </div>
                    <div className="badge badge-primary">Ready</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Hermes AI assistant</span>
                    </div>
                    <div className="badge badge-primary">Active</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="card bg-base-200">
              <div className="card-body p-4">
                <h3 className="font-bold text-sm mb-3">Payment & Incidentals</h3>
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm">•••• •••• •••• 1234</span>
                  <div className="badge badge-success badge-sm">Verified</div>
                </div>
                <p className="text-xs text-base-content/70">€50 pre-authorization for incidentals</p>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-sm">I agree to the hotel terms and conditions</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
              </label>
            </div>

            {/* Complete Check-in Button */}
            <button 
              className="btn btn-primary w-full h-14 text-lg"
              onClick={() => {
                setGuestStage('in-stay');
                setCurrentFlow('home');
                setNotifications([
                  { id: 3, type: 'success', message: 'Digital key activated for room 13', time: 'now' },
                  { id: 4, type: 'info', message: 'Welcome package delivered to your room', time: 'now' }
                ]);
                setShowNotifications(true);
              }}
            >
              <Key className="w-6 h-6" />
              Complete Check-in & Get Digital Key
            </button>

            <div className="text-center">
              <p className="text-xs text-base-content/70">
                Need help? Contact reception: +49 711 1234567
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Already Checked In</h3>
            <p className="text-sm text-base-content/70 mb-4">You're all set in room 13 at Hotel Adina!</p>
            <button onClick={() => setCurrentFlow('home')} className="btn btn-primary">
              Back to Home
            </button>
          </div>
        )}
      </div>
    ),

    services: () => (
      <div className="p-4 space-y-6 pb-20 max-w-full overflow-x-hidden">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => setCurrentFlow('home')} className="btn btn-ghost btn-sm btn-circle">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h2 className="text-lg font-bold">Services</h2>
        </div>

        {/* Service categories */}
        <div className="grid grid-cols-2 gap-4">
          <div className="card card-compact bg-base-100 border border-base-300">
            <div className="card-body">
              <Coffee className="w-8 h-8 text-primary mx-auto" />
              <h3 className="card-title text-sm justify-center">Dining</h3>
              <p className="text-xs text-center text-base-content/70">Room service & restaurants</p>
              <button className="btn btn-primary btn-sm">Order Now</button>
            </div>
          </div>

          <div className="card card-compact bg-base-100 border border-base-300">
            <div className="card-body">
              <Star className="w-8 h-8 text-secondary mx-auto" />
              <h3 className="card-title text-sm justify-center">Spa & Wellness</h3>
              <p className="text-xs text-center text-base-content/70">Massage & treatments</p>
              <button className="btn btn-secondary btn-sm">Book Spa</button>
            </div>
          </div>

          <div className="card card-compact bg-base-100 border border-base-300">
            <div className="card-body">
              <Car className="w-8 h-8 text-accent mx-auto" />
              <h3 className="card-title text-sm justify-center">Transport</h3>
              <p className="text-xs text-center text-base-content/70">Airport & city rides</p>
              <button className="btn btn-accent btn-sm">Book Ride</button>
            </div>
          </div>

          <div className="card card-compact bg-base-100 border border-base-300">
            <div className="card-body">
              <Bell className="w-8 h-8 text-warning mx-auto" />
              <h3 className="card-title text-sm justify-center">Concierge</h3>
              <p className="text-xs text-center text-base-content/70">Local recommendations</p>
              <button className="btn btn-warning btn-sm">Ask Concierge</button>
            </div>
          </div>
        </div>

        {/* Weather-specific recommendations */}
        <div className="space-y-3">
          <h3 className="font-bold text-sm">Perfect for Today's Weather</h3>
          {getWeatherRecommendations().map((rec, index) => (
            <div key={index} className="card bg-base-100 border border-base-300">
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {rec.icon}
                    <div>
                      <h4 className="font-bold text-sm">{rec.title}</h4>
                      <p className="text-xs text-base-content/70">{rec.subtitle}</p>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-sm">{rec.action}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    chat: () => (
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-3 p-4 border-b border-base-300 flex-shrink-0">
          <button onClick={() => setCurrentFlow('home')} className="btn btn-ghost btn-sm btn-circle">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <div className="avatar flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Brain className="w-4 h-4 text-primary-content mx-auto" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-sm truncate">Hermes AI</h2>
              <p className="text-xs text-success truncate">Online • Context-aware</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {chatMessages.length === 0 && (
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary max-w-[280px]">
                {timeOfDay === 'morning' ? 'Good morning' : 'Hello'}, Alex! {weather === 'sunny' ? '☀️' : '🌧️'} Perfect {weather} day in Stuttgart. How can I help you today?
              </div>
            </div>
          )}

          {chatMessages.map((message) => (
            <div key={message.id} className={`chat ${message.sender === 'user' ? 'chat-end' : 'chat-start'}`}>
              <div className={`chat-bubble ${message.sender === 'user' ? 'chat-bubble-secondary' : 'chat-bubble-primary'} max-w-[280px] break-words`}>
                {message.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary max-w-[280px]">
                <span className="loading loading-dots loading-sm"></span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-base-300 bg-base-100 flex-shrink-0">
          <div className="flex gap-2 w-full">
            <input
              type="text"
              placeholder="Ask about weather, services, local tips..."
              className="input input-bordered flex-1 input-sm min-w-0"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage(chatInput)}
            />
            <button 
              className="btn btn-primary btn-sm btn-circle flex-shrink-0"
              onClick={() => sendMessage(chatInput)}
            >
              <Send className="w-4 h-4" />
            </button>
            <button className="btn btn-ghost btn-sm btn-circle flex-shrink-0">
              <Mic className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            <button 
              className="btn btn-xs btn-outline flex-shrink-0"
              onClick={() => sendMessage("What's the weather like?")}
            >
              Weather
            </button>
            <button 
              className="btn btn-xs btn-outline flex-shrink-0"
              onClick={() => sendMessage("Recommend a restaurant")}
            >
              Dining
            </button>
            <button 
              className="btn btn-xs btn-outline flex-shrink-0"
              onClick={() => sendMessage("Book a spa treatment")}
            >
              Spa
            </button>
          </div>
        </div>
      </div>
    ),

    profile: () => (
      <div className="p-4 space-y-6 pb-20 max-w-full overflow-x-hidden">
        {/* Profile Header */}
        <div className="text-center mb-6">
          <div className="avatar mb-4">
            <div className="w-20 h-20 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold">
              AT
            </div>
          </div>
          <h2 className="text-xl font-bold">Alex Thompson</h2>
          <p className="text-sm text-base-content/70">Straiv Guest</p>
          <div className="badge badge-primary mt-2">Platinum Member</div>
        </div>

        {/* Current Stay Card (if in-stay or pre-arrival) */}
        {(guestStage === 'in-stay' || guestStage === 'pre-arrival') && (
          <div className="card bg-primary/5 border border-primary/20">
            <div className="card-body p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm">Current Reservation</h3>
                <div className={`badge ${guestStage === 'in-stay' ? 'badge-success' : 'badge-warning'}`}>
                  {guestStage === 'in-stay' ? 'Checked In' : 'Pre-Arrival'}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-base-content/70">Hotel</span>
                  <span>Hotel Adina Stuttgart</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-base-content/70">Room</span>
                  <span>Superior Room 13</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-base-content/70">Check-in</span>
                  <span>{guestStage === 'pre-arrival' ? 'Today, 3:00 PM' : 'Yesterday'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-base-content/70">Check-out</span>
                  <span>{guestStage === 'pre-arrival' ? 'Tomorrow, 11:00 AM' : 'Today, 11:00 AM'}</span>
                </div>
              </div>
              <div className="divider"></div>
              <div className="flex gap-2">
                <button className="btn btn-primary btn-sm flex-1">
                  <Key className="w-4 h-4" />
                  Digital Key
                </button>
                <button className="btn btn-outline btn-sm flex-1">
                  <MapPin className="w-4 h-4" />
                  Hotel Info
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Personal Information */}
        <div className="card bg-base-200">
          <div className="card-body p-4">
            <h3 className="font-bold text-sm mb-3">Personal Information</h3>
            <div className="space-y-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs">Email</span>
                </label>
                <input type="email" value="alex.thompson@email.com" className="input input-bordered input-sm" readOnly />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs">Phone</span>
                </label>
                <input type="tel" value="+49 170 1234567" className="input input-bordered input-sm" readOnly />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs">Language</span>
                </label>
                <select className="select select-bordered select-sm">
                  <option>English</option>
                  <option>Deutsch</option>
                  <option>Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="card bg-base-200">
          <div className="card-body p-4">
            <h3 className="font-bold text-sm mb-3">Stay Preferences</h3>
            <div className="space-y-3">
              <label className="label cursor-pointer">
                <span className="label-text">Room temperature: 22°C</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary checkbox-sm" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Morning wake-up service</span>
                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Eco-friendly amenities</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary checkbox-sm" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Dietary restrictions: Vegetarian</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary checkbox-sm" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Push notifications</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary checkbox-sm" />
              </label>
            </div>
          </div>
        </div>

        {/* Loyalty Status */}
        <div className="card bg-gradient-to-r from-amber-800 to-yellow-700 border border-yellow-600">
          <div className="card-body p-4">
            <div className="flex items-center gap-3 mb-3">
              <Crown className="w-6 h-6 text-yellow-300" />
              <div>
                <h3 className="font-bold text-sm text-white">Platinum Member</h3>
                <p className="text-xs text-yellow-100">Since January 2022</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-white">
                <span>Points Balance</span>
                <span className="font-bold">12,450 pts</span>
              </div>
              <div className="flex justify-between text-sm text-white">
                <span>Nights This Year</span>
                <span className="font-bold">23 nights</span>
              </div>
              <div className="flex justify-between text-sm text-white">
                <span>Next Tier</span>
                <span className="font-bold">Diamond (27 more nights)</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-xs mb-1 text-yellow-100">
                <span>Progress to Diamond</span>
                <span>85%</span>
              </div>
              <progress className="progress progress-warning w-full" value="85" max="100"></progress>
            </div>
            <button className="btn btn-warning btn-sm w-full mt-3 text-amber-900 font-bold">
              <Gift className="w-4 h-4" />
              Redeem Points
            </button>
          </div>
        </div>

        {/* Recent Stays */}
        <div className="card bg-base-200">
          <div className="card-body p-4">
            <h3 className="font-bold text-sm mb-3">Recent Stays</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-base-100 rounded">
                <div className="flex items-center gap-3">
                  <Building className="w-4 h-4 text-primary" />
                  <div>
                    <div className="font-medium text-sm">Hotel Adina Berlin</div>
                    <div className="text-xs text-base-content/70">Dec 15-18, 2023</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-base-content/70">4.8★</div>
                  <div className="text-xs text-success">+350 pts</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-base-100 rounded">
                <div className="flex items-center gap-3">
                  <Building className="w-4 h-4 text-primary" />
                  <div>
                    <div className="font-medium text-sm">Hotel Adina Munich</div>
                    <div className="text-xs text-base-content/70">Nov 8-12, 2023</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-base-content/70">4.9★</div>
                  <div className="text-xs text-success">+425 pts</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-base-100 rounded">
                <div className="flex items-center gap-3">
                  <Building className="w-4 h-4 text-primary" />
                  <div>
                    <div className="font-medium text-sm">Hotel Adina Hamburg</div>
                    <div className="text-xs text-base-content/70">Oct 3-6, 2023</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-base-content/70">4.7★</div>
                  <div className="text-xs text-success">+300 pts</div>
                </div>
              </div>
            </div>
            <button className="btn btn-outline btn-sm w-full mt-3">
              View All History
            </button>
          </div>
        </div>

        {/* Settings & Support */}
        <div className="card bg-base-200">
          <div className="card-body p-4">
            <h3 className="font-bold text-sm mb-3">Settings & Support</h3>
            <div className="space-y-2">
              <button className="btn btn-ghost btn-sm justify-start w-full">
                <Settings className="w-4 h-4" />
                Account Settings
              </button>
              <button className="btn btn-ghost btn-sm justify-start w-full">
                <Bell className="w-4 h-4" />
                Notification Preferences
              </button>
              <button className="btn btn-ghost btn-sm justify-start w-full">
                <CreditCard className="w-4 h-4" />
                Payment Methods
              </button>
              <button className="btn btn-ghost btn-sm justify-start w-full">
                <HelpCircle className="w-4 h-4" />
                Help & Support
              </button>
              <button className="btn btn-ghost btn-sm justify-start w-full">
                <Shield className="w-4 h-4" />
                Privacy Settings
              </button>
            </div>
          </div>
        </div>

        {/* App Info */}
        <div className="text-center space-y-2">
          <div className="text-xs text-base-content/50">
            Straiv Guest App v2.1.0<br/>
            © 2024 Straiv Technologies
          </div>
          <button className="btn btn-ghost btn-xs text-error">
            Sign Out
          </button>
        </div>
      </div>
    )
  };

  return (
    <div className="space-y-8">
              {/* Demo Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="join">
          <button 
            className={`btn join-item ${guestStage === 'pre-arrival' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => {
              setGuestStage('pre-arrival');
              setCurrentFlow('home');
              setChatMessages([]);
            }}
          >
            Pre-Arrival
          </button>
          <button 
            className={`btn join-item ${guestStage === 'in-stay' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => {
              setGuestStage('in-stay');
              setCurrentFlow('home');
              setChatMessages([]);
            }}
          >
            In-Stay
          </button>
          <button 
            className={`btn join-item ${guestStage === 'post-checkout' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => {
              setGuestStage('post-checkout');
              setCurrentFlow('home');
              setChatMessages([]);
            }}
          >
            Post-Checkout
          </button>
        </div>
      </div>

      {/* Mobile Prototype Frame */}
      <div className="flex justify-center">
        <div className="relative">
          {/* Phone Frame */}
          <div className="w-96 h-[700px] bg-base-300 rounded-[2.5rem] p-2 shadow-2xl">
            {/* Screen */}
            <div className="w-full h-full bg-base-100 rounded-[2rem] overflow-hidden relative">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-4 py-2 bg-base-200 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>Straiv</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wifi className="w-3 h-3" />
                  <div className="flex gap-0.5">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                  </div>
                  <span>100%</span>
                </div>
              </div>

              {/* App Content */}
              <div 
                className="absolute top-8 bottom-16 left-0 right-0 bg-base-100 overflow-y-auto overflow-x-hidden hide-scrollbar" 
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none'
                }}
              >
                <div className="w-full max-w-full h-full">
                  {flows[currentFlow] && flows[currentFlow]()}
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 bg-base-200 border-t border-base-300">
                <div className="flex justify-around py-2">
                  <button 
                    className={`btn btn-ghost btn-sm flex-col ${currentFlow === 'home' ? 'text-primary' : ''}`}
                    onClick={() => setCurrentFlow('home')}
                  >
                    <Home className="w-4 h-4" />
                    <span className="text-xs">Home</span>
                  </button>
                  <button 
                    className={`btn btn-ghost btn-sm flex-col ${currentFlow === 'services' ? 'text-primary' : ''}`}
                    onClick={() => setCurrentFlow('services')}
                  >
                    <Star className="w-4 h-4" />
                    <span className="text-xs">Services</span>
                  </button>
                  <button 
                    className={`btn btn-ghost btn-sm flex-col ${currentFlow === 'chat' ? 'text-primary' : ''}`}
                    onClick={() => setCurrentFlow('chat')}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs">Hermes</span>
                  </button>
                  <button 
                    className={`btn btn-ghost btn-sm flex-col ${currentFlow === 'profile' ? 'text-primary' : ''}`}
                    onClick={() => setCurrentFlow('profile')}
                  >
                    <User className="w-4 h-4" />
                    <span className="text-xs">Profile</span>
                  </button>
                </div>
              </div>

              {/* Notifications */}
              {notifications.length > 0 && showNotifications && (
                <div className="absolute top-16 left-4 right-4 space-y-2 z-30">
                  {notifications.slice(0, 2).map((notif) => (
                    <div 
                      key={notif.id} 
                      className={`alert alert-${notif.type} alert-sm shadow-lg animate-in slide-in-from-top duration-300 cursor-pointer hover:shadow-xl transition-all`}
                      onClick={() => dismissNotification(notif.id)}
                    >
                      <Bell className="w-4 h-4" />
                      <div className="text-xs flex-1">
                        <div>{notif.message}</div>
                        <div className="opacity-70">{notif.time}</div>
                      </div>
                      <button 
                        className="btn btn-ghost btn-xs btn-circle"
                        onClick={(e) => {
                          e.stopPropagation();
                          dismissNotification(notif.id);
                        }}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  {notifications.length > 0 && (
                    <div className="text-center">
                      <button 
                        className="btn btn-ghost btn-xs"
                        onClick={dismissNotifications}
                      >
                        Dismiss All
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Notification Toggle Button - for demo purposes */}
              {!showNotifications && (
                <div className="absolute top-16 right-4 z-30">
                  <button 
                    className="btn btn-primary btn-sm btn-circle"
                    onClick={() => {
                      // Check if notifications were dismissed for this stage
                      const dismissedKey = `straiv-dismissed-notifications-${guestStage}`;
                      const wasDismissed = localStorage.getItem(dismissedKey) === 'true';
                      
                      if (wasDismissed) {
                        // Reset dismissed state and re-initialize notifications
                        localStorage.removeItem(dismissedKey);
                        console.log(`Re-enabling notifications for ${guestStage} stage`);
                        // Trigger re-initialization
                        const currentStage = guestStage;
                        setGuestStage('temp');
                        setTimeout(() => setGuestStage(currentStage), 10);
                      } else {
                        setShowNotifications(true);
                      }
                    }}
                    title={notifications.length > 0 ? "Show notifications" : "Re-enable notifications for this stage"}
                  >
                    <Bell className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Feature Callouts */}
          <div className="absolute -right-40 top-0 w-36 space-y-4">
            <div className="bg-primary/10 p-3 rounded-lg border border-primary/20 min-h-[5.5rem] flex flex-col">
              <h4 className="font-bold text-sm text-primary mb-1">Journey Intelligence</h4>
              <p className="text-xs flex-1">Content adapts based on guest timeline</p>
            </div>
            <div className="bg-warning/10 p-3 rounded-lg border border-warning/20 min-h-[5.5rem] flex flex-col">
              <h4 className="font-bold text-sm text-warning mb-1">Weather Context</h4>
              <p className="text-xs flex-1">Smart recommendations based on conditions</p>
            </div>
            <div className="bg-success/10 p-3 rounded-lg border border-success/20 min-h-[5.5rem] flex flex-col">
              <h4 className="font-bold text-sm text-success mb-1">AI Integration</h4>
              <p className="text-xs flex-1">Hermes AI with real service booking</p>
            </div>
          </div>

          <div className="absolute -left-40 top-0 w-36 space-y-4">
            <div className="bg-secondary/10 p-3 rounded-lg border border-secondary/20 min-h-[5.5rem] flex flex-col">
              <h4 className="font-bold text-sm text-secondary mb-1">Mobile-First</h4>
              <p className="text-xs flex-1">Optimized for phone usage</p>
            </div>
            <div className="bg-accent/10 p-3 rounded-lg border border-accent/20 min-h-[5.5rem] flex flex-col">
              <h4 className="font-bold text-sm text-accent mb-1">Real-Time</h4>
              <p className="text-xs flex-1">Live updates and status tracking</p>
            </div>
            <div className="bg-info/10 p-3 rounded-lg border border-info/20 min-h-[5.5rem] flex flex-col">
              <h4 className="font-bold text-sm text-info mb-1">Contextual UI</h4>
              <p className="text-xs flex-1">Interface changes with guest needs</p>
            </div>
          </div>

        </div>
      </div>




    </div>
  );
};

export default LivePrototype;