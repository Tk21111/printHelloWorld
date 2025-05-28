"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HandPage() {
  return (
    <div
      style={{
        backgroundImage : "url(https://media.discordapp.net/attachments/909307211862396929/1377195824777400360/f32ae98c68234d02.png?ex=6838150f&is=6836c38f&hm=b492042528939fc9fa063c804ce86c8def09af712bb39cd56ee1233b20f3e428&=&format=webp&quality=lossless&width=1423&height=800)",
        backgroundRepeat : "repeat-y",
        backgroundSize : "contain" ,
        backgroundPosition : "center"
      }}
    >
      <Hero/>
      <Card />
      <div className="h-[1000px] bg-gradient-to-b from-gray-500 to-gray-300" />
      <MemberParent />
    </div>
  );
}

const Hero = ()=>{
  return (
    <div className="h-[1000px] relative">
  <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <motion.div className="absolute inset-1/2 left-1/4 h-[200px] w-[200px]">
      <Image
        src="/img/logo/Print.webp"
        fill
        style={{
          objectFit: "contain",
        }}
        alt="print"
      />
      <motion.div className="absolute left-[90%] h-[120px] w-[120px] top-1/4">
        <Image
          src="/img/logo/moon.webp"
          fill
          style={{
            objectFit: "contain",
          }}
          alt="print"
        />
    </motion.div>
    </motion.div>
    

  </div>
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
  const scale = useTransform(scrollYProgress , [0, 0.4, 0.6, 0.8, 1], [1.1,1.0,1.0,0.9,0.7]);

  //hand
  const handY = useTransform(scrollYProgress, [0, 0.5, 0.6], [0, -50, -100]);
  const opacityHand = useTransform(scrollYProgress, [0,0.5,0.6], [1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[2000px]"
    >
      <motion.div
        className="sticky top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5"
        style={{
          y: containerY
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
          className="absolute  top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-fit  bg-gradient-to-br text-white shadow-xl rounded-lg"
          style={{ 
            x: leftCardX,
            boxShadow : '0 0 10px 2px white',
            scale : scale
          }}
          initial={{
            scale : 0.7
          }}
          animate={{
            scale : [0.8,1]
          }}
          transition={{
            duration : 1,
            ease : 'easeInOut'
          }}
        >
          <Image 
            src="/img/card/web.webp"
            width={250}
            height={250}
            alt="img"
          />
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 min-h-[324px] min-w-[232px] ] max-w-[1160px] max-h-[1620]  text-white shadow-xl rounded-lg"
          style={{ 
            x: rightCardX,
            boxShadow : '0 0 10px 2px white',
            scale : scale
          }}
          initial={{
            scale : 0.7
          }}
          animate={{
            scale : [0.8,1]
          }}
          transition={{
            duration : 1,
            ease : 'easeInOut'
          }}
        >
          <Image 
            src="/img/card/game.webp"
            
            width={250}
            height={250}  
            alt="img"
          />
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
    <div className="flex h-[500px] w-full bg-gray-900">
      <motion.div className="w-[25%]  relative ">
        <motion.div>
          <Image src="/img/card/web.webp" width={200} height={200} alt="img logo" />
        </motion.div>
        
      </motion.div>
      <div className="flex-1 relative overflow-hidden">
         <MemberCard  img="/img/profile/jazer_final.jpg" posX={5} posY={1}/>
         <MemberCard  img="/img/profile/jazer_final.jpg" posX={35} posY={3}/>
      </div>
    </div>
  )
};

const MemberCard = ({  img, posX, posY }: { img: string; posX: number; posY: number }) => {
  const [animationSequence, setAnimationSequence] = useState<string[]>([]);
  
  useEffect(() => {
    let sequence = [];
    
    // Create a sequence of positions leading to the final posX
    for (let i = 0; i <= posX; i += 10) { // Fixed: i += 10 instead of i+5
      sequence.push(`${i}%`);
    }
    
    // Ensure we end exactly at posX
    if (sequence[sequence.length - 1] !== `${posX}%`) {
      sequence.push(`${posX}%`);
    }
    
    setAnimationSequence(sequence);
  }, [posX]); // Added posX as dependency

  return (
    <motion.div
      className="absolute w-[200px] h-[300px] bg-white rounded-lg shadow-xl overflow-hidden"
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
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 2, // Longer duration for the sequence
        delay: (10 - setAnimationSequence.length) * 0.1   , // Delay based on the number of steps in the sequence
        ease: "linear"
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
    <div className="relative w-full h-full overflow-hidden">
      <Image 
        src={img}
        fill
        style={{ objectFit: 'cover' }}
        alt={`profile picture`}
        sizes="180px"
      />
    </div>
      
    </motion.div>
  );
}
