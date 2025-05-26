"use client";
import React from "react";

export default function MeetTheTeam() {
    const teamMembers = ["Alice", "Bob", "Charlie"];

    return (
        <div className="flex flex-col h-[500px] w-full justify-center items-center text-center">
            <p className="text-2xl font-bold mb-4">MEET THE TEAM</p>
            <div className="grid grid-cols-3 gap-4 p-4 place-items-center">
                {teamMembers.map((name, index) => (
                    <CardPeople key={index} name={name} />
                ))}
            </div>
        </div>
    );
}

type CardPeopleProps = {
    name: string;
};

const CardPeople = ({ name }: CardPeopleProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="w-24 h-24 bg-gray-200 rounded-lg mb-2"></div>
            <p className="text-lg font-semibold">{name}</p>
        </div>
    );
};
