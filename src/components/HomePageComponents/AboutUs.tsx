"use client";

import Image from "next/image";
import React from "react";
import Title from "../Title";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ButtonTitle {
  title: string;
  href: string;
}

interface AboutUsProps {
  data: {
    title: string;
    subTitle: string;
    describation: string;
    button: ButtonTitle;
    rightImage: string;
  };
}

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex flex-col-reverse md:flex-row gap-10 items-center max-w-8xl px-4">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Title */}
          <motion.span
            className="inline-block text-gray-900 px-3  rounded-lg font-semibold text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title title={data.title} />
          </motion.span>

          {/* Subtitle */}
          <motion.h2
            className="text-[30px] md:text-[43px] font-bold leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {data.subTitle.split(" ").map((word, i) => (
              <span
                key={i}
                className={
                  word.toLowerCase() === "harichtech"
                    ? "text-[#2058FF]"
                    : undefined
                }
              >
                {word}{" "}
              </span>
            ))}
          </motion.h2>

          {/* Right Image (Mobile only) */}
          <motion.div
            className="w-full flex justify-center md:hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src={data.rightImage}
              alt="About Harichtech"
              className="w-full h-auto object-contain max-h-[300px]"
              priority
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-black text-[16px] md:text-[18px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {data.describation}
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href={data.button.href}>
              <button className="flex items-center gap-2 bg-gradient-to-l from-[#2058FF] to-[#004BC2] hover:opacity-90 transition px-6 py-3 text-white rounded-[10px] text-[16px] font-semibold shadow-md">
                {data.button.title}
                <MoveUpRight />
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image (Desktop only) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center hidden md:flex mt-15 "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={data.rightImage}
            alt="About Harichtech"
            className="w-full h-auto lg:h-[70vh] object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
