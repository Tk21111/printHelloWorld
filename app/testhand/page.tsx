"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function HandPage() {
  return (
    <div>
        <Card/>
        <div className="h-[2000px] bg-gradient-to-b from-gray-500 to-gray-300" />
    </div>
  );
}

const Hand = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"], // More focused range
  });

  // Debug: Add this to see what scrollYProgress values you're getting
  console.log("scrollYProgress:", scrollYProgress);

  // Fade out from 75% to 100% of the scroll progress
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  const posX = useTransform(scrollYProgress , [0,0.4,0.6,1] , [10,20,30,40])
  const posY = useTransform(scrollYProgress , [0,0.4,0.6,1] , [30,40,70,100])

  // For CSS left property (if you want to use left)
  const leftTemplate = useMotionTemplate`-${posX }%`;
  const topTemplate = useMotionTemplate`${posY }%`;


  return (
    <motion.div
      ref={ref}
      className="relative h-[2000px] bg-yellow-50"
    >
      <motion.div
        className="sticky top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] bg-black text-white p-4 shadow-lg rounded"
        style={{ opacity }}
      >
        <div>Im a sticky header!</div>
        <div className="text-xs mt-2">Scroll progress: {Math.round(scrollYProgress.get() * 100)}%</div>
      </motion.div>
      <motion.div
        className="sticky top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[20vw] bg-black text-white p-4 shadow-lg rounded"
        style={{ 
           
            x : leftTemplate,
            y : topTemplate
        }}
      >
        <div>Im a sticky header!</div>
        <div className="text-xs mt-2">Scroll progress: {Math.round(scrollYProgress.get() * 100)}%</div>
      </motion.div>
      
    </motion.div>
  );
};

const Card = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"], // More focused range
    });

    // Debug: Add this to see what scrollYProgress values you're getting
    console.log("scrollYProgress:", scrollYProgress);

    // Fade out from 75% to 100% of the scroll progress
    
    return (
        <div className="h-[4000px]" ref={ref}>
            <div className="relative">
                <div className="absolute w-3 h-3 bg-whtie-950">asd</div>
            </div>
            <Hand/>
        </div>
    )
}