"use client";

import React from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Hero from "../components/shared/Hero";

const Page = () => {
  return (
    <>
      <Hero
        path="EXPLORATION"
        description="Explore our projects and discover how we can help you achieve your goals."
        heroImg="/logo.png"
      />

      <section>
        <div
          className="relative bg-cover bg-center px-6 py-16 md:p-28"
          style={{ backgroundImage: "url('/explore.png')" }}
        >
          {/* Image Section */}
          <div className="relative flex flex-col items-center md:items-start">
            <Image
              src="/old-man.png"
              alt="Elderly man"
              width={800}
              height={400}
              className="rounded-lg w-full max-w-xl"
            />

            {/* Buttons */}
            <div className="flex space-x-4 mt-4">
              <button className="bg-white text-gray-700 rounded-full p-2 shadow">
                <FaChevronLeft />
              </button>
              <button className="bg-white text-gray-700 rounded-full p-2 shadow">
                <FaChevronRight />
              </button>
            </div>

            {/* Text Card */}
            <div className="md:absolute bottom-4 md:right-4 bg-white p-4 shadow-lg rounded-lg w-64 md:w-80 md:transform relative -translate-x-0 md:-translate-x-40 mt-10 md:mt-0">
              <h3 className="text-yellow-500 font-bold">RWA TOKEN</h3>
              <h4 className="text-blue-700 font-semibold text-sm md:text-base">
                REAL ASSET BACKED SECURITY
              </h4>
              <p className="text-gray-600 text-xs md:text-sm">
                The RWA Token is backed by verified mineral reserves, offering
                investors unparalleled security and tangible value.
              </p>
            </div>
          </div>
        </div>

        {/* Transparent Allocation Section */}
        <div className="bg-white text-black py-20 rounded-lg p-6 mt-10 mx-auto flex flex-col md:flex-row items-center justify-evenly gap-6">
  <div className="text-center md:text-left">
    <h3 className="text-blue-900 font-semibold text-sm md:text-lg">
      SUPPLY DETAILS & DISTRIBUTION
    </h3>
    <h2 className="text-yellow-500 font-bold text-xl md:text-2xl">
      TRANSPARENT ALLOCATION
    </h2>

    <div className="flex flex-col gap-3 mt-4">
      {[
        { label: "Team Development", percentage: "90%", color: "pink" },
        { label: "Community Growth", percentage: "70%", color: "blue" },
        { label: "Community Growth", percentage: "70%", color: "green" },
        { label: "Team Development", percentage: "70%", color: "yellow" },
        { label: "Community Growth", percentage: "70%", color: "purple" },
      ].map(({ label, percentage, color }, index) => (
        <p
          key={index}
          className={`border-l-4 border-${color}-500 pl-3 text-base md:text-lg font-medium`}
        >
          {label}{" "}
          <span className={`text-${color}-500 font-bold text-lg md:text-xl`}>
            {percentage}
          </span>
        </p>
      ))}
    </div>
  </div>

  <div className="w-56 h-56 md:w-72 md:h-72">
    <Image
      src="/pie-chart.png"
      alt="Token Allocation Chart"
      width={300}
      height={300}
      className="w-full h-full object-contain"
    />
  </div>
</div>

      </section>
    </>
  );
};

export default Page;
