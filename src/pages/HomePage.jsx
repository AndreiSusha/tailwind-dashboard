import React from 'react';
import Header from '../components/global/Header';
import ChartStats from '../components/global/ChartStats';

import {
  HiOutlineEmojiHappy,
  HiOutlineCurrencyEuro,
  HiOutlineChatAlt2,
  HiOutlineUserRemove,
} from 'react-icons/hi';

import { motion } from 'framer-motion';

import ChartClientActivities from '../components/charts/ChartClientActivities';
import ChartClientProfile from '../components/charts/ChartClientProfile';
import ChartMRR from '../components/charts/ChartMRR';

const HomePage = () => {
  return (
    <div className="flex-1 overflow-auto relative ">
      <Header title="Dashboard" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ChartStats
            name="Customer Happiness"
            icon={HiOutlineEmojiHappy}
            value="9.1"
            color="#6366F1"
            comparison="+2.5% than last week"
            comparisonColor="#10b981"
          />
          <ChartStats
            name="MRR"
            icon={HiOutlineCurrencyEuro}
            value="71.2K€"
            color="#8B5CF6"
            comparison="+0.0% than last week"
            comparisonColor="#0ea5e9"
          />
          <ChartStats
            name="Customer Conversationss"
            icon={HiOutlineChatAlt2}
            value="347"
            color="#EC4899"
            comparison="-0.5% than last week"
            comparisonColor="#ef4444"
          />
          <ChartStats
            name="Churm Rate"
            icon={HiOutlineUserRemove}
            value="2%"
            color="#10B981"
            comparison="+0.0% than last week"
            comparisonColor="#0ea5e9"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartClientActivities />
          <ChartClientProfile />
          <ChartMRR />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
