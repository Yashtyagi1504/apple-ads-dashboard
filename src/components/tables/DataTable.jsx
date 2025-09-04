import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { selectActiveFilter, setActiveFilter } from '../../features/dashboard/dashboardSlice';

const DataTable = ({ title, data, columns, showTabs = true }) => {
  const activeFilter = useSelector(selectActiveFilter);
  const dispatch = useDispatch();
  
  const tabs = ['All Orders', 'Keywords', 'Ads'];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-medium mb-4">{title}</h3>
      
      {showTabs && (
        <div className="flex border-b mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm ${activeFilter === tab ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
              onClick={() => dispatch(setActiveFilter(tab))}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              {columns.map((column) => (
                <th key={column.key} className="pb-2">{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <motion.tr 
                key={row.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-t"
              >
                {columns.map((column) => {
                  if (column.key === 'changeBar') {
                    return (
                      <td key={column.key} className="py-3">
                        <div className="w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${row.changeType === 'increase' ? 'bg-green-500' : 'bg-red-500'}`}
                            style={{ width: `${row[column.key]}%` }}
                          ></div>
                        </div>
                      </td>
                    );
                  }
                  
                  if (column.key === 'change') {
                    return (
                      <td key={column.key} className="py-3">
                        <span className={row.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}>
                          {row[column.key]}
                        </span>
                      </td>
                    );
                  }
                  
                  return <td key={column.key} className="py-3">{row[column.key]}</td>;
                })}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;