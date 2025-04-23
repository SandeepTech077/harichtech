"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Define the valid animation types
type AnimationType = 
  | "fadeIn" 
  | "fadeInUp" 
  | "fadeInDown" 
  | "fadeInLeft" 
  | "fadeInRight" 
  | "slideIn" 
  | "zoomIn" 
  | "zoomOut" 
  | "flipX" 
  | "flipY" 
  | "bounce" 
  | "elastic" 
  | "rotateIn" 
  | "stagger" 
  | "staggerItem";

// Define direction options
type DirectionType = "up" | "down" | "left" | "right";

// Define props interface
interface MotionComponentProps {
  children: ReactNode;
  type?: AnimationType;
  duration?: number;
  easing?: string;
  once?: boolean;
  amount?: number;
  delay?: number;
  className?: string;
  direction?: DirectionType;
  distance?: number;
}

/**
 * A comprehensive reusable motion component with multiple animation types
 */
const MotionComponent = ({
  children,
  type = "fadeInUp",
  duration = 0.8,
  easing = "easeOut",
  once = true,
  amount = 0.2,
  delay = 0,
  className = "",
  direction = "up",
  distance = 50,
}: MotionComponentProps) => {
  // Set direction values
  const getDirectionValues = () => {
    switch (direction) {
      case "left": return { x: -distance, y: 0 };
      case "right": return { x: distance, y: 0 };
      case "up": return { x: 0, y: -distance };
      case "down": 
      default: return { x: 0, y: distance };
    }
  };

  const { x, y } = getDirectionValues();

  // Animation variants collection
  const variants = {
    // Basic fade animations
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration, ease: easing, delay }
      }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: distance },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, ease: easing, delay }
      }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -distance },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, ease: easing, delay }
      }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -distance },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, ease: easing, delay }
      }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: distance },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, ease: easing, delay }
      }
    },
    
    // Direction based slide - uses the direction prop
    slideIn: {
      hidden: { opacity: 0, x, y },
      visible: { 
        opacity: 1, 
        x: 0,
        y: 0,
        transition: { duration, ease: easing, delay }
      }
    },
    
    // Scale animations
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, ease: easing, delay }
      }
    },
    zoomOut: {
      hidden: { opacity: 0, scale: 1.2 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, ease: easing, delay }
      }
    },
    
    // Flip animations
    flipX: {
      hidden: { opacity: 0, rotateY: 90 },
      visible: { 
        opacity: 1, 
        rotateY: 0,
        transition: { duration, ease: easing, delay }
      }
    },
    flipY: {
      hidden: { opacity: 0, rotateX: 90 },
      visible: { 
        opacity: 1, 
        rotateX: 0,
        transition: { duration, ease: easing, delay }
      }
    },
    
    // Special animations
    bounce: {
      hidden: { opacity: 0, y: distance },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          type: "spring", 
          stiffness: 300,
          damping: 15,
          delay 
        }
      }
    },
    elastic: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          type: "spring", 
          stiffness: 500, 
          damping: 10,
          delay 
        }
      }
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -45 },
      visible: { 
        opacity: 1, 
        rotate: 0,
        transition: { duration, ease: easing, delay }
      }
    },
    
    // Stagger - for parent components with animated children
    stagger: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: delay
        }
      }
    },
    
    // For use with stagger parent - child items
    staggerItem: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration * 0.8, ease: easing }
      }
    }
  } as const;

  // Get the correct variant based on the type, fallback to fadeInUp if not found
  const selectedVariant = variants[type] || variants.fadeInUp;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={selectedVariant}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent;