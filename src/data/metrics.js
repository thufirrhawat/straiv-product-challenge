export const kpiMetrics = {
  stickiness: {
    dailyActiveUsers: {
      current: 1247,
      target: 1500,
      growth: '+23%',
      period: 'Last 30 days'
    },
    sessionDuration: {
      current: '8.5 min',
      target: '10 min',
      growth: '+45%',
      period: 'Average'
    },
    returnRate: {
      current: '67%',
      target: '75%',
      growth: '+12%',
      period: 'Weekly'
    },
    featureAdoption: {
      current: '78%',
      target: '85%',
      growth: '+34%',
      period: 'Digital features'
    }
  },
  conversion: {
    serviceBookings: {
      current: '42%',
      target: '50%',
      growth: '+28%',
      period: 'Booking rate'
    },
    upsellSuccess: {
      current: '35%',
      target: '40%',
      growth: '+18%',
      period: 'Room upgrades'
    },
    ancillaryRevenue: {
      current: '€89',
      target: '€100',
      growth: '+15%',
      period: 'Per guest'
    },
    repeatBookings: {
      current: '25%',
      target: '30%',
      growth: '+8%',
      period: 'Guest retention'
    }
  },
  satisfaction: {
    overallScore: {
      current: 4.6,
      target: 4.8,
      growth: '+0.3',
      period: 'Out of 5.0'
    },
    responseTime: {
      current: '2.3 min',
      target: '2.0 min',
      growth: '-15%',
      period: 'Service requests'
    },
    digitalExperience: {
      current: 4.7,
      target: 4.8,
      growth: '+0.2',
      period: 'PWA rating'
    },
    staffEfficiency: {
      current: '+23%',
      target: '+30%',
      growth: '+7%',
      period: 'Productivity gain'
    }
  }
};

export const timeSeriesData = {
  digitalAdoption: [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 52 },
    { month: 'Mar', value: 58 },
    { month: 'Apr', value: 63 },
    { month: 'May', value: 69 },
    { month: 'Jun', value: 73 },
    { month: 'Jul', value: 78 }
  ],
  guestSatisfaction: [
    { month: 'Jan', value: 4.2 },
    { month: 'Feb', value: 4.3 },
    { month: 'Mar', value: 4.4 },
    { month: 'Apr', value: 4.5 },
    { month: 'May', value: 4.5 },
    { month: 'Jun', value: 4.6 },
    { month: 'Jul', value: 4.6 }
  ],
  revenueGrowth: [
    { month: 'Jan', value: 2 },
    { month: 'Feb', value: 4 },
    { month: 'Mar', value: 6 },
    { month: 'Apr', value: 8 },
    { month: 'May', value: 10 },
    { month: 'Jun', value: 11 },
    { month: 'Jul', value: 12 }
  ],
  activeUsers: [
    { month: 'Jan', value: 834 },
    { month: 'Feb', value: 923 },
    { month: 'Mar', value: 1045 },
    { month: 'Apr', value: 1132 },
    { month: 'May', value: 1189 },
    { month: 'Jun', value: 1213 },
    { month: 'Jul', value: 1247 }
  ]
};

export const featureUsageData = [
  { feature: 'Voice Commands', usage: 65, growth: '+34%' },
  { feature: 'Smart Suggestions', usage: 78, growth: '+28%' },
  { feature: 'Service Booking', usage: 82, growth: '+22%' },
  { feature: 'Digital Check-in', usage: 89, growth: '+45%' },
  { feature: 'Room Controls', usage: 71, growth: '+31%' },
  { feature: 'Concierge Chat', usage: 56, growth: '+19%' }
];

export const operationalMetrics = {
  staffProductivity: {
    requestsPerHour: {
      before: 12,
      after: 18,
      improvement: '+50%'
    },
    averageResponseTime: {
      before: '4.2 min',
      after: '2.3 min',
      improvement: '-45%'
    },
    manualTasks: {
      before: '78%',
      after: '34%',
      improvement: '-56%'
    }
  },
  guestEngagement: {
    serviceUtilization: {
      before: '42%',
      after: '67%',
      improvement: '+59%'
    },
    digitalInteractions: {
      before: '23%',
      after: '78%',
      improvement: '+239%'
    },
    satisfactionScore: {
      before: 4.1,
      after: 4.6,
      improvement: '+12%'
    }
  },
  businessImpact: {
    revenuePerGuest: {
      before: '€78',
      after: '€89',
      improvement: '+14%'
    },
    operationalCosts: {
      before: '100%',
      after: '77%',
      improvement: '-23%'
    },
    guestRetention: {
      before: '23%',
      after: '31%',
      improvement: '+35%'
    }
  }
};

export const industryBenchmarks = {
  hotelTech: {
    digitalAdoption: {
      industry: 52,
      straiv: 78,
      difference: '+26pts'
    },
    guestSatisfaction: {
      industry: 4.1,
      straiv: 4.6,
      difference: '+0.5pts'
    },
    staffEfficiency: {
      industry: '+8%',
      straiv: '+23%',
      difference: '+15pts'
    },
    revenueGrowth: {
      industry: '+3%',
      straiv: '+12%',
      difference: '+9pts'
    }
  }
};

export const roiCalculation = {
  investment: {
    implementation: 45000,
    training: 8000,
    maintenance: 12000,
    total: 65000
  },
  returns: {
    revenueIncrease: 89000,
    costSavings: 34000,
    efficiencyGains: 21000,
    total: 144000
  },
  roi: {
    percentage: 122,
    paybackPeriod: '8.7 months',
    npv: 79000
  }
}; 