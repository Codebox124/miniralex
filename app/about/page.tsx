"use client";

import React from "react";
import Hero from "../components/shared/Hero";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const page = () => {
  const timelineData = [
    {
      year: "2010",
      description:
        "Mineralex Group was founded to explore untapped mineral resources in Sierra Leone.",
    },
    {
      year: "2015",
      description:
        "Achieved the first validated mineral reserve of gold and coltan, setting the foundation for future growth.",
    },
    {
      year: "2019",
      description:
        "Partnered with globally recognized auditing firms (CSA, SRK) for resource validation and compliance.",
    },
    {
      year: "2022",
      description:
        "Pioneered the tokenization of mineral assets, merging mining with blockchain for increased accessibility.",
    },
  ];

  return (
    <div>
      <Hero heroImg="/logo.png" path="ABOUT US" description="WHAT WE DO" />

      <section className="px-6 py-12 max-w-7xl mx-auto md:p-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-blue-900 font-semibold uppercase">
              | Our Mission & Journey
            </h3>
            <h2 className="text-[#F8D835] font-bold text-2xl md:text-3xl leading-tight">
              Revolutionizing Mining Through Blockchain: Our Mission & History
            </h2>
            <p className="mt-4">
              <strong>Mission:</strong> To revolutionize the mining industry by
              integrating blockchain technology, enabling global transparency,
              fractional ownership, and sustainable investments in natural
              resources.
            </p>
            <p className="mt-2">
              <strong>Vision:</strong> To create a decentralized, transparent,
              and inclusive ecosystem where mining investments drive economic
              growth, community development, and environmental stewardship.
            </p>
          </div>
          <div className="relative w-full h-auto">
            <Image
              src="/garden-staff.png"
              alt="Kew Garden staff Mapping of endangered tree species"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {timelineData.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold">{item.year}:</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button className="p-3 bg-[#253772] rounded-full text-white">
              <FaChevronLeft />
            </button>
            <button className="p-3 bg-[#253772] rounded-full text-white">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12 md:p-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <Image
            src="/community.png"
            alt="Community"
            width={1000}
            height={600}
            className="w-full h-auto"
          />
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl mt-4">
            <h3 className="text-blue-900 font-semibold uppercase border-l-4 border-blue-900 pl-2">
              Our Legacy
            </h3>
            <h2 className="text-[#F8D835] font-bold text-lg leading-tight mt-2">
              Building a Legacy of Innovation, Transparency, and Sustainability
            </h2>
            <p className="mt-4 text-gray-700 text-sm leading-relaxed">
              For over a decade, Mineralex Group has been at the forefront of
              merging traditional mining practices with cutting-edge
              technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12 max-w-7xl mx-auto bg-[#0F1D3A] text-white">
        <div className="relative text-center">
          <h3 className="text-[#F8D835] font-semibold uppercase text-sm">
            Our Main Team
          </h3>
          <h2 className="text-3xl font-bold mt-2">Meet the Visionaries</h2>
          <p className="mt-2 text-gray-300 text-sm max-w-2xl mx-auto">
            Meet the brilliant minds behind Mineralex Group.
          </p>
        </div>
        <div className="relative flex flex-wrap gap-6 justify-center mt-10">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="relative w-64 p-4 bg-white text-black rounded-xl shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#1C2D5A] text-white w-12 h-12 flex items-center justify-center font-bold rounded-md">
                  J.C
                </div>
                <div>
                  <h4 className="font-bold">John A. Carter</h4>
                  <p className="text-[#F8D835] text-sm">Founder & CEO</p>
                </div>
              </div>
              {index === 1 && (
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  A geologist by profession and a visionary by passion, John
                  combines his deep industry knowledge with a drive to
                  revolutionize mining through blockchain technology.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
