import Image from "next/image";
import Hero from "../components/shared/Hero";
import { FiDownload } from "react-icons/fi";

export default function Exploration() {
  return (
    <>
      <Hero
        heroImg="/logo.png"
        path="EXPLORATION & RESOURCES"
        description="MINERAL WEALTH AND ACHIEVEMENTS"
      />
      <div className="bg-gray-100 p-6 space-y-8 md:p-20">
        {/* Hero Image Section */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/exploration/bg.png"
            alt="Mining Exploration"
            width={1200}
            height={600}
            className="w-full h-[400px] md:h-max"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center p-6">
            <div className="relative w-max">
              <Image
                src="/exploration/card.svg"
                alt="Curved Background"
                width={400}
                height={400}
              />
              <button className="bg-[#172B6B] text-white px-3 py-2 rounded-md shadow-md hover:bg-[#172B6B]/90 transition duration-300 mt-4 md:mt-0 absolute bottom-0 left-0 z-10 mb-10 ml-8 text-sm">
                DOWNLOAD FEASIBILITY
              </button>
            </div>
          </div>
        </div>

        {/* Mineral Hotspots Section */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-[#172B6B] text-sm font-bold">
              | EXPLORATION MAP
            </h3>
            <h1 className="text-3xl font-extrabold text-yellow-500">
              THE MINERAL HOTSPOTS
            </h1>
            <div className="flex flex-wrap gap-4 text-lg font-semibold mt-3">
              <span className="text-[#172B6B] border-b-4 border-[#172B6B]">
                Gold
              </span>
              <span className="text-gray-400">Coltan</span>
              <span className="text-gray-400">Rare Earth</span>
              <span className="text-gray-400">Diamonds</span>
            </div>
            <p className="text-gray-600 text-base">
              Navigate through our interactive map that pinpoints our mining
              sites across Sierra Leone. Hover or click to view detailed site
              insights, including resource estimates and exploration highlights.
            </p>
            <div className="flex justify-between items-center mt-6 gap-5">
              <div>
                <h4 className="text-2xl font-extrabold text-yellow-500">
                  2,100,000
                </h4>
                <p className="text-gray-700 text-base">OZ inferred</p>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-yellow-500">
                  1.8–3.5 G/T.
                </h4>
                <p className="text-gray-700 text-lg">Grades Ranging</p>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full md:w-[40%]">
            <Image
              src="/map.png"
              alt="Exploration Map"
              width={400}
              height={400}
              className="w-full rounded-md"
            />
          </div>
        </div>

        {/* Events and Reports */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Events Section */}
          <div className="w-full md:w-1/2 bg-[#172B6B] text-white p-6 md:p-12">
            <h3 className="text-yellow-400 text-sm font-bold">
              | NEXT EVENTS SOON
            </h3>
            <h2 className="text-3xl font-bold">EVENTS DATES</h2>
            <div className="space-y-6 mt-4">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 last:border-b-0 flex justify-between py-2"
                >
                  <h4 className="text-yellow-400 font-bold text-lg">
                    25 FEB 2025
                  </h4>
                  <div>
                    <p className="text-sm font-thin">
                      MINERALEX HALF YEAR ENDED
                    </p>
                    <p className="text-sm font-thin">31 DECEMBER 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Reports Section */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-yellow-500 text-2xl font-bold">
              REPORTS & VALIDATION
            </h2>
            <div className="flex flex-wrap justify-center md:justify-between gap-6 mt-4">
              {[
                "/exploration/worker1.png",
                "/exploration/worker2.png",
                "/exploration/worker3.png",
              ].map((src, index) => (
                <div key={index} className="w-full md:w-1/3 text-center">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={src}
                      alt="Report Image"
                      width={200}
                      height={150}
                      className="object-cover w-full"
                    />
                  </div>
                  <p className="text-sm font-semibold mt-2">
                    {index === 0
                      ? "LEADING AUDITING FIRMS"
                      : index === 1
                      ? "INCLUDING CSA AND SRK"
                      : "DOCUMENTATION"}
                  </p>
                  <p className="text-xs text-gray-500 font-medium flex items-center justify-between">
                    <span>PDF 15.44 MB</span>
                    <span>
                      <FiDownload className=" text-gray-500" />
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
