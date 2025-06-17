"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Format from "../../model/format.json";

import { CardRightDeco } from "@/app/destop/page";

export default function Register() {
    const [username, setUsername] = useState<string>();
    const [pwd, setPwd] = useState<string>();
    const [pwdConf, setPwdConf] = useState<string>();
    const [show, setShow] = useState<boolean>(false);

    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [surname, setSurname] = useState<string>();
    const [nickname, setNickname] = useState<string>();

    const [techStack, setTechStack] = useState<string[]>([]);
    const [toolStack, setToolStack] = useState<string[]>([]);

    const [addTechStack , setAddTechStack] = useState<string[]>([]);

    const [projPerType , setProjPerType] = useState<string>("");

    const router = useRouter();

    const sendLogin = async () => {
        if (pwd !== pwdConf) {
            return;
        }

        try {
            await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: username,
                    pwd,
                    email,
                    name,
                    surname,
                    nickname,
                    techStack,
                    toolStack,
                    projPerType
                }),
            });

            router.push("/"); // Redirect after success
        } catch (err) {
            console.log("login error", err);
        }
    };

    const handleAddArr = (val: string, type: string) => {
        if (type === "tool") {
            setToolStack(prev =>
                prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
            );
        } else {
            setTechStack(prev =>
                prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
            );
        }
    };

    return (
        <div className="flex h-full w-full place-items-center justify-center lg:p-3 pl-[7%] pt-[3%] pr-[7%]"
            style={{
                backgroundImage: "url(/img/bg/bg.webp)",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
            }}
        >
        <div className="relative h-full lg:w-[30%] w-full place-items-center justify-center justify-self-center border-2 rounded p-[1%] shadow-2xl shadow-yellow-100 m-[2%]">
            <form onSubmit={(e) => { e.preventDefault(); sendLogin(); }} className="space-y-4 z-10 relative">
                <p className="text-2xl font-bold">Register</p>

                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="text-black p-2 w-full"
                />

                <div className="flex flex-row items-center space-x-2">
                    <input
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        onChange={(e) => setPwd(e.target.value)}
                        className="text-black p-2 w-full"
                    />
                    <input
                        type="checkbox"
                        onChange={() => setShow(prev => !prev)}
                        title="Show Password"
                    />
                </div>

                <input
                    type={show ? "text" : "password"}
                    placeholder="Confirm Password"
                    onChange={(e) => setPwdConf(e.target.value)}
                    className="text-black p-2 w-full"
                />
                {pwd !== pwdConf && <p className="text-red-600 text-sm">Passwords do not match</p>}

                <div className="space-y-2">
                    <p className="font-medium">Information</p>
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-black p-2 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        className="text-black p-2 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Surname"
                        onChange={(e) => setSurname(e.target.value)}
                        className="text-black p-2 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Nickname"
                        onChange={(e) => setNickname(e.target.value)}
                        className="text-black p-2 w-full"
                    />
                </div>

                <div className="p-2 border rounded">
                    <p className="font-semibold">Tech Stack</p>
                    {Format.techStack.map((val, i) => (
                        <div className="flex flex-row items-center space-x-2" key={`tech-${i}`}>
                            <input
                                type="checkbox"
                                onChange={() => handleAddArr(val, "tech")}
                                value={val}
                                checked={techStack.includes(val)}
                            />
                            <label className=" opacity-60">{val}</label>
                        </div>
                    ))}
                </div>

                <div className="p-2 border rounded">
                    <p className="font-semibold">Tool Stack</p>
                    {Format.toolStack?.map((val, i) => (
                        <div className="flex flex-row items-center space-x-2" key={`tool-${i}`}>
                            <input
                                type="checkbox"
                                onChange={() => handleAddArr(val, "tool")}
                                value={val}
                                checked={toolStack.includes(val)}
                            />
                            <label className="opacity-60">{val}</label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col border rounded h-[20vh] p-2">
                    <p className="text-xl">{"Choose yours path : " + projPerType}</p>
                    <div className="flex flex-row justify-around rounded mt-[5vh]"> 
                        <button className={`border-2 rounded ${ projPerType === "web" ? "bg-blue-800 text-white" : ""} text-sm scale-125 hover:scale-150 transition-all duration-100 p-2`} onClickCapture={(e) => {e.preventDefault();setProjPerType("web");}}>
                            web
                        </button>
                        <button className={`border-2 rounded ${ projPerType === "game" ? "bg-blue-800 text-white" : ""} text-sm scale-125 hover:scale-150 transition-all duration-100 p-2`} onClickCapture={(e) => {e.preventDefault();setProjPerType("game");}}>
                            game
                        </button>
                    </div>
                </div>
                

                <div className="flex justify-between items-center mb-[5vh]">
                    {name && surname && email && username && pwd ? (
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Submit
                        </button>
                    ) : (
                        <p className="text-red-600 text-sm">Please fill all required information</p>
                    )}

                    <button
                        type="button"
                        className="text-blue-600 underline"
                        onClick={() => router.push("/login")}
                    >
                        Go to Login
                    </button>
                </div>
            </form>
        <div className="absolute inset-0 pointer-events-none rounded-xl z-0 backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/10 before:to-white/5 before:opacity-60"></div>

        </div>
          </div>
    );
}
