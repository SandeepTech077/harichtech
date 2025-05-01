"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface MotionComponentProps {
  children: ReactNode;
  type?: "fadeIn" | "slideIn" | "zoomIn" | "bounce";
  duration?: number;
  delay?: number;
  className?: string;
}

const MotionComponent = ({
  children,
  type = "fadeIn",
  duration = 0.8,
  delay = 0,
  className = "",
}: MotionComponentProps) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.2, once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } },
    },
    slideIn: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration, delay } },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay } },
    },
    bounce: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          type: "spring",
          bounce: 0.5,
        },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants[type] || variants.fadeIn}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent;
