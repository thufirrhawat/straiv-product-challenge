import React, { useState } from 'react';
import { ExternalLink, BookOpen, BarChart, Globe, Smartphone, TrendingUp, Users, Zap, Shield, Search, Brain, DollarSign } from 'lucide-react';

const Sources = () => {
  const [activeCategory, setActiveCategory] = useState('hospitality');
  const [searchTerm, setSearchTerm] = useState('');

  const sourceCategories = {
    hospitality: {
      title: "Hospitality App Performance & Usage",
      icon: <BookOpen className="w-6 h-6" />,
      color: "primary",
      sources: [
        {
          title: "Mobile Apps Transforming Hospitality 2024",
          url: "https://fueled.com/blog/mobile-apps-transforming-hospitality-2024/",
          description: "Comprehensive analysis of mobile app trends in hospitality industry",
          type: "Industry Report"
        },
        {
          title: "Hotels Struggle with Mobile App Adoption",
          url: "https://www.pcma.org/new-study-shows-hotels-struggle-with-mobile-app-adoption/",
          description: "Study revealing the 73% vs 38% guest willingness/usage gap",
          type: "Research Study"
        },
        {
          title: "Best Hotel Guest Apps Analysis",
          url: "https://thehotelgm.com/tools/best-hotel-guest-apps/",
          description: "Evaluation of top-performing hotel guest applications",
          type: "Comparative Analysis"
        },
        {
          title: "Hotel App Usage Patterns",
          url: "https://www.hotelmanagement.net/tech/hotel-app-users-actually-use-app",
          description: "Data on actual vs intended hotel app usage patterns",
          type: "Usage Analytics"
        },
        {
          title: "Hotel Guest Apps in 2025: Data Insights",
          url: "https://www.hotelspeak.com/2025/03/hotel-guest-apps-in-2025-what-the-data-says-about-features-guests-actually-use/",
          description: "Latest data on guest app feature usage and preferences",
          type: "Market Research"
        }
      ]
    },
    retention: {
      title: "App Retention & Engagement",
      icon: <BarChart className="w-6 h-6" />,
      color: "secondary",
      sources: [
        {
          title: "App Retention Rate Industry Analysis",
          url: "https://www.nudgenow.com/blogs/app-retention-rate-industry-analysis",
          description: "Comprehensive breakdown of retention rates by industry (3.6-4.5% Day 30)",
          type: "Industry Benchmark"
        },
        {
          title: "App Retention Benchmarks by Industry",
          url: "https://sendbird.com/blog/app-retention-benchmarks-broken-down-by-industry",
          description: "Detailed retention statistics across different app categories",
          type: "Analytics Report"
        },
        {
          title: "Mobile App Retention: eCommerce & Travel",
          url: "https://www.moengage.com/blog/mobile-app-retention-ecommerce-travel-industry/",
          description: "Specific retention data for travel and hospitality apps",
          type: "Sector Analysis"
        }
      ]
    },
    performance: {
      title: "Performance & Loading Times",
      icon: <Zap className="w-6 h-6" />,
      color: "accent",
      sources: [
        {
          title: "Page Speed Impact on Conversion Rates",
          url: "https://fleexy.dev/blog/how-page-speed-affects-conversion-rates-study/",
          description: "Study showing conversion impact of loading times",
          type: "Performance Study"
        },
        {
          title: "4-Second Loading Rule Analysis",
          url: "https://www.hobo-web.co.uk/your-website-design-should-load-in-4-seconds/",
          description: "Research on optimal loading times for user experience",
          type: "UX Research"
        },
        {
          title: "53% Mobile User Abandonment Study",
          url: "https://tenacity.io/facts/why-53-of-mobile-users-abandon-slow-websites-the-importance-of-page-load-time/",
          description: "Google's research on mobile site abandonment after 3+ seconds",
          type: "Google Study"
        },
        {
          title: "Page Speed & Conversion Optimization",
          url: "https://nitropack.io/blog/post/how-page-speed-affects-conversion",
          description: "Detailed analysis of speed impact on business metrics",
          type: "Technical Analysis"
        }
      ]
    },
    pwa: {
      title: "PWA vs Native Apps",
      icon: <Smartphone className="w-6 h-6" />,
      color: "info",
      sources: [
        {
          title: "PWA vs Native App Install Rates",
          url: "https://mobsted.com/pwa_vs_native_mobile_apps_install_rates_compare",
          description: "Comparative analysis of installation and engagement rates",
          type: "Comparative Study"
        },
        {
          title: "Progressive Web Apps vs Native Apps Guide",
          url: "https://www.turing.com/blog/progressive-web-apps-vs-native-apps",
          description: "Technical and business comparison of app approaches",
          type: "Technical Guide"
        },
        {
          title: "PWA vs Native Apps in 2024",
          url: "https://www.directimpactsolutions.com/en/pwa-vs-native-apps-in-2024/",
          description: "Current state analysis of PWA vs native app performance",
          type: "Market Analysis"
        },
        {
          title: "PWA for Travel Industry",
          url: "https://simicart.com/blog/best-pwa-travel-industry/",
          description: "PWA implementation strategies for travel and hospitality",
          type: "Industry Guide"
        },
        {
          title: "PWA Statistics for Travel",
          url: "https://www.pwastats.com/tags/travel",
          description: "Performance statistics for PWAs in travel sector",
          type: "Performance Data"
        },
        {
          title: "PWA vs Native for Hospitality",
          url: "https://www.getlavanda.com/insights/news-and-resources-pwa-vs-native-app-for-the-hospitality-sector/",
          description: "Hospitality-specific comparison of app technologies",
          type: "Sector Analysis"
        }
      ]
    },
    conversion: {
      title: "Conversion Optimization",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "success",
      sources: [
        {
          title: "Hotel Revenue Optimization Strategies",
          url: "https://www.hospitalitynet.org/viewpoint/125000226.html",
          description: "Revenue management and conversion optimization for hotels",
          type: "Strategy Guide"
        },
        {
          title: "Hotel Website Conversion Benchmarks",
          url: "https://www.hotelbenchmarking.com/blog/what-is-a-good-conversion-rate-for-a-hotel-website/",
          description: "Industry benchmarks for hotel website conversion rates",
          type: "Benchmark Data"
        },
        {
          title: "Hotel Website Conversion Guide 2024",
          url: "https://www.syndacast.com/maximize-hotel-website-conversions-a-practical-guide-for-better-conversions-rate-in-2024/",
          description: "Practical strategies for improving hotel conversion rates",
          type: "Implementation Guide"
        },
        {
          title: "Travel & Tourism Conversion Rates by Device",
          url: "https://www.statista.com/statistics/1350599/conversion-rate-travel-tourism-websites-by-device-worldwide/",
          description: "Device-specific conversion data for travel industry",
          type: "Statistical Data"
        },
        {
          title: "UX/UI for Travel & Hospitality",
          url: "https://sennalabs.com/blog/ux-ui-for-travel-and-hospitality-websites",
          description: "Design principles for travel and hospitality conversion",
          type: "Design Guide"
        }
      ]
    },
    upselling: {
      title: "Hotel Upselling & Revenue",
      icon: <DollarSign className="w-6 h-6" />,
      color: "warning",
      sources: [
        {
          title: "Hotel Upsell Software Analysis",
          url: "https://www.mews.com/en/blog/hotel-upsell-software",
          description: "Technology solutions for hotel upselling and revenue optimization",
          type: "Technology Review"
        },
        {
          title: "Hotel Mobile Check-in Benefits",
          url: "https://www.blueprintrf.com/hotel-mobile-check-in/",
          description: "Revenue impact of mobile check-in and upselling opportunities",
          type: "Business Case"
        }
      ]
    },
    ai: {
      title: "AI & Chatbots in Hospitality",
      icon: <Brain className="w-6 h-6" />,
      color: "primary",
      sources: [
        {
          title: "AI Chatbots for Hotels",
          url: "https://typebot.io/blog/ai-chatbot-for-hotels",
          description: "Implementation and benefits of AI chatbots in hospitality",
          type: "Technology Guide"
        },
        {
          title: "AI in Hospitality Technology Report",
          url: "https://hoteltechreport.com/news/ai-in-hospitality",
          description: "Comprehensive report on AI adoption in hospitality industry",
          type: "Industry Report"
        },
        {
          title: "AI Transforming Hospitality Industry",
          url: "https://duve.com/how-ai-is-transforming-the-hospitality-industry/",
          description: "Analysis of AI impact on hospitality operations and guest experience",
          type: "Transformation Study"
        },
        {
          title: "AI Innovations in Hotels",
          url: "https://www.canarytechnologies.com/post/ai-innovations-hotels",
          description: "Latest AI innovations and implementations in hotel industry",
          type: "Innovation Report"
        },
        {
          title: "AI in Hospitality Applications",
          url: "https://appinventiv.com/blog/ai-in-hospitality/",
          description: "Practical applications and case studies of AI in hospitality",
          type: "Application Guide"
        },
        {
          title: "AI in Hospitality Strategy",
          url: "https://www.netsuite.com/portal/resource/articles/business-strategy/ai-hospitality.shtml",
          description: "Strategic implementation of AI in hospitality business",
          type: "Strategy Guide"
        },
        {
          title: "AI's Evolving Impact on Customer Experience",
          url: "https://www.alvarezandmarsal.com/insights/transforming-hospitality-industry-ais-evolving-impact-customer-experience-and-hotel",
          description: "Analysis of AI's role in transforming hospitality customer experience",
          type: "Impact Analysis"
        }
      ]
    },
    ux: {
      title: "UX/UI Design & Navigation",
      icon: <Users className="w-6 h-6" />,
      color: "secondary",
      sources: [
        {
          title: "Mobile App Design Trends",
          url: "https://www.prismetric.com/mobile-app-design-trends/",
          description: "Latest trends in mobile app design and user experience",
          type: "Design Trends"
        },
        {
          title: "Weather in UI Design",
          url: "https://blog.tubikstudio.com/weather-in-ui-design-come-rain-or-shine/",
          description: "Best practices for weather widget design and UX",
          type: "Design Guide"
        },
        {
          title: "Weather UI Design Principles",
          url: "https://design4users.com/weather-in-ui-design-come-rain-or-shine/",
          description: "User experience principles for weather-related UI elements",
          type: "UX Principles"
        },
        {
          title: "Navigation UX Best Practices",
          url: "https://userpilot.com/blog/navigation-ux/",
          description: "Comprehensive guide to navigation user experience design",
          type: "UX Guide"
        },
        {
          title: "Navigation Design Fundamentals",
          url: "https://www.justinmind.com/blog/navigation-design-almost-everything-you-need-to-know/",
          description: "Complete guide to navigation design principles and patterns",
          type: "Design Fundamentals"
        },
        {
          title: "Mobile App Navigation Patterns",
          url: "https://www.aceinfoway.com/mobile-app-navigation",
          description: "Mobile-specific navigation patterns and best practices",
          type: "Mobile UX"
        },
        {
          title: "Mobile Navigation Examples",
          url: "https://www.uxpin.com/studio/blog/mobile-navigation-examples/",
          description: "Real-world examples of effective mobile navigation design",
          type: "Design Examples"
        },
        {
          title: "Mobile App UI/UX Design Trends",
          url: "https://spdload.com/blog/mobile-app-ui-ux-design-trends/",
          description: "Current trends in mobile app user interface and experience design",
          type: "Design Trends"
        }
      ]
    },
    tech: {
      title: "Hospitality Technology Trends",
      icon: <Globe className="w-6 h-6" />,
      color: "accent",
      sources: [
        {
          title: "Technology Trends in Hospitality Industry",
          url: "https://hospitalityinsights.ehl.edu/technology-trends-hospitality-industry",
          description: "Comprehensive overview of emerging technology trends in hospitality",
          type: "Trend Analysis"
        },
        {
          title: "Key Hospitality Technology Trends 2025",
          url: "https://www.hftp.org/news/4125209/key-hospitality-technology-trends-to-watch-in-2025",
          description: "Forward-looking analysis of hospitality technology for 2025",
          type: "Future Trends"
        },
        {
          title: "Hospitality Technology News 2025",
          url: "https://www.hospitalitynet.org/news/4124813.html",
          description: "Latest developments in hospitality technology solutions",
          type: "Industry News"
        },
        {
          title: "IoT Solutions for Hotels",
          url: "https://www.blueprintrf.com/iot-solutions-for-hotels/",
          description: "Internet of Things applications and benefits for hotels",
          type: "Technology Guide"
        },
        {
          title: "AR/VR in Hospitality Guest Experience",
          url: "https://www.hotelmanagement.net/tech/how-hospitality-industry-using-ar-vr-guest-experience",
          description: "Augmented and virtual reality applications in hospitality",
          type: "Innovation Report"
        }
      ]
    },
    experience: {
      title: "Guest Experience & Success Stories",
      icon: <Shield className="w-6 h-6" />,
      color: "info",
      sources: [
        {
          title: "Seamless Guest Experience Through Technology",
          url: "https://blog.hotellinksolutions.com/creating-a-seamless-guest-experience-through-hotel-technology-integration",
          description: "Technology integration strategies for improved guest experience",
          type: "Integration Guide"
        },
        {
          title: "Hilton's Digital Innovation Success",
          url: "https://www.renascence.io/journal/how-hilton-enhances-customer-experience-cx-with-digital-innovations-in-hospitality",
          description: "Case study of Hilton's customer experience digital transformation",
          type: "Case Study"
        },
        {
          title: "5 Guest Experience Improvement Success Stories",
          url: "https://www.coax.digital/stories/5-success-stories-of-improving-guest-experience",
          description: "Real-world examples of successful guest experience improvements",
          type: "Success Stories"
        },
        {
          title: "Hotel Guest Experience Innovation",
          url: "https://www.hotelnewsresource.com/article129004.html",
          description: "Latest innovations in hotel guest experience technology",
          type: "Innovation Report"
        }
      ]
    },
    integration: {
      title: "Technical Integration & APIs",
      icon: <Zap className="w-6 h-6" />,
      color: "warning",
      sources: [
        {
          title: "Hotel Tech Stack Integrations & APIs",
          url: "https://www.viqal.com/blog/integrations-apis-in-the-hotel-tech-stack",
          description: "Technical guide to hotel technology integrations and APIs",
          type: "Technical Guide"
        },
        {
          title: "Hoteliers Guide to APIs",
          url: "https://hotelfriend.com/blogpost/hoteliers-guide-to-apis",
          description: "Business-focused guide to API implementation in hotels",
          type: "Business Guide"
        },
        {
          title: "Introduction to Hotel APIs 2023",
          url: "https://insights.shijigroup.com/an-introduction-to-hotel-apis-2023/",
          description: "Comprehensive introduction to hotel API ecosystem",
          type: "Technical Overview"
        }
      ]
    },
    benchmarks: {
      title: "Travel Industry Benchmarks",
      icon: <BarChart className="w-6 h-6" />,
      color: "success",
      sources: [
        {
          title: "Tourism Marketing Benchmarks",
          url: "https://www.promodo.com/blog/tourism-marketing-benchmarks",
          description: "Marketing performance benchmarks for tourism industry",
          type: "Marketing Benchmarks"
        },
        {
          title: "Mobile Apps Transforming Hospitality",
          url: "https://www.tekrevol.com/blogs/mobile-apps-transforming-the-hospitality-industry/",
          description: "Analysis of mobile app impact on hospitality transformation",
          type: "Industry Analysis"
        }
      ]
    },
    localization: {
      title: "Localization Research",
      icon: <Globe className="w-6 h-6" />,
      color: "primary",
      sources: [
        {
          title: "Global Consumer Language Preferences",
          url: "https://slator.com/third-global-survey-by-csa-research-finds-language-preference-of-consumers-in-29-countries/",
          description: "CSA Research survey on consumer language preferences across 29 countries",
          type: "Global Survey"
        },
        {
          title: "Localization Impact by Industry",
          url: "https://www.comtectranslations.co.uk/content-hub/the-case-for-localisation-how-to-measure-the-impact-of-translations-by-industry/",
          description: "Measurement of localization impact across different industries",
          type: "Impact Study"
        },
        {
          title: "Mobile App Localization Strategies",
          url: "https://moldstud.com/articles/p-strategies-for-mobile-app-localization-and-global-expansion",
          description: "Strategic approaches to mobile app localization and global expansion",
          type: "Strategy Guide"
        }
      ]
    },
    appanalysis: {
      title: "App Performance & User Expectations",
      icon: <Smartphone className="w-6 h-6" />,
      color: "error",
      sources: [
        {
          title: "Mobile App Performance in 2024: Enhancements and Expectations",
          url: "#",
          description: "User tolerance and loading time expectations for mobile applications",
          type: "Performance Study"
        },
        {
          title: "7 Proven Mobile App Loading Speed Tips in 2024",
          url: "#",
          description: "Industry benchmarks and optimization strategies for app performance",
          type: "Optimization Guide"
        },
        {
          title: "Mobile App User Expectations: You Have Two Seconds (or Less) to Impress",
          url: "#",
          description: "User abandonment patterns and expectations for mobile applications",
          type: "User Behavior Study"
        },
        {
          title: "How App Load Time Affects User Acquisition",
          url: "#",
          description: "Impact of performance on user retention and acquisition rates",
          type: "Acquisition Analysis"
        },
        {
          title: "Response Time Limits: Article by Jakob Nielsen",
          url: "https://www.nngroup.com/articles/response-times-3-important-limits/",
          description: "Classic UX response time guidelines and user interface expectations",
          type: "UX Guidelines"
        },
        {
          title: "Making PWAs Installable - Progressive Web Apps | MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs",
          description: "Technical implementation requirements for PWA installation",
          type: "Technical Documentation"
        },
        {
          title: "Installation Prompt | web.dev",
          url: "https://web.dev/install-criteria/",
          description: "Browser installation patterns and user experience for PWAs",
          type: "Developer Guide"
        },
        {
          title: "How to Provide Your Own In-App Install Experience",
          url: "https://web.dev/customize-install/",
          description: "Custom installation flow implementation for Progressive Web Apps",
          type: "Implementation Guide"
        },
        {
          title: "PWA on iOS - Current Status & Limitations",
          url: "#",
          description: "iOS-specific PWA constraints and workarounds for mobile apps",
          type: "Platform Analysis"
        },
        {
          title: "Effective Tips to Optimize Mobile App Loading Times",
          url: "#",
          description: "Performance optimization techniques for mobile applications",
          type: "Performance Guide"
        },
        {
          title: "Mobile App Performance: How to Improve and Test It?",
          url: "#",
          description: "Testing methodologies and metrics for mobile app performance",
          type: "Testing Guide"
        },
        {
          title: "How To Make Apps Load Faster in 2025? 7 Proven Tips",
          url: "#",
          description: "Current optimization best practices for mobile app performance",
          type: "Best Practices"
        }
      ]
    }
  };

  const filteredSources = () => {
    if (!searchTerm) return sourceCategories[activeCategory].sources;
    return sourceCategories[activeCategory].sources.filter(source =>
      source.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      source.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      source.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getTypeColor = (type) => {
    const colors = {
      "Industry Report": "badge-primary",
      "Research Study": "badge-secondary",
      "Comparative Analysis": "badge-accent",
      "Usage Analytics": "badge-info",
      "Market Research": "badge-success",
      "Industry Benchmark": "badge-warning",
      "Analytics Report": "badge-error",
      "Sector Analysis": "badge-neutral",
      "UX Research": "badge-secondary",
      "Google Study": "badge-accent",
      "Technical Analysis": "badge-info",
      "Comparative Study": "badge-success",
      "Technical Guide": "badge-warning",
      "Market Analysis": "badge-error",
      "Industry Guide": "badge-neutral",
      "Performance Data": "badge-primary",
      "Strategy Guide": "badge-secondary",
      "Benchmark Data": "badge-accent",
      "Statistical Data": "badge-success",
      "Design Guide": "badge-warning",
      "Technology Review": "badge-error",
      "Business Case": "badge-neutral",
      "Technology Guide": "badge-primary",
      "Transformation Study": "badge-secondary",
      "Innovation Report": "badge-accent",
      "Application Guide": "badge-info",
      "Impact Analysis": "badge-success",
      "Design Trends": "badge-warning",
      "UX Principles": "badge-error",
      "UX Guide": "badge-neutral",
      "Design Fundamentals": "badge-primary",
      "Mobile UX": "badge-secondary",
      "Design Examples": "badge-accent",
      "Trend Analysis": "badge-info",
      "Future Trends": "badge-success",
      "Industry News": "badge-warning",
      "Integration Guide": "badge-error",
      "Case Study": "badge-neutral",
      "Success Stories": "badge-primary",
      "Technical Overview": "badge-secondary",
      "Business Guide": "badge-accent",
      "Marketing Benchmarks": "badge-info",
      "Industry Analysis": "badge-success",
      "Global Survey": "badge-warning",
      "Impact Study": "badge-error",
      "Localization Strategy": "badge-neutral",
      "Performance Study": "badge-info",
      "Optimization Guide": "badge-primary",
      "User Behavior Study": "badge-secondary",
      "Acquisition Analysis": "badge-accent",
      "UX Guidelines": "badge-info",
      "Technical Documentation": "badge-success",
      "Developer Guide": "badge-warning",
      "Implementation Guide": "badge-warning",
      "Platform Analysis": "badge-neutral",
      "Performance Guide": "badge-primary",
      "Testing Guide": "badge-secondary",
      "Best Practices": "badge-accent"
    };
    return colors[type] || "badge-ghost";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="hero bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl border border-primary/10">
        <div className="hero-content text-center py-12 px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-base-content">Research Sources &</span><br />
              <span className="text-primary">Data References</span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/80 mb-6 max-w-3xl mx-auto leading-relaxed">
              Comprehensive collection of industry research, studies, and data sources that inform my strategic analysis and recommendations for Straiv's Guest App transformation.
            </p>
            <div className="stats shadow border border-primary/20">
              <div className="stat place-items-center">
                <div className="stat-title text-primary">Total Sources</div>
                <div className="stat-value text-secondary">
                  {Object.values(sourceCategories).reduce((total, category) => total + category.sources.length, 0)}
                </div>
                <div className="stat-desc">Research References</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-4">
            <Search className="w-5 h-5 text-base-content/50" />
            <input
              type="text"
              placeholder="Search sources by title, description, or type..."
              className="input input-bordered flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {Object.entries(sourceCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`btn ${activeCategory === key ? `btn-${category.color}` : 'btn-outline'} btn-sm gap-2`}
          >
            {category.icon}
            {category.title}
          </button>
        ))}
      </div>

      {/* Sources Display */}
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-lg bg-${sourceCategories[activeCategory].color}/10`}>
              <div className={`text-${sourceCategories[activeCategory].color}`}>
                {sourceCategories[activeCategory].icon}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{sourceCategories[activeCategory].title}</h2>
              <p className="text-base-content/70">{filteredSources().length} sources in this category</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredSources().map((source, index) => (
              <div key={index} className="card bg-base-200 border border-base-300 hover:shadow-lg transition-shadow">
                <div className="card-body p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="card-title text-lg leading-tight">{source.title}</h3>
                    <div className={`badge ${getTypeColor(source.type)} badge-sm`}>
                      {source.type}
                    </div>
                  </div>
                  <p className="text-base-content/80 text-sm mb-4 leading-relaxed">
                    {source.description}
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSources().length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 mx-auto text-base-content/30 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No sources found</h3>
              <p className="text-base-content/70">Try adjusting your search terms or select a different category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Research Methodology */}
      <div className="card bg-gradient-to-br from-info/5 via-success/5 to-warning/5 border border-info/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Research Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Industry Analysis</h3>
              <p className="text-sm text-base-content/70">
                Comprehensive review of hospitality technology trends, mobile app performance data, and industry benchmarks from leading research organizations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Data Verification</h3>
              <p className="text-sm text-base-content/70">
                Cross-referenced statistics from multiple authoritative sources including Google studies, industry reports, and academic research to ensure accuracy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">Current Relevance</h3>
              <p className="text-sm text-base-content/70">
                Prioritized recent studies (2023-2025) and continuously updated industry data to ensure recommendations reflect current market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics Summary */}
      <div className="card bg-base-200 border border-base-300">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Statistics Referenced</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">Mobile Abandonment</div>
              <div className="stat-value text-error">53%</div>
              <div className="stat-desc">Users abandon after 3+ seconds</div>
            </div>
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">Usage Gap</div>
              <div className="stat-value text-warning">35%</div>
              <div className="stat-desc">Willingness vs actual usage</div>
            </div>
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">Day 30 Retention</div>
              <div className="stat-value text-info">3.6%</div>
              <div className="stat-desc">Travel app industry average</div>
            </div>
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">Market Size</div>
              <div className="stat-value text-success">€15B+</div>
              <div className="stat-desc">Hospitality tech market</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sources; 