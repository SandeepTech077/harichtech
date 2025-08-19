import React from "react";
import Image, { StaticImageData } from "next/image";

interface BulletPoint {
  id: number;
  points: string;
}

interface Bullets {
  title: string;
  points: BulletPoint[];
  descriptions: string[];
}

interface Testimonial {
  description: string;
  name: string;
  designation: string;
  profile: StaticImageData;
}

interface GrowthSectionProps {
  title: string;
  blueTitle: string;
  descriptions?: string[] | null;
  bullets?: Bullets | null;
  testimonial?: Testimonial | null;
}

export const GrowthSection: React.FC<GrowthSectionProps> = ({
  title,
  blueTitle,
  descriptions,
  bullets,
  testimonial,
}) => {
  return (
    <section className=" py-16">
      {/* 🔹 Heading */}
      <h2 className="text-[30px] sm:text-[48px] font-bold mb-6">
        {title}{" "}
        <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
          {blueTitle}
        </span>
      </h2>

      {/* 🔹 Normal descriptions */}
      {descriptions && (
        <div className="text-black text-[18px] mb-8">
          {descriptions.map((desc, i) => (
            <p key={i} className="mb-4">
              {desc}
            </p>
          ))}
        </div>
      )}

      {/* 🔹 Bullets Section */}
      {bullets && (
        <div className="w-full text-[18px]">
          <p className="text-black mb-4">{bullets.title}</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
            {bullets.points.map((point) => (
              <li key={point.id}>{point.points}</li>
            ))}
          </ul>
          {bullets.descriptions.map((desc, i) => (
            <p key={i} className="mb-4 text-gray-700">
              {desc}
            </p>
          ))}
        </div>
      )}

      {/* 🔹 Testimonial Section */}
      {testimonial && (
        <div className="bg-gray-50 rounded-lg p-8 mt-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="flex flex-col justify-center">
              <span className="text-8xl text-black block">“</span>
              <p className="text-black text-[16px] leading-[40px] mb-4">
                {testimonial.description}
              </p>

              <p className="font-bold text-[18px]">{testimonial.name}</p>
              <p className="text-gray-500 text-[16px] m-3">{testimonial.designation}</p>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-100 h-100 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={testimonial.profile}
                  alt={testimonial.name}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
