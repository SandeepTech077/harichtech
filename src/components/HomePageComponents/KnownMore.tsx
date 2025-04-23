import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "@/components/Title";
import Button from "@/components/Button";

interface KnownMoreProps {
  data: {
    title: string;
    Image1: StaticImageData;
    Image2: StaticImageData;
    describation: string;
    btnTitle: string;
  };
}

const KnownMore: React.FC<KnownMoreProps> = ({ data }) => {
  const { title, Image1, Image2, describation, btnTitle } = data;

  return (
    <section className="w-full relative overflow-hidden h-[74dvh] lg:h-[100dvh] ">
      <div className="container mx-auto">
        {/* Mobile view - stacked layout */}
        <div className="flex flex-col lg:hidden items-center text-center">
          {/* Title section */}
          <div className="w-full flex flex-col  items-end text-right">
            <div className="w-36">
              <Title title={title} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mt-4">
              Accelerate Your Business with{" "}
              <span className="text-blue-600">Harichtech</span>
            </h1>
          </div>

          {/* Main Image */}
          <div className="w-full mb-6">
            <div className="relative hidden lg:block">
              <Image
                src={Image1}
                alt="Main Image"
                width={600}
                className="w-full rounded-xl object-contain"
              />
            </div>
          </div>

          {/* Floating Card for mobile */}
          <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={Image2}
                alt="Card Image"
                className="w-full h-full object-cover"
                fill
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-left text-gray-700 mb-6 leading-relaxed">
                {describation}
              </p>
              <div className="flex justify-start">
                <Button text={btnTitle} />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout - hidden on mobile */}
        <div className="hidden lg:block">
          <div className="flex flex-row items-start gap-16 relative">
            {/* Left Image Container */}
            <div className="w-1/2">
              <div className="relative">
                <Image
                  src={Image1}
                  alt="Main Image"
                  width={600}
                  height={450}
                  className="w-full rounded-xl object-cover"
                />
                {/* Decorative element */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 opacity-20 rounded-full z-0"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-1/2 relative z-10 text-right pl-12">
              {/* Title badge */}
              <div className="inline-block ">
                <Title title={title} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-6">
                Accelerate Your Business with{" "}
                <span className="text-blue-600">Harichtech</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card - desktop only */}
      <div className="hidden lg:block absolute right-28 w-3/5 top-44 z-20">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-64">
            <Image
              src={Image2}
              alt="Card Image"
              className="w-full h-full object-cover"
              fill
            />
          </div>

          <div className="p-8">
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              {describation}
            </p>
            <Button text={btnTitle} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnownMore;
