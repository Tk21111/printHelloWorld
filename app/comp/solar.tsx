"use client"
import { motion } from 'framer-motion';
import React from 'react';

const SolarAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-96 mt-8 flex items-center justify-center">

      <motion.div 
        className="absolute w-[120px] h-[120px] bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full shadow-md z-20 overflow-hidden" 
        animate={{ 
            rotate: [0,90,180,270,360], 
            scale : [1,1.1,0.9]
        }} 
        transition={{ repeat : Infinity , duration : 10 , ease : 'linear'}}
    />

 
      <motion.div
        className="absolute w-0 h-0"

        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
      >
  
          {/* Solar Flares - Realistic Curved Shape */}
          {Array.from({length : 18}).map((_,i) => i*20).map((angle, index) => (
            <motion.div
              key={angle}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                
              }}
            >
              <motion.div
                className="bg-gradient-to-r from-orange-500 via-yellow-400 to-transparent"
                style={{
                  width: '10px',
                  height: '8px',
                  left: '100px',
                  top: '-4px',
                  borderRadius: '50% 90% 90% 50%',
                  transformOrigin: '0 50%',
                }}
                animate={{
                  scaleX: [0.5, 1.8, 0.9, 1.4, 0.7],
                  scaleY: [0.8, 1.2, 1.5, 0.9, 1.1],
                  opacity: [0.6, 1, 0.8, 0.9, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5 + index * 0.3,
                  ease: 'easeInOut',
                  delay: index * 0.4
                }}
              />
            </motion.div>
          ))}

          {/* Solar Flares - Realistic Curved Shape */}
          {Array.from({length : 18}).map((_,i) => i*15).map((angle, index) => (
            <motion.div
              key={angle}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                
              }}
            >
              <motion.div
                className="bg-gradient-to-r from-orange-500 via-yellow-400 to-transparent"
                style={{
                  width: '80px',
                  height: '8px',
                  left: '100px',
                  top: '-4px',
                  borderRadius: '50% 90% 90% 50%',
                  transformOrigin: '0 50%',
                }}
                animate={{
                  scaleX: [0.5, 1.8, 0.9, 1.4, 0.7],
                  scaleY: [0.8, 1.2, 1.5, 0.9, 1.1],
                  opacity: [0.6, 1, 0.8, 0.9, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5 + index * 0.3,
                  ease: 'easeInOut',
                  delay: index * 0.4
                }}
              />
            </motion.div>
          ))}
          
      </motion.div>
    </div>
  );
};

export default SolarAnimation;