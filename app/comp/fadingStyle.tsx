const fadeVariants = {
    // Elegant fade from bottom
    elegant: {
      hidden: { 
        opacity: 0, 
        y: 40, 
        scale: 0.95,
        filter: "blur(8px)"
      },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },

    // Luxurious scale fade
    luxurious: {
      hidden: { 
        opacity: 0, 
        scale: 0.8,
        rotateX: 15,
        filter: "brightness(0.5) blur(6px)"
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        rotateX: 0,
        filter: "brightness(1) blur(0px)",
        transition: {
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },

    // Cinematic reveal
    cinematic: {
      hidden: { 
        opacity: 0, 
        y: 60,
        rotateX: -20,
        transformPerspective: 1000,
        filter: "contrast(0.8) saturate(0.5) blur(4px)"
      },
      visible: { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        filter: "contrast(1) saturate(1) blur(0px)",
        transition: {
          duration: 1.8,
          ease: [0.19, 1, 0.22, 1]
        }
      }
    },

    // Glowing entrance
    glowing: {
      hidden: { 
        opacity: 0, 
        scale: 0.9,
        filter: "blur(10px) brightness(2)",
        boxShadow: "0 0 0px rgba(255, 255, 255, 0)"
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        filter: "blur(0px) brightness(1)",
        boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1)",
        transition: {
          duration: 2,
          ease: [0.23, 1, 0.32, 1]
        }
      }
    },

    // Floating drift
    floating: {
      hidden: { 
        opacity: 0, 
        y: 30,
        x: -20,
        rotate: -3,
        filter: "blur(6px) opacity(0.3)"
      },
      visible: { 
        opacity: 1, 
        y: 0,
        x: 0,
        rotate: 0,
        filter: "blur(0px) opacity(1)",
        transition: {
          duration: 2.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.1
        }
      }
    }
  };

  export {fadeVariants}