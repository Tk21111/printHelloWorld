"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Registor() {

    const [username , setUsername] = useState<String>()
    const [pwd , setPwd ] = useState<String>()
    const [pwdConf , setPwdConf ] = useState<String>()
    const [show , setShow] = useState<Boolean>(false)

    const [email , setEmail] = useState<String>();
    const [name , setName] = useState<String>();
    const [surname , setSurname] = useState<String>();

    const navigater = useRouter();

    const sendLogin = async () => {

        if (pwd !== pwdConf) {
            return null
        }
        try {
            await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user: username, pwd : pwd , email , name, surname}),
            }); 
        } catch (err){
            console.log("login" , err);
        }
        
    }

    return (
        <div className="flex h-screen w-full place-items-center justify-center ">
            <form onSubmit={sendLogin} className="space-y-2 ">
                <p className="text-2xl">Registor</p>
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
                <input
                    type={ show ? "text" : "password"}
                        placeholder="confirm pwd"
                        onChange={(e) => setPwdConf(e.target.value)}
                        className="text-black p-1"
                    ></input>
                {pwd !== pwdConf && <p className="text-red-600 text-sm">pwd and confirm pwd is not equal</p>}
                <div className="flex flex-col space-y-1">
                    <p>Information</p>
                     <input
                        type= "text"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-black p-1"
                    ></input>
                     <input
                        type= "text"
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                        className="text-black p-1"
                    ></input>
                    <input
                        type= "text"
                        placeholder="surname"
                        onChange={(e) => setSurname(e.target.value)}
                        className="text-black p-1"
                    ></input>
                </div>
                <div className="justify-evenly space-x-2 h-full w-full">
                    {name && surname && email && username && pwd ?  <button className="">
                        Login
                    </button> : <p className="text-red-600 text-sm">please fill all Information</p>}
                    <button
                        className="btn btn-neutral"
                        onClickCapture={(e) => {e.preventDefault(); navigater.push("/users/registor") }}
                    >
                        registor
                    </button>
                </div>
                
            </form>
        </div>
    )
}