
import React from 'react';

const HomeSection = () => {


  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fHNreXNjcmFwZXxlbnwwfHx8fDE2NjYwOTY0Mzc&ixlib=rb-1.2.1&q=80&w=1920')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-75"></div>
      <div className="relative z-10 text-center p-10 max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold text-white animate-pulse drop-shadow-lg">
          Welcome to Voxizo
        </h1>
        <p className="mt-6 text-xl text-white leading-relaxed drop-shadow-lg">
          Innovative solutions for your business growth
        </p>
        <button className="mt-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-full shadow-xl hover:from-blue-600 hover:to-purple-600 transition duration-300 transform hover:scale-105">
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default HomeSection;
