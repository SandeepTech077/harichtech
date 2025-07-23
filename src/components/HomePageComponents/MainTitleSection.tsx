"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

interface TitleItem {
  id: number;
  title: string;
}

interface MainTitleData {
  title: string;
  allTitle: TitleItem[];
  subTitle: string;
  btnButton: string;
}

interface Props {
  data: MainTitleData;
}

const MainTitleSection: React.FC<Props> = ({ data }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const scrollingTitles = [...data.allTitle, ...data.allTitle];

  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center text-white mb-20">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="z-10 px-4 w-full max-w-4xl text-center flex flex-col items-center justify-center space-y-6">
        {/* Marquee */}
        <div className="w-full overflow-hidden rounded-full border border-gray-300 shadow-lg max-w-5xl mx-auto bg-white/10 backdrop-blur-sm">
          <motion.div
            className="flex gap-8 px-6 py-3 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {scrollingTitles.map((item, index) => (
              <span
                key={index}
                className="text-sm font-semibold text-white flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                {item.title}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Title */}
        <h1 className="text-[40px] md:text-[55px] font-bold px-4 py-5 flex flex-wrap justify-center gap-2 text-center">
          {data.title.split(" ").map((word, i) => (
            <span
              key={i}
              className={`${
                word === "High" || word === "Quality" ? "text-[#1599FF]" : ""
              }`}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* SubTitle */}
        <p className="text-[16px] md:text-[20px] text-white px-4">
          {data.subTitle}
        </p>

        {/* CTA Button */}
        <button className="flex items-center gap-2 bg-gradient-to-l from-[#2058FF] to-[#004BC2] hover:opacity-90 transition px-6 py-3 text-white rounded-[10px] text-[16px] font-semibold shadow-md">
          {data.btnButton}
          <MoveUpRight />
        </button>
      </div>
    </section>
  );
};

export default MainTitleSection;
