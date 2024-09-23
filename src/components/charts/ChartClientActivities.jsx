import React from 'react';

import { motion } from 'framer-motion';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', Man: 2100, Women: 1700 },
  { month: 'Feb', Man: 1400, Women: 1200 },
  { month: 'Mar', Man: 2300, Women: 1800 },
  { month: 'Apr', Man: 1600, Women: 2000 },
  { month: 'May', Man: 1300, Women: 1500 },
  { month: 'Jun', Man: 2400, Women: 2200 },
  { month: 'Jul', Man: 1900, Women: 1400 },
  { month: 'Aug', Man: 1700, Women: 1600 },
  { month: 'Sept', Man: 2200, Women: 1300 },
  { month: 'Oct', Man: 1500, Women: 1400 },
  { month: 'Nov', Man: 1800, Women: 2100 },
  { month: 'Dec', Man: 2000, Women: 2500 },
];

const ChartClientActivities = () => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-700">
        Visitors Analytics
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Women" fill="#8624f5" />
            <Bar dataKey="Man" fill="#1fc3aa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ChartClientActivities;
