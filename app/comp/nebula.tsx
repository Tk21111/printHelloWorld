"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const animatedImages = [
    "/img/nebula/neb-1/b-1.png",
  "/img/nebula/neb-1/e-1.png",
  "/img/nebula/neb-1/e-2.png",
  "/img/nebula/neb-1/e-3.png",
  "/img/nebula/neb-1/e-4.png"
];

export default function Nebula() {

    const [dot, setDot] = useState("..");

  useEffect(() => {
    const interval = setInterval(() => {
      setDot((prev) => (prev.length > 5 ? "." : prev + "."));
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);
        
    
  return (
    <div className="relative h-screen w-screen">
        <p className="absolute top-1/2 left-1/2  -translate-x-1/2 translate-y-14 text-center text-5xl">{"in dev" + dot}</p>
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
        
      >
        
        {/* Animated overlay images */}
        {animatedImages.map((src, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 z-10"
            animate={{ rotateZ: [0,90,180,270,360] }}
            transition={{
              duration: 500 *index /7,
              repeat: Infinity,
              repeatType: "loop",
              ease : "linear"
            }}
          >
            <Image src={src} width={400} height={400} alt={`Animated image ${index + 1}`} />
          </motion.div>
        ))}
        <motion.div
            animate={{rotateZ : [0,90,180,270,360]}}
            transition={{
                duration: 200,
                repeat: Infinity,
                repeatType: "loop",
                ease : "linear"
            }}
        >
             {/* Optional: fade-in glow or overlay effect */}
                <motion.div
                    className="absolute inset-0 bg-blend-color-burn z-10"
                    animate={{ opacity: [0.4, 0.47, 0.85, 1, 0.85, 0.47, 0.5] }}
                    transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                    }}  
                />
            <Image src="/img/nebula/neb-1/s-1.png" width={400} height={400} alt="star" />

        </motion.div>
      </motion.div>
    </div>
  );
}
