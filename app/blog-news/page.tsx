import React from "react";
import Hero from "../components/shared/Hero";
import News from "../components/blog-news/News";

function page() {
  return (
    <div className="bg-white text-black pb-[70px]">
      <Hero
        heroImg="/logo.png"
        path="BLOG-NEWS"
        description="GET TO KNOW INFORMATION"
      />
      <News />
    </div>
  );
}

export default page;
