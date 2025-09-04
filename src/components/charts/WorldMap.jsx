import React from 'react';
import { useSelector } from 'react-redux';
import { selectStorefronts } from '../../features/dashboard/dashboardSlice';

const WorldMap = () => {
  const storefronts = useSelector(selectStorefronts);
  
  // In a real implementation, we would use a proper map library like react-simple-maps
  // This is a simplified placeholder
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Storefronts</h3>
        <div className="flex space-x-2">
          <button className="p-1 text-xs rounded bg-gray-100">📊</button>
          <button className="p-1 text-xs rounded bg-gray-100">📋</button>
        </div>
      </div>
      
      <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
        <p className="text-gray-500">World Map Visualization</p>
        {/* In a real implementation, we would render the map here */}
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm">
          <span>$0</span>
          <span>${storefronts.totalSpend.toFixed(2)}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-300 to-orange-500" 
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;


