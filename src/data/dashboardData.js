export const dashboardData = { 
  // Date filter info 
  dateRange: { 
    start: "2025-07-05", 
    end: "2025-07-11", 
    label: "Jul 5 - Jul 11, 2025" 
  }, 
  
  // Top metrics cards 
  totalSummary: { 
    campaignROAS: { 
      value: "0.00%", 
      label: "Campaign ROAS" 
    }, 
    totalSpend: { 
      value: "$6,109.89", 
      label: "Total Spend" 
    }, 
    conversionRate: { 
      value: "0.00%", 
      label: "Conversion Rate"  
    }, 
    campaignROI: { 
      value: "$2,101", 
      label: "Campaign ROI" 
    }, 
    campaignCTR: { 
      value: "$2.91", 
      label: "Campaign CTR" 
    }, 
    conversionValue: { 
      value: "0", 
      label: "Conversion Value" 
    }, 
    totalImpressions: { 
      value: "$0.00", 
      label: "Total Impressions" 
    } 
  }, 
  
  // World map data for Storefronts 
  storefronts: { 
    totalSpend: 6109.89, 
    regions: [ 
      { country: "United States", spend: 2500.50, coordinates: [39.8283, -98.5795] }, 
      { country: "United Kingdom", spend: 1800.30, coordinates: [55.3781, -3.4360] }, 
      { country: "Germany", spend: 1200.75, coordinates: [51.1657, 10.4515] }, 
      { country: "Japan", spend: 608.34, coordinates: [36.2048, 138.2529] } 
    ] 
  }, 
  
  // Line chart data for Trends 
  trends: { 
    spend: [ 
      { date: "7/5", value: 850 }, 
      { date: "7/6", value: 920 }, 
      { date: "7/7", value: 780 }, 
      { date: "7/8", value: 1100 }, 
      { date: "7/9", value: 950 }, 
      { date: "7/10", value: 880 }, 
      { date: "7/11", value: 1020 } 
    ] 
  }, 
  
  // Top performing campaigns table 
  topList: [ 
    { 
      id: 1, 
      name: "Discovery", 
      type: "LOC", 
      spend: "$6,109.89", 
      installs: 644, 
      change: "+2.4%", 
      conversionRate: "0.00%", 
      status: "active" 
    }, 
    { 
      id: 2, 
      name: "Competitor", 
      type: "LOC", 
      spend: "$6,109.89", 
      installs: 3121, 
      change: "+7.4%", 
      conversionRate: "0.00%", 
      status: "active" 
    }, 
    { 
      id: 3, 
      name: "Today tab", 
      type: "LOC", 
      spend: "$6,109.89", 
      installs: 644, 
      change: "+2.4%", 
      conversionRate: "0.00%", 
      status: "active" 
    }, 
    { 
      id: 4, 
      name: "Branding", 
      type: "LOC", 
      spend: "$6,109.89", 
      installs: 644, 
      change: "+0.8%", 
      conversionRate: "0.00%", 
      status: "active" 
    } 
  ], 
  
  // Biggest changes data (right table) 
  biggestChanges: [ 
    { 
      id: 1, 
      name: "Discovery", 
      type: "LOC", 
      spend: "$6,109.89", 
      change: "+62.4%", 
      changeType: "increase", 
      changeBar: 85 // percentage for bar chart 
    }, 
    { 
      id: 2, 
      name: "Competitor", 
      type: "LOC", 
      spend: "$6,109.89", 
      change: "+42.8%", 
      changeType: "increase", 
      changeBar: 60 
    }, 
    { 
      id: 3, 
      name: "Today tab", 
      type: "LOC", 
      spend: "$6,109.89", 
      change: "+12.1%", 
      changeType: "increase", 
      changeBar: 25 
    }, 
    { 
      id: 4, 
      name: "Branding", 
      type: "LOC", 
      spend: "$6,109.89", 
      change: "+2.3%", 
      changeType: "increase", 
      changeBar: 8 
    } 
  ] 
}; 

// Export individual sections if needed 
export const { dateRange, totalSummary, storefronts, trends, topList, biggestChanges } = dashboardData;