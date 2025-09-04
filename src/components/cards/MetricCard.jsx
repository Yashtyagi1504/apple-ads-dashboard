import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ label, value }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-4 rounded-lg shadow-sm"
    >
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </motion.div>
  );
};

export default MetricCard;