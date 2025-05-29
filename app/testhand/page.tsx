"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {  useRef } from "react";

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
        backgroundImage : "url(https://media.discordapp.net/attachments/909307211862396929/1377195824777400360/f32ae98c68234d02.png?ex=6838150f&is=6836c38f&hm=b492042528939fc9fa063c804ce86c8def09af712bb39cd56ee1233b20f3e428&=&format=webp&quality=lossless&width=1423&height=800)",
        backgroundRepeat : "repeat-y",
        backgroundSize : "contain" ,
        backgroundPosition : "center",
        top : "2%"
      }}
      className="relative bg-gradient-to-t from-blue-950 to-blue-800 w-screen h-screen"
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
          <div className="align-middle">

          
        <motion.div 
          ref={ref}
          className="realtive h-[350vh] w-full">
          <motion.div 
            className="absolute h-fit w-full"
            style={{
              scale : scale,
              // backgroundImage : "url(https://media.discordapp.net/attachments/909307211862396929/1377195824777400360/f32ae98c68234d02.png?ex=6838150f&is=6836c38f&hm=b492042528939fc9fa063c804ce86c8def09af712bb39cd56ee1233b20f3e428&=&format=webp&quality=lossless&width=1423&height=800)",
              //   backgroundRepeat : "no-repeat",
              //   backgroundSize : "contain" ,
              //   backgroundPosition : "center",
              //   top : "2%"
            }}
            >
            <motion.div 
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                opacity: opacityHero,
                background: `radial-gradient(
                  ellipse at center,
                  rgba(0, 0, 0, 0) 40%,
                  rgba(0, 0, 0, 0.8) 100%
                )`,
                boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.7)",
                transition: 'opacity 0.7s ease-in-out',
              }}
            />  
            <Hero/>
            



            
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
                
              }}
            />
          </motion.div>
        </motion.div>
        
        </div>
        <div className="flex flex-row w-screen aspect-square">
            <MemberParent />
            <MemberParentG/> 
        </div>
      </ReactLenis>
    </div>
  );
}



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




const Hand = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Transform values for smoother animation
  const leftCardX = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], [0, -20, -40, -60, -80]);
  const rightCardX = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8, 1], [0, 20, 40, 60, 80]);
  const containerY = useTransform(scrollYProgress, [0.6, 0.8, 1], [ -600, 300, 500]);
  const scale = useTransform(scrollYProgress , [0, 0.4, 0.6, 0.8, 1], [0.5,0.7,1,1.05,1.1]);
  const opacityText = useTransform(scrollYProgress , [0.5,1] , [0,1])

  //hand
  const handY = useTransform(scrollYProgress, [0, 0.5, 0.6], [0, -50, -100]);
  const opacityHand = useTransform(scrollYProgress, [0,0.5,0.6], [1, 1, 0]);


  return (
    <motion.div
      ref={ref}
      className="relative h-full w-full"
    >
      <motion.div
        className="sticky top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5"
        style={{
          y: containerY
        }}
      >
        <motion.div 
          className="absolute w-8 h-8 rounded-full top-[200px] -translate-y-1/2 left-1/2 flex items-center justify-center text-white text-xs font-bold"
          style={{ 
            opacity: opacityHand ,
            y : handY
          }}
          >
          Start
        </motion.div>
        {/* Left Card */}
        <motion.div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-fit  text-white shadow-xl rounded-lg"
          style={{ 
            x: leftCardX,
            
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
          <div
            style={{
              boxShadow : '0 0 10px 2px white',
            }}  
          >
            <Image 
              src="/img/card/web.webp"
              width={250}
              height={250}
              alt="img"
            />
          </div>
          
          <motion.div 
            className="text-center text-lg mt-5 flex flex-row space-x-2"
            style={{
              opacity : opacityText
            }}
            >
              <p>HTML,</p>
              <p>CSS,</p>
              <p>JS,</p>
              <p>JAVA</p>
          </motion.div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 min-h-[324px] min-w-[232px] max-w-[1160px] max-h-[1620]  text-white shadow-xl rounded-lg"
          style={{ 
            x: rightCardX,
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
          <div
            style={{
              boxShadow : '0 0 10px 2px white',
            }}  
          >
            <Image 
              src="/img/card/game.webp"
              width={250}
              height={250}
              alt="img"
            />
          </div>
          <motion.div 
            className="text-center text-lg mt-5 flex flex-col space-x-2 place-items-center"
            style={{
              opacity : opacityText
            }}
            >
              <div className="flex flex-row">
                <p>ROBLOX,</p>
                <p>UNITY</p>
              </div>
              <p>BLENDER,</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Updated Member type - removed posX/posY since we're using grid
type Member = {
  img: string;
  name: string;
  web: boolean;
};

const members: Member[] = [
  // Web members (web: true)
  {
    img: "/img/profile/jazer_final.jpg",
    name: "jazer",
    web: true,
  },
  {
    img: "/img/profile/jazer_final.jpg",
    name: "jazer",
    web: true,
  },
  {
    img: "/img/profile/jazer_final.jpg",
    name: "jazer",
    web: true,
  },
  // Non-web members (web: false)
  {
    img: "/img/profile/jazer_final.jpg",
    name: "jazer",
    web: false,
  },
  {
    img: "/img/profile/jazer_final.jpg",
    name: "jazer",
    web: false,
  },
  {
    img: "/img/profile/jazer_final.jpg",
    name: "jazer",
    web: false,
  },
  {
    img: "/img/profile/jazer_final.jpg",
    name: "jazer",
    web: false,
  },
  {
    img: "/img/profile/jazer_final.jpg",
    name: "jazer",
    web: false,
  },
  {
    img: "/img/profile/jazer_final.jpg",
    name: "jazer",
    web: false,
  }
];

const Card = () => {
  return (
    <div className="w-screen aspect-[9/7]">
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
  // Filter members where web is true
  const webMembers = members.filter(member => member.web === true);
  
  return (
    <div className="w-[50%] aspect-[16/5]">
      <div className="grid grid-cols-3 gap-4 h-full p-4">
        {webMembers.map((member, i) => (
          <MemberCard
            key={i}
            img={member.img}
            name={member.name}
            web={member.web}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

const MemberParentG = () => {
  // Filter members where web is false
  const nonWebMembers = members.filter(member => member.web === false);
  
  return (
    <div className="w-[50%] aspect-auto">
      <div className="grid grid-cols-3 gap-4 h-full p-4 w-full">
        {nonWebMembers.map((member, i) => (
          <MemberCard
            key={i}
            img={member.img}
            name={member.name}
            web={member.web}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

const MemberCard = ({ img, name, web, index }: Member & { index: number }) => {
  const weB = web 
    ? "url(https://cdn.discordapp.com/attachments/1377199049052262471/1377266406843748453/0b0733d09bd67de6.png?ex=683856cb&is=6837054b&hm=eef8125391d0f3600336defad3265f76ac7a540581bcff3f0e7090fa37ec9382&)" 
    : "url(https://cdn.discordapp.com/attachments/1377199049052262471/1377268230372069406/888ec93ae7fd0e57.png?ex=6838587e&is=683706fe&hm=bdfc4486c07bbb6dfb8554529360f1d66cf8770d6b5e66dfd11cf1188baf44c1&)";

  return (
    <motion.div
      className="w-full h-[30%] bg-white rounded-lg shadow-xl overflow-hidden transform-gpu"
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
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_5px_30px_rgba(0,0,0,0.1)]">
          <p className="text-white font-semibold text-center">{name}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};



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

const NavBar = (/*{oritext} : { oritext : string }*/)=>{

  // const [dot, setDot] = useState("..");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDot((prev) => (prev.length > 5 ? "." : prev + "."));
  //   }, 1000);

  //   return () => clearInterval(interval); // cleanup
  // }, []);


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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl ">
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