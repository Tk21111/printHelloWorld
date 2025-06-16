"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

    const [username , setUsername] = useState<string>()
    const [pwd , setPwd ] = useState<string>()
    const [show , setShow] = useState<boolean>(false)

    const navigater = useRouter();

    const sendLogin = async () => {

        try {
            await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user: username, pwd : pwd }),
            }); 
        } catch (err){
            console.log("login" , err);
        }
        
    }

    return (
        <div className="flex h-screen w-full place-items-center justify-center ">
            <form onSubmit={sendLogin} className="space-y-2 ">
                <p className="text-2xl">Login</p>
                <input 
                    type="text"
                    onChange={(e)=> setUsername(e.target.value)}
                    placeholder="username"
                    className="text-black p-1"
                ></input>
                <div className="flex flex-row h-fit w-full space-x-1">
                    <input
                    type={ show ? "text" : "password"}
                        placeholder="pwd"
                        onChange={(e) => setPwd(e.target.value)}
                        className="text-black p-1"
                    ></input>
                    <input
                        type="checkbox"
                        onChange={()=> setShow((prev) => !prev)}
                    ></input>
                </div>
                <div className="justify-evenly space-x-2 h-full w-full">
                    <button className="">
                        Login
                    </button>
                    <button
                        onClickCapture={(e) => {e.preventDefault(); navigater.push("/users/registor") }}
                    >
                        registor
                    </button>
                </div>
                
            </form>
        </div>
    )
}