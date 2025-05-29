"use client";
import Image from "next/image";
import React from "react";

export default function ProjectShowcase() {
    return (
        <div className="relative h-screen mt-5 text-center">
            <p className="font-bold text-xl m-5">Project Show Case</p>
            <div className="grid grid-cols-4 gap-4 p-4 place-items-center">
                <ProjectCard name="Jazer" lang={["java" , "html" , "css" , "python" , "js"]} title="Web" img="/img/profile/jazer_final.jpg"/>
                <ProjectCard name="Jazer" lang={["java" , "html" , "css" , "python" , "js"]} title="Web" img="/img/profile/jazer_demo.jpg"/>
                <ProjectCard name="Jazer" lang={["java" , "html" , "css" , "python" , "js"]} title="Web" img="/img/profile/junki_final.jpg"/>
                <ProjectCard name="Jazer" lang={["java" , "html" , "css" , "python" , "js"]} title="Web" img="/img/profile/68078.jpg"/>
                <ProjectCard name="ชวิธน์" lang={["java" , "html" , "css" , "python" , "js"]} title="Web" img="/img/profile/jazer_final.jpg"/>
            </div>
        </div>
    );
}

const ProjectCard = ({name , lang , title , img} : {name : string , lang : string[] , title : string , img : string}) => {
    return (
        <div className="flex h-[200px] w-[350px]  border-2 rounded-lg shadow-md">
            <div className="flex flex-row p-2 m-2 justify-stretch space-x-2 text-start">
                <div className="flex flex-col w-[50%] items-center text-wrap justify-center content-center mt-auto">
                    
                    <Image
                        src={img}
                        alt="img"
                        width={100}
                        height={100}
                        className="object-contain rounded-lg justify-self-center"
                    />
                    <Profile name={name} />
                </div>
                <div className="flex flex-col">
                    <p className="text-lg font-semibold">{title}</p>
                    <LangStack lang={lang} />
                </div>
                
            </div>
        </div>
    );
};

const Profile = ({name} : {name : string}) => {
    return (
        <div>
            <p className="text-center font-semibold">{name}</p>
        </div>
    )
}

const LangStack = ({lang} : {lang : string[]})=> {

    return (
        
        <p className="text-sm">lang : {lang.toString()}</p>
        
    )
}

