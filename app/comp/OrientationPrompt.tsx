// components/OrientationPrompt.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';



const OrientationPrompt: React.FC = () => {

  const router = useRouter()
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
      const isIpad = /iPad/i.test(navigator.userAgent);

      if (isMobile){
        router.push('/moblie');
      } else if(!isIpad) {
        router.push('/destop')
      }
    };

    const checkOrientation = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      
      setShowPrompt(isPortrait);
      if(!isPortrait){
        router.push('/destop')
      }
    };

    // Initial check
    checkOrientation();
    checkMobile();

     // Listen for orientation and resize changes
    window.addEventListener('orientationchange', () => {
      setTimeout(checkOrientation, 100);
    });
    window.addEventListener('resize', checkOrientation);

    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('resize', checkOrientation);
    };

  }, []);



  const handleContinue = () => {
    setShowPrompt(false);
    router.push('/moblie')
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
          backgroundImage: "url(/img/bg/bg.webp)",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/10 rounded-full"
                style={{
                  width: `${60 + i * 20}px`,
                  height: `${60 + i * 20}px`,
                  left: `${10 + i * 20}%`,
                }}
                animate={{
                  y: [-100, -200, -100],
                  rotate: [0, 180, 360],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 mx-4 max-w-sm rounded-2xl border border-white/20 bg-white/10 p-8 text-center text-white backdrop-blur-lg"
          >
            {/* Rotating phone icon */}
            <motion.div
              className="mb-6 text-6xl"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              📱
            </motion.div>

            <h1 className="mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-3xl font-bold text-transparent">
              It seem like u r using ipad.
            </h1>
            <h1 className="mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-3xl font-bold text-transparent text-red-500">
               rotate pls
            </h1>

            <p className="mb-8 text-lg opacity-90">
              สำหรับ ipad user เปลี่ยนเป็นแนวนอน
            </p>

            {/* Device rotation demo */}
            <div className="mb-8 flex items-center justify-center gap-6">
              <motion.div
                className="h-20 w-12 rounded-xl border-2 border-white/30 bg-white/20"
                whileHover={{ scale: 1.1 }}
              />
              <motion.div
                className="text-2xl opacity-70"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
              <motion.div
                className="h-12 w-20 rounded-xl border-2 border-white/30 bg-white/20"
                whileHover={{ scale: 1.1 }}
              />
            </div>

            <motion.button
              onClick={handleContinue}
              className="mb-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(239, 68, 68, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Continue Anyway
            </motion.button>

            <button
              onClick={handleContinue}
              className="block w-full text-sm text-white/70 transition-colors duration-300 hover:text-white hover:underline"
            >
              Skip this message
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrientationPrompt;

// Usage in your main page component:
/*
// pages/index.tsx or app/page.tsx
import { useState } from 'react';
import OrientationPrompt from '@/components/OrientationPrompt';
import HandPage from '@/components/HandPage';

export default function HomePage(): JSX.Element {
  const [showOrientation, setShowOrientation] = useState<boolean>(true);

  return (
    <>
      <OrientationPrompt onContinue={() => setShowOrientation(false)} />
      <HandPage />
    </>
  );
}
*/

// Alternative: Global layout approach
/*
// app/layout.tsx or _app.tsx
import OrientationPrompt from '@/components/OrientationPrompt';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>
        <OrientationPrompt />
        {children}
      </body>
    </html>
  );
}
*/