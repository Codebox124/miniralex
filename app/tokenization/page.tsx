"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";

import Hero from "../components/shared/Hero";

const slides = [
  {
    image: "/old-man.png",
    title: "RWA TOKEN",
    subtitle: "REAL ASSET BACKED SECURITY",
    description:
      "The RWA Token is backed by verified mineral reserves, offering investors unparalleled security and tangible value. By linking digital assets to real-world mineral resources, the token ensures that investments are anchored in physical assets, providing stability and credibility.",
  },
  {
    image: "/min.png",
    title: "Utility Token",
    subtitle: "Unlocking Platform Benefits",
    description:
      "The Utility Token serves as the key to unlocking the full potential of the Mineralex platform. Token holders gain governance rights, allowing them to participate in key decision-making processes. The token also offers staking options with attractive rewards, incentivizing long-term commitment to the project.",
  },
  {
    image: "/miniral.png",
    title: "High-Value mineral assets",
    subtitle: "The Advantage of Tokenization",
    description:
      "This innovative approach enables fractional ownership, making high-value mineral assets accessible to investors worldwide. With blockchain's inherent transparency and immutability, investors can trust the accuracy of records and transactions.",
  },
];


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
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col items-center md:items-start">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1000}
                    height={400}
                    className="rounded-lg w-full max-w-7xl"
                  />

                  {/* Text Card */}
                  <div className="absolute bottom-6 md:bottom-8 right-6 md:right-60 bg-white p-6 shadow-lg rounded-lg w-72 md:w-[600px]">
                    <h3 className="text-yellow-500 font-bold">{slide.title}</h3>
                    <h4 className="text-blue-700 font-semibold text-sm md:text-base">
                      {slide.subtitle}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute bottom-6 left-6 flex space-x-4">
            <button className="swiper-prev bg-white text-gray-700 rounded-full p-3 shadow-lg">
              <FaChevronLeft size={20} />
            </button>
            <button className="swiper-next bg-white text-gray-700 rounded-full p-3 shadow-lg">
              <FaChevronRight size={20} />
            </button>
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
