import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "@/components/Title";
import Button from "@/components/Button"
interface WorkItem {
  title: string;
  shortDescription: string;
  Image: StaticImageData;
}

interface PortfolioData {
  title: string;
  Subtitle: string;
  btnTitle: string;
  describation: string;
  works: WorkItem[];
}

interface PortfolioComponentProps {
  data: PortfolioData;
}

const PortfolioComponent: React.FC<PortfolioComponentProps> = ({ data }) => {
  return (
    <div className="w-full">
      <div className="text-center">
        {/* Title */}
        <div className="mx-auto mb-8" style={{ maxWidth: "200px" }}>
          <Title title={data.title} />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold mt-2 max-w-2xl mx-auto">
          {data.Subtitle.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-blue-600">
            {data.Subtitle.split(" ").slice(-1)}
          </span>
        </h2>

        {/* Description */}
        <p className=" mx-auto mt-4 text-gray-600">
          {data.describation}
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* First Large Item */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden md:row-span-2 h-64 md:h-full">
          {data.works[0]?.Image && (
            <div className="h-full relative">
              <Image
                src={data.works[0].Image}
                alt={data.works[0].title}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">{data.works[0].title}</h3>
                <p>{data.works[0].shortDescription}</p>
              </div>
            </div>
          )}
        </div>

        {/* Other Portfolio Items */}
        {data.works.slice(1).map((work, index) => (
          <div
            key={index}
            className="relative bg-gray-200 rounded-lg overflow-hidden h-80"
          >
            {work.Image && (
              <div className="h-full relative">
                <Image
                  src={work.Image}
                  alt={work.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 p-4 text-white text-center justify-center">
                  <h3 className="text-lg font-bold">{work.title}</h3>
                  <p className="text-sm">{work.shortDescription}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center my-16">
        <Button text={data.btnTitle}/>
      </div>
    </div>
  );
};

export default PortfolioComponent;
