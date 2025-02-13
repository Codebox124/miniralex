'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className=" relative w-full aboutimg  py-16">
      <div className="container mx-auto max-w-6xl px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10">
    
    
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-lg border-l-8 border-yellow-400"
        >
          <h3 className="text-lg font-bold text-blue-900 uppercase">About Us</h3>
          <h2 className="text-2xl font-semibold text-yellow-500 mt-2">
            We Make Sustainable Mining
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui...
          </p>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
