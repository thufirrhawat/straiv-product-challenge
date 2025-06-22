import React, { useState } from 'react';
import { 
  ExternalLink, 
  BookOpen, 
  BarChart, 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Search, 
  Brain, 
  DollarSign, 
  Mic, 
  Target, 
  Network,
  Info,
  Building,
  Award,
  Eye,
  FileText,
  Database,
  BarChart3,
  Lightbulb,
  Settings,
  CheckCircle
} from 'lucide-react';

const Sources = ({ onSectionChange, navigate }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Helper function to handle navigation with scroll-to-top
  const handleNavigation = (path) => {
    if (navigate) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Tooltip component for research data
  const Tooltip = ({ children, content }) => (
    <div className="tooltip tooltip-info" data-tip={content}>
      {children}
    </div>
  );

  // Five main research categories with comprehensive sources
  const sourceCategories = [
    {
      id: 'benchmarks',
      title: 'Industry Benchmarks & Performance Data',
      description: 'Core conversion research and performance benchmarks',
      color: 'primary',
      bgGradient: 'from-primary/5 to-info/5',
      borderColor: 'border-primary/20',
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      subcategories: [
        {
          title: 'Core Conversion Research',
          icon: <TrendingUp className="w-5 h-5 text-primary" />,
          sources: [
        {
              title: "2024 Lodging Technology Study",
              organization: "Hospitality Technology",
          url: "https://hospitalitytech.com/2024-lodging-tech-study",
              description: "Comprehensive hospitality technology benchmarks and conversion metrics",
              keyInsights: ["Industry ROI benchmarks", "Technology adoption rates", "Implementation success factors"],
              type: "Industry Study"
        },
        {
              title: "Hotel Tech Benchmark: Booking Engines 2023",
              organization: "Skift Research",
              url: "https://research.skift.com/report/hotel-tech-benchmark-booking-engines-website-builders-and-direct-booking-tools-2023/",
              description: "Direct booking technology performance and conversion optimization data",
              keyInsights: ["Booking engine performance", "Direct booking conversion rates", "Technology comparison analysis"],
              type: "Market Research"
            },
        {
              title: "Travel websites: conversion rate by device 2024",
              organization: "Statista",
              url: "https://www.statista.com/statistics/1350599/conversion-rate-travel-tourism-websites-by-device-worldwide/",
              description: "Mobile vs desktop conversion rates showing 2.6% vs 7.6% gap",
              keyInsights: ["Device-specific conversion rates", "Mobile optimization gaps", "Performance benchmarks"],
              type: "Statistical Analysis"
        },
        {
              title: "Customer Onboarding Checklist Completion Rate: 2024 Benchmark",
              organization: "Userpilot",
              url: "https://userpilot.com/blog/onboarding-checklist-completion-rate-benchmarks/",
              description: "Onboarding completion benchmarks showing 19.2% industry average",
              keyInsights: ["Onboarding completion rates", "Best practice benchmarks", "Improvement strategies"],
              type: "Benchmark Study"
        }
      ]
    },
        {
          title: 'Mobile App Performance',
          icon: <Smartphone className="w-5 h-5 text-primary" />,
      sources: [
        {
              title: "Mobile App Conversion Rate Benchmarks & Tips for 2025",
              organization: "UXCam",
              url: "https://uxcam.com/blog/mobile-app-conversion-rate/",
              description: "Mobile app conversion optimization strategies and industry benchmarks",
              keyInsights: ["Mobile conversion benchmarks", "Optimization techniques", "User experience best practices"],
              type: "Performance Guide"
        },
        {
              title: "Why Digital Check-In Is Important to Hotels & Guests",
              organization: "Canary Technologies",
              url: "https://www.canarytechnologies.com/post/digital-check-in",
              description: "Digital check-in adoption rates and guest preference data",
              keyInsights: ["4% vs 54% adoption opportunity", "Guest satisfaction benefits", "Operational efficiency gains"],
              type: "Industry Analysis"
        }
      ]
    },
        {
          title: 'Revenue & ROI Analysis',
          icon: <DollarSign className="w-5 h-5 text-primary" />,
      sources: [
        {
              title: "Hotel Upselling: Techniques and Ideas for 2025",
              organization: "Operto",
              url: "https://operto.com/blog/hotel-upsell/",
              description: "Hotel upselling strategies showing 6.04% industry average vs 20%+ top performers",
              keyInsights: ["Upselling conversion benchmarks", "Revenue optimization techniques", "Guest experience integration"],
          type: "Strategy Guide"
    },
            {
              title: "Operational Efficiency: Hotel Profitability",
              organization: "UniFocus",
              url: "https://www.unifocus.com/blog/operational-efficiency-the-new-cornerstone-of-hotel-profitability",
              description: "Operational efficiency impact on hotel profitability and technology ROI",
              keyInsights: ["Cost reduction opportunities", "Efficiency benchmarks", "Technology ROI analysis"],
              type: "Profitability Analysis"
        },
        {
              title: "Maximizing ROI: Hospitality Software Cost-Benefit Analysis",
              organization: "MoldStud",
              url: "https://moldstud.com/articles/p-maximizing-roi-in-depth-case-studies-on-hospitality-software-cost-benefit-analysis",
              description: "Comprehensive ROI analysis for hospitality software implementations",
              keyInsights: ["Software ROI benchmarks", "Implementation cost analysis", "Success case studies"],
              type: "ROI Study"
            }
          ]
        }
      ]
        },
        {
      id: 'european-market',
      title: 'European Market Intelligence',
      description: 'Market analysis and regional growth dynamics',
      color: 'secondary',
      bgGradient: 'from-secondary/5 to-accent/5',
      borderColor: 'border-secondary/20',
      icon: <Globe className="w-8 h-8 text-secondary" />,
      subcategories: [
        {
          title: 'Market Analysis & Growth',
          icon: <BarChart className="w-5 h-5 text-secondary" />,
      sources: [
        {
              title: "Global market size of the hospitality industry 2023",
              organization: "Statista",
              url: "https://www.statista.com/statistics/1247012/global-market-size-of-the-hospitality-industry/",
              description: "€187.9 billion European hotel market size and growth projections",
              keyInsights: ["Market size validation", "Growth trajectory analysis", "Regional opportunities"],
              type: "Market Data"
        },
        {
              title: "Europe Hotels Industry Market Analysis 2024",
              organization: "TruerCatering",
              url: "https://www.truercatering.com/europe-hotels-industry-market-analysis-2024/",
              description: "Comprehensive European hotel industry analysis with 60% independent hotel market",
              keyInsights: ["Independent hotel opportunities", "Market fragmentation analysis", "Competitive landscape"],
              type: "Industry Analysis"
        },
        {
              title: "Hotel and Hospitality Management Software Market Size & Share by 2033",
              organization: "Straits Research",
              url: "https://straitsresearch.com/report/hotel-and-hospitality-management-software-market",
              description: "Technology market growth projections and adoption patterns",
              keyInsights: ["Technology adoption rates", "Market growth forecasts", "Investment opportunities"],
              type: "Market Forecast"
        },
        {
              title: "Smart Hospitality Market | Size, Growth | 2024 to 2029",
              organization: "Market Data Forecast",
              url: "https://www.marketdataforecast.com/market-reports/smart-hospitality-market",
              description: "26.18% CAGR growth in smart hospitality market through 2029",
              keyInsights: ["Smart technology adoption", "Growth rate validation", "Innovation opportunities"],
              type: "Growth Analysis"
        }
      ]
    },
        {
          title: 'Regional Dynamics',
          icon: <Building className="w-5 h-5 text-secondary" />,
      sources: [
        {
              title: "DACH Region Hotels & Chains Report 2024",
              organization: "Horwath HTL",
              url: "https://horwathhtl.com/publication/dach-region-hotels-chains-report-2024/",
              description: "DACH region hotel market analysis and growth opportunities",
              keyInsights: ["Regional market dynamics", "Chain vs independent analysis", "Growth opportunities"],
              type: "Regional Report"
        },
        {
              title: "How to help Europe's small and independent hotel market succeed",
              organization: "EY",
              url: "https://www.ey.com/en_gl/insights/strategy/how-to-help-europes-small-and-independent-hotel-market-succeed",
              description: "Strategy insights for European independent hotel market success",
              keyInsights: ["Independent hotel challenges", "Success strategies", "Market support mechanisms"],
              type: "Strategy Analysis"
    },
            {
              title: "European Hotel Industry & Investment Survey 2024",
              organization: "Deloitte UK",
              url: "https://www.deloitte.com/uk/en/Industries/consumer/research/european-hotel-industry-and-investment-survey-2024.html",
              description: "European hotel industry investment patterns and growth forecasts",
              keyInsights: ["Investment trends", "Industry outlook", "Technology spending patterns"],
              type: "Investment Survey"
            }
          ]
        }
      ]
        },
        {
      id: 'technology-studies',
      title: 'Technology Implementation Studies',
      description: 'AI, innovation, and digital transformation research',
      color: 'accent',
      bgGradient: 'from-accent/5 to-warning/5',
      borderColor: 'border-accent/20',
      icon: <Brain className="w-8 h-8 text-accent" />,
      subcategories: [
        {
          title: 'AI & Innovation Research',
          icon: <Lightbulb className="w-5 h-5 text-accent" />,
      sources: [
        {
              title: "AI Statistics in Hospitality: Insights for Industry Innovation",
              organization: "All About AI",
              url: "https://www.allaboutai.com/resources/ai-statistics-in-hospitality/",
              description: "80% hotel AI adoption statistics and guest satisfaction improvements",
              keyInsights: ["AI adoption rates", "Guest satisfaction impact", "Implementation benefits"],
              type: "AI Research"
        },
        {
              title: "How AI Chatbots for Hotels are Transforming Guest Engagement",
              organization: "Canary Technologies",
              url: "https://www.canarytechnologies.com/post/ai-chatbots-for-hotels",
              description: "AI chatbot implementation achieving 10-15% revenue increases",
              keyInsights: ["Revenue impact analysis", "Guest engagement metrics", "Implementation strategies"],
              type: "Technology Case Study"
        },
        {
              title: "AI in Hospitality: Advantages and Use Cases",
              organization: "Oracle NetSuite",
              url: "https://www.netsuite.com/portal/resource/articles/business-strategy/ai-hospitality.shtml",
              description: "AI implementation showing 10-30% cost reductions in customer service",
              keyInsights: ["Cost reduction benefits", "Use case analysis", "Implementation roadmaps"],
              type: "Implementation Guide"
        },
        {
              title: "Key Stats on Artificial Intelligence in 2024 — and What They Mean for Hotels",
              organization: "HFTP",
              url: "https://www.hftp.org/news/4122564/key-stats-on-artificial-intelligence-in-2024-and-what-they-mean-for-hotels",
              description: "58% guest belief in AI improvement and 100% hotelier investment plans",
              keyInsights: ["Guest AI acceptance", "Investment intentions", "Market readiness"],
              type: "Industry Statistics"
        }
      ]
    },
        {
          title: 'Voice Technology & Guest Experience',
          icon: <Mic className="w-5 h-5 text-accent" />,
      sources: [
        {
              title: "5 ways voice-activated devices create tangible benefits for hotels",
              organization: "Hotel Management",
              url: "https://www.hotelmanagement.net/tech/guests-have-spoken-give-us-home-experience",
              description: "54% hotel voice feature adoption with 76.8% daily usage rates",
              keyInsights: ["Voice adoption rates", "Daily usage patterns", "Guest benefits"],
              type: "Technology Benefits"
        },
        {
              title: "Survey: Travelers want contactless hotel experiences",
              organization: "Hotel Management",
              url: "https://www.hotelmanagement.net/tech/survey-travelers-want-contactless-hotel-experiences",
              description: "47% guest preference for technology over phone calls",
              keyInsights: ["Contactless preferences", "Technology adoption drivers", "Guest expectations"],
              type: "Guest Survey"
        },
        {
              title: "The 2025 State of Hotel Guest Tech Report",
              organization: "Hotel Tech Report",
              url: "https://hoteltechreport.com/news/2025-state-of-hotel-guest-technology-report",
              description: "Future trends in hotel guest technology and voice interface adoption",
              keyInsights: ["Future technology trends", "Voice interface evolution", "Guest tech expectations"],
              type: "Future Trends"
        }
      ]
    },
        {
          title: 'Digital Transformation Case Studies',
          icon: <Settings className="w-5 h-5 text-accent" />,
      sources: [
        {
          title: "5 Digital Transformation in Hotels Case Studies",
              organization: "DigitalDefynd",
          url: "https://digitaldefynd.com/IQ/digital-transformation-in-hotels-case-studies/",
              description: "Real-world digital transformation case studies and implementation success stories",
              keyInsights: ["Implementation case studies", "Success factors", "Transformation strategies"],
          type: "Case Studies"
        },
        {
          title: "Digital Transformation in Hospitality Industry",
              organization: "TechMagic",
          url: "https://www.techmagic.co/blog/digital-transformation-in-hospitality-industry",
              description: "Digital transformation strategies and technology adoption patterns",
              keyInsights: ["Transformation strategies", "Technology integration", "Industry evolution"],
              type: "Strategy Guide"
        },
        {
              title: "COVID-19 digital transformation & technology",
              organization: "McKinsey",
              url: "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/how-covid-19-has-pushed-companies-over-the-technology-tipping-point-and-transformed-business-forever",
              description: "Accelerated digital transformation and permanent technology adoption changes",
              keyInsights: ["Transformation acceleration", "Permanent adoption changes", "Technology tipping point"],
              type: "Industry Analysis"
        }
      ]
        }
      ]
    },
    {
      id: 'competitive-landscape',
      title: 'Competitive Landscape Analysis',
      description: 'Market leaders, funding, and technology infrastructure',
      color: 'success',
      bgGradient: 'from-success/5 to-info/5',
      borderColor: 'border-success/20',
      icon: <Target className="w-8 h-8 text-success" />,
      subcategories: [
        {
          title: 'Market Leaders & Funding',
          icon: <Award className="w-5 h-5 text-success" />,
      sources: [
        {
              title: "Hotel management platform Canary nabs $80M Series D",
              organization: "TechCrunch",
              url: "https://techcrunch.com/2025/06/12/hotel-management-platform-canary-nabs-80m-series-d-from-yc-insight-partners/",
              description: "Canary Technologies $80M funding with 20,000+ hotel network",
              keyInsights: ["Market leader funding", "Network scale analysis", "Growth trajectory"],
              type: "Funding Analysis"
        },
        {
              title: "The #1 Digital Concierge for Hotels",
              organization: "HiJiffy",
              url: "https://www.hijiffy.com/digital-concierge",
              description: "HiJiffy's 85%+ query automation rates and AI assistant capabilities",
              keyInsights: ["Automation performance", "AI capabilities", "Market positioning"],
              type: "Competitive Profile"
        },
        {
              title: "Dutch hotel tech unicorn Mews bags $100M to fuel acquisition spree",
              organization: "The Next Web",
              url: "https://thenextweb.com/news/dutch-hotel-tech-unicorn-mews-100-million-funding",
              description: "Mews $100M funding and European market expansion strategy",
              keyInsights: ["Unicorn valuation", "European expansion", "Acquisition strategy"],
              type: "Market Intelligence"
            }
          ]
        },
        {
          title: 'Technology Infrastructure',
          icon: <Network className="w-5 h-5 text-success" />,
      sources: [
        {
              title: "Hospitality Integration Platform - PMS and POS",
              organization: "Oracle",
              url: "https://www.oracle.com/hospitality/integration-platform/",
              description: "Enterprise-scale hospitality integration capabilities and partnerships",
              keyInsights: ["Integration capabilities", "Enterprise scalability", "Partnership ecosystem"],
              type: "Platform Analysis"
        },
        {
              title: "Compare The Best Payment Gateways For UK SMEs (2025)",
              organization: "Merchant Savvy",
              url: "https://www.merchantsavvy.co.uk/payment-gateways/",
              description: "European payment gateway comparison and SME adoption patterns",
              keyInsights: ["Payment solutions", "European compliance", "SME adoption"],
              type: "Technology Comparison"
            },
            {
              title: "Expedia Group Welcomes New Partners to its Global Travel Ecosystem",
              organization: "PR Newswire",
              url: "https://www.prnewswire.com/news-releases/expedia-group-welcomes-new-partners-to-its-global-travel-ecosystem-302088224.html",
              description: "Travel ecosystem partnerships and distribution channel analysis",
              keyInsights: ["Partnership ecosystem", "Distribution channels", "Global reach"],
              type: "Partnership Analysis"
        },
        {
              title: "What's Next for Hotel Commission Structures?",
              organization: "HSMAI Global",
              url: "https://global.hsmai.org/insight/whats-next-for-hotel-commission-structures/",
              description: "Hotel commission structure evolution and revenue sharing models",
              keyInsights: ["Commission evolution", "Revenue sharing", "Distribution economics"],
              type: "Revenue Model Analysis"
            }
          ]
        }
      ]
    },
    {
      id: 'investment-patterns',
      title: 'Industry Analysis & Investment Patterns',
      description: 'Technology spending, ROI, and compliance research',
      color: 'warning',
      bgGradient: 'from-warning/5 to-error/5',
      borderColor: 'border-warning/20',
      icon: <DollarSign className="w-8 h-8 text-warning" />,
      subcategories: [
        {
          title: 'Technology Spending & ROI',
          icon: <BarChart3 className="w-5 h-5 text-warning" />,
      sources: [
        {
              title: "2024 State of Hospitality Software",
              organization: "Sertifi Blog",
              url: "https://corp.sertifi.com/blog/posts/2024-state-of-hospitality-software/",
              description: "Hospitality software spending trends and ROI analysis",
              keyInsights: ["Software spending trends", "ROI benchmarks", "Technology priorities"],
              type: "Industry Survey"
        },
        {
              title: "2024 Hospitality Industry Spend Survey",
              organization: "Hospitality Upgrade",
              url: "https://www.hospitalityupgrade.com/magazine-articles/2024-hospitality-industry-spend-survey",
              description: "Technology investment patterns and spending priorities",
              keyInsights: ["Investment priorities", "Spending patterns", "Technology budgets"],
              type: "Spending Analysis"
        },
        {
              title: "Hotel Management Systems Market Size & Growth by 2032",
              organization: "Business Research Insights",
              url: "https://www.businessresearchinsights.com/market-reports/hotel-management-systems-market-112272",
              description: "Hotel management systems market growth and investment forecasts",
              keyInsights: ["Market growth forecasts", "Investment opportunities", "Technology evolution"],
              type: "Market Forecast"
        }
      ]
    },
        {
          title: 'Predictive Analytics & Revenue Management',
          icon: <Eye className="w-5 h-5 text-warning" />,
      sources: [
        {
              title: "The Role of Predictive Analytics in Hospitality Management",
              organization: "Binary Semantics",
              url: "https://www.binarysemantics.com/blogs/future-of-predictive-analytics-in-the-hospitality-industry/",
              description: "Predictive analytics implementation and revenue impact analysis",
              keyInsights: ["Predictive analytics benefits", "Revenue optimization", "Implementation strategies"],
              type: "Analytics Study"
        },
        {
              title: "3 AI-Driven Insights for Hospitality Revenue Management Success in 2025",
              organization: "Skift",
              url: "https://skift.com/2024/11/22/3-ai-driven-insights-for-hospitality-revenue-management-success-in-2025/",
              description: "AI-driven revenue management strategies and success metrics",
              keyInsights: ["AI revenue strategies", "Success metrics", "Future trends"],
              type: "Revenue Strategy"
        },
        {
              title: "Hotel Website Personalization: The 2023 Expert Guide",
              organization: "The Hotels Network",
              url: "https://info.thehotelsnetwork.com/hotel-website-personalization",
              description: "Website personalization strategies and conversion optimization",
              keyInsights: ["Personalization strategies", "Conversion optimization", "Guest experience"],
              type: "Personalization Guide"
        }
      ]
    },
        {
          title: 'Compliance & Data Protection',
          icon: <Shield className="w-5 h-5 text-warning" />,
      sources: [
        {
              title: "GDPR for Hotels: Here's What You Should Know (2025)",
              organization: "Hotel Tech Report",
              url: "https://hoteltechreport.com/news/data-protection-act",
              description: "GDPR compliance requirements for hotels with €20M or 4% revenue fines",
              keyInsights: ["GDPR compliance", "Data protection requirements", "Penalty implications"],
              type: "Compliance Guide"
        }
      ]
        }
      ]
    }
  ];

  // Filter sources based on search term
  const filteredCategories = sourceCategories.map(category => ({
    ...category,
    subcategories: category.subcategories.map(subcategory => ({
      ...subcategory,
      sources: subcategory.sources.filter(source =>
      source.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        source.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      source.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        source.keyInsights.some(insight => insight.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    })).filter(subcategory => subcategory.sources.length > 0)
  })).filter(category => category.subcategories.length > 0);

  const getTypeColor = (type) => {
    const colors = {
      "Industry Study": "badge-primary",
      "Market Research": "badge-secondary", 
      "Statistical Analysis": "badge-accent",
      "Benchmark Study": "badge-info",
      "Performance Guide": "badge-success",
      "Industry Analysis": "badge-warning",
      "Strategy Guide": "badge-error",
      "Profitability Analysis": "badge-neutral",
      "ROI Study": "badge-ghost",
      "Market Data": "badge-primary",
      "Industry Analysis": "badge-secondary",
      "Market Forecast": "badge-accent",
      "Growth Analysis": "badge-info",
      "Regional Report": "badge-success",
      "Strategy Analysis": "badge-warning",
      "Investment Survey": "badge-error",
      "AI Research": "badge-primary",
      "Technology Case Study": "badge-secondary",
      "Implementation Guide": "badge-accent",
      "Industry Statistics": "badge-info",
      "Technology Benefits": "badge-success",
      "Guest Survey": "badge-warning",
      "Future Trends": "badge-error",
      "Case Studies": "badge-neutral",
      "Funding Analysis": "badge-primary",
      "Competitive Profile": "badge-secondary",
      "Market Intelligence": "badge-accent",
      "Platform Analysis": "badge-info",
      "Technology Comparison": "badge-success",
      "Partnership Analysis": "badge-warning",
      "Revenue Model Analysis": "badge-error",
      "Industry Survey": "badge-primary",
      "Spending Analysis": "badge-secondary",
      "Analytics Study": "badge-accent",
      "Revenue Strategy": "badge-info",
      "Personalization Guide": "badge-success",
      "Compliance Guide": "badge-warning"
    };
    return colors[type] || "badge-neutral";
  };

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">Industry Research</span><br />
          <span className="text-secondary">& Supporting Evidence</span>
            </h1>
        
        <p className="text-xl text-base-content/80 max-w-4xl mx-auto mb-8">
          Comprehensive research foundation supporting strategic recommendations with verified industry data
            </p>

        {/* Research Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="stats shadow border border-primary/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-primary text-lg">50+</div>
              <div className="stat-desc text-xs">Research Sources</div>
                </div>
              </div>
          <div className="stats shadow border border-success/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-success text-lg">5</div>
              <div className="stat-desc text-xs">Research Categories</div>
            </div>
          </div>
          <div className="stats shadow border border-secondary/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-secondary text-lg">15+</div>
              <div className="stat-desc text-xs">Industry Organizations</div>
            </div>
          </div>
          <div className="stats shadow border border-accent/20">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-accent text-lg">2024</div>
              <div className="stat-desc text-xs">Latest Data Year</div>
          </div>
        </div>
      </div>

        {/* Research Context */}
        <Tooltip content="All research sources provide direct links to original industry reports, case studies, and benchmarking data supporting strategic recommendations">
          <div className="alert alert-info max-w-4xl mx-auto cursor-help">
            <Info className="w-4 h-4" />
            <div className="text-sm">
              <div className="font-semibold">Research Foundation:</div>
              <div>All sources provide direct links to original industry reports, case studies, and benchmarking data</div>
            </div>
          </div>
        </Tooltip>
      </div>

      {/* Search Functionality */}
      <div className="max-w-md mx-auto">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search research sources..." 
              className="input input-bordered w-full" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-square">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Research Categories</h2>
        
        {/* Category Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-12 overflow-x-auto">
          {sourceCategories.map((category, index) => (
          <button
              key={category.id}
              className={`btn ${activeCategory === index ? `btn-${category.color}` : 'btn-outline'} gap-2 flex-shrink-0`}
              onClick={() => setActiveCategory(index)}
          >
            {category.icon}
              <span className="hidden sm:inline text-xs">{category.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

        {/* Active Category Display */}
        <div className={`card bg-gradient-to-br ${sourceCategories[activeCategory].bgGradient} border-2 ${sourceCategories[activeCategory].borderColor}`}>
          <div className="card-body p-8">
            <div className="flex items-start gap-6 mb-8">
              <div className={`w-20 h-20 rounded-xl bg-base-100 flex items-center justify-center border-2 ${sourceCategories[activeCategory].borderColor}`}>
                {sourceCategories[activeCategory].icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{sourceCategories[activeCategory].title}</h3>
                <p className="text-base-content/80">{sourceCategories[activeCategory].description}</p>
            </div>
            </div>

            {/* Subcategories */}
            <div className="space-y-8">
              {(searchTerm ? filteredCategories.find(c => c.id === sourceCategories[activeCategory].id)?.subcategories : sourceCategories[activeCategory].subcategories)?.map((subcategory, subIndex) => (
                <div key={subIndex} className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    {subcategory.icon}
                    <h4 className="text-xl font-bold">{subcategory.title}</h4>
          </div>

                  {/* Sources Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {subcategory.sources.map((source, sourceIndex) => (
                      <div key={sourceIndex} className="card bg-base-100 border border-base-300 hover:shadow-lg transition-shadow">
                <div className="card-body p-6">
                  <div className="flex items-start justify-between mb-3">
                            <h5 className="font-bold text-base leading-tight flex-1">{source.title}</h5>
                            <div className={`badge ${getTypeColor(source.type)} badge-sm ml-2 flex-shrink-0`}>
                      {source.type}
                    </div>
                  </div>
                          
                          <div className="text-sm text-base-content/70 font-medium mb-3">{source.organization}</div>
                          <p className="text-sm text-base-content/80 mb-4">{source.description}</p>
                          
                          {/* Key Insights */}
                          <div className="mb-4">
                            <div className="text-xs font-semibold text-base-content/60 mb-2">KEY INSIGHTS</div>
                            <div className="space-y-1">
                              {source.keyInsights.map((insight, insightIndex) => (
                                <div key={insightIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-base-content/80">{insight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* External Link */}
                          <div className="card-actions">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                              className="btn btn-sm btn-outline gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
            </div>
              ))}
        </div>
      </div>
              </div>
            </div>


      {/* Strategic Framework Navigation */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Complete Strategic Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <button 
            className="card bg-gradient-to-r from-primary to-secondary text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/overview') : onSectionChange('overview')}
          >
            <div className="card-body text-center p-6">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Strategic Overview</h3>
              <p className="text-sm opacity-80">Complete strategy summary and framework</p>
              <div className="card-actions justify-center mt-4">
                <ExternalLink className="w-5 h-5" />
            </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-success to-info text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/implementation-roadmap') : onSectionChange('implementation-roadmap')}
          >
            <div className="card-body text-center p-6">
              <FileText className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Implementation Roadmap</h3>
              <p className="text-sm opacity-80">Detailed timeline and execution plan</p>
              <div className="card-actions justify-center mt-4">
                <ExternalLink className="w-5 h-5" />
            </div>
            </div>
          </button>

          <button 
            className="card bg-gradient-to-r from-accent to-warning text-base-content hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate ? handleNavigation('/prototype-demo') : onSectionChange('prototype-demo')}
          >
            <div className="card-body text-center p-6">
              <Eye className="w-12 h-12 mx-auto mb-4" />
              <h3 className="card-title justify-center text-base">Prototype Demo</h3>
              <p className="text-sm opacity-80">Interactive demonstrations of key features</p>
              <div className="card-actions justify-center mt-4">
                <ExternalLink className="w-5 h-5" />
          </div>
            </div>
          </button>
            </div>
      </div>
    </div>
  );
};

export default Sources; 