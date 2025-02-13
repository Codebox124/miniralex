"use client";

import React from "react";
import Image from "next/image";
import Hero from "../components/shared/Hero";

const page = () => {
  return (
    <>
      <Hero
        heroImg="/logo.png"
        path="MARKET OPPORTUNITIES"
        description="FINANCIAL POTENTIAL OF MINERALEX'S INITIATIVES"
      />

      <div className="max-w-7xl mx-auto px-4 py-10 md:p-28">
        {/* High-Value Mineral Reserves Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-gray-600 font-semibold text-sm uppercase">
              HIGH-VALUE MINERAL RESERVES
            </h3>
            <h2 className="text-yellow-500 font-bold text-2xl mt-2">
              GROWING, TECHNOLOGY-DRIVEN WORLD
            </h2>
            <p className="text-gray-700 mt-4 text-base">
              Mineralex stands at the forefront of a highly lucrative market,
              with mineral reserves valued at billions of dollars. Gold reserves
              are estimated at $4 billion, while Coltan resources, critical for
              electronics and advanced technologies, are worth $6.3 billion. The
              rising global demand for Tantalum, Niobium, and Rare Earth further
              amplifies the financial potential of these resources, positioning
              Mineralex as a leader in meeting the needs of a growing,
              technology-driven world.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/market-opportunity/gold-en-hand.png"
              alt="FutureSmart Mining"
              width={400}
              height={250}
              className="rounded-lg w-full"
            />
            <div className="absolute bottom-0 left-0 bg-blue-900 text-white p-3 w-full rounded-b-lg">
              <h4 className="text-sm font-semibold">FUTURESMART MINING™</h4>
              <p className="text-xs">Our Sustainable Mining Plan</p>
            </div>
          </div>
        </div>

        {/* Global Market Trends & ROI Potential Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="relative">
            <Image
              src="/market-opportunity/gold-en-map.png"
              alt="FutureSmart Mining"
              width={400}
              height={250}
              className="rounded-lg w-full"
            />
            <div className="absolute bottom-0 left-0 bg-blue-900 text-white p-3 w-full rounded-b-lg">
              <h4 className="text-sm font-semibold">FUTURESMART MINING™</h4>
              <p className="text-xs">Our Sustainable Mining Plan</p>
            </div>
          </div>
          <div>
            <h3 className="text-gray-600 font-semibold text-sm uppercase">
              GLOBAL MARKET TRENDS AND ROI POTENTIAL
            </h3>
            <h2 className="text-yellow-500 font-bold text-2xl mt-2">
              ROI PROJECTIONS, PRESENTED
            </h2>
            <p className="text-gray-700 mt-4 text-base">
              With a strong upward trajectory in global mineral demand, the
              future for mining investments looks exceptionally bright. Our ROI
              projections, presented with necessary disclaimers, showcase the
              financial opportunities awaiting investors, backed by tangible
              assets and transparent operations.
            </p>
          </div>
        </div>

        {/* Gold, Coltan, Diamond Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 bg-gray-100 p-4 rounded-lg">
          <div className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold">
            Gold ($4B)
          </div>
          <div className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold">
            Coltan ($6.3B)
          </div>
          <div className="bg-purple-800 text-white px-6 py-3 rounded-md font-semibold">
            Diamond ($6.3B)
          </div>
        </div>

        {/* Scope 1 - 2025 Section */}
        <div className="text-center mt-12">
          <h2 className="text-gray-700 font-semibold text-xl">
            Scope 1 - 2025
          </h2>
          <div className="flex justify-center mt-6">
            <Image
              src="/market-opportunity/co2-data-chart.png"
              alt="CO2 Emissions Chart"
              width={300}
              height={300}
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
