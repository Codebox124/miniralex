"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { frombotttomtotop } from "../animations";

import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "-100%", opacity: 0 },
};

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const pathName = usePathname();

  const getLinkClass = (path: string) =>
    pathName === path
      ? "text-yellow-400 font-bold"
      : "text-white hover:text-yellow-400";

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-full w-80 bg-[#172B6B] text-white z-50 p-5 flex flex-col"
    >
      <div className="flex justify-between items-center mb-5">
        <span className="text-lg font-bold">CLOSE</span>
        <IoClose
          className="text-2xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <nav className="flex flex-col space-y-4">
        <Link href="/" className={getLinkClass("/")}>
          Main Home
        </Link>
        <Link href="/about" className={getLinkClass("/about")}>
          About Us
        </Link>
        <Link href="/exploration" className={getLinkClass("/exploration")}>
          Exploration & Resources
        </Link>
        <Link
          href="/market-opportunity"
          className={getLinkClass("/market-opportunity")}
        >
          Market Opportunity
        </Link>
        <Link href="/roadmap" className={getLinkClass("/roadmap")}>
          Roadmap
        </Link>
        <Link
          href="/investor-portal"
          className={getLinkClass("/investor-portal")}
        >
          Investor Portal
        </Link>
        <Link href="/daily-blogs" className={getLinkClass("/daily-blogs")}>
          Daily Blogs
        </Link>
        <Link href="/contact" className={getLinkClass("/contact")}>
          Contact Us
        </Link>
      </nav>
    </motion.div>
  );
};

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex flex-col items-end text-white">
      <div className="flex items-center w-full pt-10">
        <div className="bg-[#F8D835] rounded-tr-[40px] rounded-br-[40px] h-[fit-content] flex justify-end  w-[100px] py-[10px] mr-[15px] items-center gap-10 sm:gap-16">
          <IoMenu
            className="mr-[10px] text-[#172B6B] w-[39px] h-[30px] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
        <img src="/logo.png" alt="logo" width={100} height={100} />
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Hero;