import { motion } from 'framer-motion';

const CommonSection = ({ icon: Icon, title, children, bg = "bg-white" }) => {
  return (
    <motion.div
      className={`p-6 rounded-xl border border-slate-300 shadow-xl mb-8 ${bg}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <Icon className="text-green-600 mr-4" size="24" />
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};

export default CommonSection;
