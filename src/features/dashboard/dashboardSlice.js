import { createSlice } from '@reduxjs/toolkit';
import { dashboardData } from '../../data/dashboardData';

const initialState = {
  dateRange: dashboardData.dateRange,
  totalSummary: dashboardData.totalSummary,
  storefronts: dashboardData.storefronts,
  trends: dashboardData.trends,
  topList: dashboardData.topList,
  biggestChanges: dashboardData.biggestChanges,
  activeFilter: 'All Orders',
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDateRange: (state, action) => {
      state.dateRange = action.payload;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { setDateRange, setActiveFilter } = dashboardSlice.actions;

// Selectors
export const selectDateRange = (state) => state.dashboard.dateRange;
export const selectTotalSummary = (state) => state.dashboard.totalSummary;
export const selectStorefronts = (state) => state.dashboard.storefronts;
export const selectTrends = (state) => state.dashboard.trends;
export const selectTopList = (state) => state.dashboard.topList;
export const selectBiggestChanges = (state) => state.dashboard.biggestChanges;
export const selectActiveFilter = (state) => state.dashboard.activeFilter;

export default dashboardSlice.reducer;