"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { frombotttomtotop } from '../animations'

function Bottom() {
  return (
    <motion.div
      initial={frombotttomtotop.initial}
            whileInView={frombotttomtotop.whileInView}
            transition={frombotttomtotop.transition}
            viewport={frombotttomtotop.viewport}
    >
        <img src="/map2.png" alt="map" />
    </motion.div>
  )
}

export default Bottom