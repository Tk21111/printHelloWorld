"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
  easeInOut,
} from "framer-motion";
import Image from "next/image";

export default function PrintHelloWorldIntro() {
  const containRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containRef,
    offset: ["start end", "end start"],
  });

  const baseY = useMotionValue(0);

  useEffect(() => {
    const controls = animate(baseY, -200, {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });

    return () => controls.stop();
  }, [baseY]);

  const scrollBoost = useTransform(scrollYProgress, [0, 0.2], [0, -300]);

  const combinedY = useTransform(
    [baseY, scrollBoost],
    ([base, boost]: number[]) => base + boost
  );

  return (
    <div className="relative h-[2000px]" ref={containRef}>
      <div className="grid grid-cols-3 h-screen w-full place-items-center mt-5">
        <div className="h-full w-full place-items-center">
          <OptinnWithImg text="Lumina" subText="Web dev" i={1} />
          <div className="grid grid-cols-2 gap-2 p-4 place-self-center place-items-center pt-5">
            <Card text="html"/>
            <Card text="css"/>
            <Card text="js"/>
          </div>
        </div>
        <div className="h-full w-full place-items-center">
          <OptinnWithImg text="Etherea" subText="Game" i={2} />
          <div className="grid grid-cols-2 gap-2 p-4 place-self-center place-items-center pt-5">
            <Card text="Roblox"/>
            <Card text="Unity"/>
            <Card text="3D modeling"/>
          </div>
        </div>
        <div className="h-full w-full place-items-center">
          <OptinnWithImg text="Solis" subText="Ai" i={3} />
          <div className="grid grid-cols-2 gap-2 p-4 place-self-center place-items-center pt-5">
            <Card text="html"/>
            <Card text="css"/>
            <Card text="js"/>
          </div>
        </div>

      </div>

      
    </div>
  );
}

const OptinnWithImg = ({ text , subText ,i}: { text: string , subText : string ,i : number}) => {

    const [isFocus , setIsFocus] = useState<boolean>(false)
  return (
    <motion.div
        initial={{ boxShadow:  '0 0 10px 2px white' }}
  animate={{ 
    boxShadow: [
      
      '0 0 20px 5px white',
      '0 0 10px 2px white',
     
    ]
  }}
  transition={{
    duration: 1,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'reverse',
    delay: 2 * i // optional per-item delay
  }}
  className="rounded-full"
    >
        <motion.div 
            className={`relative  rounded-full ${isFocus ? "scale-125" : "scale-100"}`}
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            
            transition={{
                duration: 1,
                ease: easeInOut,
        
            }}
            onHoverStart={() => setIsFocus(true)}
            onHoverEnd={() => setIsFocus(false)}
            >
            <motion.div 
                className={`absolute bg-black h-full w-full rounded-full ${isFocus ? "opacity-40" : "opacity-0"} transition-all duration-100 ease-in-out`}
            />

        <Image
            src="/img/tyryu.png"
            alt="img"
            width={500}
            height={500}
            className="object-contain rounded-full  "

        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl z-10 font-zenspace text-center">
            <p>{text}</p>
            <p>{subText}</p>
        </div>
        </motion.div>
    </motion.div>
    
  );
};

const Card = ({text} : {text:string})=> {
  return (
    <div 
      className="relative border-2 rounded-lg p-5 m-5 h-[100%] w-[60%] text-center"
      >
      <Image
        src="/img/tyryu1.png"
        alt="img"
        width={500}
        height={500}
        className="object-contain rounded-full  "

      />
      <p>{text}</p>
    </div>
  )
}