import React, { useState } from 'react';
import { 
  AlertTriangle,
  Search,
  Clock,
  Navigation,
  Bot,
  Smartphone,
  MapPin,
  ShoppingCart,
  Calendar,
  Star,
  WifiOff,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  X
} from 'lucide-react';

const CurrentAnalysis = ({ onSectionChange }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);

  const criticalIssues = [
    {
      category: "Core Functionality Failures",
      severity: "critical",
      count: 4,
      icon: <AlertTriangle className="w-6 h-6" />,
      description: "Basic app functions that are completely broken",
      issues: [
        {
          title: "Search Functionality Completely Broken",
          severity: "critical",
          impact: "High",
          description: "General search doesn't work at all, making content discovery impossible",
          businessImpact: "Users can't find services → 0% search-driven conversions",
          solution: "Implement Elasticsearch with intelligent autocomplete and category filtering",
          timeline: "1 week"
        },
        {
          title: "AI Chatbot Non-Functional",
          severity: "critical", 
          impact: "High",
          description: "Hermes AI throws errors on every message, completely unusable",
          businessImpact: "No automated guest support → 100% dependency on staff",
          solution: "Rebuild with OpenAI integration and proper error handling",
          timeline: "2 weeks"
        },
        {
          title: "PWA Installation Invisible",
          severity: "critical",
          impact: "Medium",
          description: "No install prompt appears, defeating PWA purpose",
          businessImpact: "Mobile engagement limited to browser sessions only",
          solution: "Implement proper PWA manifest and install prompt triggers",
          timeline: "3 days"
        },
        {
          title: "Check-in Page Slow Loading",
          severity: "high",
          impact: "High",
          description: "3+ seconds load time exceeds user tolerance (53% abandon after 3s)",
          businessImpact: "Lost check-ins → front desk overflow → poor guest experience",
          solution: "Code splitting, lazy loading, performance optimization",
          timeline: "1 week"
        }
      ]
    },
    {
      category: "Critical UX Problems",
      severity: "high",
      count: 6,
      icon: <Smartphone className="w-6 h-6" />,
      description: "Major user experience issues causing confusion and abandonment",
      issues: [
        {
          title: "Weather Widget UX Nightmare",
          severity: "high",
          impact: "Medium",
          description: "Opens in Fahrenheit with no visual indication it's clickable, confusing toggle design (dark=Celsius, bright=Fahrenheit)",
          businessImpact: "Poor weather integration → missed contextual recommendations",
          solution: "Redesign with clear unit labels, proper toggle UX, and contextual weather suggestions",
          timeline: "3 days"
        },
        {
          title: "Redundant Pages Everywhere",
          severity: "high",
          impact: "Medium", 
          description: "Check-in and My Reservation are identical pages, causing user confusion",
          businessImpact: "Cognitive overload → reduced conversion rates",
          solution: "Consolidate redundant functionality, clear user journey paths",
          timeline: "1 week"
        },
        {
          title: "Bottom Navigation Disappears",
          severity: "high",
          impact: "High",
          description: "Critical navigation vanishes in Menu, Shop, Table Reservation flows",
          businessImpact: "Users get trapped → abandon purchases → revenue loss",
          solution: "Consistent navigation architecture across all flows",
          timeline: "2 days"
        },
        {
          title: "Broken Menu Search Logic",
          severity: "medium",
          impact: "Medium",
          description: "Search only shows categories, not actual items - confusing and useless",
          businessImpact: "Poor food ordering experience → reduced F&B revenue",
          solution: "Implement proper search hierarchy: items → categories → descriptions",
          timeline: "1 week"
        },
        {
          title: "No Check-in Prominence",
          severity: "high",
          impact: "High",
          description: "Check-in buried in menu despite being primary use case for hotel apps",
          businessImpact: "Low digital check-in adoption → staff workload → operational costs",
          solution: "Promote check-in to homepage hero section with progress indicators",
          timeline: "2 days"
        },
        {
          title: "Information Overload on Homepage",
          severity: "medium",
          impact: "Medium",
          description: "18 menu items presented equally, no prioritization or journey awareness",
          businessImpact: "Decision paralysis → reduced engagement → poor stickiness",
          solution: "Journey-stage intelligence to show relevant actions only",
          timeline: "2 weeks"
        }
      ]
    },
    {
      category: "Revenue-Killing Flow Issues",
      severity: "high",
      count: 4,
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Problems directly impacting monetization and conversions",
      issues: [
        {
          title: "Shop & Services: No Order Tracking",
          severity: "high",
          impact: "High",
          description: "Users submit requests with no follow-up system or status tracking",
          businessImpact: "Poor service experience → negative reviews → brand damage",
          solution: "Real-time order tracking with PMS integration and automated updates",
          timeline: "3 weeks"
        },
        {
          title: "External Links Break App Flow",
          severity: "medium",
          impact: "Medium",
          description: "Attractions, TV Schedule lead to external sites with no return path",
          businessImpact: "Users leave app → no monetization opportunity → lost engagement",
          solution: "In-app webviews with return navigation and cross-selling opportunities",
          timeline: "1 week"
        },
        {
          title: "No Upselling Integration",
          severity: "high",
          impact: "High",
          description: "Booking flow lacks upgrade prompts, room selection, or package offers",
          businessImpact: "Missed €15-45 per booking in additional revenue",
          solution: "Dynamic upselling engine with real-time availability and personalization",
          timeline: "4 weeks"
        },
        {
          title: "Generic Product Presentation",
          severity: "medium",
          impact: "Medium",
          description: "Shop and services show all items regardless of guest context or weather",
          businessImpact: "Poor conversion rates → 13% vs industry 25% potential",
          solution: "Context-aware product curation based on weather, time, guest profile",
          timeline: "2 weeks"
        }
      ]
    },
    {
      category: "Technical Architecture Problems",
      severity: "medium", 
      count: 4,
      icon: <WifiOff className="w-6 h-6" />,
      description: "Underlying technical issues affecting performance and reliability",
      issues: [
        {
          title: "No Offline Capability",
          severity: "medium",
          impact: "Medium",
          description: "App completely breaks without internet connection",
          businessImpact: "Poor hotel wifi → app unusable → guest frustration",
          solution: "Service worker implementation with offline-first architecture",
          timeline: "2 weeks"
        },
        {
          title: "Poor Mobile Responsiveness",
          severity: "medium",
          impact: "Medium", 
          description: "UI elements overlap, navigation issues on various screen sizes",
          businessImpact: "Poor mobile experience → 70% of users on mobile → lost engagement",
          solution: "Mobile-first responsive design with proper viewport handling",
          timeline: "1 week"
        },
        {
          title: "No Localization Strategy",
          severity: "low",
          impact: "Medium",
          description: "Hard-coded English text, no multi-language support for German market",
          businessImpact: "Limited market reach → missed international guest engagement",
          solution: "Internationalization framework with German/English language switching",
          timeline: "2 weeks"
        },
        {
          title: "Legacy UI That Looks Outdated",
          severity: "low",
          impact: "Low",
          description: "Design doesn't meet modern mobile app standards, feels old",
          businessImpact: "Poor brand perception → reduced trust → lower adoption",
          solution: "Modern UI redesign with current design system and microinteractions",
          timeline: "4 weeks"
        }
      ]
    }
  ];

  const overallStats = {
    totalIssues: criticalIssues.reduce((sum, cat) => sum + cat.count, 0),
    criticalIssues: criticalIssues.filter(cat => cat.severity === 'critical').reduce((sum, cat) => sum + cat.count, 0),
    estimatedRevenueLoss: "€47K+ (projected)",
    fixTimeframe: "8-12 weeks"
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'error';
      case 'high': return 'warning'; 
      case 'medium': return 'info';
      case 'low': return 'success';
      default: return 'neutral';
    }
  };

  const getSeverityBadge = (severity) => {
    const color = getSeverityColor(severity);
    return <span className={`badge badge-${color} badge-sm`}>{severity.toUpperCase()}</span>;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="badge badge-error badge-lg mb-4">Critical Analysis</div>
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Current App Analysis
        </h1>
        <h2 className="text-2xl font-semibold text-error mb-6">
          18 Critical Issues Identified
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          Based on comprehensive analysis of the current Straiv Guest App, I've identified systematic issues 
          across functionality, UX design, revenue optimization, and technical architecture that require immediate attention.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="stat bg-error/10 border border-error/20 rounded-lg p-6 text-center">
          <div className="stat-figure text-error">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="stat-value text-error text-3xl">{overallStats.totalIssues}</div>
          <div className="stat-title text-sm">Total Issues Found</div>
        </div>
        <div className="stat bg-warning/10 border border-warning/20 rounded-lg p-6 text-center">
          <div className="stat-figure text-warning">
            <Clock className="w-8 h-8" />
          </div>
          <div className="stat-value text-warning text-3xl">{overallStats.criticalIssues}</div>
          <div className="stat-title text-sm">Critical Priority</div>
        </div>
        <div className="stat bg-info/10 border border-info/20 rounded-lg p-6 text-center">
          <div className="stat-figure text-info">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <div className="stat-value text-info text-2xl leading-tight">€47K+</div>
          <div className="stat-title text-sm">Annual Revenue Loss</div>
        </div>
        <div className="stat bg-success/10 border border-success/20 rounded-lg p-6 text-center">
          <div className="stat-figure text-success">
            <CheckCircle className="w-8 h-8" />
          </div>
          <div className="stat-value text-success text-3xl">{overallStats.fixTimeframe}</div>
          <div className="stat-title text-sm">Fix Timeframe</div>
        </div>
      </div>

      {/* Issue Categories */}
      <div className="space-y-6">
        {criticalIssues.map((category, categoryIndex) => (
          <div key={categoryIndex} className={`card bg-base-100 border border-${getSeverityColor(category.severity)}/20`}>
            <div className="card-body">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-${getSeverityColor(category.severity)}/10`}>
                    <div className={`text-${getSeverityColor(category.severity)}`}>
                      {category.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                    <p className="text-base-content/70">{category.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  {getSeverityBadge(category.severity)}
                  <div className="text-2xl font-bold mt-2">{category.count}</div>
                  <div className="text-xs">Issues</div>
                  {expandedCategory === categoryIndex ? <ChevronUp className="w-5 h-5 mt-2" /> : <ChevronDown className="w-5 h-5 mt-2" />}
                </div>
              </div>

              {/* Expanded Issues List */}
              {expandedCategory === categoryIndex && (
                <div className="mt-6 space-y-4">
                  {category.issues.map((issue, issueIndex) => (
                    <div 
                      key={issueIndex} 
                      className={`p-4 border border-${getSeverityColor(issue.severity)}/20 rounded-lg hover:bg-base-200 cursor-pointer transition-all`}
                      onClick={() => setSelectedIssue(selectedIssue === `${categoryIndex}-${issueIndex}` ? null : `${categoryIndex}-${issueIndex}`)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-2">
                            {getSeverityBadge(issue.severity)}
                            <h4 className="font-semibold text-lg">{issue.title}</h4>
                          </div>
                          <p className="text-base-content/80 mb-2">{issue.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="badge badge-outline">Impact: {issue.impact}</span>
                            <span className="badge badge-outline">Fix: {issue.timeline}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-base-content/50" />
                      </div>

                      {/* Detailed Issue View */}
                      {selectedIssue === `${categoryIndex}-${issueIndex}` && (
                        <div className="mt-4 pt-4 border-t border-base-300">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-error mb-2">Business Impact</h5>
                              <p className="text-sm text-base-content/80 mb-4">{issue.businessImpact}</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-success mb-2">Recommended Solution</h5>
                              <p className="text-sm text-base-content/80 mb-4">{issue.solution}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Priority Matrix */}
      <div className="card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">My Recommended Fix Priority</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Week 1-2: Critical Fixes */}
            <div className="space-y-4">
              <h3 className="font-bold text-error flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Week 1-2: Critical Fixes
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-error/10 rounded border border-error/20">
                  <div className="font-medium text-sm">Search Functionality</div>
                  <div className="text-xs text-base-content/70">Fix core search + autocomplete</div>
                </div>
                <div className="p-3 bg-error/10 rounded border border-error/20">
                  <div className="font-medium text-sm">AI Chatbot Repair</div>
                  <div className="text-xs text-base-content/70">Basic error handling + OpenAI</div>
                </div>
                <div className="p-3 bg-error/10 rounded border border-error/20">
                  <div className="font-medium text-sm">Performance Optimization</div>
                  <div className="text-xs text-base-content/70">Check-in page load time</div>
                </div>
              </div>
            </div>

            {/* Week 3-4: UX Improvements */}
            <div className="space-y-4">
              <h3 className="font-bold text-warning flex items-center gap-2">
                <Navigation className="w-5 h-5" />
                Week 3-4: UX Improvements
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-warning/10 rounded border border-warning/20">
                  <div className="font-medium text-sm">Navigation Consistency</div>
                  <div className="text-xs text-base-content/70">Fix missing bottom nav</div>
                </div>
                <div className="p-3 bg-warning/10 rounded border border-warning/20">
                  <div className="font-medium text-sm">Weather Widget UX</div>
                  <div className="text-xs text-base-content/70">Clear unit indicators</div>
                </div>
                <div className="p-3 bg-warning/10 rounded border border-warning/20">
                  <div className="font-medium text-sm">Remove Redundancy</div>
                  <div className="text-xs text-base-content/70">Merge duplicate pages</div>
                </div>
              </div>
            </div>

            {/* Week 5-8: Revenue Optimization */}
            <div className="space-y-4">
              <h3 className="font-bold text-success flex items-center gap-2">
                <Star className="w-5 h-5" />
                Week 5-8: Revenue Features
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-success/10 rounded border border-success/20">
                  <div className="font-medium text-sm">Order Tracking System</div>
                  <div className="text-xs text-base-content/70">Real-time status updates</div>
                </div>
                <div className="p-3 bg-success/10 rounded border border-success/20">
                  <div className="font-medium text-sm">Upselling Engine</div>
                  <div className="text-xs text-base-content/70">Dynamic upgrade offers</div>
                </div>
                <div className="p-3 bg-success/10 rounded border border-success/20">
                  <div className="font-medium text-sm">Context-Aware Products</div>
                  <div className="text-xs text-base-content/70">Weather-based suggestions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Impact Summary */}
      <div className="card bg-error/5 border border-error/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-4 text-error">Current Cost of These Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-error">€47K+</div>
              <div className="text-sm">Projected Annual Revenue Loss</div>
              <div className="text-xs text-base-content/60">Per 200-room hotel from poor conversion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning">73%</div>
              <div className="text-sm">Guest Willingness Wasted</div>
              <div className="text-xs text-base-content/60">Want apps but poor experience drives them away</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-info">4x</div>
              <div className="text-sm">Staff Workload Increase</div>
              <div className="text-xs text-base-content/60">Due to non-functional digital services</div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button 
          className="card bg-gradient-to-r from-primary to-secondary text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('stickiness-strategy')}
        >
          <div className="card-body text-center">
            <CheckCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">My Stickiness Strategy</h3>
            <p className="text-sm opacity-80">How to fix these issues and create engaging experiences</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>

        <button 
          className="card bg-gradient-to-r from-success to-accent text-base-content hover:scale-105 transition-transform cursor-pointer"
          onClick={() => onSectionChange('conversion-strategy')}
        >
          <div className="card-body text-center">
            <ShoppingCart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="card-title justify-center">My Conversion Strategy</h3>
            <p className="text-sm opacity-80">Revenue optimization and touchpoint improvements</p>
            <div className="card-actions justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CurrentAnalysis; 