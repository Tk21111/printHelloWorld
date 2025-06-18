"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";


const Logo = ()=> {

  const router = useRouter()
  
  return (         
    <div className="h-full w-full">
      <div className="flex flex-row h-[30%] p-[2%] place-items-center justify-center">
        <button className="text-xl border p-[1%] rounded" onClick={()=>{ router.push("/users/registor")}}>
          Registor
        </button>
      </div>
    </div>
   
  )
}

export default Logo;
