"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {  useRef } from "react";

import { fadeVariants } from "./comp/fadingStyle";
// import MeetTheTeam from "../meetTheTeam";
import ReactLenis from "lenis/react";

// Add necessary imports at the top
import { forwardRef } from 'react';
import { MotionValue } from 'framer-motion';

// Tech stack data
const webTech = ["HTML", "CSS", "JS", "JAVA"];
const gameTech = ["ROBLOX", "UNITY", "BLENDER"];

export default function HandPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Scroll-based animations
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const opacityHero = useTransform(scrollYProgress, [0.1, 0.3], [0, 0.7]);
  const scale = useTransform(scrollYProgress, [0.15, 1], [1, 0.7]);

  return (
    <div className="h-full w-full">
      {/* Main Container */}
      <div
        className="relative bg-gradient-to-t from-blue-950 to-blue-800 h-screen w-screen"
        style={{
          // Fixed background image URL - removed 'public' and added closing parenthesis
          backgroundImage: "url(/img/bg/bg.webp)",
          backgroundRepeat: "repeat",
          backgroundSize: "inherit",
          backgroundPosition: "center",
         
        }}
      >
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
          />

          {/* Member Sections */}
          <MemberSections />
        </ReactLenis>
      </div>
    </div>
  );
}
// Separated Components

const TechStackLabels = ({ webTech, gameTech }: { webTech: string[], gameTech: string[] }) => (
  <div 
    className="absolute w-full h-full"
    
    >
    <motion.div
      initial={{
            opacity : 0,
            scale : 0.6
          }}
      whileInView={{
        opacity : 1,
        scale : 1
      }}
      transition={{
        duration : 0.3,
        ease : "easeOut"
      }}
    >
      <div 
        className="absolute left-[27.6%] text-center text-lg mt-5 flex flex-col place-items-center -translate-x-1/2 -translate-y-1/2 p-[5%]"
        style={{
        backgroundImage : "url(https://cdn.discordapp.com/attachments/1377199049052262471/1377263211044147300/1df011b0c5fb2d47.png?ex=6838fc91&is=6837ab11&hm=204c68f3c6a8111cddfb0be1f8ac9fb6665303caa466dba0084d0e97841151b1&)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
        >
        <div className="flex flex-row space-x-2">
          {webTech.slice(0, 3).map((tech, i) => (
            <p key={i}>{tech}{i < 2 ? ',' : ''}</p>
          ))}
        </div>
        <p>{webTech[3]}</p>
      </div>
    </motion.div>

    <motion.div
      initial={{
            opacity : 0,
            scale : 0.6
          }}
      whileInView={{
        opacity : 1,
        scale : 1
      }}
      transition={{
        duration : 0.3,
        ease : "easeOut"
      }}
    >
      <div 
        className="absolute left-[72%] text-center text-lg mt-5 flex flex-col place-items-center -translate-x-1/2 -translate-y-1/2 p-[5%]"
        style={{
        backgroundImage : "url(https://cdn.discordapp.com/attachments/1377199049052262471/1377263211044147300/1df011b0c5fb2d47.png?ex=6838fc91&is=6837ab11&hm=204c68f3c6a8111cddfb0be1f8ac9fb6665303caa466dba0084d0e97841151b1&)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
        >
        <div className="flex flex-row space-x-2">
          {gameTech.slice(0, 2).map((tech, i) => (
            <p key={i}>{tech}{i < 1 ? ',' : ''}</p>
          ))}
        </div>
        <p>{gameTech[2]},</p>
      </div>
    </motion.div>
    
  </div>
);

interface ScrollingContentProps {
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  opacityHero: MotionValue<number>;
}

const ScrollingContent = forwardRef<HTMLDivElement, ScrollingContentProps>(({ scale, opacity, opacityHero }, ref) => (
  <div className="align-middle">
    <motion.div ref={ref} className="relative h-[350vh] w-full">
      {/* Hero Section */}
      <motion.div 
        className="sticky h-fit w-full"
        style={{ scale }}
      >
        <DarkOverlay opacity={opacityHero} />
        <Hero />
      </motion.div>

      {/* Card Section */}
      <motion.div 
        className="absolute w-screen aspect-[9/10] scale-90"
        style={{ opacity }}
      >
         
        <Hand />
        <DarkOverlay opacity={opacityHero} />
      </motion.div>
    </motion.div>
  </div>
));

const DarkOverlay = ({ opacity }: { opacity: MotionValue<number> }) => (
  <motion.div 
    className="absolute inset-0 rounded-lg pointer-events-none"
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
  <div className="flex flex-row w-screen aspect-[9/9]">
    <MemberParent />
    <MemberParentG />
  </div>
);

ScrollingContent.displayName = 'ScrollingContent';


const Hero = () => {
  const ref = useRef(null);

  // Y position moves slightly upward as the user scrolls
  // const posY = useTransform(scrollYProgress, [0, 1], [0, 300]);



  return (
    <div ref={ref} className=" aspect-[calc(4*3+1)/7] w-screen relative">
      <motion.div
        className="h-full w-full sticky top-0"
      >
        <Logo />
        <NavBar />
        <LeftDeco />
        <NavBarTop />
        <RightDeco f={false} />
        <RightDeco f={true} />
        <CardRightDeco />
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

import members from "./comp/data.json"

const Hand = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end center"],
  });

  // Card movement animations
  const leftCardX = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.8, 1], [0, -20, -40, -60, -80]);
  const rightCardX = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.8, 1], [0, 20, 40, 60, 80]);

  // Container and scale animations
  const containerY = useTransform(scrollYProgress, [0.1, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], [0.5, 0.7, 1, 1.05, 1.1]);

  // Hand animations (now actually used)
  const handY = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, -50, -120]);
  const handOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 0.8, 0]);
  const handScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1.1, 0.9]);

  // More subtle card rotation based on scroll
  const leftCardRotateY = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rightCardRotateY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <div ref={scrollRef} className="relative h-full w-full">
      <motion.div className="relative h-full w-full">
        {/* Tech Stack Labels */}
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg z-20 w-full">
          <TechStackLabels webTech={webTech} gameTech={gameTech} />
        </div>

        

        {/* Scroll-Affected Container */}
        <motion.div
          className="sticky top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[40%]"
          style={{ y: containerY }}
        >

          {/* Background Hand Image - Now with animations */}
          <motion.div 
            className="absolute top-1/2 w-[20%] aspect-[10/5] right-[18%] -translate-x-1/2 -translate-y-1/2"
            style={{ 
              y: handY, 
              opacity : handOpacity,
              scale: handScale
            }}
          >
            <Image src="/img/bg/hand.webp" fill alt="scroll" />
          </motion.div>

          <motion.div 
            className="absolute top-1/2 w-[20%] aspect-[10/5] left-[18%] -translate-x-1/2 -translate-y-1/2 "
            style={{ 
              y: handY, 
              opacity : handOpacity,
              scale: handScale
            }}
          >
            <Image src="/img/bg/hand.webp" fill alt="scroll" className="scale-x-[-1]" />
          </motion.div>
          
          {/* Left Card - Improved animations */}
          <motion.div
            className="absolute top-0 left-[24.5%] -translate-x-1/2 -translate-y-1/2 w-[15%] text-white shadow-xl rounded-lg"
            style={{ 
              x: leftCardX, 
              scale,
              rotateY: leftCardRotateY,
              transformStyle: "preserve-3d" 
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              transition: { duration: 0.3 }
            }}
          >
            <div 
              style={{ boxShadow: "0 0 10px 2px white" }} 
              className="w-full aspect-[12/16] rounded-lg overflow-hidden"
            >
              <Image src="/img/card/web.webp" fill alt="Web Development" />
            </div>
          </motion.div>

          {/* Right Card - Improved animations */}
          <motion.div
            className="absolute top-0  right-[24.5%] -translate-x-1/2 -translate-y-1/2 w-[15%] text-white shadow-xl rounded-lg"
            style={{ 
              x: rightCardX, 
              scale,
              rotateY: rightCardRotateY,
              transformStyle: "preserve-3d" 
            }}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
            whileHover={{ 
              scale: 1.05,
              rotateY: -10,
              transition: { duration: 0.3 }
            }}
          >
            <div 
              style={{ boxShadow: "0 0 10px 2px white" }} 
              className="w-full aspect-[12/16] rounded-lg overflow-hidden"
            >
              <Image src="/img/card/game.webp" fill alt="Game Development" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const MemberParent = () => {
  // Filter members where web is true
  const webMembers = members.filter(member => member.teach === "Web");
  
  return (

      <div className="grid grid-cols-4 gap-4 h-fit p-4 w-[50%]">
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
  );
};

const MemberParentG = () => {
  // Filter members where web is false
  const nonWebMembers = members.filter(member => member.teach === "Game");
  
  return (
      <div className="grid grid-cols-4 gap-4 h-fit p-4 w-[50%]">
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
  );
};

const MemberCard = ({ 
   index,
    img,
    

    nickname,

    teach,
    code,
 
 }: Member & { index: number }) => {
  const weB = teach === "Web" 
    ? "url(https://cdn.discordapp.com/attachments/1377199049052262471/1377266406843748453/0b0733d09bd67de6.png?ex=683856cb&is=6837054b&hm=eef8125391d0f3600336defad3265f76ac7a540581bcff3f0e7090fa37ec9382&)" 
    : "url(https://cdn.discordapp.com/attachments/1377199049052262471/1377268230372069406/888ec93ae7fd0e57.png?ex=6838587e&is=683706fe&hm=bdfc4486c07bbb6dfb8554529360f1d66cf8770d6b5e66dfd11cf1188baf44c1&)";

  return (
    <motion.div
      className="w-full h-[300px] bg-white rounded-lg  overflow-hidden transform-gpu"
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1, // Stagger animation based on index
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div 
        className="relative w-full h-full overflow-hidden rounded-lg"
        style={{
          backgroundImage: weB,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.4))"
        }}  
      >
        <div className="aspect-[9/15] h-[50%] absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_5px_30px_rgba(0,0,0,0.1)]">
          <Image
            src={img}
            alt="mem"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_5px_30px_rgba(0,0,0,0.1)] ">
          <p className="text-white font-semibold text-center">{nickname}</p>
          <p className="text-white font-semibold text-center ">{code.slice(0,3).toString()}</p>
          <p className="text-white font-semibold text-center ">{code.slice(3,6).toString()}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};



const Logo = ()=> {
  
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen aspect-[16/9] scale-[49%] max-w-6xl px-4">
         <motion.div 
          variants={fadeVariants["elegant"]}
          initial="hidden"
          animate="visible"
          className="h-full w-full"
    >
      <div className="absolute top-[51%] left-[-0.5%]  w-[4%] aspect-square -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/img/logo/dot.webp"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="dot"
          />
        </div>
        <div className="absolute w-3/6 top-[34%] left-[15%]  aspect-[12/5] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/img/logo/Print.webp"
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
              src="/img/logo/moon.webp"
              fill
              style={{
                objectFit: "contain",
              }}
              alt="moon"
            />
          </div>
          <div className="absolute top-[44.5%] left-[55%] w-[24%] aspect-square -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/img/logo/Hell.webp"
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
                animate={{
                  rotate : [0,90,180,270,360]
                }}
                transition={{
                  duration : 10,
                  ease : "linear",
                  repeat : Infinity,
                  repeatType : "loop"
                }}
              >
                <Image
                src="/img/logo/world.webp"
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
              className="rotate-[15deg] h-full w-full"
            >
              <Image
                src="/img/logo/w.webp"
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
              src="/img/logo/r.webp"
              fill
              style={{
                objectFit: "contain",
              }}
              alt="r"
            />
          </div>
          <div className="absolute top-[50%] left-[87.5%] w-[12.5%] aspect-square -translate-x-1/2 ">
            <Image
              src="/img/logo/l.webp"
              fill
              style={{
                objectFit: "contain",
              }}
              alt="l"
            />
          </div>
          <div className="absolute top-[49%] left-[93.5%] w-[12.5%] aspect-square -translate-x-1/2 ">
            <Image
              src="/img/logo/d.webp"
              fill
              style={{
                objectFit: "contain",
              }}
              alt="d"
            />
          </div>
          <div className="absolute top-[60%] left-[103%] w-1/6 aspect-square -translate-x-1/2 -translate-y-1/2 scale-x-[-1]">
            <Image
              src="/img/logo/moon.webp"
              fill
              style={{
                objectFit: "contain",
              }}
              alt="moon"
            />
          </div>
          <div className="absolute top-[73%] left-[110%]  w-[4%] aspect-square -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/img/logo/dot.webp"
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

const NavBar = (/*{oritext} : { oritext : string }*/)=>{



  return (

      <motion.div className="absolute w-[25%] left-[13%] top-3/4 aspect-[12/5] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/img/front_page/place_holder.webp"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="place_holder"
            className="w-full h-full"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[100%] ">
              !! Welcome !!
          </div>
        </motion.div>

  )
}



const LeftDeco = () => {
  return (
   <div className="absolute top-[19%] left-[13%] w-[26.5%] aspect-square -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/img/front_page/left_deco.webp"
          fill
          style={{
            objectFit: "contain",
          }}
          alt="deco_l"
        /> 
      </div>
      
 
  )
}

const RightDeco = ({f} : {f : boolean}) => {
  return (
    <div className={`${f && "scale-y-[-1]"} h-[65%] `}>
      <motion.div className={`absolute ${f ? "bottom-0" : "top-0"} left-[89%]  w-[18.5%] aspect-square -translate-x-1/2 -translate-y-1/2}`}>
        <Image
          src="/img/front_page/card_col.webp"
          fill
          style={{
            objectFit: "contain",
          }}
          alt="Hell"
        />
        <motion.div className="absolute top-[47%] left-[35.7%]  w-[12%] aspect-square -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/img/front_page/card_col_1.webp"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="Hell"
          />
        </motion.div>
        <motion.div className="absolute top-[47%] left-[67.7%]  w-[12%] aspect-square -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/img/front_page/card_col_1.webp"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="Hell"
          />
        </motion.div>
        <motion.div className="absolute top-[44%] left-[52.5%]  w-[20%] aspect-square -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/img/front_page/card_col_c.webp"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="Hell"
          />
        </motion.div>
        <motion.div className="absolute top-[39%] left-[22.5%]  w-[18%] aspect-square -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/img/front_page/card_col_l.webp"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="Hell"
          />
        </motion.div>
        <motion.div className="absolute top-[39%] left-[80.5%]  w-[18%] aspect-square -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/img/front_page/card_col_r.webp"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="Hell"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

const CardRightDeco: React.FC = () => {
  return (
    <div className="absolute top-[40%] right-[0%] w-[10.5%] aspect-[9/27] -translate-x-1/2 -translate-y-1/2">
      {/* Web Card - Front Layer */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotateY: -20 }}
        animate={{ 
          opacity: 1, 
          x: 0, 
          rotateY: [0,360],
          y: [0, -8, 0]
        }}
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          x: { duration: 1.2, delay: 0.5 },
          rotateY: { 
            duration: 30, 
            delay: 0.5, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop",
          },
          y: { 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }
        }}
        whileHover={{ 
          scale: 1.05, 
          rotateY: 5
        }}
        className="relative z-20 top-[15%]"
        style={{ 
          transformStyle: "preserve-3d",
          transformOrigin: "center center"
        }}
      >
        {/* Front side */}
        <div 
          className="absolute overflow-hidden rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 h-fit w-fit"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)"
          }}
        >
          <img 
            src="/img/card/web.webp"
            alt="Web Card Front"
            width={150}
            height={100}
            className="transition-transform duration-300 hover:scale-110"
            style={{ display: "block" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10"></div>
        </div>
        
        {/* Back side */}
        <div 
          className="absolute overflow-hidden rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 h-fit w-fit"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <img 
            src="/img/card/game.webp"
            alt="Web Card Back"
            width={150}
            height={100}
            className="transition-transform duration-300 hover:scale-110"
            style={{ display: "block" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10"></div>
        </div>
      </motion.div>

      {/* Game Card - Back Layer */}
      <motion.div
        initial={{ opacity: 0, x: 30, rotateY: 15, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          x: -10, 
          rotateY: [0,-360],
          scale: 0.95,
          y: [0, 6, 0]
        }}
        transition={{
          opacity: { duration: 1.2, delay: 0.8 },
          x: { duration: 1.4, delay: 0.8 },
          rotateY: { 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop",
          },
          scale: { duration: 1.4, delay: 0.8 },
          y: { 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }
        }}
        whileHover={{ 
          opacity: 1,
          scale: 1.02, 
          rotateY: -3
        }}
        className="relative z-10 top-[65%]"
        style={{ 
          transformStyle: "preserve-3d",
          transformOrigin: "center center"
        }}
      >
        {/* Front side */}
        <div 
          className="absolute overflow-hidden rounded-lg bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 h-fit w-fit"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)"
          }}
        >
          <img 
            src="/img/card/game.webp"
            width={150}
            height={100}
            alt="Game Card Front"
            className="transition-all duration-300 hover:scale-105"
            style={{ display: "block" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10"></div>
        </div>
        
        {/* Back side */}
        <div 
          className="absolute overflow-hidden rounded-lg bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 h-fit w-fit"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <img 
            src="/img/card/web.webp"
            width={150}
            height={100}
            alt="Game Card Back"
            className="transition-all duration-300 hover:scale-105"
            style={{ display: "block" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10"></div>
        </div>
      </motion.div>
    </div>
  );
};

const NavBarTop = () => {
  return (

      <motion.div className="absolute top-16 left-1/2 w-[17%] aspect-square -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/img/front_page/nav.webp"
          fill
          style={{
            objectFit: "contain",
          }}
          alt="nav"
        />
      </motion.div>

  )
}