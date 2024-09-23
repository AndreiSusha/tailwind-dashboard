import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from 'recharts';
  import { motion } from 'framer-motion';
  
  const data = [
    { name: 'Jan', MRR: 45000 },
    { name: 'Feb', MRR: 48000 },
    { name: 'Mar', MRR: 52000 },
    { name: 'Apr', MRR: 53000 },
    { name: 'May', MRR: 49000 },
    { name: 'Jun', MRR: 51000 },
    { name: 'Jul', MRR: 55000 },
    { name: 'Aug', MRR: 60000 },
    { name: 'Sept', MRR: 63000 },
    { name: 'Oct', MRR: 61000 },
    { name: 'Nov', MRR: 64000 },
    { name: 'Dec', MRR: 69000 },
  ];
const ChartMRR = () => {
    return (
        <motion.div className='bg-white shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-300'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
    >
        <h2 className='text-lg font-medium mb-4 text-gray-700'>Monthly Recurring Revenue (MRR)</h2>
        <div className='h-80'>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `${value / 1000}k €`} />
            <Tooltip formatter={(value) => `${value} €`} />
            <Legend />
            <Area
              type="monotone"
              dataKey="MRR"
              stroke="#1fc3aa"
              fill="#1fc3aa"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
        </div>  
        </motion.div>
      )
    }

export default ChartMRR
