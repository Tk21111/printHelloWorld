"use client";
import React from "react";

export default function CircleNavBar() {
    

    return (
        <div className="fixed top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            {/* <div className="relative gap-6 bg-white shadow-lg h-[400px] w-[400px] rounded-full p-4 border border-gray-300">
                {navItems.map((item, index) => (
                    
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50px] w-[200px] bg-red-400"
                        key={index} 
                        style={{ transform: `rotate(${index * (360 / navItems.length)}deg)` }}>
                        <a
                            href={item.href}
                            className="w-14 h-14 bottom-0 rotate-45 items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                            title={item.label}
                        >
                            {item.label[0]}
                        </a>
                    </div>
                    
                ))}
            </div> */}
             <CurvedButtonsSVG/>

        </div>
    );
}

//https://css-tricks.com/snippets/svg/curved-text-along-path/
const CurvedButtonsSVG = () => {
  const handleClick = (label: string) => {
    alert(`Clicked: ${label}`);
  };

  return (
    <svg viewBox="0 0 500 200" className="w-full h-auto">
      <path
        id="curve"
        fill="transparent"
        d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
      />
      <text width="500" fontSize="16" textAnchor="middle" fill="blue" cursor="pointer">
        <textPath href="#curve" startOffset="50%">
          <tspan
            onClick={() => handleClick("Home")}
            className="hover:fill-red-500"
            style={{ pointerEvents: "all", userSelect: "none" }}
          >
            Home&nbsp;
          </tspan>
          <tspan
            onClick={() => handleClick("Projects")}
            className="hover:fill-red-500"
            style={{ pointerEvents: "all", userSelect: "none" }}
          >
            Projects&nbsp;
          </tspan>
          <tspan
            onClick={() => handleClick("Contact")}
            className="hover:fill-red-500"
            style={{ pointerEvents: "all", userSelect: "none" }}
          >
            Contact
          </tspan>
        </textPath>
      </text>
    </svg>
  );
}
