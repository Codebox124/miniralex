import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Hero from "./components/Home/Hero";

export default function Home() {
  const links = [
    { title: "Token Details Preview", icon: <FaArrowRight />, reverse: false },
    { title: "Exploration Highlights", icon: <FaArrowRight />, reverse: false },
    { title: "Community Impact", icon: <FaArrowRight />, reverse: false },
    {
      title: "Exploration & Resources",
      icon: <FaArrowRight />,
      reverse: false,
    },
    { title: "Tokenization Advantage", icon: <FaArrowLeft />, reverse: true },
    { title: "Token Details Preview", icon: <FaArrowRight />, reverse: false },
  ];

  return (
    <div className="w-full">
      <Hero />
      {/* Hero Section */}
      <section
        className="relative w-full h-max pt-24 pb-28 bg-cover bg-center text-white flex flex-col items-center justify-center p-6"
        style={{
          backgroundImage: "url('/heroBg.png')",
        }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          BRIDGING MINING AND
          <br />
          <span className=" text-[#F8D835] mt-10">BLOCKCHAIN TECHNOLOGY</span>
        </h1>

        <p className=" text-center font-thin text-white/90">
          Tokenizing Mineral Reserves for Transparency and Global Access.
        </p>

        <div className=" flex items-center justify-center gap-5">
          <Button className="mt-4 bg-[#F8D835] text-black px-6 py-3 rounded-lg">
            Learn More
          </Button>
          <Button className="mt-4 bg-transparent text-[#F8D835] px-6 py-3 rounded-lg ring-[1.3px] ring-[#F8D835]">
            Learn More
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section
        className="p-6 md:p-12 flex flex-col aboutimg  md:grid-cols-2  gap-6"
        style={{

          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Card className="w-full md:w-1/2  bg-white p-8 shadow-lg rounded-lg border-l-8 border-yellow-400">
          <h3 className="text-[#172B6B] font-bold text-sm uppercase">
            | ABOUT US
          </h3>
          <h2 className="text-2xl font-bold text-[#F8D835]">
            WE MAKE SUSTAINABLE MINING
          </h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui...
          </p>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button className="mt-4 bg-[#172B6B] text-white">Learn More</Button>
        </Card>
      </section>

      {/* Community Impact Section */}
      <section className="flex flex-col max-w-7xl mx-auto md:flex-row items-center  px-6 md:px-20 py-12">
        {/* Left Side - Images */}
        <div className="flex flex-row gap-4 w-full md:w-1/2">
          <div className="relative  ">
            <Image
              src="/com.png"
              alt="Mining operation"
              width={250}
              height={500}
              className=""
            />
          </div>
          <div className="relative mt-9 ">
            <Image
              src="/com_2.png"
              alt="Worker at factory"
              width={250}
              height={500}
              className=""
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-left md:pl-12">
          <h3 className="text-blue-800 font-bold text-lg uppercase">Community Impact</h3>
          <h2 className="text-yellow-500 font-bold text-3xl md:text-4xl mt-2">We Want To Move Forward Together</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul.
          </p>
          <button className="mt-6 bg-blue-900 text-white font-semibold py-3 px-6 rounded-md">
            Our Projects For Future
          </button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center bg-[#0A1A43] text-white p-10 md:p-20 gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h4 className="text-yellow-400 uppercase font-bold text-sm">
            Exploration Highlights
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Bringing the World <br />
            <span className="text-yellow-400">On-Chain</span>
          </h2>
          <p className="text-gray-300 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-10 mt-6">
            <div>
              <h3 className="text-yellow-400 text-2xl md:text-3xl font-bold">
                $1B+
              </h3>
              <p className="text-gray-300 text-sm">Yearly Growth</p>
            </div>
            <div>
              <h3 className="text-yellow-400 text-2xl md:text-3xl font-bold">
                500K+
              </h3>
              <p className="text-gray-300 text-sm">Monthly Growth</p>
            </div>
          </div>
          <button className="mt-6 bg-yellow-400 text-[#0A1A43] px-6 py-3 font-bold rounded-lg hover:bg-yellow-300 transition">
            Explore Now →
          </button>
        </div>

        {/* Right Map Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/home/africa.png"
            alt="Africa Map"
            width={500}
            height={500}
            className="w-full max-w-md"
          />
        </div>
      </section>

      <section className="bg-white p-6 md:p-12 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto">
        <div className="w-full md:w-1/2">
          <Image
            src="/home/workers.png"
            width={500}
            height={400}
            alt="Workers on site"
            className="rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-[#172B6B] font-semibold">TOKENOMICS</p>
          <h2 className="text-[#F8D835] text-2xl md:text-3xl font-bold mt-2">
            A DUAL-TOKEN SYSTEM
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="md:flex block justify-between mt-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-[#172B6B] text-3xl">💡</span>
                <p className="text-[#172B6B] font-semibold mt-2">SUBHEADING</p>
              </div>
            ))}
          </div>
          <button className="mt-6 px-6 py-2 border border-[#172B6B] text-[#172B6B] rounded-lg hover:bg-[#172B6B] hover:text-white transition-all ml-auto mr-auto w-max md:ml-0 md:mr-0">
            See Tokenization →
          </button>
        </div>
      </section>
    </div>
  );
}
