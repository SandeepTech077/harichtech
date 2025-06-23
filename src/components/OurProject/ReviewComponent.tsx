import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface ReviewData {
  Textcolor: string;
  Bordercolor: string;
  backgroundColor: string;
  icon?: StaticImageData | string;
  connectIcon?: StaticImageData | string;
  happyClintIcon?: StaticImageData | string;
  profileImage?: StaticImageData | string;
  describation: string;
}

interface ReviewComponentProps {
  data: ReviewData;
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({ data }) => {
  return (
    <section className="py-16 ">
      <div className="relative w-full h-[100vh] bg-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Left corner connect icon */}
        {data.connectIcon && (
          <div className="absolute top-4 left-4 lg:top-40  lg:left-10 z-10">
            <div className="relative w-10 h-10 md:w-32 md:h-32 cursor-pointer p-2 hover:scale-110 transition-transform duration-200">
              <Image
                src={data.connectIcon}
                alt="Connect"
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Right corner happy client icon */}
        {data.happyClintIcon && (
          <div className="absolute top-4 right-4 lg:top-70 lg:right-10 z-10">
            <div className="relative w-10 h-10 lg:w-32 lg:h-32 cursor-pointer  p-2 hover:scale-110 transition-transform duration-200">
              <Image
                src={data.happyClintIcon}
                alt="Happy Client"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Center content area */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div
            className={`relative ${data.backgroundColor} rounded-t-[100px] min-h-[70vh] h-100 rounded-b-[200px] p-6 sm:p-8 max-w-2xl w-full mx-auto   border border-white/20`}
          >
            {/* Profile image positioned half on background, half on content area */}
            {data.profileImage && (
              <div className="absolute -top-6 lg:-top-16 cursor-pointer   left-1/2 transform -translate-x-1/2 z-20">
                <div
                  className={`${data.Bordercolor} w-12 h-12 lg:w-30 lg:h-30 rounded-full p-0.5 sm:p-1 shadow-lg hover:scale-105 transition-transform duration-200`}
                 
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={data.profileImage}
                      alt="Profile"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Top icon in the middle */}
            {data.icon && (
              <div className="flex justify-left mb-4 mt-8 ms-6 sm:mt-6">
                <div className="relative w-6 h-6 lg:w-12 lg:h-12 opacity-80 hover:opacity-100  transition-opacity duration-200">
                  <Image
                    src={data.icon}
                    alt="Review icon"
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            <div className="text-center">
              <p
                className={` ${data.Textcolor} text-[16px] md:text-[18px] leading-relaxed font-medium tracking-wide`}
               
              >
                {data.describation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewComponent;
