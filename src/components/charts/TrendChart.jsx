import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { selectTrends } from '../../features/dashboard/dashboardSlice';

const TrendChart = () => {
  const { spend } = useSelector(selectTrends);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Trends</h3>
        <div className="flex space-x-2">
          <button className="p-1 text-xs rounded bg-gray-100">📊</button>
          <button className="p-1 text-xs rounded bg-gray-100">📋</button>
        </div>
      </div>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={spend}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#FF6B00" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendChart;