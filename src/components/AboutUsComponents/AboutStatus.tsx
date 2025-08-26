"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface StatusItem {
  id: number;
  title: string;
  number: string; // e.g., "60+"
  icon: StaticImageData;
}

interface AboutStatusProps {
  status: StatusItem[];
}

const AboutStatus: React.FC<AboutStatusProps> = ({ status }) => {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-7xl">
        {status.map((item, index) => {
          // Extract number and suffix (+, %, etc.)
          const finalNumber = parseInt(item.number.replace(/\D/g, ""), 10);
          const suffix = item.number.replace(/[0-9]/g, "");

          return (
            <div key={item.id} className="flex flex-col items-center space-y-3">
              <div
                className={`relative ${
                  index === 1 ? "w-[85px] h-[50px]" : "w-[60px] h-[50px]"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="object-contain"
                  fill
                />
              </div>

              {/* Animated Number */}
              <h3 className="text-3xl lg:text-5xl font-bold mt-6">
                <AnimatedCounter target={finalNumber} />
                {suffix}
              </h3>

              <p className="text-xl lg:text-2xl text-black">{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutStatus;

/* -----------------------------
   🔹 Animated Counter Component
------------------------------ */
const AnimatedCounter = ({ target }: { target: number }) => {
  const count = useMotionValue(0); // start from 0
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [target, count]);

  return <motion.span>{rounded}</motion.span>;
};
