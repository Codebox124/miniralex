import React from "react";
import Hero from "../components/shared/Hero";
import FuturePlans from "../components/roadmap/FuturePlans";
import Reports from "../components/roadmap/Reports";

function Roadmap() {
  return (
    <div className="w-full h-[fit-content] bg-white">
      <Hero
        heroImg="/logo.png"
        path="ROADMAP"
        description="PROVIDE A CLEAR TIMELINE OF MILESTONES AND FUTURE PLANS"
      />
      <FuturePlans />
      <Reports />
    </div>
  );
}

export default Roadmap;
