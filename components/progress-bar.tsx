"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressBarProps {
  color?: string;
  height?: number;
}

const ScrollProgressBar = ({ 
  color = "#016590", // Amity Gold
  height = 3 
}: ScrollProgressBarProps) => {
  // 1. Get the raw scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // 2. Apply Spring physics to the progress
  // stiffness: higher = faster response
  // damping: higher = less "bounce"
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-70 origin-left"
      style={{
        scaleX,
        backgroundColor: color,
        height: `${height}px`,
      }}
    />
  );
};

export default ScrollProgressBar;