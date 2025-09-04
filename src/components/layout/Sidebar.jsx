import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const menuItems = [
    { id: 1, label: 'Overview', icon: '📊', active: true },
    { id: 2, label: 'Campaigns', icon: '🚀', active: false },
    { id: 3, label: 'Keywords', icon: '🔍', active: false },
    { id: 4, label: 'Creative', icon: '🎨', active: false },
    { id: 5, label: 'Settings', icon: '⚙️', active: false },
  ];

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-16 md:w-64 bg-primary h-screen fixed left-0 top-0 text-white"
    >
      <div className="p-4 flex items-center justify-center md:justify-start">
        <span className="text-xl font-bold hidden md:block">Apple Ads</span>
        <span className="md:hidden text-xl">🍎</span>
      </div>
      
      <nav className="mt-8">
        <ul>
          {menuItems.map((item) => (
            <motion.li 
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center p-4 ${item.active ? 'bg-white/10' : ''} cursor-pointer`}
            >
              <span className="mr-4">{item.icon}</span>
              <span className="hidden md:block">{item.label}</span>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;