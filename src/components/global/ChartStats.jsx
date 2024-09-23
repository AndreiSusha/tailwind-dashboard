import React from 'react'
import {motion} from 'framer-motion'

const ChartStats = ({
    name,
    icon: Icon,
    value,
    color,
    comparison,
    comparisonColor,
  }) => {
    return (
      <motion.div
        className="bg-gray-50 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-300"
        whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
      >
        <div className="px-4 py-5 sm:p-6">
          <span className="flex items-center text-sm font-medium text-gray-700">
            <Icon size={24} className="mr-2" style={{ color }} />
            {name}
          </span>
          <p className="mt-1 text-3xl font-semibold text-gray-700">{value}</p>
          <p className={`text-sm pl-2`} style={{ color: comparisonColor }}>
            {comparison}
          </p>
        </div>
      </motion.div>
    );
  };

export default ChartStats
