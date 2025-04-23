import React from "react";
import Image, { StaticImageData } from "next/image";
import RoutesLogo from "../../../public/SVG/Routelogo.svg";
import Button from "@/components/Button"
interface MainTitleSectionProps {
  data: {
    subTitle: string;
    btnButton: string;
    Img1: string | StaticImageData;
    Img2: string | StaticImageData;
  };
}

const MainTitleSection: React.FC<MainTitleSectionProps> = ({ data }) => {
  const { subTitle, btnButton, Img1, Img2 } = data;

  return (
    <div className="w-full min-h-screen flex justify-center items-center relative py-16 px-5 overflow-hidden">
      <div className="w-full max-w-5xl  text-left">
        {/* Main Title Section */}
        <h1 className="text-4xl md:text-5xl lg:text-[70px] font-bold leading-tight">
          Thinking The High Quality
          <div className="flex justify-left items-center flex-wrap mt-4 ">
            <span className="text-blue-500 mr-2">Websites</span>
            {Img1 && (
              <div className="relative inline-block h-12 w-24 md:h-14 md:w-36 overflow-hidden rounded-md mx-3">
                <Image
                  src={Img1}
                  alt="Website Image"
                  width={190}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
            <span className="mx-2">and</span>
            <span className="text-blue-500 mr-2">App</span>
            {Img2 && (
              <div className="relative inline-block h-12 w-30 md:h-14 md:w-36 overflow-hidden rounded-md mx-3">
                <Image
                  src={Img2}
                  alt="App Image"
                  width={190}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        </h1>

        {/* Subtitle */}

        <div className="w-full max-w-3xl mx-auto mt-8 text-right">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {subTitle}
          </p>
        </div>

        {/* Button */}
        <div className="w-full flex max-w-3xl justify-end mt-8 mx-auto">
        <Button text={btnButton}/>
        </div>
      </div>
      <div className="absolute bottom-18 right-30 w-[1px] h-screen bg-blue-300 opacity-50" />

      {/* Light background circular element */}
      <div className="absolute top-0 left-0 w-32 h-64 md:w-64 md:h-96 opacity-10 -z-10">
        <div className="w-full h-full border-2 border-blue-300 rounded-full transform translate-x-[-50%] translate-y-[-30%]"></div>
      </div>

      {/* Bottom-left logo with rotating animation and lines */}
      <div className="absolute bottom-10 left-40 z-0 flex items-end">
        <Image
          src={RoutesLogo}
          alt="Routes Logo"
          width={80}
          height={80}
          className="z-10 animate-spinSlow"
        />

        {/* Horizontal line */}
        <div className="absolute bottom-[30px] left-10 h-[1px] w-screen bg-blue-300 opacity-50" />
        <div className="absolute bottom-[30px] right-10 h-[1px] w-screen bg-blue-300 opacity-50 w-full" />

        {/* Vertical line */}
        <div className="absolute bottom-10 left-[30px] w-[1px] h-screen bg-blue-300 opacity-50" />
      </div>
    </div>
  );
};

export default MainTitleSection;
