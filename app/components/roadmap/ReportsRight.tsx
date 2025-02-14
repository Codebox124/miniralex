"use client";
import React from "react";
import { RiDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { frombotttomtotop } from "../animations";
function ReportsRight() {
  return (
    <div className="text-black p-[30px] w-full md:w-[70%]">
      <motion.h1
        initial={frombotttomtotop.initial}
        whileInView={frombotttomtotop.whileInView}
        transition={frombotttomtotop.transition}
        viewport={frombotttomtotop.viewport}
        className="text-[#F8D835] text-4xl font-bold"
      >
        REPORTS & VALIDATION
      </motion.h1>
      <div className="reportsgrid w-full mt-[30px]">
        <motion.div
          initial={frombotttomtotop.initial}
          whileInView={frombotttomtotop.whileInView}
          transition={frombotttomtotop.transition}
          viewport={frombotttomtotop.viewport}
        >
          <img
            src="/leading.png"
            alt="leading"
            className="mb-[15px] w-full md:w-[fit-content]"
          />
          <p className="mb-[15px]">LEADING AUDITING FIRMS</p>
          <p className="flex items-center font-bold text-[#817C7C] justify-between md:justify-none">
            PDF 15.44MB <RiDownloadLine className="md:ml-[30%]" />
          </p>
        </motion.div>
        <motion.div
          initial={frombotttomtotop.initial}
          whileInView={frombotttomtotop.whileInView}
          transition={frombotttomtotop.transition}
          viewport={frombotttomtotop.viewport}
        >
          <img
            src="/including.png"
            alt="leading"
            className="mb-[15px] w-full md:w-[fit-content]"
          />
          <p className="mb-[15px]">INCLUDING CSA AND SRK</p>
          <p className="flex items-center font-bold text-[#817C7C] justify-between md:justify-none">
            PDF 15.44MB <RiDownloadLine className="md:ml-[30%]" />
          </p>
        </motion.div>
        <motion.div
          initial={frombotttomtotop.initial}
          whileInView={frombotttomtotop.whileInView}
          transition={frombotttomtotop.transition}
          viewport={frombotttomtotop.viewport}
        >
          <img
            src="/documentation.png"
            alt="leading"
            className="mb-[15px] w-full md:w-[fit-content]"
          />
          <p className="mb-[15px]">DOCUMENTATION</p>
          <p className="flex items-center font-bold text-[#817C7C] justify-between md:justify-none">
            PDF 15.44MB <RiDownloadLine className="md:ml-[30%]" />
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ReportsRight;
