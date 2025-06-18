
import Image, { StaticImageData } from "next/image";

interface MainTitleProps {
  mainTitle: {
    title: string;
    subTitle: string;
    Banner: string | StaticImageData;
  };
}

const MainTitle = ({ mainTitle }: MainTitleProps) => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src={mainTitle.Banner}
        alt="Banner"
        fill
        className="object-cover z-0"
        priority
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Title and Subtitle */}
      <div className="relative z-20 px-4 max-w-4xl w-full flex flex-col items-center gap-4">
        {/* Title inside white box with gradient text */}
        <div className="bg-white px-6 py-3 rounded-md inline-block">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
            {mainTitle.title}
          </h1>
        </div>

        {/* Subtitle in plain white text */}
        <p className="text-white text-xl md:text-3xl mt-2 max-w-xl">
          {mainTitle.subTitle}
        </p>
      </div>
    </section>
  );
};

export default MainTitle;
