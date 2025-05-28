"use client"
import React from 'react';
import { motion } from 'framer-motion';

const WorkingImageRotation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8 space-y-12">
      <h1 className="text-white text-3xl font-bold mb-8">Working Image Rotation Examples</h1>
      
      {/* Example 1: Simple rotateY on hover */}
      <div className="space-y-4">
        <h2 className="text-white text-xl">1. Simple RotateY on Hover</h2>
        <motion.div
          whileHover={{ rotateY: 25 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
          style={{ 
            transformStyle: "preserve-3d",
            transformOrigin: "center center"
          }}
        >
          <img 
            src="https://picsum.photos/200/150?random=1"
            alt="Rotating image"
            className="rounded-lg shadow-lg"
            style={{ display: "block" }}
          />
        </motion.div>
      </div>

      {/* Example 2: Continuous rotation */}
      <div className="space-y-4">
        <h2 className="text-white text-xl">2. Continuous Rotation</h2>
        <motion.div
          animate={{ rotateY: [0, 360] }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="inline-block"
          style={{ 
            transformStyle: "preserve-3d"
          }}
        >
          <img 
            src="https://picsum.photos/150/150?random=2"
            alt="Spinning image"
            className="rounded-lg shadow-lg"
            style={{ display: "block" }}
          />
        </motion.div>
      </div>

      {/* Example 3: Initial rotation then animate to normal */}
      <div className="space-y-4">
        <h2 className="text-white text-xl">3. Initial Rotation Animation</h2>
        <motion.div
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="inline-block"
          style={{ 
            transformStyle: "preserve-3d"
          }}
        >
          <img 
            src="https://picsum.photos/200/150?random=3"
            alt="Animating image"
            className="rounded-lg shadow-lg"
            style={{ display: "block" }}
          />
        </motion.div>
      </div>

      {/* Example 4: 3D Card Flip */}
      <div className="space-y-4">
        <h2 className="text-white text-xl">4. 3D Card Flip</h2>
        <motion.div
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block w-48 h-32"
          style={{ 
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)"
            }}
          >
            <img 
              src="https://picsum.photos/192/128?random=4"
              alt="Front"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">FRONT</span>
            </div>
          </div>
          
          {/* Back */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <img 
              src="https://picsum.photos/192/128?random=5"
              alt="Back"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-red-500/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">BACK</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Example 5: Multiple axis rotation */}
      <div className="space-y-4">
        <h2 className="text-white text-xl">5. Multiple Axis Rotation</h2>
        <motion.div
          whileHover={{ 
            rotateY: 20,
            rotateX: 10,
            scale: 1.05
          }}
          transition={{ duration: 0.6 }}
          className="inline-block"
          style={{ 
            transformStyle: "preserve-3d"
          }}
        >
          <img 
            src="https://picsum.photos/200/150?random=6"
            alt="Multi-axis rotation"
            className="rounded-lg shadow-lg"
            style={{ display: "block" }}
          />
        </motion.div>
      </div>

      {/* Example 6: Your CardRightDeco style */}
      <div className="space-y-4">
        <h2 className="text-white text-xl">6. CardRightDeco Style (Fixed)</h2>
        <div className="relative w-48 h-48">
          {/* Web Card - Front Layer */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotateY: 0,
              y: [0, -8, 0]
            }}
            transition={{
              opacity: { duration: 1, delay: 0.5 },
              x: { duration: 1.2, delay: 0.5 },
              rotateY: { duration: 1.2, delay: 0.5 },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }
            }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5
            }}
            className="relative z-20"
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
              <img 
                src="https://picsum.photos/150/100?random=7"
                alt="Web Card"
                className="transition-transform duration-300 hover:scale-110 block"
                width="150"
                height="100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10"></div>
            </div>
          </motion.div>

          {/* Game Card - Back Layer */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 15, scale: 0.9 }}
            animate={{ 
              opacity: 0.8, 
              x: -10, 
              rotateY: -8,
              scale: 0.95,
              y: [0, 6, 0]
            }}
            transition={{
              opacity: { duration: 1.2, delay: 0.8 },
              x: { duration: 1.4, delay: 0.8 },
              rotateY: { duration: 1.4, delay: 0.8 },
              scale: { duration: 1.4, delay: 0.8 },
              y: { 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2
              }
            }}
            whileHover={{ 
              opacity: 1,
              scale: 1.02, 
              rotateY: -3
            }}
            className="absolute top-8 left-8 z-10"
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10">
              <img 
                src="https://picsum.photos/150/100?random=8"
                alt="Game Card"
                className="transition-all duration-300 hover:scale-105 block"
                width="150"
                height="100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkingImageRotation;