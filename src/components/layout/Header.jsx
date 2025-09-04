import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { selectDateRange, setDateRange } from '../../features/dashboard/dashboardSlice';

const Header = () => {
  const dateRange = useSelector(selectDateRange);
  const dispatch = useDispatch();

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white p-4 shadow-sm flex justify-between items-center"
    >
      <div>
        <h1 className="text-xl font-bold">Overview dashboard</h1>
        <p className="text-sm text-gray-500">A consolidated view of your app analytics by platforms and key metrics</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-md p-2">
          <span className="text-sm mr-2">📅</span>
          <span className="text-sm">{dateRange.label}</span>
        </div>
        
        <button className="p-2 rounded-full hover:bg-gray-100">
          <span>⚙️</span>
        </button>
      </div>
    </motion.div>
  );
};

export default Header;