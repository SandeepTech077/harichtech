/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { animate, inView } from "motion";
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const animations: { [key: string]: any } = {
        fadeIn: { opacity: [0, 1] },
        slideIn: { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0)"] },
        zoomIn: { opacity: [0, 1], scale: [0.8, 1] },
        bounce: { 
          opacity: [0, 1],
          transform: ["translateY(50px)", "translateY(0)"],
          easing: "ease-out",
          repeat: 1,
          direction: "alternate",
        },
      };

      inView(ref.current, () => {
        animate(
          ref.current!,
          animations[type] || animations.fadeIn,
          {
            duration,
            delay,
          }
        );
      }, { amount: 0.2 });
    }
  }, [type, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default MotionComponent;
