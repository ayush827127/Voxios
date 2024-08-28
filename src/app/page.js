"use client"
import Image from "next/image";
import Hero from "./_component/Hero";
import SocialMediaPartners from "./_component/SocialMedia";
import Stats from "./_component/Stats";
import Services from "./_component/Services";
import TestimonialsSection from "./_component/Testimonial";
import FooterSection from "./_component/Footer";
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Navbar */}
      <nav className={`bg-white shadow-lg ${scrolling ? 'fixed top-0 left-0 w-full z-50' : 'relative'} transition-all duration-300`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/Voxizo-Logo.png"
              alt="Voxizo Logo"
              width={150}
              height={50}
            />
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-800 hover:text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white rounded-b-lg pb-2 px-2"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white rounded-b-lg pb-2 px-2"
            >
              Services
            </a>
            <a
              href="#clients"
              className="text-gray-800 hover:text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white rounded-b-lg pb-2 px-2"
            >
              Clients
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white rounded-b-lg pb-2 px-2"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white rounded-b-lg pb-2 px-2"
            >
              Contact
            </a>
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="https://wa.me/your-number"
              className="flex items-center space-x-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition-colors duration-300"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:your-number"
              className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition-colors duration-300"
            >
              <Image src="/call.png" alt="Call" width={24} height={24} />
              <span>Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-800 hover:text-blue-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="hidden mobile-menu">
          <ul className="space-y-4 text-center bg-gray-50">
            <li>
              <a
                href="#home"
                className="block text-gray-800 hover:text-blue-600 py-2 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-gray-800 hover:text-blue-600 py-2 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#clients"
                className="block text-gray-800 hover:text-blue-600 py-2 transition-colors duration-300"
              >
                Clients
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block text-gray-800 hover:text-blue-600 py-2 transition-colors duration-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-800 hover:text-blue-600 py-2 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Contact Buttons */}
          <div className="flex justify-center space-x-4 py-4">
            <a
              href="https://wa.me/your-number"
              className="flex items-center space-x-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition-colors duration-300"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:your-number"
              className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition-colors duration-300"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Phone_font_awesome.svg/768px-Phone_font_awesome.svg.png"
                alt="Call"
                width={24}
                height={24}
              />
              <span>Call</span>
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <Hero />

      {/* Social Media Partners Section */}
      <SocialMediaPartners />

      {/* Client Section */}
      <Stats />

      {/* Services Section */}
      <Services />

      <TestimonialsSection />

      <FooterSection />
    </div>
  );
}
