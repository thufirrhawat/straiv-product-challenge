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
      category: "Performance & Technical Issues",
      severity: "critical",
      count: 5,
      icon: <Clock className="w-6 h-6" />,
      description: "Critical performance gaps and technical implementation issues",
      issues: [
        {
          title: "Loading Time Performance Gap",
          severity: "critical",
          impact: "High",
          description: "Studies show acceptable launch time is 2-3 seconds. Beyond that, user frustration and abandonment rates spike",
          businessImpact: "72% of users expect app onboarding under 60 seconds - current performance fails this benchmark",
          solution: "Performance optimization, code splitting, lazy loading implementation",
          timeline: "2 weeks"
        },
        {
          title: "PWA Installation Missing",
          severity: "critical",
          impact: "High",
          description: "No automatic installation prompts detected - PWAs require proper manifest file and beforeinstallprompt event implementation",
          businessImpact: "Mobile engagement limited to browser sessions only, reduces stickiness",
          solution: "Implement proper PWA manifest and install prompt triggers",
          timeline: "1 week"
        },
        {
          title: "iOS PWA Limitations",
          severity: "medium",
          impact: "Medium",
          description: "Safari doesn't provide automatic installation prompts, users must manually add via Share Sheet",
          businessImpact: "Reduced iOS user adoption and engagement",
          solution: "Custom iOS installation guidance and Share Sheet optimization",
          timeline: "1 week"
        },
        {
          title: "One-Second Delay Impact",
          severity: "high",
          impact: "High",
          description: "A one-second delay can lose nearly 10% of total visitors from a mobile application",
          businessImpact: "Direct correlation between performance and user retention",
          solution: "Implement performance monitoring and optimization strategies",
          timeline: "3 weeks"
        },
        {
          title: "Mobile Experience Issues",
          severity: "high",
          impact: "High",
          description: "70% of users may abandon an app due to prolonged loading times",
          businessImpact: "High abandonment rates reduce overall app effectiveness",
          solution: "Mobile-first optimization and progressive loading strategies",
          timeline: "2 weeks"
        }
      ]
    },
    {
      category: "Core Functionality Problems",
      severity: "critical",
      count: 4,
      icon: <Search className="w-6 h-6" />,
      description: "Essential features that are non-functional or poorly implemented",
      issues: [
        {
          title: "Non-Functional Search",
          severity: "critical",
          impact: "High",
          description: "Primary search feature is completely non-functional",
          businessImpact: "Creates frustration and abandonment during content discovery",
          solution: "Implement functional search with autocomplete and intelligent filtering",
          timeline: "1 week"
        },
        {
          title: "Limited Menu Search",
          severity: "high",
          impact: "Medium",
          description: "Menu search only searches categories rather than individual items",
          businessImpact: "Poor food ordering experience reduces F&B revenue potential",
          solution: "Implement comprehensive search across all menu items and descriptions",
          timeline: "1 week"
        },
        {
          title: "Navigation Disappears",
          severity: "critical",
          impact: "High",
          description: "Bottom navigation disappears in detailed views (Menu, Shop, Spa sections)",
          businessImpact: "Users get trapped in flows, leading to abandonment and revenue loss",
          solution: "Implement consistent navigation architecture across all sections",
          timeline: "3 days"
        },
        {
          title: "Button Overlap Issues",
          severity: "medium",
          impact: "Medium",
          description: "Navigation buttons overlap with AI chat button in multiple sections",
          businessImpact: "Poor user experience reduces engagement and functionality",
          solution: "Redesign layout with proper spacing and z-index management",
          timeline: "2 days"
        }
      ]
    },
    {
      category: "User Interface & Design Gaps",
      severity: "high",
      count: 5,
      icon: <Smartphone className="w-6 h-6" />,
      description: "UX design issues that confuse users and reduce engagement",
      issues: [
        {
          title: "Weather Widget UX Problems",
          severity: "high",
          impact: "Medium",
          description: "No visual indication that temperature unit can be changed, poor toggle design contradicts UX patterns",
          businessImpact: "Missed contextual recommendations and poor weather integration",
          solution: "Redesign with clear unit labels and proper toggle UX patterns",
          timeline: "3 days"
        },
        {
          title: "Redundant Pages",
          severity: "medium",
          impact: "Medium",
          description: "Check In and My Reservation are identical pre-login pages",
          businessImpact: "Cognitive overload reduces conversion rates",
          solution: "Consolidate redundant functionality with clear user journey paths",
          timeline: "1 week"
        },
        {
          title: "Feature Sprawl",
          severity: "high",
          impact: "High",
          description: "18 menu items in pre-check-in stage creates cognitive overload",
          businessImpact: "Decision paralysis reduces engagement and stickiness",
          solution: "Journey-stage intelligence to show relevant actions only",
          timeline: "2 weeks"
        },
        {
          title: "External Dependencies",
          severity: "medium",
          impact: "Medium",
          description: "Multiple features redirect to external websites with no return path",
          businessImpact: "Users leave app with no monetization opportunity",
          solution: "Implement in-app webviews with proper return navigation",
          timeline: "1 week"
        },
        {
          title: "Inconsistent Patterns",
          severity: "low",
          impact: "Low",
          description: "Different interaction patterns across similar features (Attractions vs Insider Tips)",
          businessImpact: "Confusing user experience reduces overall app quality",
          solution: "Standardize interaction patterns across similar feature sets",
          timeline: "1 week"
        }
      ]
    },
    {
      category: "Conversion & Engagement Barriers",
      severity: "critical",
      count: 4,
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Issues directly blocking revenue generation and user engagement",
      issues: [
        {
          title: "Check-in Process Buried",
          severity: "critical",
          impact: "High",
          description: "Primary check-in functionality buried in menu rather than prominent homepage placement",
          businessImpact: "Low digital check-in adoption increases staff workload and operational costs",
          solution: "Promote check-in to homepage hero section with progress indicators",
          timeline: "2 days"
        },
        {
          title: "Incomplete Transaction Feedback",
          severity: "high",
          impact: "High",
          description: "Shop, Spa, Table Reservation provide no confirmation tracking or clear next steps",
          businessImpact: "Poor service experience leads to negative reviews and brand damage",
          solution: "Implement real-time order tracking with PMS integration",
          timeline: "3 weeks"
        },
        {
          title: "AI Chatbot Issues",
          severity: "high",
          impact: "Medium",
          description: "Redundant UI, error responses, and poor visual design reduce trust and engagement",
          businessImpact: "Prevents customer service automation, increases staff dependency",
          solution: "Rebuild with modern interface and proper error handling",
          timeline: "2 weeks"
        },
        {
          title: "Missing Revenue Integration",
          severity: "high",
          impact: "High",
          description: "No connection to booking systems or upselling opportunities",
          businessImpact: "Missed revenue opportunities and incomplete guest journey tracking",
          solution: "Integrate with hotel revenue systems and implement dynamic upselling",
          timeline: "4 weeks"
        }
      ]
    }
  ];

  const overallStats = {
    totalIssues: criticalIssues.reduce((sum, cat) => sum + cat.count, 0),
    criticalIssues: criticalIssues.filter(cat => cat.severity === 'critical').reduce((sum, cat) => sum + cat.count, 0),
    estimatedRevenueLoss: "35% Gap",
    fixTimeframe: "12 weeks"
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
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Critical Improvement Areas
        </h1>
        <h2 className="text-2xl font-semibold text-error mb-6">
          18 Systematic Improvements Identified
        </h2>
        <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
          Based on systematic evaluation of Straiv's guest app across key user experience and technical performance metrics, 
          I've identified critical areas requiring immediate attention to bridge the adoption gap.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="stat bg-base-100 border border-base-300 rounded-lg p-6 text-center shadow-sm">
          <div className="stat-figure text-base-content">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="stat-value text-base-content text-3xl font-bold">{overallStats.totalIssues}</div>
          <div className="stat-title text-sm text-base-content/70 font-medium">Total Issues Found</div>
        </div>
        <div className="stat bg-base-100 border border-base-300 rounded-lg p-6 text-center shadow-sm">
          <div className="stat-figure text-primary">
            <Clock className="w-8 h-8" />
          </div>
          <div className="stat-value text-primary text-3xl font-bold">{overallStats.criticalIssues}</div>
          <div className="stat-title text-sm text-base-content/70 font-medium">Critical Priority</div>
        </div>
        <div className="stat bg-base-100 border border-base-300 rounded-lg p-6 text-center shadow-sm">
          <div className="stat-figure text-warning">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <div className="stat-value text-warning text-3xl leading-tight font-bold">35%</div>
          <div className="stat-title text-sm text-base-content/70 font-medium">Adoption Gap</div>
        </div>
        <div className="stat bg-base-100 border border-base-300 rounded-lg p-6 text-center shadow-sm">
          <div className="stat-figure text-secondary">
            <CheckCircle className="w-8 h-8" />
          </div>
          <div className="stat-value text-secondary text-3xl font-bold">12</div>
          <div className="stat-title text-sm text-base-content/70 font-medium">Weeks to Impact</div>
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

      {/* Strategic Priority Framework */}
      <div className="card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Strategic Priority Framework</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Wins (2-4 weeks) */}
            <div className="space-y-4">
              <h3 className="font-bold text-success flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Quick Wins (2-4 weeks)
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-success/10 rounded border border-success/20">
                  <div className="font-medium text-sm">Fix Non-Functional Search</div>
                  <div className="text-xs text-base-content/70">Implement working search with autocomplete</div>
                </div>
                <div className="p-3 bg-success/10 rounded border border-success/20">
                  <div className="font-medium text-sm">Resolve Navigation Button Overlaps</div>
                  <div className="text-xs text-base-content/70">Fix UI spacing and z-index issues</div>
                </div>
                <div className="p-3 bg-success/10 rounded border border-success/20">
                  <div className="font-medium text-sm">Improve Weather Widget UX</div>
                  <div className="text-xs text-base-content/70">Clear unit indicators and proper toggle</div>
                </div>
                <div className="p-3 bg-success/10 rounded border border-success/20">
                  <div className="font-medium text-sm">Implement PWA Install Prompts</div>
                  <div className="text-xs text-base-content/70">Proper manifest and installation triggers</div>
                </div>
              </div>
            </div>

            {/* Medium Impact (4-8 weeks) */}
            <div className="space-y-4">
              <h3 className="font-bold text-warning flex items-center gap-2">
                <Navigation className="w-5 h-5" />
                Medium Impact (4-8 weeks)
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-warning/10 rounded border border-warning/20">
                  <div className="font-medium text-sm">Consolidate Redundant Pages</div>
                  <div className="text-xs text-base-content/70">Merge Check In and My Reservation</div>
                </div>
                <div className="p-3 bg-warning/10 rounded border border-warning/20">
                  <div className="font-medium text-sm">Optimize Check-in Process Placement</div>
                  <div className="text-xs text-base-content/70">Promote to homepage hero section</div>
                </div>
                <div className="p-3 bg-warning/10 rounded border border-warning/20">
                  <div className="font-medium text-sm">Implement Proper Transaction Feedback</div>
                  <div className="text-xs text-base-content/70">Real-time order tracking system</div>
                </div>
                <div className="p-3 bg-warning/10 rounded border border-warning/20">
                  <div className="font-medium text-sm">Streamline Menu Structure</div>
                  <div className="text-xs text-base-content/70">Journey-stage intelligence implementation</div>
                </div>
              </div>
            </div>

            {/* Long-term Strategic (8-12 weeks) */}
            <div className="space-y-4">
              <h3 className="font-bold text-error flex items-center gap-2">
                <Star className="w-5 h-5" />
                Long-term Strategic (8-12 weeks)
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-error/10 rounded border border-error/20">
                  <div className="font-medium text-sm">Integrate External Features Natively</div>
                  <div className="text-xs text-base-content/70">In-app webviews with return navigation</div>
                </div>
                <div className="p-3 bg-error/10 rounded border border-error/20">
                  <div className="font-medium text-sm">Develop Local Partnership Revenue Models</div>
                  <div className="text-xs text-base-content/70">Commission opportunities and monetization</div>
                </div>
                <div className="p-3 bg-error/10 rounded border border-error/20">
                  <div className="font-medium text-sm">Implement Comprehensive Booking System Integration</div>
                  <div className="text-xs text-base-content/70">PMS integration and dynamic upselling</div>
                </div>
                <div className="p-3 bg-error/10 rounded border border-error/20">
                  <div className="font-medium text-sm">Modernize Overall UI Design</div>
                  <div className="text-xs text-base-content/70">Current design system and microinteractions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Impact Analysis */}
      <div className="card bg-error/5 border border-error/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-4 text-error">Business Impact Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-error">80%</div>
              <div className="text-sm font-medium">User Abandonment</div>
              <div className="text-xs text-base-content/60">Delete app after first use due to bad UX, slow load times, and crashes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning">70%</div>
              <div className="text-sm font-medium">Mobile Experience Impact</div>
              <div className="text-xs text-base-content/60">Users abandon apps due to prolonged loading times</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-info">10%</div>
              <div className="text-sm font-medium">Per-Second Performance Loss</div>
              <div className="text-xs text-base-content/60">Visitors lost for each second of loading delay</div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-base-200 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Key Finding</h3>
            <p className="text-base-content/80">
              While Straiv's app has comprehensive feature coverage, fundamental UX and technical issues prevent 
              optimal user adoption and revenue realization. Addressing these systematically will unlock the 
              identified 35% adoption gap opportunity.
            </p>
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