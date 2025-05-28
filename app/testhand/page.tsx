"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { fadeVariants } from "../comp/fadingStyle";
// import MeetTheTeam from "../meetTheTeam";
import ReactLenis from "lenis/react";

export default function HandPage() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // optional: better control scroll range
  });

  const opacity = useTransform(scrollYProgress , [0.2,0.3] , [0,1])
  const opacityHero = useTransform(scrollYProgress , [0.1,0.3] , [0,0.7])
  const scale = useTransform(scrollYProgress, [0.15, 1], [1,0.7]);

  return (
    <div
      style={{
        // backgroundImage : "url(https://media.discordapp.net/attachments/909307211862396929/1377195824777400360/f32ae98c68234d02.png?ex=6838150f&is=6836c38f&hm=b492042528939fc9fa063c804ce86c8def09af712bb39cd56ee1233b20f3e428&=&format=webp&quality=lossless&width=1423&height=800)",
        // backgroundRepeat : "repeat-y",
        // backgroundSize : "contain" ,
        // backgroundPosition : "center",
        // top : "2%"
      }}
      className="relative bg-gradient-to-t from-blue-950 to-blue-800"
    >
      <ReactLenis
        root
         options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
        >
        <motion.div 
          ref={ref}
          className="realtive h-[4000px] w-fit">
          <motion.div 
            className="absolute h-fit w-fit"
            style={{
              scale : scale,
              backgroundImage : "url(https://media.discordapp.net/attachments/909307211862396929/1377195824777400360/f32ae98c68234d02.png?ex=6838150f&is=6836c38f&hm=b492042528939fc9fa063c804ce86c8def09af712bb39cd56ee1233b20f3e428&=&format=webp&quality=lossless&width=1423&height=800)",
                backgroundRepeat : "no-repeat",
                backgroundSize : "contain" ,
                backgroundPosition : "center",
                top : "2%"
            }}
            >
            <Hero/>
            <motion.div 
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                opacity: opacityHero,
                background: `radial-gradient(
                  ellipse at center,
                  rgba(0, 0, 0, 0) 40%,
                  rgba(0, 0, 0, 0.6) 100%
                )`,
                boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.7)",
                transition: 'opacity 0.7s ease-in-out',
              }}
            />



            
          </motion.div>
          <motion.div 
            className="absolute h-fit w-fit scale-90"
            style={{
                opacity : opacity
              }}
          >
            <Card />
            <motion.div 
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                opacity: opacityHero,
                background: `radial-gradient(
                  ellipse at center,
                  rgba(0, 0, 0, 0) 40%,
                  rgba(0, 0, 0, 0.6) 100%
                )`,
                boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.7)",
                transition: 'opacity 0.7s ease-in-out',
              }}
            />
          </motion.div>
          <motion.div
            className="absolute h-fit w-fit"
          >
            <CardRightDeco/>
          </motion.div>
        </motion.div>
        
    
        
        
        <MemberParent />
        <MemberParentG/>
      </ReactLenis>
    </div>
  );
}



const Hero = () => {
  const ref = useRef(null);

  // Y position moves slightly upward as the user scrolls
  // const posY = useTransform(scrollYProgress, [0, 1], [0, 300]);



  return (
    <div ref={ref} className="h-[2000px] w-fit relative">
      <motion.div
        className="h-[850px] w-[1720px] sticky top-0"
      >
        <Logo />
        <NavBar />
        <LeftDeco />
        <NavBarTop />
        <RightDeco f={false} />
        <RightDeco f={true} />
        {/* <CardRightDeco /> */}
      </motion.div>
      

    </div>
  );
};




const Hand = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Transform values for smoother animation
  const leftCardX = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], [0, -20, -40, -60, -80]);
  const rightCardX = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], [0, 20, 40, 60, 80]);
  const containerY = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], [0, 50, 100, 300, 500]);
  const scale = useTransform(scrollYProgress , [0, 0.4, 0.6, 0.8, 1], [0.5,0.7,1,1.05,1.1]);

  //hand
  const handY = useTransform(scrollYProgress, [0, 0.5, 0.6], [0, -50, -100]);
  const opacityHand = useTransform(scrollYProgress, [0,0.5,0.6], [1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[2000px] w-[1720px]"
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
type Member = {
  img: string;
  posX: number;
  posY: number;
  name: string;
  web : boolean;
};

const members: Member[] = [
  {
    img: "/img/profile/jazer_final.jpg",
    posX: 5,
    posY: 1,
    name: "jazer",
    web : true,
  },
  {
    img: "/img/profile/jazer_final.jpg",
    posX: 35,
    posY: 3,
    name: "jazer",
    web : true,
  },
  {
    img: "/img/profile/jazer_final.jpg",
    posX: 55,
    posY: 3,
    name: "jazer",
    web : true,
  }
];

const membersG: Member[] = [
  {
    img: "/img/profile/jazer_final.jpg",
    posX: 5,
    posY: 1,
    name: "jazer",
    web : false,
  },
  {
    img: "/img/profile/jazer_final.jpg",
    posX: 35,
    posY: 3,
    name: "jazer",
    web : false,
  },
  {
    img: "/img/profile/jazer_final.jpg",
    posX: 55,
    posY: 3,
    name: "jazer",
    web : false,
  }
];

const Card = () => {

  return (
    <div className="h-[3000px]" >
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
    <div className="flex h-[700px] w-[1720px] relative">
      <motion.div className="w-[25%]  relative ">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image src="/img/card/web.webp" width={200} height={200} alt="img logo" />
        </motion.div>
        
      </motion.div>
      <div
        className="flex-1 relative overflow-hidden"

      >
         {
          members.map((member, i) => (
            <MemberCard
              key={i}
              img={member.img}
              posX={member.posX}
              posY={member.posY}
              name={member.name}
              web={member.web}
            />
          ))
        }
      </div>
       
    </div>
  )
};

const MemberParentG = () => {
  return (
    <div className="flex h-[700px] w-[1720px] relative">
      <motion.div className="w-[25%]  relative ">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image src="/img/card/game.webp" width={200} height={200} alt="img logo" />
        </motion.div>
        
      </motion.div>
      <div
        className="flex-1 relative overflow-hidden"

      >
         {
          membersG.map((member, i) => (
            <MemberCard
              key={i}
              img={member.img}
              posX={member.posX}
              posY={member.posY}
              name={member.name}
              web={member.web}
            />
          ))
        }
      </div>
       
    </div>
  )
};


const MemberCard = ({  img, posX, posY , name ,web }: Member) => {
  const [animationSequence, setAnimationSequence] = useState<string[]>([]);
  
  useEffect(() => {
    const sequence = [];
    
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

  const weB = web ? "url(https://cdn.discordapp.com/attachments/1377199049052262471/1377266406843748453/0b0733d09bd67de6.png?ex=683856cb&is=6837054b&hm=eef8125391d0f3600336defad3265f76ac7a540581bcff3f0e7090fa37ec9382&)" : "url(https://cdn.discordapp.com/attachments/1377199049052262471/1377268230372069406/888ec93ae7fd0e57.png?ex=6838587e&is=683706fe&hm=bdfc4486c07bbb6dfb8554529360f1d66cf8770d6b5e66dfd11cf1188baf44c1&)"

  return (
    <motion.div
      className="absolute w-[200px] h-[300px] bg-white rounded-lg shadow-xl overflow-hidden transform-gpu perspective-1000"
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
        opacity: [0,1],
        scale: 1
      }}
      transition={{
        duration: 2, // Longer duration for the sequence
        delay: (10 - setAnimationSequence.length) * 0.01   , // Delay based on the number of steps in the sequence
        ease: "linear"
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
   <motion.div 
      className="w-full h-full overflow-hidden rounded-none "
      style={{
        backgroundImage: weB,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.4))",
        transformStyle: "preserve-3d"
      }}  
        >
      <div className="aspect-[9/15] h-[50%] absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_5px_30px_rgba(0,0,0,0.1)] ">
        <Image
          src={img}
          alt="mem"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_5px_30px_rgba(0,0,0,0.1)] ">
        <p>{name}</p>
      </div>
    </motion.div>

      
    </motion.div>
  );
}



const Logo = ()=> {
  
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[500px] scale-75 max-w-6xl px-4">
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

const NavBar = ()=>{
  return (

      <motion.div className="absolute w-[30%] left-1/4 top-3/4 aspect-[12/5] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/img/front_page/place_holder.webp"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="place_holder"
            className="w-full h-full"
          />
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

const CardRightDeco = () => {
  return (
    <div className="absolute top-[50%] left-[90.5%] w-[10.5%] -translate-x-1/2 -translate-y-1/2 space-y-6">
      
      {/* Web Card - Front Layer */}
      <motion.div
        
        initial={{ opacity: 0, x: 50, rotateY: -20 }}
        
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          x: { duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
          rotateY: { duration: 1.2, delay: 0.5 },
          y: { 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }
        }}
        whileHover={{ 
          scale: 1.05, 
          rotateY: 5,
          z: 20,
          boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
        }}
        className="relative z-20 transform-gpu perspective-1000"
        style={{
          filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.4))",
          transformStyle: "preserve-3d"
        }}
      >
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 h-fit w-fit">
          <Image 
            src="/img/card/web.webp"
            width={150}
            height={100}
            alt="img"
            className="transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10"></div>
        </div>
      </motion.div>

      {/* Game Card - Back Layer */}
      <motion.div
        initial={{ opacity: 0, x: 30, rotateY: 15, scale: 0.9 }}
        animate={{ 
          opacity: 0.8, 
          x: -10, 
          rotateY: -8,
          scale: 0.95,
          y: [0, 6, 0]
        }}
        transition={{
          opacity: { duration: 1.2, delay: 0.8 },
          x: { duration: 1.4, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
          rotateY: { duration: 1.4, delay: 0.8 },
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
          rotateY: -3,
          z: 10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)"
        }}
        className="relative z-10 transform-gpu perspective-1000"
        style={{
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3)) blur(0.5px)",
          transformStyle: "preserve-3d"
        }}
      >
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 h-fit w-fit">
          <Image 
            src="/img/card/game.webp"
            width={150}
            height={100}
            alt="img"
            className="transition-all duration-300 hover:scale-105 opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10"></div>
        </div>
      </motion.div>

      {/* Background Ambient Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-xl"
        />
      </div>
    </div>
  )
}
const NavBarTop = () => {
  return (

      <motion.div className="absolute top-16 left-1/2 w-[17%] aspect-square -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/img/front_page/nav.webp"
          fill
          style={{
            objectFit: "contain",
          }}
          alt="Hell"
        />
      </motion.div>

  )
}