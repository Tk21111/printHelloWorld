"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";


const Logo = ()=> {

  const router = useRouter()
  
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-[16/9] scale-[49%] max-w-6xl px-4">
         <div 
          className="h-full w-full"
    >
      <button onClickCapture={()=> {router.push("/users/registor")}} className="absoute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[20vh] w-[20vw] text-3xl bg-yellow-300">to Register</button>
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
              <div 
                className="h-full w-full"
              
              >
                <Image
                src="/img/logo/world.webp"
                fill
                style={{
                  objectFit: "contain",
                }}
                alt="world"
              />
              </div>
          </div>
           <div className="absolute top-[53%] left-[60%] w-[12%] aspect-square -translate-x-1/2">
            <div
              className="h-full w-full"
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
        <div className="absolute top-[130%] left-[56%]  w-[70%] aspect-[16/9] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/img/logo/down_parent.webp"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="dot"
          />
        </div>
      </div>
    </div>
   
  )
}

export default Logo;
