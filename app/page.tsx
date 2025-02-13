import Image from "next/image";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import CommunityImpact from "./components/Home/Community";
import ExplorationHighlights from "./components/Home/Explore";
import TokenomicsSection from "./components/Home/Tax";

export default function Home() {
  return (
    <div className="">
      <Hero />
     <About />
     <CommunityImpact />
     <ExplorationHighlights />
     <TokenomicsSection />
    </div>
  );
}
