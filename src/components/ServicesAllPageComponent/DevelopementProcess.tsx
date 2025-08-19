import Image, { StaticImageData } from "next/image";

interface DevelopmentProcessProps {
  title: string;
  blueTitle: string;
  description: string;
  banner: StaticImageData; // image path
}

export const DevelopmentProcess: React.FC<DevelopmentProcessProps> = ({
  title,
  blueTitle,
  description,
  banner,
}) => {
  return (
    <section className="py-20">
      <div className="text-center mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          {title}{" "}
          <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">
            {blueTitle}
          </span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">{description}</p>

        {/* Image below description */}
        <Image
          src={banner}
          alt="Development Process Banner"
          className="w-full h-auto rounded-2xl"
          
        />
      </div>
    </section>
  );
};
