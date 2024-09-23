import React from 'react';
import Header from '../components/global/Header';
import ChartStats from '../components/global/ChartStats';
import ChartSales from '../components/charts/ChartSales';
import ChartCategory from '../components/charts/ChartCategory';

import ProductsTable from '../components/tables/ProductsTable';

import {
  HiOutlineEmojiHappy,
  HiOutlineCurrencyEuro,
  HiOutlineChatAlt2,
  HiOutlineUserRemove,
} from 'react-icons/hi';

import { motion } from 'framer-motion';

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative ">
      <Header title="Products" />
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

        <ProductsTable />

        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <ChartSales />
          <ChartCategory />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
