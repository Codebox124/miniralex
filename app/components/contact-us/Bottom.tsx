"use client";
import React from "react";
import { motion } from "framer-motion";
import { frombotttomtotop } from "../animations";
import Image from "next/image";

function Bottom() {
  return (
    <motion.div
      initial={frombotttomtotop.initial}
      whileInView={frombotttomtotop.whileInView}
      transition={frombotttomtotop.transition}
      viewport={frombotttomtotop.viewport}
    >
      <Image
        src="/map2.png"
        alt="map"
        width={300}
        height={300}
        className=" ml-auto mr-auto"
      />
    </motion.div>
  );
}

export default Bottom;
