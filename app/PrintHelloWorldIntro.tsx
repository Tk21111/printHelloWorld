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
    <div className="relative h-[1000px] mt-56" ref={containRef}>
      <div className="flex flex-col h-screen w-full place-items-center justify-center mt-5">
        <div className="flex flex-row h-[270px] w-full place-items-center justify-center p-5">
          <OptinnWithImg text="Lumina" subText="Web dev" i={1} />
          <div className="flex gap-1 p-1  pt-5  scale-75">
            {["html", "css", "js"].map((lang, index) => (
              <Card key={index} text={lang} i={index} />
            ))}
           
          </div>
        </div>
        <div className="flex flex-row h-[270px] w-full place-items-center justify-center p-5">
        <div className="flex gap-1 p-1  pt-5  scale-75">
        {["Roblox", "Unity", "3D modeling"].map((lang, index) => (
              <Card key={index} text={lang} i={index} />
            ))}
          </div>
          <OptinnWithImg text="Ethereal" subText="Game" i={2} />

        </div>
        <div className="flex flex-row h-[270px] w-full place-items-center justify-center p-5">
          <OptinnWithImg text="Solis" subText="Ai" i={3} />
          <div className="flex gap-1 p-1  pt-5  scale-75">
          {["html", "css", "js"].map((lang, index) => (
              <Card key={index} text={lang} i={index} />
            ))}
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
  className="rounded-full scale-75"
    >
        <motion.div 
            className={`relative  rounded-full ${isFocus ? "scale-125" : "scale-100"}`}
            initial={{ scale: 0.9 }}
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
            src="/img/tyryu2.png"
            alt="img"
            width={400}
            height={200}
            className="object-left-bottom rounded-full"

        />
        <div className="absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl z-10 font-zenspace text-center">
            <p>{text}</p>
            <p>{subText}</p>
        </div>
        </motion.div>
    </motion.div>
    
  );
};

const Card = ({text , i} : {text:string , i : number})=> {
  return (
    <motion.div 
      className="relative border-2 rounded-lg p-5 m-5 h-[82%] w-[60%] text-center"
      initial={{ scale: 0.7 ,y : 20}}
      whileInView={{ scale: 1 , y:0 }}
      transition={{
        duration: 1,
        ease: easeInOut,
        delay: 0.1 * i, // optional per-item delay
        type: "spring",
      }}
      >
      <Image
        src="/img/tyryu1.png"
        alt="img"
        width={200}
        height={200}
        className="object-contain rounded-full  "

      />
      <p>{text.toUpperCase()}</p>
    </motion.div>
  )
}

export {Card}