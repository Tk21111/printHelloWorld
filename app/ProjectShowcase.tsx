"use client";
import React from "react";

export default function ProjectShowcase() {
    return (
        <div className="relative h-screen mt-5 text-center">
            <p className="font-bold text-xl m-5">Project Show Case</p>
            <div className="grid grid-cols-2 gap-4 p-4 place-items-center">
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
}

const ProjectCard = () => {
    return (
        <div className="flex h-full w-full justify-center items-center border-2 rounded-lg shadow-md">
            <div className="flex flex-row">
                <p>aehfgvshffrhbrevb</p>
                <p className="text-lg font-semibold">{"Project Title"}</p>
            </div>
        </div>
    );
};
