"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

const partnerImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Tiktok_logo.png",
    alt: "TikTok",
    name: "TikTok",
    description: "Discover the latest trends and viral content on TikTok."
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    alt: "Instagram",
    name: "Instagram",
    description: "Share your moments and explore stunning visuals on Instagram."
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    alt: "Facebook",
    name: "Facebook",
    description: "Connect with friends and communities on Facebook."
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/768px-Snapchat_logo.svg.png",
    alt: "Snapchat",
    name: "Snapchat",
    description: "Share ephemeral moments and creative content on Snapchat."
  }
];

const SocialMediaPartners = () => {
  return (
    <section id="partners" className="bg-gray-100 py-20 w-full">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Our Social Media Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {partnerImages.map((partner, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl hover:bg-blue-50 w-64"
              whileHover={{ scale: 1.1, rotate: 4, y: -15 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <p className="text-lg font-semibold text-blue-600 mb-2">{partner.name}</p>
                <p className="text-sm text-gray-700">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaPartners;
