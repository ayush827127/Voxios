"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRegWindowMaximize, FaBullhorn, FaChartLine, FaLaptopCode, FaSearch, FaPenNib } from 'react-icons/fa';

const ServiceCard = ({ Icon, title, description }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="text-blue-500 text-4xl mb-4" />
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Our Services
        </h2>
        <p className="text-lg font-medium text-gray-600 mb-16">
          Discover how we can help you achieve your goals with our expert services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceCard
            Icon={FaLaptopCode}
            title="Web Design"
            description="Creative and responsive designs that make your brand stand out."
          />
          <ServiceCard
            Icon={FaBullhorn}
            title="Digital Marketing"
            description="Effective strategies to enhance your online presence and reach."
          />
          <ServiceCard
            Icon={FaChartLine}
            title="Brand Strategy"
            description="Strategic planning to build and grow your brand effectively."
          />
          <ServiceCard
            Icon={FaSearch}
            title="SEO Services"
            description="Optimize your website for higher search engine rankings."
          />
          <ServiceCard
            Icon={FaRegWindowMaximize}
            title="Marketing Strategy"
            description="Innovative marketing strategies to boost your market presence."
          />
          <ServiceCard
            Icon={FaPenNib}
            title="Content Creation"
            description="High-quality content to engage and attract your audience."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
