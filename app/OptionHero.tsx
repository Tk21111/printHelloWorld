"use client";
import SolarAnimation from "./solar";
import { motion } from "framer-motion";

export default function DestopView() {
  const option = [
    { name: "Web dev" },
    { name: "Game dev" },
    { name: "AI" },
    { name: "3D" },
  ];

  return (
    <div className="grid justify-items-center p-4">
      <div className="flex flex-row flex-wrap justify-around gap-8 w-full max-w-6xl">
        {option.map((val, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-h-[200px]"
          >
            <motion.div
              className="bg-gradient-to-r from-blue-500 via-purple-700 to-transparent text-white px-6 py-4 rounded-lg shadow-md hover:bg-slate-600 transition-all"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {val.name}
            </motion.div>
          </div>
        ))}
      </div>

      <SolarAnimation />
    </div>
  );
}
