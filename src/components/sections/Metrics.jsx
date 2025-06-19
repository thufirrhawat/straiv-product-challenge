import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Users, 
  Clock, 
  Euro,
  Smartphone,
  ShoppingBag,
  Calendar,
  Star,
  Zap,
  Activity,
  ArrowUp,
  ArrowDown,
  Eye,
  MousePointer,
  Heart,
  Repeat
} from 'lucide-react';

const Metrics = () => {
  const [selectedCategory, setSelectedCategory] = useState('business');
  const [timeframe, setTimeframe] = useState('6-months');

  const metricCategories = {
    business: {
      title: "Business Impact Metrics",
      icon: Euro,
      color: "success",
      description: "Revenue and financial performance indicators"
    },
    engagement: {
      title: "Guest Engagement KPIs", 
      icon: Users,
      color: "primary",
      description: "User behavior and interaction measurements"
    },
    technical: {
      title: "Technical Performance",
      icon: Zap,
      color: "secondary", 
      description: "PWA performance and functionality metrics"
    },
    innovation: {
      title: "Innovation Adoption",
      icon: Star,
      color: "accent",
      description: "New feature adoption and competitive advantage"
    }
  };

  const businessMetrics = [
    {
      name: "Revenue per Available Room",
      current: "€142",
      target: "€160",
      improvement: "+€18",
      trend: "up",
      description: "Daily incremental revenue through contextual upselling",
      phase: "Phase 2"
    },
    {
      name: "Upsell Conversion Rate",
      current: "12%",
      target: "18%",
      improvement: "+50%",
      trend: "up", 
      description: "vs industry average of 12%",
      phase: "Phase 2"
    },
    {
      name: "Average Order Value",
      current: "€47",
      target: "€69",
      improvement: "+47%",
      trend: "up",
      description: "Through smart bundling and contextual suggestions",
      phase: "Phase 2"
    },
    {
      name: "Service Attachment Rate",
      current: "15%",
      target: "35%",
      improvement: "+133%",
      trend: "up",
      description: "Shop purchases leading to service bookings",
      phase: "Phase 2"
    },
    {
      name: "Cross-Property Bookings",
      current: "8%",
      target: "30%",
      improvement: "+275%",
      trend: "up",
      description: "Network effect across 3,400+ hotels",
      phase: "Phase 3"
    },
    {
      name: "Guest Lifetime Value",
      current: "€340",
      target: "€485",
      improvement: "+43%",
      trend: "up",
      description: "Enhanced loyalty through personalized experiences",
      phase: "Phase 3"
    }
  ];

  const engagementMetrics = [
    {
      name: "Session Duration",
      current: "2.4min",
      target: "3.0min", 
      improvement: "+25%",
      trend: "up",
      description: "Through contextual engagement features",
      phase: "Phase 1"
    },
    {
      name: "Feature Discovery Rate",
      current: "23%",
      target: "65%",
      improvement: "+183%",
      trend: "up",
      description: "Contextual navigation and smart suggestions",
      phase: "Phase 1"
    },
    {
      name: "Digital Check-in Rate",
      current: "34%",
      target: "72%", 
      improvement: "+112%",
      trend: "up",
      description: "Homepage prominence and notifications",
      phase: "Phase 1"
    },
    {
      name: "Search Completion Rate",
      current: "0%",
      target: "80%",
      improvement: "New",
      trend: "up",
      description: "Fix broken search with AI assistance",
      phase: "Phase 1"
    },
    {
      name: "Weather Widget Engagement",
      current: "5%",
      target: "15%",
      improvement: "+300%",
      trend: "up",
      description: "Transform into activity prediction engine",
      phase: "Phase 2"
    },
    {
      name: "Net Promoter Score",
      current: "42",
      target: "57",
      improvement: "+15pts",
      trend: "up",
      description: "Overall guest satisfaction improvement",
      phase: "Phase 3"
    }
  ];

  const technicalMetrics = [
    {
      name: "Page Load Time",
      current: "3.2s",
      target: "1.8s",
      improvement: "-44%",
      trend: "down",
      description: "PWA optimization and caching",
      phase: "Phase 1"
    },
    {
      name: "Modal Response Time",
      current: "800ms",
      target: "100ms",
      improvement: "-88%",
      trend: "down",
      description: "Interface optimization",
      phase: "Phase 1"
    },
    {
      name: "Offline Functionality",
      current: "20%",
      target: "90%",
      improvement: "+350%",
      trend: "up",
      description: "Service worker implementation",
      phase: "Phase 2"
    },
    {
      name: "PWA Install Rate",
      current: "8%",
      target: "35%",
      improvement: "+338%",
      trend: "up",
      description: "Add to homescreen prompts",
      phase: "Phase 2"
    },
    {
      name: "Voice Search Accuracy",
      current: "N/A",
      target: "85%",
      improvement: "New",
      trend: "up",
      description: "Web Speech API integration",
      phase: "Phase 3"
    },
    {
      name: "Real-time Sync Reliability",
      current: "N/A",
      target: "99.5%",
      improvement: "New",
      trend: "up",
      description: "Cross-device seamless handoff",
      phase: "Phase 3"
    }
  ];

  const innovationMetrics = [
    {
      name: "AI Suggestion Acceptance",
      current: "N/A",
      target: "25%",
      improvement: "New",
      trend: "up",  
      description: "Contextual AI recommendations click-through",
      phase: "Phase 2"
    },
    {
      name: "Voice Feature Adoption",
      current: "N/A",
      target: "40%",
      improvement: "New",
      trend: "up",
      description: "Tech-savvy guest voice interaction rate",
      phase: "Phase 3"
    },
    {
      name: "Visual Search Usage",
      current: "N/A",
      target: "15%",
      improvement: "New",
      trend: "up",
      description: "Camera-based room interaction adoption",
      phase: "Phase 3"
    },
    {
      name: "Proactive Service Rate",
      current: "5%",
      target: "45%",
      improvement: "+800%",
      trend: "up",
      description: "AI anticipating needs before requests",
      phase: "Phase 3"
    },
    {
      name: "Partner Integration CTR",
      current: "N/A",
      target: "20%",
      improvement: "New",
      trend: "up",
      description: "Local experience marketplace engagement",
      phase: "Phase 3"
    },
    {
      name: "Cross-Device Continuity",
      current: "N/A",
      target: "70%",
      improvement: "New",
      trend: "up",
      description: "Seamless experience across touchpoints",
      phase: "Phase 3"
    }
  ];

  const getMetricsForCategory = (category) => {
    switch(category) {
      case 'business': return businessMetrics;
      case 'engagement': return engagementMetrics;
      case 'technical': return technicalMetrics;
      case 'innovation': return innovationMetrics;
      default: return businessMetrics;
    }
  };

  const currentMetrics = getMetricsForCategory(selectedCategory);
  const currentCategory = metricCategories[selectedCategory];

  // Calculate overall impact numbers
  const totalRevenueImpact = "€2.3M";
  const networkHotels = "3,400+";
  const guestSatisfactionIncrease = "+15pts";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="badge badge-info badge-lg mb-4">
          Strategic Priority #3
        </div>
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Success Metrics & KPIs
        </h1>
        <h2 className="text-2xl font-semibold text-info mb-6">
          Comprehensive Measurement Framework
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          Data-driven approach to measuring product success across business impact, 
          guest engagement, technical performance, and innovation adoption.
        </p>
      </div>

      {/* Overall Impact Summary */}
      <div className="card bg-gradient-to-r from-success/20 to-primary/20 border border-success/30 mb-12">
        <div className="card-body">
          <h3 className="text-xl font-bold mb-6 text-center">Projected Annual Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="stat-value text-3xl text-success">{totalRevenueImpact}</div>
              <div className="stat-title">Annual Revenue Opportunity</div>
              <div className="stat-desc">Across Straiv network</div>
            </div>
            <div className="text-center">
              <div className="stat-value text-3xl text-primary">{networkHotels}</div>
              <div className="stat-title">Hotel Network Scale</div>
              <div className="stat-desc">Cross-property benefits</div>
            </div>
            <div className="text-center">
              <div className="stat-value text-3xl text-secondary">{guestSatisfactionIncrease}</div>
              <div className="stat-title">NPS Improvement</div>
              <div className="stat-desc">Guest satisfaction boost</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Selection */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-center mb-6">Metric Categories</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {Object.entries(metricCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                className={`btn ${selectedCategory === key ? `btn-${category.color}` : 'btn-outline'}`}
                onClick={() => setSelectedCategory(key)}
              >
                <IconComponent size={16} />
                {category.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Category Description */}
      <div className="card bg-base-200 mb-8">
        <div className="card-body text-center p-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            {React.createElement(currentCategory.icon, { 
              className: `text-${currentCategory.color}`, 
              size: 32 
            })}
            <h4 className="text-xl font-bold">{currentCategory.title}</h4>
          </div>
          <p className="text-base-content/70">{currentCategory.description}</p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {currentMetrics.map((metric, index) => (
          <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body p-6">
              <div className="flex items-start justify-between mb-4">
                <h5 className="font-bold text-base-content">{metric.name}</h5>
                <div className="badge badge-sm badge-outline">
                  {metric.phase}
                </div>
              </div>
              
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-sm text-base-content/60">Current</div>
                  <div className="text-lg font-bold text-base-content">{metric.current}</div>
                </div>
                <div className="text-center">
                  {metric.trend === 'up' ? (
                    <ArrowUp className="text-success mx-auto" size={20} />
                  ) : (
                    <ArrowDown className="text-success mx-auto" size={20} />
                  )}
                  <div className={`text-sm font-bold ${
                    metric.improvement.includes('New') ? 'text-accent' : 'text-success'
                  }`}>
                    {metric.improvement}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-base-content/60">Target</div>
                  <div className="text-lg font-bold text-success">{metric.target}</div>
                </div>
              </div>
              
              <p className="text-xs text-base-content/70">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Implementation Phases Impact */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h3 className="text-xl font-bold mb-6">Phased Implementation Impact</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="badge badge-primary badge-lg">Phase 1</div>
              <div className="flex-1">
                <h4 className="font-semibold">Foundation (Weeks 1-4) - Immediate Wins</h4>
                <div className="grid md:grid-cols-3 gap-4 mt-2">
                  <div className="stat bg-base-200 p-3 rounded">
                    <div className="stat-title text-xs">Search Completion</div>
                    <div className="stat-value text-lg text-primary">0% → 80%</div>
                  </div>
                  <div className="stat bg-base-200 p-3 rounded">
                    <div className="stat-title text-xs">Load Time</div>
                    <div className="stat-value text-lg text-primary">3.2s → 1.8s</div>
                  </div>
                  <div className="stat bg-base-200 p-3 rounded">
                    <div className="stat-title text-xs">Check-in Rate</div>
                    <div className="stat-value text-lg text-primary">34% → 72%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="badge badge-secondary badge-lg">Phase 2</div>
              <div className="flex-1">
                <h4 className="font-semibold">Intelligence (Weeks 5-12) - Smart Features</h4>
                <div className="grid md:grid-cols-3 gap-4 mt-2">
                  <div className="stat bg-base-200 p-3 rounded">
                    <div className="stat-title text-xs">Upsell Conversion</div>
                    <div className="stat-value text-lg text-secondary">12% → 18%</div>
                  </div>
                  <div className="stat bg-base-200 p-3 rounded">
                    <div className="stat-title text-xs">Session Duration</div>
                    <div className="stat-value text-lg text-secondary">2.4m → 3.0m</div>
                  </div>
                  <div className="stat bg-base-200 p-3 rounded">
                    <div className="stat-title text-xs">Average Order</div>
                    <div className="stat-value text-lg text-secondary">€47 → €69</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="badge badge-accent badge-lg">Phase 3</div>
              <div className="flex-1">
                <h4 className="font-semibold">Innovation (Weeks 13-24) - Competitive Edge</h4>
                <div className="grid md:grid-cols-3 gap-4 mt-2">
                  <div className="stat bg-base-200 p-3 rounded">
                    <div className="stat-title text-xs">Cross-Property</div>
                    <div className="stat-value text-lg text-accent">8% → 30%</div>
                  </div>
                  <div className="stat bg-base-200 p-3 rounded">
                    <div className="stat-title text-xs">Voice Adoption</div>
                    <div className="stat-value text-lg text-accent">0% → 40%</div>
                  </div>
                  <div className="stat bg-base-200 p-3 rounded">
                    <div className="stat-title text-xs">NPS Score</div>
                    <div className="stat-value text-lg text-accent">42 → 57</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculation */}
      <div className="card bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20">
        <div className="card-body">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="text-primary" />
            Return on Investment Analysis
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Investment Required</h4>
              <ul className="space-y-2 text-sm">
                <li>• Development team (6 months): €180k</li>
                <li>• AI/ML infrastructure: €45k</li>
                <li>• Third-party integrations: €25k</li>
                <li>• Total investment: <strong>€250k</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Annual Return</h4>
              <ul className="space-y-2 text-sm">
                <li>• Direct revenue increase: €1.8M</li>
                <li>• Operational efficiency gains: €300k</li>
                <li>• Guest lifetime value boost: €200k</li>
                <li>• Total annual return: <strong>€2.3M</strong></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <div className="stat">
              <div className="stat-title">ROI</div>
              <div className="stat-value text-success">920%</div>
              <div className="stat-desc">Within 12 months</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics; 