"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import {  useEffect, useRef, useState } from "react";

import { fadeVariants } from "../comp/fadingStyle";
// import MeetTheTeam from "../meetTheTeam";
import ReactLenis from "lenis/react";

// Add necessary imports at the top
import { forwardRef } from 'react';
import { MotionValue } from 'framer-motion';


export default function Intro() {

  const [  , setShowPrompt] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      const isMobile = window.innerWidth < 1024;
      
      setShowPrompt(isPortrait && isMobile);
    };

    // Initial check
    checkOrientation();

    // Listen for orientation and resize changes
    window.addEventListener('orientationchange', () => {
      setTimeout(checkOrientation, 100);
    });
    window.addEventListener('resize', checkOrientation);

    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Scroll-based animations
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  const opacityHero = useTransform(scrollYProgress, [0.1, 0.3], [0, 0.7]);
  const XHero = useTransform(scrollYProgress , [0.1,0.8] , ["0deg","35deg"])
  const ZHero = useTransform(scrollYProgress , [0.1,0.8] , ["0deg","45deg"])
  const scale = useTransform(scrollYProgress, [0.15, 1], [1, 0.5]);
  
  // Background position animation - moves with scroll
  // Parallax speeds: slow = 20%, medium = 50%, fast = 80%
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // Slow parallax


  
  return (
    <div className="h-[470vh] w-full relative">
      {/* Fixed Background */}
      <motion.div
        className="fixed bg-gradient-to-t from-blue-950 to-blue-800 h-screen w-full top-0 left-0 z-0"
        style={{
          backgroundImage: "url(/img/bg/bg.webp)",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: backgroundY,
        }}
      />

      {/* Scrolling Content - Above Background */}
      <div className="relative z-10">
        <ReactLenis
          root
          options={{
            lerp: 0.05,
          }}
        >
          
          {/* Scrolling Content */}
          <ScrollingContent 
            ref={ref}
            scale={scale}
            opacity={opacity}
            opacityHero={opacityHero}
            XHero={XHero}
            ZHero={ZHero}
            scrollY={scrollYProgress}
          />
          {/* Member Sections */}
          <div 
            className="absolute top-[45%] w-full aspect-[16/9] z-30 bg-gray-800 h-fit"
            style={{
              background: `radial-gradient(
                      ellipse at center,
                      rgba(0, 0, 0, 0) 40%,
                      rgba(0, 0, 0, 0.8) 100%
                    )`,            
            }}
            >
            <TwoPath />
          </div>
          
          <div 
            className="h-fit w-full flex flex-col space-y-[15%] absolute top-[63%] z-20"
            
            >
            <MeetTheTeam/>
            <MemberSections />
            
          </div>

     
          <footer className="absolute flex-row w-full h-[2%] p-5 text-sm justify-end bottom-[-2.8%]">
            <Contract/>
            <p>{"@ design and build by [[ Print('Hello World') ]]"}</p>
            <p>under construction</p>
          </footer>
          
        </ReactLenis>
      </div>
    </div>
  );
}

const ScrollingContent = forwardRef<HTMLDivElement, ScrollingContentProps>(({ scale, opacityHero , XHero ,ZHero ,scrollY}, ref) => (
  <div className="align-middle">
    <motion.div ref={ref} className="relative h-[450vh] w-full">
      {/* Hero Section */}
      <motion.div 
        className="sticky h-screen w-full z-20 top-0"
        style={{ 
          scale ,
          transformStyle : "preserve-3d",
          rotateZ : ZHero,
          rotateX : XHero,
          perspective: 1000, // Add perspective for 3D effect
        }}
      >
        <DarkOverlay opacity={opacityHero} />
        <Hero scrollY={scrollY} />
      </motion.div>
     

      {/* Card Section
      <motion.div 
        className="absolute w-full aspect-[9/10] scale-90 z-30 bg-black/80"
        style={{ opacity }}
      >
        <Hand />
        <DarkOverlay opacity={opacityHero} />
      </motion.div> */}
      
    </motion.div>
    
  </div>
));
// Separated Components



interface ScrollingContentProps {
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  opacityHero: MotionValue<number>;
  XHero: MotionValue<string>;
  ZHero : MotionValue<string>;
  scrollY : MotionValue<number>;

}


const DarkOverlay = ({ opacity }: { opacity: MotionValue<number> }) => (
  <motion.div 
    className="absolute inset-0 rounded-lg pointer-events-non"
    style={{
      opacity,
      background: `radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0) 40%,
        rgba(0, 0, 0, 0.8) 100%
      )`,
      boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.7)",
      transition: 'opacity 0.7s ease-in-out',
    }}
  />
);

const MemberSections = () => (
  <div className="flex flex-col h-full w-full space-y-[10%]" >

      
      <div className="flex flex-col w-full aspect-[16/7]">
        <MemberParent />
        <MemberParentG />
      </div>
  </div>
);

ScrollingContent.displayName = 'ScrollingContent';

import DownArr from "../comp/img/bg/down_arr.webp" 

const Hero = ({ scrollY }: {scrollY : MotionValue<number>}) => {

  // Y position moves slightly upward as the user scrolls
  // const posY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const tranformZ = useTransform(scrollY , [0,1] ,[0,500])
  const opacitySlo = useTransform(scrollY , [0.1,1],[0,1])

  return (
    <div className=" aspect-[calc(4*3+1)/7] w-full relative">
      <motion.div
        className="h-full w-full "
        style={{
          transformStyle : "preserve-3d",
          perspective : 200
        }}
      >
        <motion.div
          className="h-full w-full"
          style={{
            z:tranformZ
          }}
        >
          <Logo scrollY={scrollY}/>
        
        </motion.div>
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl" style={{ opacity : opacitySlo}}>
          <p>learn by doing not imagination</p>
        </motion.div>
        
        <NavBarTop />
       
        <motion.div
          className="w-[15%] aspect-square absolute top-[130%] left-[40%] -translate-x-1/2"
          animate={{
            y: [0, -10, 0], // move up 10px and back
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-[100%] aspect-square absolute top-[60%] left-1/2">
          <Image
            src={DownArr}
            alt="a"
            fill
            className="object-contain"
          />
        </div>
          <div className="w-[100%] aspect-square absolute top-[90%] left-1/2">
          <Image
            src={DownArr}
            alt="a"
            fill
            className="object-contain"
          />
        </div>
        </motion.div>
        
      </motion.div>
      

    </div>
  );
};





// Updated Member type - removed posX/posY since we're using grid
type Member = {
  position: number;
  name: string;
  surname: string;
  nickname: string;
  code: string[];
  tool: string[];
  teach: string;
  img: string;
};

import members from "../comp/data.json"

// const Hand = () => {
//   const scrollRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start center", "end center"],
//   });

//   // Card movement animations
//   const leftCardX = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], ["100%", "-20%", "-40%", "-25%", "40%"]);
//   const rightCardX = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], ["-100%", "20%", "40%", "25%", "-40%"]);

//   // Container and scale animations
//   const containerY = useTransform(scrollYProgress, [0.1, 1], [0, 200]);
//   const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], [0.5, 0.7, 1, 1.05, 1.1]);

//   // Hand animations (now actually used)
//   const handY = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, -50, -120]);
//   const handOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 0.8, 0]);
//   const handScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1.1, 0.9]);

//   // More subtle card rotation based on scroll
//   const leftCardRotateY = useTransform(scrollYProgress, [0, 1], [0, 15]);
//   const rightCardRotateY = useTransform(scrollYProgress, [0, 1], [0, -15]);

//   // Separate opacity animations for initial fade-in
//   const leftCardOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
//   const rightCardOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div ref={scrollRef} className="relative h-full w-full" style={{
//           backgroundImage: "url(/img/bg/light.webp)",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "auto",
//           backgroundPosition: "top",
         
//         }}>
//       <motion.div className="relative h-full w-full">
//         {/* Tech Stack Labels */}
//         <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg  w-full">
//           <TechStackLabels webTech={webTech} gameTech={gameTech} />
//         </div>

//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
//           <Shimp posX="58%" posY="15%" />
//           <Hex rotate="10deg" />
//           <Hex rotate="45deg" posX="20%" posY="10%" />
//           <Shimp rotate="15deg" posX="30%" posY="25%" />
       

//         </div>

        

//         {/* Scroll-Affected Container */}
//         <motion.div
//           className="sticky top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[40%]"
//           style={{ y: containerY }}
//         >

//           {/* Background Hand Image - Now with animations */}
//           <motion.div 
//             className="absolute top-1/2 w-[20%] aspect-[10/5] right-[18%] -translate-x-1/2 -translate-y-1/2"
//             style={{ 
//               y: handY, 
//               opacity : handOpacity,
//               scale: handScale
//             }}
//           >
//             <Image src="/img/bg/hand.webp" fill alt="scroll" />
//           </motion.div>

//           <motion.div 
//             className="absolute top-1/2 w-[20%] aspect-[10/5] left-[18%] -translate-x-1/2 -translate-y-1/2 "
//             style={{ 
//               y: handY, 
//               opacity : handOpacity,
//               scale: handScale
//             }}
//           >
//             <Image src="/img/bg/hand.webp" fill alt="scroll" className="scale-x-[-1]" />
//           </motion.div>
          
//           {/* Left Card - Fixed animations */}
//           <motion.div
//             className="absolute top-0 left-[24.5%] -translate-x-1/2 -translate-y-1/2 w-[15%] text-white shadow-xl rounded-lg"
//             style={{ 
//               x: leftCardX, 
//               scale,
//               opacity: leftCardOpacity,
//               rotateY: leftCardRotateY,
//               transformStyle: "preserve-3d" 
//             }}
//             whileHover={{ 
//               scale: 1.05,
//               rotateY: 10,
//               transition: { duration: 0.3 }
//             }}
//           >
//             <div 
//               style={{ boxShadow: "0 0 10px 2px white" }} 
//               className="w-full aspect-[12/16] rounded-lg overflow-hidden"
//             >
//               <Image src="/img/card/web.webp" fill alt="Web Development" />
//             </div>
//           </motion.div>

//           {/* Right Card - Fixed animations */}
//           <motion.div
//             className="absolute top-0  right-[24.5%] -translate-x-1/2 -translate-y-1/2 w-[15%] text-white shadow-xl rounded-lg"
//             style={{ 
//               x: rightCardX, 
//               scale,
//               opacity: rightCardOpacity,
//               rotateY: rightCardRotateY,
//               transformStyle: "preserve-3d" 
//             }}
//             whileHover={{ 
//               scale: 1.05,
//               rotateY: -10,
//               transition: { duration: 0.3 }
//             }}
//           >
//             <div 
//               style={{ boxShadow: "0 0 10px 2px white" }} 
//               className="w-full aspect-[12/16] rounded-lg overflow-hidden"
//             >
//               <Image src="/img/card/game.webp" fill alt="Game Development" />
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };
import WebLogo from "../comp/img/logo/web.webp"

const MemberParent = () => {
  // Filter members where web is true
  const webMembers = members.filter(member => member.teach === "Web");
  
  return (
    <div className="flex flex-col h-fit ">
        <div className="relative w-[90%] aspect-[10/3] left-1/2 -translate-x-1/2">
          <Image 
            src={WebLogo}
            alt="game"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-row flex-wrap gap-4 p-5 m-5 justify-center">
          {webMembers.map((member, i) => (
            <MemberCard
              key={i}
              index={i}
              img={member.img}
              name={member.name}
              surname={member.surname}
              nickname={member.nickname}
              position={member.position}
              teach={member.teach}
              code={member.code}
              tool={member.tool}
            />
          ))}
        </div>
      </div>
  );
};
import GameLogo from "../comp/img/logo/game.webp"
const MemberParentG = () => {
  // Filter members where web is false
  const nonWebMembers = members.filter(member => member.teach === "Game");
  
  return (
      <div className="flex flex-col h-fit ">
        <div className="relative w-[90%] aspect-[10/3] left-1/2 -translate-x-1/2">
            <Image 
              src={GameLogo}
              alt="game"
              fill
              className="object-contain"
            />
          </div>
        <div className="flex flex-row flex-wrap gap-4 p-5 m-5 justify-center">
          {nonWebMembers.map((member, i) => (
            <MemberCard
              key={i}
              index={i}
              img={member.img}
              name={member.name}
              surname={member.surname}
              nickname={member.nickname}
              position={member.position}
              teach={member.teach}
              code={member.code}
              tool={member.tool}
            />
          ))}
        </div>
      </div>
      
  );
};

import GameMem from "./../comp/img/profile/game.webp"
import WebMem from "./../comp/img/profile/web.webp"

const MemberCard = ({
  index,
  img,
  nickname,
  teach,
  code,
  tool,
  position
}: Member & { index: number }) => {
  const [isFlipped, setIsFlipped] = useState(true);

  return (
    <motion.div
      className="w-[46%] aspect-[9/13] rounded-lg"
      style={{ perspective: '1200px' }}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      onViewportEnter={() => setIsFlipped(false)}
      onViewportLeave={()=> setIsFlipped(true)}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      role="button"
      tabIndex={0}
      aria-label={`Member card for ${nickname}`}
    >
      <motion.div
        className="relative w-full h-full rounded-lg"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute w-full h-full rounded-lg overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.4))",
          }}
        >
          {/* Background Image */}
          <Image
            src={teach === "Web" ? WebMem : GameMem}
            alt="background"
            fill
            className="object-cover rounded-lg"
          />
          
          {/* Content overlay */}
          <div className="relative z-10 w-full h-full">
            <div className="aspect-[9/15] h-[50%] absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_5px_30px_rgba(0,0,0,0.1)]">
              <Image
                src={img}
                alt={`${nickname} profile`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_5px_30px_rgba(0,0,0,0.1)] text-xs md:text-sm lg:text-base">
              <p className="text-white font-semibold text-center drop-shadow-lg">{nickname}</p>
              <p className="text-white text-center text-xs md:text-sm drop-shadow-lg">
                {code.slice(0, 3)}
              </p>
              <p className="text-white text-center text-xs md:text-sm drop-shadow-lg">
                {code.slice(3, 6)}
              </p>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute w-full h-full rounded-lg bg-white flex flex-col items-center justify-center text-center px-4 overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: "rotateY(180deg)" 
          }}
        >
          

          <p className="text-white text-xs mt-2 z-20">ID: {position}</p>
          <p className="text-white text-xs mt-2 z-20">Tool: {tool.toString()}</p>
          <Image
            src={teach === "Web" ? WebMem : GameMem}
            alt="background"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
// type ShimpProps = {
//   rotate?: string;
//   posX?: string;
//   posY?: string;
// };

// const Shimp = ({ rotate = '0deg', posX = '50%', posY = '50%' }: ShimpProps) => {
//   return (
//     <div
//       className="absolute w-[30%] aspect-square -translate-x-1/2 -translate-y-1/2"
//       style={{
//         left: posX,
//         top: posY,
//         rotate,
//       }}
//     >
//       <div className="absolute w-[17%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <Image src="/img/bg/shimp.webp" className="object-contain" alt="shimp" fill />
//       </div>
//       <div className="absolute w-[35%] aspect-square top-[51%] left-[50.5%] -translate-x-1/2 -translate-y-1/2">
//         <Image src="/img/bg/shimp-border.webp" className="object-contain" alt="shimp" fill />
//       </div>
//       <div className="absolute w-[50%] aspect-square top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <Image src="/img/bg/shimp-eff.webp" className="object-contain" alt="shimp" fill />
//       </div>
//     </div>
//   );
// };

// type HexProps = {
//   rotate: string;
//   posX?: string;
//   posY?: string;
// };

// const Hex = ({ rotate = "0deg", posX = '88%', posY = '50%' }: HexProps) => {
//   return (
//     <div
//       className="absolute w-[40%] aspect-square -translate-x-1/2 -translate-y-1/2"
//       style={{
//         left: posX,
//         top: posY,
//       }}
//     >
//       <div style={{ rotate }}>
//         <div className="absolute w-[25%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//           <Image src="/img/bg/hex.webp" className="object-contain" alt="hex" fill />
//         </div>
//         {['', '-1', '-2'].map((suffix) => (
//           <div
//             key={suffix}
//             className="absolute w-[30%] aspect-square top-1/2 left-[50.5%] -translate-x-1/2 -translate-y-1/2"
//           >
//             <Image
//               src={`/img/bg/hex-border${suffix}.webp`}
//               className="object-contain"
//               alt="hex"
//               fill
//             />
//           </div>
//         ))}
//         <div className="absolute w-[50%] aspect-square top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2">
//           <Image src="/img/bg/hex-eff.webp" className="object-contain" alt="hex" fill />
//         </div>
//       </div>
//     </div>
//   );
// };
import Dot from "../comp/img/logo/dot.webp"
import Print from "../comp/img/logo/Print.webp"
import Moon from "../comp/img/logo/moon.webp"
import Hell from "../comp/img/logo/Hell.webp"
import World from "../comp/img/logo/world.webp"
import w from "../comp/img/logo/w.webp"
import r from "../comp/img/logo/r.webp"
import l from "../comp/img/logo/l.webp"
import d from "../comp/img/logo/d.webp"

import DownParent from "../comp/img/logo/down_parent.webp"

const Logo = ({scrollY} : {scrollY : MotionValue<number>})=> {
  
  const worldRotate = useTransform(scrollY , [0,1] ,["0deg","360deg"])
  return (
    <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-[16/9] scale-[80%] max-w-6xl px-4">
         <motion.div 
          variants={fadeVariants["elegant"]}
          initial="hidden"
          animate="visible"
          className="h-full w-full"
    >
      <div className="absolute top-[51%] left-[-0.5%]  w-[4%] aspect-square -translate-x-1/2 -translate-y-1/2">
          <Image
            src={Dot}
            fill
            style={{
              objectFit: "contain",
            }}
            alt="dot"
          />
        </div>
        <div className="absolute w-3/6 top-[34%] left-[15%]  aspect-[12/5] -translate-x-1/2 -translate-y-1/2">
          <Image
            src={Print}
            fill
            style={{
              objectFit: "contain",
            }}
            alt="print"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-[38.5%] left-[37%] w-1/6 aspect-square -translate-x-1/2 -translate-y-1/2">
            <Image
              src={Moon}
              fill
              style={{
                objectFit: "contain",
              }}
              alt="moon"
            />
          </div>
          <div className="absolute top-[44.5%] left-[55%] w-[24%] aspect-square -translate-x-1/2 -translate-y-1/2">
            <Image
              src={Hell}
              fill
              style={{
                objectFit: "contain",
              }}
              alt="Hell"
            />
          </div>
          <div className="absolute top-[53%] left-[73.5%] w-1/6 aspect-square -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                className="h-full w-full"
                style={{
                  rotate : worldRotate
                }}
                transition={{
                  duration : 10,
                  ease : "linear",
                  repeat : Infinity,
                  repeatType : "loop"
                }}
              >
                <Image
                src={World}
                fill
                style={{
                  objectFit: "contain",
                }}
                alt="world"
              />
              </motion.div>
          </div>
           <div className="absolute top-[53%] left-[60%] w-[12%] aspect-square -translate-x-1/2">
            <div
              className="h-full w-full"
            >
              <Image
                src={w}
                fill
                style={{
                  objectFit: "contain",
                }}
                alt="w"
              />
            </div>
          </div>
          <div className="absolute top-[57%] left-[83.5%] w-[9%] aspect-square -translate-x-1/2 ">
            <Image
              src={r}
              fill
              style={{
                objectFit: "contain",
              }}
              alt="r"
            />
          </div>
          <div className="absolute top-[50%] left-[87.5%] w-[12.5%] aspect-square -translate-x-1/2 ">
            <Image
              src={l}
              fill
              style={{
                objectFit: "contain",
              }}
              alt="l"
            />
          </div>
          <div className="absolute top-[49%] left-[93.5%] w-[12.5%] aspect-square -translate-x-1/2 ">
            <Image
              src={d}
              fill
              style={{
                objectFit: "contain",
              }}
              alt="d"
            />
          </div>
          <div className="absolute top-[60%] left-[103%] w-1/6 aspect-square -translate-x-1/2 -translate-y-1/2 scale-x-[-1]">
            <Image
              src={Moon}
              fill
              style={{
                objectFit: "contain",
              }}
              alt="moon"
            />
          </div>
          <div className="absolute top-[73%] left-[110%]  w-[4%] aspect-square -translate-x-1/2 -translate-y-1/2">
          <Image
            src={Dot}
            fill
            style={{
              objectFit: "contain",
            }}
            alt="dot"
          />
        </div>
        <div className="absolute top-[130%] left-[56%]  w-[70%] aspect-[16/9] -translate-x-1/2 -translate-y-1/2">
          <Image
            src={DownParent}
            fill
            style={{
              objectFit: "contain",
            }}
            alt="dot"
          />
        </div>
      </motion.div>
    </div>
   
  )
}


import NavBarTopImg from "../comp/img/front_page/nav.webp"
const NavBarTop = () => {
  return (

      <motion.div className="absolute top-[9%] left-[52%] w-[40%] aspect-square -translate-x-1/2 -translate-y-1/2">
        <Image
          src={NavBarTopImg}
          fill
          style={{
            objectFit: "contain",
          }}
          alt="nav"
        />
      </motion.div>

  )
}
import MeetTheTeamIMG from "../comp/img/logo/meet_the_team.webp"
import MeetTheTeamImgCover from "../comp/img/profile/cover.webp"

const MeetTheTeam = () => {

  return (
    <div className="absolute w-full h-[1%] top-[0%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="absolute w-[52%] aspect-[16/9] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={MeetTheTeamIMG}
          fill
          className="object-contain"
          alt="meet_the_team"
        />
      </div>
      <div className="absolute w-[70%] aspect-[16/7] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={MeetTheTeamImgCover}
          fill
          className="object-contain"
          alt="meet_the_team"
        />
      </div>
    </div>
  )
}

// const WhatWeTeach = () => {

//   return (
//     <div className="absolute w-[70%] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//       <div className="absolute w-[9%] aspect-sqaure top-1/2 left-[42%] -translate-y-1/2 ">
//         <p className="text-[100%]">WHAT WE TEACH</p>
//       </div>
//       <div className="absolute w-[32%] aspect-[16/7] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <Image
//           src="/img/profile/cover.webp"
//           fill
//           className="object-contain"
//           alt="meet_the_team"
//         />
//       </div>
//     </div>
//   )
// }

import Js from "../comp/img/techstack/js.webp"
import Css from "../comp/img/techstack/css.webp"
import Html from "../comp/img/techstack/html.webp"
import Java from "../comp/img/techstack/java.webp"
const TechStackParent = () => {
  return (
    <div className=" h-[25vh]  space-y-[-10%] border-4 border-white pt-[5%] rounded-lg bg-gradient-to-tr from-teal-500 via-blue-600 to-teal-600">
      <div className="flex flex-col">
        <p className="text-center text-sm">Want to build website learn how client side , server side work</p>
        <p className="text-center text-sm">Fronend : HTML CSS JAVASCIRPT</p>
        <p className="text-center text-sm">Backend : JAVA Springboot</p>
      </div>
      <div className="flex flex-row w-full h-fit items-center justify-center px-[1%] ">
        <TechStackCard tSImg={Html}  />
        <TechStackCard tSImg={Css}  />
        <TechStackCard tSImg={Js}  />
        <TechStackCard tSImg={Java} />
      </div>
    </div>
  );
};

import Roblox from "../comp/img/techstack/roblox.webp"
import Unity from "../comp/img/techstack/unity.webp"
import Lua from "../comp/img/techstack/lua.webp"
import Csharp from "../comp/img/techstack/csharp.webp"
import Blender from "../comp/img/techstack/blender.webp"
const TechStackParentG = () => {
  return (
    <div className="h-[25vh] space-y-[-10%] border-4 border-white pt-[5%] rounded-lg bg-gradient-to-tr from-blue-500 via-purple-600 to-blue-600">
        <div className="flex flex-col">
          <p className="text-center text-sm">Want to game learn how to implyment 3d world space , game mechanic work</p>
          <p className="text-center text-sm">Engine : Unity , Roblox studio</p>
          <p className="text-center text-sm">Language : C# , Lua</p>
          <p className="text-center text-sm">Modeling : Blender 3d</p>
        </div>      
      <div className="flex flex-row w-full h-fit items-center justify-center px-[1%] ">
        <TechStackCard tSImg={Roblox}  />
        <TechStackCard tSImg={Unity}  />
        <TechStackCard tSImg={Lua}  />
        <TechStackCard tSImg={Csharp}  />
        <TechStackCard tSImg={Blender}  />
      </div>
    </div>
  );
};

const TechStackCard = ({

  tSImg,
}: {
  tSImg: StaticImageData;
 
}) => {


  return (
    <motion.div
      className="relative w-[100%] aspect-[3/5] bg-center bg-no-repeat bg-contain"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { type: "spring", duration: 2 },
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-[100%] aspect-[16/9]">
          <Image
            src={tSImg}
            fill
            className="object-contain"
            alt="stack logo"
          />
        </div>
      </div>
    </motion.div>
  );
};

// const ContratParent = () => {
//   return (
//     <div className="flex flex-row m-[2%]">
//       <Contract />
//     </div>
//   );
// };

const Contract = () => {
  return (
    <div className="flex-row">
      <a target="_blank" className="underline" href="https://www.instagram.com/print.hell0w0rld/">instagram</a>
    </div>
  );
};

const TwoPath = () => {
  // Only use scrollY for opacity

  return (
    <>
     
      <p className="absolute text-xl left-1/2 -translate-x-1/2 top-[10%]">TWO PATH</p>


      {/* TwoCardSide appears based on scroll */}
      {/* <motion.div
        className="absolute top-[5%] left-1/2 -translate-x-1/2 z-20 h-[50vh] w-[110%]"
        style={{ opacity }}
      >
        <TwoCardSide />
      </motion.div> */}

      {/* Tech Stack Cards */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-full">
        <div className="flex flex-col h-fit w-full p-[1%]  justify-center">
          {/* Web Card */}
          <motion.div
            className="w-[100%]"
            initial={{ rotateX: 45, rotateY: 25, opacity: 0 }}
            whileInView={{ rotateX: 5, rotateY: 5, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            <TechStackParent />
          </motion.div>

          {/* Game Card */}
          <motion.div
            className="w-[100%] mt-[1%]"
            initial={{ rotateX: 40, rotateY: 20, opacity: 0 }}
            whileInView={{ rotateX: 3, rotateY: 3, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            <TechStackParentG />
          </motion.div>
        </div>
      </div>
    </>
  );
};

