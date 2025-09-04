import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import MetricCard from '../../components/cards/MetricCard';
import WorldMap from '../../components/charts/WorldMap';
import TrendChart from '../../components/charts/TrendChart';
import DataTable from '../../components/tables/DataTable';
import { 
  selectTotalSummary, 
  selectTopList, 
  selectBiggestChanges 
} from './dashboardSlice';

const Dashboard = () => {
  const totalSummary = useSelector(selectTotalSummary);
  const topList = useSelector(selectTopList);
  const biggestChanges = useSelector(selectBiggestChanges);
  
  const topListColumns = [
    { key: 'name', label: 'Campaign' },
    { key: 'spend', label: 'Spend' },
    { key: 'installs', label: 'Installs' },
    { key: 'change', label: 'Change' },
    { key: 'conversionRate', label: 'Conv. Rate' },
  ];
  
  const biggestChangesColumns = [
    { key: 'name', label: 'Campaign' },
    { key: 'spend', label: 'Spend' },
    { key: 'change', label: 'Change' },
    { key: 'changeBar', label: '' },
  ];
  
  // Convert totalSummary object to array for mapping
  const metricsArray = Object.entries(totalSummary).map(([key, data]) => ({
    id: key,
    ...data
  }));
  
  return (
    <div className="p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
      >
        {metricsArray.slice(0, 4).map((metric) => (
          <MetricCard 
            key={metric.id} 
            label={metric.label} 
            value={metric.value} 
          />
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
      >
        {metricsArray.slice(4).map((metric) => (
          <MetricCard 
            key={metric.id} 
            label={metric.label} 
            value={metric.value} 
          />
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
      >
        <WorldMap />
        <TrendChart />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <DataTable 
          title="Top List" 
          data={topList} 
          columns={topListColumns} 
        />
        <DataTable 
          title="Biggest Changes" 
          data={biggestChanges} 
          columns={biggestChangesColumns} 
          showTabs={false}
        />
      </motion.div>
    </div>
  );
};

export default Dashboard;