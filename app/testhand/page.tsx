"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HandPage() {
  return (
    <div>
      <Card />
      <div className="h-[2000px] bg-gradient-to-b from-gray-500 to-gray-300" />
      <MemberParent />
    </div>
  );
}

const Hand = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Transform values for smoother animation
  const leftCardX = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], [0, -20, -40, -60, -80]);
  const rightCardX = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], [0, 20, 40, 60, 80]);
  const containerY = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], [0, -50, -100, -150, -200]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  //hand
  const handY = useTransform(scrollYProgress, [0, 0.5, 0.6], [0, -50, -100]);
  const opacityHand = useTransform(scrollYProgress, [0,0.5,0.6], [1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[2000px] bg-yellow-50"
    >
      <motion.div
        className="sticky top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5"
        style={{
          y: containerY,
          opacity
        }}
      >
        <motion.div 
          className="absolute w-8 h-8 bg-blue-500 rounded-full top-[200px] -translate-y-1/2 left-1/2 flex items-center justify-center text-white text-xs font-bold"
          style={{ 
            opacity: opacityHand ,
            y : handY
          }}
          >
          Start
        </motion.div>
        {/* Left Card */}
        <motion.div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[20vw] min-w-[200px] bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6 shadow-xl rounded-lg"
          style={{ 
            x: leftCardX,
          }}
        >
          <div className="text-lg font-semibold">Left Card</div>
          <div className="text-sm mt-2 opacity-80">
            Scroll progress: {Math.round(scrollYProgress.get() * 100)}%
          </div>
          <div className="mt-3 text-xs opacity-70">
            Moving left as you scroll down
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[20vw] min-w-[200px] bg-gradient-to-br from-pink-600 to-red-600 text-white p-6 shadow-xl rounded-lg"
          style={{ 
            x: rightCardX,
          }}
        >
          <div className="text-lg font-semibold">Right Card</div>
          <div className="text-sm mt-2 opacity-80">
            Scroll progress: {Math.round(scrollYProgress.get() * 100)}%
          </div>
          <div className="mt-3 text-xs opacity-70">
            Moving right as you scroll down
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Card = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <div className="h-[4000px]" ref={ref}>
      <div className="relative">
        <div className="absolute w-8 h-8 bg-blue-500 rounded-full top-4 left-4 flex items-center justify-center text-white text-xs font-bold">
          Start
        </div>
      </div>
      <Hand />
    </div>
  );
};


const MemberParent = () => {
  return (
    <div className="flex h-[2000px] w-full bg-gray-900">
      <motion.div className="w-[25%] bg-black">
        {/* Sidebar content can go here */}
      </motion.div>
      <div className="flex-1 relative overflow-hidden">
         <MemberCard name="Tyryu" img="/img/profile/tyryu2.png" posX={5} posY={1}/>
         <MemberCard name="Alex" img="/img/profile/tyryu2.png" posX={50} posY={2}/>
         <MemberCard name="Jordan" img="/img/profile/tyryu2.png" posX={25} posY={3}/>
         <MemberCard name="Sam" img="/img/profile/tyryu2.png" posX={70} posY={1.5}/>
      </div>
    </div>
  )
};

const StepTarget = 5;
const MemberCard = ({ name, img, posX, posY }: { name: string; img: string; posX: number; posY: number }) => {
  const [animationSequence, setAnimationSequence] = useState<string[]>([]);
  
  useEffect(() => {
    let sequence : string[] = ["0%"];
    
    let diff : number[] = []
    for (let i = StepTarget; i > 1; i --) {
      const tmp1 = posX/i
      const tmp2 = i > 0 ? posX/(i-1) : 0

      console.log(tmp1)
      console.log(tmp2)
      diff.push(Math.abs(tmp1 - tmp2));

    }

    console.log(diff.reverse())
 
    diff.reduce((acc, curr) => {
      acc += curr;
      sequence.push(`${acc}%`);
      return acc;
    } , 0)

    console.log(sequence)
    
    // Ensure we end exactly at posX
    if (sequence[sequence.length - 1] !== `${posX}%`) {
      sequence.push(`${posX}%`);
    }
    
    setAnimationSequence(sequence);
  }, [posX]); // Added posX as dependency

  return (
    <motion.div
      className="absolute w-[200px] h-[250px] bg-white rounded-lg shadow-xl overflow-hidden"
      style={{
        top: `${posY * 15}%`,
      }}
      initial={{
        left: '0%',
        opacity: 0,
        scale: 0.8
      }}
      whileInView={{
        left: animationSequence, // This will animate through all positions
        opacity: [0,0.4,1],
        scale: 1
      }}
      transition={{
        duration: 6, // Longer duration for the sequence
        delay: posY * 0.2,
        ease: "linear"
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      <div className="w-full h-[180px] overflow-hidden">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='180' viewBox='0 0 200 180'%3E%3Crect width='200' height='180' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>
      <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-white font-bold text-lg text-center">{name}</div>
        <div className="text-white text-xs text-center mt-1">
          Target: {posX}%
        </div>
      </div>
    </motion.div>
  );
}
