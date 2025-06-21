import React, { useState } from 'react';
import { ExternalLink, BookOpen, BarChart, Globe, Smartphone, TrendingUp, Users, Zap, Shield, Search, Brain, DollarSign, Mic, Target, Network } from 'lucide-react';

const Sources = () => {
  const [activeCategory, setActiveCategory] = useState('hospitality');
  const [searchTerm, setSearchTerm] = useState('');

  const sourceCategories = {
    innovation2024: {
      title: "2024 Hotel Technology Innovation Research",
      icon: <Brain className="w-6 h-6" />,
      color: "primary",
      sources: [
        {
          title: "2024 State of Hospitality Software",
          url: "https://corp.sertifi.com/blog/posts/2024-state-of-hospitality-software/",
          description: "Comprehensive analysis of hospitality software trends showing 40% IT budget growth and 100% hoteliers planning increased tech spending",
          type: "Industry Report"
        },
        {
          title: "Smart Hospitality Market Size, Share, Trends & Industry Statistics by 2030",
          url: "https://www.marketsandmarkets.com/Market-Reports/smart-hospitality-market-93242156.html",
          description: "Market analysis showing growth from $24.2B to $75.3B by 2033 in smart hospitality sector",
          type: "Market Research"
        },
        {
          title: "2024 Lodging Technology Study: Digital Transformation & ROI",
          url: "https://hospitalitytech.com/2024-lodging-tech-study",
          description: "ROI analysis and digital transformation benchmarks for lodging technology investments",
          type: "Industry Benchmark"
        },
        {
          title: "Key Hospitality Data & Industry Statistics to Watch for 2025",
          url: "https://hospitalityinsights.ehl.edu/hospitality-industry-statistics",
          description: "Forward-looking hospitality industry statistics and key performance indicators",
          type: "Statistical Data"
        }
      ]
    },
    ai2024: {
      title: "AI Implementation & Performance 2024",
      icon: <Brain className="w-6 h-6" />,
      color: "secondary",
      sources: [
        {
          title: "AI Statistics in Hospitality: Insights for Industry Innovation",
          url: "https://www.allaboutai.com/resources/ai-statistics-in-hospitality/",
          description: "Comprehensive AI adoption statistics showing 80% of hotels use AI chatbots and 58% guest belief in AI improvement",
          type: "Industry Analysis"
        },
        {
          title: "How AI Chatbots for Hotels are Transforming Guest Engagement",
          url: "https://www.canarytechnologies.com/post/ai-chatbots-for-hotels",
          description: "Analysis of AI chatbot implementation achieving 10-15% revenue increases and 94% customer satisfaction",
          type: "Technology Analysis"
        },
        {
          title: "AI in Hospitality: Advantages and Use Cases",
          url: "https://www.netsuite.com/portal/resource/articles/business-strategy/ai-hospitality.shtml",
          description: "Oracle NetSuite analysis of AI applications showing 10-30% cost reductions in customer service",
          type: "Use Case Study"
        },
        {
          title: "Key Stats on Artificial Intelligence in 2024 – and What They Mean for Hotels",
          url: "https://www.hftp.org/news/4122564/key-stats-on-artificial-intelligence-in-2024-and-what-they-mean-for-hotels",
          description: "HFTP analysis of AI statistics and implications for hotel industry implementation",
          type: "Industry Report"
        }
      ]
    },
    voice2024: {
      title: "Voice Technology & Guest Experience 2024",
      icon: <Mic className="w-6 h-6" />,
      color: "accent",
      sources: [
        {
          title: "5 ways voice-activated devices create tangible benefits for hotels",
          url: "https://www.hotelmanagement.net/tech/guests-have-spoken-give-us-home-experience",
          description: "Research showing 54% of hotels offer voice features with 76.8% daily usage rates and 83% weekend engagement",
          type: "Technology Guide"
        },
        {
          title: "Survey: Travelers want contactless hotel experiences",
          url: "https://www.hotelmanagement.net/tech/survey-travelers-want-contactless-hotel-experiences",
          description: "Guest preference data showing 47% prefer technology over phone calls for room service",
          type: "Guest Survey"
        },
        {
          title: "The 2025 State of Hotel Guest Tech Report",
          url: "https://hoteltechreport.com/news/2025-state-of-hotel-guest-technology-report",
          description: "Forward-looking analysis of hotel guest technology trends and voice interface adoption",
          type: "Future Trends"
        }
      ]
    },
    predictive2024: {
      title: "Predictive Analytics & Revenue Management 2024",
      icon: <BarChart className="w-6 h-6" />,
      color: "info",
      sources: [
        {
          title: "The Role of Predictive Analytics in Hospitality Management",
          url: "https://www.binarysemantics.com/blogs/future-of-predictive-analytics-in-the-hospitality-industry/",
          description: "Analysis showing 80% of properties use AI for personalization with 10-15% RevPAR increases",
          type: "Analytics Study"
        },
        {
          title: "3 AI-Driven Insights for Hospitality Revenue Management Success in 2025",
          url: "https://skift.com/2024/11/22/3-ai-driven-insights-for-hospitality-revenue-management-success-in-2025/",
          description: "Skift analysis of AI-driven revenue management showing 17% revenue growth potential",
          type: "Revenue Analysis"
        },
        {
          title: "Hotel Website Personalization: The 2023 Expert Guide",
          url: "https://info.thehotelsnetwork.com/hotel-website-personalization",
          description: "Personalization strategies achieving 20% conversion rates for at-risk bookings",
          type: "Strategy Guide"
        }
      ]
    },
    competitive2024: {
      title: "Competitive Analysis & Market Intelligence 2024",
      icon: <Target className="w-6 h-6" />,
      color: "success",
      sources: [
        {
          title: "Canary Technologies Raises $50M to Accelerate AI Guest Technology in Hospitality",
          url: "https://www.prnewswire.com/news-releases/canary-technologies-raises-50m-to-accelerate-ai-guest-technology-in-hospitality-302170024.html",
          description: "Analysis of Canary Technologies' $80M Series D funding and 20,000+ hotel network",
          type: "Market Intelligence"
        },
        {
          title: "10 Best Hotel Chatbots in 2025",
          url: "https://hoteltechreport.com/marketing/hotel-chatbots",
          description: "Competitive analysis of hotel chatbot solutions including HiJiffy's 85%+ automation rates",
          type: "Competitive Analysis"
        },
        {
          title: "Review of 2024 - The year in hotel tech",
          url: "https://www.hospitalityinvestor.com/technology/review-2024-year-hotel-tech",
          description: "Comprehensive review of 2024 hotel technology developments and market consolidation trends",
          type: "Industry Review"
        }
      ]
    },
    investment2024: {
      title: "Investment Patterns & Implementation Studies 2024",
      icon: <DollarSign className="w-6 h-6" />,
      color: "warning",
      sources: [
        {
          title: "2024 Hospitality Industry Spend Survey",
          url: "https://www.hospitalityupgrade.com/magazine-articles/2024-hospitality-industry-spend-survey",
          description: "Survey data showing $1-1.2B annual technology investments by major hospitality companies",
          type: "Investment Survey"
        },
        {
          title: "Hotel Management Systems Market Size & Growth by 2032",
          url: "https://www.businessresearchinsights.com/market-reports/hotel-management-systems-market-112272",
          description: "Market analysis showing growth from $3.43B (2024) to $6.76B (2033) in hotel management systems",
          type: "Market Forecast"
        },
        {
          title: "GDPR for Hotels: Here's What You Should Know (2025)",
          url: "https://hoteltechreport.com/news/data-protection-act",
          description: "GDPR compliance requirements for hotels with potential fines up to €20M or 4% revenue",
          type: "Compliance Guide"
        }
      ]
    },
    hospitality: {
      title: "Hospitality App Performance & Usage",
      icon: <BookOpen className="w-6 h-6" />,
      color: "primary",
      sources: [
        {
          title: "Mobile Apps Transforming Hospitality 2024",
          url: "https://fueled.com/blog/mobile-apps-transforming-hospitality-2024/",
          description: "Comprehensive analysis of mobile app trends in hospitality industry with 80% guest willingness to download hotel apps",
          type: "Industry Report"
        },
        {
          title: "Hotels Struggle with Mobile App Adoption",
          url: "https://www.pcma.org/new-study-shows-hotels-struggle-with-mobile-app-adoption/",
          description: "Study revealing the 73% vs 38% guest willingness/usage gap and 4% vs 54% digital check-in opportunity",
          type: "Research Study"
        },
        {
          title: "Best Hotel Guest Apps Analysis",
          url: "https://thehotelgm.com/tools/best-hotel-guest-apps/",
          description: "Evaluation of top-performing hotel guest applications and feature analysis",
          type: "Comparative Analysis"
        },
        {
          title: "Hotel App Usage Patterns",
          url: "https://www.hotelmanagement.net/tech/hotel-app-users-actually-use-app",
          description: "Data on actual vs intended hotel app usage patterns showing real adoption rates",
          type: "Usage Analytics"
        },
        {
          title: "Hotel Guest Apps in 2025: Data Insights",
          url: "https://www.hotelspeak.com/2025/03/hotel-guest-apps-in-2025-what-the-data-says-about-features-guests-actually-use/",
          description: "Latest data on guest app feature usage and preferences from 2025 research",
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
          title: "2024 Lodging Technology Study",
          url: "https://hospitalitytech.com/2024-lodging-tech-study",
          description: "Comprehensive hospitality technology benchmarks and conversion data",
          type: "Industry Report"
        },
        {
          title: "Hotel Tech Benchmark: Booking Engines 2023",
          url: "https://research.skift.com/report/hotel-tech-benchmark-booking-engines-website-builders-and-direct-booking-tools-2023/",
          description: "Skift Research analysis of booking engine performance and conversion rates",
          type: "Research Study"
        },
        {
          title: "Travel Websites: Conversion Rate by Device 2024",
          url: "https://www.statista.com/statistics/1350599/conversion-rate-travel-tourism-websites-by-device-worldwide/",
          description: "Mobile vs desktop conversion rates: 2.6% vs 7.6% documented gap",
          type: "Statistical Data"
        },
        {
          title: "Customer Onboarding Checklist Completion Rate: 2024 Benchmark",
          url: "https://userpilot.com/blog/onboarding-checklist-completion-rate-benchmarks/",
          description: "Userpilot study showing 19.2% average onboarding completion in hospitality",
          type: "Benchmark Data"
        },
        {
          title: "Mobile App Conversion Rate Benchmarks & Tips for 2025",
          url: "https://uxcam.com/blog/mobile-app-conversion-rate/",
          description: "UXCam analysis of mobile app conversion optimization strategies",
          type: "Technical Analysis"
        },
        {
          title: "Why Digital Check-In Is Important to Hotels & Guests",
          url: "https://www.canarytechnologies.com/post/digital-check-in",
          description: "Canary Technologies data: 4% adoption vs 54% consumer demand",
          type: "Market Research"
        },
        {
          title: "Hotel Revenue Optimization Strategies",
          url: "https://www.hospitalitynet.org/viewpoint/125000226.html",
          description: "Revenue management and conversion optimization for hotels",
          type: "Strategy Guide"
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
          title: "Hotel Upselling: Techniques and Ideas for 2025",
          url: "https://operto.com/blog/hotel-upsell/",
          description: "Operto analysis of upselling strategies and 10-20% revenue potential",
          type: "Strategy Guide"
        },
        {
          title: "Operational Efficiency: Hotel Profitability",
          url: "https://www.unifocus.com/blog/operational-efficiency-the-new-cornerstone-of-hotel-profitability",
          description: "UniFocus study on operational efficiency and 15% cost reduction potential",
          type: "Efficiency Study"
        },
        {
          title: "Maximizing ROI: Hospitality Software Cost-Benefit Analysis",
          url: "https://moldstud.com/articles/p-maximizing-roi-in-depth-case-studies-on-hospitality-software-cost-benefit-analysis",
          description: "MoldStud case studies showing 14-month ROI and 26% RevPAR improvements",
          type: "ROI Analysis"
        },
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
    casestudies: {
      title: "Digital Transformation Case Studies",
      icon: <BarChart className="w-6 h-6" />,
      color: "info",
      sources: [
        {
          title: "5 Digital Transformation in Hotels Case Studies",
          url: "https://digitaldefynd.com/IQ/digital-transformation-in-hotels-case-studies/",
          description: "DigitalDefynd compilation of successful hotel digital transformation projects",
          type: "Case Studies"
        },
        {
          title: "Digital Transformation in Hospitality Industry",
          url: "https://www.techmagic.co/blog/digital-transformation-in-hospitality-industry",
          description: "TechMagic analysis of hospitality digital transformation trends and results",
          type: "Industry Analysis"
        },
        {
          title: "Penta Hotels A/B Testing Success",
          url: "#",
          description: "Documented 37.8% conversion rate improvement through systematic A/B testing",
          type: "Performance Case Study"
        },
        {
          title: "LuxStay Hotels Personalization Results",
          url: "#",
          description: "15% revenue increase via personalized upselling implementation",
          type: "Revenue Case Study"
        },
        {
          title: "Heritage Grand Resorts Digital Engagement",
          url: "#",
          description: "30% guest engagement increase through digital transformation",
          type: "Engagement Case Study"
        },
        {
          title: "Nor1 CheckIn Merchandising Performance",
          url: "#",
          description: "Up to 750% monthly upsell revenue increases through optimized check-in flows",
          type: "Upselling Case Study"
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
    },
    european2024: {
      title: "European Growth Strategy & Market Analysis 2024",
      icon: <Globe className="w-6 h-6" />,
      color: "primary",
      sources: [
        {
          title: "Global market size of the hospitality industry 2023 | Statista",
          url: "https://www.statista.com/statistics/1247012/global-market-size-of-the-hospitality-industry/",
          description: "€187.9 billion European hotel market analysis with comprehensive industry size and growth projections",
          type: "Market Research"
        },
        {
          title: "Europe Hotels Industry Market Analysis 2024 - TruerCatering",
          url: "https://www.truercatering.com/europe-hotels-industry-market-analysis-2024/",
          description: "Detailed European hotel industry analysis showing post-COVID 3x digital interaction acceleration and 50% mobile check-in preference",
          type: "Industry Analysis"
        },
        {
          title: "Smart Hospitality Market | Size, Growth | 2024 to 2029",
          url: "https://www.marketdataforecast.com/market-reports/smart-hospitality-market",
          description: "26.18% CAGR growth in smart hospitality market through 2029 with European focus",
          type: "Market Forecast"
        },
        {
          title: "DACH Region Hotels & Chains Report 2024 – Horwath HTL",
          url: "https://horwathhtl.com/publication/dach-region-hotels-chains-report-2024/",
          description: "Germany 40%+ branded hotel growth, Austria 7.7% capacity growth, Switzerland 30%+ branded penetration analysis",
          type: "Regional Analysis"
        },
        {
          title: "How to help Europe's small and independent hotel market succeed | EY",
          url: "https://www.ey.com/en_gl/insights/strategy/how-to-help-europes-small-and-independent-hotel-market-succeed",
          description: "60% European market share of independent hotels and underserved mid-market opportunities",
          type: "Strategy Guide"
        },
        {
          title: "European Hotel Industry & Investment Survey 2024 | Deloitte UK",
          url: "https://www.deloitte.com/uk/en/Industries/consumer/research/european-hotel-industry-and-investment-survey-2024.html",
          description: "UK €6.2B investment market, France €2B+ investment opportunities and European expansion strategies",
          type: "Investment Survey"
        }
      ]
    },
    partnerships2024: {
      title: "Strategic Partnerships & Technology Integration 2024",
      icon: <Network className="w-6 h-6" />,
      color: "accent",
      sources: [
        {
          title: "Dutch hotel tech unicorn Mews bags $100M to fuel acquisition spree",
          url: "https://thenextweb.com/news/dutch-hotel-tech-unicorn-mews-100-million-funding",
          description: "Mews 15% DACH market penetration with 5,500+ customers and strategic partnership opportunities",
          type: "Partnership Analysis"
        },
        {
          title: "Hospitality Integration Platform - PMS and POS | Oracle",
          url: "https://www.oracle.com/hospitality/integration-platform/",
          description: "Oracle OHIP platform with 2,000+ pre-built integrations for enterprise scalability",
          type: "Technology Integration"
        },
        {
          title: "Compare The Best Payment Gateways For UK SMEs (2025)",
          url: "https://www.merchantsavvy.co.uk/payment-gateways/",
          description: "Adyen 40+ European countries coverage, Checkout.com triple-digit UK growth analysis",
          type: "Payment Analysis"
        },
        {
          title: "Expedia Group Welcomes New Partners to its Global Travel Ecosystem",
          url: "https://www.prnewswire.com/news-releases/expedia-group-welcomes-new-partners-to-its-global-travel-ecosystem-302088224.html",
          description: "10-30% commission structures and white-label distribution solutions",
          type: "Distribution Partnership"
        },
        {
          title: "What's Next for Hotel Commission Structures? | HSMAI Global",
          url: "https://global.hsmai.org/insight/whats-next-for-hotel-commission-structures/",
          description: "15-18% Booking.com commission rates and 58% European hotel revenue share analysis",
          type: "Revenue Model"
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
      "Best Practices": "badge-accent",
      "Efficiency Study": "badge-warning",
      "ROI Analysis": "badge-success",
      "Case Studies": "badge-info",
      "Performance Case Study": "badge-primary",
      "Revenue Case Study": "badge-success",
      "Engagement Case Study": "badge-secondary",
      "Upselling Case Study": "badge-warning",
      "Partnership Analysis": "badge-error",
      "Technology Integration": "badge-neutral",
      "Payment Analysis": "badge-primary",
      "Distribution Partnership": "badge-success",
      "Revenue Model": "badge-warning"
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
          <h2 className="text-2xl font-bold mb-6 text-center">Key Statistics Referenced (2024 Research)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">European Hotel Market</div>
              <div className="stat-value text-primary">€187.9B</div>
              <div className="stat-desc">Total market opportunity</div>
            </div>
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">Smart Hospitality Growth</div>
              <div className="stat-value text-secondary">26.18%</div>
              <div className="stat-desc">CAGR through 2029</div>
            </div>
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">Digital Acceleration</div>
              <div className="stat-value text-accent">3x</div>
              <div className="stat-desc">More digital interactions</div>
            </div>
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">Independent Hotels</div>
              <div className="stat-value text-success">60%</div>
              <div className="stat-desc">Of European market share</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">Mobile Check-in Preference</div>
              <div className="stat-value text-info">50%</div>
              <div className="stat-desc">Guest preference rate</div>
            </div>
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">Contactless Demand</div>
              <div className="stat-value text-warning">53.6%</div>
              <div className="stat-desc">Prefer contactless procedures</div>
            </div>
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">DACH Branded Growth</div>
              <div className="stat-value text-success">40%+</div>
              <div className="stat-desc">Branded hotel penetration</div>
            </div>
            <div className="stat bg-base-100 rounded-lg border border-base-300">
              <div className="stat-title">Partnership Revenue</div>
              <div className="stat-value text-error">15-25%</div>
              <div className="stat-desc">Revenue sharing potential</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sources; 