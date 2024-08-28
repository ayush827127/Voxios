"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaUsers, FaProjectDiagram, FaDollarSign } from 'react-icons/fa';

const AnimatedNumber = ({ value, duration }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const end = value;
    const durationMs = duration * 1000;
    const incrementTime = durationMs / end;

    const timer = setInterval(() => {
      start += 1;
      if (start <= end) {
        setCount(start);
      } else {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <motion.div
      className="text-6xl font-extrabold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ color: 'rgb(59, 130, 246)' }} // Light blue color for text
    >
      {count.toLocaleString()}
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-purple-600 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          The numbers that reflect our standing
        </h2>
        <p className="text-lg font-medium text-gray-200 mb-16">
          Our users love us and we know you will too!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="p-8 bg-blue-100 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaUsers className="text-6xl text-yellow-500 mb-4" /> {/* Colorful icon */}
            <AnimatedNumber value={950} duration={2} />
            <p className="text-xl font-semibold text-blue-600 mt-4">Satisfied Clients</p>
          </motion.div>
          <motion.div
            className="p-8 bg-blue-100 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaProjectDiagram className="text-6xl text-green-500 mb-4" /> {/* Colorful icon */}
            <AnimatedNumber value={120} duration={2} />
            <p className="text-xl font-semibold text-purple-600 mt-4">Projects Completed</p>
          </motion.div>
          <motion.div
            className="p-8 bg-blue-100 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaDollarSign className="text-6xl text-red-500 mb-4" /> {/* Colorful icon */}
            <AnimatedNumber value={1000} duration={1} />
            <p className="text-xl font-semibold text-blue-600 mt-4">Total Revenue</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
